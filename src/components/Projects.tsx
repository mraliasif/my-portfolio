import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative scroll-mt-28 py-24 sm:py-32"
    >
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="arrow-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="45%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="dot-field-soft" aria-hidden />
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[380px] w-[380px] rounded-full bg-blue-600/10 blur-[130px]"
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
            02 — Research &amp; Projects
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Work that reads like a{" "}
            <span className="text-gradient">sell-side note</span>.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
              className="tilt glass group flex flex-col rounded-3xl p-7 sm:p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="chip">{project.tag}</span>
                {project.grade && (
                  <span className="font-mono text-xs font-semibold text-amber-300">
                    {project.grade}
                  </span>
                )}
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold text-white">
                {project.title}
              </h3>
              {project.company && (
                <p className="mt-1.5 text-sm font-medium text-violet-300/80">
                  {project.company}
                </p>
              )}

              <p className="mt-4 text-sm leading-relaxed text-white/55">
                {project.summary}
              </p>

              {project.metrics && project.metrics.length > 0 && (
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-2.5 text-center"
                    >
                      <div className="font-display text-lg font-bold text-white">
                        {metric.value}
                      </div>
                      <div className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-white/45">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {project.bullets && project.bullets.length > 0 && (
                <ul className="mt-5 space-y-2.5">
                  {project.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm text-white/65"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-pink-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-semibold transition-opacity hover:opacity-90"
              >
                <span className="text-gradient">View case</span>
                <ArrowUpRight
                  stroke="url(#arrow-grad)"
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
