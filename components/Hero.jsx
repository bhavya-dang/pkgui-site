import { motion } from "framer-motion";
import { Github, Terminal } from "lucide-react";
import TerminalPreview from "./TerminalPreview.jsx";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20, filter: "blur(4px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, delay, ease: [0.2, 0, 0.05, 1] },
  },
});

export default function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-screen-2xl px-5 pt-28 pb-12 sm:px-8 sm:pt-36 sm:pb-16 lg:min-h-screen lg:flex lg:items-center lg:px-10">
      <div className="w-full lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <motion.div
          className="w-full max-w-4xl mx-auto mb-10 lg:max-w-none lg:mx-0 lg:mb-0"
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.2, 0, 0.05, 1] }}
        >
          <TerminalPreview />
        </motion.div>

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto lg:items-start lg:text-left lg:max-w-none lg:mx-0">
          <motion.h1
            className="text-balance text-4xl font-semibold leading-[1.04] tracking-tight text-[var(--text)] sm:text-6xl lg:text-6xl xl:text-7xl"
            {...fadeUp(0.1)}
          >
            Manage all your packages.
            <br />
            <span className="text-[var(--accent)]">One terminal.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-pretty text-base leading-7 text-[var(--text-muted)] sm:text-lg sm:leading-8"
            {...fadeUp(0.25)}
          >
            pkgui is a terminal UI that gives you a unified interface to browse,
            search, and manage packages across all your package managers — all
            without leaving your terminal.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            {...fadeUp(0.4)}
          >
            <motion.a
              href="https://github.com/bhavya-dang/pkgui"
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-2xl bg-[var(--primary)] px-6 text-sm font-medium text-white transition active:scale-[0.96] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
            >
              <Github className="size-4" strokeWidth={1.8} />
              View on GitHub
            </motion.a>

            <motion.a
              href="#install"
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 text-sm font-medium text-[var(--text)] transition active:scale-[0.96] hover:border-[var(--primary)]/50 hover:text-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
            >
              <Terminal className="size-4" strokeWidth={1.8} />
              Install Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
