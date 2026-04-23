"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ============ HEADER ============
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "中文">("中文");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-emerald-500 flex items-center justify-center font-bold text-white">
              AI
            </div>
            <span className="font-bold text-lg text-white hidden sm:block">Agent Team</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "運作方式", id: "how-it-works" },
              { label: "服務項目", id: "services" },
              { label: "案例研究", id: "case-studies" },
              { label: "方案比較", id: "pricing" },
              { label: "常見問題", id: "faq" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === "EN" ? "中文" : "EN")}
              className="text-xs text-gray-400 hover:text-white border border-gray-700 rounded px-2 py-1"
            >
              {lang}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden sm:block bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              免費顧問
            </button>
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              <nav className="flex flex-col gap-2">
                {[
                  { label: "運作方式", id: "how-it-works" },
                  { label: "服務項目", id: "services" },
                  { label: "案例研究", id: "case-studies" },
                  { label: "方案比較", id: "pricing" },
                  { label: "常見問題", id: "faq" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-300 hover:text-white py-2 border-b border-gray-800"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-emerald-500 text-white font-medium px-4 py-3 rounded-lg mt-2"
                >
                  免費顧問
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

// ============ HERO SECTION ============
function HeroSection() {
  const stats = [
    { number: "5", label: "AI Agents" },
    { number: "24/7", label: "Autonomous Ops" },
    { number: "<3m", label: "Avg. Response" },
    { number: "99%", label: "Task Routing" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl animate-float delay-300" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-purple-900/50 border border-purple-500/30 rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-sm text-purple-200">Cardano Blockchain Powered</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
        >
          <span className="gradient-text">AI Agent Team</span>
          <br />
          <span className="text-white">Cardano-Powered Autonomous Squad</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Five autonomous agents, perfectly orchestrated
        </motion.p>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12"
        >
          {stats.map((stat, i) => (
            <div key={i} className="glass rounded-xl p-4 md:p-6 animate-float" style={{ animationDelay: `${i * 200}ms` }}>
              <div className="text-2xl md:text-4xl font-extrabold text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 animate-pulse-glow"
          >
            Get Free Consultation
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

// ============ SOCIAL PROOF BAR ============
function SocialProofBar() {
  const items = [
    { icon: "🛡️", text: "SOC 2 Type II 合規" },
    { icon: "🔒", text: "GDPR Ready" },
    { icon: "⚡", text: "99.9% 運行時間 SLA" },
    { icon: "📡", text: "24/7 監控" },
    { icon: "🔗", text: "Cardano 區塊鏈信任層" },
  ];

  return (
    <section className="bg-[var(--color-surface)] py-6 border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ HOW IT WORKS ============
function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      num: "01",
      title: "需求探索與評估",
      desc: "分析您的業務流程,找出最高價值的 AI 自動化切入點",
      icon: "🔍",
    },
    {
      num: "02",
      title: "Agent 設計與配置",
      desc: "團隊為您量身配置和協調專屬的 AI Agent",
      icon: "⚙️",
    },
    {
      num: "03",
      title: "無縫系統整合",
      desc: "Agent 與您現有系統無縫整合,確保最小干擾、最大投資回報",
      icon: "🔗",
    },
    {
      num: "04",
      title: "持續監控與優化",
      desc: "持續效能監控與迭代優化,保持 AI 在最高效率運行",
      icon: "📊",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">四步驟啟動您的 AI 代理團隊</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-purple-500/50 transition-colors group"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <div className="text-purple-400 font-bold text-sm mb-2">Step {step.num}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ AGENT WORKFLOW DEMO ============
function AgentWorkflowDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  const agents = [
    { name: "Dva", role: "任務路由", time: "0s", icon: "⚡", color: "from-yellow-500 to-orange-500" },
    { name: "Ivy", role: "市場分析", time: "30s", icon: "🔭", color: "from-blue-500 to-cyan-500" },
    { name: "Alan", role: "系統實作", time: "2min", icon: "⚙️", color: "from-purple-500 to-pink-500" },
    { name: "Sophia", role: "品質把關", time: "2h 30min", icon: "✅", color: "from-emerald-500 to-teal-500" },
    { name: "Mia", role: "文件生成", time: "2h 55min", icon: "📝", color: "from-rose-500 to-red-500" },
  ];

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (agents.length + 1));
    }, 1500);
    return () => clearInterval(interval);
  }, [isInView, agents.length]);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">3 小時完成,零人工介入</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">看 5 個 AI Agent 如何協作完成複雜任務</p>
        </motion.div>

        {/* Agent cards */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-emerald-500 to-rose-500 hidden lg:block" />

          <div className="space-y-4">
            {agents.map((agent, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className={`relative flex items-center gap-6 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div
                    className={`glass rounded-xl p-4 md:p-6 transition-all duration-500 ${
                      activeStep >= i + 1 ? "border-emerald-500/50 shadow-lg shadow-emerald-500/20" : "opacity-60"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${agent.color} flex items-center justify-center text-2xl`}>
                        {agent.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{agent.name}</h4>
                        <p className="text-sm text-gray-400">{agent.role}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">→ {agent.time}</div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex w-4 h-4 rounded-full bg-purple-500 border-4 border-background z-10 flex-shrink-0" />

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>

          {/* Final status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView && activeStep === agents.length ? { opacity: 1, scale: 1 } : {}}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-6 py-3">
              <span className="text-emerald-400 text-xl">✅</span>
              <span className="text-emerald-300 font-bold">3 小時完成</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-400 text-sm">Cardano 區塊鏈已寫入不可竄改的任務完成證明</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============ KEY METRICS ============
function KeyMetrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const metrics = [
    { value: "3x", label: "平均投資報酬率", sub: "以 Explorer 方案一年計算" },
    { value: "85%", label: "人工工時節省", sub: "重複性任務自動化後" },
    { value: "<30 days", label: "首次見效時間", sub: "從啟動到第一次產出" },
    { value: "99.9%", label: "系統運行時間", sub: "全年不中斷服務" },
  ];

  return (
    <section className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-purple-900/30 to-transparent border border-purple-500/20"
            >
              <div className="text-3xl md:text-5xl font-extrabold text-white mb-2">{metric.value}</div>
              <div className="font-semibold text-white mb-1">{metric.label}</div>
              <div className="text-xs text-gray-400">{metric.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ DIFFERENTIATORS ============
function Differentiators() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    { icon: "⚡", title: "48 小時內啟動", desc: "從需求確認到首個 Agent 上線,確保 48 小時內見到初步成效" },
    { icon: "🎯", title: "100% 成果導向", desc: "不賣功能,賣成效。每一個環節都對標可量化的商業 KPI" },
    { icon: "🔄", title: "無縫替換現有系統", desc: "與現有系統無痛整合,不衝擊現有流程" },
    { icon: "📈", title: "投資報酬率透明", desc: "每季提供成效報告,清楚呈現具體成本節省與營收增長" },
    { icon: "🛡️", title: "企業級安全合規", desc: "SOC 2 Type II、TLS 1.3、ISO 27001 資料中心" },
    { icon: "🤝", title: "專屬客戶成功經理", desc: "Enterprise 客戶標配,確保 AI 應用持續創造價值" },
  ];

  return (
    <section className="py-20 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">為什麼選擇我們?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">6 大核心優勢,重新定義企業 AI 應用</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:border-emerald-500/30 transition-colors"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CLIENT LOGO WALL ============
function ClientLogoWall() {
  const clients = [
    { name: "芯耀科技", industry: "Semiconductor" },
    { name: "雲馳軟體", industry: "Enterprise Software" },
    { name: "元智金服", industry: "FinTech" },
    { name: "慧診健康", industry: "HealthTech" },
    { name: "優品電商", industry: "E-Commerce" },
    { name: "領航製造", industry: "Smart Manufacturing" },
    { name: "明日教育", industry: "EdTech" },
    { name: "馳遠物流", industry: "Logistics" },
  ];

  const stats = ["50+ 企業客戶", "1,200+ 任務完成", "3+ Years 生產運行", "TWD 2B+ 為客戶節省成本"];

  return (
    <section className="py-20 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted by enterprise clients</h2>
        </motion.div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl p-6 flex flex-col items-center justify-center hover:border-purple-500/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-emerald-500 flex items-center justify-center mb-3">
                <span className="text-white font-bold">{client.name[0]}</span>
              </div>
              <div className="font-semibold text-sm text-center">{client.name}</div>
              <div className="text-xs text-gray-500">{client.industry}</div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-gray-400">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>{stat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CASE STUDIES ============
function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cases = [
    {
      industry: "電子商務",
      company: "優品電商",
      size: "員工 120 人,年營收 TWD 8 億元",
      challenge: "客服人力 12 人,仍應付不了促銷檔期的 300% 流量暴增,平均回覆時間 > 4 小時",
      solution: "部署 Dva + Ivy + Sophia 三 Agent 協作智能客服",
      results: [
        { label: "平均回覆時間", before: "4 小時", after: "3 分鐘", improvement: "-99%" },
        { label: "客戶滿意度", before: "62%", after: "87%", improvement: "+40%" },
        { label: "人工客服工時", before: "120 小時/月", after: "18 小時/月", improvement: "-85%" },
        { label: "每月客服成本", before: "TWD 240,000", after: "TWD 52,000", improvement: "-78%" },
      ],
      roi: "10.8x",
      quote: "過去每檔周年慶我們都要加派 20 名臨時客服,今年第一次全程沒有對外公佈客服徵人資訊。",
      author: "優品電商 營運總監 陳雅惠",
    },
    {
      industry: "金融科技",
      company: "元智金服",
      size: "員工 80 人,服務 200+ 企業客戶,管理資金流水 TWD 120 億/年",
      challenge: "市場報告依賴外部顧問,每份報告成本 TWD 50,000,生產週期 3 週",
      solution: "Ivy Agent 24/7 監控 30+ 產業資訊來源,Alan Agent 即時處理數據並生成圖表",
      results: [
        { label: "報告生成時間", before: "3 週", after: "2 小時", improvement: "-99%" },
        { label: "年度報告成本", before: "TWD 600,000", after: "TWD 0", improvement: "-100%" },
        { label: "異常交易偽陽性率", before: "35%", after: "6%", improvement: "-83%" },
        { label: "風控團隊人天/月", before: "120 人天", after: "24 人天", improvement: "-80%" },
      ],
      roi: "10.2x",
      quote: "我們本來只打算用 AI 做客服,沒想到情報系統才是最讓我驚艷的。",
      author: "元智金服 執行長 黃志遠",
    },
    {
      industry: "智慧製造",
      company: "領航製造",
      size: "員工 1,500 人,年營收 TWD 52 億元",
      challenge: "ERP、CRM、WMS、MES 四大系統各自獨立,跨系統資料比對需 3 人天 / 月",
      solution: "Alan Agent 重新設計 API 整合架構,打通四大系統,實現單一資料視圖",
      results: [
        { label: "API 延遲(P99)", before: "1,200ms", after: "360ms", improvement: "-70%" },
        { label: "跨系統比對時間", before: "3 人天/月", after: "5 分鐘/次", improvement: "-99%" },
        { label: "人為錯誤率", before: "12%", after: "0%", improvement: "-100%" },
        { label: "出貨延遲罰款/年", before: "TWD 1,800,000", after: "TWD 180,000", improvement: "-90%" },
      ],
      roi: "10.9x",
      quote: "這是我做 IT 二十年來,第一個讓我覺得真的解決問題的專案。",
      author: "領航製造 資訊長 李明川",
    },
  ];

  return (
    <section id="case-studies" className="py-20 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">真實案例</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Real Results Across Industries</p>
        </motion.div>

        {/* Case tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {cases.map((c, i) => (
            <button
              key={i}
              onClick={() => setActiveCase(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeCase === i
                  ? "bg-purple-600 text-white"
                  : "bg-[var(--color-surface)] text-gray-400 hover:text-white"
              }`}
            >
              {c.company}
            </button>
          ))}
        </div>

        {/* Active case */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left - Info */}
              <div>
                <div className="inline-block bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm mb-4">
                  {cases[activeCase].industry}
                </div>
                <h3 className="text-2xl font-bold mb-2">{cases[activeCase].company}</h3>
                <p className="text-gray-400 text-sm mb-4">{cases[activeCase].size}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">痛點</div>
                    <p className="text-sm">{cases[activeCase].challenge}</p>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">解決方案</div>
                    <p className="text-sm">{cases[activeCase].solution}</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="border-l-2 border-emerald-500 pl-4 italic text-gray-300 text-sm mb-4">
                  "{cases[activeCase].quote}"
                  <div className="not-italic text-gray-500 mt-1">— {cases[activeCase].author}</div>
                </div>

                {/* ROI badge */}
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-lg px-4 py-2">
                  <span className="text-emerald-400 font-bold">ROI: {cases[activeCase].roi}</span>
                  <span className="text-gray-400 text-sm">(投資 1 元,回收 {cases[activeCase].roi} 元)</span>
                </div>
              </div>

              {/* Right - Results table */}
              <div>
                <div className="text-sm font-semibold mb-4">部署成效</div>
                <div className="space-y-3">
                  {cases[activeCase].results.map((r, i) => (
                    <div key={i} className="bg-[var(--color-surface)] rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-2">{r.label}</div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="text-gray-500 line-through">{r.before}</div>
                        <div className="text-emerald-400">→</div>
                        <div className="font-semibold text-white">{r.after}</div>
                        <div className="ml-auto text-emerald-400 font-bold">{r.improvement}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ============ FEATURE COMPARISON ============
function FeatureComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { label: "部署速度", us: "48 小時啟動", saas: "即時開通", it: "3-6 個月" },
    { label: "系統整合", us: "無縫串接主流系統", saas: "有限 API", it: "客製化但昂貴" },
    { label: "Agent 協作", us: "5 個 Agent 即時協作", saas: "無", it: "無" },
    { label: "反應時間", us: "分鐘級複雜任務", saas: "即時(單一場景)", it: "T+1 ~ T+3" },
    { label: "成效報告", us: "每週主動匯報", saas: "基礎後台", it: "每季檢討" },
    { label: "隱私保護", us: "私有化部署可選", saas: "共享雲端", it: "可私有化(昂貴)" },
    { label: "擴展性", us: "按需擴展", saas: "受限平台", it: "完全自訂(慢)" },
    { label: "月費參考", us: "TWD 15,000 起", saas: "TWD 5,000-30,000", it: "TWD 500,000+" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-8"
        >
          <p className="text-sm text-purple-400 uppercase tracking-wider mb-4">AI Agent Team vs. alternatives</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">你們的 AI Agent 和市面上的方案有什麼不同?</h2>
          <p className="text-emerald-400 font-medium">and the answer is not even close.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left py-4 px-4 font-semibold text-gray-400">功能維度</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-400">一般 SaaS 工具</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-400">傳統 IT 委外</th>
                <th className="text-center py-4 px-4 font-bold text-emerald-400 bg-emerald-500/10 rounded-t-lg">我們的 AI Agent Team</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className="border-b border-[var(--color-border)] hover:bg-[var(--color-surface)]/50 transition-colors">
                  <td className="py-4 px-4 text-sm font-medium">{f.label}</td>
                  <td className="py-4 px-4 text-sm text-center text-gray-400">{f.saas}</td>
                  <td className="py-4 px-4 text-sm text-center text-gray-400">{f.it}</td>
                  <td className="py-4 px-4 text-sm text-center font-semibold text-emerald-400 bg-emerald-500/5">{f.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

// ============ SERVICES GRID ============
function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    { icon: "🤖", name: "AI Agent 開發", desc: "從需求訪談到上線部署,打造符合業務場景的自主 AI 代理系統" },
    { icon: "🔗", name: "流程自動化", desc: "串接現有系統,把重複性高的人工流程轉為 24/7 自動運作的 AI 管線" },
    { icon: "📊", name: "市場情報分析", desc: "即時監控產業動態、競爭對手與市場趨勢,提供數據驅動的決策建議" },
    { icon: "📝", name: "文件與知識庫建置", desc: "將散落的組織知識結構化,建立可搜尋、可更新的智能知識庫" },
    { icon: "💬", name: "智能客服系統", desc: "部署 AI 客服代理處理 FAQ、訂單查詢與初步客戶問題" },
    { icon: "🚀", name: "企業 AI 諮詢", desc: "評估組織現況,找出最高價值的 AI 應用切入點,制定階段性導入藍圖" },
    { icon: "🔍", name: "AI 系統健檢", desc: "對現有 AI 系統進行全面評估,發現瓶頸、風險與優化空間" },
    { icon: "📈", name: "商業智慧儀表板", desc: "整合多元資料來源,打造即時更新的管理儀表板" },
    { icon: "🤝", name: "跨系統 API 整合", desc: "打通 ERP、CRM、CMS 等企業系統,消除資料孤島" },
    { icon: "🧠", name: "AI 教育訓練", desc: "為企業團隊量身打造 AI 工具培訓課程" },
    { icon: "🛡️", name: "AI 合規與安全顧問", desc: "協助確保 AI 系統符合 GDPR、SOC 2、ISO 27001 等法規標準" },
    { icon: "🔮", name: "AI 產品策略顧問", desc: "協助制定 AI 產品 Roadmap 與競爭策略" },
  ];

  return (
    <section id="services" className="py-20 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">服務項目</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">From strategy to deployment — we cover the full AI adoption lifecycle.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl p-4 hover:border-purple-500/30 transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-2xl mb-3">{s.icon}</div>
              <h3 className="font-semibold mb-2 text-sm">{s.name}</h3>
              <p className="text-xs text-gray-400 line-clamp-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ PRICING SECTION ============
function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: "Explorer",
      price: "TWD 15,000",
      period: "/月",
      tagline: "初次導入首選",
      badge: "熱門",
      target: "1-50 人小型團隊,單一流程驗證",
      features: [
        "✅ 部署 1 個專屬 AI Agent",
        "✅ 基本流程自動化(≤5 步驟流程)",
        "✅ 與 1 個外部系統整合",
        "✅ 每月 1 次策略檢討(30 分鐘)",
        "✅ Email 支援(48 小時回覆)",
        "✅ 每週成效報告",
        "✅ 30 天不滿意退款保證",
      ],
      notIncluded: [
        "❌ Agent 間協作功能",
        "❌ 多系統 API 整合",
        "❌ 專屬客戶成功經理",
        "❌ 私有化部署",
      ],
      cta: "Get Quote",
      ctaLink: "mailto:contact@example.com?subject=Explorer Plan Inquiry",
    },
    {
      name: "Growth",
      price: "TWD 45,000",
      period: "/月",
      tagline: "規模化成長",
      badge: "Most Popular",
      target: "50-200 人中型團隊,3-5 流程同時自動化",
      features: [
        "✅ 部署 3 個 AI Agent(含 Agent 間協作)",
        "✅ 進階流程自動化(無步驟限制)",
        "✅ 與最多 5 個外部系統整合",
        "✅ 每週 1 次策略檢討(1 小時)",
        "✅ 線上即時支援(Slack/Teams)",
        "✅ 每週 + 每月深度成效報告",
        "✅ 30 天免費試用",
        "✅ HubSpot CRM 整合",
      ],
      notIncluded: [
        "❌ 專屬客戶成功經理",
        "❌ 私有化部署",
        "❌ 24/7 優先電話支援",
      ],
      cta: "Start Free 30-Day Trial",
      ctaLink: "mailto:contact@example.com?subject=Growth Plan Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "聯絡我們",
      period: "",
      tagline: "企業級",
      badge: "Enterprise",
      target: "200 人以上,多系統整合,全面 AI 轉型",
      features: [
        "✅ 部署無限個 AI Agent(含完整編制)",
        "✅ 專屬系統架構設計與 DevOps 團隊",
        "✅ 與企業所有相關系統整合",
        "✅ 24/7 優先即時支援(1 小時回覆)",
        "✅ 專屬客戶成功經理(CSM)",
        "✅ 每週深度報告 + 月度 Executive Summary",
        "✅ 私有化部署選項",
        "✅ SLA 99.99% 運行時間保障",
        "✅ 第三方資安審計陪同",
      ],
      notIncluded: [],
      cta: "Contact Us",
      ctaLink: "mailto:contact@example.com?subject=Enterprise Plan Inquiry",
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">方案報價</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">選擇適合您企業規模的方案,靈活擴展</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-purple-900/50 to-[var(--color-surface)] border-2 border-purple-500 scale-105"
                  : "glass"
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold ${
                  plan.highlighted ? "bg-emerald-500 text-white" : "bg-purple-600 text-white"
                }`}>
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-extrabold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">{plan.tagline}</p>
                <p className="text-xs text-gray-500 mt-1">{plan.target}</p>
              </div>

              <div className="space-y-2 mb-6">
                {plan.features.map((f, j) => (
                  <div key={j} className="text-sm">{f}</div>
                ))}
                {plan.notIncluded.map((f, j) => (
                  <div key={j} className="text-sm text-gray-500">{f}</div>
                ))}
              </div>

              <a
                href={plan.ctaLink}
                className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                    : "bg-[var(--color-surface)] hover:bg-[var(--color-surface-light)] text-white"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 text-sm text-gray-400">
          年付方案享 2 個月免費優惠 | Explorer 年費 TWD 150,000 | Growth 年費 TWD 450,000
        </div>
      </div>
    </section>
  );
}

// ============ FAQ ============
function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "和市面 SaaS 有何不同?",
      a: "不是單一工具,是自主協作的 Agent 團隊,端到端自動化,5 個 Agent 各司其職即時協作。相比一般 SaaS 只能處理單一場景,我們能處理跨系統、多步驟的複雜任務。",
    },
    {
      q: "和 RPA(流程機器人)有什麼不同?",
      a: "RPA 只能執行預先定義的規則,異常時直接失敗;AI Agent 能自主判斷、學習,例外時主動轉人工。RPA 是規則驅動,AI Agent 是智能驅動。",
    },
    {
      q: "部署需要多久?",
      a: "Explorer 方案 1-2 週,Growth 方案 2-4 週,Enterprise 方案 1-3 個月(視系統複雜度)。我們保證 48 小時內啟動,讓您快速見到成效。",
    },
    {
      q: "資料安全如何保障?",
      a: "SOC 2 Type II、TLS 1.3、ISO 27001 認證,可私有化部署,支援地端部署,資料不出客戶網路。企業級的安全標準,讓您安心使用。",
    },
    {
      q: "會不會有 Vendor Lock-in(廠商綁定)問題?",
      a: "我們採用 API 優先架構,所有 Agent 間通訊標準化,未來若要遷移,資料可完整匯出,應用層不受影響。",
    },
    {
      q: "效果不如預期怎麼辦?",
      a: "Explorer 30 天退款;Growth 30 天免費試用;Enterprise 有里程碑評估,若未達標可終止合約。我們對成效負責。",
    },
    {
      q: "需要技術背景嗎?",
      a: "不需要,我們從設定到培訓全程支援。沒有技術背景的業務人員也能操作 dashboard。",
    },
    {
      q: "定價含隱藏費用嗎?",
      a: "每個方案已明確列出「含什麼」與「不含什麼」,無預期外費用。額外加購項目皆有明確報價。",
    },
    {
      q: "如何衡量 AI 的成效?",
      a: "每週主動寄送成效報告,包含:任務完成率、平均處理時間、節省工時、成本節省金額、客戶滿意度等 KPI。",
    },
    {
      q: "可以先試用嗎?",
      a: "Growth 方案提供 30 天免費試用(完整功能),亦提供 30 分鐘免費顧問諮詢。",
    },
    {
      q: "適用產業與案例?",
      a: "已服務電商、金融科技、健康醫療、智慧製造、教育科技等 9 大產業,共 5 個深度案例可供參考。",
    },
    {
      q: "如果我們的流程很複雜,AI 能處理嗎?",
      a: "這正是我們的強項。複雜、多步驟、跨系統的流程正是 Agent 協作的價值所在。顧問會在 POC 階段驗證可行性。",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">常見問題</h2>
          <p className="text-gray-400">還有問題? 歡迎聯絡我們</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-4 flex items-center justify-between gap-4"
              >
                <span className="font-medium">{faq.q}</span>
                <span className={`transform transition-transform ${openIndex === i ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-4 pb-4 text-sm text-gray-400"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CTA SECTION ============
function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center glass rounded-3xl p-8 md:p-12 bg-gradient-to-br from-purple-900/50 to-emerald-900/30 border border-purple-500/30"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your business?</h2>
          <p className="text-lg text-gray-300 mb-8">Start Your AI Journey Today</p>
          
          <p className="text-sm text-gray-400 mb-8 max-w-xl mx-auto">
            Schedule a free 30-minute consultation. No commitment - just honest advice on where AI can create the most value for your organization.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span className="text-emerald-400">✓</span> 無需信用卡
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span className="text-emerald-400">✓</span> 30 分鐘深度顧問
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span className="text-emerald-400">✓</span> 客製化建議報告
            </div>
          </div>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105"
          >
            Schedule Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// ============ CONTACT FORM ============
function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const companySizes = ["1-10 人", "11-50 人", "51-200 人", "201-1000 人", "1000+ 人"];
  const mainNeeds = ["智能客服", "流程自動化", "市場情報", "系統整合", "教育訓練", "其他"];
  const plans = ["Explorer", "Growth", "Enterprise"];

  const [form, setForm] = useState({
    name: "",
    company: "",
    title: "",
    size: "",
    email: "",
    need: "",
    plans: [] as string[],
    message: "",
  });

  const handlePlanToggle = (plan: string) => {
    setForm((prev) => ({
      ...prev,
      plans: prev.plans.includes(plan)
        ? prev.plans.filter((p) => p !== plan)
        : [...prev.plans, plan],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`AI Agent Team 諮詢 - ${form.company}`);
    const body = encodeURIComponent(
      `姓名: ${form.name}\n公司: ${form.company}\n職稱: ${form.title}\n規模: ${form.size}\nEmail: ${form.email}\n需求: ${form.need}\n方案: ${form.plans.join(", ")}\n說明: ${form.message}`
    );
    window.location.href = `mailto:contact@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">免費顧問諮詢</h2>
          <p className="text-gray-400">填寫表單,我們將在 24 小時內與您聯繫</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6 md:p-8 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">姓名 *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">公司名稱 *</label>
              <input
                type="text"
                required
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">職稱 *</label>
              <input
                type="text"
                required
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">公司規模 *</label>
              <select
                required
                value={form.size}
                onChange={(e) => setForm({ ...form, size: e.target.value })}
                className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
              >
                <option value="">請選擇</option>
                {companySizes.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">主要需求 *</label>
            <select
              required
              value={form.need}
              onChange={(e) => setForm({ ...form, need: e.target.value })}
              className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
            >
              <option value="">請選擇</option>
              {mainNeeds.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-4">想了解的方案 (可複選)</label>
            <div className="flex flex-wrap gap-3">
              {plans.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => handlePlanToggle(p)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    form.plans.includes(p)
                      ? "bg-purple-600 text-white"
                      : "bg-[var(--color-surface)] text-gray-400 hover:text-white"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">額外說明 (選填)</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors resize-none"
              placeholder="請描述您的業務需求或想了解的問題..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl text-lg transition-colors"
          >
            送出諮詢
          </button>
        </motion.form>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] py-12 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-emerald-500 flex items-center justify-center font-bold text-white">
              AI
            </div>
            <span className="font-bold text-white">Agent Team</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="mailto:contact@example.com" className="hover:text-white transition-colors">
              contact@example.com
            </a>
            <a href="#" className="hover:text-white transition-colors">隱私權政策</a>
            <a href="#" className="hover:text-white transition-colors">服務條款</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.008 1.792-4.669 4.532-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.126-5.864 10.126-11.854z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="text-center mt-8 text-xs text-gray-500">
          © 2026 AI Team. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ============ MAIN PAGE ============
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SocialProofBar />
      <HowItWorks />
      <AgentWorkflowDemo />
      <KeyMetrics />
      <Differentiators />
      <ClientLogoWall />
      <CaseStudies />
      <FeatureComparison />
      <ServicesGrid />
      <PricingSection />
      <FAQ />
      <CTASection />
      <ContactForm />
      <Footer />
    </main>
  );
}