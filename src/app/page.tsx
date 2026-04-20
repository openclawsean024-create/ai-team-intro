import Link from "next/link";
import { agents, metrics, servicesExtended, industries, testimonialsExtended, pricingPlans, trustBadges, teamStats, processSteps, faqs, type Agent } from "@/data/agents";

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
        <div className="hero-eyebrow">Autonomous AI · 24/7 Operations</div>
        <h1 className="hero-title">AI Agent Team</h1>
        <p className="hero-subtitle">Five autonomous agents, perfectly orchestrated</p>
        <div className="hero-cta-row">
          <a href="#services" className="btn-primary">Explore Services</a>
          <a href="#pricing" className="btn-secondary">View Pricing</a>
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
          <div key={m.label} className="metric-item">
            <span className="metric-value">{m.value}</span>
            <span className="metric-label">{m.label}</span>
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
      aria-label={`View ${agent.name}'s profile`}
    >
      <span className="role-badge">{agent.role}</span>
      <h2 className="card-name">{agent.name}</h2>
      <p className="card-tagline">&ldquo;{agent.tagline}&rdquo;</p>
      <div className="card-divider" />
      <p className="card-section-label">Skills</p>
      <ul className="skill-chips" role="list">
        {agent.skills.map((skill) => (
          <li key={skill.name} className="skill-chip">{skill.name}</li>
        ))}
      </ul>
    </Link>
  );
}

/* ─── Trust Badges Strip ────────────────────────────────────────────────── */
function TrustBadgesStrip() {
  return (
    <section className="trust-strip">
      <div className="trust-inner">
        <span className="trust-label">Trusted by enterprise clients · Compliant &amp; secure</span>
        <div className="trust-badges">
          {trustBadges.map((b) => (
            <span key={b.label} className="trust-badge">{b.icon} {b.labelZh}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works Section ──────────────────────────────────────────────── */
function HowItWorksSection() {
  return (
    <section className="section-wrapper">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">How It Works</span>
          <h2 className="section-title">From Discovery to Deployment in 4 Steps</h2>
          <p className="section-desc">
            A proven playbook refined across 50+ enterprise deployments — no guesswork, just results.
          </p>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <div key={step.step} className="process-card">
              <div className="process-step-num">{step.step}</div>
              <h3 className="process-title">{step.titleZh}</h3>
              <p className="process-desc">{step.descZh}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Team Stats Section ─────────────────────────────────────────────────── */
function TeamStatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-inner">
        {teamStats.map((s) => (
          <div key={s.label} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.labelZh}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Services Section (expanded) ───────────────────────────────────────── */
function ServicesSection() {
  return (
    <section id="services" className="section-wrapper">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">What We Do</span>
          <h2 className="section-title">AI Services for Enterprise</h2>
          <p className="section-desc">
            From agent development to full-scale automation — our team delivers production-ready AI solutions that integrate with your existing workflows.
          </p>
        </div>
        <div className="services-grid-expanded">
          {servicesExtended.map((s) => (
            <div key={s.title} className={`service-card ${s.popular ? "service-popular" : ""}`}>
              {s.popular && <span className="service-popular-badge">熱門</span>}
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
          <span className="section-eyebrow">Industries We Serve</span>
          <h2 className="section-title">Proven Across Sectors</h2>
        </div>
        <div className="industries-row">
          {industries.map((ind) => (
            <div key={ind.label} className="industry-chip">
              <span className="industry-icon">{ind.icon}</span>
              <span>{ind.labelEn}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials Section (expanded) ───────────────────────────────────── */
function TestimonialsSection() {
  return (
    <section className="section-wrapper">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">Client Results</span>
          <h2 className="section-title">What Enterprises Are Saying</h2>
        </div>
        <div className="testimonials-grid">
          {testimonialsExtended.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-result">{t.result}</div>
              <p className="testimonial-quote">&ldquo;{t.quoteEn}&rdquo;</p>
              <p className="testimonial-author">— {t.authorEn}</p>
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
          <span className="section-eyebrow">Transparent Pricing</span>
          <h2 className="section-title">Plans That Scale With You</h2>
          <p className="section-desc">
            All plans include our full agent team. Pricing scales with your usage — no hidden fees.
          </p>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div key={plan.nameEn} className={`pricing-card ${plan.highlight ? "pricing-highlight" : ""}`}>
              {plan.highlight && <div className="pricing-badge">Most Popular</div>}
              <div className="pricing-name">{plan.nameEn}</div>
              <div className="pricing-price">{plan.priceEn}{plan.periodEn}</div>
              <p className="pricing-desc">{plan.descEn}</p>
              <ul className="pricing-features">
                {plan.featuresEn.map((f) => (
                  <li key={f} className="pricing-feature">✓ {f}</li>
                ))}
              </ul>
              <a href="mailto:contact@example.com" className={`pricing-cta ${plan.highlight ? "btn-primary" : "btn-secondary-outline"}`}>
                {plan.ctaEn}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ Section ──────────────────────────────────────────────────────── */
function FaqSection() {
  return (
    <section className="section-wrapper faq-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-card">
              <h3 className="faq-q">{faq.q}</h3>
              <p className="faq-a">{faq.a}</p>
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
        <div className="cta-eyebrow">Ready to transform your business?</div>
        <h2 className="cta-title">Start Your AI Journey Today</h2>
        <p className="cta-desc">
          Schedule a free 30-minute consultation. No commitment — just honest advice on where AI can create the most value for your organization.
        </p>
        <div className="cta-buttons">
          <a href="mailto:contact@example.com?subject=Free%20Consultation%20Request&body=Hi%20AI%20Team%2C%0A%0AI%27m%20interested%20in%20learning%20more%20about%20your%20AI%20agent%20services.%20Could%20we%20schedule%20a%2030-minute%20call%3F%0A%0ACompany%3A%0AIndustry%3A%0ACurrent%20Challenge%3A%0A" className="btn-primary btn-primary-lg">預約免費顧問諮詢</a>
          <a href="#pricing" className="btn-secondary-ghost">查看方案</a>
        </div>
        <div className="cta-trust-row">
          <span>✓ 無需信用卡</span>
          <span>✓ 30 分鐘深度顧問</span>
          <span>✓ 客製化建議報告</span>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main>
      <LanguageSwitch />
      <Hero />
      <MetricsStrip />
      <TrustBadgesStrip />
      <HowItWorksSection />
      <TeamStatsSection />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <section aria-label="Team members">
        <div className="team-grid">
          {agents.map((agent, i) => (
            <AgentCard key={agent.id} agent={agent} index={i} />
          ))}
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-emoji">🤖</span>
            <span className="footer-name">AI Agent Team</span>
          </div>
          <div className="footer-links">
            <a href="#services">服務項目</a>
            <a href="#pricing">方案價格</a>
            <a href="mailto:contact@example.com">聯絡我們</a>
          </div>
          <div className="footer-compliance">
            <span>🛡️ SOC 2 合規</span>
            <span>🔒 GDPR Ready</span>
            <span>⚡ 99.9% Uptime</span>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} AI Agent Team · Powered by Cardano · contact@example.com</p>
        </div>
      </footer>
    </main>
  );
}
