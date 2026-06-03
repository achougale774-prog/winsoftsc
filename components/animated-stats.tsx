"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/language-provider"

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatCard({ number, suffix, label, emoji, delay }: {
  number: number
  suffix: string
  label: string
  emoji: string
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const count = useCountUp(number, 2000, started)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="text-center p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-3xl mb-2">{emoji}</div>
      <div className="text-4xl font-black text-[#1E94A4] font-sans">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-500 dark:text-zinc-400 font-serif mt-1">{label}</div>
    </div>
  )
}

export function AnimatedStats() {
  const { language } = useLanguage()

  const stats = [
    {
      number: 500, suffix: "+",
      labelMr: "आनंदी ग्राहक",
      labelEn: "Happy Clients",
      emoji: "😊", delay: 0,
    },
    {
      number: 25, suffix: "+",
      labelMr: "वर्षांचा अनुभव",
      labelEn: "Years Experience",
      emoji: "🏆", delay: 100,
    },
    {
      number: 15, suffix: "+",
      labelMr: "जिल्हे",
      labelEn: "Districts Covered",
      emoji: "📍", delay: 200,
    },
    {
      number: 3, suffix: "",
      labelMr: "उद्योग क्षेत्रे",
      labelEn: "Industry Sectors",
      emoji: "🏭", delay: 300,
    },
    {
      number: 99, suffix: ".9%",
      labelMr: "Uptime",
      labelEn: "Uptime",
      emoji: "⚡", delay: 400,
    },
    {
      number: 1998, suffix: "",
      labelMr: "स्थापना वर्ष",
      labelEn: "Est. Year",
      emoji: "📅", delay: 500,
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900/50 dark:to-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 text-[#1E94A4] text-xs font-bold mb-3 border border-[#1E94A4]/20">
            📊 {language === "mr" ? "आमची कामगिरी" : language === "hi" ? "हमारी उपलब्धियां" : "Our Achievements"}
          </span>
          <h2 className="text-3xl font-sans font-bold text-gray-900 dark:text-zinc-100">
            {language === "mr" ? "संख्या बोलतात" : language === "hi" ? "संख्याएं बोलती हैं" : "Numbers Speak for Themselves"}
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s, i) => (
            <StatCard
              key={i}
              number={s.number}
              suffix={s.suffix}
              label={language === "mr" ? s.labelMr : s.labelEn}
              emoji={s.emoji}
              delay={s.delay}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
