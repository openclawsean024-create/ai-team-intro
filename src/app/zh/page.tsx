import Link from "next/link";
import { agents, metrics, servicesExtended, industriesExtended, testimonialsExtended, pricingPlans, trustBadges, teamStats, processSteps, faqs, differentiators, clientLogos, workflowDemo, roiStats, type Agent } from "@/data/agents";
import Footer from "@/components/Footer";

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

/* ─── Hero Section ──────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg grid-bg" />
      <div className="relative z-10">
        <div className="hero-eyebrow">自主 AI · 24/7 運行</div>
        <h1 className="hero-title">AI 代理團隊</h1>
        <p className="hero-subtitle">五位自主代理，完美協調運作</p>
        <div className="hero-stats-row">
          <span>已服務 <strong>50+</strong> 企業客戶</span>
          <span className="hero-dot">·</span>
          <span>為客戶節省 <strong>TWD 2B+</strong></span>
          <span className="hero-dot">·</span>
          <span>生產運行 <strong>3+ 年</strong></span>
        </div>
        <div className="hero-cta-row">
          <a href="#services" className="btn-primary">探索服務項目</a>
          <a href="/pricing" className="btn-secondary">查看方案價格</a>
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

/* ─── Agent Card ───────────────────────────────────────────────────────── */
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

/* ─── Trust Badges Strip ────────────────────────────────────────────────── */
function TrustBadgesStrip() {
  return (
    <section className="trust-strip">
      <div className="trust-inner">
        <span className="trust-label">企業級信賴 · 合規安全</span>
        <div className="trust-badges">
          {trustBadges.map((b) => (
            <span key={b.label} className="trust-badge">{b.icon} {b.labelZh}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ──────────────────────────────────────────────────────── */
function HowItWorksSection() {
  return (
    <section className="section-wrapper">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">服務流程</span>
          <h2 className="section-title">四步驟，從評估到交付</h2>
          <p className="section-desc">
            累積 50+ 企業部署經驗的成熟方法論 — 不靠猜測，只靠成果。
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

/* ─── Why Choose Us ─────────────────────────────────────────────────────── */
function WhyChooseUsSection() {
  return (
    <section className="section-wrapper why-choose-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">為什麼選擇我們</span>
          <h2 className="section-title">我們的差異化優點</h2>
          <p className="section-desc">
            不只是廠商 — 我們是您的 AI 轉型合作夥伴。
          </p>
        </div>
        <div className="differentiators-grid">
          {differentiators.map((d) => (
            <div key={d.title} className="diff-card">
              <div className="diff-icon">{d.icon}</div>
              <h3 className="diff-title">{d.title}</h3>
              <p className="diff-desc">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ROI Stats ─────────────────────────────────────────────────────────── */
function RoiStatsSection() {
  return (
    <section className="roi-section">
      <div className="roi-inner">
        <div className="roi-header">
          <span className="section-eyebrow" style={{ color: "#10B981" }}>可量化的成效</span>
          <h2 className="section-title" style={{ color: "#fff" }}>為您的業務帶來實在的數字</h2>
        </div>
        <div className="roi-grid">
          {roiStats.map((r) => (
            <div key={r.label} className="roi-card">
              <div className="roi-value">{r.value}</div>
              <div className="roi-label">{r.label}</div>
              <div className="roi-note">{r.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Team Stats ─────────────────────────────────────────────────────────── */
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

/* ─── Client Logos ──────────────────────────────────────────────────────── */
function ClientLogosSection() {
  return (
    <section className="section-wrapper client-logos-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">我們的客戶</span>
          <h2 className="section-title">來自各產業的領導企業</h2>
          <p className="section-desc">
            從新創到上市櫃公司 — 我們的 AI 代理正為台灣及海外企業賦能。
          </p>
        </div>
        <div className="client-logos-grid">
          {clientLogos.map((c) => (
            <div key={c.name} className="client-logo-card">
              <div className="client-avatar">{c.name[0]}</div>
              <div className="client-info">
                <div className="client-name">{c.name}</div>
                <div className="client-sector">{c.sector}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Workflow Demo ─────────────────────────────────────────────────────── */
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
          <span className="section-eyebrow">實際運作範例</span>
          <h2 className="section-title">{workflowDemo.title}</h2>
          <p className="section-desc">{workflowDemo.desc}</p>
        </div>
        <div className="workflow-timeline">
          {workflowDemo.steps.map((step, i) => (
            <div key={i} className="workflow-step">
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
          <span className="workflow-result-badge">✅ {workflowDemo.result}</span>
        </div>
      </div>
    </section>
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
          <span className="section-eyebrow">服務產業</span>
          <h2 className="section-title">跨產業實戰經驗</h2>
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
          {testimonialsExtended.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-result">{t.result}</div>
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

/* ─── FAQ Section ──────────────────────────────────────────────────────── */
function FaqSection() {
  return (
    <section className="section-wrapper faq-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">常見問題</span>
          <h2 className="section-title">有問題？我們有答案</h2>
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
        <div className="cta-eyebrow">準備好轉型了嗎？</div>
        <h2 className="cta-title">今天就開始你的 AI 旅程</h2>
        <p className="cta-desc">
          預約免費 30 分鐘顧問諮詢。不綁約 — 只有真誠的建議，告訴你 AI 如何為你的組織創造最大價值。
        </p>
        <div className="cta-buttons">
          <a href="mailto:contact@example.com?subject=Free%20Consultation%20Request&body=Hi%20AI%20Team%2C%0A%0AI%27m%20interested%20in%20learning%20more%20about%20your%20AI%20agent%20services.%20Could%20we%20schedule%20a%2030-minute%20call%3F%0A%0ACompany%3A%0AIndustry%3A%0ACurrent%20Challenge%3A%0A" className="btn-primary btn-primary-lg">預約免費顧問諮詢</a>
          <a href="/pricing" className="btn-secondary-ghost">查看方案</a>
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
export default function ZhHomePage() {
  return (
    <main>
      <LanguageSwitch />
      <Hero />
      <MetricsStrip />
      <TrustBadgesStrip />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <RoiStatsSection />
      <TeamStatsSection />
      <ClientLogosSection />
      <WorkflowDemoSection />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <section aria-label="團隊成員">
        <div className="team-section-header">
          <span className="section-eyebrow">認識團隊</span>
          <h2 className="section-title">5 位 AI Agent，帶給你成功</h2>
          <p className="section-desc">
            每位 Agent 都是專業分工的 AI — 協作起來，能應對任何商業挑戰。
          </p>
        </div>
        <div className="team-grid">
          {agents.map((agent, i) => (
            <AgentCard key={agent.id} agent={agent} index={i} />
          ))}
        </div>
      </section>
      <Footer lang="zh" />
    </main>
  );
}
