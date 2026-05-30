"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-24 right-6 z-[80] w-11 h-11 rounded-full bg-[#1E94A4] text-white shadow-lg hover:bg-[#0B7989] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center animate-in fade-in zoom-in-75 duration-300"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}
