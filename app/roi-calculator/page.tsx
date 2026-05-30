"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calculator, TrendingUp, Clock, IndianRupee, Users, Milk } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ROICalculatorPage() {
  const [members, setMembers] = useState(200)
  const [dailyLiters, setDailyLiters] = useState(1000)
  const [manualStaff, setManualStaff] = useState(3)
  const [staffSalary, setStaffSalary] = useState(12000)

  const results = useMemo(() => {
    // Time savings: 2 hrs/day manual → 15 min with software
    const dailyTimeSavedHrs = 1.75
    const monthlyTimeSavedHrs = dailyTimeSavedHrs * 30

    // Staff cost savings (1 staff member can be redeployed)
    const monthlySalarySaved = staffSalary * 1

    // Error reduction: avg 0.5% billing errors on daily liters × ₹30/liter
    const monthlyErrorSaved = dailyLiters * 0.005 * 30 * 30

    // Farmer trust / retention value (estimated)
    const retentionValue = members * 50

    const totalMonthlySaving = monthlySalarySaved + monthlyErrorSaved + retentionValue
    const annualSaving = totalMonthlySaving * 12

    // Winsoft software cost estimate
    const softwareCost = 25000
    const roiMonths = Math.ceil(softwareCost / totalMonthlySaving)

    return {
      monthlyTimeSavedHrs: Math.round(monthlyTimeSavedHrs),
      monthlySalarySaved,
      monthlyErrorSaved: Math.round(monthlyErrorSaved),
      retentionValue,
      totalMonthlySaving: Math.round(totalMonthlySaving),
      annualSaving: Math.round(annualSaving),
      roiMonths,
    }
  }, [members, dailyLiters, manualStaff, staffSalary])

  const formatINR = (n: number) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50 dark:bg-zinc-950">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 text-[#1E94A4] text-xs font-sans font-bold mb-4 border border-[#1E94A4]/20">
            <Calculator className="w-4 h-4" />
            ROI Calculator
          </div>
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-4">
            तुमच्या संस्थेत किती बचत होईल?
          </h1>
          <p className="text-xl text-gray-600 dark:text-zinc-400 font-serif max-w-2xl mx-auto">
            खाली तुमच्या संस्थेची माहिती टाका — Winsoft software मुळे दर महिन्याला किती पैसे आणि वेळ वाचेल ते बघा.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-gray-200 dark:border-zinc-800 p-8 shadow-sm">
            <h2 className="text-xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
              <Milk className="w-5 h-5 text-[#1E94A4]" />
              तुमच्या संस्थेची माहिती
            </h2>

            <div className="space-y-6">
              {/* Members */}
              <div>
                <label className="flex items-center justify-between text-sm font-bold text-gray-700 dark:text-zinc-300 mb-2 font-sans">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#1E94A4]" />
                    एकूण सभासद (Members)
                  </span>
                  <span className="text-[#1E94A4] text-lg">{members}</span>
                </label>
                <input
                  type="range"
                  min={50}
                  max={2000}
                  step={50}
                  value={members}
                  onChange={(e) => setMembers(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-zinc-700 rounded-full appearance-none cursor-pointer accent-[#1E94A4]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1 font-serif">
                  <span>50</span><span>2000</span>
                </div>
              </div>

              {/* Daily Liters */}
              <div>
                <label className="flex items-center justify-between text-sm font-bold text-gray-700 dark:text-zinc-300 mb-2 font-sans">
                  <span className="flex items-center gap-2">
                    <Milk className="w-4 h-4 text-[#1E94A4]" />
                    दैनिक दूध संकलन (Liters)
                  </span>
                  <span className="text-[#1E94A4] text-lg">{dailyLiters.toLocaleString("en-IN")}</span>
                </label>
                <input
                  type="range"
                  min={200}
                  max={20000}
                  step={200}
                  value={dailyLiters}
                  onChange={(e) => setDailyLiters(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-zinc-700 rounded-full appearance-none cursor-pointer accent-[#1E94A4]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1 font-serif">
                  <span>200 L</span><span>20,000 L</span>
                </div>
              </div>

              {/* Staff */}
              <div>
                <label className="flex items-center justify-between text-sm font-bold text-gray-700 dark:text-zinc-300 mb-2 font-sans">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#1E94A4]" />
                    Manual Staff संख्या
                  </span>
                  <span className="text-[#1E94A4] text-lg">{manualStaff}</span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={manualStaff}
                  onChange={(e) => setManualStaff(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-zinc-700 rounded-full appearance-none cursor-pointer accent-[#1E94A4]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1 font-serif">
                  <span>1</span><span>10</span>
                </div>
              </div>

              {/* Salary */}
              <div>
                <label className="flex items-center justify-between text-sm font-bold text-gray-700 dark:text-zinc-300 mb-2 font-sans">
                  <span className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-[#1E94A4]" />
                    प्रति Staff पगार (₹/महिना)
                  </span>
                  <span className="text-[#1E94A4] text-lg">{formatINR(staffSalary)}</span>
                </label>
                <input
                  type="range"
                  min={8000}
                  max={30000}
                  step={1000}
                  value={staffSalary}
                  onChange={(e) => setStaffSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-zinc-700 rounded-full appearance-none cursor-pointer accent-[#1E94A4]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1 font-serif">
                  <span>₹8,000</span><span>₹30,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="space-y-4">
            {/* Main Savings Card */}
            <div className="bg-gradient-to-br from-[#1E94A4] to-[#0B7989] rounded-3xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5" />
                <span className="font-sans font-bold text-sm opacity-80">दर महिन्याची बचत</span>
              </div>
              <div className="text-5xl font-sans font-black mb-1">
                {formatINR(results.totalMonthlySaving)}
              </div>
              <p className="text-white/70 font-serif text-sm">
                वार्षिक बचत: <strong className="text-white">{formatINR(results.annualSaving)}</strong>
              </p>
            </div>

            {/* ROI Months */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-sans font-bold text-gray-900 dark:text-zinc-100">
                  {results.roiMonths} महिन्यांत
                </p>
                <p className="text-sm text-gray-500 dark:text-zinc-400 font-serif">
                  Software चा खर्च वसूल होईल (ROI)
                </p>
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 p-5 space-y-3">
              <h3 className="font-sans font-bold text-gray-900 dark:text-zinc-100 text-sm mb-4">बचतीचे विश्लेषण</h3>
              {[
                { label: "Staff खर्च बचत", value: results.monthlySalarySaved, emoji: "👥" },
                { label: "Billing Error बचत", value: results.monthlyErrorSaved, emoji: "📋" },
                { label: "Farmer Retention Value", value: results.retentionValue, emoji: "🤝" },
                { label: "वेळ बचत (तास/महिना)", value: results.monthlyTimeSavedHrs, isHours: true, emoji: "⏰" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-zinc-800 last:border-0">
                  <span className="text-sm text-gray-600 dark:text-zinc-400 font-serif flex items-center gap-2">
                    <span>{item.emoji}</span>
                    {item.label}
                  </span>
                  <span className="font-sans font-bold text-[#1E94A4] text-sm">
                    {item.isHours ? `${item.value} hrs` : formatINR(item.value)}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/schedule-demo" className="block">
              <Button className="w-full py-6 text-base font-bold rounded-2xl bg-gradient-to-r from-[#1E94A4] to-[#22d3ee] hover:from-[#0B7989] hover:to-[#1E94A4] text-white shadow-lg hover:shadow-[#1E94A4]/25 transition-all">
                Free Demo बुक करा — आजच सुरुवात करा
              </Button>
            </Link>
            <p className="text-center text-xs text-gray-400 dark:text-zinc-600 font-serif">
              * हे अंदाजे आकडे आहेत. प्रत्यक्ष बचत संस्थेनुसार वेगळी असू शकते.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
