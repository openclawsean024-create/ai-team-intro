// AI 團隊介紹 — IndexedDB 資料層（F-001 + F-002 + F-003 + F-004）
'use client'
import { openDB, type IDBPDatabase } from 'idb'

export interface AIRole {
  id: string
  name: string
  role: string // 職責描述
  tools: string[] // ["ChatGPT", "Claude", "Cursor", "Midjourney", ...]
  kpi: string // "每日 5 components"
  icon: string
  color: string // tailwind gradient
  order: number
  createdAt: number
}

export interface Conversation {
  id: string
  roleId: string
  platform: string // "ChatGPT" | "Claude" | "Gemini" | "其他"
  content: string
  createdAt: number
}

export interface KPI {
  id: string
  roleId: string
  date: string // YYYY-MM-DD
  count: number
  qualityScore: number // 1-5
  costUsd: number
}

const DB_NAME = 'ai-team-intro'
const DB_VERSION = 1

let dbPromise: Promise<IDBPDatabase> | null = null

export function getDB() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('roles')) {
          db.createObjectStore('roles', { keyPath: 'id' })
        }
        if (!db.objectStoreNames.contains('conversations')) {
          const store = db.createObjectStore('conversations', { keyPath: 'id' })
          store.createIndex('roleId', 'roleId')
        }
        if (!db.objectStoreNames.contains('kpis')) {
          const store = db.createObjectStore('kpis', { keyPath: 'id' })
          store.createIndex('roleId', 'roleId')
        }
      },
    })
  }
  return dbPromise
}

// ════════════════════════════════════════════════════════════════
// CRUD
// ════════════════════════════════════════════════════════════════

export async function listRoles(): Promise<AIRole[]> {
  const db = await getDB()
  const roles = await db.getAll('roles')
  return roles.sort((a, b) => a.order - b.order)
}

export async function createRole(input: Omit<AIRole, 'id' | 'createdAt'>): Promise<AIRole> {
  const db = await getDB()
  const role: AIRole = {
    ...input,
    id: `role_${Date.now()}_${Math.random().toString(36).slice(2)}`,
    createdAt: Date.now(),
  }
  await db.put('roles', role)
  return role
}

export async function updateRole(id: string, patch: Partial<AIRole>) {
  const db = await getDB()
  const existing = await db.get('roles', id)
  if (!existing) throw new Error('NOT_FOUND')
  await db.put('roles', { ...existing, ...patch, id })
}

export async function deleteRole(id: string) {
  const db = await getDB()
  await db.delete('roles', id)
  // 同時刪除對話 + KPI
  const tx = db.transaction(['conversations', 'kpis'], 'readwrite')
  const convs = await tx.objectStore('conversations').index('roleId').getAll(id)
  for (const c of convs) await tx.objectStore('conversations').delete(c.id)
  const kpis = await tx.objectStore('kpis').index('roleId').getAll(id)
  for (const k of kpis) await tx.objectStore('kpis').delete(k.id)
  await tx.done
}

export async function listConversations(roleId?: string): Promise<Conversation[]> {
  const db = await getDB()
  const all = roleId
    ? await db.getAllFromIndex('conversations', 'roleId', roleId)
    : await db.getAll('conversations')
  return all.sort((a, b) => b.createdAt - a.createdAt)
}

export async function createConversation(input: Omit<Conversation, 'id' | 'createdAt'>) {
  const db = await getDB()
  const conv: Conversation = {
    ...input,
    id: `conv_${Date.now()}_${Math.random().toString(36).slice(2)}`,
    createdAt: Date.now(),
  }
  await db.put('conversations', conv)
  return conv
}

export async function recordKPI(input: Omit<KPI, 'id'>) {
  const db = await getDB()
  const kpi: KPI = {
    ...input,
    id: `kpi_${Date.now()}_${Math.random().toString(36).slice(2)}`,
  }
  await db.put('kpis', kpi)
  return kpi
}

export async function listKPIs(): Promise<KPI[]> {
  const db = await getDB()
  return await db.getAll('kpis')
}

// ════════════════════════════════════════════════════════════════
// JSON 匯出匯入
// ════════════════════════════════════════════════════════════════
export async function exportAll() {
  const db = await getDB()
  const [roles, conversations, kpis] = await Promise.all([
    db.getAll('roles'),
    db.getAll('conversations'),
    db.getAll('kpis'),
  ])
  return { roles, conversations, kpis, exportedAt: Date.now() }
}

export async function importAll(data: { roles: AIRole[]; conversations: Conversation[]; kpis: KPI[] }) {
  const db = await getDB()
  const tx = db.transaction(['roles', 'conversations', 'kpis'], 'readwrite')
  for (const r of data.roles) await tx.objectStore('roles').put(r)
  for (const c of data.conversations) await tx.objectStore('conversations').put(c)
  for (const k of data.kpis) await tx.objectStore('kpis').put(k)
  await tx.done
}

// ════════════════════════════════════════════════════════════════
// 5 種團隊模板預載（F-002）
// ════════════════════════════════════════════════════════════════
export interface TemplateRole {
  name: string
  role: string
  tools: string[]
  kpi: string
  icon: string
  color: string
}

export interface TeamTemplate {
  name: string
  icon: string
  description: string
  roles: TemplateRole[]
}

export const TEAM_TEMPLATES: Record<string, TeamTemplate> = {
  saas: {
    name: 'SaaS 開發團隊',
    icon: '💻',
    description: '從產品到 QA 的完整 5 人 AI 開發團隊',
    roles: [
      { name: '產品 AI', role: '需求訪談 + PRD 撰寫 + 競品分析', tools: ['ChatGPT', 'Claude'], kpi: '每週 1 份 PRD', icon: '🎯', color: 'from-blue-500 to-cyan-500' },
      { name: '架構 AI', role: '系統設計 + 技術選型 + API 規格', tools: ['Claude'], kpi: '每 2 週 1 份架構圖', icon: '🏗️', color: 'from-purple-500 to-pink-500' },
      { name: '前端 AI', role: 'React 元件開發 + UI 優化', tools: ['Cursor', 'Claude'], kpi: '每日 5 components', icon: '🎨', color: 'from-pink-500 to-rose-500' },
      { name: '後端 AI', role: 'API 開發 + DB schema + 部署', tools: ['Cursor', 'Claude'], kpi: '每日 3 endpoints', icon: '⚙️', color: 'from-emerald-500 to-green-500' },
      { name: 'QA AI', role: '測試案例 + E2E + Bug 報告', tools: ['Claude'], kpi: '每日 20 test cases', icon: '🔍', color: 'from-orange-500 to-red-500' },
    ],
  },
  content: {
    name: '內容創作團隊',
    icon: '✍️',
    description: '從選題到排程的內容生產鏈',
    roles: [
      { name: '選題 AI', role: '時事趨勢 + 熱門關鍵字分析', tools: ['ChatGPT'], kpi: '每日 10 個選題', icon: '💡', color: 'from-amber-500 to-orange-500' },
      { name: '文案 AI', role: '標題 + 內文 + CTA 撰寫', tools: ['Claude', 'ChatGPT'], kpi: '每日 3 篇文章', icon: '📝', color: 'from-purple-500 to-pink-500' },
      { name: '設計 AI', role: '圖片 + 封面 + 視覺', tools: ['Midjourney'], kpi: '每日 5 張圖', icon: '🎨', color: 'from-pink-500 to-rose-500' },
      { name: '排程 AI', role: '多平台排程 + 最佳時間', tools: ['Buffer'], kpi: '每週 30 篇排程', icon: '📅', color: 'from-emerald-500 to-teal-500' },
    ],
  },
  marketing: {
    name: '行銷團隊',
    icon: '📈',
    description: '從市場研究到廣告投放',
    roles: [
      { name: '市場研究 AI', role: '競品分析 + 市場規模', tools: ['ChatGPT', 'Claude'], kpi: '每週 1 份報告', icon: '🔎', color: 'from-blue-500 to-cyan-500' },
      { name: '文案 AI', role: '廣告文案 + Landing Page', tools: ['ChatGPT'], kpi: '每日 10 個文案', icon: '✍️', color: 'from-purple-500 to-pink-500' },
      { name: '設計 AI', role: '素材製作 + Banner', tools: ['Midjourney'], kpi: '每日 8 張素材', icon: '🎨', color: 'from-orange-500 to-red-500' },
      { name: '投放 AI', role: 'FB + Google Ads 投放', tools: ['Facebook Ads', 'Google Ads'], kpi: 'ROAS ≥ 3', icon: '💰', color: 'from-emerald-500 to-green-500' },
      { name: '分析 AI', role: 'GA4 + Looker 數據分析', tools: ['GA4'], kpi: '每週 1 份洞察', icon: '📊', color: 'from-cyan-500 to-blue-500' },
    ],
  },
  cs: {
    name: '客服團隊',
    icon: '🎧',
    description: 'AI 自動回覆 + 真人升級',
    roles: [
      { name: 'AI 客服 AI', role: '70% FAQ 自動回覆', tools: ['ChatGPT'], kpi: '自動解決率 70%', icon: '🤖', color: 'from-emerald-500 to-teal-500' },
      { name: '工單分類 AI', role: '自動分流 + 標籤', tools: ['Claude'], kpi: '每日 500 工單', icon: '🏷️', color: 'from-blue-500 to-indigo-500' },
      { name: '回覆 AI', role: '建議回覆內容給真人', tools: ['Claude'], kpi: '每日 200 建議', icon: '💬', color: 'from-purple-500 to-pink-500' },
      { name: '質檢 AI', role: '對話品質審查 + 評分', tools: ['GPT-4o'], kpi: '每日 100 通', icon: '🔍', color: 'from-orange-500 to-amber-500' },
    ],
  },
  edu: {
    name: '教育團隊',
    icon: '📚',
    description: '從課程設計到學生互動',
    roles: [
      { name: '課程設計 AI', role: '課綱 + 教材 + 練習', tools: ['Claude'], kpi: '每月 1 套課程', icon: '📐', color: 'from-blue-500 to-cyan-500' },
      { name: '內容生成 AI', role: '講義 + 影片腳本', tools: ['ChatGPT', 'Claude'], kpi: '每月 20 份教材', icon: '📖', color: 'from-purple-500 to-pink-500' },
      { name: '學生互動 AI', role: 'Q&A + 作業批改', tools: ['ChatGPT'], kpi: '每日 50 題', icon: '💬', color: 'from-emerald-500 to-green-500' },
      { name: '評量 AI', role: '測驗生成 + 評分', tools: ['GPT-4o'], kpi: '每月 100 份測驗', icon: '✅', color: 'from-orange-500 to-red-500' },
    ],
  },
} as const

export type TemplateKey = keyof typeof TEAM_TEMPLATES

export async function loadTemplate(key: TemplateKey) {
  const template = TEAM_TEMPLATES[key]
  for (let i = 0; i < template.roles.length; i++) {
    const r = template.roles[i] as TemplateRole
    await createRole({
      name: r.name,
      role: r.role,
      tools: [...r.tools],
      kpi: r.kpi,
      icon: r.icon,
      color: r.color,
      order: i,
    })
  }
}