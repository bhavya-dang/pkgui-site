import { motion } from "framer-motion";
import { Search, Package, Keyboard, Boxes } from "lucide-react";
import ScrollReveal from "./ScrollReveal.jsx";

const features = [
  {
    icon: Boxes,
    title: "Multi-PM Support",
    desc: "Manage packages from Homebrew, npm, pip, and more - all from a single TUI.",
  },
  {
    icon: Search,
    title: "Fuzzy Search",
    desc: "Press / and start typing. Instantly filter through hundreds of installed packages.",
  },
  {
    icon: Package,
    title: "Rich Detail View",
    desc: "See version, description, homepage, license, and dependencies at a glance.",
  },
  {
    icon: Keyboard,
    title: "Keyboard Native",
    desc: "Navigate with arrow keys, search with /, quit with q. No mouse needed.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.2, 0, 0.05, 1] },
  }),
};

export default function Features() {
  return (
    <ScrollReveal>
      <section id="features" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0.05, 1] }}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            Features
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
            Everything you need to manage packages.
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-[border-color,box-shadow] duration-200 hover:border-[var(--primary)]/40 hover:shadow-[0_0_30px_rgba(91,192,190,0.06)] sm:p-6"
              >
                <div className="mb-4 grid size-11 place-items-center rounded-xl border border-[var(--primary)]/20 bg-[var(--primary)]/8 text-[var(--primary)]">
                  <Icon className="size-5" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-medium text-[var(--text)] sm:text-xl">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </ScrollReveal>
  );
}
