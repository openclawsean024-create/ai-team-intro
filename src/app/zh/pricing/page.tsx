import type { Metadata } from "next";
import Link from "next/link";
import { pricingPlans, comparisonTable, pricingFaqs } from "@/data/agents";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "方案價格",
  description:
    "透明的 AI 代理團隊定價方案 — 探索方案（每月 TWD 15,000）、成長方案（每月 TWD 45,000）、企業方案（客製化報價）。無隱藏費用。",
  openGraph: {
    title: "方案價格 | AI 代理團隊",
    description:
      "探索方案每月 TWD 15,000 起。成長方案每月 TWD 45,000。企業方案客製化報價。沒有隱藏費用。",
    url: "https://ai-team-intro.vercel.app/zh/pricing",
    siteName: "AI 代理團隊",
    locale: "zh_TW",
    type: "website",
  },
};

export default function ZhPricingPage() {
  return (
    <>
      <LanguageSwitch />
      <main className="pricing-page">
        {/* Hero */}
        <section className="pricing-hero">
          <div className="pricing-hero-inner">
            <div className="pricing-eyebrow">透明定價</div>
            <h1 className="pricing-title">跟著你一起成長的方案</h1>
            <p className="pricing-subtitle">
              所有方案皆包含完整的 5 位 AI Agent 團隊。無隱藏費用，無預期帳單。
              選擇符合你現階段的方案，從那裡開始成長。
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pricing-cards-section">
          <div className="pricing-cards-inner">
            <div className="pricing-grid">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`pricing-card ${plan.highlight ? "pricing-highlight" : ""}`}
                >
                  {plan.highlight && <div className="pricing-badge">⭐ 最受歡迎</div>}
                  <div className="pricing-name">{plan.name}</div>
                  <div className="pricing-name-zh">{plan.name}</div>
                  <div className="pricing-price">
                    {plan.price}
                    {plan.period && (
                      <span className="pricing-period">{plan.period}</span>
                    )}
                  </div>
                  <p className="pricing-desc">{plan.desc}</p>
                  <ul className="pricing-features">
                    {plan.features.map((f) => (
                      <li key={f} className="pricing-feature">
                        <span className="pricing-check">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:contact@example.com"
                    className={`pricing-cta-btn ${plan.highlight ? "pricing-cta-primary" : "pricing-cta-secondary"}`}
                  >
                    {plan.cta}
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
              <span className="section-eyebrow">方案比較</span>
              <h2 className="section-title">我們的方案與其他方案的比較</h2>
              <p className="section-desc">
                不只是產品功能比較 — 讓你完整了解選擇我們與其他替代方案的真實差異。
              </p>
            </div>
            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th className="comparison-feature-col">功能項目</th>
                    <th>探索方案</th>
                    <th className="comparison-highlight-col">成長方案 ⭐</th>
                    <th>企業方案</th>
                    <th>一般 SaaS</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row) => (
                    <tr key={row.feature}>
                      <td className="comparison-feature-cell">
                        <span className="comparison-feature-label-zh">{row.feature}</span>
                        <span className="comparison-feature-label">{row.featureEn}</span>
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
              <h3 className="annual-banner-title">年付省 2 個月</h3>
              <p className="annual-banner-desc">
                提前一年預付，享有 2 個月免費（相當於 83 折）。
                年付客戶還可優先獲得每季產業標竿分析報告。
              </p>
            </div>
            <div className="annual-banner-cta">
              <a href="mailto:contact@example.com?subject=年付方案諮詢" className="btn-primary">
                了解年付方案
              </a>
            </div>
          </div>
        </section>

        {/* Pricing FAQ */}
        <section className="faq-section">
          <div className="faq-inner">
            <div className="section-header">
              <span className="section-eyebrow">定價常見問題</span>
              <h2 className="section-title">關於定價的常見問題</h2>
            </div>
            <div className="faq-grid">
              {pricingFaqs.map((faq, i) => (
                <div key={i} className="faq-card">
                  <h3 className="faq-q">{faq.q}</h3>
                  <p className="faq-a">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pricing-cta-section">
          <div className="pricing-cta-inner">
            <h2 className="pricing-cta-title">不確定哪個方案適合你？</h2>
            <p className="pricing-cta-desc">
              預約免費 30 分鐘顧問諮詢，我們會根據你的情況推薦最佳起點 —
              沒有推銷壓力，只有真誠的建議。
            </p>
            <a
              href="mailto:contact@example.com?subject=免費顧問諮詢%20-%20定價"
              className="btn-primary btn-primary-lg"
            >
              預約免費顧問
            </a>
            <div className="pricing-cta-trust">
              <span>✓ 無需信用卡</span>
              <span>✓ 30 分鐘深度對談</span>
              <span>✓ 個人化建議</span>
            </div>
          </div>
        </section>

        <Footer lang="zh" />
      </main>
    </>
  );
}

function LanguageSwitch() {
  return (
    <nav className="lang-switch" aria-label="語言切換" style={{ top: 20, right: 20 }}>
      <Link href="/pricing">EN</Link>
      <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
      <span className="lang-active">中文</span>
    </nav>
  );
}