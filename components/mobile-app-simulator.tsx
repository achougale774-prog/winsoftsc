"use client"

import React, { useState, useEffect } from "react"
import { useLanguage } from "./language-provider"
import { 
  Smartphone, 
  User, 
  TrendingUp, 
  Check, 
  Volume2, 
  FileText, 
  Database, 
  ArrowRight,
  TrendingDown,
  Activity,
  Layers,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react"
import { Button } from "./ui/button"

const localizedTexts = {
  en: {
    sectionTitle: "Interactive Mobile App Simulator",
    sectionSubtitle: "Experience our specialized mobile applications firsthand. Toggle through the apps below to preview screens in the interactive smartphone mockup.",
    selectApp: "Select Mobile App to Preview",
    viewSlip: "Daily Receipt",
    viewLedger: "Ledger Passbook",
    btnSave: "Save Collection",
    announcementTitle: "Voice Announcement",
    saving: "Saving...",
    saved: "Collection Saved Successfully!",
    resetBtn: "Collect Next",
    shiftMorning: "Morning",
    shiftEvening: "Evening",
    farmerName: "Anandrao Patil",
    milkType: "Buffalo",
    qty: "6.5 Ltr",
    rate: "₹ 62.50 / L",
    totalAmount: "₹ 406.25",
    farmerIdLabel: "Member ID",
    dateLabel: "Date",
    shiftLabel: "Shift",
    typeLabel: "Type",
    weightLabel: "Weight",
    fatLabel: "FAT",
    snfLabel: "SNF",
    rateLabel: "Rate",
    amtLabel: "Amount",
    netPaid: "Net Paid",
    prevBalance: "Prev Balance",
    deductions: "Deductions",
    feedDeduction: "Cattle Feed",
    advanceDeduction: "Advance Deduct",
    adminTitle: "Dairy Dashboard",
    adminSummary: "Society Summary",
    totalLiters: "Total Milk",
    avgFat: "Avg FAT",
    totalPayout: "Total Payout",
    activeFarmers: "Active Members",
    routePerformance: "Route Performance",
    collectionAppTitle: "Procurement Terminal",
    saveStatusMsg: "Receipt saved!",
    farmerAppDesc: "Allows farmers to check their daily milk collection receipts, cumulative milk bills, and complete accounts ledger dynamically on their mobile phones.",
    adminAppDesc: "Enables dairy operators and managers to monitor live milk collection status, route collection speed, daily payout summaries, and member analytics.",
    collectionAppDesc: "Designed for milk collection center agents to enter weight, fat, and SNF data, print thermal receipts, and trigger audio announcements instantly.",
    apps: {
      farmer: "Farmer App",
      admin: "Admin App",
      collection: "Collection App"
    }
  },
  mr: {
    sectionTitle: "मोबाईल ॲप स्क्रीन सिम्युलेटर",
    sectionSubtitle: "आमच्या विशेष मोबाईल ॲप्लिकेशन्सचा प्रत्यक्ष अनुभव घ्या. खालील ॲप्स निवडून मोबाईल फ्रेममध्ये शेतकऱ्याचे दैनिक संकलन पत्रक (slip) आणि खाते उतारा पहा.",
    selectApp: "ॲप निवडा व पूर्वदर्शन पहा",
    viewSlip: "दैनिक पावती",
    viewLedger: "खाते उतारा",
    btnSave: "संकलन जतन करा",
    announcementTitle: "व्हॉइस अनाउन्समेंट",
    saving: "जतन होत आहे...",
    saved: "दूध संकलन यशस्वीरित्या जतन झाले!",
    resetBtn: "पुढील संकलन",
    shiftMorning: "सकाळ",
    shiftEvening: "संध्याकाळ",
    farmerName: "आनंदराव पाटील",
    milkType: "म्हैस",
    qty: "६.५ लिटर",
    rate: "₹ ६२.५० / लि.",
    totalAmount: "₹ ४०६.२५",
    farmerIdLabel: "सभासद क्र.",
    dateLabel: "दिनांक",
    shiftLabel: "सत्र",
    typeLabel: "प्रकार",
    weightLabel: "दूध वजन",
    fatLabel: "फॅट",
    snfLabel: "एसएनएफ",
    rateLabel: "दर / लि",
    amtLabel: "रक्कम",
    netPaid: "निव्वळ देय",
    prevBalance: "मागील शिल्लक",
    deductions: "कपाती",
    feedDeduction: "पशुखाद्य कपात",
    advanceDeduction: "अॅडव्हान्स कपात",
    adminTitle: "डेअरी डॅशबोर्ड",
    adminSummary: "एकूण संस्था आढावा",
    totalLiters: "एकूण संकलन",
    avgFat: "सरासरी फॅट",
    totalPayout: "एकूण पेआउट",
    activeFarmers: "सक्रिय सभासद",
    routePerformance: "मार्गानुसार कामगिरी",
    collectionAppTitle: "संकलन टर्मिनल",
    saveStatusMsg: "पावती जतन झाली!",
    farmerAppDesc: "शेतकऱ्यांना त्यांच्या मोबाईलवर रोजच्या दूध संकलनाची पावती, एकूण बिलांची माहिती आणि संपूर्ण खाते उतारा (Ledger) कोणत्याही त्रासाशिवाय पाहण्यास मदत करते.",
    adminAppDesc: "संस्थाचालक किंवा प्रशासकांना संस्थेतील दूध संकलनाची थेट आकडेवारी, विविध मार्गांचे संकलन, एकूण पेमेंट आणि महत्त्वाचे अहवाल मोबाईलवर पाहण्यास सक्षम करते.",
    collectionAppDesc: "दूध संकलन केंद्रातील ऑपरेटरसाठी डिझाइन केलेले ॲप. याद्वारे फॅट, एसएनएफ आणि वजन नोंदी करून त्वरित थर्मल पावती आणि स्वयंचलित व्हॉइस दर घोषणा केली जाते.",
    apps: {
      farmer: "Farmer App (शेतकरी)",
      admin: "Admin App (प्रशासक)",
      collection: "Collection App (संकलन)"
    }
  }
}

export function MobileAppSimulator() {
  const { language } = useLanguage()
  const [activeApp, setActiveApp] = useState<"farmer" | "admin" | "collection">("farmer")
  const [farmerSubTab, setFarmerSubTab] = useState<"slip" | "ledger">("slip")
  const [isSaving, setIsSaving] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [showAnnouncement, setShowAnnouncement] = useState(false)

  // Auto Reset state when changing app
  useEffect(() => {
    setIsSaved(false)
    setShowAnnouncement(false)
    setIsSaving(false)
  }, [activeApp])

  const tSim = localizedTexts[language as "en" | "mr"] || localizedTexts.en

  // Date formatted nicely
  const getTodayDate = () => {
    const d = new Date()
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
  }

  const handleSaveCollection = () => {
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      setIsSaved(true)
      setShowAnnouncement(true)
    }, 1200)
  }

  const handleResetCollection = () => {
    setIsSaved(false)
    setShowAnnouncement(false)
  }

  return (
    <section id="simulator" className="py-20 bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 dark:bg-[#1E94A4]/20 text-[#1E94A4] text-xs font-sans font-bold mb-4 border border-[#1E94A4]/20">
            📱 {language === "mr" ? "लाईव्ह सिम्युलेटर" : "Live Simulator"}
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6">
            {tSim.sectionTitle}
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 font-serif text-lg leading-relaxed">
            {tSim.sectionSubtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Controls */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-200 uppercase tracking-wider font-sans">
              {tSim.selectApp}
            </h3>

            <div className="space-y-4">
              {(["farmer", "admin", "collection"] as const).map((appType) => {
                const isActive = activeApp === appType
                let desc = ""
                if (appType === "farmer") desc = tSim.farmerAppDesc
                else if (appType === "admin") desc = tSim.adminAppDesc
                else desc = tSim.collectionAppDesc

                return (
                  <button
                    key={appType}
                    onClick={() => setActiveApp(appType)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-5 ${
                      isActive 
                        ? "bg-slate-50 dark:bg-zinc-900 border-[#1E94A4] shadow-md shadow-[#1E94A4]/10" 
                        : "bg-white dark:bg-zinc-950 border-slate-100 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700"
                    }`}
                  >
                    <div className={`p-3 rounded-xl ${
                      isActive 
                        ? "bg-[#1E94A4] text-white" 
                        : "bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400"
                    }`}>
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5 flex-grow">
                      <div className="flex items-center justify-between">
                        <span className={`font-sans font-bold text-lg ${isActive ? "text-[#1E94A4]" : "text-gray-900 dark:text-zinc-200"}`}>
                          {tSim.apps[appType]}
                        </span>
                        {isActive && <ChevronRight className="w-5 h-5 text-[#1E94A4]" />}
                      </div>
                      <p className="text-gray-500 dark:text-zinc-400 text-sm font-serif leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Side Device Frame */}
          <div className="lg:col-span-6 flex justify-center relative">
            {/* Background glowing lights for premium design */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[550px] bg-gradient-to-tr from-[#1E94A4]/20 to-[#22d3ee]/20 rounded-full blur-3xl opacity-60 pointer-events-none -z-10" />

            {/* Simulated Phone Frame */}
            <div className="w-[340px] h-[670px] bg-slate-900 dark:bg-zinc-900 rounded-[50px] p-4 shadow-2xl border-4 border-slate-800 dark:border-zinc-800 relative flex flex-col ring-12 ring-slate-950/20 ring-offset-4 ring-offset-white dark:ring-offset-black">
              {/* Speaker & Camera Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-full z-30 flex items-center justify-center gap-2 px-3">
                <div className="w-16 h-1 bg-zinc-800 rounded-full" />
                <div className="w-2.5 h-2.5 bg-zinc-900 rounded-full border border-zinc-800" />
              </div>

              {/* Phone Content Screen */}
              <div className="w-full h-full bg-slate-50 dark:bg-zinc-950 rounded-[38px] overflow-hidden relative flex flex-col pt-7 z-20 border border-slate-950/20 font-sans">
                
                {/* Simulated App Bar */}
                <div className="bg-[#1E94A4] text-white px-4 py-3 flex items-center justify-between text-xs font-bold shadow-xs">
                  <span>WINSOFT DAIRY</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white opacity-80" />
                    <span>LTE 100%</span>
                  </div>
                </div>

                {/* Sub-Header inside App */}
                <div className="bg-slate-100 dark:bg-zinc-900 px-4 py-2 border-b border-slate-200/50 dark:border-zinc-800/50 flex items-center justify-between text-xxs font-bold text-gray-500">
                  <span>{getTodayDate()}</span>
                  <span>{activeApp.toUpperCase()} PORTAL</span>
                </div>

                {/* Dynamic App Content */}
                <div className="flex-grow overflow-y-auto p-4 flex flex-col text-gray-900 dark:text-zinc-100">
                  
                  {/* APP 1: FARMER APP */}
                  {activeApp === "farmer" && (
                    <div className="space-y-4 flex flex-col h-full">
                      {/* Sub Tabs */}
                      <div className="grid grid-cols-2 gap-2 p-1 bg-slate-200/60 dark:bg-zinc-900 rounded-xl">
                        <button
                          onClick={() => setFarmerSubTab("slip")}
                          className={`py-2 text-xs font-bold rounded-lg transition-all ${
                            farmerSubTab === "slip" 
                              ? "bg-white dark:bg-zinc-800 shadow-xs text-[#1E94A4]" 
                              : "text-gray-500"
                          }`}
                        >
                          {tSim.viewSlip}
                        </button>
                        <button
                          onClick={() => setFarmerSubTab("ledger")}
                          className={`py-2 text-xs font-bold rounded-lg transition-all ${
                            farmerSubTab === "ledger" 
                              ? "bg-white dark:bg-zinc-800 shadow-xs text-[#1E94A4]" 
                              : "text-gray-500"
                          }`}
                        >
                          {tSim.viewLedger}
                        </button>
                      </div>

                      {/* Farmer slip view */}
                      {farmerSubTab === "slip" && (
                        <div className="bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-850 rounded-2xl p-4 shadow-sm space-y-3.5 text-xs">
                          <div className="text-center pb-2 border-b border-dashed border-slate-200 dark:border-zinc-800">
                            <h4 className="font-bold text-[#1E94A4]">श्री देवराज सहकारी दूध संस्था</h4>
                            <span className="text-[10px] text-gray-400 dark:text-zinc-500">भादगाव, कोल्हापूर</span>
                          </div>

                          <div className="grid grid-cols-2 gap-y-2 text-[11px]">
                            <div><span className="text-gray-400">{tSim.farmerIdLabel}:</span> <span className="font-bold">102</span></div>
                            <div className="text-right"><span className="text-gray-400">{tSim.dateLabel}:</span> <span className="font-bold">{getTodayDate()}</span></div>
                            <div><span className="text-gray-400">{tSim.shiftLabel}:</span> <span className="font-bold text-indigo-500">{tSim.shiftMorning}</span></div>
                            <div className="text-right"><span className="text-gray-400">{tSim.typeLabel}:</span> <span className="font-bold text-emerald-500">{tSim.milkType}</span></div>
                          </div>

                          <div className="bg-slate-50 dark:bg-zinc-950 rounded-xl p-3 grid grid-cols-3 gap-2 text-center border dark:border-zinc-900">
                            <div>
                              <div className="text-[10px] text-gray-400 uppercase font-semibold">{tSim.weightLabel}</div>
                              <div className="font-bold text-[#1E94A4] text-sm">{tSim.qty}</div>
                            </div>
                            <div>
                              <div className="text-[10px] text-gray-400 uppercase font-semibold">{tSim.fatLabel}</div>
                              <div className="font-bold text-gray-800 dark:text-zinc-200 text-sm">6.8 %</div>
                            </div>
                            <div>
                              <div className="text-[10px] text-gray-400 uppercase font-semibold">{tSim.snfLabel}</div>
                              <div className="font-bold text-gray-800 dark:text-zinc-200 text-sm">9.0 %</div>
                            </div>
                          </div>

                          <div className="pt-2 border-t border-slate-100 dark:border-zinc-800 flex justify-between font-bold">
                            <span className="text-gray-500">{tSim.rateLabel}:</span>
                            <span>{tSim.rate}</span>
                          </div>
                          <div className="pt-2 border-t border-slate-100 dark:border-zinc-800 flex justify-between text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50/30 dark:bg-emerald-950/10 p-2 rounded-xl">
                            <span>{tSim.totalAmount}:</span>
                            <span>{tSim.totalAmount}</span>
                          </div>
                        </div>
                      )}

                      {/* Farmer Ledger View */}
                      {farmerSubTab === "ledger" && (
                        <div className="flex-grow space-y-3 text-[10px]">
                          <div className="flex justify-between items-center bg-white dark:bg-zinc-900 p-3 rounded-xl border dark:border-zinc-850">
                            <div>
                              <span className="text-gray-400 block text-[9px] uppercase">{tSim.netPaid}</span>
                              <span className="text-sm font-bold text-[#1E94A4]">₹ 4,025.00</span>
                            </div>
                            <div className="text-right">
                              <span className="text-gray-400 block text-[9px] uppercase">{tSim.deductions}</span>
                              <span className="text-sm font-bold text-rose-500">- ₹ 450.00</span>
                            </div>
                          </div>

                          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/60 dark:border-zinc-850 overflow-hidden">
                            <table className="w-full text-left border-collapse">
                              <thead>
                                <tr className="bg-slate-100 dark:bg-zinc-800 text-gray-500 font-bold border-b dark:border-zinc-850">
                                  <th className="p-2">{tSim.dateLabel}</th>
                                  <th className="p-2 text-center">{tSim.qty}</th>
                                  <th className="p-2 text-right">{tSim.amtLabel}</th>
                                </tr>
                              </thead>
                              <tbody>
                                {[
                                  { date: "10/06", qty: "6.2 L", amt: "₹ 387.50" },
                                  { date: "09/06", qty: "6.5 L", amt: "₹ 406.25" },
                                  { date: "08/06", qty: "5.8 L", amt: "₹ 362.50" },
                                  { date: "07/06", qty: "6.0 L", amt: "₹ 375.00" },
                                  { date: "06/06", qty: "6.4 L", amt: "₹ 400.00" }
                                ].map((row, idx) => (
                                  <tr key={idx} className="border-b border-slate-100 dark:border-zinc-850/50 hover:bg-slate-50/50 dark:hover:bg-zinc-900/50">
                                    <td className="p-2 font-semibold text-gray-500">{row.date}</td>
                                    <td className="p-2 text-center font-bold text-gray-700 dark:text-zinc-300">{row.qty}</td>
                                    <td className="p-2 text-right font-bold text-emerald-600 dark:text-emerald-400">{row.amt}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* APP 2: ADMIN APP */}
                  {activeApp === "admin" && (
                    <div className="space-y-4 text-xs h-full flex flex-col">
                      <div className="flex items-center justify-between pb-2 border-b dark:border-zinc-850">
                        <h4 className="font-bold text-[#1E94A4] flex items-center gap-1">
                          <Activity className="w-3.5 h-3.5 text-[#1E94A4]" />
                          {tSim.adminTitle}
                        </h4>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[9px] font-bold animate-pulse">Live</span>
                      </div>

                      {/* KPI Blocks */}
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="bg-white dark:bg-zinc-900 p-2.5 rounded-xl border dark:border-zinc-850">
                          <span className="text-[9px] text-gray-400 block uppercase font-semibold">{tSim.totalLiters}</span>
                          <span className="text-sm font-bold text-gray-900 dark:text-white">1,854.2 L</span>
                          <span className="text-[9px] text-emerald-500 block font-semibold">+ 4.2% today</span>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-2.5 rounded-xl border dark:border-zinc-850">
                          <span className="text-[9px] text-gray-400 block uppercase font-semibold">{tSim.avgFat}</span>
                          <span className="text-sm font-bold text-indigo-500">4.32 %</span>
                          <span className="text-[9px] text-gray-400 block font-semibold">Buffalo 6.8 | Cow 3.9</span>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-2.5 rounded-xl border dark:border-zinc-850">
                          <span className="text-[9px] text-gray-400 block uppercase font-semibold">{tSim.totalPayout}</span>
                          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">₹ 82,450</span>
                          <span className="text-[9px] text-gray-400 block font-semibold">10-day estimation</span>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-2.5 rounded-xl border dark:border-zinc-850">
                          <span className="text-[9px] text-gray-400 block uppercase font-semibold">{tSim.activeFarmers}</span>
                          <span className="text-sm font-bold text-gray-900 dark:text-white">142 / 180</span>
                          <span className="text-[9px] text-indigo-500 block font-semibold">78.8% attendance</span>
                        </div>
                      </div>

                      {/* Route collection progress chart */}
                      <div className="bg-white dark:bg-zinc-900 p-3 rounded-2xl border dark:border-zinc-850 space-y-2.5 flex-grow">
                        <span className="text-[9px] text-gray-400 block uppercase font-bold tracking-wider">{tSim.routePerformance}</span>
                        <div className="space-y-2">
                          {[
                            { name: "Route A - Wadgaon", progress: "85%", color: "bg-[#1E94A4]" },
                            { name: "Route B - Minche", progress: "92%", color: "bg-indigo-500" },
                            { name: "Route C - Latwade", progress: "68%", color: "bg-amber-500" }
                          ].map((route, i) => (
                            <div key={i} className="space-y-1 text-[10px]">
                              <div className="flex justify-between font-semibold">
                                <span>{route.name}</span>
                                <span>{route.progress}</span>
                              </div>
                              <div className="w-full bg-slate-100 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                                <div className={`${route.color} h-full rounded-full`} style={{ width: route.progress }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* APP 3: COLLECTION APP */}
                  {activeApp === "collection" && (
                    <div className="space-y-3.5 text-xs h-full flex flex-col justify-between">
                      
                      {!isSaved ? (
                        <div className="space-y-3 flex-grow">
                          <div className="pb-1.5 border-b dark:border-zinc-850 font-bold text-gray-500">
                            {tSim.collectionAppTitle}
                          </div>

                          <div className="space-y-2.5">
                            {/* Member code */}
                            <div>
                              <label className="block text-[9px] uppercase text-gray-400 mb-1 font-semibold">{tSim.farmerIdLabel}</label>
                              <div className="w-full bg-white dark:bg-zinc-900 border dark:border-zinc-850 p-2 rounded-lg font-bold flex justify-between items-center">
                                <span>104</span>
                                <span className="text-[10px] text-[#1E94A4] font-medium">अमित चव्हाण (Cow)</span>
                              </div>
                            </div>

                            {/* Weight */}
                            <div>
                              <label className="block text-[9px] uppercase text-gray-400 mb-1 font-semibold">{tSim.weightLabel}</label>
                              <div className="w-full bg-white dark:bg-zinc-900 border dark:border-zinc-850 p-2 rounded-lg font-mono text-sm font-bold flex justify-between items-center text-[#1E94A4]">
                                <span>8.50 kg</span>
                                <span className="text-[9px] bg-[#1E94A4]/15 px-1.5 py-0.5 rounded text-xs font-sans font-bold">Auto</span>
                              </div>
                            </div>

                            {/* Fat & SNF */}
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <label className="block text-[9px] uppercase text-gray-400 mb-1 font-semibold">{tSim.fatLabel} %</label>
                                <div className="w-full bg-white dark:bg-zinc-900 border dark:border-zinc-850 p-2 rounded-lg font-bold">
                                  4.5
                                </div>
                              </div>
                              <div>
                                <label className="block text-[9px] uppercase text-gray-400 mb-1 font-semibold">{tSim.snfLabel} %</label>
                                <div className="w-full bg-white dark:bg-zinc-900 border dark:border-zinc-850 p-2 rounded-lg font-bold">
                                  8.7
                                </div>
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={handleSaveCollection}
                            disabled={isSaving}
                            className="w-full py-3 bg-[#1E94A4] hover:bg-[#0B7989] text-white font-bold rounded-xl shadow-md transition-all mt-4 flex items-center justify-center gap-2"
                          >
                            {isSaving ? (
                              <>
                                <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>{tSim.saving}</span>
                              </>
                            ) : (
                              <span>{tSim.btnSave}</span>
                            )}
                          </button>
                        </div>
                      ) : (
                        // Saved screen view
                        <div className="flex-grow flex flex-col justify-center items-center text-center space-y-4 py-6 animate-scaleIn">
                          <div className="w-14 h-14 bg-green-500/10 text-green-500 border border-green-500/20 rounded-full flex items-center justify-center shadow-lg shadow-green-500/10">
                            <Check className="w-8 h-8 stroke-[3px]" />
                          </div>
                          
                          <div className="space-y-1.5">
                            <h4 className="text-sm font-black text-gray-900 dark:text-white">{tSim.saved}</h4>
                            <p className="text-[10px] text-gray-400 dark:text-zinc-500">{tSim.saveStatusMsg}</p>
                          </div>

                          {/* Sound Announcement Visualizer */}
                          {showAnnouncement && (
                            <div className="w-full bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100/50 dark:border-indigo-900/30 p-3 rounded-2xl space-y-2 animate-fadeIn">
                              <div className="flex items-center justify-center gap-1.5 text-indigo-500 font-bold text-[10px]">
                                <Volume2 className="w-4 h-4 animate-bounce" />
                                <span>{tSim.announcementTitle}</span>
                              </div>
                              <p className="text-[11px] text-indigo-950 dark:text-indigo-200 font-serif leading-relaxed italic p-1.5 bg-white dark:bg-zinc-900 rounded-lg border dark:border-zinc-800">
                                {language === "mr" 
                                  ? "📣 \"सभासद अमित चव्हाण, दूध ८.५ लिटर, फॅट ४.५%, रक्कम ₹ ३२३.०० जमा!\""
                                  : "📣 \"Member Amit Chavan, Milk 8.5 Ltrs, FAT 4.5%, Amount ₹ 323.00 deposited!\""}
                              </p>
                            </div>
                          )}

                          <button
                            onClick={handleResetCollection}
                            className="px-5 py-2 border border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-900 rounded-xl text-xs font-semibold text-gray-600 dark:text-zinc-300 transition-colors"
                          >
                            {tSim.resetBtn}
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                </div>

                {/* Simulated Speaker / Screen Bottom Bar */}
                <div className="bg-slate-100 dark:bg-zinc-900 h-10 border-t border-slate-200/50 dark:border-zinc-800/50 flex items-center justify-center">
                  <div className="w-20 h-1.5 bg-gray-400 dark:bg-zinc-700 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
