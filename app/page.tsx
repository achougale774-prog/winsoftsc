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
import { VideoDemoSection } from "@/components/video-demo-section"

export default function HomePage() {
  const { t, language } = useLanguage()

  const products = useMemo(() => {
    if (language === 'mr') {
      return [
        {
          id: 1,
          title: "स्वयंचलित दूध संकलन प्रणाली (AMCS)",
          description: "दूध संकलन केंद्रांसाठी संगणकीकृत वजन काटा आणि FAT/SNF तपासणीचे स्वयंचलित एकत्रीकरण.",
          image: "/dairy33.png",
        },
        {
          id: 2,
          title: "शेतकरी दूध पासबुक मोबाईल अॅप (Sankalan)",
          description: "शेतकऱ्यांसाठी दररोजचे दूध संकलन, १० दिवसांचे बिल आणि खात्याचे लेजर पाहण्यासाठीचे प्रगत मोबाईल अॅप्लिकेशन.",
          image: "/modern-dairy-farm.png",
        },
        {
          id: 3,
          title: "सहकारी दूध संस्था प्रशासकीय ERP",
          description: "दूध संस्था आणि संघांसाठी संकलन, पशूखाद्य विक्री, सभासद व्यवस्थापन आणि ऑडिट रिपोर्टचे संपूर्ण सोल्यूशन.",
          image: "/modern-office-dashboard.png",
        },
        {
          id: 4,
          title: "दूध विश्लेषक आणि वजन काटा एकत्रीकरण",
          description: "डिजिटल वजन काटे, थर्मल प्रिंटर, फॅट मशीन आणि आवाजाद्वारे घोषणा (Voice Announcement) यांचे परिपूर्ण एकत्रीकरण.",
          image: "/indian-software-office-collaboration.png",
        },
        {
          id: 5,
          title: "पशूखाद्य आणि उचल (Advance) व्यवस्थापन",
          description: "पशूखाद्य खरेदी-विक्री आणि बिलांमधून अॅडव्हान्सची स्वयंचलित कपात व व्याजाची सुलभ गणना.",
          image: "/goldwin.png",
        }
      ]
    } else if (language === 'kn') {
      return [
        {
          id: 1,
          title: "ಸ್ವಯಂಚಾಲಿತ ಹಾಲು ಸಂಗ್ರಹಣೆ ವ್ಯವಸ್ಥೆ (AMCS)",
          description: "ಹಾಲು ಸಂಗ್ರಹಣಾ ಕೇಂದ್ರಗಳಿಗಾಗಿ ಕಂಪ್ಯೂಟರೀಕೃತ ತೂಕದ ಪ್ರಮಾಣ ಮತ್ತು FAT/SNF ಪರೀಕ್ಷೆಯ ಸ್ವಯಂಚಾಲಿತ ಏಕೀಕರಣ.",
          image: "/dairy33.png",
        },
        {
          id: 2,
          title: "ರೈತರ ಹಾಲು ಪಾಸ್ಬುಕ್ ಮೊಬೈಲ್ ಆಪ್ (Sankalan)",
          description: "ರೈತರಿಗಾಗಿ ದೈನಂದಿನ ಹಾಲು ಸಂಗ್ರಹಣೆ, ೧೦ ದಿನಗಳ ಬಿಲ್ ಮತ್ತು ಖಾತೆಯ ಲೆಡ್ಜರ್ ವೀಕ್ಷಿಸಲು ಸುಧಾರಿತ ಮೊಬೈಲ್ ಆಪ್.",
          image: "/modern-dairy-farm.png",
        },
        {
          id: 3,
          title: "ಸಹಕಾರಿ ಹಾಲು ಉತ್ಪಾದಕರ ಸಂಘದ ಆಡಳಿತ ERP",
          description: "ಹಾಲು ಸಂಘಗಳು ಮತ್ತು ಒಕ್ಕೂಟಗಳಿಗಾಗಿ ಸಂಗ್ರಹಣೆ, ಪಶು ಆಹಾರ ಮಾರಾಟ, ಸದಸ್ಯರ ನಿರ್ವಹಣೆ ಮತ್ತು ಸಂಪೂರ್ಣ ಆಡಿಟ್ ವರದಿ.",
          image: "/modern-office-dashboard.png",
        },
        {
          id: 4,
          title: "ಹಾಲು ವಿಶ್ಲೇಷಕ ಮತ್ತು ತೂಕದ ಪ್ರಮಾಣ ಏಕೀಕರಣ",
          description: "ಡಿಜಿಟಲ್ ತೂಕದ ಪ್ರಮಾಣಗಳು, ಥರ್ಮಲ್ ಪ್ರಿಂಟರ್ಗಳು, ಫ್ಯಾಟ್ ಮೆಷಿನ್ ಮತ್ತು ಧ್ವನಿ ಘೋಷಣೆಯ ಸಂಪೂರ್ಣ ಏಕೀಕರಣ.",
          image: "/indian-software-office-collaboration.png",
        },
        {
          id: 5,
          title: "ಪಶು ಆಹಾರ ಮತ್ತು ಮುಂಗಡ (Advance) ನಿರ್ವಹಣೆ",
          description: "ಪಶು ಆಹಾರ ಖರೀದಿ-ಮಾರಾಟ ಮತ್ತು ಬಿಲ್ಲುಗಳಿಂದ ಮುಂಗಡಗಳ ಸ್ವಯಂಚಾಲಿತ ಕಡಿತ ಮತ್ತು ಬಡ್ಡಿಯ ಸುಲಭ ಲೆಕ್ಕಾಚಾರ.",
          image: "/goldwin.png",
        }
      ]
    } else if (language === 'hi') {
      return [
        {
          id: 1,
          title: "स्वचालित दूध संग्रह प्रणाली (AMCS)",
          description: "दूध संग्रह केंद्रों के लिए कम्प्यूटरीकृत वजन कांटा और FAT/SNF परीक्षण का स्वचालित एकीकरण.",
          image: "/dairy33.png",
        },
        {
          id: 2,
          title: "किसान दूध पासबुक मोबाइल ऐप (Sankalan)",
          description: "किसानों के लिए दैनिक दूध संग्रह, १० दिनों का बिल और खाता बही देखने के लिए उन्नत मोबाइल ऐप.",
          image: "/modern-dairy-farm.png",
        },
        {
          id: 3,
          title: "सहकारी दूध समिति प्रशासनिक ERP",
          description: "दूध समितियों और संघों के लिए संग्रह, पशु आहार बिक्री, सदस्य प्रबंधन और ऑडिट रिपोर्ट का संपूर्ण समाधान.",
          image: "/modern-office-dashboard.png",
        },
        {
          id: 4,
          title: "दूध विश्लेषक और वजन कांटा एकीकरण",
          description: "डिजिटल वजन कांटे, थर्मल प्रिंटर, फैट मशीन और आवाज घोषणा (Voice Announcement) का सटीक एकीकरण.",
          image: "/indian-software-office-collaboration.png",
        },
        {
          id: 5,
          title: "पशु आहार और अग्रिम (Advance) प्रबंधन",
          description: "पशु आहार खरीद-बिक्री और बिलों से अग्रिम की स्वचालित कटौती और ब्याज की आसान गणना.",
          image: "/goldwin.png",
        }
      ]
    } else {
      return [
        {
          id: 1,
          title: "Automatic Milk Collection System (AMCS)",
          description: "Complete computerized weighing scale and FAT/SNF testing integration for seamless village milk collection.",
          image: "/dairy33.png",
        },
        {
          id: 2,
          title: "Farmer Milk Passbook App (Sankalan)",
          description: "Advanced mobile application for dairy farmers to track real-time daily milk slips, 10-day payment receipts, and ledger statements.",
          image: "/modern-dairy-farm.png",
        },
        {
          id: 3,
          title: "Cooperative Society Admin ERP",
          description: "Comprehensive enterprise administration dashboard to manage collection metrics, member profiles, feed sales, and society-level accounting.",
          image: "/modern-office-dashboard.png",
        },
        {
          id: 4,
          title: "Milk Analyzer & Hardware Integrations",
          description: "High-precision integration with digital weigh scales, FAT testing machines, thermal printers, and multilingual voice announcements.",
          image: "/indian-software-office-collaboration.png",
        },
        {
          id: 5,
          title: "Cattle Feed & Advance Management",
          description: "Streamlined module for tracking cattle feed distribution, inventory, automatic advance/loan recovery from milk bills, and interest calculation.",
          image: "/goldwin.png",
        }
      ]
    }
  }, [language])

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="glass-card hover-lift p-8 flex flex-col justify-between min-h-[480px] group border-t border-white/40 dark:border-zinc-800/50">
              <div className="flex flex-col h-full">
                <Link href={`/product/${product.id}`} className="block relative">
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
                
                <p className="text-gray-600 dark:text-zinc-400 text-base mb-8 flex-grow leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="space-y-4">
                <Link href={`/product/${product.id}`} className="block">
                  <Button variant="outline" className="w-full border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 font-semibold py-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all">
                    {t("home.viewDetails")}
                  </Button>
                </Link>
                <Link href="/schedule-demo" className="block">
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

      <VideoDemoSection />

      <TestimonialsSection />

      <Footer />
    </div>
  )
}

