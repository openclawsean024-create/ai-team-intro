import ContactForm from "./ContactForm";

interface FooterProps {
  lang?: "en" | "zh";
}

export default function Footer({ lang = "en" }: FooterProps) {
  const isZh = lang === "zh";

  return (
    <footer className="site-footer">
      <div className="footer-form-section">
        <div className="footer-form-inner">
          {/* Left column: brand + info */}
          <div className="footer-info-col">
            <div className="footer-brand">
              <span className="footer-emoji">🤖</span>
              <span className="footer-name">{isZh ? "AI 代理團隊" : "AI Agent Team"}</span>
            </div>
            {isZh ? (
              <>
                <p className="footer-tagline">自主 AI · 24/7 運行 · 企業級安全</p>
                <div className="footer-links">
                  <a href="#services">服務項目</a>
                  <a href="/pricing">方案價格</a>
                  <a href="mailto:contact@example.com">聯絡我們</a>
                </div>
                <div className="footer-compliance">
                  <span>🛡️ SOC 2 合規</span>
                  <span>🔒 GDPR Ready</span>
                  <span>⚡ 99.9% 運行時間</span>
                  <span>🔐 TLS 1.3</span>
                </div>
                <p className="footer-copy">
                  © {new Date().getFullYear()} AI 代理團隊 · 由 Cardano 驅動
                </p>
              </>
            ) : (
              <>
                <p className="footer-tagline">Autonomous AI · 24/7 Operations · Enterprise Security</p>
                <div className="footer-links">
                  <a href="#services">Services</a>
                  <a href="/pricing">Pricing</a>
                  <a href="mailto:contact@example.com">Contact Us</a>
                </div>
                <div className="footer-compliance">
                  <span>🛡️ SOC 2 Compliant</span>
                  <span>🔒 GDPR Ready</span>
                  <span>⚡ 99.9% Uptime</span>
                  <span>🔐 TLS 1.3</span>
                </div>
                <p className="footer-copy">
                  © {new Date().getFullYear()} AI Agent Team · Powered by Cardano
                </p>
              </>
            )}
          </div>

          {/* Right column: contact form */}
          <div className="footer-form-col">
            <h3 className="footer-form-title">
              {isZh ? "立即開始" : "Get Started Today"}
            </h3>
            <p className="footer-form-subtitle">
              {isZh
                ? "填寫表單，我們的顧問會在 24 小時內與您聯繫。"
                : "Fill out the form and our team will reach out within 24 hours."}
            </p>
            <ContactForm compact />
          </div>
        </div>
      </div>
    </footer>
  );
}