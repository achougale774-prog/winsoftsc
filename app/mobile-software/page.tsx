"use client"

import React, { useCallback, useMemo } from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight, CheckCircle2, Download, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WhatsAppButton } from '@/components/whatsapp-button'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from "@/components/language-provider"
import { CallNowButton } from "@/components/call-now-button"

export default function MobileSoftwarePage() {
  const { t, language } = useLanguage()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', skipSnaps: false }, [Autoplay({ delay: 3000 })])

  const recommendedSolutions = useMemo(() => {
    const allSolutions = [
      {
        id: 1,
        title: t("dairy5.title") || "Complete Dairy Software Solutions",
        description: t("dairy5.overview") || "Dairy 5.0 is a comprehensive dairy management solution designed for Dairy Cooperative Societies, Milk Collection Centers, and Dairy Plants.",
        image: "/live-image-dairy/5.0.png",
        link: "/product/1",
        tag: language === 'mr' ? "डेअरी सोल्यूशन" : language === 'kn' ? "ಡೈರಿ ಪರಿಹಾರ" : language === 'hi' ? "डेयरी समाधान" : "Dairy Solution"
      },
      {
        id: 2,
        title: t("dairy5.products.prod2.title") || "Farmer Mobile App",
        description: t("dairy5.products.prod2.desc") || "Advanced mobile application for dairy farmers to track real-time daily milk slips, 10-day payment receipts, and ledger statements.",
        image: "/modern-dairy-farm.png",
        link: "/product/2",
        tag: language === 'mr' ? "मोबाईल ॲप" : language === 'kn' ? "ಮೊಬೈಲ್ ಆಪ್" : language === 'hi' ? "मोबाइल ऐप" : "Mobile App"
      },
      {
        id: 3,
        title: t("dairy5.products.prod3.title") || "Dairy Administrator App",
        description: t("dairy5.products.prod3.desc") || "Collection monitoring, dashboard & analytics, and report access for dairy administrators.",
        image: "/modern-office-dashboard.png",
        link: "/product/3",
        tag: language === 'mr' ? "ERP सिस्टीम" : language === 'kn' ? "ERP ಸಿಸ್ಟಮ್" : language === 'hi' ? "ERP सिस्टम" : "ERP System"
      },
      {
        id: "gold",
        title: language === 'mr' ? "सुवर्ण पेढी व दागिने व्यवस्थापन प्रणाली (Goldwin)" :
          language === 'kn' ? "ಚಿನ್ನದ ಅಂಗಡಿ ಮತ್ತು ಆಭರಣ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ (Goldwin)" :
            language === 'hi' ? "स्वर्ण आभूषण शोरूम प्रबंधन प्रणाली (Goldwin)" : "Gold Jewellery Showroom ERP (Goldwin)",
        description: language === 'mr' ? "सराफा दुकानांसाठी सोन्या-चांदीचे हिशोब, बारकोड बिलिंग, गहाणवट (Girvi) व्यवस्थापन आणि GST रिपोर्टचे संपूर्ण सॉफ्टवेअर." :
          language === 'kn' ? "ಆಭರಣ ಮಳಿಗೆಗಳಿಗಾಗಿ ಚಿನ್ನ ಮತ್ತು ಬೆಳ್ಳಿಯ ಲೆಕ್ಕಾಚಾರ, ಬಾರ್‌ಕೋಡ್ ಬಿಲ್ಲಿಂಗ್, ಗಿರವಿ ನಿರ್ವಹಣೆ ಮತ್ತು ಜಿಎಸ್‌ಟಿ ವರದಿಗಳ ಸಂಪೂರ್ಣ ಸಾಫ್ಟ್‌ವೇರ್." :
            language === 'hi' ? "ज्वेलरी शोरूम के लिए सोने-चांदी का हिसाब, बारकोड बिलिंग, गिरवी प्रबंधन और GST रिपोर्ट का संपूर्ण सॉफ्टवेयर." : "Complete billing, account management, barcode scanning, Girvi/pledge tracking, and GST returns software for jewellery showrooms.",
        image: "/gold-image-new/gold_home_page.png",
        link: "/gold-industry-solutions",
        tag: language === 'mr' ? "सुवर्ण सोल्यूशन" : language === 'kn' ? "ಚಿನ್ನದ ಪರಿಹಾರ" : language === 'hi' ? "स्वर्ण समाधान" : "Gold Solution"
      },
      {
        id: "sugar",
        title: language === 'mr' ? "साखर कारखाना व्यवस्थापन प्रणाली" :
          language === 'kn' ? "ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ" :
            language === 'hi' ? "चीनी मिल प्रबंधन प्रणाली" : "Sugar Factory Enterprise Solutions",
        description: language === 'mr' ? "साखर कारखान्यांसाठी ऊस खरेदी, वजन काटा जोडणी, शेतकरी नोंदणी आणि संपूर्ण प्रशासकीय ERP सोल्यूशन." :
          language === 'kn' ? "ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆಗಳಿಗಾಗಿ ಕಬ್ಬು ಖರೀದಿ, ತೂಕದ ಪ್ರಮಾಣ ಜೋಡಣೆ, ರೈತರ ನೋಂದಣಿ ಮತ್ತು ಸಂಪೂರ್ಣ ಆಡಳಿತಾತ್ಮಕ ERP ಪರಿಹಾರ." :
            language === 'hi' ? "चीनी मिलों के लिए गन्ना खरीद, वजन कांटा एकीकरण, किसान पंजीकरण और संपूर्ण प्रशासनिक ERP समाधान." : "Complete ERP system for sugar factories to manage cane procurement, weighbridge operations, farmer billing, and factory accounts.",
        image: "/sugerfac.png",
        link: "/sugar-factory-solutions",
        tag: language === 'mr' ? "कारखाना सोल्यूशन" : language === 'kn' ? "ಕಾರ್ಖಾನೆ ಪರಿಹಾರ" : language === 'hi' ? "फैक्ट्री समाधान" : "Enterprise Solution"
      }
    ];

    const filterIds = [1, 3, "gold", "sugar"];
    return allSolutions.filter(sol => filterIds.includes(sol.id));
  }, [language, t]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const screenshots = [
    {
      id: 1,
      title: "Milk Collection",
      desc: "Real-time FAT/SNF testing & data entry",
      color: "from-blue-600 to-indigo-700",
      content: (
        <div className="w-full space-y-4">
          <div className="bg-white/10 p-4 rounded-2xl text-left border border-white/20">
            <div className="text-[10px] uppercase opacity-70 mb-1 font-sans">Current Entry</div>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-xl font-bold font-sans">12.50 Ltr</div>
                <div className="text-[10px] opacity-70 font-sans">Cow Milk</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold font-sans">₹ 531.25</div>
                <div className="text-[10px] text-green-400 font-sans">Rate: ₹42.50</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/10 p-2 rounded-xl border border-white/20">
              <div className="text-[10px] opacity-70 font-sans">FAT</div>
              <div className="text-lg font-bold font-sans">4.2</div>
            </div>
            <div className="bg-white/10 p-2 rounded-xl border border-white/20">
              <div className="text-[10px] opacity-70 font-sans">SNF</div>
              <div className="text-lg font-bold font-sans">8.5</div>
            </div>
          </div>
          <Button className="w-full bg-white text-blue-600 font-bold h-10 rounded-xl text-sm font-sans">Save Entry</Button>
        </div>
      )
    },
    {
      id: 2,
      title: "Farmer Dashboard",
      desc: "Manage profiles & collection history",
      color: "from-green-600 to-emerald-700",
      content: (
        <div className="w-full space-y-3">
          {[
            { name: "Jaywant Lavte", id: "F-102", ltr: "15.2 L" },
            { name: "Sanjay Patil", id: "F-105", ltr: "10.8 L" },
            { name: "Rahul Deshmukh", id: "F-110", ltr: "22.1 L" }
          ].map((f, i) => (
            <div key={i} className="bg-white/10 p-3 rounded-xl flex justify-between items-center border border-white/10">
              <div className="text-left">
                <div className="text-sm font-bold font-sans">{f.name}</div>
                <div className="text-[10px] opacity-70 font-sans">{f.id}</div>
              </div>
              <div className="text-sm font-bold bg-white/20 px-2 py-1 rounded-lg font-sans">{f.ltr}</div>
            </div>
          ))}
          <div className="text-[10px] opacity-70 pt-2 font-sans">+ 124 more farmers</div>
        </div>
      )
    },
    {
      id: 3,
      title: "Payment Receipts",
      desc: "Instant digital receipts via WhatsApp",
      color: "from-purple-600 to-violet-700",
      content: (
        <div className="w-full bg-white text-gray-900 rounded-2xl p-4 shadow-xl">
          <div className="border-b border-dashed border-gray-200 pb-3 mb-3 text-center">
            <div className="text-sm font-bold font-sans">WINSOFT DAIRY</div>
            <div className="text-[10px] text-gray-500 font-sans">Collection Receipt</div>
          </div>
          <div className="space-y-2 text-xs font-sans">
            <div className="flex justify-between"><span>Date:</span><span className="font-bold">02/05/2026</span></div>
            <div className="flex justify-between"><span>Farmer:</span><span className="font-bold">J. Lavte</span></div>
            <div className="flex justify-between"><span>Qty:</span><span className="font-bold">12.50 L</span></div>
            <div className="flex justify-between"><span>Amount:</span><span className="font-bold">₹ 531.25</span></div>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100 flex justify-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <Smartphone className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <Download className="w-4 h-4" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Milk Analysis",
      desc: "Detailed reports & trends",
      color: "from-orange-500 to-red-600",
      content: (
        <div className="w-full space-y-4">
          <div className="flex justify-between items-center px-2">
            <div className="text-sm font-bold font-sans">Weekly Stats</div>
            <div className="text-[10px] bg-white/20 px-2 py-1 rounded-full text-white font-sans">Last 7 Days</div>
          </div>
          <div className="h-24 flex items-end justify-around gap-1 px-2">
            {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
              <div key={i} className="w-full bg-white/30 rounded-t-sm relative group" style={{ height: `${h}%` }}>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] opacity-0 group-hover:opacity-100 transition-opacity font-sans">{h}L</div>
              </div>
            ))}
          </div>
          <div className="bg-white/10 p-3 rounded-xl border border-white/20 text-left">
            <div className="text-[10px] opacity-70 font-sans">Total Collection</div>
            <div className="text-xl font-bold font-sans">1,245.5 Ltr</div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Smart Settings",
      desc: "Configure rate charts & cattle types",
      color: "from-teal-500 to-cyan-600",
      content: (
        <div className="w-full space-y-3">
          <div className="bg-white/10 p-3 rounded-xl text-left border border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold font-sans">Buffalo Rate Chart</div>
              <div className="text-[10px] opacity-70 font-sans">Active - v2.4</div>
            </div>
          </div>
          <div className="bg-white/10 p-3 rounded-xl text-left border border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold font-sans">Cow Rate Chart</div>
              <div className="text-[10px] opacity-70 font-sans">Active - v1.8</div>
            </div>
          </div>
          <div className="bg-white/10 p-3 rounded-xl text-left border border-white/10 flex items-center gap-3 opacity-50">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold font-sans">Bluetooth Scale</div>
              <div className="text-[10px] opacity-70 font-sans">Disconnected</div>
            </div>
          </div>
        </div>
      )
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-[#1E94A4]/10 to-white dark:from-zinc-900 dark:to-black">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 text-[#1E94A4] font-bold mb-6">
              <Smartphone className="w-4 h-4" /> Farmer Mobile App
            </div>
            <h1 className="text-4xl md:text-6xl font-sans font-bold mb-6 text-gray-900 dark:text-white">
              Dairy Software for Mobile
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-serif leading-relaxed mb-8">
              Complete mobile app for Milk Delivery, Milk Sale Purchase with FAT/SNF multiple rate charts.
              Manage farmers, customers, and payments directly from your smartphone.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact?inquiryType=demo#contact-form">
                <Button size="lg" className="bg-[#1E94A4] hover:bg-[#0B7989] text-white px-8 font-bold">
                  Get Free Demo
                </Button>
              </Link>
              <a href="#download-apps">
                <Button size="lg" variant="outline" className="border-[#1E94A4] text-[#1E94A4] font-bold">
                  <Download className="w-4 h-4 mr-2" /> Download App
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 overflow-hidden bg-slate-50 dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-white mb-6">
              App Gallery & Features
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-serif">
              Explore the clean, intuitive, and powerful interface of the Farmer Mobile App.
            </p>
          </div>

          <div className="relative max-w-[1400px] mx-auto px-4 sm:px-12">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4 md:gap-8 cursor-grab active:cursor-grabbing pb-12 pt-4">
                {screenshots.map((screen) => (
                  <div key={screen.id} className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                    <div className="relative mx-auto w-full max-w-[300px] aspect-[9/19] rounded-[2.5rem] border-[12px] border-black bg-black shadow-2xl dark:border-zinc-800 dark:bg-zinc-800 group hover:-translate-y-2 transition-transform duration-300">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-black dark:bg-zinc-800 rounded-b-2xl z-20"></div>

                      {/* Screen Content Mockup */}
                      <div className={`relative h-full w-full rounded-[1.8rem] overflow-hidden bg-gradient-to-br ${screen.color} flex flex-col items-center p-6 text-white text-center shadow-inner pt-12`}>
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black/30"></div>

                        <div className="relative z-10 w-full flex flex-col items-center">
                          <h3 className="text-xl font-bold mb-1 font-sans">{screen.title}</h3>
                          <p className="text-white/80 text-[10px] mb-6 font-sans uppercase tracking-wider">{screen.desc}</p>

                          {/* Realistic Content */}
                          {screen.content}
                        </div>

                        {/* Fake bottom navigation bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-14 bg-white/10 backdrop-blur-md flex items-center justify-around px-4 border-t border-white/10">
                          <div className="w-5 h-5 rounded-md bg-white/20"></div>
                          <div className="w-10 h-1 bg-white/40 rounded-full"></div>
                          <div className="w-5 h-5 rounded-md bg-white/20"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={scrollPrev} className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-zinc-800 rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 z-10 text-gray-800 dark:text-white border border-gray-100 dark:border-zinc-700">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={scrollNext} className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-zinc-800 rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 z-10 text-gray-800 dark:text-white border border-gray-100 dark:border-zinc-700">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-4 bg-slate-50 dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-white mb-6">
                Buy Mobile Dairy Software
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-serif">
                Choose the best plan that fits your dairy collection needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Silver",
                  price: "2,000",
                  duration: "1 Year",
                  color: "border-slate-200",
                  iconColor: "text-slate-400",
                  highlight: false
                },
                {
                  name: "Gold",
                  price: "3,000",
                  duration: "2 Years",
                  color: "border-[#1E94A4]",
                  iconColor: "text-yellow-500",
                  highlight: true
                },
                {
                  name: "Platinum",
                  price: "5,000",
                  duration: "5 Years",
                  color: "border-slate-800",
                  iconColor: "text-indigo-500",
                  highlight: false
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`relative bg-white dark:bg-zinc-900 rounded-3xl p-8 border-2 ${plan.color} shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1E94A4] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.iconColor}`}>{plan.name}</h3>
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-2xl font-bold text-gray-400 italic">₹</span>
                      <span className="text-5xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                      <span className="text-gray-500 font-medium">/-</span>
                    </div>
                    <div className="text-gray-500 mt-2 font-medium">{plan.duration}</div>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    {[
                      "Customizable Rate Chart",
                      "Full Customer Support",
                      "Bluetooth Printer Support",
                      "Payment Register & SMS",
                      "Cloud Backup & Security",
                      "Product Sell/Purchase"
                    ].map((feat, j) => (
                      <div key={j} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-auto">
                    <Link href="/contact?inquiryType=demo#contact-form" className="block w-full">
                      <Button
                        className={`w-full py-6 rounded-xl font-bold transition-all text-xs sm:text-sm ${plan.highlight
                            ? "bg-[#1E94A4] hover:bg-[#0B7989] text-white"
                            : "bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white"
                          }`}
                      >
                        Buy Now
                      </Button>
                    </Link>
                    <CallNowButton
                      text="Call"
                      className="w-full py-6 rounded-xl font-bold transition-all text-xs sm:text-sm bg-[#25D366] hover:bg-[#1EBE5D] text-white border-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="py-24 px-4 bg-white dark:bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-sans font-bold text-center mb-12">Core Capabilities</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Bulk Milk Collection (AMCU/DPMCU)",
                "FAT/SNF based Rate Charts",
                "Instant Farmer Billing via SMS/WhatsApp",
                "Milk Sale & Purchase Tracking",
                "Bluetooth Weighing Scale Integration",
                "Multilingual Support (English, Marathi, etc.)",
                "Advance & Deduction Management",
                "Cloud Backup & Security"
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-zinc-900 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="font-serif font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── APK Download Section ── */}
        <section id="download-apps" className="py-24 px-4 bg-gradient-to-b from-[#E8F4F5] to-white dark:from-[#0B7989]/10 dark:to-zinc-950 border-t border-[#1E94A4]/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 text-[#1E94A4] text-xs font-bold mb-4 border border-[#1E94A4]/20">
                📱 Direct Download
              </span>
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-3">
                {language === 'mr' ? "Apps थेट Download करा" :
                  language === 'hi' ? "Apps सीधे Download करें" : "Download Winsoft Apps Directly"}
              </h2>
              <p className="text-gray-500 dark:text-zinc-400 font-serif max-w-xl mx-auto">
                {language === 'mr'
                  ? "खालील buttons वर click करा — APK file download होईल. Android phone वर install करा."
                  : language === 'hi'
                    ? "नीचे दिए buttons पर click करें — APK file download होगी। Android phone पर install करें।"
                    : "Click the button below to download the APK file directly. Install on your Android phone."}
              </p>

              {/* Android only note */}
              <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-xs text-amber-700 dark:text-amber-400 font-semibold">
                ⚠️ {language === 'mr' ? "फक्त Android साठी — Install करण्यापूर्वी Settings मध्ये 'Unknown Sources' चालू करा"
                  : language === 'hi' ? "केवल Android के लिए — Install से पहले Settings में 'Unknown Sources' चालू करें"
                    : "Android only — Enable 'Unknown Sources' in Settings before installing"}
              </div>
            </div>

            {/* 3 App Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Farmer Passbook App",
                  nameMr: "शेतकरी पासबुक अॅप",
                  nameHi: "किसान पासबुक ऐप",
                  desc: "Farmer milk passbook — daily slips, 10-day billing, ledger",
                  descMr: "शेतकरी दूध पासबुक — रोजचे slips, १० दिवसांचे बिल, खाते",
                  descHi: "किसान दूध पासबुक — रोज के slips, 10 दिन का बिल, खाता",
                  file: "https://drive.google.com/uc?export=download&id=1zxekpxhNOWOrQW9UMGQb0DlpMo7OeU4z",
                  size: "51.34 MB",
                  icon: "📖",
                  color: "from-[#1E94A4] to-[#22d3ee]",
                  border: "border-[#1E94A4]/30",
                  bg: "bg-[#1E94A4]/5 dark:bg-[#1E94A4]/10",
                  features: [
                    language === 'mr' ? "रोजचे दूध slip" : "Daily milk slips",
                    language === 'mr' ? "१० दिवसांचे बिल" : "10-day billing",
                    language === 'mr' ? "खाते ledger" : "Account ledger",
                  ],
                },
                {
                  name: "Collection Center App",
                  nameMr: "दूध संकलन केंद्र अॅप",
                  nameHi: "दूध संग्रह केंद्र ऐप",
                  desc: "Milk collection entry with FAT/SNF and weighing scale",
                  descMr: "FAT/SNF आणि वजन काटा सह दूध संकलन entry",
                  descHi: "FAT/SNF और वजन कांटे के साथ दूध संग्रह entry",
                  file: "https://drive.google.com/uc?export=download&id=1GQg5QaQEyefuWWLAxUNSyuL75E0iX0GS",
                  size: "22.89 MB",
                  icon: "🥛",
                  color: "from-[#0B7989] to-[#1E94A4]",
                  border: "border-[#0B7989]/30",
                  bg: "bg-[#0B7989]/5 dark:bg-[#0B7989]/10",
                  features: [
                    language === 'mr' ? "FAT/SNF testing" : "FAT/SNF testing",
                    language === 'mr' ? "वजन काटा जोडणी" : "Weighing scale link",
                    language === 'mr' ? "Thermal print" : "Thermal print",
                  ],
                },
                {
                  name: "Admin Dashboard App",
                  nameMr: "Admin Dashboard अॅप",
                  nameHi: "Admin Dashboard ऐप",
                  desc: "Society admin — reports, billing, member management",
                  descMr: "संस्था admin — reports, billing, सभासद व्यवस्थापन",
                  descHi: "संस्था admin — reports, billing, सदस्य प्रबंधन",
                  file: "https://drive.google.com/uc?export=download&id=1dhRIithUP9rygo9cpw5Z_hk3o3W8zSBJ",
                  size: "21.35 MB",
                  icon: "⚙️",
                  color: "from-[#22d3ee] to-[#1E94A4]",
                  border: "border-[#22d3ee]/30",
                  bg: "bg-[#22d3ee]/5 dark:bg-[#22d3ee]/10",
                  features: [
                    language === 'mr' ? "Live reports" : "Live reports",
                    language === 'mr' ? "Member management" : "Member management",
                    language === 'mr' ? "Payment tracking" : "Payment tracking",
                  ],
                },
              ].map((app, i) => (
                <div key={i} className={`${app.bg} border-2 ${app.border} rounded-3xl p-6 flex flex-col hover:shadow-xl transition-all hover:-translate-y-1`}>
                  {/* App icon + name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                      {app.icon}
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900 dark:text-zinc-100 text-base leading-tight">
                        {language === 'mr' ? app.nameMr : language === 'hi' ? app.nameHi : app.name}
                      </h3>
                      <p className="text-xs text-gray-400 dark:text-zinc-500 mt-0.5">{app.size} · Android APK</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-zinc-400 font-serif mb-4 leading-relaxed">
                    {language === 'mr' ? app.descMr : language === 'hi' ? app.descHi : app.desc}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-6 flex-1">
                    {app.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-600 dark:text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E94A4] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Download Button */}
                  <a
                    href={app.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r ${app.color} text-white font-bold text-sm rounded-2xl hover:opacity-90 active:scale-95 transition-all shadow-md`}
                  >
                    <Download className="w-4 h-4" />
                    {language === 'mr' ? "Google Drive वरून Download करा" : language === 'hi' ? "Google Drive से Download करें" : "Download from Google Drive"}
                  </a>
                </div>
              ))}
            </div>

            {/* Install Instructions */}
            <div className="mt-10 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                📋 {language === 'mr' ? "Install कसे करावे?" : language === 'hi' ? "Install कैसे करें?" : "How to Install?"}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    step: "1",
                    mr: "वरील button वर click करून APK file download करा",
                    en: "Click the Download button above to get the APK file",
                  },
                  {
                    step: "2",
                    mr: "Phone मध्ये Settings → Security → Unknown Sources चालू करा",
                    en: "Go to Settings → Security → Enable Unknown Sources",
                  },
                  {
                    step: "3",
                    mr: "Downloads folder मध्ये जाऊन APK file वर click करा",
                    en: "Open Downloads folder and tap the APK file",
                  },
                  {
                    step: "4",
                    mr: "Install button वर click करा — App तयार!",
                    en: "Tap Install — App is ready to use!",
                  },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#1E94A4]/10 text-[#1E94A4] flex items-center justify-center text-sm font-black flex-shrink-0">
                      {s.step}
                    </div>
                    <p className="text-xs text-gray-600 dark:text-zinc-400 font-serif leading-relaxed">
                      {language === 'mr' ? s.mr : s.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Support note */}
            <p className="text-center text-sm text-gray-400 dark:text-zinc-600 mt-6 font-serif">
              {language === 'mr'
                ? "App install करताना problem आल्यास: +91 94230 39902 वर call करा किंवा WhatsApp करा"
                : "Having trouble installing? Call or WhatsApp: +91 94230 39902"}
            </p>
          </div>
        </section>

        {/* Recommended Solutions Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-zinc-900 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 dark:bg-[#1E94A4]/20 text-[#1E94A4] text-xs font-sans font-bold mb-4 border border-[#1E94A4]/20">
                📦 {language === 'mr' ? "इतर शिफारस केलेली उत्पादने" : language === 'kn' ? "ಇತರ ಶಿಫಾರಸು ಮಾಡಿದ ಉತ್ಪನ್ನಗಳು" : language === 'hi' ? "अन्य अनुशंसित उत्पाद" : "Other Recommended Solutions"}
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6">
                {language === 'mr' ? "आमची इतर प्रीमियम सोल्यूशन्स" :
                  language === 'kn' ? "ನಮ್ಮ ಇತರ ಪ್ರೀಮಿಯಂ ಪರಿಹಾರಗಳು" :
                    language === 'hi' ? "हमारे अन्य प्रीमियम समाधान" : "Our Other Premium Solutions"}
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 font-serif max-w-3xl mx-auto text-lg">
                {language === 'mr' ? "तुमच्या व्यवसायाला अत्याधुनिक डिजिटल युगात नेण्यासाठी आणि दैनंदिन कामकाज सुलभ करण्यासाठी तयार करण्यात आलेली प्रगत सॉफ्टवेअर्स." :
                  language === 'kn' ? "ನಿಮ್ಮ ವ್ಯವಹಾರವನ್ನು ಅತ್ಯಾಧುನಿಕ ಡಿಜಿಟಲ್ ಯುಗಕ್ಕೆ ಕೊಂಡೊಯ್ಯಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸುಧಾರಿತ ಸಾಫ್ಟ್‌ವೇರ್." :
                    language === 'hi' ? "आपके व्यवसाय को अत्याधुनिक डिजिटल युग में ले जाने के लिए डिज़ाइन किए गए उन्नत सॉफ़्टवेयर।" : "Advanced software products designed to digitalize operations, increase efficiency, and boost profitability across industries."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedSolutions.map((product) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-zinc-950 hover-lift p-6 rounded-[2rem] flex flex-col justify-between min-h-[440px] group border border-slate-100 dark:border-zinc-800/50 shadow-sm"
                >
                  <div className="flex flex-col h-full">
                    <Link href={product.link} className="block relative">
                      <div className="absolute inset-0 bg-[#1E94A4]/10 dark:bg-[#1E94A4]/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                      <div className="relative w-full h-36 mb-6 rounded-2xl overflow-hidden border border-slate-100 dark:border-zinc-800 shadow-xs">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-[#1E94A4] text-white text-[10px] font-sans font-bold px-2 py-0.5 rounded-full shadow-xs">
                          {product.tag}
                        </div>
                      </div>
                    </Link>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-zinc-100 leading-snug mb-3 group-hover:text-[#1E94A4] dark:group-hover:text-[#22d3ee] transition-colors line-clamp-2">
                      {product.title}
                    </h3>

                    <p className="text-gray-600 dark:text-zinc-400 text-xs mb-6 flex-grow leading-relaxed font-serif line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-900">
                    <Link href={product.link} className="block">
                      <Button variant="outline" className="w-full border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 font-semibold py-4 rounded-xl text-xs hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all font-sans">
                        {t("home.viewDetails")}
                      </Button>
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      <Link href="/contact?inquiryType=demo#contact-form" className="block">
                        <Button className="w-full bg-[#1E94A4] hover:bg-[#0B7989] text-white font-bold py-4 rounded-xl text-[10px] sm:text-xs transition-all shadow-sm hover:shadow-[#1E94A4]/25 font-sans">
                          {t("home.requestDemo")}
                        </Button>
                      </Link>
                      <CallNowButton
                        className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-4 rounded-xl text-[10px] sm:text-xs transition-all shadow-sm hover:shadow-[#25D366]/25 border-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#1E94A4] to-[#0B7989] rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-sans mb-6">Ready to Digitalize Your Dairy?</h2>
            <p className="text-xl opacity-90 mb-8 font-serif">Join thousands of farmers and dairy owners using Farmer Mobile App.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?inquiryType=demo#contact-form">
                <Button size="lg" className="bg-white text-[#1E94A4] hover:bg-gray-50 px-8 font-bold">Book a Demo</Button>
              </Link>
              <WhatsAppButton className="w-fit mx-auto sm:mx-0" productName="Farmer Mobile App" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
