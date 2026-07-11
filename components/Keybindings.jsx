import { motion } from "framer-motion";
import { Search, CornerDownLeft, X, LogOut } from "lucide-react";
import ScrollReveal from "./ScrollReveal.jsx";

const bindings = [
  {
    keys: ["↑", "↓"],
    label: "↑ / ↓",
    action: "Navigate package list",
    icon: null,
  },
  {
    keys: ["/"],
    label: "/",
    action: "Start search (type to filter)",
    icon: Search,
  },
  { keys: ["Esc"], label: "Esc", action: "Exit search", icon: X },
  {
    keys: ["->", "<-"],
    label: "-> / <-",
    action: "Navigate between package managers",
    // icon: X,
  },
  { keys: ["q", "Ctrl+C"], label: "q / Ctrl+C", action: "Quit", icon: LogOut },
];

const rowVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.2, 0, 0.05, 1] },
  }),
};

export default function Keybindings() {
  return (
    <ScrollReveal>
      <section className="px-4 py-16 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-2xl">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0.05, 1] }}
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              Keybindings
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
              Navigate like a pro.
            </h2>
          </motion.div>

          <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
            {bindings.map((binding, idx) => {
              const Icon = binding.icon;
              return (
                <motion.div
                  key={binding.label}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={rowVariants}
                  className={`flex items-center gap-3 px-4 py-3 transition-[background] duration-150 hover:bg-[var(--surface)] sm:gap-4 sm:px-5 sm:py-3.5 ${
                    idx < bindings.length - 1
                      ? "border-b border-[var(--border)]"
                      : ""
                  }`}
                >
                  <div className="flex shrink-0 items-center gap-1.5">
                    {binding.keys.map((key) => (
                      <kbd
                        key={key}
                        className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 font-mono text-[11px] font-medium text-[var(--text)] shadow-sm sm:px-2.5 sm:py-1 sm:text-xs"
                      >
                        {key}
                      </kbd>
                    ))}
                  </div>
                  <div className="flex min-w-0 items-center gap-2 text-xs text-[var(--text-muted)] sm:text-sm">
                    {Icon && (
                      <Icon className="size-3.5 shrink-0" strokeWidth={1.8} />
                    )}
                    <span className="truncate">{binding.action}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
