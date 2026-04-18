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
