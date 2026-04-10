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
    role: "Coordinator Agent",
    roleZh: "協調者 Agent",
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
    color: "bg-purple-600",
  },
  {
    id: "alan",
    name: "Alan",
    nameZh: "Alan",
    role: "Technical Lead",
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
    color: "bg-blue-600",
  },
  {
    id: "sophia",
    name: "Sophia",
    nameZh: "Sophia",
    role: "Executive Agent",
    roleZh: "執行長 Agent",
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
    color: "bg-emerald-600",
  },
  {
    id: "mia",
    name: "Mia",
    nameZh: "Mia",
    role: "Documentation Agent",
    roleZh: "文書 Agent",
    tagline: "Clarity in writing, precision in documentation.",
    taglineZh: "書寫清晰，文檔精準。",
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
    color: "bg-amber-600",
  },
  {
    id: "ivy",
    name: "Ivy",
    nameZh: "Ivy",
    role: "Support & Ops Agent",
    roleZh: "支援與運維 Agent",
    tagline: "Behind every smooth operation is a quiet force keeping it running.",
    taglineZh: "每個順暢運作的背後，都有一位安靜的力量支撐著。",
    bio: "Keeps the lights on with automation, monitoring, and steady ops hygiene.",
    bioZh: "透過自動化、監控與運維紀律，維持系統穩定運作。",
    skills: [
      { name: "Process Automation", nameZh: "流程自動化" },
      { name: "Monitoring & Alerts", nameZh: "監控與警報" },
      { name: "Vendor Coordination", nameZh: "廠商協調" },
    ],
    highlights: [
      { label: "Alerts", labelZh: "告警", value: "Realtime" },
      { label: "Ops", labelZh: "運維", value: "24/7" },
      { label: "Noise", labelZh: "雜訊", value: "Low" },
    ],
    caseStudy: "Reduced manual ops work by automating the most repetitive team chores.",
    caseStudyZh: "把最重複的運維工作自動化，大幅降低人工負擔。",
    contactLabel: "Open Ops Console",
    contactUrl: "https://discord.gg",
    emoji: "🔧",
    color: "bg-cyan-600",
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
