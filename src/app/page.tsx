"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { agents, metrics, workflowSteps, type Agent } from "@/data/agents";
import OrgChart from "@/components/OrgChart";

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-xs font-medium text-primary mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Dynamic Team Directory + Live Contact Entry
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4">
          <span className="gradient-text">AI Agent Team</span>
        </h1>
        <p className="text-lg sm:text-xl text-text-secondary font-mono mb-8">
          透明展示 Agent 能力、狀態與協作關係的互動入口
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#agents" className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-colors">
            Browse Agents
          </a>
          <a href="#org-chart" className="px-6 py-3 border border-white/10 hover:border-white/30 text-text-secondary hover:text-white font-medium rounded-xl transition-colors">
            View Org Chart
          </a>
        </div>
      </div>
    </section>
  );
}

function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Link href={`/agents/${agent.id}`} className="card-hover card-glow rounded-2xl p-6 bg-[var(--card-bg)] backdrop-blur border border-[var(--border)] flex flex-col gap-4 block">
      <div className="flex items-start gap-4">
        <div className={`w-14 h-14 rounded-xl ${agent.color} flex items-center justify-center text-2xl shrink-0`}>
          {agent.emoji}
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-[var(--text-primary)] truncate">{agent.nameZh}</h3>
          <p className="text-sm text-primary font-medium">{agent.roleZh}</p>
        </div>
      </div>

      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">&ldquo;{agent.taglineZh}&rdquo;</p>

      <div className="flex flex-wrap gap-2">
        {agent.skills.map((skill) => (
          <span key={skill.name} className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-[var(--text-secondary)]">
            {skill.nameZh}
          </span>
        ))}
      </div>
      <div className="text-xs text-accent font-medium">View profile →</div>
    </Link>
  );
}

function AgentsSection() {
  const [roleFilter, setRoleFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return agents.filter((agent) => {
      const roleMatch = roleFilter === "All" || agent.roleZh.includes(roleFilter) || agent.role.includes(roleFilter);
      const text = `${agent.name} ${agent.nameZh} ${agent.role} ${agent.roleZh} ${agent.tagline} ${agent.taglineZh} ${agent.skills.map((s) => `${s.name} ${s.nameZh}`).join(" ")}`.toLowerCase();
      return roleMatch && text.includes(query.toLowerCase());
    });
  }, [query, roleFilter]);

  return (
    <section id="agents" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3">團隊成員</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl">每位 Agent 都有清楚角色、能力標籤、聯絡入口與案例，方便內外部快速理解分工。</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="搜尋姓名 / 能力 / 角色" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[var(--text-primary)] outline-none min-w-[260px] placeholder:text-[var(--text-secondary)]" />
          <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[var(--text-primary)] outline-none">
            {['All', 'Coordinator', 'Technical', 'Executive', 'Documentation', 'Support'].map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {filtered.map((agent) => <AgentCard key={agent.id} agent={agent} />)}
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section id="workflow" className="py-24 bg-[var(--bg-card)]/30 border-y border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">協作流程</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">從派工、實作到審核發布，清楚呈現團隊協作關係。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workflowSteps.map((step, i) => {
            const agent = agents.find((a) => a.id === step.id)!;
            return (
              <div key={step.id} className="relative">
                {i < workflowSteps.length - 1 && <div className="hidden md:block absolute top-10 left-full w-full h-0.5 workflow-line -translate-x-1/2 z-0" />}
                <div className="relative z-10 card-glow rounded-2xl p-6 bg-[var(--card-bg)] backdrop-blur border border-[var(--border)] flex flex-col items-center text-center gap-4">
                  <div className={`w-16 h-16 rounded-xl ${agent.color} flex items-center justify-center text-2xl`}>{agent.emoji}</div>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)]">{step.labelZh}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{step.timeZh}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MetricsSection() {
  return (
    <section id="metrics" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">核心指標</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div key={m.labelZh} className="card-glow rounded-2xl p-8 bg-[var(--card-bg)] backdrop-blur border border-[var(--border)] text-center">
            <div className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] mb-2 metric-enter">{m.value}</div>
            <div className="text-sm text-[var(--text-secondary)] font-medium">{m.labelZh}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="card-glow rounded-3xl p-8 sm:p-10 bg-[var(--card-bg)] border border-[var(--border)]">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">聯絡我們</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl">對合作夥伴、投資人或內部團隊成員，這裡是快速發送訊息與查看團隊入口的中心點。</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://discord.gg" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl bg-[#5865F2] text-white font-semibold text-center hover:opacity-90 transition-opacity">Discord</a>
            <a href="mailto:team@example.com" className="px-5 py-3 rounded-xl border border-white/10 text-[var(--text-primary)] font-semibold text-center hover:opacity-80 transition-opacity">合作提案</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AgentsSection />
      <OrgChart />
      <WorkflowSection />
      <MetricsSection />
      <ContactSection />
    </main>
  );
}
