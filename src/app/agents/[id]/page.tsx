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
          <section className="card-glow rounded-3xl p-8 bg-[#1a1a2e]/80 border border-white/5">
            <div className="flex items-start gap-5">
              <div className={`w-20 h-20 rounded-2xl ${agent.color} flex items-center justify-center text-4xl`}>{agent.emoji}</div>
              <div>
                <div className="text-sm text-primary font-semibold">{agent.roleZh}</div>
                <h1 className="text-4xl font-extrabold text-white mt-1">{agent.nameZh}</h1>
                <p className="text-text-secondary mt-3 max-w-2xl">{agent.bioZh}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {agent.highlights.map((item) => (
                <div key={item.labelZh} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <div className="text-xs text-text-secondary">{item.labelZh}</div>
                  <div className="text-xl font-bold text-white mt-2">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-white mb-3">能力標籤</h2>
              <div className="flex flex-wrap gap-2">
                {agent.skills.map((skill) => (
                  <span key={skill.name} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-text-secondary">
                    {skill.nameZh}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <section className="card-glow rounded-3xl p-6 bg-[#1a1a2e]/80 border border-white/5">
              <h2 className="text-lg font-bold text-white mb-3">使用案例</h2>
              <p className="text-text-secondary leading-relaxed">{agent.caseStudyZh}</p>
            </section>

            <section className="card-glow rounded-3xl p-6 bg-[#1a1a2e]/80 border border-white/5">
              <h2 className="text-lg font-bold text-white mb-3">即時對話入口</h2>
              <p className="text-text-secondary mb-4">點擊即可跳轉到團隊頻道，發送訊息或提出需求。</p>
              <a href={agent.contactUrl} target="_blank" rel="noreferrer" className="inline-flex px-4 py-3 rounded-xl bg-[#5865F2] text-white font-semibold">
                {agent.contactLabel}
              </a>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
