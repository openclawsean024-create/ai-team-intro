"use client";

import { useEffect, useRef, useState } from "react";
import { agents, type Agent } from "@/data/agents";
import Link from "next/link";

type AgentStatus = "online" | "busy" | "offline";

const statusColor: Record<AgentStatus, string> = {
  online: "#10B981",
  busy: "#F59E0B",
  offline: "#EF4444",
};

const statusLabel: Record<AgentStatus, string> = {
  online: "在線",
  busy: "忙碌",
  offline: "離線",
};

function getStatusColor(agentId: string, status: AgentStatus): string {
  return statusColor[status];
}

// Build a simple hierarchy: Dva at top, others below
const hierarchy = {
  id: "dva",
  children: ["alan", "sophia", "mia", "ivy"].map((id) => ({ id })),
};

const nodeWidth = 180;
const nodeHeight = 80;
const levelGap = 120;
const siblingGap = 30;

function buildTree(agentId: string): any {
  if (agentId === "dva") {
    return {
      ...agents.find((a) => a.id === agentId)!,
      children: ["alan", "sophia", "mia", "ivy"].map((id) => ({
        ...agents.find((a) => a.id === id)!,
      })),
    };
  }
  return agents.find((a) => a.id === agentId);
}

interface OrgNodeProps {
  agent: any;
  isRoot?: boolean;
  onClick?: (agent: Agent) => void;
}

function OrgNode({ agent, isRoot = false, onClick }: OrgNodeProps) {
  const [status] = useState<AgentStatus>(() => {
    if (isRoot) return "online";
    const rand = Math.random();
    if (rand < 0.6) return "online";
    if (rand < 0.85) return "busy";
    return "offline";
  });

  return (
    <div
      className={`flex flex-col items-center cursor-pointer group`}
      style={{ width: nodeWidth, height: nodeHeight + 40 }}
      onClick={() => onClick?.(agent)}
    >
      <div
        className={`relative rounded-2xl p-4 bg-[var(--card-bg)] border border-[var(--border)] w-full h-full flex items-center gap-3 transition-all duration-200 group-hover:scale-105 group-hover:shadow-lg`}
        style={{
          boxShadow: "0 0 0 1px rgba(99,102,241,0.2), 0 4px 20px rgba(99,102,241,0.1)",
        }}
      >
        {/* Status dot */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          <div
            className="w-2.5 h-2.5 rounded-full animate-pulse"
            style={{ backgroundColor: getStatusColor(agent.id, status) }}
          />
          <span className="text-[10px] text-[var(--text-secondary)]">{statusLabel[status]}</span>
        </div>

        <div
          className={`w-12 h-12 rounded-xl ${agent.color} flex items-center justify-center text-2xl shrink-0`}
        >
          {agent.emoji}
        </div>

        <div className="min-w-0 flex-1">
          <div className="text-sm font-bold text-[var(--text-primary)] truncate">{agent.nameZh}</div>
          <div className="text-xs text-[var(--accent)] truncate">{agent.roleZh}</div>
        </div>
      </div>

      {/* Connector line down */}
      <div className="w-px h-5 bg-gradient-to-b from-[var(--primary)] to-transparent" />
    </div>
  );
}

interface OrgChartProps {
  onSelectAgent?: (agent: Agent) => void;
}

export default function OrgChart({ onSelectAgent }: OrgChartProps) {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  const rootAgent = agents.find((a) => a.id === "dva")!;
  const children = ["alan", "sophia", "mia", "ivy"].map((id) => agents.find((a) => a.id === id)!);

  const totalWidth = children.length * nodeWidth + (children.length - 1) * siblingGap;
  const centerOffset = totalWidth / 2 - nodeWidth / 2;

  const handleAgentClick = (agent: Agent) => {
    setSelectedAgent(agent);
    onSelectAgent?.(agent);
  };

  return (
    <section id="org-chart" className="py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">團隊架構圖</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            點擊任意 Agent 節點查看詳情或發起對話。
          </p>
        </div>

        {/* Zoom hint */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[var(--text-secondary)]">
            <span>🔍</span> 拖曳移動 · 點擊節點查看詳情
          </span>
        </div>

        {/* Org Chart Container */}
        <div className="relative overflow-x-auto pb-4 rounded-2xl bg-[var(--bg-card)]/30 border border-white/5">
          <div
            className="flex flex-col items-center pt-12 pb-8 px-8"
            style={{ minWidth: Math.max(totalWidth + 80, 600) }}
          >
            {/* Root node */}
            <OrgNode agent={rootAgent} isRoot onClick={handleAgentClick} />

            {/* Horizontal connector from root to children */}
            <div
              className="h-8 w-px bg-gradient-to-b from-[var(--primary)] to-[var(--primary)] opacity-40"
              style={{ marginTop: -4 }}
            />
            {/* Horizontal line */}
            <div
              className="h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-40"
              style={{ width: totalWidth }}
            />

            {/* Children row */}
            <div className="flex items-start gap-6 mt-0" style={{ marginTop: -4 }}>
              {children.map((child) => (
                <div key={child.id} className="flex flex-col items-center">
                  {/* Vertical connector */}
                  <div className="w-px h-8 bg-gradient-to-b from-[var(--primary)] to-transparent opacity-40" />
                  <OrgNode agent={child} onClick={handleAgentClick} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Agent Detail Panel */}
        {selectedAgent && (
          <div className="mt-8 card-glow rounded-2xl p-6 bg-[var(--card-bg)] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className={`w-16 h-16 rounded-2xl ${selectedAgent.color} flex items-center justify-center text-3xl`}>
              {selectedAgent.emoji}
            </div>
            <div className="flex-1">
              <div className="text-xs text-[var(--accent)] font-medium mb-1">{selectedAgent.roleZh}</div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">{selectedAgent.nameZh}</h3>
              <p className="text-[var(--text-secondary)] mt-1 text-sm">&ldquo;{selectedAgent.taglineZh}&rdquo;</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/agents/${selectedAgent.id}`}
                className="px-5 py-2.5 rounded-xl bg-[var(--primary)] text-white font-semibold text-sm text-center hover:opacity-90 transition-opacity"
              >
                查看完整檔案
              </Link>
              <a
                href={selectedAgent.contactUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#5865F2] text-white font-semibold text-sm text-center hover:opacity-90 transition-opacity"
              >
                發送訊息
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
