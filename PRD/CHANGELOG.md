# Changelog · ai-team-intro PRD

所有 PRD / SPEC 變更記錄於此。最新在上。

---

## [v3.0.2] · 2026-09-06 · fleet-upgrade

### Added（新增）
- §16 部署契約（Fleet 規格，9 個子節）
  - §16.1 部署目標表（Pages + Vercel 雙軌）
  - §16.2 11 個靜態入口檔案清單
  - §16.3 連結檢查結果表（0 失效）
  - §16.4 GHA Workflow 觸發說明
  - §16.5 環境變數表（無）
  - §16.6 部署後驗證 checklist
  - §16.7 雙軌說明（Pages 靜態 + Vercel Next.js）
  - §16.8 URL 對照（Pages + Vercel）
- 版本號升級 v2.2.1 → v3.0.2
- 標頭加入 fleet-upgrade 標記 + 部署目標明確為 GitHub Pages

### Changed（變更）
- 升級對齊 SPEC v3.0 契約（fleet 統一規格）
- 部署目標從 Vercel 單軌 → **Pages（靜態）+ Vercel（Next.js）雙軌**
- GHA workflow 新增 Pages 自動部署（跳過 npm，純靜態）

### Status
- 11 個 HTML 入口：✅ all served
- 內部連結：✅ 0 失效
- 外部連結：✅ github / discord / fonts 全部生效
- 雙軌部署：✅ Pages（靜態）+ Vercel（Next.js）並存
- GHA: ✅ ci.yml 建立（靜態 Pages deploy）

---

## [v2.2.1] · 2026-07-19 · sweet-spot-driven rewrite

### Added
- 11 個靜態 HTML Demo（index-zh / index-en / dashboard / meeting_summary × 2 / compound_calculator / leaderboard / hot_topic_tracker / marathon_bracelet / ai_intel_assistant / create）
- 5 位 AI Agent 介紹（Dva 協調者 / Alan CTO / Sophia CEO / Mia 文書 / Ivy 資料偵測）
- §1.4 商業目標 KPI（Discovery / MVP / M6 / 每週）
- §1.5 Non-Goals 7 條
- §3 MVP 6 個 + v2 4 個 + v3 4 個 FR
- §3.4 18 條 AC（Given/When/Then）
- §4.3 完整 Prisma / localStorage schema
- §4.4 REST API 規格
- §5.3 降級機制（4 種失敗情境）
- §7.2 ADR（架構決策記錄）
- §10 附錄（競品 / 術語 / 參考 / Error Code / 可攜性）
- §11 市場驗證計畫
- §15 完整版（驗證問題 + Maintainer handoff）

### Status
- 純靜態 HTML 11 個入口，總計 ~250 KB
- Next.js 16 + React 19 scaffold（`src/app/`）— 未生產部署
- 部署目標：Vercel

### Notes
- sweet spot：2/10｜建議動作：kill（本次不執行；先驗證再開發）

---

## [v1.0] · 2026-05 · init

- 11 個 HTML Demo 初始版本
- Cardano 驅動的 AI 團隊介紹主題
- 5 位 AI Agent 角色定義
