import { motion, type Variants } from "framer-motion";
import { ChevronDown, Download, Mail } from "lucide-react";
import { profile } from "../data/content";
import HeroCanvas from "./HeroCanvas";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <HeroCanvas />

      {/* moving dotted background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="dot-field" />
        <div
          className="dot-color left-[8%] top-[18%] h-2.5 w-2.5 bg-blue-400/70"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="dot-color left-[22%] top-[62%] h-2 w-2 bg-violet-400/80"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="dot-color left-[55%] top-[14%] h-3 w-3 bg-pink-400/60"
          style={{ animationDelay: "-8s" }}
        />
        <div
          className="dot-color left-[72%] top-[48%] h-2 w-2 bg-amber-300/70"
          style={{ animationDelay: "-2s" }}
        />
        <div
          className="dot-color left-[86%] top-[26%] h-2.5 w-2.5 bg-cyan-300/60"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="dot-color left-[42%] top-[80%] h-2 w-2 bg-fuchsia-400/70"
          style={{ animationDelay: "-10s" }}
        />
      </div>

      {/* ambient gradient glows behind the text */}
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-[8%] h-[380px] w-[380px] rounded-full bg-pink-600/15 blur-[120px]"
        aria-hidden
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-10"
      >
        <motion.p
          variants={item}
          className="font-mono text-xs italic tracking-[0.35em] text-amber-400 sm:text-sm"
        >
          {"// "}Aspiring Investment Banker
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl"
        >
          <span className="text-white">Muhammad</span>
          <br />
          <span className="text-gradient">Ali Raza</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg text-white/60 sm:text-xl"
        >
          {profile.role}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href={`mailto:${profile.email}`} className="pill-primary px-8!">
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href={profile.resumeHref}
            download={profile.resumeFileName}
            className="pill-ghost px-8!"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-white/40 transition-colors hover:text-white/80"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.a>
    </section>
  );
}
