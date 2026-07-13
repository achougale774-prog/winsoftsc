"use client"

import { useState, useRef, useEffect } from "react"
import { Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

interface CallNowButtonProps {
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  text?: string
}

export function CallNowButton({ className, variant, size, text }: CallNowButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const buttonText = text || (language === 'mr' ? 'कॉल करा' : 'Call Now')

  return (
    <div className="relative inline-block w-full" ref={menuRef}>
      <Button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        variant={variant}
        size={size}
        className={`w-full flex items-center justify-center gap-1.5 ${className}`}
      >
        <span>📞 {buttonText}</span>
        <ChevronDown className="w-3.5 h-3.5 opacity-80" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 left-0 mt-2 z-50 min-w-[220px] bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-2xl p-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
          <a
            href="tel:+919423039902"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors font-semibold"
          >
            <Phone className="w-4 h-4 text-green-500 fill-green-500/20" />
            <div className="text-left">
              <p className="text-[10px] text-gray-400 uppercase tracking-wider leading-none mb-1">Sales / Owner</p>
              <p className="text-xs font-serif font-bold text-gray-800 dark:text-zinc-100 leading-none">+91 94230 39902</p>
            </div>
          </a>
          <div className="h-px bg-gray-100 dark:bg-zinc-800 my-1" />
          <a
            href="tel:+919011064471"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors font-semibold"
          >
            <Phone className="w-4 h-4 text-[#1E94A4] fill-[#1E94A4]/20" />
            <div className="text-left">
              <p className="text-[10px] text-gray-400 uppercase tracking-wider leading-none mb-1">Office</p>
              <p className="text-xs font-serif font-bold text-gray-800 dark:text-zinc-100 leading-none">+91 90110 64471</p>
            </div>
          </a>
        </div>
      )}
    </div>
  )
}
