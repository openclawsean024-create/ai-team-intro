// AI 團隊介紹 — main page (F-002 模板選擇)
"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Users, Sparkles, Zap, BookOpen, GraduationCap } from "lucide-react"
import { TEAM_TEMPLATES, loadTemplate, type TemplateKey } from "@/lib/db"

const TEMPLATE_ICONS: Record<TemplateKey, any> = {
  saas: Users,
  content: BookOpen,
  marketing: Sparkles,
  cs: Zap,
  edu: GraduationCap,
}

export default function HomePage() {
  const router = useRouter()
  const [loading, setLoading] = useState<TemplateKey | null>(null)

  async function handleSelectTemplate(key: TemplateKey) {
    if (!confirm(`載入「${TEAM_TEMPLATES[key].name}」模板？這會新增 ${TEAM_TEMPLATES[key].roles.length} 個 AI 角色到你的團隊。`)) return
    setLoading(key)
    try {
      await loadTemplate(key)
      router.push("/team")
    } catch (err) {
      alert("載入失敗：" + (err instanceof Error ? err.message : "未知錯誤"))
      setLoading(null)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight">AI 團隊介紹</span>
          </Link>
          <Link href="/team" className="text-sm text-zinc-600 hover:text-zinc-900">我的團隊</Link>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            建立你的
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              AI 團隊
            </span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            從 5 種預載模板開始，快速建立 5-10 個 AI 角色
            <br />
            追蹤 KPI、串接工作流、計算成本
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">選擇團隊模板</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(Object.keys(TEAM_TEMPLATES) as TemplateKey[]).map((key) => {
            const t = TEAM_TEMPLATES[key]
            const Icon = TEMPLATE_ICONS[key]
            return (
              <button
                key={key}
                onClick={() => handleSelectTemplate(key)}
                disabled={loading !== null}
                className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 text-left hover:shadow-xl transition disabled:opacity-50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{t.icon}</div>
                  <span className="text-xs text-zinc-500">{t.roles.length} 個 AI 角色</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{t.name}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{t.description}</p>
                <div className="space-y-2 mb-4">
                  {t.roles.slice(0, 3).map((r, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-lg">{r.icon}</span>
                      <span className="font-medium">{r.name}</span>
                      <span className="text-xs text-zinc-500 truncate">{r.role}</span>
                    </div>
                  ))}
                  {t.roles.length > 3 && (
                    <div className="text-xs text-zinc-500">+{t.roles.length - 3} 個更多角色</div>
                  )}
                </div>
                <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                  {loading === key ? "載入中…" : (<><Icon className="w-4 h-4" />選擇此模板</>)}
                </div>
              </button>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-500 mb-4">或</p>
          <Link
            href="/team"
            className="inline-block px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            從空白開始，手動新增角色
          </Link>
        </div>
      </section>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-zinc-500">
          © 2026 AI 團隊介紹 · Sean Li · 純前端 IndexedDB · 100% 隱私
        </div>
      </footer>
    </main>
  )
}