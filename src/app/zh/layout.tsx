import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "AI 代理團隊 | Cardano 驅動的自主智能小隊",
  description:
    "認識由 Cardano 區塊鏈驅動的自主 AI 代理團隊 — Dva、Alan、Sophia、Mia 和 Ivy。",
};

export default function ZhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}