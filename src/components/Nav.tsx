import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`nav-pill relative flex w-full items-center justify-center px-10 py-2.5 transition-all duration-500 ease-out md:w-fit ${
          scrolled
            ? "is-scrolled rounded-xl border-2 border-transparent md:bg-white md:shadow-[5px_5px_0_0_#0A0A0A]"
            : "rounded-xl border-2 border-transparent bg-transparent"
        }`}
      >
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-semibold text-[#0A0A0A]/60 transition-colors hover:bg-[#0A0A0A]/5 hover:text-[#0A0A0A]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="absolute right-4 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg border-2 border-[#0A0A0A] bg-white text-[#0A0A0A]/80 shadow-[2px_2px_0_0_#0A0A0A] transition-colors hover:text-[#0A0A0A] sm:right-5 md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-[4.75rem] rounded-xl border-2 border-[#0A0A0A] bg-white p-3 shadow-[6px_6px_0_0_#0A0A0A] md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-semibold text-[#0A0A0A]/70 transition-colors hover:bg-[#0A0A0A]/5 hover:text-[#0A0A0A]"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
