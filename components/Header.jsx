import { Moon, Sun, Terminal } from "lucide-react";
import { useTheme } from "../src/ThemeContext.jsx";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 backdrop-blur-2xl backdrop-saturate-150 shadow-lg shadow-black/[0.03]">
      <div className="flex items-center justify-between gap-8 px-4 py-2 sm:px-5 sm:py-2.5">
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
          <a
            href="#features"
            className="text-sm text-[var(--text-muted)] transition-[color] duration-200 hover:text-[var(--text)] focus-visible:text-[var(--primary)] focus-visible:outline-none"
          >
            Features
          </a>
          <a
            href="#install"
            className="text-sm text-[var(--text-muted)] transition-[color] duration-200 hover:text-[var(--text)] focus-visible:text-[var(--primary)] focus-visible:outline-none"
          >
            Install
          </a>
          <a
            href="#roadmap"
            className="text-sm text-[var(--text-muted)] transition-[color] duration-200 hover:text-[var(--text)] focus-visible:text-[var(--primary)] focus-visible:outline-none"
          >
            Roadmap
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="grid size-8 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-[border,color] duration-200 active:scale-[0.96] hover:border-[var(--primary)]/50 hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <div className="relative size-3.5">
              <Sun
                className="absolute inset-0 size-3.5 transition-[scale,opacity,filter] duration-300"
                style={{
                  scale: theme === "dark" ? "1" : "0.25",
                  opacity: theme === "dark" ? "1" : "0",
                  filter: theme === "dark" ? "blur(0px)" : "blur(4px)",
                }}
                strokeWidth={1.8}
              />
              <Moon
                className="size-3.5 transition-[scale,opacity,filter] duration-300"
                style={{
                  scale: theme === "light" ? "1" : "0.25",
                  opacity: theme === "light" ? "1" : "0",
                  filter: theme === "light" ? "blur(0px)" : "blur(4px)",
                }}
                strokeWidth={1.8}
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
