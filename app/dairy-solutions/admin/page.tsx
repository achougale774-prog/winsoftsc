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
  Printer,
  Smartphone,
  Wifi,
  Battery,
  Menu,
  X
} from "lucide-react"

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      qty: totalMilk.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      amount: totalAmt.toLocaleString(undefined, { style: "currency", currency: "INR", maximumFractionDigits: 0 }),
      fat: avgFat.toFixed(1),
      snf: avgSnf.toFixed(1)
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
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 font-sans text-gray-900 dark:text-zinc-100 flex flex-col">
      <Header />

      {/* Intro section */}
      <section className="py-12 px-4 text-center max-w-4xl mx-auto">
        <Link href="/dairy-solutions" className="inline-flex items-center gap-2 text-[#1E94A4] hover:underline font-bold mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Dairy Solutions
        </Link>
        <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4">
          Dairy Admin Dashboard App
        </h1>
        <p className="text-gray-600 dark:text-zinc-400 font-serif leading-relaxed text-lg">
          Try the interactive mobile admin dashboard demo below. Dairy administrators and cooperative managers can view real-time metrics, collection logs, billing payments, and individual statements on the go.
        </p>
      </section>

      {/* Mockup Area */}
      <section className="flex-1 flex justify-center items-center pb-24 px-4">
        <div className="relative flex flex-col items-center">
          
          {/* Smartphone Frame Mockup */}
          <div className="w-[360px] h-[720px] rounded-[3rem] border-[12px] border-zinc-900 bg-white dark:bg-zinc-900 shadow-2xl relative flex flex-col overflow-hidden">
            
            {/* Speaker & Sensor Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-32 bg-zinc-900 rounded-b-2xl z-40 flex items-center justify-center">
              <div className="w-12 h-1 bg-zinc-800 rounded-full"></div>
            </div>

            {/* Simulated Phone Status Bar */}
            <div className="h-8 bg-zinc-50 dark:bg-zinc-950 px-6 pt-1 flex justify-between items-center text-[10px] font-sans font-semibold text-gray-600 dark:text-zinc-400 select-none border-b dark:border-zinc-800">
              <span>9:41 AM</span>
              <div className="flex items-center gap-1.5">
                <Wifi className="w-3.5 h-3.5" />
                <span className="text-[9px]">5G</span>
                <Battery className="w-4 h-4 rotate-90" />
              </div>
            </div>

            {/* App Header with Hamburger */}
            <div className="bg-[#1E94A4] p-4 text-white flex justify-between items-center shadow-md relative z-20 shrink-0">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:opacity-85 transition-opacity"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <div className="text-center">
                <h2 className="font-sans font-bold text-sm leading-tight tracking-wide">Winsoft Admin App</h2>
                <p className="text-[7px] tracking-[0.2em] font-black opacity-80 mt-0.5">COOPERATIVE PLATFORM</p>
              </div>
              <div className="w-5 h-5"></div> {/* Placeholder to keep title centered */}
            </div>

            {/* Sliding Drawer Navigation inside the Phone */}
            {isMenuOpen && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-xs z-30 transition-all duration-300">
                <div className="w-[260px] h-full bg-white dark:bg-zinc-900 p-6 flex flex-col gap-6 shadow-2xl relative z-40 animate-in slide-in-from-left duration-200">
                  <div className="flex items-center gap-3 pb-4 border-b dark:border-zinc-800">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#1E94A4] to-[#22d3ee] flex items-center justify-center text-white font-black text-xs rotate-3 shadow-md shadow-[#1E94A4]/25">
                      WD
                    </div>
                    <div>
                      <h3 className="font-outfit font-black tracking-tight text-xs leading-none">Winsoft Demo</h3>
                      <p className="text-[8px] text-gray-500 font-bold uppercase tracking-widest mt-1">Admin Menu</p>
                    </div>
                  </div>

                  <nav className="flex flex-col gap-1">
                    {[
                      { tab: "overview", label: "AI Analytics Dashboard", icon: LayoutDashboard },
                      { tab: "dailySummary", label: "Daily Collection Summary", icon: Milk },
                      { tab: "billSummary", label: "Bill Payment Summary", icon: Receipt },
                      { tab: "milkBill", label: "Individual Milk Bill", icon: FileText },
                      { tab: "collectionReport", label: "Daily Collection Report", icon: FileSpreadsheet },
                      { tab: "ledger", label: "Individual Ledger", icon: BookOpen },
                    ].map((item) => {
                      const Icon = item.icon
                      return (
                        <button
                          key={item.tab}
                          onClick={() => {
                            setActiveTab(item.tab as any)
                            setIsMenuOpen(false)
                          }}
                          className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-left transition-all ${activeTab === item.tab ? "bg-[#1E94A4] text-white shadow-sm" : "text-gray-500 hover:bg-slate-50 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-zinc-100"}`}
                        >
                          <Icon className="w-4 h-4" />
                          {item.label}
                        </button>
                      )
                    })}
                  </nav>

                  <div className="mt-auto border-t dark:border-zinc-800 pt-4">
                    <Link href="/dairy-solutions">
                      <button className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all text-left">
                        <LogOut className="w-4 h-4" />
                        Exit Demo
                      </button>
                    </Link>
                  </div>
                </div>
                {/* Click outside to close drawer */}
                <div className="absolute inset-0 bg-transparent" onClick={() => setIsMenuOpen(false)}></div>
              </div>
            )}

            {/* App Scrollable Content Area inside simulated Phone */}
            <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-zinc-950 p-3.5 space-y-4">
              
              {/* Header Actions */}
              <div className="flex flex-col gap-2.5 border-b dark:border-zinc-800 pb-3">
                <div>
                  <h1 className="text-lg font-outfit font-black tracking-tight text-gray-900 dark:text-white capitalize leading-tight">
                    {activeTab === "overview" ? "AI Analytics Dashboard" : activeTab.replace(/([A-Z])/g, ' $1')}
                  </h1>
                  <p className="text-[9px] text-gray-400 mt-0.5 uppercase font-bold tracking-wider">
                    WinSoft Cooperative Platform
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" className="text-[10px] border-gray-300 rounded-lg px-2.5 py-1.5 h-auto flex-1 flex items-center justify-center gap-1 hover:bg-slate-100 dark:hover:bg-zinc-800">
                    <Download className="w-3.5 h-3.5" />
                    Export
                  </Button>
                  <Button className="text-[10px] bg-[#1E94A4] hover:bg-[#0B7989] text-white rounded-lg px-2.5 py-1.5 h-auto flex-1 flex items-center justify-center gap-1 shadow-md shadow-[#1E94A4]/25">
                    <PlusCircle className="w-3.5 h-3.5" />
                    Add
                  </Button>
                </div>
              </div>

              {/* OVERVIEW / AI ANALYTICS DASHBOARD */}
              {activeTab === "overview" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  
                  {/* KPI Cards */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border dark:border-zinc-800 shadow-xs relative overflow-hidden">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">Total Ltr</span>
                        <div className="w-6 h-6 rounded-lg bg-[#1E94A4]/10 flex items-center justify-center text-[#1E94A4]"><Milk className="w-3 h-3" /></div>
                      </div>
                      <div className="text-sm font-outfit font-black">{totalStats.qty} L</div>
                      <div className="text-[8px] text-green-500 font-semibold flex items-center gap-0.5 mt-1">
                        <TrendingUp className="w-2.5 h-2.5" /> +14.2%
                      </div>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border dark:border-zinc-800 shadow-xs relative overflow-hidden">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">Amount</span>
                        <div className="w-6 h-6 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600"><Coins className="w-3 h-3" /></div>
                      </div>
                      <div className="text-sm font-outfit font-black">{totalStats.amount}</div>
                      <div className="text-[8px] text-green-500 font-semibold flex items-center gap-0.5 mt-1">
                        <TrendingUp className="w-2.5 h-2.5" /> +12.8%
                      </div>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border dark:border-zinc-800 shadow-xs relative overflow-hidden">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">Avg FAT/SNF</span>
                        <div className="w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600"><Activity className="w-3 h-3" /></div>
                      </div>
                      <div className="text-sm font-outfit font-black">{totalStats.fat}/{totalStats.snf}</div>
                      <div className="text-[8px] text-green-500 font-semibold flex items-center gap-0.5 mt-1">
                        <TrendingUp className="w-2.5 h-2.5" /> +0.2%
                      </div>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border dark:border-zinc-800 shadow-xs relative overflow-hidden">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">Farmers</span>
                        <div className="w-6 h-6 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600"><Users className="w-3 h-3" /></div>
                      </div>
                      <div className="text-sm font-outfit font-black">154</div>
                      <div className="text-[8px] text-gray-400 font-normal flex items-center gap-0.5 mt-1">
                        <ChevronRight className="w-2.5 h-2.5" /> +4 this wk
                      </div>
                    </div>
                  </div>

                  {/* Graphs Section */}
                  <div className="space-y-4">
                    
                    {/* Collection Trend */}
                    <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border dark:border-zinc-800 shadow-xs">
                      <h3 className="text-[10px] font-bold font-sans mb-2 text-gray-800 dark:text-zinc-200">Weekly Collection Trends (Liters)</h3>
                      <div className="h-[180px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={WEEKLY_TREND_DATA} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
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
                            <CartesianGrid strokeDasharray="3 3" className="stroke-slate-100 dark:stroke-zinc-800" />
                            <XAxis dataKey="day" stroke="#888888" fontSize={8} tickLine={false} axisLine={false} />
                            <YAxis stroke="#888888" fontSize={8} tickLine={false} axisLine={false} />
                            <Tooltip contentStyle={{ fontSize: '9px', padding: '4px 6px' }} />
                            <Legend verticalAlign="top" height={20} iconSize={6} wrapperStyle={{ fontSize: '8px' }} />
                            <Area type="monotone" dataKey="Cow" name="Cow" stroke="#1E94A4" fillOpacity={1} fill="url(#colorCow)" />
                            <Area type="monotone" dataKey="Buffalo" name="Buff" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorBuffalo)" />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Revenue/Payout Bar Chart */}
                    <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border dark:border-zinc-800 shadow-xs">
                      <h3 className="text-[10px] font-bold font-sans mb-2 text-gray-800 dark:text-zinc-200">Daily Revenue Outflow (INR)</h3>
                      <div className="h-[180px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={WEEKLY_TREND_DATA} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" className="stroke-slate-100 dark:stroke-zinc-800" />
                            <XAxis dataKey="day" stroke="#888888" fontSize={8} tickLine={false} axisLine={false} />
                            <YAxis stroke="#888888" fontSize={8} tickLine={false} axisLine={false} />
                            <Tooltip contentStyle={{ fontSize: '9px', padding: '4px 6px' }} formatter={(value: any) => `₹${value.toLocaleString()}`} />
                            <Legend verticalAlign="top" height={20} iconSize={6} wrapperStyle={{ fontSize: '8px' }} />
                            <Bar dataKey="Revenue" name="Payout" fill="#22d3ee" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>

                  {/* AI Insights & Diagnostics */}
                  <div className="bg-gradient-to-r from-zinc-900 to-slate-900 dark:from-zinc-900 dark:to-zinc-950 p-4 rounded-xl text-white shadow-md relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 w-32 h-32 bg-[#1E94A4]/15 rounded-full blur-[30px] pointer-events-none"></div>
                    <div className="relative z-10 space-y-2.5">
                      <div className="inline-flex items-center gap-1 bg-[#1E94A4]/25 text-[#22d3ee] px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-wider border border-[#1E94A4]/25">
                        <Brain className="w-2.5 h-2.5 animate-pulse" />
                        AI Insights
                      </div>
                      <h3 className="text-xs font-sans font-bold leading-tight">Quality & Yield Diagnostics</h3>
                      <ul className="space-y-2 font-serif text-[9px] text-slate-300">
                        <li className="flex items-start gap-1">
                          <ArrowUpRight className="w-3 h-3 text-green-400 shrink-0 mt-0.5" />
                          <span><strong>FAT Spike:</strong> Goundwad center reported 0.3% Cow FAT increase. Feed batch #102 is highly effective.</span>
                        </li>
                        <li className="flex items-start gap-1">
                          <ArrowUpRight className="w-3 h-3 text-amber-400 shrink-0 mt-0.5" />
                          <span><strong>Quality Alert:</strong> High humidity tomorrow. Transport evening collection in 45 min to prevent degradation.</span>
                        </li>
                      </ul>

                      <div className="bg-white/5 backdrop-blur-sm p-2.5 rounded-lg border border-white/10 space-y-1.5 mt-2">
                        <h4 className="font-bold text-[8px] uppercase tracking-wider text-slate-200">Quality Check Status</h4>
                        <div className="grid grid-cols-2 gap-2 text-[9px]">
                          <div>
                            <span className="text-slate-400 block">Total Yield</span>
                            <span className="font-bold text-[10px]">9,836.5 L</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block">Purity Ratio</span>
                            <span className="font-bold text-[10px] text-green-400">99.8%</span>
                          </div>
                        </div>
                        <Button variant="secondary" className="w-full text-[8px] font-bold py-1 h-auto bg-[#1E94A4] hover:bg-[#0B7989] text-white rounded-lg border-none mt-1">
                          Generate Quality Report
                        </Button>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* DAILY COLLECTION SUMMARY */}
              {activeTab === "dailySummary" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border dark:border-zinc-800 shadow-xs space-y-3">
                    <h3 className="text-[10px] font-bold font-sans text-gray-800 dark:text-zinc-200">Shift & Milk Type Distribution</h3>
                    
                    {/* Table summary of collection */}
                    <div className="overflow-x-auto border dark:border-zinc-800 rounded-xl">
                      <table className="w-full text-[9px] text-left min-w-[280px]">
                        <thead className="bg-slate-50 dark:bg-zinc-950 border-b dark:border-zinc-800 font-bold text-gray-500">
                          <tr>
                            <th className="p-2">Shift Type</th>
                            <th className="p-2 text-right">Liters</th>
                            <th className="p-2 text-right">Net Value</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y dark:divide-zinc-800 font-medium text-gray-700 dark:text-zinc-300">
                          <tr>
                            <td className="p-2 font-bold text-[#1E94A4]">Morning Cow</td>
                            <td className="p-2 text-right">491.8 L</td>
                            <td className="p-2 text-right text-green-600">₹16,359</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-bold text-[#1E94A4]">Morning Buff</td>
                            <td className="p-2 text-right">4,697.6 L</td>
                            <td className="p-2 text-right text-green-600">₹235,436</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-bold text-purple-600">Evening Cow</td>
                            <td className="p-2 text-right">2,713.7 L</td>
                            <td className="p-2 text-right text-green-600">₹93,220</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-bold text-purple-600">Evening Buff</td>
                            <td className="p-2 text-right">683.2 L</td>
                            <td className="p-2 text-right text-green-600">₹35,966</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Graphical distribution of Cow vs Buffalo */}
                    <div className="h-[180px] w-full mt-2">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={[
                          { name: "Cow Milk", Liters: 3205.59 },
                          { name: "Buffalo Milk", Liters: 5380.93 }
                        ]} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" className="stroke-slate-100 dark:stroke-zinc-800" />
                          <XAxis dataKey="name" stroke="#888888" fontSize={8} tickLine={false} axisLine={false} />
                          <YAxis stroke="#888888" fontSize={8} tickLine={false} axisLine={false} />
                          <Tooltip contentStyle={{ fontSize: '9px' }} formatter={(value) => `${value} Liters`} />
                          <Bar dataKey="Liters" fill="#1E94A4" radius={[6, 6, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                  </div>
                </div>
              )}

              {/* BILL PAYMENT SUMMARY */}
              {activeTab === "billSummary" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border dark:border-zinc-800 shadow-xs space-y-3">
                    <h3 className="text-[10px] font-bold font-sans text-gray-800 dark:text-zinc-200">Historical Billing Cycles</h3>
                    
                    <div className="overflow-x-auto border dark:border-zinc-800 rounded-xl">
                      <table className="w-full text-[9px] text-left min-w-[420px]">
                        <thead className="bg-slate-50 dark:bg-zinc-950 border-b dark:border-zinc-800 font-bold text-gray-500">
                          <tr>
                            <th className="p-2">Billing Period</th>
                            <th className="p-2 text-right">Cow Ltr</th>
                            <th className="p-2 text-right">Buff Ltr</th>
                            <th className="p-2 text-right">Net Payout</th>
                            <th className="p-2 text-center">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y dark:divide-zinc-800 font-medium text-gray-700 dark:text-zinc-300">
                          {BILL_PAYMENT_CYCLES.map((cycle, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-zinc-800/50">
                              <td className="p-2 font-bold text-[#1E94A4]">{cycle.period}</td>
                              <td className="p-2 text-right">{cycle.cowQty.toLocaleString()} L</td>
                              <td className="p-2 text-right">{cycle.buffaloQty.toLocaleString()} L</td>
                              <td className="p-2 text-right font-bold text-green-600">₹{(cycle.cowAmt + cycle.buffaloAmt - cycle.deductions).toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                              <td className="p-2 text-center">
                                <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded-full text-[8px] font-bold border border-emerald-500/20">
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
                <div className="space-y-4 animate-in fade-in duration-200">
                  
                  {/* Selector box */}
                  <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border dark:border-zinc-800 shadow-xs space-y-2.5">
                    <h3 className="text-[10px] font-bold font-sans text-gray-800 dark:text-zinc-200">Select Farmer</h3>
                    
                    <div className="relative">
                      <Search className="absolute left-2 top-2 w-3 h-3 text-gray-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by code or name..."
                        className="w-full pl-6 pr-2 py-1 h-7 border dark:border-zinc-800 rounded-lg text-[9px] bg-slate-50 dark:bg-zinc-950 focus:outline-none focus:ring-1 focus:ring-[#1E94A4]"
                      />
                    </div>

                    <div className="max-h-[110px] overflow-y-auto space-y-1 pr-1 border dark:border-zinc-800 rounded-lg p-1 bg-slate-50 dark:bg-zinc-950">
                      {filteredFarmers.map((f) => (
                        <button
                          key={f.code}
                          onClick={() => setSelectedFarmer(f)}
                          className={`w-full text-left p-1.5 rounded-md hover:bg-white dark:hover:bg-zinc-900 border transition-all text-[9px] flex justify-between items-center ${selectedFarmer.code === f.code ? "border-[#1E94A4] bg-white dark:bg-zinc-900 shadow-xs" : "border-transparent"}`}
                        >
                          <div className="truncate pr-2">
                            <span className="font-bold">{f.code}</span> - <span className="font-medium text-gray-600 dark:text-zinc-400">{f.name}</span>
                          </div>
                          <span className="text-[7px] bg-[#1E94A4]/10 text-[#1E94A4] px-1.5 py-0.5 rounded-md font-bold shrink-0">{f.milkType}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Bill Details */}
                  <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border dark:border-zinc-800 shadow-xs space-y-3 text-left">
                    
                    <div className="flex justify-between items-start border-b dark:border-zinc-800 pb-2">
                      <div>
                        <h3 className="text-[10px] font-bold font-sans text-gray-900 dark:text-white uppercase tracking-wider">INDIVIDUAL MILK BILL</h3>
                        <p className="text-[8px] text-gray-400 font-serif mt-0.5">01/05/2026 - 10/05/2026</p>
                      </div>
                      <span className="bg-green-500/10 text-green-600 dark:text-green-400 px-1.5 py-0.5 rounded-full text-[8px] font-bold border border-green-500/20">
                        PAID
                      </span>
                    </div>

                    {/* Farmer Info */}
                    <div className="space-y-1 text-[8px] font-serif border-b dark:border-zinc-800 pb-2 text-gray-600 dark:text-zinc-400">
                      <div><span className="font-sans text-gray-400">Farmer:</span> <strong className="text-gray-900 dark:text-zinc-100">{selectedFarmer.code} - {selectedFarmer.name}</strong></div>
                      <div><span className="font-sans text-gray-400">Contact:</span> <strong className="text-gray-900 dark:text-zinc-100">{selectedFarmer.phone} ({selectedFarmer.village})</strong></div>
                      <div><span className="font-sans text-gray-400">Type:</span> <strong className="text-[#1E94A4]">{selectedFarmer.milkType === "Cow" ? "Cow Milk" : "Buffalo Milk"}</strong></div>
                    </div>

                    {/* Slips table */}
                    <div className="overflow-x-auto border dark:border-zinc-800 rounded-xl">
                      <table className="w-full text-left text-[8px] min-w-[300px]">
                        <thead className="bg-slate-50 dark:bg-zinc-950 border-b dark:border-zinc-800 font-bold text-gray-500">
                          <tr>
                            <th className="p-1.5">Date/Shift</th>
                            <th className="p-1.5 text-right">Ltr</th>
                            <th className="p-1.5 text-center">F/S</th>
                            <th className="p-1.5 text-right">Amt</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y dark:divide-zinc-800 font-medium text-gray-700 dark:text-zinc-300">
                          {individualBillItems.slice(0, 5).map((item, idx) => ( // show first 5
                            <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-zinc-800/30">
                              <td className="p-1.5 text-gray-500">{item.date} ({item.shift.substring(0, 1)})</td>
                              <td className="p-1.5 text-right font-bold text-gray-900 dark:text-zinc-100">{item.qty.toFixed(1)} L</td>
                              <td className="p-1.5 text-center text-gray-400">{item.fat.toFixed(1)}/{item.snf.toFixed(1)}</td>
                              <td className="p-1.5 text-right font-bold text-green-600">₹{item.amount.toFixed(0)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[7px] text-gray-400 italic text-center font-sans">*Showing recent shifts. Full slips in PDF copy.</p>

                    {/* Bill Summary totals */}
                    <div className="bg-slate-50 dark:bg-zinc-950 p-2.5 rounded-lg border dark:border-zinc-800 grid grid-cols-2 gap-1.5 text-[8px] font-serif">
                      <div>
                        <span className="text-gray-400 font-sans block">Total Qty:</span>
                        <strong className="font-sans text-[9px] text-gray-900 dark:text-zinc-100">{billTotals.qty} L</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 font-sans block">Gross:</span>
                        <strong className="font-sans text-[9px] text-[#1E94A4]">₹ {billTotals.gross}</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 font-sans block">Deductions:</span>
                        <strong className="font-sans text-[9px] text-rose-500">- ₹ {(parseFloat(billTotals.feed) + parseFloat(billTotals.advance) + parseFloat(billTotals.tax)).toFixed(0)}</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 font-sans block">Net Paid:</span>
                        <strong className="font-sans text-[9px] text-green-600 font-black">₹ {billTotals.net}</strong>
                      </div>
                    </div>

                    <div className="flex gap-2.5 pt-1.5">
                      <Button variant="outline" className="text-[9px] border-gray-300 rounded-lg px-2 py-1 h-7 flex-1 flex items-center justify-center gap-1 hover:bg-slate-100 dark:hover:bg-zinc-800">
                        <Printer className="w-2.5 h-2.5" /> Print Bill
                      </Button>
                      <Button className="text-[9px] bg-green-600 hover:bg-green-700 text-white rounded-lg px-2 py-1 h-7 flex-1 flex items-center justify-center gap-1 shadow-sm">
                        WhatsApp
                      </Button>
                    </div>

                  </div>
                </div>
              )}

              {/* DAILY MILK COLLECTION REPORT */}
              {activeTab === "collectionReport" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border dark:border-zinc-800 shadow-xs space-y-3">
                    
                    {/* Search / filter top bar */}
                    <div className="flex flex-col gap-2.5">
                      <h3 className="text-[10px] font-bold font-sans text-gray-800 dark:text-zinc-200">Live Collection logs</h3>
                      
                      <div className="flex justify-start">
                        <div className="bg-slate-100 dark:bg-zinc-950 p-1 rounded-lg border dark:border-zinc-800 flex gap-0.5 text-[8px]">
                          <button onClick={() => setMilkFilter("Both")} className={`px-2 py-0.5 font-bold rounded-md ${milkFilter === "Both" ? "bg-white dark:bg-zinc-900 text-[#1E94A4] shadow-xs" : "text-gray-500"}`}>All</button>
                          <button onClick={() => setMilkFilter("Cow")} className={`px-2 py-0.5 font-bold rounded-md ${milkFilter === "Cow" ? "bg-white dark:bg-zinc-900 text-[#1E94A4] shadow-xs" : "text-gray-500"}`}>Cow</button>
                          <button onClick={() => setMilkFilter("Buffalo")} className={`px-2 py-0.5 font-bold rounded-md ${milkFilter === "Buffalo" ? "bg-white dark:bg-zinc-900 text-[#1E94A4] shadow-xs" : "text-gray-500"}`}>Buff</button>
                        </div>
                      </div>
                    </div>

                    <div className="overflow-x-auto border dark:border-zinc-800 rounded-xl">
                      <table className="w-full text-[9px] text-left min-w-[420px]">
                        <thead className="bg-slate-50 dark:bg-zinc-950 border-b dark:border-zinc-800 font-bold text-gray-500">
                          <tr>
                            <th className="p-2">Code</th>
                            <th className="p-2">Farmer Name</th>
                            <th className="p-2">Shift</th>
                            <th className="p-2">Type</th>
                            <th className="p-2 text-right">Ltr</th>
                            <th className="p-2 text-center">F/S</th>
                            <th className="p-2 text-right">Amount</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y dark:divide-zinc-800 font-medium text-gray-700 dark:text-zinc-300">
                          {filteredCollections.map((entry, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-zinc-800/50">
                              <td className="p-2 font-bold text-gray-700 dark:text-zinc-300">{entry.code}</td>
                              <td className="p-2 truncate max-w-[90px]">{entry.name}</td>
                              <td className="p-2">{entry.shift.substring(0, 3)}</td>
                              <td className="p-2">
                                <span className={`px-1 py-0.5 rounded text-[8px] font-bold ${entry.type === "Cow" ? "bg-blue-500/10 text-blue-600" : "bg-purple-500/10 text-purple-600"}`}>
                                  {entry.type}
                                </span>
                              </td>
                              <td className="p-2 text-right font-black text-gray-800 dark:text-zinc-200">{entry.qty.toFixed(0)} L</td>
                              <td className="p-2 text-center text-gray-500">{entry.fat.toFixed(1)}/{entry.snf.toFixed(1)}</td>
                              <td className="p-2 text-right font-bold text-green-600">₹{entry.amount.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
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
                <div className="space-y-4 animate-in fade-in duration-200">
                  
                  {/* Selector box */}
                  <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border dark:border-zinc-800 shadow-xs space-y-2.5">
                    <h3 className="text-[10px] font-bold font-sans text-gray-800 dark:text-zinc-200">Select Farmer</h3>
                    
                    <div className="relative">
                      <Search className="absolute left-2 top-2 w-3 h-3 text-gray-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by code or name..."
                        className="w-full pl-6 pr-2 py-1 h-7 border dark:border-zinc-800 rounded-lg text-[9px] bg-slate-50 dark:bg-zinc-950 focus:outline-none focus:ring-1 focus:ring-[#1E94A4]"
                      />
                    </div>

                    <div className="max-h-[110px] overflow-y-auto space-y-1 pr-1 border dark:border-zinc-800 rounded-lg p-1 bg-slate-50 dark:bg-zinc-950">
                      {filteredFarmers.map((f) => (
                        <button
                          key={f.code}
                          onClick={() => setSelectedFarmer(f)}
                          className={`w-full text-left p-1.5 rounded-md hover:bg-white dark:hover:bg-zinc-900 border transition-all text-[9px] flex justify-between items-center ${selectedFarmer.code === f.code ? "border-[#1E94A4] bg-white dark:bg-zinc-900 shadow-xs" : "border-transparent"}`}
                        >
                          <div className="truncate pr-2">
                            <span className="font-bold">{f.code}</span> - <span className="font-medium text-gray-600 dark:text-zinc-400">{f.name}</span>
                          </div>
                          <span className="text-[7px] bg-[#1E94A4]/10 text-[#1E94A4] px-1.5 py-0.5 rounded-md font-bold shrink-0">{f.milkType}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Ledger Statement */}
                  <div className="bg-white dark:bg-zinc-900 p-3.5 rounded-xl border dark:border-zinc-800 shadow-xs space-y-3 text-left">
                    
                    <div className="flex justify-between items-start border-b dark:border-zinc-800 pb-2">
                      <div>
                        <h3 className="text-[10px] font-bold font-sans text-gray-900 dark:text-white uppercase tracking-wider">INDIVIDUAL LEDGER</h3>
                        <p className="text-[8px] text-gray-400 font-serif mt-0.5">Cooperative Statement</p>
                      </div>
                      <div className="text-right text-[8px] font-sans text-gray-600 dark:text-zinc-400">
                        <span className="text-gray-400 block">Balance Due</span>
                        <strong className="text-[10px] font-bold text-green-600">₹ 0.00</strong>
                      </div>
                    </div>

                    {/* Details list */}
                    <div className="overflow-x-auto border dark:border-zinc-800 rounded-xl">
                      <table className="w-full text-left text-[8px] min-w-[340px]">
                        <thead className="bg-slate-50 dark:bg-zinc-950 border-b dark:border-zinc-800 font-bold text-gray-500">
                          <tr>
                            <th className="p-1.5">Date</th>
                            <th className="p-1.5 font-bold">Desc</th>
                            <th className="p-1.5 text-right">Dr</th>
                            <th className="p-1.5 text-right">Cr</th>
                            <th className="p-1.5 text-right">Bal</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y dark:divide-zinc-800 font-medium text-gray-700 dark:text-zinc-300">
                          <tr className="hover:bg-slate-50 dark:hover:bg-zinc-800/30">
                            <td className="p-1.5 text-gray-400">01/05</td>
                            <td className="truncate max-w-[100px]">Opening Balance</td>
                            <td className="p-1.5 text-right">-</td>
                            <td className="p-1.5 text-right">-</td>
                            <td className="p-1.5 text-right">₹0</td>
                          </tr>
                          <tr className="hover:bg-slate-50 dark:hover:bg-zinc-800/30">
                            <td className="p-1.5 text-gray-400">03/05</td>
                            <td className="truncate max-w-[100px]">Cattle Feed Bag</td>
                            <td className="p-1.5 text-right text-rose-500">₹400</td>
                            <td className="p-1.5 text-right">-</td>
                            <td className="p-1.5 text-right text-rose-500">₹400 Dr</td>
                          </tr>
                          <tr className="hover:bg-slate-50 dark:hover:bg-zinc-800/30">
                            <td className="p-1.5 text-gray-400">05/05</td>
                            <td className="truncate max-w-[100px]">Cash Advance taken</td>
                            <td className="p-1.5 text-right text-rose-500">₹500</td>
                            <td className="p-1.5 text-right">-</td>
                            <td className="p-1.5 text-right text-rose-500">₹900 Dr</td>
                          </tr>
                          <tr className="hover:bg-slate-50 dark:hover:bg-zinc-800/30">
                            <td className="p-1.5 text-gray-400">10/05</td>
                            <td className="truncate max-w-[100px]">Milk Procurement</td>
                            <td className="p-1.5 text-right">-</td>
                            <td className="p-1.5 text-right text-green-600">₹{parseFloat(billTotals.gross).toFixed(0)}</td>
                            <td className="p-1.5 text-right text-green-600">₹{(parseFloat(billTotals.gross) - 900).toFixed(0)} Cr</td>
                          </tr>
                          <tr className="hover:bg-slate-50 dark:hover:bg-zinc-800/30">
                            <td className="p-1.5 text-gray-400">12/05</td>
                            <td className="truncate max-w-[100px]">Bank Auto Transfer</td>
                            <td className="p-1.5 text-right text-rose-500">₹{parseFloat(billTotals.net).toFixed(0)}</td>
                            <td className="p-1.5 text-right">-</td>
                            <td className="p-1.5 text-right">₹0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>
                </div>
              )}

            </div>

            {/* Fake bottom notch bar for iPhone or Android */}
            <div className="h-4 bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center pb-1 shrink-0 border-t dark:border-zinc-800 z-10">
              <div className="w-28 h-1 bg-gray-400 dark:bg-zinc-800 rounded-full"></div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
