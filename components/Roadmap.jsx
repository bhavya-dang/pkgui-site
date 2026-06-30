import { motion } from "framer-motion";
import { Check, CircleDot, Clock3 } from "lucide-react";
import ScrollReveal from "./ScrollReveal.jsx";

const roadmapItems = [
  {
    title: "Homebrew Cask Support",
    desc: "Manage GUI applications installed via Homebrew Cask alongside your formulae.",
    status: "In Progress",
    tone: "gold",
  },
  {
    title: "npm / yarn / pnpm",
    desc: "Browse and manage Node.js packages from npm and its alternatives.",
    status: "Planned",
    tone: "muted",
  },
  {
    title: "pip",
    desc: "Manage Python packages installed via pip",
    status: "Planned",
    tone: "muted",
  },
  {
    title: "Upgrade / Remove",
    desc: "Upgrade and remove packages across multiple PMs, directly from the TUI",
    status: "Planned",
    tone: "muted",
  },
];

const statusStyles = {
  gold: "border-[#D29B49]/35 bg-[#D29B49]/8 text-[#E0B66F]",
  muted: "border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)]",
  green: "border-[#7FA66A]/35 bg-[#7FA66A]/8 text-[#B5CCA7]",
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.2, 0, 0.05, 1] },
  }),
};

export default function Roadmap() {
  return (
    <ScrollReveal>
      <section id="roadmap" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0.05, 1] }}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            Roadmap
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
            What&apos;s coming next.
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {roadmapItems.map((item, idx) => (
            <motion.div
              key={item.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-[var(--surface)] p-5 shadow-[0_0_0_1px_var(--border)] transition-[box-shadow] duration-200 hover:shadow-[0_0_0_1px_var(--primary),0_0_30px_rgba(91,192,190,0.06)] sm:p-6"
            >
              <div className="mb-3">
                <div
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs ${statusStyles[item.tone]}`}
                >
                  {item.tone === "gold" ? (
                    <Clock3 className="size-3" strokeWidth={2} />
                  ) : (
                    <CircleDot className="size-3" strokeWidth={2} />
                  )}
                  {item.status}
                </div>
              </div>
              <h3 className="text-lg font-medium text-[var(--text)]">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-[var(--text-muted)]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
