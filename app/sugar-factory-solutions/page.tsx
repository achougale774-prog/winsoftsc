"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Factory,
  Truck,
  Warehouse,
  Users,
  CheckCircle,
  FileText,
  BarChart3,
  TrendingUp,
  Shield,
  ArrowRight,
  Database,
  Computer,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useMemo } from "react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import Image from "next/image"

export default function SugarFactorySolutionsPage() {
  const { t, language } = useLanguage()

  const sugarModules = useMemo(() => [
    t("sugar.module1"),
    t("sugar.module2"),
    t("sugar.module3"),
    t("sugar.module4"),
    t("sugar.module5"),
    t("sugar.module6"),
    t("sugar.module7"),
    t("sugar.module8"),
    t("sugar.module9"),
  ], [t])

  const capabilities = useMemo(() => [
    { title: t("sugar.caneProc"), icon: Truck, color: "red" },
    { title: t("sugar.farmerMgmt"), icon: Users, color: "blue" },
    { title: t("sugar.prodTracking"), icon: Factory, color: "orange" },
    { title: t("sugar.financialERP"), icon: BarChart3, color: "green" },
  ], [t])

  const recommendedSolutions = useMemo(() => {
    if (language === 'mr') {
      return [
        {
          id: 1,
          title: "स्वयंचलित दूध संकलन प्रणाली (AMCS)",
          description: "दूध संकलन केंद्रांसाठी संगणकीकृत वजन काटा आणि FAT/SNF तपासणीचे स्वयंचलित एकत्रीकरण.",
          image: "/dairy33.png",
          link: "/product/1",
          tag: "डेअरी सोल्यूशन"
        },
        {
          id: 2,
          title: "शेतकरी दूध पासबुक मोबाईल अॅप (Sankalan)",
          description: "शेतकऱ्यांसाठी दररोजचे दूध संकलन, १० दिवसांचे बिल आणि खात्याचे लेजर पाहण्यासाठीचे प्रगत मोबाईल अॅप्लिकेशन.",
          image: "/modern-dairy-farm.png",
          link: "/product/2",
          tag: "मोबाईल अॅप"
        },
        {
          id: 3,
          title: "सहकारी दूध संस्था प्रशासकीय ERP",
          description: "दूध संस्था आणि संघांसाठी संकलन, पशूखाद्य विक्री, सभासद व्यवस्थापन आणि ऑडिट रिपोर्टचे संपूर्ण सोल्यूशन.",
          image: "/modern-office-dashboard.png",
          link: "/product/3",
          tag: "ERP सिस्टीम"
        },
        {
          id: "gold",
          title: "सुवर्ण पेढी व दागिने व्यवस्थापन प्रणाली (Goldwin)",
          description: "सराफा दुकानांसाठी सोन्या-चांदीचे हिशोब, बारकोड बिलिंग, गहाणवट (Girvi) व्यवस्थापन आणि GST रिपोर्टचे संपूर्ण सॉफ्टवेअर.",
          image: "/jewelry-store-system.png",
          link: "/gold-industry-solutions",
          tag: "सुवर्ण सोल्यूशन"
        }
      ]
    } else if (language === 'kn') {
      return [
        {
          id: 1,
          title: "ಸ್ವಯಂಚಾಲಿತ ಹಾಲು ಸಂಗ್ರಹಣೆ ವ್ಯವಸ್ಥೆ (AMCS)",
          description: "ಹಾಲು ಸಂಗ್ರಹಣಾ ಕೇಂದ್ರಗಳಿಗಾಗಿ ಕಂಪ್ಯೂಟರೀಕೃತ ತೂಕದ ಪ್ರಮಾಣ ಮತ್ತು FAT/SNF ಪರೀಕ್ಷೆಯ ಸ್ವಯಂಚಾಲಿತ ಏಕೀಕರಣ.",
          image: "/dairy33.png",
          link: "/product/1",
          tag: "ಡೈರಿ ಪರಿಹಾರ"
        },
        {
          id: 2,
          title: "ರೈತರ ಹಾಲು ಪಾಸ್ಬುಕ್ ಮೊಬೈಲ್ ಆಪ್ (Sankalan)",
          description: "ರೈತರಿಗಾಗಿ ದೈನಂದಿನ ಹಾಲು ಸಂಗ್ರಹಣೆ, ೧೦ ದಿನಗಳ ಬಿಲ್ ಮತ್ತು ಖಾತೆಯ ಲೆಡ್ಜರ್ ವೀಕ್ಷಿಸಲು ಸುಧಾರಿತ ಮೊಬೈಲ್ ಆಪ್.",
          image: "/modern-dairy-farm.png",
          link: "/product/2",
          tag: "ಮೊಬೈಲ್ ಆಪ್"
        },
        {
          id: 3,
          title: "ಸಹಕಾರಿ ಹಾಲು ಉತ್ಪಾದಕರ ಸಂಘದ ಆಡಳಿತ ERP",
          description: "ಹಾಲು ಸಂಘಗಳು ಮತ್ತು ಒಕ್ಕೂಟಗಳಿಗಾಗಿ ಸಂಗ್ರಹಣೆ, ಪಶು ಆಹಾರ ಮಾರಾಟ, ಸದಸ್ಯರ ನಿರ್ವಹಣೆ ಮತ್ತು ಸಂಪೂರ್ಣ ಆಡಿಟ್ ವರದಿ.",
          image: "/modern-office-dashboard.png",
          link: "/product/3",
          tag: "ERP ಸಿಸ್ಟಮ್"
        },
        {
          id: "gold",
          title: "ಚಿನ್ನದ ಅಂಗಡಿ ಮತ್ತು ಆಭರಣ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ (Goldwin)",
          description: "ಆಭರಣ ಮಳಿಗೆಗಳಿಗಾಗಿ ಚಿನ್ನ ಮತ್ತು ಬೆಳ್ಳಿಯ ಲೆಕ್ಕಾಚಾರ, ಬಾರ್‌ಕೋಡ್ ಬಿಲ್ಲಿಂಗ್, ಗಿರವಿ ನಿರ್ವಹಣೆ ಮತ್ತು ಜಿಎಸ್‌ಟಿ ವರದಿಗಳ ಸಂಪೂರ್ಣ ಸಾಫ್ಟ್‌ವೇರ್.",
          image: "/jewelry-store-system.png",
          link: "/gold-industry-solutions",
          tag: "ಚಿನ್ನದ ಪರಿಹಾರ"
        }
      ]
    } else if (language === 'hi') {
      return [
        {
          id: 1,
          title: "स्वचालित दूध संग्रह प्रणाली (AMCS)",
          description: "दूध संग्रह केंद्रों के लिए कम्प्यूटरीकृत वजन कांटा और FAT/SNF परीक्षण का स्वचालित एकीकरण.",
          image: "/dairy33.png",
          link: "/product/1",
          tag: "डेयरी समाधान"
        },
        {
          id: 2,
          title: "किसान दूध पासबुक mobile app (Sankalan)",
          description: "किसानों के लिए दैनिक दूध संग्रह, १० दिनों का बिल और खाता बही देखने के लिए उन्नत मोबाइल ऐप.",
          image: "/modern-dairy-farm.png",
          link: "/product/2",
          tag: "मोबाइल ऐप"
        },
        {
          id: 3,
          title: "सहकारी दूध समिति प्रशासनिक ERP",
          description: "दूध समितियों और संघों के लिए संग्रह, पशु आहार बिक्री, सदस्य प्रबंधन और ऑडिट रिपोर्ट का संपूर्ण समाधान.",
          image: "/modern-office-dashboard.png",
          link: "/product/3",
          tag: "ERP सिस्टम"
        },
        {
          id: "gold",
          title: "स्वर्ण आभूषण शोरूम प्रबंधन प्रणाली (Goldwin)",
          description: "ज्वेलरी शोरूम के लिए सोने-चांदी का हिसाब, बारकोड बिलिंग, गिरवी प्रबंधन और GST रिपोर्ट का संपूर्ण सॉफ्टवेयर.",
          image: "/jewelry-store-system.png",
          link: "/gold-industry-solutions",
          tag: "स्वर्ण समाधान"
        }
      ]
    } else {
      return [
        {
          id: 1,
          title: "Automatic Milk Collection System (AMCS)",
          description: "Complete computerized weighing scale and FAT/SNF testing integration for seamless village milk collection.",
          image: "/dairy33.png",
          link: "/product/1",
          tag: "Dairy Solution"
        },
        {
          id: 2,
          title: "Farmer Milk Passbook App (Sankalan)",
          description: "Advanced mobile application for dairy farmers to track real-time daily milk slips, 10-day payment receipts, and ledger statements.",
          image: "/modern-dairy-farm.png",
          link: "/product/2",
          tag: "Mobile App"
        },
        {
          id: 3,
          title: "Cooperative Society Admin ERP",
          description: "Comprehensive enterprise administration dashboard to manage collection metrics, member profiles, feed sales, and society-level accounting.",
          image: "/modern-office-dashboard.png",
          link: "/product/3",
          tag: "ERP System"
        },
        {
          id: "gold",
          title: "Gold Jewellery Showroom ERP (Goldwin)",
          description: "Complete billing, account management, barcode scanning, Girvi/pledge tracking, and GST returns software for jewellery showrooms.",
          image: "/jewelry-store-system.png",
          link: "/gold-industry-solutions",
          tag: "Gold Solution"
        }
      ]
    }
  }, [language])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950 border-b">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <Factory className="h-6 w-6 text-red-600" />
                  </div>
                  <Badge variant="secondary" className="px-3 py-1 font-sans bg-red-50 text-red-700 border-red-200">
                    {t("sugar.sugarBadge")}
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-6xl font-sans font-bold mb-6 text-gray-900 dark:text-zinc-100 leading-tight">
                  {t("sugar.sugarHeroTitle")}
                </h1>
                <p className="text-xl text-gray-600 dark:text-zinc-400 font-serif leading-relaxed mb-8">
                  {t("sugar.sugarHeroSubtitle")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/schedule-demo">
                    <Button
                      size="lg"
                      className="font-sans font-semibold px-8 py-3 bg-[#1E94A4] hover:bg-[#0B7989] text-white"
                    >
                      {t("hero.cta1")}
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button variant="outline" size="lg" className="font-sans font-semibold px-8 py-3 bg-transparent">
                      {t("sugar.viewModules")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="p-4 bg-red-50 rounded-xl border border-red-100 inline-block">
                  <p className="text-sm font-sans font-bold text-red-800">
                    {t("sugar.trustedSugar")}
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/sugerfac.png"
                  alt="Sugar factory management system"
                  width={600}
                  height={450}
                  className="rounded-2xl shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-4">
                {t("sugar.gateToGateTitle")}
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 font-serif max-w-2xl mx-auto text-lg">
                {t("sugar.gateToGateSubtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {capabilities.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-zinc-950 p-6 rounded-2xl shadow-sm dark:shadow-none hover:shadow-md dark:shadow-none transition-shadow flex flex-col items-center text-center">
                  <div className={`p-4 rounded-xl mb-4 bg-[#1E94A4]/10`}>
                    <item.icon className={`h-8 w-8 text-[#1E94A4]`} />
                  </div>
                  <h3 className="font-sans font-bold text-gray-900 dark:text-zinc-100">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Product Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6">
                  {t("sugar.sugarSystemTitle")}
                </h2>
                <p className="text-lg text-gray-600 dark:text-zinc-400 font-serif mb-8">
                  {t("sugar.sugarSystemDesc")}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {sugarModules.map((module, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-zinc-300 font-sans font-medium">{module}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link href="/schedule-demo">
                    <Button size="lg" className="bg-[#1E94A4] hover:bg-[#0B7989] text-white font-sans font-bold px-10">
                      {t("sugar.requestModules")}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-slate-50 dark:bg-black border-0 shadow-sm dark:shadow-none p-6 flex flex-col items-center text-center">
                  <Warehouse className="h-10 w-10 text-red-600 mb-4" />
                  <h4 className="font-sans font-bold mb-2">
                    {t("sugar.inventoryTitle")}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 font-serif">
                    {t("sugar.inventoryDesc")}
                  </p>
                </Card>
                <Card className="bg-slate-50 dark:bg-black border-0 shadow-sm dark:shadow-none p-6 flex flex-col items-center text-center">
                  <Database className="h-10 w-10 text-blue-600 mb-4" />
                  <h4 className="font-sans font-bold mb-2">
                    {t("sugar.paymentTitle")}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 font-serif">
                    {t("sugar.paymentDesc")}
                  </p>
                </Card>
                <Card className="bg-slate-50 dark:bg-black border-0 shadow-sm dark:shadow-none p-6 flex flex-col items-center text-center">
                  <Computer className="h-10 w-10 text-orange-600 mb-4" />
                  <h4 className="font-sans font-bold mb-2">
                    {t("sugar.misReports")}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 font-serif">
                    {t("sugar.misReportsDesc")}
                  </p>
                </Card>
                <Card className="bg-slate-50 dark:bg-black border-0 shadow-sm dark:shadow-none p-6 flex flex-col items-center text-center">
                  <FileText className="h-10 w-10 text-green-600 mb-4" />
                  <h4 className="font-sans font-bold mb-2">
                    {t("sugar.complianceTitle")}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 font-serif">
                    {t("sugar.complianceDesc")}
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-4 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-12">
              {t("sugar.perfEffTitle")}
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="flex gap-4">
                <div className="bg-red-600 p-3 rounded-xl h-fit">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">
                    {t("sugar.robustSecurity")}
                  </h4>
                  <p className="text-slate-400 font-serif">
                    {t("sugar.robustSecurityDesc")}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-red-600 p-3 rounded-xl h-fit">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">
                    {t("sugar.optimizedProc")}
                  </h4>
                  <p className="text-slate-400 font-serif">
                    {t("sugar.optimizedProcDesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950 border-t border-slate-100 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100">
                {t("product.videoTitle")}
              </h2>
              <div className="h-1.5 w-20 bg-red-600 mx-auto rounded-full" />
              <p className="text-lg text-gray-600 dark:text-zinc-400 font-serif">
                {t("product.videoDesc")}
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title={t("product.videoTitle")}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
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
                    <Link href="/schedule-demo" className="block">
                      <Button className="w-full bg-[#1E94A4] hover:bg-[#0B7989] text-white font-bold py-4 rounded-xl text-xs transition-all shadow-sm hover:shadow-[#1E94A4]/25 font-sans">
                        {t("home.requestDemo")}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#1E94A4] to-[#0B7989] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-sans font-bold mb-6">
                {t("sugar.modernizeSugarTitle")}
              </h2>
              <p className="text-xl opacity-90 mb-8 font-serif">
                {t("sugar.modernizeSugarDesc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/schedule-demo">
                  <Button size="lg" className="bg-white dark:bg-zinc-950 text-[#1E94A4] hover:bg-slate-100 font-sans font-bold px-10">
                    {t("sugar.freeERPDemo")}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white dark:bg-zinc-950/10 font-sans font-bold px-10">
                    {t("sugar.connectWithUs")}
                  </Button>
                </Link>
                <WhatsAppButton productName={t("sugar.sugarSystemTitle")} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
