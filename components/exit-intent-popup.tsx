"use client"

import { useState, useEffect } from "react"
import { X, Loader2, Phone, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { toast } from "sonner"

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    // Don't show if already submitted or dismissed this session
    if (sessionStorage.getItem("ws_exit_done") === "1") return

    let triggered = false

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse moves to top of page (about to close tab)
      if (e.clientY <= 10 && !triggered) {
        triggered = true
        // Small delay so it doesn't feel jarring
        setTimeout(() => setVisible(true), 200)
      }
    }

    // Only on desktop — mobile doesn't have mouse leave
    if (window.innerWidth >= 768) {
      document.addEventListener("mouseleave", handleMouseLeave)
    }

    // Mobile: show after 45 seconds of inactivity
    let mobileTimer: NodeJS.Timeout
    if (window.innerWidth < 768) {
      mobileTimer = setTimeout(() => {
        if (!triggered && sessionStorage.getItem("ws_exit_done") !== "1") {
          triggered = true
          setVisible(true)
        }
      }, 45000)
    }

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(mobileTimer)
    }
  }, [])

  const dismiss = () => {
    setVisible(false)
    sessionStorage.setItem("ws_exit_done", "1")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[0-9]{10}$/.test(phone.replace(/\s/g, ""))) {
      toast.error(language === "mr" ? "10 अंकी नंबर टाका" : "Enter valid 10-digit number")
      return
    }
    setLoading(true)
    try {
      await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([{
          name: name.trim() || "Exit Intent Lead",
          email: `${phone}@exit.winsoft.in`,
          phone: phone.replace(/\s/g, ""),
          company: "Exit Intent Lead",
          inquiry_type: "Exit Intent Popup",
          message: `Exit intent lead | Language: ${language.toUpperCase()}`,
          status: "new",
        }]),
      })
      toast.success(language === "mr" ? "✅ आमची टीम लवकरच call करेल!" : "✅ Our team will call you shortly!")
      sessionStorage.setItem("ws_exit_done", "1")
      setVisible(false)
    } catch {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (!visible) return null

  const content = {
    mr: {
      badge: "थांबा एक मिनिट!",
      title: "जाण्यापूर्वी मोफत सल्ला मिळवा",
      subtitle: "फक्त नाव आणि नंबर द्या — आमची टीम तुम्हाला call करेल आणि आमचे expert मार्गदर्शन करतील.",
      namePh: "तुमचे नाव",
      phonePh: "मोबाईल नंबर",
      btn: "Free Call Back मागवा",
      skip: "नको, मी जातो",
      offer: "🎁 आजच संपर्क करा — मोफत मार्गदर्शन मिळेल",
    },
    hi: {
      badge: "रुकिए एक मिनट!",
      title: "जाने से पहले मुफ़्त सलाह लें",
      subtitle: "बस नाम और नंबर दें — हमारी टीम आपको call करेगी और मदद करेगी।",
      namePh: "आपका नाम",
      phonePh: "मोबाइल नंबर",
      btn: "Free Call Back मांगें",
      skip: "नहीं, जाना है",
      offer: "🎁 आज ही संपर्क करें — मुफ़्त सलाह पाएं",
    },
    en: {
      badge: "Wait — Before You Go!",
      title: "Get Free Consultation Before You Leave",
      subtitle: "Just your name and number — our team will call you back shortly.",
      namePh: "Your name",
      phonePh: "Mobile number",
      btn: "Request Free Call Back",
      skip: "No thanks",
      offer: "🎁 Contact today — Get free expert guidance",
    },
  }

  const c = content[language as keyof typeof content] || content.en

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">

        {/* Top gradient */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#1E94A4] via-[#22d3ee] to-[#0B7989]" />

        {/* Close */}
        <button onClick={dismiss}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-500 transition-all z-10">
          <X className="w-4 h-4" />
        </button>

        <div className="p-7">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-xs font-bold mb-4 animate-bounce">
            <Sparkles className="w-3.5 h-3.5" />
            {c.badge}
          </div>

          <h2 className="text-xl font-black text-gray-900 dark:text-zinc-100 mb-2 leading-tight">{c.title}</h2>
          <p className="text-sm text-gray-500 dark:text-zinc-400 mb-5 leading-relaxed">{c.subtitle}</p>

          {/* Offer strip */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl px-4 py-2.5 mb-5 text-sm font-semibold text-amber-700 dark:text-amber-400">
            {c.offer}
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder={c.namePh}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl text-sm outline-none focus:border-[#1E94A4] focus:ring-2 focus:ring-[#1E94A4]/20 transition-all"
            />
            <input
              type="tel"
              required
              maxLength={10}
              value={phone}
              onChange={e => setPhone(e.target.value.replace(/\D/g, ""))}
              placeholder={c.phonePh}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl text-sm outline-none focus:border-[#1E94A4] focus:ring-2 focus:ring-[#1E94A4]/20 transition-all font-mono tracking-widest"
            />
            <button type="submit" disabled={loading || phone.length < 10}
              className="w-full py-3.5 bg-gradient-to-r from-[#1E94A4] to-[#22d3ee] hover:from-[#0B7989] hover:to-[#1E94A4] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-[#1E94A4]/30 disabled:opacity-50 flex items-center justify-center gap-2">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Phone className="w-4 h-4" />}
              {loading ? (language === "mr" ? "जतन करत आहे..." : "Saving...") : c.btn}
            </button>
          </form>

          <button onClick={dismiss}
            className="w-full mt-3 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors py-1">
            {c.skip} →
          </button>
        </div>
      </div>
    </div>
  )
}
