import Link from "next/link";
import { notFound } from "next/navigation";
import { getAgentById, agents } from "@/data/agents";

export function generateStaticParams() {
  return agents.map((agent) => ({ id: agent.id }));
}

export default async function AgentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const agent = getAgentById(id);
  if (!agent) return notFound();

  return (
    <main className="min-h-screen pt-24 px-4 pb-16">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-sm text-primary hover:text-white transition-colors">← Back to team</Link>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="card-glow rounded-3xl p-8 bg-[var(--card-bg)] border border-[var(--border)]">
            <div className="flex items-start gap-5">
              <div className={`w-20 h-20 rounded-2xl ${agent.color} flex items-center justify-center text-4xl`}>{agent.emoji}</div>
              <div>
                <div className="text-sm text-primary font-semibold">{agent.roleZh}</div>
                <h1 className="text-4xl font-extrabold text-[var(--text-primary)] mt-1">{agent.nameZh}</h1>
                <p className="text-[var(--text-secondary)] mt-3 max-w-2xl">{agent.bioZh}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {agent.highlights.map((item) => (
                <div key={item.labelZh} className="rounded-2xl border border-[var(--border)] bg-white/5 p-4 text-center">
                  <div className="text-xs text-[var(--text-secondary)]">{item.labelZh}</div>
                  <div className="text-xl font-bold text-[var(--text-primary)] mt-2">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">能力標籤</h2>
              <div className="flex flex-wrap gap-2">
                {agent.skills.map((skill) => (
                  <span key={skill.name} className="px-3 py-1.5 rounded-full bg-white/5 border border-[var(--border)] text-sm text-[var(--text-secondary)]">
                    {skill.nameZh}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">標語</h2>
              <p className="text-[var(--text-secondary)] italic">&ldquo;{agent.taglineZh}&rdquo;</p>
            </div>
          </section>

          <aside className="space-y-6">
            <section className="card-glow rounded-3xl p-6 bg-[var(--card-bg)] border border-[var(--border)]">
              <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3">使用案例</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">{agent.caseStudyZh}</p>
            </section>

            <section className="card-glow rounded-3xl p-6 bg-[var(--card-bg)] border border-[var(--border)]">
              <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3">即時對話入口</h2>
              <p className="text-[var(--text-secondary)] mb-4">點擊即可跳轉到團隊頻道，發送訊息或提出需求。</p>
              <a href={agent.contactUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#5865F2] text-white font-semibold hover:opacity-90 transition-opacity">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
                {agent.contactLabel}
              </a>
            </section>

            <section className="card-glow rounded-3xl p-6 bg-[var(--card-bg)] border border-[var(--border)]">
              <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3">其他團隊成員</h2>
              <div className="flex flex-col gap-2">
                {agents.filter((a) => a.id !== agent.id).map((a) => (
                  <Link key={a.id} href={`/agents/${a.id}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div className={`w-8 h-8 rounded-lg ${a.color} flex items-center justify-center text-sm`}>{a.emoji}</div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-[var(--text-primary)] truncate">{a.nameZh}</div>
                      <div className="text-xs text-[var(--text-secondary)]">{a.roleZh}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
