import { useState } from "react";
import { Moon, Sun, Terminal, Menu, X } from "lucide-react";
import { useTheme } from "../src/ThemeContext.jsx";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#install", label: "Install" },
  { href: "#roadmap", label: "Roadmap" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 backdrop-blur-2xl backdrop-saturate-150 shadow-lg shadow-black/[0.03]">
      <div className="flex items-center justify-between gap-3 px-3 py-1.5 sm:gap-8 sm:px-5 sm:py-2.5">
        <a
          href="#"
          className="group flex items-center gap-2.5"
          aria-label="pkgui home"
        >
          <span className="grid size-8 place-items-center rounded-lg border border-[var(--primary)]/30 bg-[var(--surface)] text-[var(--primary)]">
            <Terminal className="size-3.5" strokeWidth={1.8} />
          </span>
          <span className="text-sm font-semibold tracking-[0.15em] text-[var(--text)]">
            pkgui
          </span>
        </a>

        <nav className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2.5 text-sm text-[var(--text-muted)] transition-[color] duration-200 hover:text-[var(--text)] focus-visible:text-[var(--primary)] focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <button
            onClick={toggleTheme}
            className="grid size-9 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-[border,color] duration-200 active:scale-[0.96] hover:border-[var(--primary)]/50 hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] sm:size-10"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <div className="relative size-4">
              <Sun
                className="absolute inset-0 size-4 transition-[scale,opacity,filter] duration-300"
                style={{
                  scale: theme === "dark" ? "1" : "0.25",
                  opacity: theme === "dark" ? "1" : "0",
                  filter: theme === "dark" ? "blur(0px)" : "blur(4px)",
                }}
                strokeWidth={1.8}
              />
              <Moon
                className="size-4 transition-[scale,opacity,filter] duration-300"
                style={{
                  scale: theme === "light" ? "1" : "0.25",
                  opacity: theme === "light" ? "1" : "0",
                  filter: theme === "light" ? "blur(0px)" : "blur(4px)",
                }}
                strokeWidth={1.8}
              />
            </div>
          </button>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="grid size-9 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-[border,color] duration-200 active:scale-[0.96] hover:border-[var(--primary)]/50 hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] sm:size-10 sm:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="size-4" strokeWidth={1.8} />
            ) : (
              <Menu className="size-4" strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-[var(--border)] px-4 pb-3 pt-2 sm:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-[var(--text-muted)] transition-[color] duration-200 hover:text-[var(--text)] focus-visible:text-[var(--primary)] focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
