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
        className="pointer-events-none absolute -left-20 bottom-0 h-[280px] w-[280px] rounded-full border-2 border-[#0A0A0A] bg-lime-200"
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
                <span className="z-10 grid h-11 w-11 shrink-0 place-items-center rounded-lg border-2 border-[#0A0A0A] bg-yellow-300 text-[#0A0A0A] shadow-[3px_3px_0_0_#0A0A0A]">
                  <Briefcase className="h-4 w-4" />
                </span>
                {index < experience.length - 1 && (
                  <span
                    className="absolute top-11 h-full w-[3px] bg-[#0A0A0A]/25"
                    aria-hidden
                  />
                )}
              </div>

              <div className="glass flex-1 rounded-xl p-6 sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-[#0A0A0A]">
                    {entry.role}
                  </h3>
                  <span className="font-mono text-xs font-bold text-orange-600">
                    {entry.period}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-bold text-orange-600">{entry.org}</p>
                <ul className="mt-4 space-y-2">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm font-medium text-[#0A0A0A]/60"
                    >
                      <span className="mt-[7px] h-2 w-2 shrink-0 rotate-45 bg-lime-500" />
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
