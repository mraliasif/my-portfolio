import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative scroll-mt-28 overflow-hidden pt-28 pb-8 sm:pt-36 sm:pb-8"
    >
      <div className="dot-field-soft" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[150px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="font-mono text-xs tracking-[0.3em] text-violet-400"
          >
            05 — Contact
          </motion.p>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="mt-5 font-display text-5xl font-bold tracking-tight sm:text-6xl"
          >
            Let's talk <span className="text-gradient">numbers</span>.
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="mx-auto mt-6 max-w-xl text-white/60"
          >
            Open to equity research, finance and modelling conversations —
            reach out any time.
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a href={`mailto:${profile.email}`} className="pill-primary px-8! text-base">
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a href={profile.phoneHref} className="pill-ghost text-base">
              <Phone className="h-4 w-4" />
              Phone
            </a>
            <a href={profile.linkedinHref} className="pill-ghost text-base">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>

      <footer className="relative z-[1] mt-24 flex flex-wrap items-center justify-center gap-3 border-t border-white/5 px-[clamp(20px,7vw,100px)] py-7">
        <p className="text-xs font-medium text-white/45">
          © 2026{" "}            <span className="text-gradient font-semibold">Muhammad Ali Raza</span>
          </p>
          <span className="text-white/30" aria-hidden>
            |
          </span>
          <p className="text-xs font-medium text-white/45">
            IBA Karachi · CFA Candidate · PSX Research
          </p>
      </footer>
    </motion.section>
  );
}
