import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Check, Copy } from "lucide-react";
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

const BREW_CMD = "brew install bhavya-dang/pkgui/pkgui";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(BREW_CMD);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="relative mx-auto w-full max-w-screen-2xl px-5 pt-28 pb-12 sm:px-8 sm:pt-36 sm:pb-16 lg:min-h-screen lg:flex lg:items-center lg:px-10">
      <div className="w-full lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 lg:items-start lg:text-left lg:order-2 lg:max-w-none lg:mx-0 lg:mb-0">
          <motion.h1
            className="font-display text-balance text-4xl font-semibold mb-7 tracking-tight text-[var(--text)] sm:text-6xl lg:text-6xl xl:text-7xl"
            {...fadeUp(0.1)}
          >
            Manage all your packages.
            <br />
            <span className="block mt-2 sm:mt-3 text-[var(--accent)]">One terminal.</span>
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
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
            {...fadeUp(0.4)}
          >
            <motion.a
              href="https://github.com/bhavya-dang/pkgui"
              className="inline-flex w-full h-11 items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] px-4 text-sm font-medium text-white transition active:scale-[0.96] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
            >
              <Github className="size-4" strokeWidth={1.8} />
              View on GitHub
            </motion.a>

            <button
              onClick={handleCopy}
              className="group inline-flex h-11 items-center gap-2 rounded-2xl border border-[var(--border)] bg-[#0c1017] px-3.5 font-mono text-sm text-[#dce1e8] transition active:scale-[0.96] hover:border-[var(--primary)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
            >
              <span className="text-[var(--accent)] shrink-0">$</span>
              <span className="truncate">{BREW_CMD}</span>
              {copied ? (
                <Check
                  className="size-3.5 shrink-0 text-[var(--primary)]"
                  strokeWidth={2}
                />
              ) : (
                <Copy
                  className="size-3.5 shrink-0 text-[var(--text-muted)] transition-[color] duration-150 group-hover:text-[var(--primary)]"
                  strokeWidth={1.8}
                />
              )}
            </button>
          </motion.div>
        </div>

        <motion.div
          className="w-full max-w-4xl mx-auto lg:order-1 lg:max-w-none lg:mx-0 max-lg:hidden"
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.2, 0, 0.05, 1] }}
        >
          <TerminalPreview />
        </motion.div>
      </div>
    </section>
  );
}
