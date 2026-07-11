// AI 團隊介紹 — /cost (F-010 成本計算器)
"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calculator } from "lucide-react"

export default function CostPage() {
  const [claude, setClaude] = useState(20)
  const [cursor, setCursor] = useState(20)
  const [chatgpt, setChatgpt] = useState(20)
  const [gemini, setGemini] = useState(0)
  const [other, setOther] = useState(0)

  const monthly = claude + cursor + chatgpt + gemini + other
  const yearly = monthly * 12
  const ntd = Math.round(monthly * 30)

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-semibold">AI 工具成本計算器</span>
          </Link>
          <Link href="/team" className="text-sm text-zinc-600 hover:text-zinc-900">回到團隊</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <Calculator className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
          <h1 className="text-3xl font-bold tracking-tight mb-2">每月 AI 工具成本計算</h1>
          <p className="text-zinc-600 dark:text-zinc-400">輸入你的訂閱方案，立即算出總成本</p>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 p-8 space-y-4">
          <CostRow label="Claude Pro" placeholder="US$20/月" value={claude} onChange={setClaude} color="from-orange-500 to-red-500" />
          <CostRow label="Cursor Pro" placeholder="US$20/月" value={cursor} onChange={setCursor} color="from-blue-500 to-cyan-500" />
          <CostRow label="ChatGPT Plus" placeholder="US$20/月" value={chatgpt} onChange={setChatgpt} color="from-emerald-500 to-green-500" />
          <CostRow label="Gemini Advanced" placeholder="US$20/月" value={gemini} onChange={setGemini} color="from-purple-500 to-pink-500" />
          <CostRow label="其他" placeholder="US$0/月" value={other} onChange={setOther} color="from-zinc-500 to-zinc-700" />

          <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-500">每月成本</span>
              <span className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                US${monthly.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-500">每月成本（NT$）</span>
              <span className="text-xl font-bold">NT${ntd.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-500">年成本</span>
              <span className="text-xl font-bold">US${yearly.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-zinc-500">
          假設 1 US$ = NT$30 · 計算結果僅供參考
        </div>
      </div>
    </main>
  )
}

function CostRow({ label, value, onChange, color }: any) {
  return (
    <div className="flex items-center gap-4">
      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex-shrink-0`} />
      <div className="flex-1">
        <label className="block text-sm font-medium mb-1">{label}</label>
        <input
          type="number"
          min={0}
          step="0.01"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-950 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
        />
      </div>
      <div className="text-sm text-zinc-500 w-20 text-right">US$/月</div>
    </div>
  )
}