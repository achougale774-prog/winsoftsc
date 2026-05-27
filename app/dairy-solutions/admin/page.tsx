"use client"

import React, { useState, useMemo } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Users,
  Milk,
  Receipt,
  FileText,
  BookOpen,
  LogOut,
  TrendingUp,
  ArrowUpRight,
  Search,
  Filter,
  Download,
  Brain,
  PlusCircle,
  FileSpreadsheet,
  RefreshCw,
  Coins,
  Warehouse,
  ChevronRight,
  Activity,
  ArrowLeft,
  Printer
} from "lucide-react"

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts"

// Mock Data for Admin Dashboard - retrieved from images
const ADMIN_MEMBERS = [
  { code: "101", name: "Krishna Nago Patil Uchawade", phone: "1234567890", milkType: "Cow", village: "Uchawade", active: true },
  { code: "102", name: "Bhairavnath Dudh Utpadak Sanstha Goundwad", phone: "8970632939", milkType: "Buffalo", village: "Goundwad", active: true },
  { code: "103", name: "Sidray Nago Lahor", phone: "9449969121", milkType: "Cow", village: "Goundwad", active: true },
  { code: "104", name: "Shre Maruti Parsappa Jangali Masmaddi", phone: "9448810815", milkType: "Cow", village: "Masmaddi", active: true },
  { code: "105", name: "Raju Anant Navaloor Hirebagewadi", phone: "9980101789", milkType: "Cow", village: "Hirebagewadi", active: true },
  { code: "106", name: "Sachine Tarle Ambewadi", phone: "8748828584", milkType: "Buffalo", village: "Ambewadi", active: true },
  { code: "107", name: "Mauli dudh Ut kendra Chandgad new", phone: "9611210504", milkType: "Cow", village: "Chandgad", active: true }
]

const LIVE_COLLECTION_ENTRIES = [
  { code: "224", name: "Krishna Nago Patil", shift: "Morning", type: "Cow", qty: 491.85, fat: 4.2, snf: 8.5, rate: 33.75, amount: 16599.52 },
  { code: "210", name: "Bhairavnath Sanstha Goundwad", shift: "Morning", type: "Buffalo", qty: 4697.65, fat: 6.8, snf: 9.0, rate: 50.44, amount: 236936.74 },
  { code: "208", name: "Sidray Nago Lahor", shift: "Evening", type: "Cow", qty: 2713.74, fat: 4.1, snf: 8.5, rate: 34.65, amount: 94020.19 },
  { code: "207", name: "Shre Maruti Jangali", shift: "Evening", type: "Buffalo", qty: 683.28, fat: 7.1, snf: 9.2, rate: 52.93, amount: 36166.20 },
  { code: "203", name: "Raju Anant Navaloor", shift: "Morning", type: "Cow", qty: 312.45, fat: 4.0, snf: 8.4, rate: 32.50, amount: 10154.63 },
  { code: "112", name: "Sachine Tarle Ambewadi", shift: "Morning", type: "Buffalo", qty: 854.20, fat: 6.9, snf: 9.1, rate: 51.20, amount: 43735.04 },
  { code: "111", name: "Mauli dudh Ut kendra", shift: "Evening", type: "Cow", qty: 542.10, fat: 4.3, snf: 8.6, rate: 34.80, amount: 18865.08 }
]

const WEEKLY_TREND_DATA = [
  { day: "Mon", Cow: 3200, Buffalo: 2100, Revenue: 180000 },
  { day: "Tue", Cow: 3400, Buffalo: 2200, Revenue: 195000 },
  { day: "Wed", Cow: 3100, Buffalo: 2050, Revenue: 175000 },
  { day: "Thu", Cow: 3700, Buffalo: 2400, Revenue: 215000 },
  { day: "Fri", Cow: 3900, Buffalo: 2500, Revenue: 230000 },
  { day: "Sat", Cow: 3800, Buffalo: 2350, Revenue: 220000 },
  { day: "Sun", Cow: 4100, Buffalo: 2600, Revenue: 245000 }
]

const BILL_PAYMENT_CYCLES = [
  { period: "01/05/2026 - 10/05/2026", cowQty: 37494.30, buffaloQty: 11245.88, cowAmt: 1424783.50, buffaloAmt: 567242.00, deductions: 12450.00, status: "Paid" },
  { period: "21/04/2026 - 30/04/2026", cowQty: 35124.20, buffaloQty: 10984.50, cowAmt: 1334720.00, buffaloAmt: 549225.00, deductions: 14830.00, status: "Paid" },
  { period: "11/04/2026 - 20/04/2026", cowQty: 36240.10, buffaloQty: 11420.30, cowAmt: 1377123.00, buffaloAmt: 571015.00, deductions: 11920.00, status: "Paid" }
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "dailySummary" | "billSummary" | "milkBill" | "collectionReport" | "ledger">("overview")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFarmer, setSelectedFarmer] = useState(ADMIN_MEMBERS[0])
  const [selectedCycle, setSelectedCycle] = useState(BILL_PAYMENT_CYCLES[0])
  const [milkFilter, setMilkFilter] = useState<"Both" | "Cow" | "Buffalo">("Both")

  // Filtered members for dropdowns
  const filteredFarmers = useMemo(() => {
    return ADMIN_MEMBERS.filter(f => 
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      f.code.includes(searchQuery)
    )
  }, [searchQuery])

  // Processed totals for Dashboard KPIs
  const totalStats = useMemo(() => {
    const totalMilk = LIVE_COLLECTION_ENTRIES.reduce((acc, curr) => acc + curr.qty, 0)
    const totalAmt = LIVE_COLLECTION_ENTRIES.reduce((acc, curr) => acc + curr.amount, 0)
    const avgFat = LIVE_COLLECTION_ENTRIES.reduce((acc, curr) => acc + curr.fat, 0) / LIVE_COLLECTION_ENTRIES.length
    const avgSnf = LIVE_COLLECTION_ENTRIES.reduce((acc, curr) => acc + curr.snf, 0) / LIVE_COLLECTION_ENTRIES.length
    return {
      qty: totalMilk.toLocaleString(undefined, { maximumFractionDigits: 2 }),
      amount: totalAmt.toLocaleString(undefined, { style: "currency", currency: "INR", maximumFractionDigits: 0 }),
      fat: avgFat.toFixed(2),
      snf: avgSnf.toFixed(2)
    }
  }, [])

  // Filtered Milk Collection entries
  const filteredCollections = useMemo(() => {
    return LIVE_COLLECTION_ENTRIES.filter(e => {
      if (milkFilter === "Both") return true
      return e.type === milkFilter
    })
  }, [milkFilter])

  // Dynamic Individual Milk Bill generation
  const individualBillItems = useMemo(() => {
    // Generate mock detailed slips for the selected farmer
    const rateFactor = selectedFarmer.milkType === "Cow" ? 42.0 : 68.0
    const fatBase = selectedFarmer.milkType === "Cow" ? 4.0 : 6.5
    const snfBase = selectedFarmer.milkType === "Cow" ? 8.5 : 9.0

    return Array.from({ length: 10 }).map((_, idx) => {
      const day = idx + 1
      const qty = parseFloat((8 + Math.random() * 5).toFixed(2))
      const fat = parseFloat((fatBase - 0.3 + Math.random() * 0.6).toFixed(1))
      const snf = parseFloat((snfBase - 0.2 + Math.random() * 0.4).toFixed(1))
      const rate = parseFloat((rateFactor * (fat / fatBase)).toFixed(2))
      const amount = parseFloat((qty * rate).toFixed(2))
      return {
        date: `${day.toString().padStart(2, '0')}/05/2026`,
        shift: idx % 2 === 0 ? "Morning" : "Evening",
        qty,
        fat,
        snf,
        rate,
        amount
      }
    })
  }, [selectedFarmer])

  const billTotals = useMemo(() => {
    const qty = individualBillItems.reduce((acc, curr) => acc + curr.qty, 0)
    const amount = individualBillItems.reduce((acc, curr) => acc + curr.amount, 0)
    const feedDeduction = 400.00
    const cashAdvance = 500.00
    const localTax = 30.00
    const netPayout = amount - (feedDeduction + cashAdvance + localTax)
    return {
      qty: qty.toFixed(2),
      gross: amount.toFixed(2),
      feed: feedDeduction.toFixed(2),
      advance: cashAdvance.toFixed(2),
      tax: localTax.toFixed(2),
      net: netPayout.toFixed(2)
    }
  }, [individualBillItems])

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-zinc-950 font-sans text-gray-900 dark:text-zinc-100 flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col md:flex-row relative">
        
        {/* Sidebar Nav */}
        <aside className="w-full md:w-[280px] bg-white dark:bg-zinc-900 border-r dark:border-zinc-800 p-6 flex flex-col gap-8 shrink-0">
          <div className="space-y-1">
            <Link href="/dairy-solutions" className="inline-flex items-center gap-2 text-xs font-bold text-[#1E94A4] hover:underline mb-2">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Web Details
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#1E94A4] to-[#22d3ee] flex items-center justify-center text-white font-black text-sm rotate-3 shadow-lg shadow-[#1E94A4]/20">
                WD
              </div>
              <div>
                <h3 className="font-outfit font-black tracking-tight text-base leading-none">Winsoft Demo</h3>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Dairy Admin App</p>
              </div>
            </div>
          </div>

          <nav className="flex flex-col gap-1.5">
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${activeTab === "overview" ? "bg-[#1E94A4] text-white shadow-lg shadow-[#1E94A4]/25" : "text-gray-500 hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-zinc-100"}`}
            >
              <LayoutDashboard className="w-5 h-5" />
              AI Analytics Dashboard
            </button>
            <button
              onClick={() => setActiveTab("dailySummary")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${activeTab === "dailySummary" ? "bg-[#1E94A4] text-white shadow-lg shadow-[#1E94A4]/25" : "text-gray-500 hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-zinc-100"}`}
            >
              <Milk className="w-5 h-5" />
              Daily Collection Summary
            </button>
            <button
              onClick={() => setActiveTab("billSummary")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${activeTab === "billSummary" ? "bg-[#1E94A4] text-white shadow-lg shadow-[#1E94A4]/25" : "text-gray-500 hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-zinc-100"}`}
            >
              <Receipt className="w-5 h-5" />
              Bill Payment Summary
            </button>
            <button
              onClick={() => setActiveTab("milkBill")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${activeTab === "milkBill" ? "bg-[#1E94A4] text-white shadow-lg shadow-[#1E94A4]/25" : "text-gray-500 hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-zinc-100"}`}
            >
              <FileText className="w-5 h-5" />
              Individual Milk Bill
            </button>
            <button
              onClick={() => setActiveTab("collectionReport")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${activeTab === "collectionReport" ? "bg-[#1E94A4] text-white shadow-lg shadow-[#1E94A4]/25" : "text-gray-500 hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-zinc-100"}`}
            >
              <FileSpreadsheet className="w-5 h-5" />
              Daily Collection Report
            </button>
            <button
              onClick={() => setActiveTab("ledger")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${activeTab === "ledger" ? "bg-[#1E94A4] text-white shadow-lg shadow-[#1E94A4]/25" : "text-gray-500 hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-zinc-100"}`}
            >
              <BookOpen className="w-5 h-5" />
              Individual Ledger
            </button>
          </nav>

          <div className="mt-auto border-t dark:border-zinc-800 pt-6">
            <Link href="/dairy-solutions">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all">
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </Link>
          </div>
        </aside>

        {/* Main Panel Content */}
        <main className="flex-1 p-6 md:p-10 space-y-8 overflow-y-auto max-w-7xl mx-auto w-full">
          
          {/* Header Actions */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b dark:border-zinc-800 pb-6">
            <div>
              <h1 className="text-3xl font-outfit font-black tracking-tight text-gray-900 dark:text-white capitalize">
                {activeTab === "overview" ? "AI Analytics Dashboard" : activeTab.replace(/([A-Z])/g, ' $1')}
              </h1>
              <p className="text-xs text-gray-500 dark:text-zinc-400 mt-1 uppercase font-bold tracking-widest">
                WinSoft Enterprise Cooperative Platform
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" className="text-xs border-gray-300 rounded-xl px-4 py-2 flex items-center gap-1.5 hover:bg-slate-100 dark:hover:bg-zinc-800">
                <Download className="w-4 h-4" />
                Export Reports
              </Button>
              <Button className="text-xs bg-[#1E94A4] hover:bg-[#0B7989] text-white rounded-xl px-4 py-2 flex items-center gap-1.5 shadow-lg shadow-[#1E94A4]/25">
                <PlusCircle className="w-4 h-4" />
                Add Collection
              </Button>
            </div>
          </div>

          {/* OVERVIEW / AI ANALYTICS DASHBOARD */}
          {activeTab === "overview" && (
            <div className="space-y-8 animate-in fade-in duration-200">
              
              {/* KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border dark:border-zinc-800 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#1E94A4]/5 rounded-full blur-xl"></div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Total Collection (Ltr)</span>
                    <div className="w-10 h-10 rounded-xl bg-[#1E94A4]/10 flex items-center justify-center text-[#1E94A4]"><Milk className="w-5 h-5" /></div>
                  </div>
                  <div className="text-3xl font-outfit font-black">{totalStats.qty} L</div>
                  <div className="text-xs text-green-500 font-semibold flex items-center gap-1 mt-3">
                    <TrendingUp className="w-4 h-4" /> +14.2% <span className="text-gray-400 font-normal">from yesterday</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border dark:border-zinc-800 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-xl"></div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Total Amount</span>
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600"><Coins className="w-5 h-5" /></div>
                  </div>
                  <div className="text-3xl font-outfit font-black">{totalStats.amount}</div>
                  <div className="text-xs text-green-500 font-semibold flex items-center gap-1 mt-3">
                    <TrendingUp className="w-4 h-4" /> +12.8% <span className="text-gray-400 font-normal">from yesterday</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border dark:border-zinc-800 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl"></div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Avg. FAT / SNF</span>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600"><Activity className="w-5 h-5" /></div>
                  </div>
                  <div className="text-3xl font-outfit font-black">{totalStats.fat} / {totalStats.snf}</div>
                  <div className="text-xs text-green-500 font-semibold flex items-center gap-1 mt-3">
                    <TrendingUp className="w-4 h-4" /> +0.2% <span className="text-gray-400 font-normal">in quality index</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border dark:border-zinc-800 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-xl"></div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Active Farmers</span>
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600"><Users className="w-5 h-5" /></div>
                  </div>
                  <div className="text-3xl font-outfit font-black">154</div>
                  <div className="text-xs text-gray-400 font-normal flex items-center gap-1 mt-3">
                    <ChevronRight className="w-4 h-4" /> +4 register this week
                  </div>
                </div>
              </div>

              {/* Graphs Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Collection Trend (Cow vs Buffalo) */}
                <div className="lg:col-span-2 bg-white dark:bg-zinc-900 p-6 rounded-3xl border dark:border-zinc-800 shadow-sm">
                  <h3 className="text-lg font-bold font-sans mb-6">Weekly Collection Trends (Liters)</h3>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={WEEKLY_TREND_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorCow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#1E94A4" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#1E94A4" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorBuffalo" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-zinc-800" />
                        <XAxis dataKey="day" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36}/>
                        <Area type="monotone" dataKey="Cow" name="Cow Milk" stroke="#1E94A4" fillOpacity={1} fill="url(#colorCow)" />
                        <Area type="monotone" dataKey="Buffalo" name="Buffalo Milk" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorBuffalo)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Revenue/Payout Bar Chart */}
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border dark:border-zinc-800 shadow-sm">
                  <h3 className="text-lg font-bold font-sans mb-6">Daily Revenue Outflow (INR)</h3>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={WEEKLY_TREND_DATA}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-zinc-800" />
                        <XAxis dataKey="day" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip formatter={(value: any) => `₹${value.toLocaleString()}`} />
                        <Bar dataKey="Revenue" name="Payout" fill="#22d3ee" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* AI Insights & Diagnostics */}
              <div className="bg-gradient-to-r from-zinc-900 to-slate-900 dark:from-zinc-900 dark:to-zinc-950 p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#1E94A4]/15 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="relative z-10 flex flex-col lg:flex-row gap-6 items-start justify-between">
                  <div className="space-y-4 max-w-2xl">
                    <div className="inline-flex items-center gap-2 bg-[#1E94A4]/25 text-[#22d3ee] px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border border-[#1E94A4]/25">
                      <Brain className="w-4 h-4 animate-pulse" />
                      AI Milk Assistant Insights
                    </div>
                    <h3 className="text-2xl font-sans font-bold leading-tight">Cooperative Quality & Yield Diagnostics</h3>
                    <ul className="space-y-3 font-serif text-sm text-slate-300">
                      <li className="flex items-start gap-2.5">
                        <ArrowUpRight className="w-5 h-5 text-green-400 shrink-0" />
                        <span><strong>FAT Spike in Goundwad:</strong> Goundwad center reported a 0.3% increase in average Cow Milk FAT index. Suggests animal feed quality from Kapas-Pend batch #102 is highly effective.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <ArrowUpRight className="w-5 h-5 text-amber-400 shrink-0" />
                        <span><strong>Temperature & SNF alert:</strong> Forecast indicates high humidity tomorrow. Ensure immediate transport of evening collection to the chilling unit within 45 minutes to prevent SNF degradation.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <ArrowUpRight className="w-5 h-5 text-indigo-400 shrink-0" />
                        <span><strong>Payout Optimization:</strong> Based on current volume trends, implementing 10-day auto bank transfers via BDCC bank will save approximately ₹12,500 in transactional fees this billing cycle.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-4 w-full lg:w-fit shrink-0">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-200">Quality Check Status</h4>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-slate-400">Total Dairy Yield</span>
                        <div className="text-xl font-bold">9,836.52 L</div>
                      </div>
                      <div>
                        <span className="text-slate-400">Avg. Purity Ratio</span>
                        <div className="text-xl font-bold text-green-400">99.8%</div>
                      </div>
                    </div>
                    <Button variant="secondary" className="w-full text-xs font-bold py-2 bg-[#1E94A4] hover:bg-[#0B7989] text-white rounded-xl border-none">
                      Generate Full Quality Report
                    </Button>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* DAILY COLLECTION SUMMARY */}
          {activeTab === "dailySummary" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border dark:border-zinc-800 shadow-sm space-y-6">
                <h3 className="text-lg font-bold font-sans">Shift-Wise & Milk Type Distribution</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  
                  {/* Table summary of collection */}
                  <div className="space-y-4">
                    <div className="border dark:border-zinc-800 rounded-2xl overflow-hidden">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-slate-50 dark:bg-zinc-950 border-b dark:border-zinc-800 font-bold text-gray-500">
                          <tr>
                            <th className="p-3">Shift Type</th>
                            <th className="p-3 text-right">Liters</th>
                            <th className="p-3 text-right">Deductions</th>
                            <th className="p-3 text-right">Net Value</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y dark:divide-zinc-800 font-medium">
                          <tr>
                            <td className="p-3 font-bold text-[#1E94A4]">Morning Cow</td>
                            <td className="p-3 text-right">491.85 L</td>
                            <td className="p-3 text-right">₹ 240.00</td>
                            <td className="p-3 text-right text-green-600">₹ 16,359.52</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-[#1E94A4]">Morning Buffalo</td>
                            <td className="p-3 text-right">4,697.65 L</td>
                            <td className="p-3 text-right">₹ 1,500.00</td>
                            <td className="p-3 text-right text-green-600">₹ 235,436.74</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-purple-600">Evening Cow</td>
                            <td className="p-3 text-right">2,713.74 L</td>
                            <td className="p-3 text-right">₹ 800.00</td>
                            <td className="p-3 text-right text-green-600">₹ 93,220.19</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-purple-600">Evening Buffalo</td>
                            <td className="p-3 text-right">683.28 L</td>
                            <td className="p-3 text-right">₹ 200.00</td>
                            <td className="p-3 text-right text-green-600">₹ 35,966.20</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Graphical distribution of Cow vs Buffalo */}
                  <div className="h-[240px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={[
                        { name: "Cow Milk", Liters: 3205.59 },
                        { name: "Buffalo Milk", Liters: 5380.93 }
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-zinc-800" />
                        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip formatter={(value) => `${value} Liters`} />
                        <Bar dataKey="Liters" fill="#1E94A4" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* BILL PAYMENT SUMMARY */}
          {activeTab === "billSummary" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border dark:border-zinc-800 shadow-sm space-y-6">
                <h3 className="text-lg font-bold font-sans">Historical Billing Cycles</h3>
                <div className="border dark:border-zinc-800 rounded-2xl overflow-hidden">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-50 dark:bg-zinc-950 border-b dark:border-zinc-800 font-bold text-gray-500">
                      <tr>
                        <th className="p-4">Billing Period</th>
                        <th className="p-4 text-right">Cow Milk Ltr</th>
                        <th className="p-4 text-right">Buffalo Milk Ltr</th>
                        <th className="p-4 text-right">Total Net Payout</th>
                        <th className="p-4 text-right">Total Deductions</th>
                        <th className="p-4 text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y dark:divide-zinc-800 font-medium">
                      {BILL_PAYMENT_CYCLES.map((cycle, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-zinc-800/50">
                          <td className="p-4 font-bold text-[#1E94A4]">{cycle.period}</td>
                          <td className="p-4 text-right">{cycle.cowQty.toLocaleString()} L</td>
                          <td className="p-4 text-right">{cycle.buffaloQty.toLocaleString()} L</td>
                          <td className="p-4 text-right font-bold text-green-600">₹ {(cycle.cowAmt + cycle.buffaloAmt - cycle.deductions).toLocaleString()}</td>
                          <td className="p-4 text-right text-rose-500">₹ {cycle.deductions.toLocaleString()}</td>
                          <td className="p-4 text-center">
                            <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full text-[10px] font-bold border border-emerald-500/20">
                              {cycle.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* INDIVIDUAL MILK BILL */}
          {activeTab === "milkBill" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-200">
              
              {/* Selector side */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border dark:border-zinc-800 shadow-sm space-y-4 h-fit">
                <h3 className="text-base font-bold font-sans">Select Farmer for Bill Copy</h3>
                
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search member by name..."
                    className="w-full pl-9 pr-4 py-2 border dark:border-zinc-800 rounded-xl text-xs bg-slate-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-[#1E94A4]/50"
                  />
                </div>

                <div className="max-h-[300px] overflow-y-auto space-y-1 pr-1">
                  {filteredFarmers.map((f) => (
                    <button
                      key={f.code}
                      onClick={() => setSelectedFarmer(f)}
                      className={`w-full text-left p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-800 border transition-all text-xs flex justify-between items-center ${selectedFarmer.code === f.code ? "border-[#1E94A4] bg-[#1E94A4]/5" : "border-transparent"}`}
                    >
                      <div>
                        <div className="font-bold">{f.name}</div>
                        <div className="text-[10px] text-gray-500">Code: {f.code} | {f.village}</div>
                      </div>
                      <span className="text-[10px] font-bold text-[#1E94A4]">{f.milkType}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bill Details side */}
              <div className="lg:col-span-2 bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border dark:border-zinc-800 shadow-sm space-y-6">
                
                <div className="flex justify-between items-start border-b dark:border-zinc-800 pb-5">
                  <div>
                    <h3 className="text-xl font-bold font-sans text-gray-900 dark:text-white uppercase">INDIVIDUAL MILK BILL</h3>
                    <p className="text-[10px] text-gray-500 font-serif mt-1">Billing Period: 01/05/2026 - 10/05/2026</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-[10px] font-bold border border-green-500/20">
                      PAID
                    </span>
                  </div>
                </div>

                {/* Farmer Info */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs font-serif border-b dark:border-zinc-800 pb-5">
                  <div>
                    <span className="text-gray-400 font-sans block">Farmer Code / Name:</span>
                    <strong>{selectedFarmer.code} - {selectedFarmer.name}</strong>
                  </div>
                  <div>
                    <span className="text-gray-400 font-sans block">Village / Contact:</span>
                    <strong>{selectedFarmer.village} / {selectedFarmer.phone}</strong>
                  </div>
                  <div>
                    <span className="text-gray-400 font-sans block">Milk Animal Type:</span>
                    <strong className="text-[#1E94A4]">{selectedFarmer.milkType === "Cow" ? "Cow Milk" : "Buffalo Milk"}</strong>
                  </div>
                </div>

                {/* Slips table */}
                <div className="border dark:border-zinc-800 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 dark:bg-zinc-950 border-b dark:border-zinc-800 font-bold text-gray-500">
                      <tr>
                        <th className="p-3">Date</th>
                        <th className="p-3">Shift</th>
                        <th className="p-3 text-right">Liters</th>
                        <th className="p-3 text-center">FAT/SNF</th>
                        <th className="p-3 text-right">Rate</th>
                        <th className="p-3 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y dark:divide-zinc-800 font-medium text-gray-700 dark:text-zinc-300">
                      {individualBillItems.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-zinc-800/30">
                          <td className="p-3 text-gray-600">{item.date}</td>
                          <td className="p-3">{item.shift}</td>
                          <td className="p-3 text-right font-bold text-gray-900 dark:text-zinc-100">{item.qty} L</td>
                          <td className="p-3 text-center text-gray-500">{item.fat.toFixed(1)} / {item.snf.toFixed(1)}</td>
                          <td className="p-3 text-right">₹ {item.rate.toFixed(2)}</td>
                          <td className="p-3 text-right font-bold text-green-600">₹ {item.amount.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Bill Summary totals */}
                <div className="bg-slate-50 dark:bg-zinc-950 p-6 rounded-2xl border dark:border-zinc-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-serif">
                  <div>
                    <span className="text-gray-400 font-sans block">Total Quantity:</span>
                    <strong className="text-sm font-sans">{billTotals.qty} Ltrs</strong>
                  </div>
                  <div>
                    <span className="text-gray-400 font-sans block">Gross Earnings:</span>
                    <strong className="text-sm font-sans text-[#1E94A4]">₹ {billTotals.gross}</strong>
                  </div>
                  <div>
                    <span className="text-gray-400 font-sans block">Total Deductions:</span>
                    <strong className="text-sm font-sans text-rose-500">- ₹ {(parseFloat(billTotals.feed) + parseFloat(billTotals.advance) + parseFloat(billTotals.tax)).toFixed(2)}</strong>
                  </div>
                  <div>
                    <span className="text-gray-400 font-sans block">Net Payout Transferred:</span>
                    <strong className="text-base font-sans text-green-600">₹ {billTotals.net}</strong>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline" className="text-xs border-gray-300 rounded-xl px-4 py-2 hover:bg-slate-100 dark:hover:bg-zinc-800">
                    <Printer className="w-4 h-4 mr-1.5" /> Print Bill Copy
                  </Button>
                  <Button className="text-xs bg-green-600 hover:bg-green-700 text-white rounded-xl px-4 py-2 shadow-md">
                    Send PDF to WhatsApp
                  </Button>
                </div>

              </div>
            </div>
          )}

          {/* DAILY MILK COLLECTION REPORT */}
          {activeTab === "collectionReport" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border dark:border-zinc-800 shadow-sm space-y-6">
                
                {/* Search / filter top bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <h3 className="text-lg font-bold font-sans">Live Milk Collection logs</h3>
                  
                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="bg-slate-100 dark:bg-zinc-950 p-1.5 rounded-xl border dark:border-zinc-800 flex gap-1 text-xs">
                      <button onClick={() => setMilkFilter("Both")} className={`px-3 py-1 font-bold rounded-lg ${milkFilter === "Both" ? "bg-white dark:bg-zinc-900 text-[#1E94A4] shadow-sm" : "text-gray-500"}`}>All</button>
                      <button onClick={() => setMilkFilter("Cow")} className={`px-3 py-1 font-bold rounded-lg ${milkFilter === "Cow" ? "bg-white dark:bg-zinc-900 text-[#1E94A4] shadow-sm" : "text-gray-500"}`}>Cow</button>
                      <button onClick={() => setMilkFilter("Buffalo")} className={`px-3 py-1 font-bold rounded-lg ${milkFilter === "Buffalo" ? "bg-white dark:bg-zinc-900 text-[#1E94A4] shadow-sm" : "text-gray-500"}`}>Buffalo</button>
                    </div>
                  </div>
                </div>

                <div className="border dark:border-zinc-800 rounded-2xl overflow-hidden">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-50 dark:bg-zinc-950 border-b dark:border-zinc-800 font-bold text-gray-500">
                      <tr>
                        <th className="p-3">Farmer Code</th>
                        <th className="p-3">Farmer Name</th>
                        <th className="p-3">Shift</th>
                        <th className="p-3">Milk Type</th>
                        <th className="p-3 text-right">Liters</th>
                        <th className="p-3 text-center">FAT / SNF</th>
                        <th className="p-3 text-right">Rate</th>
                        <th className="p-3 text-right">Total Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y dark:divide-zinc-800 font-medium">
                      {filteredCollections.map((entry, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-zinc-800/50">
                          <td className="p-3 font-bold text-gray-700 dark:text-zinc-300">{entry.code}</td>
                          <td className="p-3">{entry.name}</td>
                          <td className="p-3">{entry.shift}</td>
                          <td className="p-3">
                            <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${entry.type === "Cow" ? "bg-blue-500/10 text-blue-600" : "bg-purple-500/10 text-purple-600"}`}>
                              {entry.type}
                            </span>
                          </td>
                          <td className="p-3 text-right font-black text-gray-800 dark:text-zinc-200">{entry.qty.toLocaleString()} L</td>
                          <td className="p-3 text-center text-gray-500">{entry.fat.toFixed(1)} / {entry.snf.toFixed(1)}</td>
                          <td className="p-3 text-right">₹ {entry.rate.toFixed(2)}</td>
                          <td className="p-3 text-right font-bold text-green-600">₹ {entry.amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          )}

          {/* INDIVIDUAL LEDGER */}
          {activeTab === "ledger" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-200">
              
              {/* Selection side */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border dark:border-zinc-800 shadow-sm space-y-4 h-fit">
                <h3 className="text-base font-bold font-sans">Select Farmer for Ledger</h3>
                
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search member by name..."
                    className="w-full pl-9 pr-4 py-2 border dark:border-zinc-800 rounded-xl text-xs bg-slate-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-[#1E94A4]/50"
                  />
                </div>

                <div className="max-h-[300px] overflow-y-auto space-y-1 pr-1">
                  {filteredFarmers.map((f) => (
                    <button
                      key={f.code}
                      onClick={() => setSelectedFarmer(f)}
                      className={`w-full text-left p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-800 border transition-all text-xs flex justify-between items-center ${selectedFarmer.code === f.code ? "border-[#1E94A4] bg-[#1E94A4]/5" : "border-transparent"}`}
                    >
                      <div>
                        <div className="font-bold">{f.name}</div>
                        <div className="text-[10px] text-gray-500">Code: {f.code} | {f.village}</div>
                      </div>
                      <span className="text-[10px] font-bold text-[#1E94A4]">{f.milkType}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Ledger Statement side */}
              <div className="lg:col-span-2 bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border dark:border-zinc-800 shadow-sm space-y-6">
                
                <div className="flex justify-between items-start border-b dark:border-zinc-800 pb-5">
                  <div>
                    <h3 className="text-xl font-bold font-sans text-gray-900 dark:text-white uppercase">INDIVIDUAL ACCOUNT LEDGER</h3>
                    <p className="text-[10px] text-gray-500 font-serif mt-1">Cooperative Society Statement</p>
                  </div>
                  <div className="text-right text-xs">
                    <span className="text-gray-400 block">Total Balance Due</span>
                    <strong className="text-lg font-bold text-green-600">₹ 0.00</strong>
                  </div>
                </div>

                {/* Details list */}
                <div className="border dark:border-zinc-800 rounded-xl overflow-hidden text-xs">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-zinc-950 border-b dark:border-zinc-800 font-bold text-gray-500">
                      <tr>
                        <th className="p-3">Date</th>
                        <th className="p-3">Transaction Description</th>
                        <th className="p-3 text-right">Debit (Withdrawal)</th>
                        <th className="p-3 text-right">Credit (Deposit)</th>
                        <th className="p-3 text-right">Cumulative Balance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y dark:divide-zinc-800 font-medium">
                      <tr className="hover:bg-slate-50 dark:hover:bg-zinc-800/30">
                        <td className="p-3 text-gray-500">01/05/2026</td>
                        <td>Opening Balance</td>
                        <td className="p-3 text-right">-</td>
                        <td className="p-3 text-right">-</td>
                        <td className="p-3 text-right">₹ 0.00</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-zinc-800/30">
                        <td className="p-3 text-gray-500">03/05/2026</td>
                        <td>Cattle Feed Purchase (De-oiled Rice Bran)</td>
                        <td className="p-3 text-right text-rose-500">₹ 400.00</td>
                        <td className="p-3 text-right">-</td>
                        <td className="p-3 text-right text-rose-500">₹ 400.00 Dr</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-zinc-800/30">
                        <td className="p-3 text-gray-500">05/05/2026</td>
                        <td>Cash Advance taken for Cattle Medical Care</td>
                        <td className="p-3 text-right text-rose-500">₹ 500.00</td>
                        <td className="p-3 text-right">-</td>
                        <td className="p-3 text-right text-rose-500">₹ 900.00 Dr</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-zinc-800/30">
                        <td className="p-3 text-gray-500">10/05/2026</td>
                        <td>Milk Procurement Earnings (Period: 01/05-10/05)</td>
                        <td className="p-3 text-right">-</td>
                        <td className="p-3 text-right text-green-600">₹ {billTotals.gross}</td>
                        <td className="p-3 text-right text-green-600">₹ {(parseFloat(billTotals.gross) - 900).toFixed(2)} Cr</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-zinc-800/30">
                        <td className="p-3 text-gray-500">12/05/2026</td>
                        <td>Bank Transfer Payout (Auto-settlement)</td>
                        <td className="p-3 text-right text-rose-500">₹ {billTotals.net}</td>
                        <td className="p-3 text-right">-</td>
                        <td className="p-3 text-right">₹ 0.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          )}

        </main>

      </div>

      <Footer />
    </div>
  )
}
