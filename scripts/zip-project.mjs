/**
 * Dependency-free project zipper.
 * Builds a valid ZIP archive of the project source (excluding node_modules,
 * dist, .git, .env* credential files and the output zip itself) using only
 * Node built-ins (zlib).
 *
 * Output: public/portfolio.zip (served by Vite at /portfolio.zip)
 *
 * Run: node scripts/zip-project.mjs
 */
import {
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(scriptDir, "..");

const EXCLUDE_DIRS = new Set(["node_modules", "dist", ".git", ".next", ".vercel"]);
const EXCLUDE_FILES = new Set(["portfolio.zip"]);

// Never ship credentials — drop any .env* file (.env, .env.local, .env.*)
const isSecretFile = (name) => name === ".env" || name.startsWith(".env.");

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (!EXCLUDE_DIRS.has(name)) walk(full, out);
    } else if (!EXCLUDE_FILES.has(name) && !isSecretFile(name)) {
      out.push(full);
    }
  }
  return out;
}

// --- CRC-32 ---------------------------------------------------------------
const crcTable = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

// --- Collect files --------------------------------------------------------
const files = walk(projectRoot).sort();
const localParts = [];
const centralEntries = [];
let offset = 0;

for (const file of files) {
  const rel = relative(projectRoot, file).split("\\").join("/");
  const data = readFileSync(file);
  const compressed = zlib.deflateRawSync(data, { level: 9 });
  const useDeflate = compressed.length < data.length;
  const method = useDeflate ? 8 : 0;
  const body = useDeflate ? compressed : data;
  const crc = crc32(data);
  const nameBuf = Buffer.from(rel, "utf8");

  // Local file header
  const local = Buffer.alloc(30);
  local.writeUInt32LE(0x04034b50, 0); // signature
  local.writeUInt16LE(20, 4); // version needed
  local.writeUInt16LE(0x0800, 6); // UTF-8 names
  local.writeUInt16LE(method, 8);
  local.writeUInt16LE(0, 10); // dos time
  local.writeUInt16LE(0, 12); // dos date
  local.writeUInt32LE(crc, 14);
  local.writeUInt32LE(body.length, 18); // compressed size
  local.writeUInt32LE(data.length, 22); // uncompressed size
  local.writeUInt16LE(nameBuf.length, 26); // name len
  local.writeUInt16LE(0, 28); // extra len

  localParts.push(local, nameBuf, body);
  centralEntries.push({
    nameBuf,
    method,
    crc,
    compSize: body.length,
    uncompSize: data.length,
    offset,
  });
  offset += 30 + nameBuf.length + body.length;
}

// --- Central directory ----------------------------------------------------
const centralStart = offset;
const centralParts = [];
for (const e of centralEntries) {
  const c = Buffer.alloc(46);
  c.writeUInt32LE(0x02014b50, 0); // signature
  c.writeUInt16LE(20, 4); // version made by
  c.writeUInt16LE(20, 6); // version needed
  c.writeUInt16LE(0x0800, 8); // UTF-8 names
  c.writeUInt16LE(e.method, 10);
  c.writeUInt16LE(0, 12); // dos time
  c.writeUInt16LE(0, 14); // dos date
  c.writeUInt32LE(e.crc, 16);
  c.writeUInt32LE(e.compSize, 20);
  c.writeUInt32LE(e.uncompSize, 24);
  c.writeUInt16LE(e.nameBuf.length, 28); // name len
  c.writeUInt16LE(0, 30); // extra len
  c.writeUInt16LE(0, 32); // comment len
  c.writeUInt16LE(0, 34); // disk start
  c.writeUInt16LE(0, 36); // internal attrs
  c.writeUInt32LE(0, 38); // external attrs
  c.writeUInt32LE(e.offset, 42);
  centralParts.push(c, e.nameBuf);
}
const centralBuf = Buffer.concat(centralParts);

// --- End of central directory ---------------------------------------------
const eocd = Buffer.alloc(22);
eocd.writeUInt32LE(0x06054b50, 0);
eocd.writeUInt16LE(0, 4); // disk number
eocd.writeUInt16LE(0, 6); // disk with central dir
eocd.writeUInt16LE(centralEntries.length, 8); // entries on this disk
eocd.writeUInt16LE(centralEntries.length, 10); // total entries
eocd.writeUInt32LE(centralBuf.length, 12);
eocd.writeUInt32LE(centralStart, 16);
eocd.writeUInt16LE(0, 20); // comment len

const zip = Buffer.concat([...localParts, centralBuf, eocd]);

// Safety: the archive must never contain credential files.
const leaked = files.filter((f) => {
  const base = relative(projectRoot, f).split("/").pop() ?? "";
  return isSecretFile(base);
});
if (leaked.length > 0) {
  console.error("Refusing to write zip — secret files would be included:", leaked);
  process.exit(1);
}

const outDir = join(projectRoot, "public");
const outPath = join(outDir, "portfolio.zip");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, zip);

console.log(`Wrote ${outPath}`);
console.log(`Files: ${files.length}, size: ${(zip.length / 1024 / 1024).toFixed(2)} MB`);
console.log("Secret files included: 0");
