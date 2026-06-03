"use client"

import { useState, useEffect } from "react"
import { Bell, X, BellOff } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

// ─── OneSignal Loader (runs only when App ID is configured) ──────────────────
const ONESIGNAL_APP_ID = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID || ""

export function OneSignalLoader() {
  useEffect(() => {
    if (!ONESIGNAL_APP_ID) return
    if (typeof window === "undefined") return
    if ((window as any).OneSignalDeferred) return

    ;(window as any).OneSignalDeferred = []
    ;(window as any).OneSignalDeferred.push(async (OneSignal: any) => {
      await OneSignal.init({
        appId: ONESIGNAL_APP_ID,
        notifyButton: { enable: false },
        allowLocalhostAsSecureOrigin: true,
      })
    })

    const script = document.createElement("script")
    script.src = "https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
    script.defer = true
    document.head.appendChild(script)
  }, [])

  return null
}

// ─── Push Notification Prompt ─────────────────────────────────────────────────
export function PushNotificationPrompt() {
  const [show, setShow] = useState(false)
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    if (typeof window === "undefined") return
    if (!("Notification" in window)) return

    // Already dismissed or subscribed this session
    if (sessionStorage.getItem("ws_notif_done") === "1") return

    // Already browser-granted — no need to ask again
    if (Notification.permission === "granted") {
      sessionStorage.setItem("ws_notif_done", "1")
      return
    }

    // User already denied — don't ask
    if (Notification.permission === "denied") return

    // Show prompt after 8 seconds
    const timer = setTimeout(() => setShow(true), 8000)
    return () => clearTimeout(timer)
  }, [])

  const sendWelcome = () => {
    if (Notification.permission !== "granted") return
    const msgs: Record<string, { title: string; body: string }> = {
      mr: { title: "Winsoft Software ✅", body: "धन्यवाद! नवीन offers आणि updates तुम्हाला मिळत राहतील." },
      hi: { title: "Winsoft Software ✅", body: "धन्यवाद! नए offers और updates आपको मिलते रहेंगे।" },
      kn: { title: "Winsoft Software ✅", body: "ಧನ್ಯವಾದ! ನಿಮಗೆ ಹೊಸ ಆಫರ್‌ಗಳು ಮತ್ತು ಅಪ್‌ಡೇಟ್‌ಗಳು ಸಿಗುತ್ತಲೇ ಇರುತ್ತವೆ." },
      en: { title: "Winsoft Software ✅", body: "Thank you! You'll get new offers and software updates." },
    }
    const m = msgs[language] || msgs.en
    try {
      new Notification(m.title, {
        body: m.body,
        icon: "/winsoftlogo.jpg",
        tag: "winsoft-welcome",
        requireInteraction: false,
      })
    } catch (e) {
      console.warn("Notification failed:", e)
    }
  }

  const handleAllow = async () => {
    setLoading(true)
    try {
      const result = await Notification.requestPermission()
      if (result === "granted") {
        setDone(true)
        // Small delay so user sees "Subscribed!" then welcome notification
        setTimeout(() => {
          sendWelcome()
          setShow(false)
        }, 800)
      } else {
        setShow(false)
      }
    } catch (err) {
      console.error("Notification permission error:", err)
      setShow(false)
    } finally {
      setLoading(false)
      sessionStorage.setItem("ws_notif_done", "1")
    }
  }

  const dismiss = () => {
    setShow(false)
    sessionStorage.setItem("ws_notif_done", "1")
  }

  if (!show) return null

  const text: Record<string, { title: string; desc: string; allow: string; skip: string }> = {
    mr: {
      title: "🔔 Notifications चालू करा",
      desc: "Winsoft चे नवीन offers, software updates आणि dairy news — थेट browser मध्ये मिळवा.",
      allow: done ? "✅ Subscribed!" : loading ? "Wait..." : "Allow करा",
      skip: "नको",
    },
    hi: {
      title: "🔔 Notifications चालू करें",
      desc: "Winsoft के नए offers, updates और dairy news — browser में सीधे पाएं।",
      allow: done ? "✅ Subscribed!" : loading ? "Wait..." : "Allow करें",
      skip: "नहीं",
    },
    kn: {
      title: "🔔 Notifications ಚಾಲೂ ಮಾಡಿ",
      desc: "Winsoft ನ ಹೊಸ offers, updates ಮತ್ತು dairy news — browser ನಲ್ಲಿ ನೇರವಾಗಿ ಪಡೆಯಿರಿ.",
      allow: done ? "✅ Subscribed!" : loading ? "Wait..." : "Allow ಮಾಡಿ",
      skip: "ಬೇಡ",
    },
    en: {
      title: "🔔 Enable Notifications",
      desc: "Get Winsoft offers, software updates and dairy news directly in your browser.",
      allow: done ? "✅ Subscribed!" : loading ? "Wait..." : "Allow",
      skip: "No thanks",
    },
  }

  const c = text[language] || text.en

  return (
    <div className="fixed bottom-24 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-xs z-[85] animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden">
        {/* Top color bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#1E94A4] to-[#22d3ee]" />

        <div className="p-5 relative">
          {/* Close */}
          <button
            onClick={dismiss}
            className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-400 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Icon + Title */}
          <div className="flex items-center gap-3 mb-2 pr-6">
            <div className="w-9 h-9 rounded-xl bg-[#1E94A4]/10 flex items-center justify-center flex-shrink-0">
              <Bell className="w-5 h-5 text-[#1E94A4]" />
            </div>
            <p className="font-bold text-gray-900 dark:text-zinc-100 text-sm">{c.title}</p>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-500 dark:text-zinc-400 mb-4 leading-relaxed pl-12">
            {c.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4 pl-12">
            {["🎯 Offers", "📰 Updates", "🥛 Dairy News"].map((tag) => (
              <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 bg-[#1E94A4]/10 text-[#1E94A4] rounded-full border border-[#1E94A4]/20">
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleAllow}
              disabled={loading || done}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-[#1E94A4] to-[#22d3ee] text-white text-xs font-bold rounded-xl hover:from-[#0B7989] hover:to-[#1E94A4] transition-all disabled:opacity-60 shadow-md shadow-[#1E94A4]/20"
            >
              <Bell className="w-3.5 h-3.5" />
              {c.allow}
            </button>
            <button
              onClick={dismiss}
              className="px-3 py-2.5 border border-gray-200 dark:border-zinc-700 text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800 text-xs font-semibold rounded-xl transition-all"
              title={c.skip}
            >
              <BellOff className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-center text-[10px] text-gray-300 dark:text-zinc-700 mt-2.5">
            {language === "mr" ? "Browser settings मधून कधीही बंद करता येतं"
              : language === "hi" ? "Browser settings से कभी भी बंद करें"
              : "Unsubscribe anytime from browser settings"}
          </p>
        </div>
      </div>
    </div>
  )
}
