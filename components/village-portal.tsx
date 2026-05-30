"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Volume2, MessageCircle, Info, PhoneCall } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { speakText } from "@/lib/utils"
import { toast } from "sonner"
import Link from "next/link"

export function VillagePortal() {
  const { t, language } = useLanguage()

  const playAudioHelp = () => {
    let text = ""
    let toastMsg = ""
    if (language === 'mr') {
      text = "विनसॉफ्ट डेअरी सॉफ्टवेअरमध्ये आपले स्वागत आहे. हे सॉफ्टवेअर वापरणे अतिशय सोपे आहे. दुधाची नोंद करण्यासाठी फक्त फॅट आणि वजन टाका, बिल आपोआप तयार होईल."
      toastMsg = "माहिती बोलत आहे..."
    } else if (language === 'kn') {
      text = "ವಿನ್ಸಾಫ್ಟ್ ಡೈರಿ ಸಾಫ್ಟ್‌ವೇರ್‌ಗೆ ಸುಸ್ವಾಗತ. ಈ ಸಾಫ್ಟ್‌ವೇರ್ ಬಳಸಲು ತುಂಬಾ ಸುಲಭ."
      toastMsg = "ಮಾಹಿತಿ ಹೇಳಲಾಗುತ್ತಿದೆ..."
    } else {
      text = "Welcome to Winsoft Dairy Software. This software is very easy to use. To record milk, just enter fat and weight, and the bill will be generated automatically."
      toastMsg = "Speaking information..."
    }
    toast.info(toastMsg)
    speakText(text, language)
  }

  const cards = [
    {
      icon: Volume2,
      iconBg: "bg-[#0B7989]/10 dark:bg-[#0B7989]/30",
      iconColor: "text-[#0B7989] dark:text-[#22d3ee]",
      title: t("home.voiceHelpTitle"),
      desc: t("home.voiceHelpDesc"),
      onClick: playAudioHelp,
      href: null,
    },
    {
      icon: MessageCircle,
      iconBg: "bg-green-100 dark:bg-green-900/40",
      iconColor: "text-green-600 dark:text-green-400",
      title: t("home.whatsappSupportTitle"),
      desc: t("home.whatsappSupportDesc"),
      onClick: null,
      href: "https://wa.me/919423039902?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Winsoft%20software.",
    },
    {
      icon: PhoneCall,
      iconBg: "bg-blue-100 dark:bg-blue-900/40",
      iconColor: "text-blue-600 dark:text-blue-400",
      title: language === 'mr' ? "थेट Call करा" : language === 'hi' ? "सीधे Call करें" : "Call Us Directly",
      desc: language === 'mr' ? "+91 94230 39902 — सोमवार ते शनिवार, सकाळी ९:३० ते ६:३०" : "+91 94230 39902 — Mon–Sat, 9:30 AM – 6:30 PM",
      onClick: null,
      href: "tel:+919423039902",
    },
    {
      icon: Info,
      iconBg: "bg-purple-100 dark:bg-purple-900/40",
      iconColor: "text-purple-600 dark:text-purple-400",
      title: language === 'mr' ? "सॉफ्टवेअर माहिती" : language === 'hi' ? "सॉफ्टवेयर जानकारी" : "Software Information",
      desc: language === 'mr' ? "आमच्या सर्व सुविधांची यादी पहा." : language === 'hi' ? "हमारी सभी सुविधाओं की सूची देखें।" : "View the full list of all our features.",
      onClick: null,
      href: "/features",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#E8F4F5] dark:from-zinc-950 dark:to-[#0B7989]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
            {t("home.villagePortalTitle")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-zinc-400">
            {t("home.villagePortalDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon
            const inner = (
              <Card
                key={i}
                className={`border border-gray-100 dark:border-zinc-800 rounded-[2rem] shadow-lg dark:shadow-none h-full
                  ${card.onClick || card.href ? "hover:scale-[1.02] transition-transform cursor-pointer" : ""}`}
                onClick={card.onClick ?? undefined}
              >
                <CardContent className="p-8 flex flex-col items-start gap-4 h-full">
                  <div className={`p-4 ${card.iconBg} rounded-2xl`}>
                    <Icon className={`w-8 h-8 ${card.iconColor}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 text-gray-900 dark:text-zinc-100">{card.title}</h4>
                    <p className="text-gray-500 dark:text-zinc-400 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </CardContent>
              </Card>
            )

            if (card.href) {
              const isExternal = card.href.startsWith("http") || card.href.startsWith("tel")
              return isExternal
                ? <a key={i} href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a>
                : <Link key={i} href={card.href}>{inner}</Link>
            }
            return <div key={i}>{inner}</div>
          })}
        </div>
      </div>
    </section>
  )
}
