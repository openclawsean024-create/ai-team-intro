import Link from "next/link";
import { agents, type Agent } from "@/data/agents";

/* ─── Language Switch (fixed top-right per SPEC v4) ─────────────────── */
function LanguageSwitch() {
  return (
    <nav className="lang-switch" aria-label="Language switch">
      <span className="lang-active">EN</span>
      <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
      <Link href="/zh" locale="zh">中文</Link>
    </nav>
  );
}

/* ─── Hero Section (SPEC v4) ─────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg grid-bg" />
      <div className="relative z-10">
        <h1 className="hero-title">AI Agent Team</h1>
        <p className="hero-subtitle">Five autonomous agents, perfectly orchestrated</p>
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
      aria-label={`View ${agent.name}'s profile`}
    >
      {/* Role Badge — top left per SPEC */}
      <span className="role-badge">{agent.role}</span>

      {/* Name */}
      <h2 className="card-name">{agent.name}</h2>

      {/* Tagline — italic per SPEC */}
      <p className="card-tagline">&ldquo;{agent.tagline}&rdquo;</p>

      {/* Divider */}
      <div className="card-divider" />

      {/* Skills */}
      <p className="card-section-label">Skills</p>
      <ul className="skill-chips" role="list">
        {agent.skills.map((skill) => (
          <li key={skill.name} className="skill-chip">{skill.name}</li>
        ))}
      </ul>
    </Link>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main>
      <LanguageSwitch />
      <Hero />
      <section aria-label="Team members">
        <div className="team-grid">
          {agents.map((agent, i) => (
            <AgentCard key={agent.id} agent={agent} index={i} />
          ))}
        </div>
      </section>
      <footer className="site-footer">
        &copy; {new Date().getFullYear()} AI Agent Team · Powered by Cardano
      </footer>
    </main>
  );
}