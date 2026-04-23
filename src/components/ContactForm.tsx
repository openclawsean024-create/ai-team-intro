"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  company: string;
  title: string;
  companySize: string;
  email: string;
  primaryNeed: string;
  plans: string[];
  message: string;
}

const initialFormData: FormData = {
  name: "",
  company: "",
  title: "",
  companySize: "",
  email: "",
  primaryNeed: "",
  plans: [],
  message: "",
};

const companySizes = ["1-10", "11-50", "51-200", "201-1000", "1000+"];
const primaryNeeds = [
  "智能客服",
  "流程自動化",
  "市場情報",
  "系統整合",
  "教育訓練",
  "其他",
];
const planOptions = ["Explorer", "Growth", "Enterprise"];

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleCheckboxChange = (plan: string) => {
    setFormData((prev) => ({
      ...prev,
      plans: prev.plans.includes(plan)
        ? prev.plans.filter((p) => p !== plan)
        : [...prev.plans, plan],
    }));
  };

  const validate = () => {
    if (!formData.name.trim()) return "請填寫姓名";
    if (!formData.company.trim()) return "請填寫公司名稱";
    if (!formData.title.trim()) return "請填寫職稱";
    if (!formData.companySize) return "請選擇公司規模";
    if (!formData.email.trim()) return "請填寫 Email";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Email 格式不正確";
    if (!formData.primaryNeed) return "請選擇主要需求";
    if (formData.plans.length === 0) return "請選擇至少一個感興趣的方案";
    return "";
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        "service_aiteamintro",
        "template_aiteamintro",
        {
          name: formData.name,
          company: formData.company,
          title: formData.title,
          company_size: formData.companySize,
          email: formData.email,
          primary_need: formData.primaryNeed,
          interested_plans: formData.plans.join(", "),
          message: formData.message,
        },
        "placeholder_public_key"
      );
      setSuccess(true);
      setFormData(initialFormData);
    } catch {
      setError("提交失敗，請稍後再試或寄 email 聯絡我們。");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="form-success">
        <div className="form-success-icon">✅</div>
        <h3 className="form-success-title">感謝您的填寫！</h3>
        <p className="form-success-desc">
          我們會在 24 小時內與您聯繫。如需緊急聯絡，請寄 email 至{" "}
          <a href="mailto:contact@example.com">contact@example.com</a>
        </p>
      </div>
    );
  }

  const labelClass = compact ? "form-label form-label-sm" : "form-label";
  const inputClass = compact ? "form-input form-input-sm" : "form-input";
  const selectClass = compact ? "form-select form-select-sm" : "form-select";
  const textareaClass = compact ? "form-textarea form-textarea-sm" : "form-textarea";

  return (
    <form onSubmit={handleSubmit} className={`contact-form ${compact ? "contact-form-compact" : ""}`} noValidate>
      <div className={`form-row ${compact ? "form-row-sm" : ""}`}>
        <div className="form-group">
          <label className={labelClass} htmlFor="name">姓名 *</label>
          <input
            id="name"
            name="name"
            type="text"
            className={inputClass}
            value={formData.name}
            onChange={handleChange}
            placeholder="王大明"
            required
          />
        </div>
        <div className="form-group">
          <label className={labelClass} htmlFor="company">公司名稱 *</label>
          <input
            id="company"
            name="company"
            type="text"
            className={inputClass}
            value={formData.company}
            onChange={handleChange}
            placeholder="某某科技有限公司"
            required
          />
        </div>
      </div>

      <div className={`form-row ${compact ? "form-row-sm" : ""}`}>
        <div className="form-group">
          <label className={labelClass} htmlFor="title">職稱 *</label>
          <input
            id="title"
            name="title"
            type="text"
            className={inputClass}
            value={formData.title}
            onChange={handleChange}
            placeholder="執行長 / 營運總監"
            required
          />
        </div>
        <div className="form-group">
          <label className={labelClass} htmlFor="companySize">公司規模 *</label>
          <select
            id="companySize"
            name="companySize"
            className={selectClass}
            value={formData.companySize}
            onChange={handleChange}
            required
          >
            <option value="">請選擇</option>
            {companySizes.map((size) => (
              <option key={size} value={size}>{size} 人</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className={labelClass} htmlFor="email">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          className={inputClass}
          value={formData.email}
          onChange={handleChange}
          placeholder="you@company.com"
          required
        />
      </div>

      <div className="form-group">
        <label className={labelClass} htmlFor="primaryNeed">主要需求 *</label>
        <select
          id="primaryNeed"
          name="primaryNeed"
          className={selectClass}
          value={formData.primaryNeed}
          onChange={handleChange}
          required
        >
          <option value="">請選擇</option>
          {primaryNeeds.map((need) => (
            <option key={need} value={need}>{need}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label className={labelClass}>感興趣方案 *</label>
        <div className="form-checkboxes">
          {planOptions.map((plan) => (
            <label key={plan} className="form-checkbox-label">
              <input
                type="checkbox"
                checked={formData.plans.includes(plan)}
                onChange={() => handleCheckboxChange(plan)}
                className="form-checkbox"
              />
              <span>{plan}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label className={labelClass} htmlFor="message">額外說明</label>
        <textarea
          id="message"
          name="message"
          className={textareaClass}
          value={formData.message}
          onChange={handleChange}
          placeholder="請描述您的業務需求或想了解的內容..."
          rows={compact ? 3 : 4}
        />
      </div>

      {error && (
        <div className="form-error" role="alert">
          {error}
        </div>
      )}

      <button
        type="submit"
        className={`form-submit-btn ${compact ? "form-submit-btn-sm" : ""}`}
        disabled={loading}
      >
        {loading ? (
          <span className="form-loading">
            <span className="form-spinner" />
            提交中...
          </span>
        ) : (
          "🚀 立即預約免費顧問"
        )}
      </button>
    </form>
  );
}