import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-team-intro.vercel.app"),
  title: {
    default: "AI 代理團隊 | Cardano 驅動的自主智能小隊",
    template: "%s | AI 代理團隊",
  },
  description:
    "引進一支不需要發工資、不會請假、不會離職的 AI 團隊。5 個自主 AI Agent 24/7 協作，為企業完成複雜業務流程。已有 50+ 企業客戶，95% 滿意度。",
  keywords: [
    "AI 代理團隊",
    "AI 代理服務",
    "AI 流程自動化",
    "AI客服系統",
    "智慧製造AI",
    "金融科技AI",
    "企業AI代理團隊",
    "AI自動化顧問",
  ],
  authors: [{ name: "AI Agent Team" }],
  creator: "AI Agent Team",
  openGraph: {
    type: "website",
    locale: "zh_TW",
    alternateLocale: "en_US",
    url: "https://ai-team-intro.vercel.app/zh",
    siteName: "AI 代理團隊",
    title: "AI 代理團隊 | Cardano 驅動的自主智能小隊",
    description:
      "5 位 AI Agent，24/7 自主運行，分鐘級複雜任務交付。50+ 企業採用。",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI 代理團隊 | Cardano 驅動的自主智能小隊",
    description:
      "5 位 AI Agent，24/7 自主運行，分鐘級複雜任務交付。50+ 企業採用。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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