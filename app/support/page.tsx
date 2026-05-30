"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, Monitor, Clock, CheckCircle2, Headphones, Wrench, RefreshCw } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function SupportPage() {
  const { language } = useLanguage()

  const title = language === "mr" ? "Support & Help Center" : "Support & Help Center"
  const subtitle = language === "mr"
    ? "Winsoft software साठी तुम्हाला कोणत्याही प्रकारची मदत हवी असल्यास आम्ही नेहमी तयार आहोत."
    : "We're always ready to help you with any aspect of Winsoft software."

  const channels = [
    {
      icon: Phone,
      title: language === "mr" ? "Phone Support" : "Phone Support",
      desc: language === "mr" ? "थेट आमच्या support team शी बोला" : "Talk directly with our support team",
      action: language === "mr" ? "Call करा" : "Call Now",
      href: "tel:+919423039902",
      detail: "+91 94230 39902",
      color: "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900",
      iconColor: "text-blue-600",
      btnColor: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Support",
      desc: language === "mr" ? "WhatsApp वर message पाठवा" : "Send us a message on WhatsApp",
      action: "WhatsApp",
      href: "https://wa.me/919423039902?text=Hello%2C%20I%20need%20support%20for%20Winsoft%20software.",
      detail: "+91 94230 39902",
      color: "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900",
      iconColor: "text-green-600",
      btnColor: "bg-[#25D366] hover:bg-[#1EBE5D] text-white",
    },
    {
      icon: Monitor,
      title: language === "mr" ? "Remote Desktop Support" : "Remote Desktop Support",
      desc: language === "mr" ? "आमची team तुमच्या computer वर remotely connect होऊन problem solve करते" : "Our team connects to your computer remotely to solve issues",
      action: language === "mr" ? "Request करा" : "Request Remote",
      href: "https://wa.me/919423039902?text=Hello%2C%20I%20need%20remote%20desktop%20support%20for%20Winsoft%20software.",
      detail: language === "mr" ? "TeamViewer / AnyDesk वापरतो" : "Via TeamViewer / AnyDesk",
      color: "bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-900",
      iconColor: "text-purple-600",
      btnColor: "bg-purple-600 hover:bg-purple-700 text-white",
    },
    {
      icon: Headphones,
      title: language === "mr" ? "On-Site Support" : "On-Site Support",
      desc: language === "mr" ? "आमची team तुमच्या office मध्ये येऊन support देते" : "Our team visits your office for in-person support",
      action: language === "mr" ? "Schedule करा" : "Schedule Visit",
      href: "/schedule-demo",
      detail: language === "mr" ? "Kolhapur आणि आसपासच्या भागात" : "Kolhapur & surrounding areas",
      color: "bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-900",
      iconColor: "text-amber-600",
      btnColor: "bg-amber-600 hover:bg-amber-700 text-white",
    },
  ]

  const amcFeatures = [
    language === "mr" ? "सर्व software updates मोफत" : "All software updates free",
    language === "mr" ? "Bug fixes आणि patches" : "Bug fixes and patches",
    language === "mr" ? "GST / Government regulation updates" : "GST / Government regulation updates",
    language === "mr" ? "Phone आणि WhatsApp support" : "Phone and WhatsApp support",
    language === "mr" ? "Remote desktop support" : "Remote desktop support",
    language === "mr" ? "नवीन features access" : "Access to new features",
    language === "mr" ? "Priority support queue" : "Priority support queue",
    language === "mr" ? "Annual data backup" : "Annual data backup",
  ]

  const faqs = [
    {
      q: language === "mr" ? "Support hours काय आहेत?" : "What are your support hours?",
      a: language === "mr" ? "Monday ते Saturday, सकाळी ९:३० ते संध्याकाळी ६:३०. Emergency support साठी WhatsApp वर message करा." : "Monday to Saturday, 9:30 AM to 6:30 PM. For emergencies, message us on WhatsApp.",
    },
    {
      q: language === "mr" ? "Software crash झाल्यास काय करावे?" : "What to do if the software crashes?",
      a: language === "mr" ? "लगेच +91 94230 39902 वर call करा किंवा WhatsApp करा. आमची team ३० मिनिटांत remote support देते." : "Call +91 94230 39902 or WhatsApp immediately. Our team provides remote support within 30 minutes.",
    },
    {
      q: language === "mr" ? "AMC म्हणजे काय?" : "What is AMC?",
      a: language === "mr" ? "AMC म्हणजे Annual Maintenance Contract. यात सगळे updates, bug fixes, आणि support समाविष्ट आहे. पहिल्या वर्षाचा AMC software किंमतीत समाविष्ट आहे." : "AMC stands for Annual Maintenance Contract. It includes all updates, bug fixes, and support. The first year AMC is included in the software price.",
    },
    {
      q: language === "mr" ? "Data backup कसे होते?" : "How is data backed up?",
      a: language === "mr" ? "Desktop version साठी daily automatic backup होते. Cloud version साठी real-time cloud backup असते. AMC मध्ये annual backup service समाविष्ट आहे." : "Desktop version has daily automatic backup. Cloud version has real-time cloud backup. Annual backup service is included in AMC.",
    },
    {
      q: language === "mr" ? "नवीन computer वर software transfer करता येते का?" : "Can software be transferred to a new computer?",
      a: language === "mr" ? "हो! AMC असल्यास software transfer मोफत होते. आमच्या team ला call करा, ते remote किंवा on-site येऊन transfer करतात." : "Yes! Software transfer is free with AMC. Call our team and they'll transfer it remotely or on-site.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-white dark:bg-zinc-950 border-b border-gray-100 dark:border-zinc-800 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 text-[#1E94A4] text-sm font-sans font-bold mb-6 border border-[#1E94A4]/20">
              <Headphones className="w-4 h-4" />
              {language === "mr" ? "२४/७ Support Available" : "24/7 Support Available"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">{title}</h1>
            <p className="text-xl text-gray-600 dark:text-zinc-400 font-serif leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-8 font-sans text-center">
              {language === "mr" ? "Support कसे मिळवाल?" : "How to Get Support"}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {channels.map((ch, i) => (
                <div key={i} className={`p-6 rounded-2xl border ${ch.color} flex flex-col gap-4`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-white dark:bg-zinc-950 shadow-sm`}>
                      <ch.icon className={`w-6 h-6 ${ch.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-sans font-bold text-gray-900 dark:text-zinc-100 mb-1">{ch.title}</h3>
                      <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm">{ch.desc}</p>
                      <p className="text-xs text-gray-400 dark:text-zinc-500 mt-1 font-sans">{ch.detail}</p>
                    </div>
                  </div>
                  <a href={ch.href} target={ch.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    <Button className={`w-full font-sans font-bold ${ch.btnColor}`}>
                      {ch.action}
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-12 px-4 bg-white dark:bg-zinc-950 border-y border-gray-100 dark:border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-[#1E94A4]/5 dark:bg-[#1E94A4]/10 rounded-2xl border border-[#1E94A4]/20">
              <div className="flex items-center gap-4">
                <Clock className="w-10 h-10 text-[#1E94A4]" />
                <div>
                  <h3 className="font-sans font-bold text-gray-900 dark:text-zinc-100 text-lg">
                    {language === "mr" ? "Business Hours" : "Business Hours"}
                  </h3>
                  <p className="text-gray-600 dark:text-zinc-400 font-serif">
                    {language === "mr" ? "Monday - Saturday: सकाळी ९:३० - संध्याकाळी ६:३०" : "Monday - Saturday: 9:30 AM - 6:30 PM"}
                  </p>
                  <p className="text-gray-500 dark:text-zinc-500 font-serif text-sm">
                    {language === "mr" ? "Sunday: बंद | Emergency: WhatsApp करा" : "Sunday: Closed | Emergency: WhatsApp us"}
                  </p>
                </div>
              </div>
              <a href="https://wa.me/919423039902?text=Hello%2C%20I%20need%20urgent%20support." target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans font-bold px-6 whitespace-nowrap">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  {language === "mr" ? "Emergency WhatsApp" : "Emergency WhatsApp"}
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* AMC Section */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm font-sans font-bold mb-4 border border-amber-200 dark:border-amber-800">
                  <RefreshCw className="w-4 h-4" />
                  AMC — Annual Maintenance Contract
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">
                  {language === "mr" ? "AMC मध्ये काय मिळते?" : "What's Included in AMC?"}
                </h2>
                <p className="text-gray-600 dark:text-zinc-400 font-serif mb-6 leading-relaxed">
                  {language === "mr"
                    ? "पहिल्या वर्षाचा AMC software किंमतीत समाविष्ट आहे. त्यानंतर annual renewal साठी nominal charge असतो."
                    : "The first year AMC is included in the software price. After that, a nominal annual renewal charge applies."}
                </p>
                <ul className="space-y-3">
                  {amcFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-zinc-300 font-serif text-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a href="tel:+919423039902">
                    <Button className="bg-[#1E94A4] hover:bg-[#0B7989] text-white font-sans font-bold px-8">
                      <Phone className="w-4 h-4 mr-2" />
                      {language === "mr" ? "AMC बद्दल विचारा" : "Ask About AMC"}
                    </Button>
                  </a>
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-gray-200 dark:border-zinc-800 p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Wrench className="w-8 h-8 text-[#1E94A4]" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100 font-sans">
                    {language === "mr" ? "AMC Renewal" : "AMC Renewal"}
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: language === "mr" ? "पहिले वर्ष" : "First Year", price: language === "mr" ? "Software किंमतीत समाविष्ट" : "Included in software price", highlight: true },
                    { label: language === "mr" ? "Renewal (प्रतिवर्ष)" : "Annual Renewal", price: language === "mr" ? "Contact for pricing" : "Contact for pricing", highlight: false },
                  ].map((item, i) => (
                    <div key={i} className={`p-4 rounded-xl ${item.highlight ? "bg-[#1E94A4]/10 border border-[#1E94A4]/20" : "bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700"}`}>
                      <div className="font-sans font-semibold text-gray-900 dark:text-zinc-100 text-sm">{item.label}</div>
                      <div className={`font-sans font-bold mt-1 ${item.highlight ? "text-[#1E94A4]" : "text-gray-700 dark:text-zinc-300"}`}>{item.price}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 dark:text-zinc-500 mt-4 font-serif">
                  {language === "mr" ? "* AMC renewal किंमत software version आणि modules नुसार बदलते." : "* AMC renewal price varies by software version and modules."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-8 font-sans text-center">
              {language === "mr" ? "Support बद्दल सामान्य प्रश्न" : "Support FAQs"}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-6 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800">
                  <h3 className="font-sans font-semibold text-gray-900 dark:text-zinc-100 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-500 dark:text-zinc-400 font-serif mb-4">
                {language === "mr" ? "अजून प्रश्न आहेत?" : "Still have questions?"}
              </p>
              <Link href="/faq">
                <Button variant="outline" className="border-[#1E94A4] text-[#1E94A4] hover:bg-[#1E94A4]/5 font-sans font-bold bg-transparent">
                  {language === "mr" ? "सगळे FAQ पहा" : "View All FAQs"}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
