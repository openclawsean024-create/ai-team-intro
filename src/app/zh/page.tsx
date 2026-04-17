import Link from "next/link";
import { agents, type Agent } from "@/data/agents";

/* ─── Language Switch (fixed top-right per SPEC v4) ─────────────────── */
function LanguageSwitch() {
  return (
    <nav className="lang-switch" aria-label="語言切換">
      <Link href="/">EN</Link>
      <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
      <span className="lang-active">中文</span>
    </nav>
  );
}

/* ─── Hero Section (SPEC v4) ─────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg grid-bg" />
      <div className="relative z-10">
        <h1 className="hero-title">AI 代理團隊</h1>
        <p className="hero-subtitle">五位自主代理，完美協調運作</p>
      </div>
    </section>
  );
}

/* ─── Agent Card (SPEC v4) ───────────────────────────────────────────── */
function AgentCard({ agent, index }: { agent: Agent; index: number }) {
  const delayClass = `card-enter card-enter-${index + 1}`;

  return (
    <Link
      href={`/agents/${agent.id}`}
      className={`agent-card ${agent.id} ${delayClass}`}
      aria-label={`查看 ${agent.nameZh} 的個人檔案`}
    >
      {/* Role Badge */}
      <span className="role-badge">{agent.roleZh}</span>

      {/* Name */}
      <h2 className="card-name">{agent.nameZh}</h2>

      {/* Tagline — italic per SPEC */}
      <p className="card-tagline">&ldquo;{agent.taglineZh}&rdquo;</p>

      {/* Divider */}
      <div className="card-divider" />

      {/* Skills */}
      <p className="card-section-label">技能</p>
      <ul className="skill-chips" role="list">
        {agent.skills.map((skill) => (
          <li key={skill.name} className="skill-chip">{skill.nameZh}</li>
        ))}
      </ul>
    </Link>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function ZhHomePage() {
  return (
    <main>
      <LanguageSwitch />
      <Hero />
      <section aria-label="團隊成員">
        <div className="team-grid">
          {agents.map((agent, i) => (
            <AgentCard key={agent.id} agent={agent} index={i} />
          ))}
        </div>
      </section>
      <footer className="site-footer">
        &copy; {new Date().getFullYear()} AI 代理團隊 · 由 Cardano 驅動
      </footer>
    </main>
  );
}