import Link from "next/link";
import { agents, metrics, services, industries, testimonials, pricingPlans, type Agent } from "@/data/agents";

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
        <div className="hero-eyebrow">自主 AI · 24/7 運行</div>
        <h1 className="hero-title">AI 代理團隊</h1>
        <p className="hero-subtitle">五位自主代理，完美協調運作</p>
        <div className="hero-cta-row">
          <a href="#services" className="btn-primary">探索服務</a>
          <a href="#pricing" className="btn-secondary">查看方案</a>
        </div>
      </div>
    </section>
  );
}

/* ─── Metrics Strip ────────────────────────────────────────────────────── */
function MetricsStrip() {
  return (
    <section className="metrics-strip">
      <div className="metrics-inner">
        {metrics.map((m) => (
          <div key={m.labelZh} className="metric-item">
            <span className="metric-value">{m.value}</span>
            <span className="metric-label">{m.labelZh}</span>
          </div>
        ))}
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
      <span className="role-badge">{agent.roleZh}</span>
      <h2 className="card-name">{agent.nameZh}</h2>
      <p className="card-tagline">&ldquo;{agent.taglineZh}&rdquo;</p>
      <div className="card-divider" />
      <p className="card-section-label">技能</p>
      <ul className="skill-chips" role="list">
        {agent.skills.map((skill) => (
          <li key={skill.name} className="skill-chip">{skill.nameZh}</li>
        ))}
      </ul>
    </Link>
  );
}

/* ─── Services Section ─────────────────────────────────────────────────── */
function ServicesSection() {
  return (
    <section id="services" className="section-wrapper">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">我們的服務</span>
          <h2 className="section-title">企業級 AI 服務</h2>
          <p className="section-desc">
            從 AI Agent 開發到完整流程自動化 — 團隊交付可投入生產的 AI 解決方案，無縫整合現有系統。
          </p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.titleZh} className="service-card">
              <div className="service-emoji">{s.emoji}</div>
              <h3 className="service-title">{s.titleZh}</h3>
              <p className="service-desc">{s.descZh}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Industries Section ──────────────────────────────────────────────── */
function IndustriesSection() {
  return (
    <section className="section-wrapper industries-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">服務產業</span>
          <h2 className="section-title">跨產業實戰經驗</h2>
        </div>
        <div className="industries-row">
          {industries.map((ind) => (
            <div key={ind.label} className="industry-chip">
              <span className="industry-icon">{ind.icon}</span>
              <span>{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials Section ───────────────────────────────────────────── */
function TestimonialsSection() {
  return (
    <section className="section-wrapper">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">客戶成果</span>
          <h2 className="section-title">企業客戶怎麼說</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <p className="testimonial-author">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing Section ─────────────────────────────────────────────────── */
function PricingSection() {
  return (
    <section id="pricing" className="section-wrapper pricing-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">透明定價</span>
          <h2 className="section-title">跟著你一起成長的方案</h2>
          <p className="section-desc">
            所有方案皆包含完整 AI 代理團隊。定價隨使用規模調整，無隱藏費用。
          </p>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={`pricing-card ${plan.highlight ? "pricing-highlight" : ""}`}>
              {plan.highlight && <div className="pricing-badge">最受歡迎</div>}
              <div className="pricing-name">{plan.name}</div>
              <div className="pricing-price">{plan.price}{plan.period}</div>
              <p className="pricing-desc">{plan.desc}</p>
              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li key={f} className="pricing-feature">✓ {f}</li>
                ))}
              </ul>
              <a href="mailto:contact@example.com" className={`pricing-cta ${plan.highlight ? "btn-primary" : "btn-secondary-outline"}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─────────────────────────────────────────────────────── */
function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <h2 className="cta-title">準備好透過 AI 加速了嗎？</h2>
        <p className="cta-desc">
          無論你是首次接觸 AI Agent，還是已準備好將整個工作流程自動化 — 我們的團隊隨時候命。
        </p>
        <div className="cta-buttons">
          <a href="mailto:contact@example.com" className="btn-primary">免費諮詢</a>
          <a href="#pricing" className="btn-secondary-ghost">查看方案</a>
        </div>
        <p className="cta-note">24 小時內回覆 · 無需承諾</p>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function ZhHomePage() {
  return (
    <main>
      <LanguageSwitch />
      <Hero />
      <MetricsStrip />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <section aria-label="團隊成員">
        <div className="team-grid">
          {agents.map((agent, i) => (
            <AgentCard key={agent.id} agent={agent} index={i} />
          ))}
        </div>
      </section>
      <footer className="site-footer">
        &copy; {new Date().getFullYear()} AI 代理團隊 · 由 Cardano 驅動 ·{" "}
        <a href="mailto:contact@example.com" style={{ color: "var(--accent)" }}>contact@example.com</a>
      </footer>
    </main>
  );
}
