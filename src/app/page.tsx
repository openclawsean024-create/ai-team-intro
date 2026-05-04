import Link from "next/link";
import { agents, metrics, servicesExtended, industriesExtended, testimonialsExtended, pricingPlans, trustBadges, teamStats, processSteps, faqs, differentiators, clientLogos, workflowDemo, roiStats, type Agent } from "@/data/agents";
import Footer from "@/components/Footer";

/* ─── Language Switch ────────────────────────────────────────────────────── */
function LanguageSwitch() {
  return (
    <nav className="lang-switch" aria-label="Language switch">
      <span className="lang-active">EN</span>
      <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
      <Link href="/zh" locale="zh">中文</Link>
    </nav>
  );
}

/* ─── Hero Section ───────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg grid-bg" />
      <div className="relative z-10">
        <div className="hero-eyebrow">Autonomous AI · 24/7 Operations</div>
        <h1 className="hero-title">AI Agent Team</h1>
        <p className="hero-subtitle">From intake to delivery — autonomous, around the clock.</p>
        <div className="hero-stats-row">
          <span>Trusted by <strong>50+</strong> Enterprise Clients</span>
          <span className="hero-dot">·</span>
          <span><strong>TWD 2B+</strong> Cost Saved</span>
          <span className="hero-dot">·</span>
          <span><strong>3+ Years</strong> in Production</span>
        </div>
        <div className="hero-cta-row">
          <a href="#services" className="btn-primary">Explore Services</a>
          <a href="/pricing" className="btn-secondary">View Pricing</a>
        </div>
      </div>
    </section>
  );
}

/* ─── Metrics Strip ──────────────────────────────────────────────────────── */
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

/* ─── Agent Card ─────────────────────────────────────────────────────────── */
function AgentCard({ agent, index }: { agent: Agent; index: number }) {
  const delayClass = `card-enter card-enter-${index + 1}`;

  return (
    <Link
      href={`/agents/${agent.id}`}
      className={`agent-card ${agent.id} ${delayClass}`}
      aria-label={`View ${agent.name}'s profile`}
    >
      <div className="card-emoji">{agent.emoji}</div>
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

/* ─── Trust Badges Strip ─────────────────────────────────────────────────── */
function TrustBadgesStrip() {
  return (
    <section className="trust-strip">
      <div className="trust-inner">
        <span className="trust-label">Trusted by enterprise clients · Compliant &amp; secure</span>
        <div className="trust-badges">
          {trustBadges.map((b) => (
            <span key={b.label} className="trust-badge">{b.icon} {b.label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works Section ───────────────────────────────────────────────── */
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
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ROI Stats Section ──────────────────────────────────────────────────── */
function RoiStatsSection() {
  return (
    <section className="section-wrapper roi-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">Measurable Impact</span>
          <h2 className="section-title">The ROI Enterprises Actually See</h2>
          <p className="section-desc">
            Numbers don&apos;t lie. Here&apos;s what our clients measure after the first 90 days.
          </p>
        </div>
        <div className="roi-grid">
          {roiStats.map((stat) => (
            <div key={stat.label} className="roi-card">
              <div className="roi-value">{stat.value}</div>
              <div className="roi-label">{stat.labelEn}</div>
              <div className="roi-note">{stat.noteEn}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us Section ──────────────────────────────────────────────── */
function WhyChooseUsSection() {
  return (
    <section className="section-wrapper why-choose-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">Why Our Team</span>
          <h2 className="section-title">What Sets Us Apart</h2>
          <p className="section-desc">
            Five agents, one mission: to deliver measurable AI outcomes for your business — not just hype.
          </p>
        </div>
        <div className="differentiators-grid">
          {differentiators.map((d) => (
            <div key={d.title} className="diff-card">
              <div className="diff-icon">{d.icon}</div>
              <h3 className="diff-title">{d.titleEn}</h3>
              <p className="diff-desc">{d.descEn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Workflow Demo Section ──────────────────────────────────────────────── */
function WorkflowDemoSection() {
  const getAgentColor = (id: string) => {
    const colors: Record<string, string> = {
      dva: "#8b6fc0", alan: "#e8956a", sophia: "#5ab8d4", mia: "#E8A0BF", ivy: "#F59E0B"
    };
    return colors[id] || "#6366F1";
  };

  return (
    <section className="section-wrapper workflow-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">Live Demo</span>
          <h2 className="section-title">{workflowDemo.titleEn}</h2>
          <p className="section-desc">{workflowDemo.descEn}</p>
        </div>
        <div className="workflow-timeline">
          {workflowDemo.steps.map((step, i) => (
            <div key={step.agent} className="workflow-step">
              <div className="workflow-step-connector" />
              <div className="workflow-step-icon" style={{ backgroundColor: getAgentColor(step.agent) }}>
                {step.emoji}
              </div>
              <div className="workflow-step-info">
                <div className="workflow-step-label">{step.labelEn}</div>
                <div className="workflow-step-time">{step.time}</div>
              </div>
              {i < workflowDemo.steps.length - 1 && (
                <div className="workflow-arrow">→</div>
              )}
            </div>
          ))}
        </div>
        <div className="workflow-result">
          <span className="workflow-result-badge">✅ {workflowDemo.resultEn}</span>
        </div>
      </div>
    </section>
  );
}

/* ─── Client Logos Section ───────────────────────────────────────────────── */
function ClientLogosSection() {
  return (
    <section className="section-wrapper client-logos-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">Trusted By</span>
          <h2 className="section-title">Enterprises Across Asia</h2>
          <p className="section-desc">
            From startups to listed companies — our AI agents are powering businesses across Taiwan and beyond.
          </p>
        </div>
        <div className="client-logos-grid">
          {clientLogos.map((c) => (
            <div key={c.name} className="client-logo-card">
              <div className="client-avatar">{c.nameEn[0]}</div>
              <div className="client-info">
                <div className="client-name">{c.nameEn}</div>
                <div className="client-sector">{c.sectorEn}</div>
              </div>
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
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Services Section ───────────────────────────────────────────────────── */
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
              {s.popular && <span className="service-popular-badge">Popular</span>}
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

/* ─── Industries Section ─────────────────────────────────────────────────── */
function IndustriesSection() {
  return (
    <section className="section-wrapper industries-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">Industries We Serve</span>
          <h2 className="section-title">Proven Across Sectors</h2>
        </div>
        <div className="industries-row">
          {industriesExtended.map((ind) => (
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

/* ─── Testimonials Section ───────────────────────────────────────────────── */
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

/* ─── Pricing Section ────────────────────────────────────────────────────── */
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

/* ─── FAQ Section ────────────────────────────────────────────────────────── */
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
              <h3 className="faq-q">{faq.qEn}</h3>
              <p className="faq-a">{faq.aEn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ────────────────────────────────────────────────────────── */
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
          <a href="mailto:contact@example.com?subject=Free%20Consultation%20Request&body=Hi%20AI%20Team%2C%0A%0AI%27m%20interested%20in%20learning%20more%20about%20your%20AI%20agent%20services.%20Could%20we%20schedule%20a%2030-minute%20call%3F%0A%0ACompany%3A%0AIndustry%3A%0ACurrent%20Challenge%3A%0A" className="btn-primary btn-primary-lg">Book Free Consultation</a>
          <a href="#pricing" className="btn-secondary-ghost">View Plans</a>
        </div>
        <div className="cta-trust-row">
          <span>✓ No credit card required</span>
          <span>✓ 30-min deep-dive consultation</span>
          <span>✓ Custom AI recommendation report</span>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main>
      <LanguageSwitch />
      <Hero />
      <MetricsStrip />
      <TrustBadgesStrip />
      <HowItWorksSection />
      <RoiStatsSection />
      <WhyChooseUsSection />
      <WorkflowDemoSection />
      <ClientLogosSection />
      <TeamStatsSection />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <section aria-label="Team members">
        <div className="team-section-header">
          <span className="section-eyebrow">Meet the Team</span>
          <h2 className="section-title">5 AI Agents, Built to Deliver</h2>
          <p className="section-desc">
            Each agent specializes in a distinct domain — together, they handle any business challenge end-to-end.
          </p>
        </div>
        <div className="team-grid">
          {agents.map((agent, i) => (
            <AgentCard key={agent.id} agent={agent} index={i} />
          ))}
        </div>
      </section>
      <Footer lang="en" />
    </main>
  );
}
