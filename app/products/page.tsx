"use client"

import { useState, useEffect, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import {
    CheckCircle,
    Monitor,
    Rocket,
    Globe,
    Milk,
    Receipt,
    Factory,
    Smartphone,
    Bluetooth,
    BarChart3,
    Truck,
    Building2,
    Gem,
    ArrowLeftRight,
    ShoppingBag,
    FileText,
    CalendarCheck,
    Package,
    DollarSign,
    Warehouse,
    Volume2,
    VolumeX,
    ShieldCheck,
    Zap,
    Users,
    Cloud,
    Search
} from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AudioButton } from "@/components/audio-button"

export default function ProductsPage() {
    const { t, language } = useLanguage()

    const homepageProducts = useMemo(() => {
        return [
            {
                id: 1,
                title: t("dairy5.title") || "Complete Dairy Software Solutions",
                description: t("dairy5.overview") || "Dairy 5.0 is a comprehensive dairy management solution designed for Dairy Cooperative Societies, Milk Collection Centers, and Dairy Plants.",
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
                description: t("webDairy.overview") || "Web Dairy is a comprehensive web-based dairy management solution designed for Dairy Cooperative Societies, Milk Collection Centers, and Dairy Plants.",
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
                    language === 'kn' ? "ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆಗಳಿಗಾಗಿ ಕಬ್ಬು ಖರೀದಿ, ತೂಕದ ಪ್ರಮಾಣ ಜೋಡಣೆ, ರೈತರ ನೋಂದಣಿ ಮತ್ತು ಸಂಪೂರ್ಣ ಆಡಳಿತಾತ್ಮಕ ERP ಪರಿಹಾರ." :
                        language === 'hi' ? "चीनी मिलों के लिए गन्ना खरीद, वजन कांटा एकीकरण, किसान पंजीकरण और संपूर्ण प्रशासनिक ERP समाधान." : "Complete ERP system for sugar factories to manage cane procurement, weighbridge operations, farmer billing, and factory accounts.",
                image: "/sugerfac.png",
                link: "/sugar-factory-solutions",
            },
            {
                id: "roi",
                title: language === 'mr' ? "आरओआय (ROI) कॅल्क्युलेटर" :
                    language === 'kn' ? "ಆರ್‌ಒಐ (ROI) ಕ್ಯಾಲ್ಕುಲೇಟರ್" :
                        language === 'hi' ? "आरओआई (ROI) कैलकुलेटर" : "ROI Calculator",
                description: language === 'mr' ? "विनसॉफ्टच्या स्वयंचलित बिलिंग आणि संकलन प्रणालीद्वारे तुमची सहकारी दूध संस्था किती वेळ आणि पैसे वाचवू शकते याचा अंदाज लावा." :
                    language === 'kn' ? "ವಿನ್‌ಸಾಫ್ಟ್‌ನ ಸ್ವಯಂಚಾಲಿತ ಬಿಲ್ಲಿಂಗ್ ಮತ್ತು ಸಂಗ್ರಹಣಾ ವ್ಯವಸ್ಥೆಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಸಹಕಾರಿ ಹಾಲು ಸಂಘವು ಎಷ್ಟು ಹಣ ಮತ್ತು ಸಮಯವನ್ನು ಉಳಿಸಬಹುದು ಎಂಬುದನ್ನು ಅಂದಾಜು ಮಾಡಿ." :
                        language === 'hi' ? "अनुमान लगाएं कि विनसॉफ्ट की स्वचालित बिलिंग और संग्रह प्रणालियों के साथ आपकी सहकारी डेयरी समिति कितना पैसा और समय बचा सकती है।" : "Estimate how much money and time your cooperative dairy society can save with Winsoft's automated billing and collection systems.",
                image: "/modern-office-dashboard.png",
                link: "/roi-calculator",
            }
        ]
    }, [t, language]);

    const [activeCategory, setActiveCategory] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const [scrollProgress, setScrollProgress] = useState(0)

    // Scroll Progress Effect
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scroll = totalScroll / windowHeight
            setScrollProgress(scroll * 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const filterProducts = (products: any[]) => {
        if (!searchQuery) return products;
        const query = searchQuery.toLowerCase()
        return products.filter(p =>
            p.title.toLowerCase().includes(query) ||
            (p.description && p.description.toLowerCase().includes(query)) ||
            (p.features && p.features.some((f: string) => f.toLowerCase().includes(query)))
        )
    }

    let audioText = ""
    if (language === 'mr') {
        audioText = `${t("productsPage.heroTitle")}. ${t("productsPage.heroSubtitle")}. आमची प्रमुख उत्पादने: दुग्ध व्यवसाय सॉफ्टवेअर, सुवर्ण व दागिन्यांचे सॉफ्टवेअर, इन्व्हेंटरी आणि अकाउंटिंग, साखर कारखाना सॉफ्टवेअर.`
    } else if (language === 'kn') {
        audioText = `${t("productsPage.heroTitle")}. ${t("productsPage.heroSubtitle")}. ನಮ್ಮ ಪ್ರಮುಖ ಉತ್ಪನ್ನಗಳು: ಹೈನುಗಾರಿಕೆ ಸಾಫ್ಟ್‌ವೇರ್, ಚಿನ್ನ ಮತ್ತು ಆಭರಣಗಳ ಸಾಫ್ಟ್‌ವೇರ್, ಇನ್ವೆಂಟರಿ ಮತ್ತು ಅಕೌಂಟಿಂಗ್, ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆ ಸಾಫ್ಟ್‌ವೇರ್.`
    } else {
        audioText = `${t("productsPage.heroTitle")}. ${t("productsPage.heroSubtitle")}. Our main products: Dairy Software, Gold & Jewellery Software, Inventory & Accounting, Sugar Industry Software.`
    }

    // ─── DAIRY PRODUCTS ───
    const dairyProducts = [
        {
            title: t("dairy5.title") || "Complete Dairy Software Solutions",
            icon: Milk,
            color: "#2563eb",
            description: t("dairy5.overview") || "Dairy 5.0 is a comprehensive dairy management solution designed for Dairy Cooperative Societies, Milk Collection Centers, and Dairy Plants.",
            features: [
                t("dairy5.modules.collection.title"),
                t("dairy5.modules.billing.title"),
                t("dairy5.modules.inventory.title"),
                t("dairy5.modules.accounting.title")
            ]
        },
        {
            title: t("webDairy.title") || "Web-based Dairy Software Solutions",
            icon: Globe,
            color: "#0284c7",
            description: t("webDairy.overview") || "Web Dairy is a comprehensive web-based dairy management solution designed for Dairy Cooperative Societies, Milk Collection Centers, and Dairy Plants.",
            features: [
                t("dairy5.modules.collection.title"),
                t("dairy5.modules.billing.title"),
                t("dairy5.modules.inventory.title"),
                t("dairy5.modules.accounting.title")
            ]
        },
        {
            title: t("dairy5.products.prod2.title") || "Farmer Mobile App",
            icon: Smartphone,
            color: "#2563eb",
            description: t("dairy5.products.prod2.desc"),
            features: [
                language === 'mr' ? "रोजचे दूध संकलन माहिती" : language === 'kn' ? "ದೈನಂದಿನ ಹಾಲು ಸಂಗ್ರಹಣೆ" : language === 'hi' ? "दैनिक दूध संग्रह विवरण" : "Daily collection details",
                language === 'mr' ? "बिल आणि खाते उतारा" : language === 'kn' ? "ಬಿಲ್ ಮತ್ತು ಲೆಡ್ಜರ್ ಮಾಹಿತಿ" : language === 'hi' ? "बिल और खाता विवरण" : "Bills & account statements",
                language === 'mr' ? "कायमस्वरूपी डेटा स्टोरेज" : language === 'kn' ? "ಖಾತೆ ಹೇಳಿಕೆಗಳು" : language === 'hi' ? "स्थायी डेटा भंडारण" : "Permanent ledger data"
            ]
        },
        {
            title: t("dairy5.products.prod3.title") || "Dairy Administrator App",
            icon: BarChart3,
            color: "#2563eb",
            description: t("dairy5.products.prod3.desc"),
            features: [
                language === 'mr' ? "संकलन नियंत्रण आणि देखरेख" : language === 'kn' ? "ಸಂಗ್ರಹಣೆ ಮೇಲ್ವಿಚಾರಣೆ" : language === 'hi' ? "संग्रह नियंत्रण" : "Live collection monitoring",
                language === 'mr' ? "डॅशबोर्ड आणि विश्लेषण" : language === 'kn' ? "ವಿಶ್ಲೇಷಣೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್" : language === 'hi' ? "डैशबोर्ड और विश्लेषण" : "Dashboard & analytics",
                language === 'mr' ? "रिपोर्ट्स आणि ऑडिट ट्रॅक" : language === 'kn' ? "ವರದಿಗಳ ಪ್ರವೇಶ" : language === 'hi' ? "ऑडिट रिपोर्ट उपलब्ध" : "MIS Audit Reports"
            ]
        },
        {
            title: t("dairy5.products.prod4.title") || "Milk Collection App & Machine Integration",
            icon: Bluetooth,
            color: "#2563eb",
            description: t("dairy5.products.prod4.desc"),
            features: [
                language === 'mr' ? "वजन काटा जोडणी" : language === 'kn' ? "ತೂಕದ ಮಾಪಕ ಜೋಡಣೆ" : language === 'hi' ? "वजन कांटा लिंक" : "Weigh Scale Integration",
                language === 'mr' ? "FAT मशीन जोडणी" : language === 'kn' ? "ಫ್ಯಾಟ್ ಯಂತ್ರ ಜೋಡಣೆ" : language === 'hi' ? "FAT मशीन लिंक" : "FAT/SNF Analyzer Link",
                language === 'mr' ? "आवाजाद्वारे आणि थर्मल प्रिंटर सपोर्ट" : language === 'kn' ? "ಧ್ವನಿ ಪ್ರಕಟಣೆಗಳು" : language === 'hi' ? "प्रिंटर और वॉयस मॉड्यूल" : "Printer & Voice support"
            ]
        },
        {
            title: t("dairy5.products.prod5.title") || "Production Management System",
            icon: Factory,
            color: "#2563eb",
            description: t("dairy5.products.prod5.desc") || "Manage the complete milk processing cycle from raw milk reception to finished product production with real-time monitoring and inventory integration.",
            features: [
                language === 'mr' ? "उत्पादन नियोजन" : language === 'kn' ? "ಉತ್ಪಾದನಾ ಯೋಜನೆ" : language === 'hi' ? "उत्पादन योजना" : "Production Planning",
                language === 'mr' ? "गुणवत्ता विश्लेषण" : language === 'kn' ? "ಗುಣಮಟ್ಟದ ವಿಶ್ಲೇಷಣೆ" : language === 'hi' ? "गुणवत्ता विश्लेषण" : "Quality Analysis & Costing",
                language === 'mr' ? "बॅच प्रक्रिया व्यवस्थापन" : language === 'kn' ? "ಬ್ಯಾಚ್ ಪ್ರಕ್ರಿಯೆ ನಿರ್ವಹಣೆ" : language === 'hi' ? "बैच प्रक्रिया प्रबंधन" : "Batch Processing & Wastage Tracking"
            ]
        },
        {
            title: t("dairy5.products.prod6.title") || "Transport Management System",
            icon: Truck,
            color: "#2563eb",
            description: t("dairy5.products.prod6.desc") || "Efficiently manage milk collection routes, vehicle operations, dispatches, and transportation costs.",
            features: [
                language === 'mr' ? "मार्ग व्यवस्थापन" : language === 'kn' ? "ಮಾರ್ಗ ನಿರ್ವಹಣೆ" : language === 'hi' ? "मार्ग प्रबंधन" : "Route & Vehicle Management",
                language === 'mr' ? "दूध संकलन ट्रॅकिंग" : language === 'kn' ? "ಹಾಲು ಸಂಗ್ರಹಣೆ ಟ್ರ್ಯಾಕಿಂಗ್" : language === 'hi' ? "दूध संग्रह और प्रेषण" : "Collection & Dispatch Tracking",
                language === 'mr' ? "वाहतूक बिलिंग" : language === 'kn' ? "ಸಾರಿಗೆ ಬಿಲ್ಲಿಂಗ್" : language === 'hi' ? "परिवहन ಬಿಲ್ಲಿಂಗ್" : "Transport Billing & GPS Support"
            ]
        }
    ]

    // ─── GOLD & JEWELLERY ───
    const goldProducts = [
        {
            title: t("productsPage.goldExchange"),
            icon: ArrowLeftRight,
            color: "#b45309",
            description: t("productsPage.goldExchangeDesc"),
            features: [t("gold.module2"), t("gold.module3"), t("gold.module9")],
        },
        {
            title: t("productsPage.goldExchangeBilling"),
            icon: ShoppingBag,
            color: "#b45309",
            description: t("productsPage.goldExchangeBillingDesc"),
            features: [t("gold.module1"), t("gold.module2"), t("gold.module9")],
        },
        {
            title: t("productsPage.goldFull"),
            icon: FileText,
            color: "#b45309",
            description: t("productsPage.goldFullDesc"),
            features: [t("gold.module1"), t("gold.module2"), t("gold.module9"), t("gold.module8")],
        },
        {
            title: t("productsPage.goldBooking"),
            icon: CalendarCheck,
            color: "#b45309",
            description: t("productsPage.goldBookingDesc"),
            features: [t("gold.module4"), t("gold.module5"), t("gold.module9")],
        },
    ]

    // ─── INVENTORY & ACCOUNTING ───
    const inventoryProducts = [
        {
            title: t("productsPage.invAccSoftware"),
            icon: Package,
            color: "#059669",
            description: t("productsPage.invAccSoftwareDesc"),
            features: [t("dairy.feat11"), t("gold.module3"), t("gold.module9")],
        },
        {
            title: t("productsPage.fullBusinessSoftware"),
            icon: DollarSign,
            color: "#059669",
            description: t("productsPage.fullBusinessSoftwareDesc"),
            features: [t("gold.module1"), t("gold.module3"), t("gold.module9")],
        },
    ]

    // ─── SUGAR INDUSTRY ───
    const sugarProducts = [
        {
            title: t("sugar.sugarSystemTitle"),
            icon: Warehouse,
            color: "#dc2626",
            description: t("sugar.sugarHeroSubtitle"),
            features: [t("sugar.module1"), t("sugar.module2"), t("sugar.module3"), t("sugar.module4"), t("sugar.module5"), t("sugar.module8")],
        },
    ]

    const categories = [
        { id: "all", name: language === 'mr' ? 'सर्व उत्पादने' : language === 'kn' ? 'ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳು' : language === 'hi' ? 'सभी उत्पाद' : 'All Products', icon: ShoppingBag, color: "#2563eb", count: 14 },
        { id: "dairy", name: t("productsPage.dairySoftware"), icon: Milk, color: "#2563eb", count: 7 },
        { id: "gold", name: t("productsPage.goldJewellery"), icon: Gem, color: "#b45309", count: 4 },
        { id: "inventory", name: t("productsPage.invAcc"), icon: Package, color: "#059669", count: 2 },
        { id: "sugar", name: t("productsPage.sugarIndustry"), icon: Factory, color: "#dc2626", count: 1 },
    ]

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
            {/* Scroll Progress Bar */}
            <div
                className="fixed top-0 left-0 h-1 bg-blue-600 dark:bg-blue-500 z-50 transition-all duration-300 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />

            <Header />

            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 via-sky-50 to-slate-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex flex-col items-center justify-center gap-4 mb-4">
                        <h1 className="text-4xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100">{t("productsPage.heroTitle")}</h1>
                        <AudioButton text={audioText} colorTheme="blue" />
                    </div>
                    <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto">
                        {t("productsPage.heroSubtitle")}
                    </p>
                </div>
            </section>

            {/* ─── MAIN HOMEPAGE PRODUCTS SECTION ─── */}
            <section className="py-16 max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-3">
                        {language === 'mr' ? 'आमची मुख्य उत्पादने' : language === 'kn' ? 'ನಮ್ಮ ಪ್ರಮುಖ ಉತ್ಪನ್ನಗಳು' : language === 'hi' ? 'हमारे मुख्य उत्पाद' : 'Our Flagship Products'}
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-zinc-400">
                        {language === 'mr' ? 'आमच्या प्रगत आणि विश्वासू डिजिटल सोल्यूशन्सची यादी' : language === 'kn' ? 'ನಮ್ಮ ಸುಧಾರಿತ ಡಿಜಿಟಲ್ ಪರಿಹಾರಗಳ ಪಟ್ಟಿ' : 'Explore our advanced and trusted digital business solutions'}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {homepageProducts.map((product) => (
                        <Card key={product.id} className="group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:shadow-none p-6 flex flex-col justify-between min-h-[480px] border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50">
                            <div className="flex flex-col h-full">
                                <Link href={product.link} className="block relative">
                                    <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                                    <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-sm">
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </Link>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100 leading-tight mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {product.title}
                                </h3>

                                <p className="text-gray-650 dark:text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            <div className="space-y-3">
                                <Link href={product.link} className="block">
                                    <Button variant="outline" className="w-full border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 font-semibold py-5 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all">
                                        {t("home.viewDetails")}
                                    </Button>
                                </Link>
                                <Link href="/contact" className="block">
                                    <Button className="w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-5 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25">
                                        {t("home.requestDemo")}
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* ─── DETAILED SPECS / CATEGORIES SECTION ─── */}
            <section className="bg-gray-100/50 dark:bg-zinc-900/30 border-t border-gray-200 dark:border-zinc-800 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-3">
                            {language === 'mr' ? 'सॉफ्टवेअर मॉड्युल्स आणि वैशिष्ट्ये' : language === 'kn' ? 'ಸಾಫ್ಟ್‌ವೇರ್ ಮಾಡ್ಯೂಲ್‌ಗಳು ಮತ್ತು ವೈಶಿಷ್ಟ್ಯಗಳು' : language === 'hi' ? 'सॉफ्टवेयर मॉड्यूल और विशेषताएं' : 'Detailed Modules & Specifications'}
                        </h2>
                        <p className="text-lg text-gray-500 dark:text-zinc-400">
                            {language === 'mr' ? 'विविध उद्योग सोल्यूशन्सची सविस्तर वैशिष्ट्ये आणि मॉड्युल्स पहा' : language === 'kn' ? 'ವಿವಿಧ ಉದ್ಯಮ ಪರಿಹಾರಗಳ ವಿವರವಾದ ವೈಶಿಷ್ಟ್ಯಗಳು ಮತ್ತು ಮಾಡ್ಯೂಲ್‌ಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ' : 'Browse technical details, features, and modules by industry'}
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="bg-white dark:bg-zinc-950 border rounded-2xl overflow-hidden shadow-sm sticky top-0 z-40">
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 py-2 sm:py-0 overflow-x-auto">
                            {categories.map((cat) => {
                                const isActive = activeCategory === cat.id
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`flex items-center gap-3 px-5 py-4 text-left font-sans font-medium transition-all border-b-2 sm:flex-1 whitespace-nowrap ${isActive ? "bg-gray-50 text-gray-900 dark:text-zinc-100" : "border-transparent text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-900"
                                            }`}
                                        style={isActive ? { color: cat.color, borderBottomColor: cat.color } : undefined}
                                    >
                                        <cat.icon className="h-5 w-5 flex-shrink-0" />
                                        <div>
                                            <div className="text-sm font-semibold">{cat.name}</div>
                                            <div className="text-xs text-gray-500 dark:text-zinc-400">{cat.count} {t("nav.products")}</div>
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Live Search Bar */}
                    <div className="max-w-2xl mx-auto py-6">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                            </div>
                            <Input
                                type="text"
                                placeholder={language === 'mr' ? 'वैशिष्ट्ये किंवा मॉड्युल शोधा...' : language === 'kn' ? 'ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಹುಡುಕಿ...' : 'Search features or modules...'}
                                className="pl-12 pr-4 py-5 w-full rounded-full border-2 border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-base focus-visible:ring-0 focus-visible:border-blue-500 transition-all shadow-sm"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Detailed Content */}
                    <div className="mt-6 bg-white dark:bg-zinc-950 rounded-3xl border border-gray-200 dark:border-zinc-800 overflow-hidden shadow-sm">
                        {/* ─── DAIRY SECTION ─── */}
                        {(activeCategory === "all" || activeCategory === "dairy") && (
                            <div className="py-10 px-6 sm:px-8 border-b border-gray-100 dark:border-zinc-800">
                                <div className="mb-6">
                                    <h3 className="text-xl font-sans font-bold text-gray-900 dark:text-zinc-100">{t("productsPage.dairySoftware")}</h3>
                                    <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">{t("dairy5.overview") || "Dairy 5.0 is a comprehensive dairy management solution designed for Dairy Cooperative Societies, Milk Collection Centers, and Dairy Plants."}</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filterProducts(dairyProducts).length > 0 ? (
                                        filterProducts(dairyProducts).map((product, idx) => (
                                            <ProductCard key={idx} {...product} />
                                        ))
                                    ) : (
                                        <div className="col-span-full py-8 text-center text-gray-500 dark:text-zinc-400">
                                            <Search className="w-10 h-10 mx-auto mb-3 opacity-20" />
                                            <p className="text-sm">No features found matching "{searchQuery}"</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* ─── GOLD & JEWELLERY SECTION ─── */}
                        {(activeCategory === "all" || activeCategory === "gold") && (
                            <div className="py-10 px-6 sm:px-8 border-b border-gray-100 dark:border-zinc-800">
                                <div className="mb-6">
                                    <h3 className="text-xl font-sans font-bold text-gray-900 dark:text-zinc-100">{t("productsPage.goldJewellery")}</h3>
                                    <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">{t("gold.goldHeroSubtitle")}</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {filterProducts(goldProducts).length > 0 ? (
                                        filterProducts(goldProducts).map((product, idx) => (
                                            <ProductCard key={idx} {...product} />
                                        ))
                                    ) : (
                                        <div className="col-span-full py-8 text-center text-gray-500 dark:text-zinc-400">
                                            <Search className="w-10 h-10 mx-auto mb-3 opacity-20" />
                                            <p className="text-sm">No features found matching "{searchQuery}"</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* ─── INVENTORY & ACCOUNTING SECTION ─── */}
                        {(activeCategory === "all" || activeCategory === "inventory") && (
                            <div className="py-10 px-6 sm:px-8 border-b border-gray-100 dark:border-zinc-800">
                                <div className="mb-6">
                                    <h3 className="text-xl font-sans font-bold text-gray-900 dark:text-zinc-100">{t("productsPage.invAcc")}</h3>
                                    <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">{t("productsPage.invAccSoftwareDesc")}</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {filterProducts(inventoryProducts).length > 0 ? (
                                        filterProducts(inventoryProducts).map((product, idx) => (
                                            <ProductCard key={idx} {...product} />
                                        ))
                                    ) : (
                                        <div className="col-span-full py-8 text-center text-gray-500 dark:text-zinc-400">
                                            <Search className="w-10 h-10 mx-auto mb-3 opacity-20" />
                                            <p className="text-sm">No features found matching "{searchQuery}"</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* ─── SUGAR INDUSTRY SECTION ─── */}
                        {(activeCategory === "all" || activeCategory === "sugar") && (
                            <div className="py-10 px-6 sm:px-8">
                                <div className="mb-6">
                                    <h3 className="text-xl font-sans font-bold text-gray-900 dark:text-zinc-100">{t("productsPage.sugarIndustry")}</h3>
                                    <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">{t("sugar.sugarHeroSubtitle")}</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {filterProducts(sugarProducts).length > 0 ? (
                                        filterProducts(sugarProducts).map((product, idx) => (
                                            <ProductCard key={idx} {...product} />
                                        ))
                                    ) : (
                                        <div className="col-span-full py-8 text-center text-gray-500 dark:text-zinc-400">
                                            <Search className="w-10 h-10 mx-auto mb-3 opacity-20" />
                                            <p className="text-sm">No features found matching "{searchQuery}"</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ─── WHY CHOOSE SECTION (NEW) ─── */}
            <section className="py-20 relative overflow-hidden bg-white dark:bg-zinc-950">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-50/50 dark:from-blue-900/10 to-transparent rounded-[100%] blur-3xl -z-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-4">
                            {language === 'mr' ? 'विनसॉफ्ट सॉफ्टवेअर का निवडावे?' : language === 'kn' ? 'ವಿನ್‌ಸಾಫ್ಟ್ ಅನ್ನು ಏಕೆ ಆರಿಸಬೇಕು?' : 'Why Choose WinSoft Software?'}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
                            {language === 'mr' ? '२५ वर्षांचा अनुभव आणि प्रगत तंत्रज्ञान.' : language === 'kn' ? '25 ವರ್ಷಗಳ ಅನುಭವ ಮತ್ತು ಸುಧಾರಿತ ತಂತ್ರಜ್ಞಾನ.' : '25 years of experience combined with advanced technology.'}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: ShieldCheck, title: language === 'mr' ? '१००% सुरक्षित' : language === 'kn' ? '100% ಸುರಕ್ಷಿತ' : '100% Secure', desc: language === 'mr' ? 'तुमचा डेटा पूर्णपणे सुरक्षित आहे' : language === 'kn' ? 'ನಿಮ್ಮ ಡೇಟಾ ಸಂಪೂರ್ಣವಾಗಿ ಸುರಕ್ಷಿತವಾಗಿದೆ' : 'Your data is completely secure with encryption.', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
                            { icon: Zap, title: language === 'mr' ? 'सुपरफास्ट स्पीड' : language === 'kn' ? 'ಸೂಪರ್‌ಫಾಸ್ಟ್ ವೇಗ' : 'Superfast Speed', desc: language === 'mr' ? 'कोणत्याही लेगशिवाय बिलिंग करा' : language === 'kn' ? 'ಯಾವುದೇ ವಿಳಂಬವಿಲ್ಲದೆ ಬಿಲ್ಲಿಂಗ್ ಮಾಡಿ' : 'Lightning fast billing with zero lag.', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-500/10' },
                            { icon: Cloud, title: language === 'mr' ? 'क्लाउड सिंक' : language === 'kn' ? 'ಕ್ಲೌಡ್ ಸಿಂಕ್' : 'Cloud Sync', desc: language === 'mr' ? 'कोणत्याही डिव्हाइसवरून ऍक्सेस करा' : language === 'kn' ? 'ಯಾವುದೇ ಸಾಧನದಿಂದ ಪ್ರವೇಶಿಸಿ' : 'Access your data from any device, anywhere.', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-500/10' },
                            { icon: Users, title: language === 'mr' ? '५००+ समाधानी ग्राहक' : language === 'kn' ? '500+ ಸಂತೋಷದ ಗ್ರಾಹಕರು' : '500+ Happy Clients', desc: language === 'mr' ? 'संपूर्ण महाराष्ट्रात विश्वासाचे प्रतीक' : language === 'kn' ? 'ಕರ್ನಾಟಕದಾದ್ಯಂತ ನಂಬಿಕೆಯ ಸಂಕೇತ' : 'Trusted by businesses across the state.', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-500/10' },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-6 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:bg-zinc-900/50 border border-transparent hover:border-gray-100 dark:hover:border-zinc-800">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${stat.bg} ${stat.color} shadow-sm`}>
                                    <stat.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100 mb-2">{stat.title}</h3>
                                <p className="text-gray-600 dark:text-zinc-400">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16" style={{ backgroundColor: "var(--primary)" }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-sans font-bold text-white mb-4">{t("productsPage.notSureTitle")}</h2>
                    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                        {t("productsPage.notSureDesc")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button size="lg" className="font-sans font-semibold text-lg px-8 py-3" style={{ backgroundColor: "var(--accent)", color: "white" }}>
                                {t("features.requestFreeDemo")}
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="font-sans font-semibold text-lg px-8 py-3 bg-transparent border-white text-white hover:bg-white dark:bg-zinc-950/10">
                                {t("productsPage.contactSales")}
                            </Button>
                        </Link>
                        <WhatsAppButton productName={t("productsPage.heroTitle")} />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

function ProductCard({ title, icon: Icon, features, color, description }: any) {
    return (
        <Card className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:shadow-none h-full border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-10 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${color} 0%, transparent 100%)` }} />

            <CardContent className="p-6 relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-5">
                    <div className="p-3.5 rounded-2xl bg-opacity-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner" style={{ backgroundColor: `${color}1A`, color }}>
                        {Icon && <Icon className="w-7 h-7" />}
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 dark:text-zinc-100 leading-tight transition-colors duration-300" style={{ '--hover-color': color } as React.CSSProperties}>
                        <span className="group-hover:text-[var(--hover-color)]">{title}</span>
                    </h3>
                </div>

                {description && <p className="text-gray-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed flex-grow">{description}</p>}

                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-800 to-transparent mb-5" />

                {features && features.length > 0 && (
                    <ul className="space-y-3 mb-4">
                        {features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-zinc-300 group/item">
                                <div className="mt-0.5 relative flex items-center justify-center">
                                    <CheckCircle className="w-4 h-4 flex-shrink-0 transition-transform group-hover/item:scale-125" style={{ color }} />
                                    <div className="absolute inset-0 rounded-full opacity-0 group-hover/item:opacity-50 blur-sm transition-opacity" style={{ backgroundColor: color }} />
                                </div>
                                <span className="group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">{feature}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </CardContent>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 ease-in-out" style={{ backgroundColor: color }} />
        </Card>
    )
}
