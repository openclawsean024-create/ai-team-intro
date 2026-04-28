import Link from "next/link";
import { pricingPlans, comparisonTable, pricingFaqs } from "@/data/agents";

export const metadata = {
  title: "Pricing - AI Agent Team",
  description: "Transparent pricing plans for AI agent deployment. Explorer, Growth, and Enterprise options tailored to your business needs.",
};

export default function PricingPage() {
  return (
    <main className="pricing-page">
      {/* Language switch */}
      <nav className="lang-switch" aria-label="Language switch" style={{ position: "fixed", top: "24px", right: "24px", zIndex: 100 }}>
        <span className="lang-active">EN</span>
        <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
        <Link href="/zh/pricing" locale="zh">中文</Link>
      </nav>

      {/* Hero */}
      <section className="pricing-hero">
        <div className="pricing-hero-inner">
          <div className="pricing-eyebrow">Transparent Pricing</div>
          <h1 className="pricing-title">Plans That Scale With You</h1>
          <p className="pricing-subtitle">
            All plans include our full agent team. No hidden fees, no surprise bills. Scale up or down anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-cards-section">
        <div className="pricing-cards-inner">
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div
                key={plan.nameEn}
                className={`pricing-card ${plan.highlight ? "pricing-highlight" : ""}`}
              >
                {plan.highlight && <div className="pricing-badge">Most Popular</div>}
                <div className="pricing-name">{plan.nameEn}</div>
                <div className="pricing-name-zh">{plan.name}</div>
                <div className="pricing-price">{plan.priceEn}</div>
                <div className="pricing-period">{plan.periodEn}</div>
                <p className="pricing-desc">{plan.descEn}</p>
                <ul className="pricing-features">
                  {plan.featuresEn.map((f) => (
                    <li key={f} className="pricing-feature">
                      <span className="pricing-check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:contact@example.com"
                  className={`pricing-cta-btn ${plan.highlight ? "pricing-cta-primary" : "pricing-cta-secondary"}`}
                >
                  {plan.ctaEn}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Banner */}
      <section className="annual-banner">
        <div className="annual-banner-inner">
          <div className="annual-banner-icon">🎁</div>
          <div className="annual-banner-content">
            <h3 className="annual-banner-title">Save 2 Months — Annual Billing Available</h3>
            <p className="annual-banner-desc">
              Switch to annual billing and get 2 months free — equivalent to 83折. Plus get priority access to our annual AI trend reports and industry benchmarks.
            </p>
          </div>
          <div className="annual-banner-cta">
            <a href="mailto:contact@example.com?subject=Annual%20Billing%20Inquiry" className="btn-primary">
              Ask About Annual Plans
            </a>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-section">
        <div className="comparison-inner">
          <div className="section-header" style={{ marginBottom: "0" }}>
            <span className="section-eyebrow">Compare Plans</span>
            <h2 className="section-title" style={{ fontSize: "32px" }}>How We Stack Up</h2>
            <p className="section-desc">
              See exactly what you get at each tier — and how we compare to typical market alternatives.
            </p>
          </div>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="comparison-feature-col">Feature</th>
                  <th>Explorer</th>
                  <th className="comparison-highlight-col">Growth ★</th>
                  <th>Enterprise</th>
                  <th className="comparison-others">Others</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row) => (
                  <tr key={row.feature}>
                    <td className="comparison-feature-cell">
                      <span className="comparison-feature-label">{row.featureEn ?? row.feature}</span>
                    </td>
                    <td>{row.explorer}</td>
                    <td className="comparison-highlight-col">{row.growth}</td>
                    <td>{row.enterprise}</td>
                    <td className="comparison-others">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-wrapper faq-section faq-inner">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-eyebrow">Pricing FAQ</span>
            <h2 className="section-title">Common Questions</h2>
          </div>
          <div className="faq-grid">
            {pricingFaqs.map((faq, i) => (
              <div key={i} className="faq-card">
                <h3 className="faq-q">{faq.qEn ?? faq.q}</h3>
                <p className="faq-a">{faq.aEn ?? faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pricing-cta-section">
        <div className="pricing-cta-inner">
          <div className="pricing-cta-title">Ready to Get Started?</div>
          <p className="pricing-cta-desc">
            Schedule a free 30-minute consultation. No commitment — just honest advice on where AI can create the most value for your organization.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginTop: "8px" }}>
            <a
              href="mailto:contact@example.com?subject=Free%20Consultation%20Request&body=Hi%20AI%20Team%2C%0A%0AI%27m%20interested%20in%20learning%20more%20about%20your%20AI%20agent%20services.%0A%0ACompany%3A%0AIndustry%3A%0ACurrent%20Challenge%3A"
              className="btn-primary btn-primary-lg"
            >
              預約免費顧問諮詢
            </a>
            <Link href="/" className="btn-secondary-ghost">← Back to Home</Link>
          </div>
          <div className="pricing-cta-trust">
            <span>✓ No credit card required</span>
            <span>✓ 30-min deep consultation</span>
            <span>✓ Custom recommendation report</span>
          </div>
        </div>
      </section>
    </main>
  );
}