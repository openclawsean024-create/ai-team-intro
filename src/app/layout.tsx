import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Agent Team | Cardano-Powered Autonomous Squad for Enterprise",
  description: "引進一支不需要發工資、不會請假、不會離職的 AI 團隊。5 個自主 AI Agent 24/7 協作,為您完成複雜業務流程。已有 50+ 企業客戶,95% 滿意度。",
  keywords: "AI Agent Team 企業、AI 代理服務、AI 流程自動化、AI客服系統、智慧製造AI、金融科技AI、RPA替代方案、企業AI代理團隊導入、AI自動化顧問公司",
  openGraph: {
    title: "AI Agent Team | Cardano-Powered Autonomous Squad",
    description: "5 AI Agents, 24/7 Autonomous Ops, 分鐘級複雜任務交付。50+ 企業採用。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}