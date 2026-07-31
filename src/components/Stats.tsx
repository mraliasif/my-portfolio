import { motion } from "framer-motion";
import { stats } from "../data/content";
import CountUp from "./CountUp";

export default function Stats() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative py-16 sm:py-20"
      aria-label="Key numbers"
    >
      <div className="dot-field-soft" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <motion.dl
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="glass grid grid-cols-2 gap-px overflow-hidden rounded-3xl sm:grid-cols-3 lg:grid-cols-5"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="flex flex-col items-center gap-2 bg-[#0B0B16]/60 px-4 py-8 text-center"
            >
              <dd className="font-mono text-3xl font-semibold text-amber-400 sm:text-4xl">
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </dd>
              <dt className="text-xs leading-snug text-white/50">{stat.label}</dt>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </motion.section>
  );
}
