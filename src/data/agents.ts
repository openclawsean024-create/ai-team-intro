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
    desc: "適合已有 AI 基礎、想規模化應用的企業。",
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
      "專屬客戶成功經理",
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

// ── Trust & Credibility ───────────────────────────────────────────────────
export const trustBadges = [
  { label: "SOC 2 Compliant", labelZh: "SOC 2 合規", icon: "🛡️" },
  { label: "GDPR Ready", labelZh: "GDPR 就緒", icon: "🔒" },
  { label: "99.9% Uptime SLA", labelZh: "99.9% 運行時間 SLA", icon: "⚡" },
  { label: "24/7 Monitoring", labelZh: "24/7 監控", icon: "📡" },
];

// ── Why Choose Us ──────────────────────────────────────────────────────────
export const differentiators = [
  {
    icon: "⚡",
    title: "48 小時內啟動",
    titleEn: "Live in 48 Hours",
    desc: "從需求確認到首個 Agent 上線，確保 48 小時內見到初步成效。",
    descEn: "From kickoff to first agent live — guaranteed within 48 hours.",
  },
  {
    icon: "🎯",
    title: "100% 成果導向",
    titleEn: "Results-Driven",
    desc: "不賣功能，賣成效。每一個環節都對標可量化的商業 KPI。",
    descEn: "We sell outcomes, not features. Every deliverable ties to a measurable KPI.",
  },
  {
    icon: "🔄",
    title: "無縫替換現有系統",
    titleEn: "Zero Disruption",
    desc: "與現有系統無痛整合，不衝擊現有流程，確保過渡平穩。",
    descEn: "Drop into your existing stack without disrupting current workflows.",
  },
  {
    icon: "📈",
    title: "投資報酬率透明",
    titleEn: "Transparent ROI",
    desc: "每季提供成效報告，清楚呈現 AI 帶來的具體成本節省與營收增長。",
    descEn: "Quarterly impact reports — see exactly how much cost you've saved and revenue you've grown.",
  },
  {
    icon: "🛡️",
    title: "企業級安全合規",
    titleEn: "Enterprise Security & Compliance",
    desc: "SOC 2 Type II、TLS 1.3 加密、ISO 27001 資料中心，滿足最嚴格的企業資安要求。",
    descEn: "SOC 2 Type II, TLS 1.3 encryption, ISO 27001 data centers — meeting the highest enterprise security standards.",
  },
  {
    icon: "🤝",
    title: "專屬客戶成功經理",
    titleEn: "Dedicated Customer Success Manager",
    desc: "每一位 Enterprise 客戶都有專屬 CSM，確保 AI 應用持續創造價值。",
    descEn: "Every Enterprise client has a dedicated CSM ensuring your AI investment continuously delivers value.",
  },
];

// ── Client Logos ──────────────────────────────────────────────────────────
export const clientLogos = [
  { name: "芯耀科技", nameEn: "Xinyao Tech", sector: "半導體", sectorEn: "Semiconductor" },
  { name: "雲馳軟體", nameEn: "CloudSync", sector: "企業軟體", sectorEn: "Enterprise Software" },
  { name: "元智金服", nameEn: "MetaFinance", sector: "金融科技", sectorEn: "FinTech" },
  { name: "慧診健康", nameEn: "MediSense", sector: "健康科技", sectorEn: "HealthTech" },
  { name: "優品電商", nameEn: "Upin Commerce", sector: "電子商務", sectorEn: "E-Commerce" },
  { name: "領航製造", nameEn: "Apex Manufacturing", sector: "智慧製造", sectorEn: "Smart Manufacturing" },
  { name: "明日教育", nameEn: "BrightEdu", sector: "教育科技", sectorEn: "EdTech" },
  { name: "馳遠物流", nameEn: "SwiftLogistics", sector: "物流供應鏈", sectorEn: "Logistics" },
];

// ── Workflow Demo ─────────────────────────────────────────────────────────
export const workflowDemo = {
  title: "看見 AI Agent 團隊如何協作",
  titleEn: "See the Agent Team in Action",
  desc: "模擬一個真實的商業任務——從需求輸入到成果交付，5 個 Agent 如何即時接力完成。",
  descEn: "Watch a real business task flow through all 5 agents — from input to deliverable, in real time.",
  steps: [
    { agent: "dva", label: "Dva 接收任務並分類", labelEn: "Dva receives & routes request", time: "0s", emoji: "🎯" },
    { agent: "ivy", label: "Ivy 分析市場背景資料", labelEn: "Ivy runs market analysis", time: "30s", emoji: "🔭" },
    { agent: "alan", label: "Alan 實作系統方案", labelEn: "Alan builds solution", time: "2min", emoji: "⚙️" },
    { agent: "sophia", label: "Sophia 品質審核把關", labelEn: "Sophia reviews quality", time: "2h 30min", emoji: "✅" },
    { agent: "mia", label: "Mia 生成交付文件", labelEn: "Mia produces docs", time: "2h 55min", emoji: "📝" },
  ],
  result: "3 小時完成，零人工介入",
  resultEn: "Delivered in 3 hours — zero manual intervention",
};

// ── ROI Stats ───────────────────────────────────────────────────────────
export const roiStats = [
  { value: "3x", label: "平均投資報酬率", labelEn: "Avg. ROI", note: "以 Explorer 方案一年計算", noteEn: "Based on Explorer plan, Year 1" },
  { value: "85%", label: "人工工時節省", labelEn: "Manual Hours Saved", note: "重複性任務自動化後", noteEn: "After repetitive task automation" },
  { value: "< 30 days", label: "首次見效時間", labelEn: "Time to First Result", note: "從啟動到第一次產出", noteEn: "From kickoff to first output" },
  { value: "99.9%", label: "系統運行時間", labelEn: "System Uptime", note: "全年不中斷服務", noteEn: "Guaranteed throughout the year" },
];

// ── Team Stats ──────────────────────────────────────────────────────────────
export const teamStats = [
  { value: "50+", label: "Enterprise Clients", labelZh: "企業客戶" },
  { value: "1,200+", label: "Tasks Completed", labelZh: "任務完成" },
  { value: "3+ Years", label: "In Production", labelZh: "生產運行" },
  { value: "TWD 2B+", label: "Cost Saved for Clients", labelZh: "為客戶節省成本" },
];

// ── How It Works ───────────────────────────────────────────────────────────
export const processSteps = [
  {
    step: "01",
    title: "Discovery & Assessment",
    titleZh: "需求探索與評估",
    desc: "We analyze your business workflows and identify the highest-impact AI automation opportunities.",
    descZh: "我們分析您的業務流程，找出最高價值的 AI 自動化切入點。",
  },
  {
    step: "02",
    title: "Agent Design & Config",
    titleZh: "Agent 設計與配置",
    desc: "Our team configures and orchestrates custom AI agents tailored to your specific use cases.",
    descZh: "我們的團隊為您量身配置和協調專屬的 AI Agent。",
  },
  {
    step: "03",
    title: "Seamless Integration",
    titleZh: "無縫系統整合",
    desc: "Agents are integrated into your existing stack with minimal disruption and maximum ROI.",
    descZh: "Agent 與您現有系統無縫整合，確保最小干擾、最大投資回報。",
  },
  {
    step: "04",
    title: "Monitor & Optimize",
    titleZh: "持續監控與優化",
    desc: "Ongoing performance monitoring and iterative improvements keep your AI running at peak efficiency.",
    descZh: "持續效能監控與迭代優化，保持 AI 在最高效率運行。",
  },
];

// ── Expanded Services ────────────────────────────────────────────────────
export const servicesExtended = [
  {
    emoji: "🤖",
    title: "AI Agent 開發",
    titleZh: "AI Agent 開發",
    desc: "從需求訪談到上線部署，打造符合業務場景的自主 AI 代理系統。",
    descZh: "從需求訪談到上線部署，打造符合業務場景的自主 AI 代理系統。",
    popular: false,
  },
  {
    emoji: "🔗",
    title: "流程自動化",
    titleZh: "流程自動化",
    desc: "串接現有系統，把重複性高的人工流程轉為 24/7 自動運作的 AI 管線。",
    descZh: "串接現有系統，把重複性高的人工流程轉為 24/7 自動運作的 AI 管線。",
    popular: false,
  },
  {
    emoji: "📊",
    title: "市場情報分析",
    titleZh: "市場情報分析",
    desc: "即時監控產業動態、競爭對手與市場趨勢，提供數據驅動的決策建議。",
    descZh: "即時監控產業動態、競爭對手與市場趨勢，提供數據驅動的決策建議。",
    popular: false,
  },
  {
    emoji: "📝",
    title: "文件與知識庫建置",
    titleZh: "文件與知識庫建置",
    desc: "將散落的組織知識結構化，建立可搜尋、可更新的智能知識庫。",
    descZh: "將散落的組織知識結構化，建立可搜尋、可更新的智能知識庫。",
    popular: false,
  },
  {
    emoji: "💬",
    title: "智能客服系統",
    titleZh: "智能客服系統",
    desc: "部署 AI 客服代理處理 FAQ、訂單查詢與初步客戶問題，大幅降低人力負擔。",
    descZh: "部署 AI 客服代理處理 FAQ、訂單查詢與初步客戶問題，大幅降低人力負擔。",
    popular: true,
  },
  {
    emoji: "🚀",
    title: "企業 AI 諮詢",
    titleZh: "企業 AI 諮詢",
    desc: "評估組織現況，找出最高價值的 AI 應用切入點，制定階段性導入藍圖。",
    descZh: "評估組織現況，找出最高價值的 AI 應用切入點，制定階段性導入藍圖。",
    popular: false,
  },
  {
    emoji: "🔍",
    title: "AI 系統健檢",
    titleZh: "AI 系統健檢",
    desc: "對現有 AI 系統進行全面評估，發現瓶頸、風險與優化空間，附帶具體改善方案。",
    descZh: "對現有 AI 系統進行全面評估，發現瓶頸、風險與優化空間，附帶具體改善方案。",
    popular: false,
  },
  {
    emoji: "📈",
    title: "商業智慧儀表板",
    titleZh: "商業智慧儀表板",
    desc: "整合多元資料來源，打造即時更新的管理儀表板，讓决策者随时掌握關鍵指標。",
    descZh: "整合多元資料來源，打造即時更新的管理儀表板，讓决策者随时掌握關鍵指標。",
    popular: false,
  },
  {
    emoji: "🤝",
    title: "跨系統 API 整合",
    titleZh: "跨系統 API 整合",
    desc: "打通 ERP、CRM、CMS 等企業系統，消除資料孤島，實現端到端流程自動化。",
    descZh: "打通 ERP、CRM、CMS 等企業系統，消除資料孤島，實現端到端流程自動化。",
    popular: false,
  },
  {
    emoji: "🧠",
    title: "AI 教育訓練",
    titleZh: "AI 教育訓練",
    desc: "為企業團隊量身打造 AI 工具培訓課程，協助內部人員快速掌握並有效運用 AI。",
    descZh: "為企業團隊量身打造 AI 工具培訓課程，協助內部人員快速掌握並有效運用 AI。",
    popular: false,
  },
  {
    emoji: "🛡️",
    title: "AI 合規與安全顧問",
    titleZh: "AI 合規與安全顧問",
    desc: "協助企業確保 AI 系統符合 GDPR、SOC 2、ISO 27001 等法規標準，附帶缺口分析報告。",
    descZh: "協助企業確保 AI 系統符合 GDPR、SOC 2、ISO 27001 等法規標準，附帶缺口分析報告。",
    popular: false,
  },
  {
    emoji: "🔮",
    title: "AI 產品策略顧問",
    titleZh: "AI 產品策略顧問",
    desc: "從市場定位、功能規劃到技術選型，協助制定 AI 產品 Roadmap 與競爭策略。",
    descZh: "從市場定位、功能規劃到技術選型，協助制定 AI 產品 Roadmap 與競爭策略。",
    popular: false,
  },
];

// ── Expanded Industries ────────────────────────────────────────────────
export const industriesExtended = [
  ...industries,
  { label: "教育科技", labelEn: "EdTech", icon: "🎓" },
  { label: "物流與供應鏈", labelEn: "Logistics & Supply Chain", icon: "🚚" },
  { label: "法律科技", labelEn: "LegalTech", icon: "⚖️" },
  { label: "農業科技", labelEn: "AgriTech", icon: "🌱" },
];

// ── Expanded Testimonials ─────────────────────────────────────────────────
export const testimonialsExtended = [
  {
    quote: "將我們的客服回應時間從平均 4 小時縮短到 3 分鐘，客戶滿意度提升 40%。",
    quoteEn: "Reduced our average customer response time from 4 hours to 3 minutes, improving satisfaction by 40%.",
    author: "某科技公司 營運總監",
    authorEn: "COO, Taiwan Tech Company",
    result: "40% satisfaction boost",
  },
  {
    quote: "過去需要三週的市場報告，現在 Ivy + Mia 在 2 小時內完成，且格式可直接交付客戶。",
    quoteEn: "Reports that used to take 3 weeks are now delivered in 2 hours by Ivy and Mia — ready for client presentation.",
    author: "某新創公司 執行長",
    authorEn: "CEO, Taiwan Startup",
    result: "93% time saved",
  },
  {
    quote: "Alan 的系統架構設計讓我們的 API 延遲降低 70%，團隊效率大幅提升。",
    quoteEn: "Alan's system architecture redesign cut our API latency by 70% and dramatically improved team velocity.",
    author: "某 SaaS 平台 技術長",
    authorEn: "CTO, B2B SaaS Platform",
    result: "70% latency reduction",
  },
  {
    quote: "Dva 的任務路由系統讓我們的跨部門協作效率提升 3 倍，終於不用追著人跑了。",
    quoteEn: "Dva's task routing system tripled our cross-team collaboration efficiency — no more chasing people around.",
    author: "某電子商務平台 營運總監",
    authorEn: "Director of Operations, E-commerce Platform",
    result: "3x collaboration speed",
  },
  {
    quote: "Sophia 的品質把關讓我們的產品規格錯誤率歸零，交付品質大幅提升。",
    quoteEn: "Sophia's quality assurance reduced our spec errors to zero, dramatically improving delivery quality.",
    author: "某軟體開發公司 產品總監",
    authorEn: "Head of Product, Software Company",
    result: "Zero spec errors",
  },
  {
    quote: "Mia 整理的知識庫讓新進工程師上手速度提升 60%，培訓成本大幅下降。",
    quoteEn: "Mia's knowledge base reduced our new engineer onboarding time by 60% — training costs dropped significantly.",
    author: "某軟體顧問公司 技術總監",
    authorEn: "VP of Engineering, Software Consultancy",
    result: "60% faster onboarding",
  },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
export const faqs = [
  {
    q: "你們的 AI Agent 和市面上的 SaaS 有什麼不同？",
    qEn: "How is your AI Agent different from existing SaaS tools?",
    a: "大多數 SaaS 是單一功能的工具。我們的 Agent 團隊是自主運作的智慧系統，各 Agent 間能即時協作、互相通訊，針對您的複雜業務流程提供端到端的自動化解決方案，而非只是單點功能。",
    aEn: "Most SaaS tools are single-function. Our Agent team operates autonomously — agents communicate and coordinate in real-time to deliver end-to-end automation for complex business processes, not just point solutions.",
  },
  {
    q: "部署你們的系統需要多長時間？",
    qEn: "How long does it take to deploy your system?",
    a: "Explorer 方案通常 1-2 週完成部署。Growth 方案複雜度較高，需 2-4 週。Enterprise 方案視需求而定，一般 1-3 個月可以見到初步成效。我們會在第一週提供詳細時程規劃。",
    aEn: "Explorer plans typically deploy in 1-2 weeks. Growth plans, being more complex, take 2-4 weeks. Enterprise varies by scope — initial results usually within 1-3 months. We provide a detailed timeline in the first week.",
  },
  {
    q: "你們如何保障資料安全與隱私？",
    qEn: "How do you ensure data security and privacy?",
    a: "我們遵循 SOC 2 合規標準，所有資料傳輸均使用 TLS 1.3 加密，資料庫位於 ISO 27001 認證的資料中心。我們也提供私有化部署選項，確保最嚴格的資料主權要求。",
    aEn: "We follow SOC 2 compliance standards with TLS 1.3 encrypted data transmission and ISO 27001 certified data centers. We also offer private cloud deployments for maximum data sovereignty.",
  },
  {
    q: "如果效果不如預期怎麼辦？",
    qEn: "What if results don't meet expectations?",
    a: "Explorer 方案提供 30 天不滿意退款的保證。Growth 方案有 30 天免費試用期。Enterprise 方案我們會在第一階段結束時做成效評估，若未達里程碑，雙方協商調整策略或終止合作。我們在乎的是真正為您創造價值，而非只是賣出方案。",
    aEn: "Explorer plans come with a 30-day money-back guarantee. Growth plans include a 30-day free trial. For Enterprise, we do milestone reviews at the end of each phase — if targets aren't met, we adjust strategy together or end the engagement. We care about delivering value, not just closing deals.",
  },
  {
    q: "需要具備什麼技術背景才能使用你們的服務？",
    qEn: "Do we need technical expertise to use your services?",
    a: "不需要。我們的服務是為企業級客戶設計的，從需求訪談、系統配置到日常使用，都有專屬團隊支援。一般 business user 都能輕鬆上手。我們也提供完整的教育訓練，確保您的團隊能充分駕馭系統。",
    aEn: "Not at all. Our services are designed for enterprise clients — from onboarding and configuration to day-to-day operations, you have dedicated support. Regular business users find it easy to use. We also provide full training to ensure your team can fully leverage the system.",
  },
  {
    q: "你們的定價包含哪些內容？是否有隱藏費用？",
    qEn: "What's included in your pricing? Are there hidden fees?",
    a: "所有方案費用已包含 Agent 部署、系統整合與基本培訓。Growth 方案的 API 調用費用也已涵蓋在月費內。Enterprise 方案的範圍在合約簽訂前會完整確認，絕無預期外的費用。",
    aEn: "All plan fees include agent deployment, system integration, and basic training. API call costs are included in the monthly fee for Growth plans. Enterprise scope is fully defined before contract signing — no surprise bills.",
  },
  {
    q: "可以先試用再決定嗎？",
    qEn: "Can we trial before committing?",
    a: "當然可以。Growth 方案提供 30 天免費試用，無需綁定信用卡。若您想先深入了解，我們也提供 30 分鐘的免費顧問諮詢，根據您的業務痛點提供初步的 AI 應用建議。",
    aEn: "Absolutely. Growth plans include a 30-day free trial with no credit card required. We also offer a free 30-minute consultation to understand your business challenges and provide initial AI recommendations.",
  },
  {
    q: "適用於哪些產業？已有類似案例嗎？",
    qEn: "Which industries do you serve? Do you have case studies?",
    a: "我們已服務電子商務、金融科技、健康醫療、SaaS、媒體內容、智慧製造、教育科技、法律科技與農業科技等領域。每一個產業都有對應的 Agent 配置與成功案例，Explorer 方案客戶可在顧問會議中要求查看相關產業參考。",
    aEn: "We've served e-commerce, FinTech, healthcare, SaaS, media, smart manufacturing, EdTech, LegalTech, and AgriTech. Each has matching agent configurations and success stories. Explorer clients can request relevant case references during their consultation.",
  },
];

export function getAgentById(id: string) {
  return agents.find((agent) => agent.id === id);
}

// ── Pricing Page Data ────────────────────────────────────────────────────────
export const pricingFaqs = [
  {
    q: "可以先試用再決定嗎？",
    qEn: "Can we trial before committing?",
    a: "Growth 方案提供 30 天免費試用，無需信用卡。若您想先深入了解，我們也提供 30 分鐘的免費顧問諮詢。",
    aEn: "Growth plans include a 30-day free trial with no credit card required. We also offer a free 30-minute consultation.",
  },
  {
    q: "Explorer 方案適合什麼樣的企業？",
    qEn: "Who is the Explorer plan for?",
    a: "適合 1-50 人小型團隊，單一重複性高的流程（如客服、資料輸入、報告生成），想要快速驗證 AI 能否解決特定問題的組織。",
    aEn: "Explorer is perfect for teams of 1-50 people with a single high-volume repetitive process, looking to quickly validate AI's potential.",
  },
  {
    q: "年付有折扣嗎？",
    qEn: "Is there a discount for annual billing?",
    a: "年付方案享有 2 個月免費（相當於 83 折），並可優先獲得我們的年度趨勢報告與產業標竿分析。",
    aEn: "Annual billing includes 2 months free (equivalent to 83折), plus priority access to our annual trend reports and industry benchmarks.",
  },
  {
    q: "Enterprise 方案如何計價？",
    qEn: "How does Enterprise pricing work?",
    a: "根據組織規模和系統整合複雜度報價。200-500 人/3-5 系統：TWD 120,000-180,000/月；500-1000 人/5-10 系統：TWD 180,000-300,000/月；1000 人以上：TWD 300,000-600,000/月。上市櫃公司或特殊需求另議。",
    aEn: "Pricing is based on organization size and system complexity. 200-500 employees / 3-5 systems: TWD 120,000-180,000/month; 500-1000 / 5-10 systems: TWD 180,000-300,000/month; 1000+ / full integration: TWD 300,000-600,000/month.",
  },
];

export const comparisonTable = [
  {
    feature: "部署速度",
    featureEn: "Deployment Speed",
    explorer: "1-2 週",
    growth: "2-4 週",
    enterprise: "1-3 個月",
    others: "3-6 個月",
  },
  {
    feature: "AI Agent 數量",
    featureEn: "AI Agents",
    explorer: "1 個",
    growth: "3 個（協作）",
    enterprise: "無限",
    others: "無",
  },
  {
    feature: "系統整合",
    featureEn: "System Integration",
    explorer: "1 個系統",
    growth: "5 個系統",
    enterprise: "無限制",
    others: "有限",
  },
  {
    feature: "支援回應時間",
    featureEn: "Support Response",
    explorer: "48 小時",
    growth: "4 小時",
    enterprise: "1 小時",
    others: "1-3 天",
  },
  {
    feature: "成效報告",
    featureEn: "Impact Reports",
    explorer: "每週 Email",
    growth: "每週 + 每月深度",
    enterprise: "每天 + Executive Summary",
    others: "每季",
  },
  {
    feature: "Agent 間協作",
    featureEn: "Agent Orchestration",
    explorer: "❌",
    growth: "✅",
    enterprise: "✅",
    others: "❌",
  },
  {
    feature: "私有化部署",
    featureEn: "Private Deployment",
    explorer: "❌",
    growth: "❌",
    enterprise: "✅",
    others: "昂貴",
  },
  {
    feature: "專屬 CSM",
    featureEn: "Dedicated CSM",
    explorer: "❌",
    growth: "❌",
    enterprise: "✅",
    others: "可能需要加價",
  },
  {
    feature: "SLA 運行時間",
    featureEn: "SLA Uptime",
    explorer: "99.5%",
    growth: "99.9%",
    enterprise: "99.99%",
    others: "無",
  },
  {
    feature: "每月價格",
    featureEn: "Monthly Price",
    explorer: "TWD 15,000",
    growth: "TWD 45,000",
    enterprise: "聯絡議價",
    others: "TWD 5,000-30,000",
  },
];
