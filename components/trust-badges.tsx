"use client"

import { useLanguage } from "@/components/language-provider"
import { ShieldCheck, Award, Users, Clock, MapPin, Headphones } from "lucide-react"

export function TrustBadges() {
  const { language } = useLanguage()

  const badges = [
    {
      icon: Clock,
      color: "bg-[#1E94A4]/10 dark:bg-[#1E94A4]/20 text-[#1E94A4] dark:text-[#22d3ee]",
      border: "border-[#1E94A4]/20 dark:border-[#1E94A4]/30",
      labelMr: "१९९८ पासून",
      labelEn: "Since 1998",
      subMr: "२५+ वर्षांचा अनुभव",
      subEn: "25+ Years Experience",
    },
    {
      icon: ShieldCheck,
      color: "bg-[#0B7989]/10 dark:bg-[#0B7989]/20 text-[#0B7989] dark:text-[#22d3ee]",
      border: "border-[#0B7989]/20 dark:border-[#0B7989]/30",
      labelMr: "ISO Certified",
      labelEn: "ISO Certified",
      subMr: "दर्जेदार सेवा",
      subEn: "Quality Assured",
    },
    {
      icon: Users,
      color: "bg-[#22d3ee]/10 dark:bg-[#22d3ee]/10 text-[#1E94A4] dark:text-[#22d3ee]",
      border: "border-[#22d3ee]/30 dark:border-[#22d3ee]/20",
      labelMr: "५००+ ग्राहक",
      labelEn: "500+ Clients",
      subMr: "संपूर्ण भारतात",
      subEn: "Across India",
    },
    {
      icon: Award,
      color: "bg-[#1E94A4]/10 dark:bg-[#1E94A4]/20 text-[#0B7989] dark:text-[#22d3ee]",
      border: "border-[#1E94A4]/20 dark:border-[#1E94A4]/30",
      labelMr: "Made in India 🇮🇳",
      labelEn: "Made in India 🇮🇳",
      subMr: "Kolhapur, Maharashtra",
      subEn: "Kolhapur, Maharashtra",
    },
    {
      icon: Headphones,
      color: "bg-[#1E94A4]/10 dark:bg-[#1E94A4]/20 text-[#1E94A4] dark:text-[#22d3ee]",
      border: "border-[#1E94A4]/20",
      labelMr: "Free Training",
      labelEn: "Free Training",
      subMr: "Installation सह",
      subEn: "With Installation",
    },
    {
      icon: MapPin,
      color: "bg-[#0B7989]/10 dark:bg-[#0B7989]/20 text-[#0B7989] dark:text-[#22d3ee]",
      border: "border-[#0B7989]/20 dark:border-[#0B7989]/30",
      labelMr: "On-Site Support",
      labelEn: "On-Site Support",
      subMr: "१५+ जिल्हे",
      subEn: "15+ Districts",
    },
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950 border-y border-gray-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((b, i) => {
            const Icon = b.icon
            return (
              <div
                key={i}
                className={`flex flex-col items-center text-center p-4 rounded-2xl border ${b.border} hover:shadow-md transition-all hover:-translate-y-0.5`}
              >
                <div className={`w-10 h-10 rounded-xl ${b.color} flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-sm font-bold text-gray-900 dark:text-zinc-100 leading-tight">
                  {language === "mr" ? b.labelMr : b.labelEn}
                </p>
                <p className="text-xs text-gray-500 dark:text-zinc-400 mt-0.5">
                  {language === "mr" ? b.subMr : b.subEn}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
