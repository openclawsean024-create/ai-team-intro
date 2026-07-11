// AI 團隊介紹 — /team (F-001 AI 角色 CRUD + F-003 對話 + F-004 KPI)
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Users, Plus, Trash2, MessageCircle, TrendingUp, Download, Upload, ArrowLeft } from "lucide-react"
import {
  listRoles,
  createRole,
  deleteRole,
  createConversation,
  recordKPI,
  exportAll,
  importAll,
  type AIRole,
} from "@/lib/db"

export default function TeamPage() {
  const [roles, setRoles] = useState<AIRole[]>([])
  const [loading, setLoading] = useState(true)
  const [showAdd, setShowAdd] = useState(false)
  const [newRole, setNewRole] = useState({ name: "", role: "", tools: "", kpi: "", icon: "🤖" })
  const [selectedRole, setSelectedRole] = useState<AIRole | null>(null)

  useEffect(() => { loadRoles() }, [])

  async function loadRoles() {
    setLoading(true)
    try {
      const r = await listRoles()
      setRoles(r)
      if (r.length > 0 && !selectedRole) setSelectedRole(r[0])
    } finally {
      setLoading(false)
    }
  }

  async function handleAdd() {
    if (!newRole.name || !newRole.role) return
    await createRole({
      name: newRole.name,
      role: newRole.role,
      tools: newRole.tools.split(",").map(s => s.trim()).filter(Boolean),
      kpi: newRole.kpi || "未設定",
      icon: newRole.icon || "🤖",
      color: "from-indigo-500 to-purple-500",
      order: roles.length,
    })
    setNewRole({ name: "", role: "", tools: "", kpi: "", icon: "🤖" })
    setShowAdd(false)
    await loadRoles()
  }

  async function handleDelete(id: string) {
    if (!confirm("刪除此角色？相關對話與 KPI 也會一併刪除。")) return
    await deleteRole(id)
    if (selectedRole?.id === id) setSelectedRole(null)
    await loadRoles()
  }

  async function handleExport() {
    const data = await exportAll()
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `ai-team-backup-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  async function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const text = await file.text()
    try {
      const data = JSON.parse(text)
      await importAll(data)
      await loadRoles()
      alert("匯入成功！")
    } catch {
      alert("匯入失敗：檔案格式錯誤")
    }
  }

  if (loading) {
    return <main className="min-h-screen flex items-center justify-center bg-zinc-50"><div className="text-zinc-500">載入中…</div></main>
  }

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-semibold">我的 AI 團隊</span>
          </Link>
          <div className="flex items-center gap-2">
            <button onClick={handleExport} className="text-sm px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5" />匯出
            </button>
            <label className="text-sm px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 flex items-center gap-1.5 cursor-pointer">
              <Upload className="w-3.5 h-3.5" />匯入
              <input type="file" accept="application/json" onChange={handleImport} className="hidden" />
            </label>
            <Link href="/dashboard" className="text-sm px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />儀表板
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {roles.length === 0 ? (
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-12 text-center">
            <Users className="w-12 h-12 text-zinc-300 mx-auto mb-3" />
            <p className="text-zinc-500 mb-4">團隊還是空的</p>
            <Link href="/" className="inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium">
              選擇模板開始
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 左側：角色列表 */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">AI 角色（{roles.length}）</h2>
                <button onClick={() => setShowAdd(true)} className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2">
                {roles.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRole(r)}
                    className={`w-full text-left p-4 rounded-xl border transition ${
                      selectedRole?.id === r.id
                        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950"
                        : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${r.color} flex items-center justify-center text-xl flex-shrink-0`}>
                          {r.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold truncate">{r.name}</div>
                          <div className="text-xs text-zinc-500 truncate">{r.role}</div>
                        </div>
                      </div>
                      <button onClick={(e) => { e.stopPropagation(); handleDelete(r.id) }} className="p-1 text-zinc-400 hover:text-red-500">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {r.tools.map((t, i) => (
                        <span key={i} className="px-1.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs">{t}</span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 右側：角色詳情 + 對話 + KPI */}
            <div className="lg:col-span-2">
              {selectedRole ? (
                <RoleDetail role={selectedRole} onUpdate={loadRoles} />
              ) : (
                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-12 text-center text-zinc-500">
                  選擇左側角色查看詳情
                </div>
              )}
            </div>
          </div>
        )}

        {/* 新增角色 modal */}
        {showAdd && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 max-w-md w-full">
              <h3 className="text-xl font-bold mb-4">新增 AI 角色</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="角色名稱（如 前端 AI）"
                  value={newRole.name}
                  onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
                  className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-950"
                />
                <input
                  type="text"
                  placeholder="職責（如 React 元件開發）"
                  value={newRole.role}
                  onChange={(e) => setNewRole({ ...newRole, role: e.target.value })}
                  className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-950"
                />
                <input
                  type="text"
                  placeholder="工具（逗號分隔：Cursor, Claude）"
                  value={newRole.tools}
                  onChange={(e) => setNewRole({ ...newRole, tools: e.target.value })}
                  className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-950"
                />
                <input
                  type="text"
                  placeholder="KPI（如 每日 5 components）"
                  value={newRole.kpi}
                  onChange={(e) => setNewRole({ ...newRole, kpi: e.target.value })}
                  className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-950"
                />
                <input
                  type="text"
                  placeholder="圖示 emoji（🤖）"
                  value={newRole.icon}
                  onChange={(e) => setNewRole({ ...newRole, icon: e.target.value })}
                  className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-950"
                />
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <button onClick={() => setShowAdd(false)} className="px-4 py-2 rounded-lg border border-zinc-300 text-sm">取消</button>
                <button onClick={handleAdd} className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium">新增</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

function RoleDetail({ role, onUpdate }: { role: AIRole; onUpdate: () => void }) {
  const [platform, setPlatform] = useState("ChatGPT")
  const [content, setContent] = useState("")
  const [count, setCount] = useState(1)
  const [quality, setQuality] = useState(5)
  const [cost, setCost] = useState(0.05)

  async function handleAddConv() {
    if (!content.trim()) return
    await createConversation({ roleId: role.id, platform, content })
    setContent("")
    onUpdate()
  }

  async function handleAddKPI() {
    await recordKPI({
      roleId: role.id,
      date: new Date().toISOString().slice(0, 10),
      count,
      qualityScore: quality,
      costUsd: cost,
    })
    onUpdate()
  }

  return (
    <div className="space-y-4">
      {/* 角色詳情 */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6">
        <div className="flex items-start gap-4">
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center text-3xl flex-shrink-0`}>
            {role.icon}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-1">{role.name}</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-3">{role.role}</p>
            <div className="flex flex-wrap gap-2">
              {role.tools.map((t, i) => (
                <span key={i} className="px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-medium">{t}</span>
              ))}
            </div>
            <div className="mt-3 text-sm">
              <span className="text-zinc-500">KPI：</span>
              <span className="font-medium">{role.kpi}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 對話記錄（F-003）*/}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6">
        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-indigo-500" />
          新增對話紀錄
        </h3>
        <div className="space-y-3">
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-950"
          >
            <option>ChatGPT</option>
            <option>Claude</option>
            <option>Gemini</option>
            <option>Cursor</option>
            <option>其他</option>
          </select>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="貼上對話內容（Markdown 支援）"
            rows={4}
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-950"
          />
          <button onClick={handleAddConv} className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium">
            儲存對話
          </button>
        </div>
      </div>

      {/* KPI 記錄（F-004）*/}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6">
        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-indigo-500" />
          今日 KPI 記錄
        </h3>
        <div className="grid grid-cols-3 gap-3 mb-3">
          <div>
            <label className="text-xs text-zinc-500">產出量</label>
            <input type="number" value={count} onChange={(e) => setCount(parseInt(e.target.value) || 0)} className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-950" />
          </div>
          <div>
            <label className="text-xs text-zinc-500">品質 (1-5)</label>
            <input type="number" min={1} max={5} value={quality} onChange={(e) => setQuality(parseInt(e.target.value) || 5)} className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-950" />
          </div>
          <div>
            <label className="text-xs text-zinc-500">成本 (US$)</label>
            <input type="number" step="0.01" value={cost} onChange={(e) => setCost(parseFloat(e.target.value) || 0)} className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-950" />
          </div>
        </div>
        <button onClick={handleAddKPI} className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium">
          記錄 KPI
        </button>
      </div>
    </div>
  )
}