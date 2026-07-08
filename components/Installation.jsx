import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import ScrollReveal from "./ScrollReveal.jsx";

const installMethods = [
  // {
  //   id: "brew",
  //   label: "Homebrew",
  //   code: "brew install bhavya-dang/pkgui/pkgui",
  //   highlight: "brew",
  // },
  {
    id: "go",
    label: "Go",
    code: "go install github.com/bhavya-dang/pkgui@latest",
    highlight: "go",
  },
  {
    id: "script",
    label: "install.sh",
    code: "curl -sSL https://raw.githubusercontent.com/bhavya-dang/pkgui/main/install.sh | sh",
    highlight: "curl",
  },
  {
    id: "manual",
    label: "Manual",
    code: 'git clone https://github.com/bhavya-dang/pkgui.git\ncd pkgui\ngo build -o build/pkgui .\ncp build/pkgui "$GOPATH/bin/pkgui"',
    highlight: "git",
  },
];

function CodeBlock({ code, lang }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between rounded-t-xl border border-[var(--border)] bg-[var(--surface-raised)] px-4 py-2">
        <span className="font-mono text-xs text-[var(--text-muted)]">
          {lang}
        </span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs text-[var(--text-muted)] transition-[color] duration-150 active:scale-[0.96] hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
          aria-label={copied ? "Copied" : "Copy to clipboard"}
        >
          {copied ? (
            <>
              <Check className="size-3.5" strokeWidth={2} />
              Copied
            </>
          ) : (
            <>
              <Copy className="size-3.5" strokeWidth={1.8} />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto rounded-b-xl border-x border-b border-[var(--border)] bg-[#0c1017] p-4 font-mono text-sm leading-relaxed text-[#dce1e8]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

const tabVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.06, ease: [0.2, 0, 0.05, 1] },
  }),
};

export default function Installation() {
  const [active, setActive] = useState("go");

  const current = installMethods.find((m) => m.id === active);

  return (
    <ScrollReveal>
      <section id="install" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0.05, 1] }}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            Installation
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
            Get started in seconds.
          </h2>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          <div className="mb-4 flex gap-1 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-1">
            {installMethods.map((method, idx) => (
              <motion.button
                key={method.id}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={tabVariants}
                onClick={() => setActive(method.id)}
                className={`flex-1 rounded-lg px-2 py-2 text-xs sm:px-3 sm:text-sm font-medium transition-[background,color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] ${
                  active === method.id
                    ? "bg-[var(--primary)] text-white shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {method.label}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0, 0.05, 1] }}
          >
            <CodeBlock code={current.code} lang={current.highlight} />
          </motion.div>

          <p className="mt-4 text-center text-xs text-[var(--text-muted)]">
            Requires Go 1.25+.
          </p>
        </div>
      </section>
    </ScrollReveal>
  );
}
