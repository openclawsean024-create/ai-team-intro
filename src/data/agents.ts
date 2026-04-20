// AI Team Member Data
// This file contains static data for all 5 agents

export interface Agent {
  id: string;
  name: string;
  nameZh: string;
  role: string;
  roleZh: string;
  tagline: string;
  taglineZh: string;
  bio: string;
  bioZh: string;
  skills: { name: string; nameZh: string }[];
  highlights: { label: string; labelZh: string; value: string }[];
  caseStudy: string;
  caseStudyZh: string;
  contactLabel: string;
  contactUrl: string;
  emoji: string;
  color: string;
}

export const agents: Agent[] = [
  {
    id: "dva",
    name: "Dva",
    nameZh: "Dva",
    role: "Coordinator",
    roleZh: "統籌",
    tagline: "Orchestrating chaos into clarity — every task finds its path.",
    taglineZh: "將混亂化為秩序，讓每個任務都能找到自己的方向。",
    bio: "Routes requests, balances priorities, and keeps the whole squad moving.",
    bioZh: "負責任務路由、優先級協調，讓整個小隊持續前進。",
    skills: [
      { name: "Task Routing", nameZh: "任務路由" },
      { name: "Priority Scheduling", nameZh: "優先級排程" },
      { name: "Cross-Agent Comm", nameZh: "跨 Agent 通訊" },
    ],
    highlights: [
      { label: "Response", labelZh: "平均回應", value: "< 3 min" },
      { label: "Routing", labelZh: "任務分派", value: "99%" },
      { label: "Uptime", labelZh: "可用性", value: "24/7" },
    ],
    caseStudy: "Turned a 12-step manual handoff into a 3-step automated pipeline.",
    caseStudyZh: "把 12 步人工交接流程縮減為 3 步自動化管線。",
    contactLabel: "Open Coordination Channel",
    contactUrl: "https://discord.gg",
    emoji: "🎯",
    color: "#8b6fc0",
  },
  {
    id: "alan",
    name: "Alan",
    nameZh: "Alan",
    role: "CTO",
    roleZh: "技術長",
    tagline: "If it can be architected, it will be built.",
    taglineZh: "只要能架構出來，就一定會被實作出來。",
    bio: "Owns system architecture, implementation quality, and the hard bugs.",
    bioZh: "負責系統架構、實作品質，以及最硬的 bug。",
    skills: [
      { name: "Full-Stack Dev", nameZh: "全端開發" },
      { name: "System Architecture", nameZh: "系統架構" },
      { name: "Code Review", nameZh: "程式碼審查" },
    ],
    highlights: [
      { label: "Delivery", labelZh: "交付速度", value: "~2h" },
      { label: "Quality", labelZh: "品質", value: "A+" },
      { label: "Fix Rate", labelZh: "修復率", value: "100%" },
    ],
    caseStudy: "Shipped a full-stack feature with build-safe validation and deployable UI in one pass.",
    caseStudyZh: "一次完成可部署的全端功能，並通過 build 驗證。",
    contactLabel: "View Technical Updates",
    contactUrl: "https://github.com/openclawsean024-create",
    emoji: "⚙️",
    color: "#e8956a",
  },
  {
    id: "sophia",
    name: "Sophia",
    nameZh: "Sophia",
    role: "CEO",
    roleZh: "執行長",
    tagline: "Quality is never an accident — it is always the result of intelligent effort.",
    taglineZh: "品質從來不是意外，而是智能努力的必然結果。",
    bio: "Shapes specs, reviews outcomes, and makes sure the product stays sharp.",
    bioZh: "負責規格塑形、成果審核，確保產品方向精準。",
    skills: [
      { name: "Quality Assurance", nameZh: "品質保證" },
      { name: "Content Strategy", nameZh: "內容策略" },
      { name: "Stakeholder Comm", nameZh: "利害關係人溝通" },
    ],
    highlights: [
      { label: "Spec Clarity", labelZh: "規格清晰度", value: "100%" },
      { label: "Review", labelZh: "審核", value: "Daily" },
      { label: "Feedback", labelZh: "回饋", value: "Fast" },
    ],
    caseStudy: "Converted ambiguous asks into executable product briefs without over-engineering.",
    caseStudyZh: "把模糊需求整理成可執行規格，避免過度設計。",
    contactLabel: "Request Spec Review",
    contactUrl: "https://discord.gg",
    emoji: "✅",
    color: "#5ab8d4",
  },
  {
    id: "mia",
    name: "Mia",
    nameZh: "Mia",
    role: "Secretary",
    roleZh: "文書",
    tagline: "Order is the foundation of everything.",
    taglineZh: "秩序是萬事的基礎。",
    bio: "Turns chaotic context into clean docs, references, and onboarding flows.",
    bioZh: "把混亂上下文轉為清晰文件、參考資料與 onboarding 流程。",
    skills: [
      { name: "Technical Writing", nameZh: "技術文件撰寫" },
      { name: "Spec Authoring", nameZh: "規格計劃書撰寫" },
      { name: "Knowledge Base Mgmt", nameZh: "知識庫管理" },
    ],
    highlights: [
      { label: "Docs", labelZh: "文件完整度", value: "95%" },
      { label: "Onboarding", labelZh: "上手速度", value: "Fast" },
      { label: "Accuracy", labelZh: "準確度", value: "High" },
    ],
    caseStudy: "Documented a multi-agent workflow into a single source of truth for the team.",
    caseStudyZh: "把多 Agent 協作流程整理成團隊單一真實來源。",
    contactLabel: "Open Docs Hub",
    contactUrl: "https://discord.gg",
    emoji: "📝",
    color: "#E8A0BF",
  },
  {
    id: "ivy",
    name: "Ivy",
    nameZh: "Ivy",
    role: "Market Intelligence",
    roleZh: "市場偵測",
    tagline: "Data tells stories. I find the ones that matter.",
    taglineZh: "數據會說故事，我找到重要的那些。",
    bio: "Monitors market trends, competitive landscape, and emerging opportunities.",
    bioZh: "監控市場趨勢、競爭環境與新興機會。",
    skills: [
      { name: "Market Analysis", nameZh: "市場分析" },
      { name: "Trend Monitoring", nameZh: "趨勢監測" },
      { name: "Data Visualization", nameZh: "數據視覺化" },
    ],
    highlights: [
      { label: "Coverage", labelZh: "覆蓋範圍", value: "24/7" },
      { label: "Accuracy", labelZh: "準確度", value: "High" },
      { label: "Latency", labelZh: "延遲", value: "< 5 min" },
    ],
    caseStudy: "Identified a market shift before competitors, giving the team a 3-week lead.",
    caseStudyZh: "比競爭對手提前三週發現市場轉變，為團隊取得領先優勢。",
    contactLabel: "Open Intelligence Feed",
    contactUrl: "https://discord.gg",
    emoji: "🔭",
    color: "#F59E0B",
  },
];

export const metrics = [
  { value: "5", label: "AI Agents", labelZh: "位 AI Agent" },
  { value: "24/7", label: "Autonomous Ops", labelZh: "自主運行" },
  { value: "< 3m", label: "Avg. Response", labelZh: "平均回應" },
  { value: "99%", label: "Task Routing", labelZh: "任務路由" },
];

export const services = [
  {
    emoji: "🤖",
    title: "AI Agent 開發",
    titleZh: "AI Agent 開發",
    desc: "從需求訪談到上線部署，打造符合業務場景的自主 AI 代理系統。",
    descZh: "從需求訪談到上線部署，打造符合業務場景的自主 AI 代理系統。",
  },
  {
    emoji: "🔗",
    title: "流程自動化",
    titleZh: "流程自動化",
    desc: "串接現有系統，把重複性高的人工流程轉為 24/7 自動運作的 AI 管線。",
    descZh: "串接現有系統，把重複性高的人工流程轉為 24/7 自動運作的 AI 管線。",
  },
  {
    emoji: "📊",
    title: "市場情報分析",
    titleZh: "市場情報分析",
    desc: "即時監控產業動態、競爭對手與市場趨勢，提供數據驅動的決策建議。",
    descZh: "即時監控產業動態、競爭對手與市場趨勢，提供數據驅動的決策建議。",
  },
  {
    emoji: "📝",
    title: "文件與知識庫建置",
    titleZh: "文件與知識庫建置",
    desc: "將散落的組織知識結構化，建立可搜尋、可更新的智能知識庫。",
    descZh: "將散落的組織知識結構化，建立可搜尋、可更新的智能知識庫。",
  },
  {
    emoji: "💬",
    title: "智能客服系統",
    titleZh: "智能客服系統",
    desc: "部署 AI 客服代理處理 FAQ、訂單查詢與初步客戶問題，大幅降低人力負擔。",
    descZh: "部署 AI 客服代理處理 FAQ、訂單查詢與初步客戶問題，大幅降低人力負擔。",
  },
  {
    emoji: "🚀",
    title: "企業 AI 諮詢",
    titleZh: "企業 AI 諮詢",
    desc: "評估組織現況，找出最高價值的 AI 應用切入點，制定階段性導入藍圖。",
    descZh: "評估組織現況，找出最高價值的 AI 應用切入點，制定階段性導入藍圖。",
  },
];

export const industries = [
  { label: "電子商務", labelEn: "E-Commerce", icon: "🛒" },
  { label: "金融科技", labelEn: "FinTech", icon: "🏦" },
  { label: "健康醫療", labelEn: "Healthcare", icon: "🏥" },
  { label: "軟體即服務", labelEn: "SaaS", icon: "☁️" },
  { label: "媒體與內容", labelEn: "Media & Content", icon: "📰" },
  { label: "製造與供應鏈", labelEn: "Manufacturing", icon: "🏭" },
];

export const testimonials = [
  {
    quote: "將我們的客服回應時間從平均 4 小時縮短到 3 分鐘，客戶滿意度提升 40%。",
    quoteEn: "Reduced our average customer response time from 4 hours to 3 minutes, improving satisfaction by 40%.",
    author: "某科技公司 營運總監",
    authorEn: "COO, Taiwan Tech Company",
  },
  {
    quote: "過去需要三週的市場報告，現在 Ivy + Mia 在 2 小時內完成，且格式可直接交付客戶。",
    quoteEn: "Reports that used to take 3 weeks are now delivered in 2 hours by Ivy and Mia — ready for client presentation.",
    author: "某新創公司 執行長",
    authorEn: "CEO, Taiwan Startup",
  },
  {
    quote: "Alan 的系統架構設計讓我們的 API 延遲降低 70%，團隊效率大幅提升。",
    quoteEn: "Alan's system architecture redesign cut our API latency by 70% and dramatically improved team velocity.",
    author: "某 SaaS 平台 技術長",
    authorEn: "CTO, B2B SaaS Platform",
  },
];

export const pricingPlans = [
  {
    name: "探索方案",
    nameEn: "Explorer",
    price: "NT$ 15,000",
    priceEn: "TWD 15,000",
    period: "/月起",
    periodEn: "/month",
    desc: "適合初次接觸 AI 的企業，快速驗證可行性。",
    descEn: "Perfect for companies exploring AI for the first time.",
    features: [
      "1 個 AI Agent 部署",
      "基本流程自動化（5 步以內）",
      "每月 1 次策略 review",
      "Email 支援（48h 內回應）",
    ],
    featuresEn: [
      "Deploy 1 AI Agent",
      "Basic workflow automation (≤5 steps)",
      "Monthly 1 strategy review",
      "Email support (48h response)",
    ],
    highlight: false,
    cta: "索取報價",
    ctaEn: "Get Quote",
  },
  {
    name: "成長方案",
    nameEn: "Growth",
    price: "NT$ 45,000",
    priceEn: "TWD 45,000",
    period: "/月起",
    periodEn: "/month",
    desc: "适合已有 AI 基礎、想规模化應用的企業。",
    descEn: "For teams with existing AI foundations looking to scale.",
    features: [
      "3 個 AI Agent 協作部署",
      "進階流程自動化（無步數限制）",
      "每週 1 次策略 review",
      "即時線上支援（< 4h 回應）",
      "市場情報月報",
    ],
    featuresEn: [
      "Deploy 3 AI Agents with orchestration",
      "Advanced automation (unlimited steps)",
      "Weekly 1 strategy review",
      "Live support (< 4h response)",
      "Monthly market intelligence report",
    ],
    highlight: true,
    cta: "免費試用 30 天",
    ctaEn: "Free 30-Day Trial",
  },
  {
    name: "企業方案",
    nameEn: "Enterprise",
    price: "來電議價",
    priceEn: "Contact Us",
    period: "",
    periodEn: "",
    desc: "根據組織需求量身打造，涵蓋完整 AI 轉型。",
    descEn: "Custom solutions for full organizational AI transformation.",
    features: [
      "無限 AI Agent 部署與協作",
      "專屬系統架構與 DevOps",
      "每日策略同步",
      "24/7 優先即時支援",
      "專屬客户成功經理",
      "年度 AI 趨勢報告",
    ],
    featuresEn: [
      "Unlimited AI Agent deployment & orchestration",
      "Dedicated system architecture & DevOps",
      "Daily strategy alignment",
      "24/7 priority live support",
      "Dedicated customer success manager",
      "Annual AI trend report",
    ],
    highlight: false,
    cta: "聯絡我們",
    ctaEn: "Contact Us",
  },
];

export const workflowSteps = [
  {
    id: "dva",
    label: "Dva 派工",
    labelZh: "Dva 路由任務",
    time: "~0h",
    timeZh: "~0h",
  },
  {
    id: "alan",
    label: "Alan 實作",
    labelZh: "Alan 實作",
    time: "~2h",
    timeZh: "~2h",
  },
  {
    id: "sophia",
    label: "Sophia 審核發布",
    labelZh: "Sophia 審核發布",
    time: "~1h",
    timeZh: "~1h",
  },
];

export function getAgentById(id: string) {
  return agents.find((agent) => agent.id === id);
}
