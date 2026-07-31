import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative scroll-mt-28 py-24 sm:py-32"
    >
      <div className="dot-field-soft" aria-hidden />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-[340px] w-[340px] rounded-full bg-violet-600/10 blur-[130px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-violet-400">
            03 — Experience
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Work <span className="text-gradient">Experience</span>.
          </h2>
        </motion.div>

        <div className="mt-14">
          {experience.map((entry, index) => (
            <motion.div
              key={entry.role}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="relative flex gap-5 pb-10 last:pb-0 sm:gap-7"
            >
              <div className="relative flex flex-col items-center">
                <span className="z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-[#0B0B16] text-violet-300 shadow-lg shadow-violet-500/20">
                  <Briefcase className="h-4 w-4" />
                </span>
                {index < experience.length - 1 && (
                  <span
                    className="absolute top-11 h-full w-px bg-gradient-to-b from-violet-500/50 to-transparent"
                    aria-hidden
                  />
                )}
              </div>

              <div className="glass flex-1 rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {entry.role}
                  </h3>
                  <span className="font-mono text-xs text-amber-300">
                    {entry.period}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-violet-300/80">{entry.org}</p>
                <ul className="mt-4 space-y-2">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm text-white/60"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/70" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
