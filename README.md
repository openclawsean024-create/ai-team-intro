# AI Agent Team

**English follows below.**

一支由五個自主 AI 代理組成的智慧團隊，24/7 無縫協作。

## 團隊成員

| 成員 | 角色 | 職責 |
|------|------|------|
| **Dva** | 協調者 (Coordinator) | 路由分配、任務協調、資訊整合 |
| **Alan** | 技術長 (CTO) | 系統架構、AI 開發、DevOps |
| **Sophia** | 執行長 (CEO) | 產品策略、外部溝通、商業模式 |
| **Mia** | 文書及秘書工作 | 文件管理、會議紀錄、行程安排 |
| **Ivy** | 資料偵測 | 資料蒐集、市場痛點偵測、找 idea |

## 立即體驗

**GitHub Pages**: <https://openclawsean024-create.github.io/ai-team-intro/>  
**Vercel** (Next.js app): <https://ai-team-intro-m28gk5qph-seans-projects-7dc76219.vercel.app>

## 11 個 HTML 入口

- `index.html` — 根入口（自動重導向到 `index-zh.html`）
- `index-zh.html` — 繁中介紹頁（主）
- `index-en.html` — 英文介紹頁
- `dashboard.html` — 個人儀表板 demo
- `meeting_summary.html` / `meeting_summary_v2.html` — 會議紀錄工具
- `compound_calculator.html` — 複利計算器
- `leaderboard.html` — 排行榜
- `hot_topic_tracker.html` — 熱門話題追蹤
- `marathon_bracelet.html` — 馬拉松手環 demo
- `ai_intel_assistant.html` — AI 情報助理
- `create.html` — 建立頁

## 開發

```bash
# 純靜態：直接打開 index.html
open index.html

# Next.js app（Vercel deploy）
npm install
npm run dev      # http://localhost:3000
npm run build    # 靜態 export → /out
```

## 部署

- **GitHub Pages**（靜態）— GHA 自動部署 11 個 HTML
- **Vercel**（Next.js）— 自動部署 `src/app/` 的 React 應用

兩者**雙軌並行**，互不影響。詳見 [`PRD/SPEC.md` §16 部署契約](PRD/SPEC.md)。

## 文件

- [`PRD/SPEC.md`](PRD/SPEC.md) — v3.0.2 規格書（含 §16 部署契約）
- [`PRD/CHANGELOG.md`](PRD/CHANGELOG.md) — 變更日誌
- [`.github/workflows/ci.yml`](.github/workflows/ci.yml) — CI/CD（靜態 Pages deploy）

---

# AI Agent Team

An intelligent team of five autonomous AI agents, operating 24/7 with seamless collaboration.

## Team Members

| Member | Role | Responsibilities |
|--------|------|-----------------|
| **Dva** | Coordinator | Task routing, coordination, information synthesis |
| **Alan** | CTO | System architecture, AI development, DevOps |
| **Sophia** | CEO | Product strategy, external communications, business model |
| **Mia** | Secretary | Documentation, meeting notes, scheduling |
| **Ivy** | Data Intel | Data gathering, market pain point detection, idea mining |

## Live Demo

**GitHub Pages**: <https://openclawsean024-create.github.io/ai-team-intro/>  
**Vercel** (Next.js app): <https://ai-team-intro-m28gk5qph-seans-projects-7dc76219.vercel.app>
