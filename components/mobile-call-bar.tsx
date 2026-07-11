"use client"

import { useState, useEffect } from "react"
import { Phone, X, MessageSquare } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function MobileCallBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    // Show after scrolling 200px on mobile
    const onScroll = () => {
      if (window.scrollY > 200 && !dismissed) setVisible(true)
      else if (window.scrollY <= 200) setVisible(false)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [dismissed])

  if (dismissed || !visible) return null

  const label = {
    mr: { call: "Call करा — मोफत सल्ला", wa: "WhatsApp" },
    hi: { call: "Call करें — मुफ़्त सलाह", wa: "WhatsApp" },
    kn: { call: "Call ಮಾಡಿ — ಉಚಿತ ಸಲಹೆ", wa: "WhatsApp" },
    en: { call: "Call Now — Free Advice", wa: "WhatsApp" },
  }[language] || { call: "Call Now — Free Advice", wa: "WhatsApp" }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[55] lg:hidden animate-in slide-in-from-bottom-2 duration-300">
      <div className="bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 shadow-2xl px-4 py-3">
        <div className="flex items-center gap-2 max-w-sm mx-auto">
          {/* Call button */}
          <a href="tel:+919423039902"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#1E94A4] to-[#22d3ee] text-white font-bold text-sm rounded-xl shadow-lg shadow-[#1E94A4]/25 hover:from-[#0B7989] hover:to-[#1E94A4] transition-all active:scale-95">
            <Phone className="w-4 h-4 fill-white" />
            {label.call}
          </a>

          {/* WhatsApp button */}
          {/*
          <a href="https://wa.me/919423039902?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Winsoft%20software."
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-4 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm rounded-xl shadow-lg shadow-[#25D366]/25 transition-all active:scale-95">
            <MessageSquare className="w-4 h-4" />
            {label.wa}
          </a>
          */}

          {/* Dismiss */}
          <button onClick={() => setDismissed(true)}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors flex-shrink-0">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
