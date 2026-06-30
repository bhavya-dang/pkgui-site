import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const packages = [
  {
    name: "git",
    version: "2.47.1",
    desc: "Distributed version control system",
    license: "GPL-2.0-only",
    homepage: "https://git-scm.com",
    deps: ["curl", "expat", "gettext", "pcre2", "zlib"],
  },
  {
    name: "curl",
    version: "8.11.0",
    desc: "Get a file from an HTTP, HTTPS or FTP server",
    license: "MIT",
    homepage: "https://curl.se",
    deps: ["openssl", "zlib", "brotli"],
  },
  {
    name: "wget",
    version: "1.25.0",
    desc: "Internet file retriever",
    license: "GPL-3.0-only",
    homepage: "https://www.gnu.org/software/wget",
    deps: ["openssl", "pcre2", "zlib"],
  },
  {
    name: "node",
    version: "23.5.0",
    desc: "JavaScript runtime built on V8",
    license: "MIT",
    homepage: "https://nodejs.org",
    deps: ["icu4c", "openssl", "zlib"],
  },
  {
    name: "python",
    version: "3.13.1",
    desc: "Interpreted, interactive, object-oriented language",
    license: "PSF-2.0",
    homepage: "https://www.python.org",
    deps: ["bzip2", "gdbm", "openssl", "readline", "sqlite", "xz", "zlib"],
  },
  {
    name: "ruby",
    version: "3.4.1",
    desc: "Object-oriented scripting language",
    license: "Ruby",
    homepage: "https://www.ruby-lang.org",
    deps: ["gdbm", "libyaml", "openssl", "readline", "zlib"],
  },
  {
    name: "vim",
    version: "9.1.0",
    desc: "Vi 'workalike' with many additional features",
    license: "Vim",
    homepage: "https://www.vim.org",
    deps: ["gettext", "lua", "python", "ruby"],
  },
  {
    name: "neovim",
    version: "0.10.3",
    desc: "Hyperextensible Vim-based text editor",
    license: "Apache-2.0",
    homepage: "https://neovim.io",
    deps: ["gettext", "libuv", "luv", "tree-sitter", "unibilium"],
  },
  {
    name: "tmux",
    version: "3.5a",
    desc: "Terminal multiplexer",
    license: "ISC",
    homepage: "https://tmux.github.io",
    deps: ["libevent", "ncurses"],
  },
  {
    name: "jq",
    version: "1.7.1",
    desc: "Command-line JSON processor",
    license: "MIT",
    homepage: "https://jqlang.org",
    deps: ["oniguruma"],
  },
];

const PHASE = { MAIN: 0, SEARCH: 1 };

export default function TerminalPreview() {
  const [phase, setPhase] = useState(PHASE.MAIN);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTyping, setSearchTyping] = useState("");
  const [cursorVisible, setCursorVisible] = useState(false);
  const containerRef = useRef(null);
  const mountedRef = useRef(true);
  const timersRef = useRef([]);

  const filtered = searchQuery
    ? packages.filter((p) => p.name.includes(searchQuery))
    : packages;

  useEffect(() => {
    mountedRef.current = true;
    const t = timersRef.current;
    t.length = 0;

    const add = (id) => {
      t.push(id);
      return id;
    };

    const cycle = setInterval(() => {
      if (!mountedRef.current) {
        clearInterval(cycle);
        return;
      }
      setSelectedIdx((i) => (i + 1) % packages.length);
    }, 900);
    add(cycle);

    add(
      setTimeout(() => {
        if (!mountedRef.current) return;
        setPhase(PHASE.SEARCH);
        setSelectedIdx(0);
        const searchTerm = "git";
        let charIdx = 0;
        const typing = setInterval(() => {
          if (!mountedRef.current) {
            clearInterval(typing);
            return;
          }
          charIdx++;
          setSearchTyping(searchTerm.slice(0, charIdx));
          if (charIdx >= searchTerm.length) {
            clearInterval(typing);
            setSearchQuery(searchTerm);
          }
        }, 180);
        add(typing);
      }, 12000),
    );

    add(
      setTimeout(() => {
        if (!mountedRef.current) return;
        setSearchQuery("");
        setSearchTyping("");
        setSelectedIdx(0);
        setPhase(PHASE.MAIN);
      }, 16000),
    );

    return () => {
      mountedRef.current = false;
      t.forEach((id) => {
        clearTimeout(id);
        clearInterval(id);
      });
      t.length = 0;
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const selectedPkg = packages[selectedIdx] || packages[0];

  return (
    <motion.div
      ref={containerRef}
      className="w-full max-w-4xl mx-auto overflow-hidden rounded-xl border border-[#1c2a3a] bg-[#0a0e14] shadow-[0_0_80px_rgba(45,212,191,0.08)]"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.2, 0, 0.05, 1] }}
    >
      {/* Title Bar */}
      <div className="flex items-center gap-3 border-b border-[#1c2a3a] bg-[#0f1720] px-4 py-2.5 select-none">
        <div className="flex items-center gap-1.5 mr-1">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        {/* <span className="font-mono text-xs font-medium tracking-wider text-[#5bc0be]">
          pkgui
        </span>*/}
        {/* <span className="ml-auto font-mono text-[10px] text-[#60788a] tracking-wide">
          {packages.length} packages
        </span>*/}
      </div>

      {/* Terminal Content */}
      <div className="font-mono text-xs leading-relaxed sm:text-sm">
        {phase === PHASE.MAIN && (
          <div className="flex min-h-[340px] sm:min-h-[380px]">
            {/* Left Panel */}
            <div className="w-[38%] border-r border-[#1c2a3a] flex flex-col">
              <div className="shrink-0 border-b border-[#1c2a3a] px-3 py-2 text-[#5bc0be] font-medium tracking-wide">
                pkgui ({packages.length})
              </div>
              <div className="shrink-0 border-b border-[#1c2a3a]">
                <div className="h-px bg-gradient-to-r from-[#5bc0be]/40 to-transparent w-3/4" />
              </div>
              <div className="flex-1 overflow-hidden px-1.5 py-1.5">
                {packages.map((pkg, i) => {
                  const isSelected = i === selectedIdx;
                  return (
                    <div
                      key={pkg.name}
                      className={`flex items-center gap-2 rounded-md px-2 py-1 transition-all duration-300 ${
                        isSelected
                          ? "bg-[#5bc0be]/15 text-white"
                          : "text-[#c0d4e4]"
                      }`}
                    >
                      <span
                        className={`w-3 shrink-0 text-center text-xs transition-all duration-300 ${
                          isSelected ? "text-[#5bc0be]" : "text-transparent"
                        }`}
                      >
                        ▸
                      </span>
                      <span className="truncate">{pkg.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Panel */}
            <div className="w-[62%] flex flex-col">
              <div className="shrink-0 border-b border-[#1c2a3a] px-3 py-2 text-[#e4b95b] font-medium tracking-wide">
                ▸ {selectedPkg.name}
              </div>
              <div className="shrink-0 border-b border-[#1c2a3a]">
                <div className="h-px bg-gradient-to-r from-[#e4b95b]/40 to-transparent w-3/4" />
              </div>
              <div className="flex-1 space-y-2.5 px-3 py-3 text-[#c0d4e4]">
                <div className="flex items-baseline gap-2">
                  <span className="shrink-0 w-[90px] text-[#60788a] text-[10px] tracking-wider uppercase">
                    Version
                  </span>
                  <span className="tabular-nums">{selectedPkg.version}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="shrink-0 w-[90px] text-[#60788a] text-[10px] tracking-wider uppercase">
                    Description
                  </span>
                  <span className="opacity-85 leading-snug">
                    {selectedPkg.desc}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="shrink-0 w-[90px] text-[#60788a] text-[10px] tracking-wider uppercase">
                    Homepage
                  </span>
                  <span className="text-[#5bc0be] underline underline-offset-2 decoration-dotted decoration-[#5bc0be]/30">
                    {selectedPkg.homepage}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="shrink-0 w-[90px] text-[#60788a] text-[10px] tracking-wider uppercase">
                    License
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#5bc0be]/20 bg-[#5bc0be]/5 px-2.5 py-0.5 text-[11px] text-[#5bc0be]">
                    {selectedPkg.license}
                  </span>
                </div>
                {selectedPkg.deps.length > 0 && (
                  <div className="flex items-baseline gap-2">
                    <span className="shrink-0 w-[90px] text-[#60788a] text-[10px] tracking-wider uppercase">
                      Dependencies
                    </span>
                    <span className="opacity-85">
                      {selectedPkg.deps.join(", ")}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {phase === PHASE.SEARCH && (
          <div className="min-h-[340px] sm:min-h-[380px]">
            {/* Search Bar */}
            <div className="border-b border-[#1c2a3a] px-3 py-2 flex items-center gap-2">
              <span className="text-[#60788a] text-xs">/</span>
              <span className="text-[#c0d4e4]">{searchTyping}</span>
              {searchTyping.length > 0 && searchTyping !== "git" && (
                <span
                  className={`inline-block w-2 h-[1.1em] bg-[#5bc0be] ${
                    cursorVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  &nbsp;
                </span>
              )}
            </div>

            {/* Two panels with search filter */}
            <div className="flex min-h-[312px] sm:min-h-[350px]">
              <div className="w-[38%] border-r border-[#1c2a3a] flex flex-col">
                <div className="shrink-0 border-b border-[#1c2a3a] px-3 py-2 text-[#5bc0be] font-medium tracking-wide">
                  pkgui ({filtered.length}/{packages.length})
                </div>
                <div className="shrink-0 border-b border-[#1c2a3a]">
                  <div className="h-px bg-gradient-to-r from-[#5bc0be]/40 to-transparent w-3/4" />
                </div>
                <div className="flex-1 overflow-hidden px-1.5 py-1.5">
                  {filtered.map((pkg, i) => (
                    <div
                      key={pkg.name}
                      className={`flex items-center gap-2 rounded-md px-2 py-1 transition-all duration-300 ${
                        i === 0
                          ? "bg-[#5bc0be]/15 text-white"
                          : "text-[#c0d4e4]"
                      }`}
                    >
                      <span
                        className={`w-3 shrink-0 text-center text-xs transition-all duration-300 ${
                          i === 0 ? "text-[#5bc0be]" : "text-transparent"
                        }`}
                      >
                        ▸
                      </span>
                      <span className="truncate">{pkg.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-[62%] flex flex-col">
                <div className="shrink-0 border-b border-[#1c2a3a] px-3 py-2 text-[#e4b95b] font-medium tracking-wide">
                  ▸ {filtered[0]?.name || ""}
                </div>
                <div className="shrink-0 border-b border-[#1c2a3a]">
                  <div className="h-px bg-gradient-to-r from-[#e4b95b]/40 to-transparent w-3/4" />
                </div>
                <div className="flex-1 space-y-2.5 px-3 py-3 text-[#c0d4e4]">
                  <div className="flex items-baseline gap-2">
                    <span className="shrink-0 w-[90px] text-[#60788a] text-[10px] tracking-wider uppercase">
                      Version
                    </span>
                    <span className="tabular-nums">
                      {filtered[0]?.version || ""}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="shrink-0 w-[90px] text-[#60788a] text-[10px] tracking-wider uppercase">
                      Description
                    </span>
                    <span className="opacity-85 leading-snug">
                      {filtered[0]?.desc || ""}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="shrink-0 w-[90px] text-[#60788a] text-[10px] tracking-wider uppercase">
                      Homepage
                    </span>
                    <span className="text-[#5bc0be] underline underline-offset-2 decoration-dotted decoration-[#5bc0be]/30">
                      {filtered[0]?.homepage || ""}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="shrink-0 w-[90px] text-[#60788a] text-[10px] tracking-wider uppercase">
                      License
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#5bc0be]/20 bg-[#5bc0be]/5 px-2.5 py-0.5 text-[11px] text-[#5bc0be]">
                      {filtered[0]?.license || ""}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[#1c2a3a] bg-[#0f1720] px-4 py-2 text-[10px] text-[#60788a] tracking-wide">
        {/* <span>
          {phase === PHASE.SEARCH
            ? `${filtered.length} matches`
            : `${packages.length} formulae`}
        </span>*/}
        <span className="flex items-center gap-2">
          <span className="hidden sm:inline text-[#5bc0be]/60">
            / search • ↑↓ navigate • q quit
          </span>
          {/* <span className="text-[#5bc0be]/60">↑↓ navigate</span>
          <span className="text-[#5bc0be]/60">q quit</span>*/}
        </span>
      </div>
    </motion.div>
  );
}
