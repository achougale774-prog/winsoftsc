"use client"

import { useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { HeroSlider } from "@/components/hero-slider"
import { useLanguage } from "@/components/language-provider"
import { VillagePortal } from "@/components/village-portal"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ClientLogosSection } from "@/components/client-logos-section"
import { AnimatedStats } from "@/components/animated-stats"

import { GoogleReviews } from "@/components/google-reviews"
import { ClientMap } from "@/components/client-map"


export default function HomePage() {
  const { t, language } = useLanguage()

  const products = useMemo(() => {
    return [
      {
        id: 1,
        title: t("dairy5.title") || "Complete Dairy Software Solutions",
        description: t("dairy5.overview") || "A comprehensive dairy management solution designed for Dairy Cooperative Societies, Milk Collection Centers, and Dairy Plants.",
        image: "/live-image-dairy/5.0.png",
        link: "/product/1",
      },
      {
        id: "billing-5",
        title: t("billing5.title") || "Dairy 5.0 – Milk Billing Software",
        description: t("billing5.overview") || "Automate milk bill generation, payment calculations, and member ledger management with complete accuracy. Manage advances, feed recovery, loan deductions, rebates, and dividends in a single system. Ensure transparent and hassle-free payment processing for dairy farmers.",
        image: "/live-image-dairy/milk_collection_5.0.png",
        link: "/product/billing-5",
      },
      {
        id: "web-dairy",
        title: t("webDairy.title") || "Web-based Dairy Software Solutions",
        description: t("webDairy.overview") || "Web Dairy is a comprehensive web-based dairy management solution designed for Dairy Cooperative Societies, Milk Collection Centers, and Dairy Plants. The software automates milk procurement, billing, inventory, accounting, and management reporting while ensuring transparency and operational efficiency on any web-enabled device.",
        image: "/live-image-dairy/first-page.png",
        link: "/product/web-dairy",
      },
      {
        id: 2,
        title: t("dairy5.products.prod2.title") || "Farmer Mobile App",
        description: t("dairy5.products.prod2.desc") || "Advanced mobile application for dairy farmers to track real-time daily milk slips, 10-day payment receipts, and ledger statements.",
        image: "/modern-dairy-farm.png",
        link: "/product/2",
      },
      {
        id: 3,
        title: t("dairy5.products.prod3.title") || "Dairy Administrator App",
        description: t("dairy5.products.prod3.desc") || "Collection monitoring, dashboard & analytics, and report access for dairy administrators.",
        image: "/modern-office-dashboard.png",
        link: "/product/3",
      },
      {
        id: 4,
        title: t("dairy5.products.prod4.title") || "Milk Collection App & Machine Integration",
        description: t("dairy5.products.prod4.desc") || "Direct integration with Fat Machine and Weighing Scales for seamless collection entry.",
        image: "/indian-software-office-collaboration.png",
        link: "/product/4",
      },
      {
        id: 5,
        title: t("dairy5.products.prod5.title") || "Production Management System",
        description: t("dairy5.products.prod5.desc") || "Manage the complete milk processing cycle from raw milk reception to finished product production with real-time monitoring and inventory integration.",
        image: "/goldwin.png",
        link: "/product/5",
      },
      {
        id: 6,
        title: t("dairy5.products.prod6.title") || "Transport Management System",
        description: t("dairy5.products.prod6.desc") || "Efficiently manage milk collection routes, vehicle operations, dispatches, and transportation costs.",
        image: "/transport.jpg",
        link: "/product/6",
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
      },
      {
        id: "sugar",
        title: language === 'mr' ? "साखर कारखाना व्यवस्थापन प्रणाली" :
          language === 'kn' ? "ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ" :
            language === 'hi' ? "चीनी मिल प्रबंधन प्रणाली" : "Sugar Factory Enterprise Solutions",
        description: language === 'mr' ? "साखर कारखान्यांसाठी ऊस खरेदी, वजन काटा जोडणी, शेतकरी नोंदणी आणि संपूर्ण प्रशासकीय ERP सोल्यूशन." :
          language === 'kn' ? "ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆಗಳಿಗಾಗಿ ಕಬ್ಬು ಖರೀದಿ, तೂಕದ ಪ್ರಮಾಣ ಜೋಡಣೆ, ರೈತರ ನೋಂದಣಿ ಮತ್ತು ಸಂಪೂರ್ಣ ಆಡಳಿತಾತ್ಮಕ ERP ಪರಿಹಾರ." :
            language === 'hi' ? "चीनी मिलों के लिए गन्ना खरीद, वजन कांटा एकीकरण, किसान पंजीकरण और संपूर्ण प्रशासनिक ERP समाधान." : "Complete ERP system for sugar factories to manage cane procurement, weighbridge operations, farmer billing, and factory accounts.",
        image: "/sugerfac.png",
        link: "/sugar-factory-solutions",
      }
    ];
  }, [t, language]);

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-zinc-950 font-sans relative overflow-hidden">
      {/* Animated Premium Background */}
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#1E94A4]/20 dark:bg-[#1E94A4]/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#22d3ee]/20 dark:bg-[#22d3ee]/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-[#0B7989]/20 dark:bg-[#0B7989]/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <Header />
      <HeroSlider />

      <main className="max-w-7xl mx-auto px-4 py-24 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 dark:bg-[#1E94A4]/20 text-[#1E94A4] text-xs font-sans font-bold mb-4 border border-[#1E94A4]/20">
            📦 {language === 'mr' ? "उत्पादने व सोल्यूशन्स" : language === 'kn' ? "ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಪರಿಹಾರಗಳು" : language === 'hi' ? "उत्पाद और समाधान" : "Products & Solutions"}
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-4">
            {language === 'mr' ? "आमची उत्पादने" :
             language === 'kn' ? "ನಮ್ಮ ಉತ್ಪನ್ನಗಳು" :
             language === 'hi' ? "हमारे उत्पाद" : "Our Products"}
          </h2>
          <div className="h-1.5 w-20 bg-[#1E94A4] mx-auto rounded-full mb-6" />
          <p className="text-gray-655 dark:text-zinc-400 font-serif max-w-2xl mx-auto text-lg">
            {language === 'mr' ? "तुमच्या व्यवसायाची कार्यक्षमता वाढवण्यासाठी डिझाइन केलेली आमची प्रगत आणि विश्वासू डिजिटल सोल्यूशन्स." :
             language === 'kn' ? "ನಿಮ್ಮ ವ್ಯವಹಾರದ ದಕ್ಷತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ನಮ್ಮ ಸುಧಾರಿತ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ಡಿಜಿಟಲ್ ಪರಿಹಾರಗಳು." :
             language === 'hi' ? "आपके व्यवसाय की दक्षता बढ़ाने के लिए डिज़ाइन किए गए हमारे उन्नत और विश्वसनीय डिजिटल समाधान।" :
             "Explore our advanced, secure, and reliable digital business solutions tailored to grow your operations."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="glass-card hover-lift p-8 flex flex-col justify-between min-h-[480px] group border-t border-white/40 dark:border-zinc-800/50">
              <div className="flex flex-col h-full">
                <Link href={product.link} className="block relative">
                  <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative w-full h-48 mb-8 rounded-2xl overflow-hidden border border-white/50 dark:border-zinc-800 shadow-sm">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                </Link>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 leading-tight mb-4 group-hover:text-[#1E94A4] dark:group-hover:text-[#22d3ee] transition-colors">
                  {product.title}
                </h3>

                <p className="text-gray-650 dark:text-zinc-400 text-base mb-8 flex-grow leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="space-y-4">
                <Link href={product.link} className="block">
                  <Button variant="outline" className="w-full border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 font-semibold py-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all">
                    {t("home.viewDetails")}
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button className="w-full bg-gradient-to-r from-[#1E94A4] to-[#22d3ee] hover:from-[#0B7989] hover:to-[#1E94A4] text-white font-bold py-6 rounded-2xl transition-all shadow-lg hover:shadow-[#1E94A4]/25">
                    {t("home.requestDemo")}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <VillagePortal />

      <ClientLogosSection />

      {/* <ClientMap /> */}

      <AnimatedStats />

      {/* <GoogleReviews /> */}

      <TestimonialsSection />

      <Footer />
    </div>
  )
}

