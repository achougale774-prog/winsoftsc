"use client"

import React, { useState } from "react"
import { useLanguage } from "./language-provider"
import { 
  FileText, 
  BarChart4, 
  Table, 
  PieChart, 
  TrendingUp, 
  Calendar,
  Search,
  Download,
  Printer,
  ChevronDown,
  ArrowRightLeft
} from "lucide-react"
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  Cell,
  PieChart as RePieChart,
  Pie
} from "recharts"

const localizedTexts = {
  en: {
    title: "Interactive MIS Reports & Dashboard Preview",
    sectionTitle: "Interactive MIS Reports & Dashboard Preview",
    subtitle: "See how Winsoft automatically compiles complex milk logs, audit records, and balances. Try clicking the tabs to inspect reports generated in real time.",
    tabCollection: "Daily Collection Sheet",
    tabBalanceSheet: "Balance Sheet",
    tabPL: "Profit & Loss (P&L)",
    filterSearch: "Search Member Name...",
    filterDate: "Date Range",
    exportBtn: "Export to Excel/PDF",
    printBtn: "Print",
    memberNo: "Member No",
    memberName: "Member Name",
    milkType: "Milk Type",
    liters: "Qty (Ltr)",
    fat: "FAT %",
    snf: "SNF %",
    rate: "Rate (₹)",
    amount: "Amount (₹)",
    summaryTotal: "Total / Average",
    cowRatio: "Cow Milk Collection",
    buffaloRatio: "Buffalo Milk Collection",
    liabilities: "Liabilities (देणी)",
    assets: "Assets (मालमत्ता)",
    plExpenses: "Expenditures (खर्च)",
    plIncomes: "Incomes (उत्पन्न)",
    netProfit: "Net Profit (निव्वळ नफा)",
    netProfitShort: "Net Profit",
    totalLabel: "Total",
    chartTitlePL: "Expense Breakdown Analysis",
    chartTitleColl: "Milk Type Collection Share (Liters)",
    recordsTitle: "Today's Milk Procurement Logs"
  },
  mr: {
    title: "अहवाल व डॅशबोर्ड प्रिव्ह्यू",
    sectionTitle: "अहवाल डॅशबोर्ड प्रिव्ह्यू (Interactive MIS Reports)",
    subtitle: "MIS Reports आणि Accounting सोप्या पद्धतीने समजून घ्या. दैनिक संकलन पत्रक, ताळेबंद (Balance Sheet), किंवा नफा-तोटा (P&L) वर क्लिक करून अहवाल आणि आलेखांचे स्वरूप पहा.",
    tabCollection: "दैनिक संकलन पत्रक",
    tabBalanceSheet: "ताळेबंद (Balance Sheet)",
    tabPL: "नफा-तोटा (P&L) पत्रक",
    filterSearch: "सभासद नाव शोधा...",
    filterDate: "तारीख निवडा",
    exportBtn: "Excel/PDF डाउनलोड",
    printBtn: "प्रिंट करा",
    memberNo: "सभासद क्र.",
    memberName: "सभासदाचे नाव",
    milkType: "दुधाचा प्रकार",
    liters: "दूध (लि.)",
    fat: "फॅट %",
    snf: "एसएनएफ %",
    rate: "दर (₹)",
    amount: "एकूण रक्कम (₹)",
    summaryTotal: "एकूण / सरासरी",
    cowRatio: "गाय दूध संकलन",
    buffaloRatio: "म्हैस दूध संकलन",
    liabilities: "लायबिलिटीज (देणी)",
    assets: "अॅसेट्स (मालमत्ता)",
    plExpenses: "खर्च बाजू (Expenses)",
    plIncomes: "उत्पन्न बाजू (Income)",
    netProfit: "निव्वळ नफा (Net Profit)",
    netProfitShort: "निव्वळ नफा",
    totalLabel: "एकूण",
    chartTitlePL: "खर्च विभागणी विश्लेषण",
    chartTitleColl: "दूध प्रकारानुसार संकलन (लिटर)",
    recordsTitle: "आजच्या दूध खरेदीची थेट नोंद"
  }
}

export function MISReportsPreview() {
  const { language } = useLanguage()
  const [activeReport, setActiveReport] = useState<"collection" | "balance" | "pl">("collection")
  const [searchTerm, setSearchTerm] = useState("")

  const tRep = localizedTexts[language as "en" | "mr"] || localizedTexts.en

  const getTodayDate = () => {
    const d = new Date()
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
  }

  // 1. Daily Collection Mock Data
  const dailyCollectionData = [
    { id: 101, name: language === "mr" ? "रामचंद्र शिंदे" : "Ramchandra Shinde", type: language === "mr" ? "गाय" : "Cow", ltr: 12.5, fat: 4.1, snf: 8.6, rate: 38.20, amt: 477.50 },
    { id: 102, name: language === "mr" ? "आनंदराव पाटील" : "Anandrao Patil", type: language === "mr" ? "म्हैस" : "Buffalo", ltr: 6.5, fat: 6.8, snf: 9.0, rate: 62.50, amt: 406.25 },
    { id: 103, name: language === "mr" ? "संजय खाडे" : "Sanjay Khade", type: language === "mr" ? "गाय" : "Cow", ltr: 18.0, fat: 3.9, snf: 8.5, rate: 36.80, amt: 662.40 },
    { id: 104, name: language === "mr" ? "अमित चव्हाण" : "Amit Chavan", type: language === "mr" ? "गाय" : "Cow", ltr: 8.5, fat: 4.5, snf: 8.7, rate: 38.00, amt: 323.00 },
    { id: 105, name: language === "mr" ? "तानाजी सावंत" : "Tanaji Sawant", type: language === "mr" ? "म्हैस" : "Buffalo", ltr: 9.0, fat: 6.5, snf: 8.9, rate: 60.10, amt: 540.90 },
    { id: 106, name: language === "mr" ? "बाळासाहेब चौगुले" : "Balasaheb Chougule", type: language === "mr" ? "म्हैस" : "Buffalo", ltr: 14.2, fat: 7.0, snf: 9.2, rate: 64.00, amt: 908.80 }
  ]

  const filteredCollection = dailyCollectionData.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Sum calculations
  const totalLiters = dailyCollectionData.reduce((acc, item) => acc + item.ltr, 0)
  const totalAmt = dailyCollectionData.reduce((acc, item) => acc + item.amt, 0)
  const avgFat = parseFloat((dailyCollectionData.reduce((acc, item) => acc + item.fat, 0) / dailyCollectionData.length).toFixed(2))
  const avgSnf = parseFloat((dailyCollectionData.reduce((acc, item) => acc + item.snf, 0) / dailyCollectionData.length).toFixed(2))

  // Pie chart data
  const pieData = [
    { name: tRep.cowRatio, value: 39.0, color: "#22d3ee" }, // Light blue for cow
    { name: tRep.buffaloRatio, value: 29.7, color: "#1E94A4" } // Teal for buffalo
  ]

  // 2. Balance Sheet Mock Data (Liabilities on Left, Assets on Right - matching totals)
  const balanceSheet = {
    liabilities: [
      { name: language === "mr" ? "भाग भांडवल (Share Capital)" : "Share Capital", amt: 650000 },
      { name: language === "mr" ? "राखीव व इतर निधी (Reserves)" : "Reserve Funds", amt: 320000 },
      { name: language === "mr" ? "जिल्हा बँक कर्ज (DCC Bank Loan)" : "DCC Bank Loan", amt: 850000 },
      { name: language === "mr" ? "दूध बिले देणे (Milk Payable)" : "Milk Bill Payable", amt: 420000 },
      { name: language === "mr" ? "इतर देणी (Sundry Creditors)" : "Sundry Creditors", amt: 120000 },
      { name: tRep.netProfit, amt: 90000 }
    ],
    assets: [
      { name: language === "mr" ? "बँक ठेवी व शिल्लक (Bank Balances)" : "Bank Balances", amt: 980000 },
      { name: language === "mr" ? "दूध संघ येणे (Union Receivables)" : "Union Receivables", amt: 520000 },
      { name: language === "mr" ? "इमारत व यंत्रे (Fixed Assets)" : "Fixed Assets & Machineries", amt: 730000 },
      { name: language === "mr" ? "पशुखाद्य स्टॉक (Feed Stock)" : "Cattle Feed Stock", amt: 140000 },
      { name: language === "mr" ? "हातचा रोख (Cash in Hand)" : "Cash in Hand", amt: 80000 }
    ],
    total: 2450000
  }

  // 3. Profit & Loss Mock Data
  const plData = {
    expenses: [
      { name: language === "mr" ? "दूध खरेदी खर्च (Milk Purchases)" : "Raw Milk Purchases", amt: 1850000, fill: "#1e293b" },
      { name: language === "mr" ? "कर्मचारी पगार (Staff Salaries)" : "Staff Salaries", amt: 120000, fill: "#475569" },
      { name: language === "mr" ? "वाहतूक खर्च (Milk Transport)" : "Transport Charges", amt: 850000, fill: "#64748b" },
      { name: language === "mr" ? "पशुखाद्य खरेदी (Feed Purchases)" : "Cattle Feed Purchases", amt: 480000, fill: "#94a3b8" },
      { name: language === "mr" ? "इतर खर्च (Depreciation/Office)" : "Office & Misc Expenses", amt: 95000, fill: "#cbd5e1" }
    ],
    income: [
      { name: language === "mr" ? "दूध विक्री जमा (Milk Sales to Union)" : "Milk Sales to Union", amt: 2950000 },
      { name: language === "mr" ? "पशुखाद्य विक्री (Feed Sales)" : "Cattle Feed Sales", amt: 520000 },
      { name: language === "mr" ? "शासकीय अनुदान (Govt Subsidy)" : "Government Subsidy", amt: 120000 },
      { name: language === "mr" ? "इतर उत्पन्न (Interest/Shares)" : "Other Incomes", amt: 35000 }
    ]
  }

  const totalExpenses = plData.expenses.reduce((acc, item) => acc + item.amt, 0)
  const totalIncome = plData.income.reduce((acc, item) => acc + item.amt, 0)
  const netProfitVal = totalIncome - totalExpenses

  // Recharts P&L breakdown
  const plChartData = plData.expenses.map(item => ({
    name: item.name,
    amount: item.amt,
    fill: item.fill
  }))

  return (
    <section className="py-24 bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 dark:bg-[#1E94A4]/20 text-[#1E94A4] text-xs font-sans font-bold mb-4 border border-[#1E94A4]/20">
            📊 {language === "mr" ? "व्यवस्थापकीय अहवाल प्रिव्ह्यू" : "Interactive Dashboard"}
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6">
            {language === "mr" ? tRep.sectionTitle : tRep.title}
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 font-serif text-lg leading-relaxed">
            {tRep.subtitle}
          </p>
        </div>

        {/* Windows ERP Wrapper Mockup */}
        <div className="bg-white dark:bg-zinc-950 rounded-3xl border border-slate-200 dark:border-zinc-800/80 shadow-2xl overflow-hidden flex flex-col min-h-[600px] relative">
          
          {/* Mock Window Topbar */}
          <div className="bg-slate-100 dark:bg-zinc-900 px-6 py-4 flex items-center justify-between border-b border-slate-200/60 dark:border-zinc-800/60">
            <div className="flex items-center gap-2">
              {/* Window Controls Dots */}
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs font-bold text-slate-500 font-mono pl-4">WINSOFT ERP 5.0 - [REPORT VIEWER]</span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase bg-[#1E94A4]/15 text-[#1E94A4] font-bold px-2 py-0.5 rounded-full">Connected</span>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>

          {/* Navigation Tab Bar */}
          <div className="flex flex-wrap border-b border-slate-100 dark:border-zinc-900 bg-slate-50/50 dark:bg-zinc-900/30 p-2 gap-2">
            {[
              { id: "collection", label: tRep.tabCollection, icon: Table },
              { id: "balance", label: tRep.tabBalanceSheet, icon: ArrowRightLeft },
              { id: "pl", label: tRep.tabPL, icon: FileText }
            ].map((tab) => {
              const TabIcon = tab.icon
              const isActive = activeReport === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveReport(tab.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-sans font-bold text-xs transition-all ${
                    isActive 
                      ? "bg-[#1E94A4] text-white shadow-md shadow-[#1E94A4]/25" 
                      : "text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-900"
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Report Viewer Content Area */}
          <div className="p-6 flex-grow flex flex-col justify-between">
            
            {/* VIEW 1: DAILY MILK COLLECTION SHEET */}
            {activeReport === "collection" && (
              <div className="space-y-8 animate-fadeIn">
                {/* Search and Filters Mock */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-slate-50 dark:bg-zinc-900/40 p-4 rounded-2xl border dark:border-zinc-900">
                  <div className="relative flex-grow max-w-sm">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input 
                      type="text" 
                      placeholder={tRep.filterSearch}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border rounded-xl text-xs bg-white dark:bg-zinc-950 border-slate-200 dark:border-zinc-800 text-gray-700 dark:text-zinc-200 outline-hidden focus:border-[#1E94A4]"
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1.5 px-4 py-2 border border-slate-200 dark:border-zinc-800 rounded-xl text-xs font-semibold hover:bg-slate-50 dark:hover:bg-zinc-900 text-gray-600 dark:text-zinc-300">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{tRep.filterDate}</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1E94A4]/10 text-[#1E94A4] border border-[#1E94A4]/20 rounded-xl text-xs font-bold hover:bg-[#1E94A4]/25">
                      <Download className="w-3.5 h-3.5" />
                      <span>{tRep.exportBtn}</span>
                    </button>
                  </div>
                </div>

                {/* Grid Layout: Left Table, Right Composition Graph */}
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Table */}
                  <div className="lg:col-span-8 overflow-x-auto border border-slate-100 dark:border-zinc-900 rounded-2xl bg-white dark:bg-zinc-950">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-zinc-900 text-gray-500 font-bold border-b border-slate-200/50 dark:border-zinc-850">
                          <th className="p-3.5">{tRep.memberNo}</th>
                          <th className="p-3.5">{tRep.memberName}</th>
                          <th className="p-3.5 text-center">{tRep.milkType}</th>
                          <th className="p-3.5 text-center">{tRep.liters}</th>
                          <th className="p-3.5 text-center">{tRep.fat}</th>
                          <th className="p-3.5 text-center">{tRep.snf}</th>
                          <th className="p-3.5 text-right">{tRep.rate}</th>
                          <th className="p-3.5 text-right">{tRep.amount}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredCollection.map((row) => (
                          <tr key={row.id} className="border-b border-slate-100 dark:border-zinc-900 hover:bg-slate-50/50 dark:hover:bg-zinc-900/50 font-medium">
                            <td className="p-3.5 font-bold text-gray-400">{row.id}</td>
                            <td className="p-3.5 font-bold text-gray-900 dark:text-zinc-100">{row.name}</td>
                            <td className="p-3.5 text-center">
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                row.type === "Cow" || row.type === "गाय"
                                  ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
                                  : "bg-[#1E94A4]/10 text-[#1E94A4] dark:text-[#22d3ee]"
                              }`}>
                                {row.type}
                              </span>
                            </td>
                            <td className="p-3.5 text-center font-bold text-gray-800 dark:text-zinc-200">{row.ltr}</td>
                            <td className="p-3.5 text-center">{row.fat}</td>
                            <td className="p-3.5 text-center">{row.snf}</td>
                            <td className="p-3.5 text-right font-mono">₹ {row.rate.toFixed(2)}</td>
                            <td className="p-3.5 text-right font-bold text-emerald-600 dark:text-emerald-400 font-mono">₹ {row.amt.toFixed(2)}</td>
                          </tr>
                        ))}
                        {/* Summary Total Row */}
                        <tr className="bg-slate-100/50 dark:bg-zinc-900/60 font-black border-t-2 border-slate-200 dark:border-zinc-800">
                          <td className="p-3.5 text-gray-500" colSpan={2}>{tRep.summaryTotal}</td>
                          <td className="p-3.5 text-center">-</td>
                          <td className="p-3.5 text-center text-[#1E94A4] text-sm">{totalLiters.toFixed(1)} L</td>
                          <td className="p-3.5 text-center">{avgFat}</td>
                          <td className="p-3.5 text-center">{avgSnf}</td>
                          <td className="p-3.5 text-right">-</td>
                          <td className="p-3.5 text-right text-emerald-600 dark:text-emerald-400 text-sm font-mono">₹ {totalAmt.toFixed(2)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Chart Container */}
                  <div className="lg:col-span-4 bg-slate-50 dark:bg-zinc-900/30 p-5 rounded-2xl border dark:border-zinc-900 flex flex-col justify-between min-h-[300px]">
                    <h4 className="font-bold text-xs text-gray-700 dark:text-zinc-300 font-sans border-b pb-3 mb-4">
                      {tRep.chartTitleColl}
                    </h4>
                    
                    <div className="h-[200px] w-full flex justify-center items-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <RePieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={75}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => `${value} Liters`} />
                        </RePieChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="flex justify-around text-[10px] font-bold mt-2 pt-3 border-t border-slate-100 dark:border-zinc-800">
                      {pieData.map((d, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                          <span>{d.name}: <strong className="text-gray-800 dark:text-zinc-200">{d.value} L</strong></span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 2: BALANCE SHEET PREVIEW */}
            {activeReport === "balance" && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-slate-50 dark:bg-zinc-900/30 p-4 rounded-xl border dark:border-zinc-900 flex items-center justify-between text-xs font-semibold text-gray-600 dark:text-zinc-400">
                  <span>{language === "mr" ? "ताळेबंद पत्रक (दिनांक ३१ मार्च)" : "Balance Sheet (As of March 31)"}</span>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 px-3 py-1.5 border rounded-lg text-xxs font-bold hover:bg-slate-100 dark:hover:bg-zinc-800"><Printer className="w-3 h-3" /> {tRep.printBtn}</button>
                    <button className="flex items-center gap-1 px-3 py-1.5 bg-[#1E94A4]/10 text-[#1E94A4] border border-[#1E94A4]/20 rounded-lg text-xxs font-bold hover:bg-[#1E94A4]/25"><Download className="w-3 h-3" /> {tRep.exportBtn}</button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-0 border dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-950 text-xs">
                  {/* Liabilities Side (Left) */}
                  <div className="border-r border-slate-200 dark:border-zinc-800 flex flex-col justify-between min-h-[350px]">
                    <div className="bg-slate-100 dark:bg-zinc-900 px-4 py-3 font-bold border-b border-slate-200 dark:border-zinc-800 text-gray-700 dark:text-zinc-300">
                      {tRep.liabilities}
                    </div>
                    <div className="divide-y divide-slate-100 dark:divide-zinc-900 flex-grow">
                      {balanceSheet.liabilities.map((item, idx) => (
                        <div key={idx} className="flex justify-between px-4 py-3 font-medium text-gray-700 dark:text-zinc-300">
                          <span className={item.name.includes("Net") ? "font-bold text-[#1E94A4]" : ""}>{item.name}</span>
                          <span className={`font-mono ${item.name.includes("Net") ? "font-bold text-[#1E94A4]" : ""}`}>₹ {item.amt.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-slate-100/50 dark:bg-zinc-900/50 px-4 py-3 font-black border-t border-slate-200 dark:border-zinc-800 flex justify-between text-[#1E94A4] text-sm">
                      <span>{tRep.totalLabel}</span>
                      <span className="font-mono">₹ {balanceSheet.total.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Assets Side (Right) */}
                  <div className="flex flex-col justify-between min-h-[350px]">
                    <div className="bg-slate-100 dark:bg-zinc-900 px-4 py-3 font-bold border-b border-slate-200 dark:border-zinc-800 text-gray-700 dark:text-zinc-300">
                      {tRep.assets}
                    </div>
                    <div className="divide-y divide-slate-100 dark:divide-zinc-900 flex-grow">
                      {balanceSheet.assets.map((item, idx) => (
                        <div key={idx} className="flex justify-between px-4 py-3 font-medium text-gray-700 dark:text-zinc-300">
                          <span>{item.name}</span>
                          <span className="font-mono">₹ {item.amt.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                    {/* Padding blank space to match left height layout */}
                    <div className="border-t border-transparent px-4 py-3"></div>
                    
                    <div className="bg-slate-100/50 dark:bg-zinc-900/50 px-4 py-3 font-black border-t border-slate-200 dark:border-zinc-800 flex justify-between text-[#1E94A4] text-sm">
                      <span>{tRep.totalLabel}</span>
                      <span className="font-mono">₹ {balanceSheet.total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 3: PROFIT & LOSS STATEMENT */}
            {activeReport === "pl" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Two Column Table Layout */}
                  <div className="lg:col-span-7 border dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950 text-xs overflow-hidden flex flex-col justify-between min-h-[380px]">
                    <div>
                      <div className="grid grid-cols-2 bg-slate-100 dark:bg-zinc-900 border-b dark:border-zinc-800 font-bold text-gray-700 dark:text-zinc-300">
                        <div className="p-3 border-r dark:border-zinc-800">{tRep.plExpenses}</div>
                        <div className="p-3">{tRep.plIncomes}</div>
                      </div>

                      <div className="grid grid-cols-2 divide-x divide-slate-100 dark:divide-zinc-900">
                        
                        {/* Expenses list */}
                        <div className="divide-y divide-slate-100 dark:divide-zinc-900 flex flex-col">
                          {plData.expenses.map((item, idx) => (
                            <div key={idx} className="flex justify-between p-3 font-medium text-gray-700 dark:text-zinc-300">
                              <span>{item.name}</span>
                              <span className="font-mono text-gray-500">₹ {item.amt.toLocaleString()}</span>
                            </div>
                          ))}
                          {/* Balancing Row for net profit */}
                          <div className="flex justify-between p-3 font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50/20 dark:bg-emerald-950/10 border-t">
                            <span>{tRep.netProfitShort}</span>
                            <span className="font-mono">₹ {netProfitVal.toLocaleString()}</span>
                          </div>
                        </div>

                        {/* Income list */}
                        <div className="divide-y divide-slate-100 dark:divide-zinc-900 flex flex-col">
                          {plData.income.map((item, idx) => (
                            <div key={idx} className="flex justify-between p-3 font-medium text-gray-700 dark:text-zinc-300">
                              <span>{item.name}</span>
                              <span className="font-mono">₹ {item.amt.toLocaleString()}</span>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>

                    {/* Totals balancing bar */}
                    <div className="grid grid-cols-2 border-t-2 border-slate-200 dark:border-zinc-800 bg-slate-100/50 dark:bg-zinc-900/60 font-black text-[#1E94A4] text-sm">
                      <div className="p-3 border-r dark:border-zinc-800 flex justify-between">
                        <span>{tRep.totalLabel}</span>
                        <span className="font-mono">₹ {totalIncome.toLocaleString()}</span>
                      </div>
                      <div className="p-3 flex justify-between">
                        <span>{tRep.totalLabel}</span>
                        <span className="font-mono">₹ {totalIncome.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Expenses Chart Breakdown */}
                  <div className="lg:col-span-5 bg-slate-50 dark:bg-zinc-900/30 p-5 rounded-2xl border dark:border-zinc-900 min-h-[380px] flex flex-col justify-between">
                    <h4 className="font-bold text-xs text-gray-700 dark:text-zinc-300 font-sans border-b pb-3 mb-4">
                      {tRep.chartTitlePL}
                    </h4>

                    <div className="h-[240px] w-full mt-2">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={plChartData}
                          layout="vertical"
                          margin={{ top: 5, right: 10, left: -25, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" horizontal={false} className="stroke-slate-200 dark:stroke-zinc-800" />
                          <XAxis type="number" stroke="#888888" fontSize={9} tickLine={false} axisLine={false} />
                          <YAxis dataKey="name" type="category" stroke="#888888" fontSize={9} tickLine={false} axisLine={false} width={120} />
                          <Tooltip formatter={(value) => `₹ ${value.toLocaleString()}`} />
                          <Bar dataKey="amount" radius={[0, 4, 4, 0]}>
                            {plChartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="text-[10px] text-gray-400 font-serif leading-relaxed mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800 text-center">
                      Analysis reflects standard cooperative audit guidelines.
                    </div>
                  </div>

                </div>
              </div>
            )}

          </div>

          {/* Decorative Bottom Bar */}
          <div className="bg-slate-50 dark:bg-zinc-900/30 px-6 py-3 border-t border-slate-100 dark:border-zinc-900 flex justify-between items-center text-[10px] text-gray-400 font-sans">
            <span>Report generated on: {getTodayDate()} 12:00 PM</span>
            <span className="flex items-center gap-1 text-[#1E94A4] font-bold"><TrendingUp className="w-3.5 h-3.5" /> Direct Database Sync (MSSQL)</span>
          </div>
        </div>

      </div>
    </section>
  )
}
