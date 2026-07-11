"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Milk,
  Monitor,
  Rocket,
  Globe,
  Store,
  Handshake,
  Building2,
  Landmark,
  Shell,
  Package,
  ArrowRight,
  Users,
  Factory,
  Smartphone,
  Cloud,
  CheckCircle2,
  Brain,
  TrendingUp,
  Shield,
  Cpu,
  Sliders,
  Eye,
  FileText,
  Check
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { useState, useMemo } from "react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts"
import { MobileAppSimulator } from "@/components/mobile-app-simulator"
import { MISReportsPreview } from "@/components/mis-reports-preview"
import { HardwareCompatibility } from "@/components/hardware-compatibility"

export default function DairySolutionsPage() {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState("modules")

  const modules = useMemo(() => [
    {
      key: "collection",
      icon: Milk,
      title: t("dairy5.modules.collection.title"),
      items: t("dairy5.modules.collection.items") as unknown as string[] || []
    },
    {
      key: "billing",
      icon: Landmark,
      title: t("dairy5.modules.billing.title"),
      items: t("dairy5.modules.billing.items") as unknown as string[] || []
    },
    {
      key: "rebate",
      icon: Users,
      title: t("dairy5.modules.rebate.title"),
      items: t("dairy5.modules.rebate.items") as unknown as string[] || []
    },
    {
      key: "inventory",
      icon: Package,
      title: t("dairy5.modules.inventory.title"),
      items: t("dairy5.modules.inventory.items") as unknown as string[] || []
    },
    {
      key: "accounting",
      icon: Store,
      title: t("dairy5.modules.accounting.title"),
      items: t("dairy5.modules.accounting.items") as unknown as string[] || []
    },
    {
      key: "reports",
      icon: Factory,
      title: t("dairy5.modules.reports.title"),
      items: t("dairy5.modules.reports.items") as unknown as string[] || []
    }
  ], [t])

  const keyFeatures = useMemo(() => [
    {
      key: "transparency",
      icon: Eye,
      title: t("dairy5.keyFeatures.transparency.title"),
      items: t("dairy5.keyFeatures.transparency.items") as unknown as string[] || []
    },
    {
      key: "security",
      icon: Shield,
      title: t("dairy5.keyFeatures.security.title"),
      items: t("dairy5.keyFeatures.security.items") as unknown as string[] || []
    },
    {
      key: "integration",
      icon: Cpu,
      title: t("dairy5.keyFeatures.integration.title"),
      items: t("dairy5.keyFeatures.integration.items") as unknown as string[] || []
    },
    {
      key: "rates",
      icon: Sliders,
      title: t("dairy5.keyFeatures.rates.title"),
      items: t("dairy5.keyFeatures.rates.items") as unknown as string[] || []
    }
  ], [t])

  const operations = useMemo(() => t("dairy5.operations") as unknown as string[] || [], [t])
  const audit = useMemo(() => t("dairy5.audit") as unknown as string[] || [], [t])
  const benefits = useMemo(() => t("dairy5.benefits") as unknown as string[] || [], [t])
  const suitable = useMemo(() => t("dairy5.suitable") as unknown as string[] || [], [t])

  const mobileApps = useMemo(() => [
    {
      key: "farmer",
      title: t("dairy5.mobileApps.farmer.title"),
      items: t("dairy5.mobileApps.farmer.items") as unknown as string[] || []
    },
    {
      key: "admin",
      title: t("dairy5.mobileApps.admin.title"),
      items: t("dairy5.mobileApps.admin.items") as unknown as string[] || []
    },
    {
      key: "collection",
      title: t("dairy5.mobileApps.collection.title"),
      items: t("dairy5.mobileApps.collection.items") as unknown as string[] || []
    }
  ], [t])



  const dairyProducts = useMemo(() => {
    if (language === 'mr') {
      return [
        {
          id: "1",
          title: "संपूर्ण डेअरी सॉफ्टवेअर सोल्यूशन्स",
          description: "सहकारी दूध संस्था, दूध संकलन केंद्रे आणि डेअरी प्लांटसाठी डिझाइन केलेले एक व्यापक दुग्ध व्यवस्थापन सोल्यूशन आहे.",
          image: "/live-image-dairy/5.0.png",
          tag: "डेअरी सोल्यूशन्स",
        },
        {
          id: "web-dairy",
          title: "वेब-बेस्ड डेअरी सॉफ्टवेअर सोल्यूशन्स",
          description: "वेब डेअरी हे सहकारी दूध संस्था, दूध संकलन केंद्रे आणि डेअरी प्लांटसाठी डिझाइन केलेले एक व्यापक वेब-बेस्ड दुग्ध व्यवस्थापन सोल्यूशन आहे.",
          image: "/live-image-dairy/first-page.png",
          tag: "वेब डेअरी",
        },
        {
          id: "billing-5",
          title: "डेअरी ५.० – दूध बिलिंग सॉफ्टवेअर",
          description: t("billing5.overview") || "दुग्ध उत्पादक शेतकऱ्यांसाठी अचूक दूध बिल निर्मिती, पेमेंट गणना आणि सभासद खातेवही (लेझर) व्यवस्थापन स्वयंचलित करा. उचल (ॲडव्हान्स), खाद्य वसुली, कर्ज कपात, फरक (रिबेट) आणि लाभांश एकाच प्रणालीमध्ये व्यवस्थापित करा. शेतकऱ्यांसाठी सुलभ आणि पारदर्शक पेमेंट प्रक्रिया सुनिश्चित करा.",
          image: "/live-image-dairy/milk_collection_5.0.png",
          tag: "बिलिंग सॉफ्टवेअर",
        },
        {
          id: "2",
          title: "शेतकरी मोबाईल ॲप",
          description: "दूध उत्पादक शेतकऱ्यांसाठी दैनिक दूध संकलन, १० दिवसांचे बिल आणि खात्याचे लेझर तपासण्यासाठीचे प्रगत मोबाईल ॲप्लिकेशन.",
          image: "/modern-dairy-farm.png",
          tag: "शेतकरी ॲप",
        },
        {
          id: "3",
          title: "डेअरी प्रशासक ॲप",
          description: "डेअरी प्रशासकांसाठी संकलन देखरेख, डॅशबोर्ड आणि विश्लेषण आणि अहवाल प्रवेश.",
          image: "/modern-office-dashboard.png",
          tag: "प्रशासक ॲप",
        },
        {
          id: "5",
          title: "उत्पादन व्यवस्थापन प्रणाली",
          description: "कच्च्या दुधाच्या स्वागतापासून ते तयार उत्पादनांच्या उत्पादनापर्यंत संपूर्ण दूध प्रक्रिया चक्र रिअल-टाइम मॉनिटरिंग आणि इन्व्हेंटरी एकत्रीकरणासह व्यवस्थापित करा.",
          image: "/goldwin.png",
          tag: "उत्पादन प्रणाली",
        },
        {
          id: "6",
          title: "वाहतूक व्यवस्थापन प्रणाली (Transport Management)",
          description: "दूध संकलन मार्ग, वाहन चालन, डिस्पॅच आणि वाहतूक खर्चाचे कार्यक्षमतेने व्यवस्थापन करा.",
          image: "/transport.jpg",
          tag: "वाहतूक व्यवस्थापन",
        },
      ]
    } else if (language === 'kn') {
      return [
        {
          id: "1",
          title: "ಸಂಪೂರ್ಣ ಡೈರಿ ಸಾಫ್ಟ್‌ವೇರ್ ಪರಿಹಾರಗಳು",
          description: "ಡೈರಿ ಸಹಕಾರಿ ಸಂಘಗಳು, ಹಾಲು ಸಂಗ್ರಹಣಾ ಕೇಂದ್ರಗಳು ಮತ್ತು ಡೈರಿ ಪ್ಲಾಂಟ್‌ಗಳಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸಮಗ್ರ ಡೈರಿ ನಿರ್ವಹಣಾ ಪರಿಹಾರವಾಗಿದೆ.",
          image: "/live-image-dairy/5.0.png",
          tag: "ಡೈರಿ ಪರಿಹಾರಗಳು",
        },
        {
          id: "web-dairy",
          title: "ವೆಬ್-ಆಧಾರಿತ ಡೈರಿ ಸಾಫ್ಟ್‌ವೇರ್ ಪರಿಹಾರಗಳು",
          description: "ವೆಬ್ ಡೈರಿ ಎನ್ನುವುದು ಡೈರಿ ಸಹಕಾರಿ ಸಂಘಗಳು, ಹಾಲು ಸಂಗ್ರಹಣಾ ಕೇಂದ್ರಗಳು ಮತ್ತು ಡೈರಿ ಪ್ಲಾಂಟ್‌ಗಳಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸಮಗ್ರ ವೆಬ್-ಆಧಾರಿತ ಡೈರಿ ನಿರ್ವಹಣಾ ಪರಿಹಾರವಾಗಿದೆ.",
          image: "/live-image-dairy/first-page.png",
          tag: "ವೆಬ್ ಡೈರಿ",
        },
        {
          id: "billing-5",
          title: "ಡೈರಿ ೫.೦ – ಹಾಲು ಬಿಲ್ಲಿಂಗ್ ಸಾಫ್ಟ್‌ವೇರ್",
          description: t("billing5.overview") || "ಡೈರಿ ರೈತರಿಗಾಗಿ ನಿಖರವಾದ ಹಾಲು ಬಿಲ್ ಉತ್ಪಾದನೆ, ಪಾವತಿ ಲೆಕ್ಕಾಚಾರಗಳು ಮತ್ತು ಸದಸ್ಯರ ಲೆಡ್ಜರ್ ನಿರ್ವಹಣೆಯನ್ನು ಸ್ವಯಂಚಾಲಿತಗೊಳಿಸಿ. ಮುಂಗಡಗಳು, ಆಹಾರ ವಸೂಲಾತಿ, ಸಾಲ ಕಡಿತಗಳು, ರಿಯಾಯಿತಿ ಮತ್ತು ಲಾಭಾಂಶವನ್ನು ಒಂದೇ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ನಿರ್ವಹಿಸಿ. ರೈತರಿಗೆ ಜಗಳವಿಲ್ಲದ ಮತ್ತು ಪಾರದರ್ಶಕ ಪಾವತಿ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
          image: "/live-image-dairy/milk_collection_5.0.png",
          tag: "ಬಿಲ್ಲಿಂಗ್ ಸಾಫ್ಟ್‌ವೇರ್",
        },
        {
          id: "2",
          title: "ರೈತರ ಮೊಬೈಲ್ ಆಪ್",
          description: "ಡೈರಿ ರೈತರಿಗಾಗಿ ದೈನಂದಿನ ಹಾಲು ಸಂಗ್ರಹಣೆ, ೧೦ ದಿನಗಳ ಬಿಲ್ ಮತ್ತು ಖಾತೆಯ ಲೆಡ್ಜರ್ ವೀಕ್ಷಿಸಲು ಸುಧಾರಿತ ಮೊಬೈಲ್ ಆಪ್.",
          image: "/modern-dairy-farm.png",
          tag: "ರೈತರ ಆಪ್",
        },
        {
          id: "3",
          title: "ಡೈರಿ ಅಡ್ಮಿನಿಸ್ಟ್ರೇಟರ್ ಆಪ್",
          description: "ಡೈರಿ ನಿರ್ವಾಹಕರಿಗಾಗಿ ಸಂಗ್ರಹಣೆಯ ಮೇಲ್ವಿಚಾರಣೆ, ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಮತ್ತು ವಿಶ್ಲೇಷಣೆ, ಮತ್ತು ವರದಿ ಪ್ರವೇಶ.",
          image: "/modern-office-dashboard.png",
          tag: "ಅಡ್ಮಿನ್ ಆಪ್",
        },
        {
          id: "5",
          title: "ಉತ್ಪಾದನಾ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ",
          description: "ಕಚ್ಚಾ ಹಾಲಿನ ಸ್ವೀಕೃತಿಯಿಂದ ಹಿಡಿದು ಸಿದ್ಧಪಡಿಸಿದ ಉತ್ಪನ್ನಗಳ ಉತ್ಪಾದನೆಯವರೆಗೆ ಸಂಪೂರ್ಣ ಹಾಲು ಸಂಸ್ಕರಣಾ ಚಕ್ರವನ್ನು ನೈಜ-ಸಮಯದ ಮೇಲ್ವಿಚಾರಣೆ ಮತ್ತು ದಾಸ್ತಾನು ಏಕೀಕರಣದೊಂದಿಗೆ ನಿರ್ವಹಿಸಿ.",
          image: "/goldwin.png",
          tag: "ಉತ್ಪಾದನಾ ವ್ಯವಸ್ಥೆ",
        },
        {
          id: "6",
          title: "ಸಾರಿಗೆ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ (Transport Management)",
          description: "ಹಾಲು ಸಂಗ್ರಹಣೆ ಮಾರ್ಗಗಳು, ವಾಹನ ಕಾರ್ಯಾಚರಣೆಗಳು, ರವಾನೆಗಳು ಮತ್ತು ಸಾರಿಗೆ ವೆಚ್ಚಗಳನ್ನು ದಕ್ಷತೆಯಿಂದ ನಿರ್ವಹಿಸಿ.",
          image: "/transport.jpg",
          tag: "ಸಾರಿಗೆ ನಿರ್ವಹಣೆ",
        },
      ]
    } else if (language === 'hi') {
      return [
        {
          id: "1",
          title: "संपूर्ण डेयरी सॉफ्टवेयर सॉल्यूशंस",
          description: "डेयरी सहकारी समितियों, दूध संग्रह केंद्रों और डेयरी संयंत्रों के लिए डिज़ाइन किया गया एक व्यापक डेयरी प्रबंधन समाधान है।",
          image: "/live-image-dairy/5.0.png",
          tag: "डेयरी समाधान",
        },
        {
          id: "web-dairy",
          title: "वेब-बेस्ड डेयरी सॉफ्टवेयर सॉल्यूशंस",
          description: "वेब डेयरी सहकारी समितियों, दूध संग्रह केंद्रों and डेयरी संयंत्रों के लिए डिज़ाइन किया गया एक व्यापक वेब-आधारित डेयरी प्रबंधन समाधान है।",
          image: "/live-image-dairy/first-page.png",
          tag: "वेब डेयरी",
        },
        {
          id: "billing-5",
          title: "डेयरी ५.० – दूध बिलिंग सॉफ्टवेयर",
          description: t("billing5.overview") || "डेयरी किसानों के लिए सटीक दूध बिल निर्माण, भुगतान गणना और सदस्य खाता बही प्रबंधन को स्वचालित करें। अग्रिम (एडवांस), चारा वसूली, ऋण कटौती, छूट और लाभांश को एक ही प्रणाली में प्रबंधित करें। किसानों के लिए आसान और पारदर्शी भुगतान प्रक्रिया सुनिश्चित करें।",
          image: "/live-image-dairy/milk_collection_5.0.png",
          tag: "बिलिंग सॉफ्टवेयर",
        },
        {
          id: "2",
          title: "किसान मोबाइल ऐप",
          description: "डेयरी किसानों के लिए दैनिक दूध संग्रह, १० दिनों के भुगतान रसीद और खाता बही विवरण को ट्रैक करने के लिए उन्नत मोबाइल एप्लिकेशन।",
          image: "/modern-dairy-farm.png",
          tag: "किसान ऐप",
        },
        {
          id: "3",
          title: "डेयरी प्रशासक ऐप",
          description: "डेयरी प्रशासकों के लिए संग्रह निगरानी, ​​डैशबोर्ड और विश्लेषण, और रिपोर्ट तक पहुंच।",
          image: "/modern-office-dashboard.png",
          tag: "प्रशासक ऐप",
        },
        {
          id: "5",
          title: "उत्पादन प्रबंधन प्रणाली",
          description: "कच्चे दूध की प्राप्ति से लेकर तैयार उत्पाद के उत्पादन तक संपूर्ण दूध प्रसंस्करण चक्र को वास्तविक समय की निगरानी और इन्वेंट्री एकीकरण के साथ प्रबंधित करें।",
          image: "/goldwin.png",
          tag: "उत्पादन प्रणाली",
        },
        {
          id: "6",
          title: "परिवहन प्रबंधन प्रणाली (Transport Management)",
          description: "दूध संग्रह मार्गों, वाहन संचालन, प्रेषण और परिवहन लागतों को कुशलतापूर्वक प्रबंधित करें।",
          image: "/transport.jpg",
          tag: "परिवहन प्रबंधन",
        },
      ]
    } else {
      return [
        {
          id: "1",
          title: "Complete Dairy Software Solutions",
          description: "A comprehensive dairy management solution designed for Dairy Cooperative Societies, Milk Collection Centers, and Dairy Plants.",
          image: "/live-image-dairy/5.0.png",
          tag: "Dairy Solutions",
        },
        {
          id: "web-dairy",
          title: "Web-based Dairy Software Solutions",
          description: "Web Dairy is a comprehensive web-based dairy management solution designed for Dairy Cooperative Societies, Milk Collection Centers, and Dairy Plants.",
          image: "/live-image-dairy/first-page.png",
          tag: "Web Dairy",
        },
        {
          id: "billing-5",
          title: "Dairy 5.0 – Milk Billing Software",
          description: t("billing5.overview") || "Automate milk bill generation, payment calculations, and member ledger management with complete accuracy. Manage advances, feed recovery, loan deductions, rebates, and dividends in a single system. Ensure transparent and hassle-free payment processing for dairy farmers.",
          image: "/live-image-dairy/milk_collection_5.0.png",
          tag: "Billing Software",
        },
        {
          id: "2",
          title: "Farmer Mobile App",
          description: "Advanced mobile application for dairy farmers to track real-time daily milk slips, 10-day payment receipts, and ledger statements.",
          image: "/modern-dairy-farm.png",
          tag: "Farmer App",
        },
        {
          id: "3",
          title: "Dairy Administrator App",
          description: "Collection monitoring, dashboard & analytics, and report access for dairy administrators.",
          image: "/modern-office-dashboard.png",
          tag: "Admin App",
        },
        {
          id: "5",
          title: "Production Management System",
          description: "Manage the complete milk processing cycle from raw milk reception to finished product production with real-time monitoring and inventory integration.",
          image: "/goldwin.png",
          tag: "Production System",
        },
        {
          id: "6",
          title: "Transport Management System",
          description: "Efficiently manage milk collection routes, vehicle operations, dispatches, and transportation costs.",
          image: "/transport.jpg",
          tag: "Transport Management",
        },
      ]
    }
  }, [language])



  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950 border-b relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl">

                <h1 className="text-4xl md:text-6xl font-sans font-bold mb-6 text-gray-900 dark:text-zinc-100 tracking-tight leading-[1.15]">
                  {language === 'mr' ? "संपूर्ण डेअरी सॉफ्टवेअर सोल्यूशन्स" :
                   language === 'kn' ? "ಸಂಪೂರ್ಣ ಡೈರಿ ಸಾಫ್ಟ್‌ವೇರ್ ಪರಿಹಾರಗಳು" :
                   language === 'hi' ? "संपूर्ण डेयरी सॉफ्टवेयर सॉल्यूशंस" : "Complete Dairy Software Solutions"}
                </h1>
                <p className="text-xl text-gray-600 dark:text-zinc-400 font-serif leading-relaxed mb-10 max-w-xl">
                  {t("dairy5.overview")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact?inquiryType=demo">
                    <Button
                      size="lg"
                      className="font-sans font-bold px-8 py-4 bg-[#1E94A4] hover:bg-[#0B7989] text-white rounded-xl shadow-lg dark:shadow-none shadow-[#1E94A4]/20"
                    >
                      {t("hero.cta1")}
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="font-sans font-bold px-8 py-4 bg-transparent border-2 border-slate-200 dark:border-zinc-800 hover:border-[#1E94A4] hover:text-[#1E94A4] rounded-xl"
                    >
                      {t("hero.cta2")}
                    </Button>
                  </Link>
                </div>
                <div className="mt-12 grid grid-cols-3 gap-8 border-t border-slate-100 dark:border-zinc-800 pt-8">
                  <div>
                    <div className="text-3xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-1">25+</div>
                    <div className="text-sm text-gray-500 dark:text-zinc-400 font-serif">{t("dairy.yearsExp")}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-1">500+</div>
                    <div className="text-sm text-gray-500 dark:text-zinc-400 font-serif">{t("dairy.happyClients")}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-1">99.9%</div>
                    <div className="text-sm text-gray-500 dark:text-zinc-400 font-serif">{t("dairy.uptime")}</div>
                  </div>
                </div>
              </div>
              <div className="relative lg:h-[600px] hidden lg:block">
                <div className="absolute inset-0 bg-blue-600/5 rounded-[40px] rotate-3 translate-x-4 translate-y-4" />
                <Image
                  src="/live-image-dairy/5.0.png"
                  alt="Modern Dairy Management"
                  width={800}
                  height={600}
                  className="rounded-[40px] shadow-2xl relative z-10 object-cover h-full"
                />
              </div>
            </div>
          </div>
        </section>


        {/* Suggested Dairy Products & Solutions Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-zinc-900 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 dark:bg-[#1E94A4]/20 text-[#1E94A4] text-xs font-sans font-bold mb-4 border border-[#1E94A4]/20">
                📦 {language === 'mr' ? "शिफारस केलेली उत्पादने व सोल्यूशन्स" : language === 'kn' ? "ಶಿಫಾರಸು ಮಾಡಿದ ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಪರಿಹಾರಗಳು" : language === 'hi' ? "अनुशंसित उत्पाद और समाधान" : "Recommended Products & Solutions"}
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6">
                {language === 'mr' ? "आमची शिफारस केलेली डेअरी उत्पादने" :
                  language === 'kn' ? "ನಮ್ಮ ಶಿಫಾರಸು ಮಾಡಿದ ಡೈರಿ ಉತ್ಪನ್ನಗಳು" :
                    language === 'hi' ? "हमारे अनुशंसित डेयरी उत्पाद" : "Our Recommended Dairy Products"}
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 font-serif max-w-3xl mx-auto text-lg">
                {language === 'mr' ? "तुमच्या डेअरी व्यवसायाला गती देण्यासाठी आणि कामकाज सोपे करण्यासाठी तयार करण्यात आलेली प्रगत सॉफ्टवेअर्स." :
                  language === 'kn' ? "ನಿಮ್ಮ ಡೈರಿ ವ್ಯವಹಾರವನ್ನು ವೇಗಗೊಳಿಸಲು ಮತ್ತು ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ಸುಗಮಗೊಳಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸುಧಾರಿತ ಸಾಫ್ಟ್‌ವೇರ್." :
                    language === 'hi' ? "आपके डेयरी व्यवसाय को गति देने और संचालन को आसान बनाने के लिए डिज़ाइन किए गए उन्नत सॉफ़्टवेयर।" : "Advanced software tools designed specifically to streamline your dairy operations, payments, and member relationships."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dairyProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-zinc-950 hover-lift p-8 rounded-[2rem] flex flex-col justify-between min-h-[480px] group border border-slate-100 dark:border-zinc-800/50 shadow-sm"
                >
                  <div className="flex flex-col h-full">
                    <Link href={`/product/${product.id}`} className="block relative">
                      <div className="absolute inset-0 bg-[#1E94A4]/10 dark:bg-[#1E94A4]/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                      <div className="relative w-full h-48 mb-8 rounded-2xl overflow-hidden border border-slate-100 dark:border-zinc-800 shadow-xs">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </Link>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 leading-tight mb-4 group-hover:text-[#1E94A4] dark:group-hover:text-[#22d3ee] transition-colors">
                      {product.title}
                    </h3>

                    <p className="text-gray-600 dark:text-zinc-400 text-sm mb-8 flex-grow leading-relaxed font-serif">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Link href={`/product/${product.id}`} className="block">
                      <Button variant="outline" className="w-full border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 font-semibold py-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all">
                        {t("home.viewDetails")}
                      </Button>
                    </Link>
                    <Link href="/contact?inquiryType=demo" className="block">
                      <Button className="w-full bg-gradient-to-r from-[#1E94A4] to-[#22d3ee] hover:from-[#0B7989] hover:to-[#1E94A4] text-white font-bold py-6 rounded-2xl transition-all shadow-lg hover:shadow-[#1E94A4]/25">
                        {t("home.requestDemo")}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Information Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6">
                {t("dairy5.title")}
              </h2>
              <div className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-zinc-400 font-serif leading-relaxed">
                <p>{t("dairy5.overview")}</p>
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 p-2 bg-slate-100/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-2xl max-w-3xl mx-auto border border-slate-200/50 dark:border-zinc-800/50">
              {[
                { id: "modules", label: language === 'mr' ? "मुख्य मॉड्यूल्स" : language === 'kn' ? "ಪ್ರಮುಖ ಮಾಡ್ಯೂಲ್‌ಗಳು" : language === 'hi' ? "मुख्य मॉड्यूल" : "Core Modules", icon: Factory },
                { id: "features", label: language === 'mr' ? "मुख्य वैशिष्ट्ये" : language === 'kn' ? "ಪ್ರಮುಖ ವೈಶಿಷ್ಟ್ಯಗಳು" : language === 'hi' ? "मुख्य विशेषताएं" : "Key Features", icon: Shield },
                { id: "mobile", label: language === 'mr' ? "मोबाईल ॲप्स" : language === 'kn' ? "ಮೊಬೈಲ್ ಆಪ್‌ಗಳು" : language === 'hi' ? "मोबाइल ऐप्स" : "Mobile Apps", icon: Smartphone },
                { id: "operations", label: language === 'mr' ? "ऑपरेशन्स व ऑडिट" : language === 'kn' ? "ಕಾರ್ಯಾಚರಣೆಗಳು ಮತ್ತು ಆಡಿಟ್" : language === 'hi' ? "संचालन और ऑडिट" : "Operations & Audit", icon: Sliders },
              ].map((tab) => {
                const TabIcon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-sans font-bold text-sm transition-all duration-300 ${isActive
                        ? "bg-[#1E94A4] text-white shadow-md shadow-[#1E94A4]/20"
                        : "text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-100 hover:bg-slate-200/50 dark:hover:bg-zinc-800/50"
                      }`}
                  >
                    <TabIcon className="h-4 w-4" />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Tab Contents */}
            <div className="min-h-[400px]">
              {activeTab === "modules" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
                  {modules.map((section, idx) => (
                    <div key={idx} className="bg-white dark:bg-zinc-950 rounded-3xl p-8 border border-slate-200 dark:border-zinc-850 hover:shadow-xl hover:border-[#1E94A4]/40 dark:hover:border-[#1E94A4]/40 transition-all duration-300 flex flex-col h-full group">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-[#1E94A4]/10 dark:bg-[#1E94A4]/20 text-[#1E94A4] flex items-center justify-center group-hover:scale-110 transition-transform duration-350">
                          <section.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-sans font-bold text-gray-900 dark:text-zinc-100 group-hover:text-[#1E94A4] transition-colors">{section.title}</h3>
                      </div>
                      <ul className="space-y-3 flex-grow">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-zinc-400 font-serif text-sm leading-relaxed">
                            <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "features" && (
                <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
                  {keyFeatures.map((section, idx) => (
                    <div key={idx} className="bg-white dark:bg-zinc-950 rounded-3xl p-8 border border-slate-200 dark:border-zinc-850 hover:shadow-xl hover:border-[#1E94A4]/40 dark:hover:border-[#1E94A4]/40 transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#1E94A4]/5 rounded-bl-full group-hover:bg-[#1E94A4]/10 transition-all duration-300" />
                      <div className="flex items-center gap-4 mb-6 relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-[#1E94A4]/10 dark:bg-[#1E94A4]/20 text-[#1E94A4] flex items-center justify-center">
                          <section.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-sans font-bold text-gray-900 dark:text-zinc-100 group-hover:text-[#1E94A4] transition-colors">{section.title}</h3>
                      </div>
                      <ul className="space-y-3 relative z-10">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-zinc-400 font-serif text-sm leading-relaxed">
                            <div className="w-2 h-2 rounded-full bg-[#1E94A4] shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "mobile" && (
                <div className="grid lg:grid-cols-3 gap-8 animate-fadeIn">
                  {mobileApps.map((app, idx) => (
                    <div key={idx} className="bg-white dark:bg-zinc-950 rounded-3xl p-8 border border-slate-200 dark:border-zinc-850 hover:shadow-xl hover:border-[#1E94A4]/40 dark:hover:border-[#1E94A4]/40 transition-all duration-300 flex flex-col h-full group">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-[#1E94A4]/10 dark:bg-[#1E94A4]/20 text-[#1E94A4] flex items-center justify-center">
                          <Smartphone className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-sans font-bold text-gray-900 dark:text-zinc-100 group-hover:text-[#1E94A4] transition-colors">{app.title}</h3>
                      </div>
                      <ul className="space-y-3 flex-grow">
                        {app.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-zinc-400 font-serif text-sm leading-relaxed">
                            <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "operations" && (
                <div className="grid lg:grid-cols-2 gap-8 animate-fadeIn">
                  <div className="bg-white dark:bg-zinc-950 rounded-3xl p-8 border border-slate-200 dark:border-zinc-850 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-2xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-2 flex items-center gap-3">
                      <Sliders className="h-6 w-6 text-[#1E94A4]" />
                      {t("dairy5.operationsTitle")}
                    </h3>
                    <p className="text-gray-500 dark:text-zinc-400 font-serif text-sm mb-6">{t("dairy5.operationsSubtitle")}</p>
                    <ul className="space-y-4">
                      {operations.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-zinc-300 font-serif text-sm leading-relaxed">
                          <div className="w-6 h-6 rounded-full bg-[#1E94A4]/10 dark:bg-[#1E94A4]/20 text-[#1E94A4] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">{i + 1}</div>
                          <span className="mt-0.5">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-white dark:bg-zinc-950 rounded-3xl p-8 border border-slate-200 dark:border-zinc-850 hover:shadow-xl transition-all duration-300">
                      <h3 className="text-xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6 flex items-center gap-3">
                        <FileText className="h-6 w-6 text-[#1E94A4]" />
                        {t("dairy5.auditTitle")}
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {audit.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-zinc-400 font-serif text-sm leading-relaxed">
                            <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white dark:bg-zinc-950 rounded-3xl p-8 border border-slate-200 dark:border-zinc-850 hover:shadow-xl transition-all duration-300">
                      <h3 className="text-xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6 flex items-center gap-3">
                        <Building2 className="h-6 w-6 text-[#1E94A4]" />
                        {t("dairy5.suitableTitle")}
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {suitable.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-zinc-400 font-serif text-sm leading-relaxed">
                            <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Benefits Banner */}
            <div className="mt-16 bg-gradient-to-r from-[#1E94A4]/10 to-[#22d3ee]/10 dark:from-[#1E94A4]/5 dark:to-[#22d3ee]/5 border border-[#1E94A4]/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#1E94A4]/5 rounded-full blur-3xl animate-pulse" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-8 text-center flex items-center justify-center gap-3">
                  🚀 {language === 'mr' ? "दुग्ध व्यवसायाचे फायदे" : language === 'kn' ? "ಹೈನುಗಾರಿಕೆಯ ಪ್ರಯೋಜನಗಳು" : language === 'hi' ? "डेयरी व्यवसाय के लाभ" : "Key Benefits of Dairy 5.0"}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xs rounded-2xl p-6 border border-slate-100 dark:border-zinc-800 hover:-translate-y-1 transition-transform duration-300 text-center">
                      <div className="w-10 h-10 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-4 font-bold text-sm">✓</div>
                      <p className="text-gray-800 dark:text-zinc-200 font-sans font-bold text-sm">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Box */}
            <div className="mt-12 bg-[#1E94A4] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold font-sans mb-2">{t("dairyInfo.contactTitle")}</h3>
                <p className="text-[#E8F4F5] mb-1 font-serif text-lg">{t("dairyInfo.contactName")}</p>
                <p className="text-[#E8F4F5] font-serif">{t("dairyInfo.contactOffice")}</p>
              </div>
              <div className="mt-6 md:mt-0 text-center md:text-right">
                <div className="text-3xl font-bold font-sans tracking-wide">
                  {t("dairyInfo.contactPhone")}
                </div>
                <Link href="/contact" className="inline-block mt-4">
                  <Button variant="secondary" className="font-bold text-[#1E94A4] px-8 py-2 rounded-full">
                    {t("hero.cta2")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Mobile App Simulator */}
        <MobileAppSimulator />

        {/* AI Statistics Reports & Graphs Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 text-[#1E94A4] text-sm font-sans font-bold">
                  <Brain className="w-4 h-4 animate-bounce" />
                  AI Quality & Statistics Reports
                </div>
                <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100">
                  Optimize Cooperative Performance via Graphs
                </h2>
                <p className="text-gray-600 dark:text-zinc-400 font-serif text-lg leading-relaxed">
                  WinSoft Dairy Software features advanced AI algorithms that monitor daily collection metrics, generate quality distribution graphs, and detect anomalies.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "FAT & SNF Consistency Tracking", desc: "Instantly graphs quality trends to pinpoint optimal feeding cycles." },
                    { title: "Adulteration Prevention Controls", desc: "AI filters flag density anomalies to keep milk collection 100% pure." },
                    { title: "Automated Payout Forecasts", desc: "Projects cash flows and schedules bank transfers dynamically." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-950/30 text-green-600 flex items-center justify-center shrink-0 mt-1 font-bold text-xs">✓</div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-zinc-100 text-base">{item.title}</h4>
                        <p className="text-gray-500 dark:text-zinc-400 text-sm font-serif mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chart container */}
              <div className="bg-white dark:bg-zinc-950 p-8 rounded-3xl border dark:border-zinc-800 shadow-xl">
                <h3 className="text-base font-bold font-sans mb-6 text-gray-900 dark:text-zinc-100 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#1E94A4]" />
                  Cooperative KPI Improvements (Before vs After WinSoft)
                </h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { metric: "Adulteration", Before: 45, After: 2 },
                        { metric: "Wait Time (Min)", Before: 8, After: 2 },
                        { metric: "Bill Cycle (Days)", Before: 12, After: 0.5 }
                      ]}
                      margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" className="stroke-slate-100 dark:stroke-zinc-800" />
                      <XAxis dataKey="metric" stroke="#888888" fontSize={11} tickLine={false} axisLine={false} />
                      <YAxis stroke="#888888" fontSize={11} tickLine={false} axisLine={false} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Before" fill="#cbd5e1" radius={[6, 6, 0, 0]} />
                      <Bar dataKey="After" fill="#1E94A4" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Interactive MIS Reports Preview */}
        <MISReportsPreview />

        {/* Interactive Hardware Compatibility Chart */}
        <HardwareCompatibility />



        {/* Trust Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-sans font-bold mb-2" style={{ color: "var(--accent)" }}>
                  25+
                </div>
                <p className="text-gray-600 dark:text-zinc-400 font-medium text-sm">
                  {t("dairy.yearsExp")}
                </p>
              </div>
              <div>
                <div className="text-4xl font-sans font-bold mb-2" style={{ color: "var(--accent)" }}>
                  500+
                </div>
                <p className="text-gray-600 dark:text-zinc-400 font-medium text-sm">
                  {t("dairy.happyClients")}
                </p>
              </div>
              <div>
                <div className="text-4xl font-sans font-bold mb-2" style={{ color: "var(--accent)" }}>
                  99.9%
                </div>
                <p className="text-gray-600 dark:text-zinc-400 font-medium text-sm">
                  {t("dairy.uptime")}
                </p>
              </div>
              <div>
                <div className="text-4xl font-sans font-bold mb-2" style={{ color: "var(--accent)" }}>
                  24/7
                </div>
                <p className="text-gray-600 dark:text-zinc-400 font-medium text-sm">
                  {t("dairy.supportLabel")}
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--primary)" }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-sans font-bold text-white mb-4">
              {t("dairy.ctaModernizeTitle")}
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {t("dairy.ctaModernizeDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="font-sans font-semibold px-8 py-3"
                  style={{ backgroundColor: "var(--accent)", color: "white" }}
                >
                  {t("home.requestDemo")}
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-sans font-semibold px-8 py-3 bg-transparent border-white text-white hover:bg-white dark:bg-zinc-950/10"
                >
                  {t("product.contactSales")}
                </Button>
              </Link>
              <WhatsAppButton productName={t("dairy.dairyTitle")} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
