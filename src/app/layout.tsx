import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "AI Agent Team | Cardano-Powered Autonomous Squad",
  description:
    "Meet the autonomous AI Agent team powered by Cardano blockchain — Dva, Alan, Sophia, Mia & Ivy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {/* Header */}
          <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[var(--bg-dark)]/90 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">🤖</span>
                <span className="font-bold text-sm text-[var(--text-primary)]">
                  AI Agent Team
                </span>
              </div>
              <nav className="flex items-center gap-4">
                <a
                  href="#agents"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Team
                </a>
                <a
                  href="#workflow"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Workflow
                </a>
                <a
                  href="#metrics"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Metrics
                </a>
                <div className="flex items-center gap-2 ml-4 border-l border-white/10 pl-4">
                  <a
                    href="/"
                    className="text-sm font-medium text-[var(--text-primary)] lang-active"
                  >
                    EN
                  </a>
                  <span className="text-[var(--text-secondary)]">/</span>
                  <a
                    href="/zh"
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    中文
                  </a>
                </div>
                <div className="ml-2">
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          </header>

          {children}

          {/* Footer */}
          <footer className="border-t border-white/5 bg-[var(--bg-dark)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">🤖</span>
                <span className="text-sm text-[var(--text-secondary)]">
                  AI Agent Team · Cardano-Powered
                </span>
              </div>
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#5865F2] hover:bg-[#4752C4] text-white text-sm font-medium rounded-lg transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
                Join Discord
              </a>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}