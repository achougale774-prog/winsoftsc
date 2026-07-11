"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, X, Phone, MessageSquare, Zap, Shield, Cloud, Monitor, Smartphone, Download, FileText } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

const dairyPlans = [
  {
    name: "Dairy 4.1",
    nameLabel: "Desktop Basic",
    icon: Monitor,
    price: "45,000",
    duration: "Lifetime License",
    color: "border-[#1E94A4]/30 dark:border-[#1E94A4]/20",
    headerColor: "bg-[#E8F4F5] dark:bg-[#1E94A4]/10",
    iconColor: "text-[#1E94A4]",
    highlight: false,
    description: "Single center milk collection with basic billing",
    features: [
      "Automatic Milk Collection (AMCS)",
      "FAT/SNF based rate chart",
      "10-day farmer billing",
      "Thermal printer support",
      "Basic farmer ledger",
      "Voice announcement",
      "Windows desktop app",
      "1 year free support",
    ],
    notIncluded: ["Mobile app", "Cloud backup", "Multi-center", "Web access"],
  },
  {
    name: "Dairy 5.0",
    nameLabel: "Advanced",
    icon: Smartphone,
    price: "75,000",
    duration: "Lifetime License",
    color: "border-[#1E94A4] dark:border-[#1E94A4]",
    headerColor: "bg-[#1E94A4]/10 dark:bg-[#1E94A4]/20",
    iconColor: "text-[#1E94A4]",
    highlight: true,
    description: "Complete dairy ERP with mobile app for farmers",
    features: [
      "Everything in Dairy 4.1",
      "Sankalan Farmer Mobile App",
      "Multi-center management",
      "Cattle feed & advance module",
      "Cooperative society ERP",
      "Audit-ready reports",
      "Bank payment integration",
      "2 years free support",
      "On-site training included",
    ],
    notIncluded: ["Cloud hosting", "Web browser access"],
  },
  {
    name: "Web Dairy",
    nameLabel: "Cloud",
    icon: Cloud,
    price: "Contact Us",
    duration: "Annual Subscription",
    color: "border-[#0B7989]/30 dark:border-[#0B7989]/20",
    headerColor: "bg-[#0B7989]/5 dark:bg-[#0B7989]/10",
    iconColor: "text-[#0B7989] dark:text-[#22d3ee]",
    highlight: false,
    description: "Cloud-based access from anywhere, any device",
    features: [
      "Everything in Dairy 5.0",
      "Web browser access",
      "Cloud data backup",
      "Multi-location access",
      "Real-time sync",
      "Automatic updates",
      "Priority support",
      "Custom domain option",
    ],
    notIncluded: [],
  },
]

const mobilePlans = [
  {
    name: "Silver",
    price: "2,000",
    duration: "1 Year",
    color: "border-slate-200",
    highlight: false,
    features: ["Milk collection app", "FAT/SNF rate chart", "Farmer billing", "SMS alerts", "Basic reports"],
  },
  {
    name: "Gold",
    price: "3,000",
    duration: "2 Years",
    color: "border-[#1E94A4]",
    highlight: true,
    features: ["Everything in Silver", "Bluetooth scale support", "WhatsApp receipts", "Cloud backup", "Priority support"],
  },
  {
    name: "Platinum",
    price: "5,000",
    duration: "5 Years",
    color: "border-slate-800",
    highlight: false,
    features: ["Everything in Gold", "Unlimited farmers", "Multi-center", "Custom rate charts", "Dedicated support"],
  },
]

const otherProducts = [
  {
    name: "Goldwin — Gold & Jewellery ERP",
    icon: "💛",
    price: "30,000",
    duration: "Lifetime",
    features: ["Barcode billing", "Girvi/pledge management", "GST returns", "Gold/silver accounts", "Customer ledger"],
  },
  {
    name: "Sugar Factory ERP",
    icon: "🏭",
    price: "1,20,000",
    duration: "Lifetime",
    features: ["Cane procurement", "Weighbridge integration", "Farmer billing", "Production tracking", "Financial ERP"],
  },
]

export default function PricingPage() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState<"dairy" | "mobile" | "other">("dairy")

  const title = language === "mr" ? "किंमत व योजना" : language === "hi" ? "मूल्य निर्धारण" : "Pricing & Plans"
  const subtitle =
    language === "mr"
      ? "तुमच्या व्यवसायाच्या गरजेनुसार योग्य plan निवडा. सगळ्या plans मध्ये training आणि support समाविष्ट आहे."
      : language === "hi"
      ? "अपनी व्यावसायिक जरूरतों के अनुसार सही प्लान चुनें। सभी प्लान में ट्रेनिंग और सपोर्ट शामिल है।"
      : "Choose the right plan for your business. All plans include training and support."

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-white dark:bg-zinc-950 border-b border-gray-100 dark:border-zinc-800 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 text-[#1E94A4] text-sm font-sans font-bold mb-6 border border-[#1E94A4]/20">
              <Zap className="w-4 h-4" />
              {language === "mr" ? "पारदर्शक किंमत" : "Transparent Pricing"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-zinc-100 mb-6 font-sans">{title}</h1>
            <p className="text-xl text-gray-600 dark:text-zinc-400 font-serif leading-relaxed max-w-2xl mx-auto mb-8">
              {subtitle}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-zinc-400 mb-6">
              {[
                { icon: "✅", text: language === "mr" ? "Training समाविष्ट" : "Training Included" },
                { icon: "🔧", text: language === "mr" ? "Installation Support" : "Installation Support" },
                { icon: "📞", text: language === "mr" ? "1 वर्ष Free Support" : "1 Year Free Support" },
                { icon: "🔄", text: language === "mr" ? "Regular Updates" : "Regular Updates" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span>{b.icon}</span>
                  <span className="font-sans font-medium">{b.text}</span>
                </div>
              ))}
            </div>

            {/* PDF Download Button */}
            <button
              onClick={() => {
                const content = `WINSOFT SOFTWARE CONSULTANCY
Pricing & Plans — ${new Date().toLocaleDateString("en-IN")}
=====================================

DAIRY SOFTWARE
--------------
Dairy 4.1 (Desktop Basic)     ₹45,000/- Lifetime
Dairy 5.0 (Advanced)          ₹75,000/- Lifetime
Web Dairy (Cloud)              Contact Us / Annual

MOBILE APP (SANKALAN)
---------------------
Silver Plan                   ₹2,000/- (1 Year)
Gold Plan                     ₹3,000/- (2 Years)
Platinum Plan                 ₹5,000/- (5 Years)

GOLD & JEWELLERY (GOLDWIN)
--------------------------
Goldwin ERP                   ₹30,000/- Lifetime

SUGAR FACTORY ERP
-----------------
Sugar Factory ERP             ₹1,20,000/- Lifetime

ALL PLANS INCLUDE:
✅ On-site Installation
✅ Free Training
✅ 1 Year Free Support
✅ Regular Updates

Contact: +91 94230 39902
Email: info@winsoft.in
Website: www.winsoftsc.com
Address: Plot 448, Lane 14B, Hari Om Nagar, Kolhapur, MH 416010
`
                const blob = new Blob([content], { type: "text/plain" })
                const url = URL.createObjectURL(blob)
                const a = document.createElement("a")
                a.href = url
                a.download = "Winsoft-Pricing.txt"
                a.click()
                URL.revokeObjectURL(url)
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 border-2 border-[#1E94A4] text-[#1E94A4] font-bold text-sm rounded-xl hover:bg-[#1E94A4] hover:text-white transition-all shadow-sm hover:shadow-lg hover:shadow-[#1E94A4]/20"
            >
              <Download className="w-4 h-4" />
              {language === "mr" ? "Pricing Download करा" : language === "hi" ? "Pricing Download करें" : "Download Pricing PDF"}
              <FileText className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Tab Selector */}
        <section className="bg-white dark:bg-zinc-950 border-b border-gray-100 dark:border-zinc-800 sticky top-0 z-40">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex overflow-x-auto">
              {[
                { id: "dairy", label: language === "mr" ? "🥛 डेअरी Software" : "🥛 Dairy Software" },
                { id: "mobile", label: language === "mr" ? "📱 Mobile App" : "📱 Mobile App" },
                { id: "other", label: language === "mr" ? "💛 Gold & Sugar" : "💛 Gold & Sugar" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-6 py-4 text-sm font-sans font-semibold border-b-2 whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? "border-[#1E94A4] text-[#1E94A4]"
                      : "border-transparent text-gray-500 dark:text-zinc-400 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Dairy Plans */}
        {activeTab === "dairy" && (
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 font-sans mb-3">
                  {language === "mr" ? "डेअरी Management Software" : "Dairy Management Software"}
                </h2>
                <p className="text-gray-500 dark:text-zinc-400 font-serif">
                  {language === "mr"
                    ? "दूध संकलन केंद्र ते सहकारी संस्था — सगळ्यांसाठी योग्य plan"
                    : "From village collection centers to cooperative societies — a plan for everyone"}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {dairyPlans.map((plan, i) => (
                  <div
                    key={i}
                    className={`relative bg-white dark:bg-zinc-900 rounded-3xl border-2 ${plan.color} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden`}
                  >
                    {plan.highlight && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E94A4] to-[#22d3ee]" />
                    )}
                    {plan.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1E94A4] text-white text-xs font-bold px-4 py-1 rounded-full">
                        ⭐ Most Popular
                      </div>
                    )}

                    <div className={`p-6 ${plan.headerColor}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <plan.icon className={`w-6 h-6 ${plan.iconColor}`} />
                        <div>
                          <div className="font-bold text-gray-900 dark:text-zinc-100 font-sans">{plan.name}</div>
                          <div className={`text-xs font-semibold ${plan.iconColor}`}>{plan.nameLabel}</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-zinc-400 font-serif">{plan.description}</p>
                    </div>

                    <div className="p-6 border-b border-gray-100 dark:border-zinc-800">
                      {plan.price === "Contact Us" ? (
                        <div>
                          <div className="text-2xl font-bold text-gray-900 dark:text-zinc-100 font-sans">
                            {language === "mr" ? "संपर्क करा" : "Contact Us"}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-zinc-400 font-serif">{plan.duration}</div>
                        </div>
                      ) : (
                        <div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl text-gray-400 font-sans">₹</span>
                            <span className="text-4xl font-black text-gray-900 dark:text-zinc-100 font-sans">
                              {plan.price}
                            </span>
                            <span className="text-gray-400 font-sans">/-</span>
                          </div>
                          <div className="text-sm text-gray-500 dark:text-zinc-400 font-serif">{plan.duration}</div>
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex-1">
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-700 dark:text-zinc-300 font-serif">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {f}
                          </li>
                        ))}
                        {plan.notIncluded.map((f, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-400 dark:text-zinc-600 font-serif">
                            <X className="w-4 h-4 text-gray-300 dark:text-zinc-700 flex-shrink-0 mt-0.5" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-6 pt-0">
                      <Link href="/contact">
                        <Button
                          className={`w-full py-5 rounded-xl font-sans font-bold ${
                            plan.highlight
                              ? "bg-[#1E94A4] hover:bg-[#0B7989] text-white"
                              : "bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-800 dark:text-zinc-200"
                          }`}
                        >
                          {language === "mr" ? "संपर्क करा" : "Contact Us"}
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Mobile App Plans */}
        {activeTab === "mobile" && (
          <section className="py-16 px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 font-sans mb-3">
                  Sankalan Mobile App
                </h2>
                <p className="text-gray-500 dark:text-zinc-400 font-serif">
                  {language === "mr"
                    ? "शेतकऱ्यांसाठी दूध संकलन mobile app — Android वर available"
                    : "Milk collection mobile app for farmers — available on Android"}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {mobilePlans.map((plan, i) => (
                  <div
                    key={i}
                    className={`relative bg-white dark:bg-zinc-900 rounded-3xl border-2 ${plan.color} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col p-8`}
                  >
                    {plan.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1E94A4] text-white text-xs font-bold px-4 py-1 rounded-full">
                        ⭐ Most Popular
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className={`text-2xl font-bold mb-2 font-sans ${plan.highlight ? "text-[#1E94A4]" : "text-gray-700 dark:text-zinc-300"}`}>
                        {plan.name}
                      </h3>
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-2xl text-gray-400 font-sans">₹</span>
                        <span className="text-5xl font-black text-gray-900 dark:text-zinc-100 font-sans">{plan.price}</span>
                        <span className="text-gray-400 font-sans">/-</span>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-zinc-400 mt-1 font-serif">{plan.duration}</div>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-700 dark:text-zinc-300 font-serif">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact">
                      <Button
                        className={`w-full py-5 rounded-xl font-sans font-bold ${
                          plan.highlight
                            ? "bg-[#1E94A4] hover:bg-[#0B7989] text-white"
                            : "bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 text-gray-800 dark:text-zinc-200"
                        }`}
                      >
                        {language === "mr" ? "संपर्क करा" : "Contact Us"}
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Gold & Sugar Plans */}
        {activeTab === "other" && (
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 font-sans mb-3">
                  {language === "mr" ? "Gold & Sugar Factory Software" : "Gold & Sugar Factory Software"}
                </h2>
                <p className="text-gray-500 dark:text-zinc-400 font-serif">
                  {language === "mr"
                    ? "सुवर्ण पेढी आणि साखर कारखान्यांसाठी enterprise ERP solutions"
                    : "Enterprise ERP solutions for gold jewellery showrooms and sugar factories"}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {otherProducts.map((product, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-zinc-900 rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col"
                  >
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100 mb-2 font-sans">{product.name}</h3>

                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-xl text-gray-400 font-sans">₹</span>
                      <span className="text-4xl font-black text-gray-900 dark:text-zinc-100 font-sans">{product.price}</span>
                      <span className="text-gray-400 font-sans">/-</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-zinc-400 mb-6 font-serif">{product.duration} License</div>

                    <ul className="space-y-3 mb-8 flex-1">
                      {product.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-700 dark:text-zinc-300 font-serif">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact">
                      <Button className="w-full py-5 rounded-xl font-sans font-bold bg-[#1E94A4] hover:bg-[#0B7989] text-white">
                        {language === "mr" ? "संपर्क करा" : "Contact Us"}
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ about pricing */}
        <section className="py-16 px-4 bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-8 font-sans text-center">
              {language === "mr" ? "किंमतीबद्दल सामान्य प्रश्न" : "Pricing FAQs"}
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: language === "mr" ? "किंमतीत काय काय समाविष्ट आहे?" : "What's included in the price?",
                  a: language === "mr"
                    ? "सगळ्या plans मध्ये software installation, on-site training, आणि 1 वर्षाचा free support समाविष्ट आहे. AMC (Annual Maintenance Contract) नंतर renewal साठी वेगळी किंमत असते."
                    : "All plans include software installation, on-site training, and 1 year of free support. AMC (Annual Maintenance Contract) renewal pricing applies after the first year.",
                },
                {
                  q: language === "mr" ? "EMI किंवा हप्त्यांमध्ये payment करता येते का?" : "Can I pay in installments?",
                  a: language === "mr"
                    ? "हो! आम्ही flexible payment options देतो. Details साठी आमच्या team शी संपर्क करा: +91 94230 39902"
                    : "Yes! We offer flexible payment options. Contact our team for details: +91 94230 39902",
                },
                {
                  q: language === "mr" ? "Software update मोफत मिळतात का?" : "Are software updates free?",
                  a: language === "mr"
                    ? "AMC (Annual Maintenance Contract) मध्ये सगळे updates, bug fixes, आणि नवीन features मोफत मिळतात. GST आणि government regulation changes automatically update होतात."
                    : "Under AMC (Annual Maintenance Contract), all updates, bug fixes, and new features are free. GST and government regulation changes are automatically updated.",
                },
                {
                  q: language === "mr" ? "Demo मोफत आहे का?" : "Is the demo free?",
                  a: language === "mr"
                    ? "हो! Demo पूर्णपणे मोफत आहे. आमची team तुमच्या office मध्ये येऊन live demo देते. कोणतीही commitment नाही."
                    : "Yes! The demo is completely free. Our team visits your office for a live demo. No commitment required.",
                },
              ].map((faq, i) => (
                <div key={i} className="p-6 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800">
                  <h3 className="font-sans font-semibold text-gray-900 dark:text-zinc-100 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-[#1E94A4] to-[#0B7989]">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4 font-sans">
              {language === "mr" ? "अजून प्रश्न आहेत?" : "Still Have Questions?"}
            </h2>
            <p className="text-white/80 font-serif mb-8 text-lg">
              {language === "mr"
                ? "आमच्या team शी थेट बोला. आम्ही तुमच्या business साठी best plan suggest करू."
                : "Talk directly with our team. We'll suggest the best plan for your business."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#1E94A4] hover:bg-gray-100 font-sans font-bold px-8">
                  <Zap className="w-4 h-4 mr-2" />
                  {language === "mr" ? "संपर्क करा" : "Contact Us"}
                </Button>
              </Link>
              <a href="tel:+919423039902">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-sans font-bold px-8 bg-transparent">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 94230 39902
                </Button>
              </a>
              <a href="https://wa.me/919423039902?text=Hello%2C%20I%20want%20to%20know%20about%20pricing%20for%20Winsoft%20software." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans font-bold px-8">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
