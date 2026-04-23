import type { Metadata } from "next";
import Link from "next/link";
import { pricingPlans, comparisonTable, pricingFaqs, type Agent } from "@/data/agents";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for AI Agent Team — Explorer (TWD 15,000/mo), Growth (TWD 45,000/mo), and Enterprise (custom). Scale with confidence.",
  openGraph: {
    title: "Pricing | AI Agent Team",
    description:
      "Explorer from TWD 15,000/mo. Growth from TWD 45,000/mo. Enterprise custom. No hidden fees.",
    url: "https://ai-team-intro.vercel.app/pricing",
    siteName: "AI Agent Team",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | AI Agent Team",
    description: "Transparent AI Agent pricing. Start from TWD 15,000/mo.",
  },
};

export default function PricingPage() {
  return (
    <>
      <LanguageSwitch />
      <main className="pricing-page">
        {/* Hero */}
        <section className="pricing-hero">
          <div className="pricing-hero-inner">
            <div className="pricing-eyebrow">Transparent Pricing</div>
            <h1 className="pricing-title">Plans That Scale With You</h1>
            <p className="pricing-subtitle">
              All plans include our full 5-agent team. No hidden fees, no surprise bills.
              Choose the level that matches where you are — and grow from there.
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
                  {plan.highlight && <div className="pricing-badge">⭐ Most Popular</div>}
                  <div className="pricing-name">{plan.nameEn}</div>
                  <div className="pricing-name-zh">{plan.name}</div>
                  <div className="pricing-price">
                    {plan.priceEn}
                    {plan.periodEn && (
                      <span className="pricing-period">{plan.periodEn}</span>
                    )}
                  </div>
                  <p className="pricing-desc">{plan.descEn}</p>
                  <ul className="pricing-features">
                    {(plan.featuresEn as string[]).map((f) => (
                      <li key={f} className="pricing-feature">
                        <span className="pricing-check">✓</span> {f}
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

        {/* Comparison Table */}
        <section className="comparison-section">
          <div className="comparison-inner">
            <div className="section-header">
              <span className="section-eyebrow">Feature Comparison</span>
              <h2 className="section-title">How We Stack Up</h2>
              <p className="section-desc">
                Not just a product comparison — a full picture of what you're getting vs. alternatives.
              </p>
            </div>
            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th className="comparison-feature-col">Feature</th>
                    <th>Explorer</th>
                    <th className="comparison-highlight-col">Growth ⭐</th>
                    <th>Enterprise</th>
                    <th>Typical SaaS</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row) => (
                    <tr key={row.feature}>
                      <td className="comparison-feature-cell">
                        <span className="comparison-feature-label">{row.featureEn}</span>
                        <span className="comparison-feature-label-zh">{row.feature}</span>
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

        {/* Annual Discount Banner */}
        <section className="annual-banner">
          <div className="annual-banner-inner">
            <div className="annual-banner-icon">💰</div>
            <div className="annual-banner-content">
              <h3 className="annual-banner-title">Save 2 Months with Annual Billing</h3>
              <p className="annual-banner-desc">
                Prepay annually and get 2 months free — equivalent to 83折 across all plans.
                Annual clients also get priority access to our quarterly industry benchmark reports.
              </p>
            </div>
            <div className="annual-banner-cta">
              <a href="mailto:contact@example.com?subject=Annual%20Billing%20Inquiry" className="btn-primary">
                Ask About Annual Plans
              </a>
            </div>
          </div>
        </section>

        {/* Pricing FAQ */}
        <section className="faq-section">
          <div className="faq-inner">
            <div className="section-header">
              <span className="section-eyebrow">Pricing FAQ</span>
              <h2 className="section-title">Common Pricing Questions</h2>
            </div>
            <div className="faq-grid">
              {pricingFaqs.map((faq, i) => (
                <div key={i} className="faq-card">
                  <h3 className="faq-q">{faq.qEn}</h3>
                  <p className="faq-a">{faq.aEn}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pricing-cta-section">
          <div className="pricing-cta-inner">
            <h2 className="pricing-cta-title">Not sure which plan is right?</h2>
            <p className="pricing-cta-desc">
              Book a free 30-minute consultation and we'll recommend the best starting point for your situation — no sales pressure, just honest advice.
            </p>
            <a
              href="mailto:contact@example.com?subject=Free%20Consultation%20-%20Pricing"
              className="btn-primary btn-primary-lg"
            >
              Book Free Consultation
            </a>
            <div className="pricing-cta-trust">
              <span>✓ No credit card required</span>
              <span>✓ 30-minute deep dive</span>
              <span>✓ Personalized recommendation</span>
            </div>
          </div>
        </section>

        <Footer lang="en" />
      </main>
    </>
  );
}

function LanguageSwitch() {
  return (
    <nav className="lang-switch" aria-label="Language switch" style={{ top: 20, right: 20 }}>
      <span className="lang-active">EN</span>
      <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
      <Link href="/zh/pricing" locale="zh">中文</Link>
    </nav>
  );
}