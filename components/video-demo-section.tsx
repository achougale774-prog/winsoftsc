"use client"

import { useState } from "react"
import { Play, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function VideoDemoSection() {
  const { language } = useLanguage()
  const [playing, setPlaying] = useState(false)

  // Replace this with your actual YouTube video ID
  const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"

  const heading = language === "mr"
    ? "Software कसं काम करतं ते बघा"
    : language === "hi"
    ? "देखें सॉफ्टवेयर कैसे काम करता है"
    : language === "kn"
    ? "ಸಾಫ್ಟ್‌ವೇರ್ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ಎಂದು ನೋಡಿ"
    : "See How Our Software Works"

  const subheading = language === "mr"
    ? "2 मिनिटांच्या demo मध्ये बघा — दूध संकलन, billing, आणि reports कसे होतात."
    : language === "hi"
    ? "2 मिनट के डेमो में देखें — दूध संग्रह, बिलिंग और रिपोर्ट कैसे होती है।"
    : language === "kn"
    ? "2 ನಿಮಿಷದ ಡೆಮೋದಲ್ಲಿ ನೋಡಿ — ಹಾಲು ಸಂಗ್ರಹ, ಬಿಲ್ಲಿಂಗ್ ಮತ್ತು ವರದಿಗಳು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ."
    : "Watch a 2-minute demo — see milk collection, billing, and reports in action."

  const features = language === "mr"
    ? [
        "दूध संकलन — FAT/SNF automatic",
        "शेतकरी passbook mobile वर",
        "10 दिवसांचे bill automatic",
        "Admin dashboard — real-time reports",
        "Marathi मध्ये voice announcement",
      ]
    : [
        "Milk collection with FAT/SNF auto-testing",
        "Farmer passbook on mobile app",
        "Automatic 10-day billing",
        "Admin dashboard with real-time reports",
        "Multilingual voice announcements",
      ]

  const watchLabel = language === "mr" ? "Demo Video बघा" : language === "hi" ? "डेमो वीडियो देखें" : "Watch Demo Video"
  const scheduleLabel = language === "mr" ? "Live Demo बुक करा" : language === "hi" ? "लाइव डेमो बुक करें" : "Book Live Demo"

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 text-[#1E94A4] text-xs font-sans font-bold mb-4 border border-[#1E94A4]/20">
              ▶️ {language === "mr" ? "Product Demo" : "Product Demo"}
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-4 leading-tight">
              {heading}
            </h2>
            <p className="text-gray-600 dark:text-zinc-400 font-serif mb-8 text-lg leading-relaxed">
              {subheading}
            </p>

            {/* Feature list */}
            <ul className="space-y-3 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-zinc-300 font-serif text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#1E94A4] flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setPlaying(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1E94A4] to-[#22d3ee] text-white font-bold rounded-2xl hover:from-[#0B7989] hover:to-[#1E94A4] transition-all shadow-lg hover:shadow-[#1E94A4]/25"
              >
                <Play className="w-5 h-5 fill-white" />
                {watchLabel}
              </button>
              <Link href="/schedule-demo">
                <Button variant="outline" className="w-full sm:w-auto px-6 py-3 rounded-2xl border-[#1E94A4]/30 text-[#1E94A4] hover:bg-[#1E94A4]/5 font-bold">
                  {scheduleLabel}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right — Video */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-zinc-800 aspect-video bg-gray-900">
              {!playing ? (
                // Thumbnail with play button
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0B7989] to-[#1E94A4]">
                  {/* Decorative circles */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-32 h-32 rounded-full border-4 border-white" />
                    <div className="absolute bottom-4 right-4 w-48 h-48 rounded-full border-4 border-white" />
                  </div>

                  {/* Center content */}
                  <div className="text-center z-10">
                    <button
                      onClick={() => setPlaying(true)}
                      className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 mx-auto mb-4 shadow-2xl"
                      aria-label="Play demo video"
                    >
                      <Play className="w-8 h-8 fill-white text-white ml-1" />
                    </button>
                    <p className="text-white font-sans font-bold text-lg">
                      {language === "mr" ? "Demo Video बघा" : "Watch Demo"}
                    </p>
                    <p className="text-white/70 font-serif text-sm mt-1">
                      {language === "mr" ? "२ मिनिटे" : "2 minutes"}
                    </p>
                  </div>
                </div>
              ) : (
                // Actual YouTube embed
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                  title="Winsoft Software Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800 px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-xl">
                🥛
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 dark:text-zinc-100 font-sans">
                  {language === "mr" ? "500+ संस्था वापरतात" : "500+ Societies Use This"}
                </p>
                <p className="text-xs text-gray-500 dark:text-zinc-400 font-serif">
                  {language === "mr" ? "महाराष्ट्र व कर्नाटक" : "Maharashtra & Karnataka"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
