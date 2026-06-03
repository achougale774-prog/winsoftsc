"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { X, MessageSquare } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const WA_NUMBER = "919423039902"

export function WhatsAppQuickReply() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { language } = useLanguage()

  // Page-specific quick replies
  const getOptions = () => {
    const isDairy  = pathname.includes("/dairy")
    const isGold   = pathname.includes("/gold")
    const isSugar  = pathname.includes("/sugar")
    const isPrice  = pathname.includes("/pricing")

    if (language === "mr") {
      return [
        { emoji: "🥛", label: "Dairy Software Demo हवं आहे",    msg: "नमस्कार! मला Dairy Software बद्दल माहिती हवी आहे. Free Demo बुक करायचं आहे." },
        { emoji: "💎", label: "Gold Software बद्दल विचारायचं आहे", msg: "नमस्कार! मला Goldwin Software बद्दल माहिती हवी आहे." },
        { emoji: "🏭", label: "Sugar Factory ERP बद्दल",         msg: "नमस्कार! मला Sugar Factory ERP बद्दल माहिती हवी आहे." },
        { emoji: "💰", label: "Pricing जाणून घ्यायची आहे",       msg: "नमस्कार! मला Winsoft software ची किंमत जाणून घ्यायची आहे." },
        { emoji: "📞", label: "Call Back मागवायचं आहे",          msg: "नमस्कार! मला Winsoft team कडून call back हवं आहे." },
      ]
    } else if (language === "hi") {
      return [
        { emoji: "🥛", label: "Dairy Software Demo चाहिए",      msg: "नमस्ते! मुझे Dairy Software के बारे में जानकारी चाहिए। Free Demo बुक करना है।" },
        { emoji: "💎", label: "Gold Software के बारे में पूछना है", msg: "नमस्ते! मुझे Goldwin Software के बारे में जानकारी चाहिए।" },
        { emoji: "🏭", label: "Sugar Factory ERP के बारे में",    msg: "नमस्ते! मुझे Sugar Factory ERP के बारे में जानकारी चाहिए।" },
        { emoji: "💰", label: "Pricing जाननी है",                msg: "नमस्ते! मुझे Winsoft software की कीमत जाननी है।" },
        { emoji: "📞", label: "Call Back चाहिए",                 msg: "नमस्ते! मुझे Winsoft team से call back चाहिए।" },
      ]
    } else {
      return [
        { emoji: "🥛", label: "Dairy Software Demo",            msg: "Hello! I would like to know more about Dairy Software and book a Free Demo." },
        { emoji: "💎", label: "Gold Software Enquiry",          msg: "Hello! I would like to know more about Goldwin Software." },
        { emoji: "🏭", label: "Sugar Factory ERP",              msg: "Hello! I would like to know more about Sugar Factory ERP." },
        { emoji: "💰", label: "Pricing Information",            msg: "Hello! I would like to know the pricing for Winsoft software." },
        { emoji: "📞", label: "Request Call Back",              msg: "Hello! I would like a call back from the Winsoft team." },
      ]
    }
  }

  const options = getOptions()

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-3">

      {/* Quick reply options */}
      {open && (
        <div className="flex flex-col gap-2 animate-in slide-in-from-bottom-4 fade-in duration-200">
          {/* Header label */}
          <div className="self-end bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-2xl px-4 py-2 shadow-lg">
            <p className="text-xs font-bold text-gray-700 dark:text-zinc-300">
              {language === "mr" ? "काय विचारायचं आहे?" : language === "hi" ? "क्या पूछना है?" : "How can we help?"}
            </p>
          </div>

          {options.map((opt, i) => (
            <a
              key={i}
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(opt.msg)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="self-end flex items-center gap-2.5 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 hover:border-[#25D366] hover:bg-green-50 dark:hover:bg-green-950/20 rounded-2xl px-4 py-2.5 shadow-md hover:shadow-lg transition-all duration-200 group max-w-xs"
            >
              <span className="text-base">{opt.emoji}</span>
              <span className="text-xs font-semibold text-gray-700 dark:text-zinc-300 group-hover:text-green-700 dark:group-hover:text-green-400 leading-tight">
                {opt.label}
              </span>
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366] flex-shrink-0 ml-auto" />
            </a>
          ))}
        </div>
      )}

      {/* Main WhatsApp button */}
      <div className="relative">
        {/* Pulse ring when closed */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
        )}

        <button
          onClick={() => setOpen(!open)}
          className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center"
          aria-label="WhatsApp Quick Reply"
        >
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
