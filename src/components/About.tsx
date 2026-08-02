import { motion, type Variants } from "framer-motion";
import { GraduationCap, Medal } from "lucide-react";
import { education } from "../data/content";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative scroll-mt-28 py-24 sm:py-32"
    >
      <div className="dot-field-soft" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[520px] -translate-x-1/2 rounded-full border-2 border-[#0A0A0A] bg-yellow-200"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeUp}
              className="font-mono text-xs font-bold tracking-[0.3em] text-orange-600"
            >
              01 — About &amp; Education
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Foundations in <span className="text-gradient">finance</span>,
              trained to question numbers.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 leading-relaxed font-medium text-[#0A0A0A]/60"
            >
              Accounting &amp; finance student at IBA Karachi, charting a path
              into equity research through the CFA program — coursework in
              modelling, M&amp;A, security analysis and reporting, plus
              hands-on leadership in the campus finance community.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="glass rounded-xl p-7 sm:p-9"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-xl font-bold text-[#0A0A0A]">
                  {education.school}
                </p>
                <p className="mt-1 font-medium text-[#0A0A0A]/60">{education.degree}</p>
              </div>
              <span className="shrink-0 rounded-lg border-2 border-[#0A0A0A] bg-orange-300 px-3 py-1.5 font-mono text-[11px] font-bold tracking-wider text-[#0A0A0A] shadow-[2px_2px_0_0_#0A0A0A]">
                {education.designation}
              </span>
            </div>

            <div className="mt-6 flex items-center gap-2 font-mono text-sm font-bold text-orange-600">
              <GraduationCap className="h-4 w-4" />
              {education.period}
            </div>
            <p className="mt-1 font-mono text-xs font-medium text-[#0A0A0A]/40">
              {education.graduation}
            </p>

            <p className="mt-8 font-mono text-[11px] font-bold tracking-[0.25em] text-[#0A0A0A]/40">
              COURSEWORK
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <span key={course} className="chip">
                  {course}
                </span>
              ))}
            </div>

            <p className="mt-8 font-mono text-[11px] font-bold tracking-[0.25em] text-[#0A0A0A]/40">
              ACTIVITIES
            </p>
            <ul className="mt-3 space-y-3">
              {education.activities.map((activity) => (
                <li
                  key={activity}
                  className="flex items-start gap-3 text-sm font-medium text-[#0A0A0A]/70"
                >
                  <Medal className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                  {activity}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
