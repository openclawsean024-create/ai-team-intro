import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-team-intro.vercel.app"),
  title: {
    default: "AI Agent Team | Cardano-Powered Autonomous Squad for Enterprise",
    template: "%s | AI Agent Team",
  },
  description:
    "引進一支不需要發工資、不會請假、不會離職的 AI 團隊。5 個自主 AI Agent 24/7 協作，為企業完成複雜業務流程。已有 50+ 企業客戶，95% 滿意度。",
  keywords: [
    "AI Agent Team 企業",
    "AI 代理服務",
    "AI 流程自動化",
    "AI客服系統",
    "智慧製造AI",
    "金融科技AI",
    "RPA替代方案",
    "企業AI代理團隊導入",
    "AI自動化顧問公司",
  ],
  authors: [{ name: "AI Agent Team" }],
  creator: "AI Agent Team",
  openGraph: {
    type: "website",
    locale: "zh_TW",
    alternateLocale: "en_US",
    url: "https://ai-team-intro.vercel.app",
    siteName: "AI Agent Team",
    title: "AI Agent Team | Cardano-Powered Autonomous Squad",
    description:
      "5 AI Agents, 24/7 Autonomous Ops, 分鐘級複雜任務交付。50+ 企業採用。",
    images: [
      {
        url: "https://ai-team-intro.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Agent Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Team | Cardano-Powered Autonomous Squad",
    description:
      "5 AI Agents, 24/7 Autonomous Ops, 分鐘級複雜任務交付。50+ 企業採用。",
    images: ["https://ai-team-intro.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI Agent Team",
    url: "https://ai-team-intro.vercel.app",
    description:
      "AI Agent Team powered by Cardano blockchain — delivering autonomous AI agent squads for enterprise.",
    foundingDate: "2023",
    serviceType: "AI Agent Team",
    areaServed: "Global",
    knowsAbout: [
      "AI Agent Development",
      "Process Automation",
      "Market Intelligence",
      "System Integration",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}