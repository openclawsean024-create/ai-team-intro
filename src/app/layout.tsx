import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}