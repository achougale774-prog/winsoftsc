"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie, X, Check } from "lucide-react"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("winsoft_cookie_consent")
    if (!consent) {
      // Show after 2 seconds
      const timer = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem("winsoft_cookie_consent", "accepted")
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem("winsoft_cookie_consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-[90] animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-zinc-700 p-5">
        {/* Close */}
        <button
          onClick={decline}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Icon + Title */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-[#1E94A4]/10 flex items-center justify-center flex-shrink-0">
            <Cookie className="w-5 h-5 text-[#1E94A4]" />
          </div>
          <p className="font-sans font-bold text-gray-900 dark:text-zinc-100 text-sm">
            We use Cookies 🍪
          </p>
        </div>

        {/* Message */}
        <p className="text-xs text-gray-600 dark:text-zinc-400 font-serif leading-relaxed mb-4">
          We use cookies to improve your experience, analyze traffic, and personalize content. By clicking "Accept", you agree to our{" "}
          <Link href="/privacy-policy" className="text-[#1E94A4] underline hover:no-underline">
            Privacy Policy
          </Link>
          .
        </p>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={accept}
            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-[#1E94A4] to-[#22d3ee] text-white text-xs font-bold rounded-xl hover:from-[#0B7989] hover:to-[#1E94A4] transition-all"
          >
            <Check className="w-3.5 h-3.5" />
            Accept All
          </button>
          <button
            onClick={decline}
            className="flex-1 px-4 py-2.5 border border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-zinc-400 text-xs font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
