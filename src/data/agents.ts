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
  skills: { name: string; nameZh: string }[];
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
    skills: [
      { name: "Task Routing", nameZh: "任務路由" },
      { name: "Priority Scheduling", nameZh: "優先級排程" },
      { name: "Cross-Agent Comm", nameZh: "跨 Agent 通訊" },
    ],
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
    skills: [
      { name: "Full-Stack Dev", nameZh: "全端開發" },
      { name: "System Architecture", nameZh: "系統架構" },
      { name: "Code Review", nameZh: "程式碼審查" },
    ],
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
    skills: [
      { name: "Quality Assurance", nameZh: "品質保證" },
      { name: "Content Strategy", nameZh: "內容策略" },
      { name: "Stakeholder Comm", nameZh: "利害關係人溝通" },
    ],
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
    skills: [
      { name: "Technical Writing", nameZh: "技術文件撰寫" },
      { name: "Spec Authoring", nameZh: "規格計劃書撰寫" },
      { name: "Knowledge Base Mgmt", nameZh: "知識庫管理" },
    ],
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
    skills: [
      { name: "Process Automation", nameZh: "流程自動化" },
      { name: "Monitoring & Alerts", nameZh: "監控與警報" },
      { name: "Vendor Coordination", nameZh: "廠商協調" },
    ],
    emoji: "🔧",
    color: "bg-cyan-600",
  },
];

export const metrics = [
  { value: "5", label: "AI Agents", labelZh: "位 AI Agent" },
  { value: "24/7", label: "Autonomous Ops", labelZh: "自主運行" },
  { value: "~3h", label: "Avg. Delivery", labelZh: "平均交付" },
  { value: "0", label: "Downtime", labelZh: "停機" },
];

export const workflowSteps = [
  {
    id: "dva",
    label: "Dva 派工",
    labelZh: "Dva Routes Task",
    time: "~0h",
    timeZh: "~0h",
  },
  {
    id: "alan",
    label: "Alan 實作",
    labelZh: "Alan Implements",
    time: "~2h",
    timeZh: "~2h",
  },
  {
    id: "sophia",
    label: "Sophia 審核發布",
    labelZh: "Sophia Reviews & Publishes",
    time: "~1h",
    timeZh: "~1h",
  },
];
