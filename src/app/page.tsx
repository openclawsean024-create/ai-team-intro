"use client";

import { useState } from "react";
import { agents, metrics, workflowSteps, type Agent } from "@/data/agents";

/* ─── Hero ─────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg" />
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-xs font-medium text-primary mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Cardano-Powered Autonomous Squad
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4">
          <span className="gradient-text">AI Agent Team</span>
        </h1>
        <p className="text-lg sm:text-xl text-text-secondary font-mono mb-8">
          Cardano-Powered Autonomous Squad
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#agents"
            className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-colors"
          >
            Meet the Team
          </a>
          <a
            href="#workflow"
            className="px-6 py-3 border border-white/10 hover:border-white/30 text-text-secondary hover:text-white font-medium rounded-xl transition-colors"
          >
            View Workflow
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary">
        <span className="text-xs">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-text-secondary to-transparent" />
      </div>
    </section>
  );
}

/* ─── Agent Card ───────────────────────────────────────────────────────── */
function AgentCard({ agent }: { agent: Agent }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`card-hover card-glow rounded-2xl p-6 bg-[#1a1a2e]/80 backdrop-blur border border-white/5 flex flex-col gap-4 ${expanded ? "ring-2 ring-primary/40" : ""}`}
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        <div
          className={`w-14 h-14 rounded-xl ${agent.color} flex items-center justify-center text-2xl shrink-0`}
        >
          {agent.emoji}
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-white truncate">{agent.name}</h3>
          <p className="text-sm text-primary font-medium">{agent.role}</p>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-sm text-text-secondary leading-relaxed">
        &ldquo;{agent.tagline}&rdquo;
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {agent.skills.map((skill) => (
          <span
            key={skill.name}
            className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-text-secondary"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Agents Section ───────────────────────────────────────────────────── */
function AgentsSection() {
  return (
    <section id="agents" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Meet the Squad
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Five autonomous AI agents working in perfect harmony — each a specialist, together an unstoppable team.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </section>
  );
}

/* ─── Workflow Section ─────────────────────────────────────────────────── */
function WorkflowSection() {
  return (
    <section id="workflow" className="py-24 bg-[#1a1a2e]/30 border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How We Work
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A seamless three-phase workflow — from task assignment to delivery.
          </p>
        </div>

        {/* Workflow steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workflowSteps.map((step, i) => {
            const agent = agents.find((a) => a.id === step.id)!;
            return (
              <div key={step.id} className="relative">
                {/* Connector arrow */}
                {i < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 workflow-line -translate-x-1/2 z-0" />
                )}
                <div className="relative z-10 card-glow rounded-2xl p-6 bg-[#1a1a2e]/80 backdrop-blur border border-white/5 flex flex-col items-center text-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-xl ${agent.color} flex items-center justify-center text-2xl`}
                  >
                    {agent.emoji}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{step.label}</h3>
                    <p className="text-sm text-text-secondary">{step.time}</p>
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

/* ─── Metrics Section ──────────────────────────────────────────────────── */
function MetricsSection() {
  return (
    <section id="metrics" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          By the Numbers
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="card-glow rounded-2xl p-8 bg-[#1a1a2e]/80 backdrop-blur border border-white/5 text-center"
          >
            <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2 metric-enter">
              {m.value}
            </div>
            <div className="text-sm text-text-secondary font-medium">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <AgentsSection />
      <WorkflowSection />
      <MetricsSection />
    </main>
  );
}
