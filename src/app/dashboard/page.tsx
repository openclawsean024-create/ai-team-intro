// AI 團隊介紹 — /dashboard (F-006 團隊儀表板 + F-010 成本計算器)
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, TrendingUp, DollarSign, BarChart3 } from "lucide-react"
import { listRoles, listKPIs, listConversations, type AIRole, type KPI } from "@/lib/db"

export default function DashboardPage() {
  const [roles, setRoles] = useState<AIRole[]>([])
  const [kpis, setKPIs] = useState<KPI[]>([])
  const [conversations, setConversations] = useState(0)
  const [costInputs, setCostInputs] = useState({ claude: 20, cursor: 20, chatgpt: 20, gemini: 20, other: 0 })

  useEffect(() => { load() }, [])

  async function load() {
    const [r, k, c] = await Promise.all([listRoles(), listKPIs(), listConversations()])
    setRoles(r)
    setKPIs(k)
    setConversations(c.length)
  }

  // KPI 統計
  const totalOutput = kpis.reduce((sum, k) => sum + k.count, 0)
  const totalCost = kpis.reduce((sum, k) => sum + k.costUsd, 0)
  const avgQuality = kpis.length > 0
    ? (kpis.reduce((sum, k) => sum + k.qualityScore, 0) / kpis.length).toFixed(1)
    : "0"

  // 各角色 KPI
  const byRole = roles.map((r) => {
    const roleKpis = kpis.filter((k) => k.roleId === r.id)
    return {
      role: r,
      count: roleKpis.reduce((s, k) => s + k.count, 0),
      avgQuality: roleKpis.length > 0 ? (roleKpis.reduce((s, k) => s + k.qualityScore, 0) / roleKpis.length).toFixed(1) : "-",
      cost: roleKpis.reduce((s, k) => s + k.costUsd, 0),
    }
  })

  // 成本計算器
  const monthlyCost = costInputs.claude + costInputs.cursor + costInputs.chatgpt + costInputs.gemini + costInputs.other

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/team" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-semibold">團隊儀表板</span>
          </Link>
          <Link href="/cost" className="text-sm px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center gap-1.5">
            <DollarSign className="w-3.5 h-3.5" />成本計算器
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">本月團隊總覽</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8">所有 AI 角色的綜合表現</p>

        {/* 4 大指標 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Metric icon={BarChart3} label="團隊角色數" value={String(roles.length)} color="from-indigo-500 to-purple-500" />
          <Metric icon={TrendingUp} label="本月總產出" value={String(totalOutput)} color="from-emerald-500 to-green-500" />
          <Metric icon={DollarSign} label="本月總成本" value={`US$${totalCost.toFixed(2)}`} color="from-orange-500 to-red-500" />
          <Metric icon={BarChart3} label="平均品質" value={`${avgQuality}/5`} color="from-cyan-500 to-blue-500" />
        </div>

        {/* 各角色 KPI 表 */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">各角色 KPI</h2>
          {byRole.length === 0 ? (
            <p className="text-center text-zinc-500 py-8">還沒有任何角色，先到 <Link href="/team" className="text-indigo-600 underline">團隊頁</Link> 新增</p>
          ) : (
            <table className="w-full">
              <thead className="border-b border-zinc-200 dark:border-zinc-800">
                <tr className="text-left text-sm text-zinc-500">
                  <th className="pb-2">角色</th>
                  <th className="pb-2">產出量</th>
                  <th className="pb-2">品質</th>
                  <th className="pb-2">成本</th>
                  <th className="pb-2">KPI 目標</th>
                </tr>
              </thead>
              <tbody>
                {byRole.map((br) => (
                  <tr key={br.role.id} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${br.role.color} flex items-center justify-center text-base`}>
                          {br.role.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{br.role.name}</div>
                          <div className="text-xs text-zinc-500">{br.role.role.slice(0, 30)}…</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-sm">{br.count}</td>
                    <td className="text-sm">{br.avgQuality}</td>
                    <td className="text-sm">US${br.cost.toFixed(2)}</td>
                    <td className="text-xs text-zinc-500">{br.role.kpi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* 對話統計 */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6">
          <h2 className="text-xl font-bold mb-4">對話記錄</h2>
          <p className="text-3xl font-bold">{conversations} <span className="text-sm font-normal text-zinc-500">則對話</span></p>
          <p className="text-sm text-zinc-500 mt-2">所有角色累計對話數量</p>
        </div>
      </div>
    </main>
  )
}

function Metric({ icon: Icon, label, value, color }: any) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
      <div className={`inline-flex w-10 h-10 rounded-lg bg-gradient-to-br ${color} items-center justify-center mb-3`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{label}</div>
    </div>
  )
}