import Link from "next/link";
import { pricingPlans, comparisonTable, pricingFaqs } from "@/data/agents";

export const metadata = {
  title: "方案價格 - AI 代理團隊",
  description: "透明的 AI Agent 方案價格。探索方案、成長方案、企業方案，為您的業務量身打造。",
};

export default function PricingPageZh() {
  return (
    <main className="pricing-page">
      {/* Language switch */}
      <nav className="lang-switch" aria-label="語言切換" style={{ position: "fixed", top: "24px", right: "24px", zIndex: 100 }}>
        <Link href="/pricing">EN</Link>
        <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
        <span className="lang-active">中文</span>
      </nav>

      {/* Hero */}
      <section className="pricing-hero">
        <div className="pricing-hero-inner">
          <div className="pricing-eyebrow">透明定價</div>
          <h1 className="pricing-title">方案價格</h1>
          <p className="pricing-subtitle">
            所有方案均包含完整 AI Agent 團隊。無隱藏費用，無預期外的帳單。可隨時升級或降級。
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
                {plan.highlight && <div className="pricing-badge">熱門方案</div>}
                <div className="pricing-name">{plan.name}</div>
                <div className="pricing-name-zh" style={{ display: "none" }}>{plan.nameEn}</div>
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
            <h3 className="annual-banner-title">年付享有 2 個月免費，相當於 83 折</h3>
            <p className="annual-banner-desc">
              選擇年付方案，即享有 2 個月免費，並可優先獲得我們的年度 AI 趨勢報告與產業標竿分析。
            </p>
          </div>
          <div className="annual-banner-cta">
            <a href="mailto:contact@example.com?subject=年付方案詢問" className="btn-primary">
              詢問年付方案
            </a>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-section">
        <div className="comparison-inner">
          <div className="section-header" style={{ marginBottom: "0" }}>
            <span className="section-eyebrow">方案比較</span>
            <h2 className="section-title" style={{ fontSize: "32px" }}>我們的方案與市場比較</h2>
            <p className="section-desc">
              了解每個方案包含的詳細內容，以及與市場上其他方案的差異。
            </p>
          </div>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="comparison-feature-col">功能</th>
                  <th>Explorer</th>
                  <th className="comparison-highlight-col">Growth ★</th>
                  <th>Enterprise</th>
                  <th className="comparison-others">其他方案</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row) => (
                  <tr key={row.feature}>
                    <td className="comparison-feature-cell">
                      <span className="comparison-feature-label">{row.feature}</span>
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
            <span className="section-eyebrow">價格 FAQ</span>
            <h2 className="section-title">常見問題</h2>
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
          <div className="pricing-cta-title">準備好开始了嗎？</div>
          <p className="pricing-cta-desc">
            預約免費 30 分鐘顧問諮詢。無需承諾，只提供誠懇的建議，告訴您 AI 如何為您的組織創造最大價值。
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginTop: "8px" }}>
            <a
              href="mailto:contact@example.com?subject=免費顧問諮詢請求&body=Hi%20AI%20團隊%2C%0A%0A我想了解更多關於你們的%20AI%20Agent%20服務。%0A%0A公司名稱%3A%0A產業%3A%0A目前痛點%3A"
              className="btn-primary btn-primary-lg"
            >
              🚀 立即預約免費顧問
            </a>
            <Link href="/zh" className="btn-secondary-ghost">← 返回首頁</Link>
          </div>
          <div className="pricing-cta-trust">
            <span>✓ 無需信用卡</span>
            <span>✓ 30 分鐘深度顧問</span>
            <span>✓ 客製化建議報告</span>
          </div>
        </div>
      </section>
    </main>
  );
}