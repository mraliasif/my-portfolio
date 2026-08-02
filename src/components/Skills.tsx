import { motion } from "framer-motion";
import { skillGroups } from "../data/content";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative scroll-mt-28 py-24 sm:py-32"
    >
      <div className="dot-field-soft" aria-hidden />
      <div
        className="pointer-events-none absolute right-[-10%] top-1/3 h-[300px] w-[300px] rounded-full border-2 border-[#0A0A0A] bg-orange-200"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-mono text-xs font-bold tracking-[0.3em] text-orange-600">
            04 — Skills
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Technical <span className="text-gradient">Skills</span>.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="glass rounded-xl p-7 transition-[transform,box-shadow] duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#0A0A0A]"
            >
              <p className="font-mono text-xs font-bold tracking-[0.25em] text-orange-600">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-lg font-bold text-[#0A0A0A]">
                {group.group}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
