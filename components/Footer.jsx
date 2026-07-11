import { Heart } from "lucide-react";

const footerLinks = (
  <div className="flex gap-5">
    <a
      className="py-2 text-sm text-[var(--text-muted)] transition-[color] duration-200 hover:text-[var(--primary)] focus-visible:text-[var(--primary)] focus-visible:outline-none"
      href="https://github.com/bhavya-dang/pkgui"
    >
      GitHub
    </a>
    <a
      className="py-2 text-sm text-[var(--text-muted)] transition-[color] duration-200 hover:text-[var(--primary)] focus-visible:text-[var(--primary)] focus-visible:outline-none"
      href="https://github.com/bhavya-dang/pkgui/issues"
    >
      Issues
    </a>
    <a
      className="py-2 text-sm text-[var(--text-muted)] transition-[color] duration-200 hover:text-[var(--primary)] focus-visible:text-[var(--primary)] focus-visible:outline-none"
      href="https://github.com/bhavya-dang/pkgui/releases"
    >
      Releases
    </a>
  </div>
);

export default function Footer() {
  return (
    <footer>
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, #5bc0be 0%, #3b9b99 25%, #e4b95b 50%, #3b9b99 75%, #5bc0be 100%)",
        }}
        aria-hidden="true"
      />
      <div className="px-4 py-8 sm:px-8 lg:px-10">
        <div className="mt-8 flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-5">
          <div className="space-y-2">
            <p className="flex items-center gap-1.5 text-[var(--text-muted)]">
              Built with <Heart className="size-3.5 text-[var(--primary)]" fill="currentColor" stroke="none" /> using{" "}
              <a
                href="https://github.com/charmbracelet/bubbletea"
                className="font-medium text-[var(--primary)] underline underline-offset-2 decoration-dotted transition-[color] duration-200 hover:text-[var(--primary-dim)] focus-visible:text-[var(--primary-dim)] focus-visible:outline-none"
              >
                Bubble Tea
              </a>
              .
            </p>
            <p className="text-xs text-[var(--text-muted)]/60">
              Copyright &copy; {new Date().getFullYear()} pkgui. MIT License.
            </p>
          </div>
          {footerLinks}
        </div>
      </div>
    </footer>
  );
}
