import Link from "next/link";
import { agents, metrics, services, industries, testimonials, pricingPlans, type Agent } from "@/data/agents";

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

/* ─── Services Section ─────────────────────────────────────────────────── */
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
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <div className="service-emoji">{s.emoji}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
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

/* ─── Testimonials Section ───────────────────────────────────────────── */
function TestimonialsSection() {
  return (
    <section className="section-wrapper">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">Client Results</span>
          <h2 className="section-title">What Enterprises Are Saying</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
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

/* ─── CTA Section ─────────────────────────────────────────────────────── */
function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <h2 className="cta-title">Ready to Scale with AI?</h2>
        <p className="cta-desc">
          Whether you&apos;re exploring your first AI agent or ready to automate entire workflows — our team is ready to help.
        </p>
        <div className="cta-buttons">
          <a href="mailto:contact@example.com" className="btn-primary">Free Consultation</a>
          <a href="#pricing" className="btn-secondary-ghost">View Pricing</a>
        </div>
        <p className="cta-note">Average response within 24 hours · No commitment required</p>
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
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <section aria-label="Team members">
        <div className="team-grid">
          {agents.map((agent, i) => (
            <AgentCard key={agent.id} agent={agent} index={i} />
          ))}
        </div>
      </section>
      <footer className="site-footer">
        &copy; {new Date().getFullYear()} AI Agent Team · Powered by Cardano ·{" "}
        <a href="mailto:contact@example.com" style={{ color: "var(--accent)" }}>contact@example.com</a>
      </footer>
    </main>
  );
}
