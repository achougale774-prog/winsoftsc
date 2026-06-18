"use client"

import { useState, useMemo, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ArrowLeft, Headphones, Mail, Calendar, Play } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AudioButton } from "@/components/audio-button"
import { StarRatingSchema } from "@/components/star-rating-schema"

export default function ProductDetailPage() {
  const params = useParams()
  const { t, language } = useLanguage()
  const productId = typeof params?.id === 'string' ? params.id : "1"

  const getT = (keyPath: string) => {
    if (productId === "web-dairy") {
      const path = `webDairy.${keyPath}`;
      const val = t(path as any);
      if (val && val !== path && (Array.isArray(val) ? val.length > 0 : val !== "")) {
        return val;
      }
    }
    const path5 = `dairy5.${keyPath}`;
    const val5 = t(path5 as any);
    if (val5 && val5 !== path5 && (Array.isArray(val5) ? val5.length > 0 : val5 !== "")) {
      return val5;
    }
    return undefined;
  };


  const productsData: Record<string, any> = useMemo(() => ({
    "1": {
      id: 1,
      title: getT("title") || "Complete Dairy Software Solutions",
      brand: "WinSoft Solutions",
      category: t("contact.dairy"),
      description: getT("overview") || "Dairy 5.0 is a comprehensive dairy management solution designed for Dairy Cooperative Societies, Milk Collection Centers, and Dairy Plants.",
      variants: [t("product.prod1Variant1"), t("product.prod1Variant2"), t("product.prod1Variant3")],
      details: {
        [t("product.softwareType")]: "Desktop & Cloud",
        [t("product.brand")]: "WinSoft",
        [t("product.compatibility")]: "Windows, Android",
        [t("product.support")]: t("product.support247Text"),
        [t("product.license")]: t("product.lifetime"),
      },
      about: [
        getT("modules.collection.title") + " - " + (getT("modules.collection.items") as unknown as string[] || []).join(", "),
        getT("modules.billing.title") + " - " + (getT("modules.billing.items") as unknown as string[] || []).join(", "),
        getT("modules.rebate.title") + " - " + (getT("modules.rebate.items") as unknown as string[] || []).join(", "),
        getT("modules.inventory.title") + " - " + (getT("modules.inventory.items") as unknown as string[] || []).join(", "),
        getT("modules.accounting.title") + " - " + (getT("modules.accounting.items") as unknown as string[] || []).join(", "),
        getT("modules.reports.title") + " - " + (getT("modules.reports.items") as unknown as string[] || []).join(", "),
      ],
      images: [
        "/live-image-dairy/5.0.png",
        "/live-image-dairy/5.0_3.png",
        "/live-image-dairy/milk_collection_5.0.png"
      ],
      videoUrl: "",
    },
    "2": {
      id: 2,
      title: getT("products.prod2.title") || "Farmer Mobile App (Sankalan)",
      brand: "WinSoft Sankalan App",
      category: t("contact.dairy"),
      description: getT("products.prod2.desc") || "Advanced mobile application for dairy farmers to track real-time daily milk slips, 10-day payment receipts, and ledger statements.",
      variants: language === 'mr' ? ["शेतकरी ॲप", "संकलन स्टाफ ॲप", "थेट विक्री आवृत्ती"] :
        language === 'kn' ? ["ರೈತರ ಆಪ್", "ಸಂಗ್ರಹಣಾ ಸಿಬ್ಬಂದಿ ಆಪ್", "ನೇರ ಮಾರಾಟ ಆವೃತ್ತಿ"] :
          language === 'hi' ? ["किसान ऐप", "संग्रह स्टाफ ऐप", "सीधी बिक्री संस्करण"] : ["Farmer App", "Collection Staff App", "Direct Sales Edition"],
      details: {
        [t("product.softwareType")]: "Mobile App (Android/iOS)",
        [t("product.brand")]: "WinSoft",
        [t("product.compatibility")]: "Android, iOS (Mobile)",
        [t("product.support")]: t("product.support247Text"),
        [t("product.license")]: "Subscription Based",
      },
      about: getT("mobileApps.farmer.items") as unknown as string[] || [
        "Daily milk collection details",
        "Milk bill information",
        "Ledger statement",
        "Payment status",
        "Notification alerts"
      ],
      images: ["/modern-dairy-farm.png", "/indian-software-office-collaboration.png"],
      videoUrl: "/dairy.mp4",
    },
    "3": {
      id: 3,
      title: getT("products.prod3.title") || "Dairy Administrator App",
      brand: "WinSoft Admin App",
      category: t("contact.dairy"),
      description: getT("products.prod3.desc") || "Collection monitoring, dashboard & analytics, and report access for dairy administrators.",
      variants: language === 'mr' ? ["प्रशासक पोर्टल", "अकाउंटिंग ईआरपी", "ऑडिट आवृत्ती"] :
        language === 'kn' ? ["ಅಡ್ಮಿನ್ ಪೋರ್ಟಲ್", "ಅಕೌಂಟಿಂಗ್ ಇಆರ್‌ಪಿ", "ಆಡಿಟ್ ಆವೃತ್ತಿ"] :
          language === 'hi' ? ["प्रशासक पोर्टल", "अकाउंटिंग ईआरपी", "ऑडिट संस्करण"] : ["Admin Portal", "Accounting ERP", "Audit Edition"],
      details: {
        [t("product.softwareType")]: "Web & Cloud ERP",
        [t("product.brand")]: "WinSoft",
        [t("product.compatibility")]: "Chrome, Edge, Safari",
        [t("product.database")]: "Cloud SQL Server",
        [t("product.accounting")]: "Co-op Society Audit Compliant",
      },
      about: getT("mobileApps.admin.items") as unknown as string[] || [
        "Collection monitoring",
        "Dashboard & analytics",
        "Report access",
        "Society performance tracking",
        "User management"
      ],
      images: ["/modern-office-dashboard.png", "/indian-software-office-collaboration.png"],
      videoUrl: "/dairy.mp4",
    },
    "4": {
      id: 4,
      title: getT("products.prod4.title") || "Milk Collection App & Machine Integration",
      brand: "WinSoft IoT Middleware",
      category: t("contact.dairy"),
      description: getT("products.prod4.desc") || "Direct integration with Fat Machine and Weighing Scales for seamless collection entry.",
      variants: language === 'mr' ? ["वजन काटा लिंक", "फॅट मशीन लिंक", "प्रिंटर आणि व्हॉइस मॉड्यूल"] :
        language === 'kn' ? ["ತೂಕದ ಮಾಪಕ ಲಿಂಕ್", "ಫ್ಯಾಟ್ ಮೆಷಿನ್ ಲಿಂಕ್", "ಪ್ರಿಂಟರ್ ಮತ್ತು ಧ್ವನಿ ಮಾಡ್ಯೂಲ್"] :
          language === 'hi' ? ["वजन कांटा लिंक", "फैट मशीन लिंक", "प्रिंटर और वॉयस मॉड्यूल"] : ["Weigh Scale Link", "FAT Machine Link", "Printer & Voice Module"],
      details: {
        [t("product.softwareType")]: "IoT Hardware Middleware",
        [t("product.brand")]: "WinSoft IoT",
        [t("product.compatibility")]: "Windows XP/7/10/11, Linux IoT",
        [t("product.hardwareIntegration")]: "Digital Scales, Milk Analyzers, Thermal Printers",
      },
      about: [
        ...(getT("mobileApps.collection.items") as unknown as string[] || [
          "Milk collection entry",
          "Fat/SNF recording",
          "Member verification",
          "Collection reports",
          "Offline & online synchronization"
        ]),
        language === 'mr' ? "फॅट मशीन आणि वजन काटा यांच्याशी सुसंगतता" :
          language === 'kn' ? "ಫ್ಯಾಟ್ ಮೆಷಿನ್ ಮತ್ತು ತೂಕದ ಮಾಪಕಗಳೊಂದಿಗೆ ಹೊಂದಾಣಿಕೆ" :
            language === 'hi' ? "फैट मशीन और वजन कांटे के साथ संगतता" :
              "Compatibility with Fat Machine and Weighing Scales"
      ],
      images: ["/placeholder.jpg", "/indian-software-office-collaboration.png"],
      videoUrl: "/dairy.mp4",
    },
    "5": {
      id: 5,
      title: getT("products.prod5.title") || "Production Management System",
      brand: "WinSoft Production ERP",
      category: t("contact.dairy"),
      description: getT("products.prod5.desc") || "Manage the complete milk processing cycle from raw milk reception to finished product production with real-time monitoring and inventory integration.",
      variants: language === 'mr' ? ["प्रमाणित आवृत्ती (Standard)", "उद्योग आवृत्ती (Enterprise)"] :
        language === 'kn' ? ["ಸ್ಟ್ಯಾಂಡರ್ಡ್ ಆವೃತ್ತಿ", "ಎಂಟರ್‌ಪ್ರೈಸ್ ಆವೃತ್ತಿ"] :
          language === 'hi' ? ["मानक संस्करण (Standard)", "एंटरप्राइज संस्करण (Enterprise)"] : ["Standard Edition", "Enterprise Edition"],
      details: {
        [t("product.softwareType")]: "Production ERP Module",
        [t("product.brand")]: "WinSoft",
        [t("product.compatibility")]: "Web, Windows, Android",
        [t("product.support")]: t("product.support247Text"),
      },
      about: language === 'mr' ? [
        "उत्पादन नियोजन (Production Planning)",
        "बॅच प्रक्रिया व्यवस्थापन (Batch Processing Management)",
        "कृती / फॉर्म्युलेशन व्यवस्थापन (Recipe/Formulation Management)",
        "कच्च्या मालाचा वापर (Raw Material Consumption)",
        "तयार वस्तूंचे उत्पादन (Finished Goods Production)",
        "उत्पादन खर्च विश्लेषण (Production Cost Analysis)",
        "अपव्यय आणि नुकसान ट्रॅकिंग (Wastage & Loss Tracking)",
        "उत्पादन अहवाल आणि विश्लेषण (Production Reports & Analytics)",
        "फायदे: सुधारित उत्पादन कार्यक्षमता, कमी झालेला अपव्यय, अचूक उत्पादन खर्च, संसाधनांचा चांगला वापर, रिअल-टाइम उत्पादन दृश्यमानता."
      ] : language === 'kn' ? [
        "ಉತ್ಪಾದನಾ ಯೋಜನೆ (Production Planning)",
        "ಬ್ಯಾಚ್ ಪ್ರಕ್ರಿಯೆ ನಿರ್ವಹಣೆ (Batch Processing Management)",
        "ರೆಸಿಪಿ / ಫಾರ್ಮುಲೇಶನ್ ನಿರ್ವಹಣೆ (Recipe/Formulation Management)",
        "ಕಚ್ಚಾ ವಸ್ತುಗಳ ಬಳಕೆ (Raw Material Consumption)",
        "ಸಿದ್ಧಪಡಿಸಿದ ಸರಕುಗಳ ಉತ್ಪಾದನೆ (Finished Goods Production)",
        "ಉತ್ಪಾದನಾ ವೆಚ್ಚದ ವಿಶ್ಲೇಷಣೆ (Production Cost Analysis)",
        "ವ್ಯರ್ಥ ಮತ್ತು ನಷ್ಟದ ಟ್ರ್ಯಾಕಿಂಗ್ (Wastage & Loss Tracking)",
        "ಉತ್ಪಾದನಾ ವರದಿಗಳು ಮತ್ತು ವಿಶ್ಲೇಷಣೆ (Production Reports & Analytics)",
        "ಪ್ರಯೋಜನಗಳು: ಸುಧಾರಿತ ಉತ್ಪಾದನಾ ದಕ್ಷತೆ, ಕಡಿಮೆ ವ್ಯರ್ಥ ಮತ್ತು ನಷ್ಟಗಳು, ನಿಖರವಾದ ಉತ್ಪಾದನಾ ವೆಚ್ಚ, ಉತ್ತಮ ಸಂಪನ್ಮೂಲ ಬಳಕೆ, ನೈಜ-ಸಮಯದ ಉತ್ಪಾದನಾ ಗೋಚರತೆ."
      ] : language === 'hi' ? [
        "उत्पादन योजना (Production Planning)",
        "बैच प्रोसेसिंग प्रबंधन (Batch Processing Management)",
        "विधि / फॉर्मूलेशन प्रबंधन (Recipe/Formulation Management)",
        "कच्चे माल की खपत (Raw Material Consumption)",
        "तैयार माल का उत्पादन (Finished Goods Production)",
        "उत्पादन लागत विश्लेषण (Production Cost Analysis)",
        "अपव्यय और नुकसान ट्रैकिंग (Wastage & Loss Tracking)",
        "उत्पादन रिपोर्ट और विश्लेषण (Production Reports & Analytics)",
        "लाभ: बेहतर उत्पादन दक्षता, कम अपव्यय और नुकसान, सटीक उत्पादन लागत, बेहतर संसाधन उपयोग, वास्तविक समय उत्पादन दृश्यता।"
      ] : [
        "Production Planning",
        "Batch Processing Management",
        "Recipe & Formulation Management",
        "Raw Material Consumption & Yield",
        "Finished Goods Production Tracking",
        "Production Cost Analysis",
        "Wastage & Loss Tracking",
        "Production Reports & Analytics",
        "Benefits: Improved efficiency, reduced wastage, accurate costing, better resource utilization, and real-time visibility."
      ],
      images: ["/goldwin.png", "/indian-software-office-collaboration.png"],
      videoUrl: "/dairy.mp4",
    },
    "6": {
      id: 6,
      title: getT("products.prod6.title") || "Transport Management System",
      brand: "WinSoft Logistics",
      category: t("contact.dairy"),
      description: getT("products.prod6.desc") || "Efficiently manage milk collection routes, vehicle operations, dispatches, and transportation costs.",
      variants: language === 'mr' ? ["मार्ग व्यवस्थापन (Route Edition)", "वाहन ट्रॅकिंग (Vehicle Tracking Edition)"] :
        language === 'kn' ? ["ಮಾರ್ಗ ಆವೃತ್ತಿ (Route Edition)", "ವಾಹನ ಟ್ರ್ಯಾಕಿಂಗ್ (Vehicle Tracking)"] :
          language === 'hi' ? ["मार्ग संस्करण (Route Edition)", "वाहन ट्रैकिंग संस्करण (Vehicle Tracking)"] : ["Route Edition", "Vehicle Tracking Edition"],
      details: {
        [t("product.softwareType")]: "Logistics & Transport ERP",
        [t("product.brand")]: "WinSoft",
        [t("product.compatibility")]: "Web, Windows, Android, GPS Devices",
        [t("product.support")]: t("product.support247Text"),
      },
      about: language === 'mr' ? [
        "मार्ग व्यवस्थापन (Route Management)",
        "वाहन मास्टर व्यवस्थापन (Vehicle Master Management)",
        "दूध संकलन आणि डिस्पॅच ट्रॅकिंग (Milk Collection & Dispatch Tracking)",
        "ड्रायव्हर व्यवस्थापन (Driver Management)",
        "इंधन आणि खर्च ट्रॅकिंग (Fuel & Expense Tracking)",
        "वाहतूक बिलिंग (Transport Billing)",
        "वाहननिहाय अहवाल (Vehicle-wise Reports)",
        "जीपीएस एकत्रीकरण सपोर्ट (GPS Integration Support)",
        "फायदे: इष्टतम वाहतूक कार्यपद्धती, कमी झालेला लॉजिस्टिक खर्च, वेळेवर दूध संकलन, वाहनांचा चांगला वापर, संपूर्ण वाहतूक दृश्यमानता."
      ] : language === 'kn' ? [
        "ಮಾರ್ಗ ನಿರ್ವಹಣೆ (Route Management)",
        "ವಾಹನ ಮಾಸ್ಟರ್ ನಿರ್ವಹಣೆ (Vehicle Master Management)",
        "ಹಾಲು ಸಂಗ್ರಹಣೆ ಮತ್ತು ರವಾನೆ ಟ್ರ್ಯಾಕಿಂಗ್ (Milk Collection & Dispatch Tracking)",
        "ಚಾಲಕ ನಿರ್ವಹಣೆ (Driver Management)",
        "ಇಂಧನ ಮತ್ತು ವೆಚ್ಚದ ಟ್ರ್ಯಾಕಿಂಗ್ (Fuel & Expense Tracking)",
        "ಸಾರಿಗೆ ಬಿಲ್ಲಿಂಗ್ (Transport Billing)",
        "ವಾಹನವಾರು ವರದಿಗಳು (Vehicle-wise Reports)",
        "ಜಿಸಿಪಿಎಸ್ ಏಕೀಕರಣ ಬೆಂಬಲ (GPS Integration Support)",
        "ಪ್ರಯೋಜನಗಳು: ಆಪ್ಟಿಮೈಸ್ಡ್ ಸಾರಿಗೆ ಕಾರ್ಯಾಚರಣೆಗಳು, ಕಡಿಮೆ ಲಾಜಿಸ್ಟಿಕ್ಸ್ ವೆಚ್ಚಗಳು, ಸಮಯೋಚಿತ ಹಾಲು ಸಂಗ್ರಹಣೆ, ಉತ್ತಮ ವಾಹನ ಬಳಕೆ, ಸಂಪೂರ್ಣ ಸಾರಿಗೆ ಗೋಚರತೆ."
      ] : language === 'hi' ? [
        "मार्ग प्रबंधन (Route Management)",
        "वाहन मास्टर प्रबंधन (Vehicle Master Management)",
        "दूध संग्रह और प्रेषण ट्रैकिंग (Milk Collection & Dispatch Tracking)",
        "चालक प्रबंधन (Driver Management)",
        "ईंधन और व्यय ट्रैकिंग (Fuel & Expense Tracking)",
        "परिवहन बिलिंग (Transport Billing)",
        "वाहन-वार रिपोर्ट (Vehicle-wise Reports)",
        "जीपीएस एकीकरण समर्थन (GPS Integration Support)",
        "लाभ: अनुकूलित परिवहन संचालन, कम लॉजिस्टिक लागत, समय पर दूध संग्रह, बेहतर वाहन उपयोग, पूर्ण परिवहन दृश्यता।"
      ] : [
        "Route Management",
        "Vehicle Master Management",
        "Milk Collection & Dispatch Tracking",
        "Driver Management",
        "Fuel & Expense Tracking",
        "Transport Billing",
        "Vehicle-wise Reports",
        "GPS Integration Support",
        "Benefits: Optimized transportation operations, reduced logistics costs, timely milk collection and delivery, better vehicle utilization, and complete transport visibility."
      ],
      images: ["/collection bike.webp", "/trucksheet 1.webp"],
      videoUrl: "/dairy.mp4",
    },
    "billing-5": {
      id: "billing-5",
      title: t("billing5.title") || "Dairy 5.0 – Milk Billing Software",
      brand: "WinSoft Solutions",
      category: t("contact.dairy"),
      description: t("billing5.overview") || "Automate milk bill generation, payment calculations, and member ledger management with complete accuracy. Manage advances, feed recovery, loan deductions, rebates, and dividends in a single system. Ensure transparent and hassle-free payment processing for dairy farmers.",
      variants: [t("product.prod1Variant1"), t("product.prod1Variant2"), t("product.prod1Variant3")],
      details: {
        [t("product.softwareType")]: "Desktop & Cloud",
        [t("product.brand")]: "WinSoft",
        [t("product.compatibility")]: "Windows, Android",
        [t("product.support")]: t("product.support247Text"),
        [t("product.license")]: t("product.lifetime"),
      },
      about: [
        getT("modules.collection.title") + " - " + (getT("modules.collection.items") as unknown as string[] || []).join(", "),
        getT("modules.billing.title") + " - " + (getT("modules.billing.items") as unknown as string[] || []).join(", "),
        getT("modules.rebate.title") + " - " + (getT("modules.rebate.items") as unknown as string[] || []).join(", "),
      ],
      images: [
        "/live-image-dairy/milk_collection_5.0.png",
        "/live-image-dairy/5.0.png",
        "/live-image-dairy/5.0_3.png"
      ],
      videoUrl: "",
    },
    "web-dairy": {
      id: "web-dairy",
      title: t("webDairy.title") || "Web-based Dairy Software Solutions",
      brand: "WinSoft Web Solutions",
      category: t("contact.dairy"),
      description: t("webDairy.overview") || "Web Dairy is a comprehensive web-based dairy management solution designed for Dairy Cooperative Societies, Milk Collection Centers, and Dairy Plants.",
      variants: language === 'mr' ? ["वेब आवृत्ती", "क्लाउड आवृत्ती"] : ["Web Edition", "Cloud Edition"],
      details: {
        [t("product.softwareType")]: "Web Application (SaaS)",
        [t("product.brand")]: "WinSoft Web",
        [t("product.compatibility")]: "Chrome, Safari, Edge, Firefox, Android, iOS (Mobile/Desktop)",
        [t("product.support")]: t("product.support247Text"),
        [t("product.license")]: "Subscription / SaaS",
      },
      about: [
        getT("modules.collection.title") + " - " + (getT("modules.collection.items") as unknown as string[] || []).join(", "),
        getT("modules.billing.title") + " - " + (getT("modules.billing.items") as unknown as string[] || []).join(", "),
        getT("modules.rebate.title") + " - " + (getT("modules.rebate.items") as unknown as string[] || []).join(", "),
        getT("modules.inventory.title") + " - " + (getT("modules.inventory.items") as unknown as string[] || []).join(", "),
        getT("modules.accounting.title") + " - " + (getT("modules.accounting.items") as unknown as string[] || []).join(", "),
        getT("modules.reports.title") + " - " + (getT("modules.reports.items") as unknown as string[] || []).join(", "),
      ],
      images: [
        "/live-image-dairy/5.0_3.png",
        "/live-image-dairy/5.0.png",
        "/live-image-dairy/milk_collection_5.0.png"
      ],
      videoUrl: "",
    }
  }), [t, language])

  const product = productsData[productId] || productsData["1"]

  const [activeMedia, setActiveMedia] = useState(() => {
    if (product.videoUrl) {
      return { type: 'video', url: product.videoUrl }
    }
    return { type: 'image', url: product.images[0] || "/placeholder.jpg" }
  })
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])

  useEffect(() => {
    if (product.videoUrl) {
      setActiveMedia({ type: 'video', url: product.videoUrl })
    } else {
      setActiveMedia({ type: 'image', url: product.images[0] || "/placeholder.jpg" })
    }
  }, [productId, product])

  const handlePrevImage = () => {
    if (!product.images || product.images.length === 0) return
    const idx = product.images.indexOf(activeMedia.url)
    if (idx !== -1) {
      const nextIdx = (idx - 1 + product.images.length) % product.images.length
      setActiveMedia({ type: 'image', url: product.images[nextIdx] })
    }
  }

  const handleNextImage = () => {
    if (!product.images || product.images.length === 0) return
    const idx = product.images.indexOf(activeMedia.url)
    if (idx !== -1) {
      const nextIdx = (idx + 1) % product.images.length
      setActiveMedia({ type: 'image', url: product.images[nextIdx] })
    }
  }

  const variantsText = product.variants.join(", ")
  const technicalSpecs = Object.entries(product.details).map(([k, v]) => `${k}: ${v}`).join(", ")
  const featuresText = product.about.join(", ")

  let audioText = ""
  if (language === 'mr') {
    audioText = `उत्पादनाचे नाव: ${product.title}. वर्णन: ${product.description}. उपलब्ध आवृत्त्या: ${variantsText}. तांत्रिक वैशिष्ट्ये: ${technicalSpecs}. मुख्य वैशिष्ट्ये: ${featuresText}.`
  } else if (language === 'kn') {
    audioText = `ಉತ್ಪನ್ನದ ಹೆಸರು: ${product.title}. ವಿವರಣೆ: ${product.description}. ಲಭ್ಯವಿರುವ ಆವೃತ್ತಿಗಳು: ${variantsText}. ತಾಂತ್ರಿಕ ವಿಶೇಷಣಗಳು: ${technicalSpecs}. ಪ್ರಮುಖ ವೈಶಿಷ್ಟ್ಯಗಳು: ${featuresText}.`
  } else {
    audioText = `Product Name: ${product.title}. Description: ${product.description}. Available Editions: ${variantsText}. Technical Specifications: ${technicalSpecs}. Key Features: ${featuresText}.`
  }

  const otherDairyProducts = useMemo(() => {
    return Object.entries(productsData)
      .filter(([id]) => id !== productId)
      .map(([id, prod]) => ({
        id,
        title: prod.title,
        description: prod.description,
        image: prod.images[0] || "/placeholder.jpg",
        link: `/product/${id}`,
        tag: prod.category || t("contact.dairy")
      }))
  }, [productsData, productId, t])

  const allOtherRecommendations = useMemo(() => {
    const enterprise = [];
    if (language === 'mr') {
      enterprise.push(
        {
          id: "gold",
          title: "सुवर्ण पेढी व दागिने व्यवस्थापन प्रणाली (Goldwin)",
          description: "सराफा दुकानांसाठी सोन्या-चांदीचे हिशोब, बारकोड बिलिंग, गहाणवट (Girvi) व्यवस्थापन आणि GST रिपोर्टचे संपूर्ण सॉफ्टवेअर.",
          image: "/gold-image-new/gold_home_page.png",
          link: "/gold-industry-solutions",
          tag: "सुवर्ण सोल्यूशन"
        },
        {
          id: "sugar",
          title: "साखर कारखाना व्यवस्थापन प्रणाली",
          description: "साखर कारखान्यांसाठी ऊस खरेदी, वजन काटा जोडणी, शेतकरी नोंदणी आणि संपूर्ण प्रशासकीय ERP सोल्यूशन.",
          image: "/sugerfac.png",
          link: "/sugar-factory-solutions",
          tag: "कारखाना सोल्यूशन"
        }
      );
    } else if (language === 'kn') {
      enterprise.push(
        {
          id: "gold",
          title: "ಚಿನ್ನದ ಅಂಗಡಿ ಮತ್ತು ಆಭರಣ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ (Goldwin)",
          description: "ಆಭರಣ ಮಳಿಗೆಗಳಿಗಾಗಿ ಚಿನ್ನ ಮತ್ತು ಬೆಳ್ಳಿಯ ಲೆಕ್ಕಾಚಾರ, ಬಾರ್‌ಕೋಡ್ ಬಿಲ್ಲಿಂಗ್, ಗಿರವಿ ನಿರ್ವಹಣೆ ಮತ್ತು ಜಿಎಸ್‌ಟಿ ವರದಿಗಳ ಸಂಪೂರ್ಣ ಸಾಫ್ಟ್‌ವೇರ್.",
          image: "/gold-image-new/gold_home_page.png",
          link: "/gold-industry-solutions",
          tag: "ಚಿನ್ನದ ಪರಿಹಾರ"
        },
        {
          id: "sugar",
          title: "ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ",
          description: "ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆಗಳಿಗಾಗಿ ಕಬ್ಬು ಖರೀದಿ, ತೂಕದ ಪ್ರಮಾಣ ಜೋಡಣೆ, ರೈತರ ನೋಂದಣಿ ಮತ್ತು ಸಂಪೂರ್ಣ ಆಡಳಿತಾತ್ಮಕ ERP ಪರಿಹಾರ.",
          image: "/sugerfac.png",
          link: "/sugar-factory-solutions",
          tag: "ಕಾರ್ಖಾನೆ ಪರಿಹಾರ"
        }
      );
    } else if (language === 'hi') {
      enterprise.push(
        {
          id: "gold",
          title: "स्वर्ण आभूषण शोरूम प्रबंधन प्रणाली (Goldwin)",
          description: "ज्वेलरी शोरूम के लिए सोने-चांदी का हिसाब, बारकोड बिलिंग, गिरवी प्रबंधन और GST रिपोर्ट का संपूर्ण सॉफ्टवेयर.",
          image: "/gold-image-new/gold_home_page.png",
          link: "/gold-industry-solutions",
          tag: "स्वर्ण समाधान"
        },
        {
          id: "sugar",
          title: "चीनी मिल प्रबंधन प्रणाली",
          description: "चीनी मिलों के लिए गन्ना खरीद, वजन कांटा एकीकरण, किसान पंजीकरण और संपूर्ण प्रशासनिक ERP समाधान.",
          image: "/sugerfac.png",
          link: "/sugar-factory-solutions",
          tag: "फैक्ट्री समाधान"
        }
      );
    } else {
      enterprise.push(
        {
          id: "gold",
          title: "Gold Jewellery Showroom ERP (Goldwin)",
          description: "Complete billing, account management, barcode scanning, Girvi/pledge tracking, and GST returns software for jewellery showrooms.",
          image: "/gold-image-new/gold_home_page.png",
          link: "/gold-industry-solutions",
          tag: "Gold Solution"
        },
        {
          id: "sugar",
          title: "Sugar Factory Enterprise Solutions",
          description: "Complete ERP system for sugar factories to manage cane procurement, weighbridge operations, farmer billing, and factory accounts.",
          image: "/sugerfac.png",
          link: "/sugar-factory-solutions",
          tag: "Enterprise Solution"
        }
      );
    }
    return enterprise;
  }, [language])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      <StarRatingSchema
        name={product.title}
        description={product.description}
        rating={4.8}
        reviewCount={product.id === 1 ? 180 : product.id === 2 ? 120 : product.id === 3 ? 95 : 75}
        category={product.category}
      />
      <Header />

      {/* BREADCRUMB */}
      <div className="bg-gray-50 border-b border-gray-200 dark:border-zinc-800 px-4 py-3 text-sm text-gray-500 dark:text-zinc-400">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link href="/" className="hover:underline text-gray-700 dark:text-zinc-300 flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> {t("product.backToSolutions")}
          </Link>
          <span className="mx-3 text-gray-300">|</span>
          <Link href="/" className="hover:underline">{t("product.home")}</Link>
          <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
          <span className="text-gray-400">{product.category}</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* LEFT SECTION (MEDIA GALLERY) */}
          <div className="w-full lg:w-5/12 space-y-6">
            <div className="relative w-full aspect-[4/3] border border-gray-200 dark:border-zinc-800 rounded-3xl overflow-hidden bg-black flex items-center justify-center shadow-lg dark:shadow-none">
              {activeMedia.type === 'video' ? (
                activeMedia.url.startsWith('http') ? (
                  <iframe
                    className="w-full h-full"
                    src={activeMedia.url}
                    title="Product Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    className="w-full h-full"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={activeMedia.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )
              ) : (
                <div className="relative w-full h-full group">
                  <Image
                    src={activeMedia.url}
                    alt={product.title}
                    fill
                    className="object-contain p-4"
                  />
                  {product.images && product.images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10 focus:outline-none"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10 focus:outline-none"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-4">
              {/* Video Thumbnail */}
              {product.videoUrl && (
                <div
                  className={`relative w-20 h-20 border-2 rounded-2xl cursor-pointer overflow-hidden transition-all flex items-center justify-center bg-zinc-900 ${activeMedia.type === 'video' ? 'border-purple-600 shadow-md scale-105' : 'border-gray-200 dark:border-zinc-800 hover:border-purple-300'}`}
                  onClick={() => setActiveMedia({ type: 'video', url: product.videoUrl })}
                >
                  <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                  {product.images[0] && <Image src={product.images[0]} alt="Video Thumbnail" fill className="object-cover opacity-50" />}
                </div>
              )}

              {/* Image Thumbnails */}
              {product.images.map((img: string, idx: number) => (
                <div
                  key={idx}
                  className={`relative w-20 h-20 border-2 rounded-2xl cursor-pointer overflow-hidden transition-all ${activeMedia.type === 'image' && activeMedia.url === img ? 'border-purple-600 shadow-md dark:shadow-none scale-105' : 'border-gray-200 dark:border-zinc-800 hover:border-purple-300'}`}
                  onClick={() => setActiveMedia({ type: 'image', url: img })}
                >
                  <Image src={img} alt="Thumbnail" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE SECTION (DETAILS) */}
          <div className="w-full lg:w-7/12 space-y-8">
            <div>
              <div className="flex flex-col items-start gap-4 mb-4">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 leading-tight">
                  {product.title}
                </h1>
                <AudioButton text={audioText} colorTheme="purple" />
              </div>
              {product.description && (
                <p className="text-lg text-gray-650 dark:text-zinc-400 leading-relaxed font-serif">
                  {product.description}
                </p>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-900 dark:text-zinc-100 border-b pb-2">
                {t("product.availableEditions")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v: string) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-2 text-sm rounded-xl border transition-all ${selectedVariant === v ? 'border-purple-600 bg-purple-50 text-purple-700 font-semibold' : 'border-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-900 text-gray-600 dark:text-zinc-400'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-900 dark:text-zinc-100 border-b pb-2">
                {t("product.technicalSpecs")}
              </h3>
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                {Object.entries(product.details).map(([key, value]) => (
                  <div key={key} className="contents">
                    <div className="font-semibold text-gray-500 dark:text-zinc-400">{key}</div>
                    <div className="text-gray-900 dark:text-zinc-100 font-medium">{value as string}</div>
                  </div>
                ))}
              </div>
            </div>

            {!(productId === "1" || productId === "billing-5" || productId === "web-dairy") && (
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-gray-900 dark:text-zinc-100 border-b pb-2">
                  {t("product.keyFeatures")}
                </h3>
                <ul className="space-y-3">
                  {product.about.map((point: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-zinc-300 text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>

        {/* Structured Modules & Features for Complete Dairy Software */}
        {(productId === "1" || productId === "billing-5" || productId === "web-dairy") && (
          <div className="mt-16 space-y-12 border-t border-gray-200 dark:border-zinc-850 pt-16">
            <div>
              <h3 className="font-bold text-2xl text-gray-900 dark:text-zinc-100 mb-8 text-center flex items-center justify-center gap-3">
                🥛 {language === 'mr' ? "मुख्य मॉड्यूल्स" : language === 'kn' ? "ಪ್ರಮುಖ ಮಾಡ್ಯೂಲ್‌ಗಳು" : language === 'hi' ? "मुख्य मॉड्यूल" : "Core Modules"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: getT("modules.collection.title") || "Milk Collection Management",
                    items: getT("modules.collection.items") as unknown as string[] || []
                  },
                  {
                    title: getT("modules.billing.title") || "Milk Billing System",
                    items: getT("modules.billing.items") as unknown as string[] || []
                  },
                  {
                    title: getT("modules.rebate.title") || "Rebate & Dividend Management",
                    items: getT("modules.rebate.items") as unknown as string[] || []
                  },
                  {
                    title: getT("modules.inventory.title") || "Inventory Management",
                    items: getT("modules.inventory.items") as unknown as string[] || []
                  },
                  {
                    title: getT("modules.accounting.title") || "Accounting Management",
                    items: getT("modules.accounting.items") as unknown as string[] || []
                  },
                  {
                    title: getT("modules.reports.title") || "MIS Reports",
                    items: getT("modules.reports.items") as unknown as string[] || []
                  }
                ].filter((_, idx) => {
                  if (productId === "billing-5") {
                    return idx < 3; // Only show Collection, Billing, and Rebate for billing-5
                  }
                  return true;
                }).map((mod, index) => (
                  <div key={index} className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-200/60 dark:border-zinc-800/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-[#1E94A4]/40 dark:hover:border-[#1E94A4]/40">
                    <div>
                      <h4 className="font-bold text-lg text-[#1E94A4] dark:text-[#22d3ee] mb-4 group-hover:translate-x-1 transition-transform">{mod.title}</h4>
                      <ul className="space-y-2.5">
                        {mod.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-gray-650 dark:text-zinc-400 text-sm flex items-start gap-2.5 leading-relaxed font-serif">
                            <span className="text-green-500 font-bold shrink-0">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-zinc-850 pt-16">
              <h3 className="font-bold text-2xl text-gray-900 dark:text-zinc-100 mb-8 text-center flex items-center justify-center gap-3">
                🛡️ {getT("keyFeaturesTitle") || "Key Features"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: getT("keyFeatures.transparency.title") || "Transparency & Control",
                    items: getT("keyFeatures.transparency.items") as unknown as string[] || []
                  },
                  {
                    title: getT("keyFeatures.security.title") || "Security",
                    items: getT("keyFeatures.security.items") as unknown as string[] || []
                  },
                  {
                    title: getT("keyFeatures.integration.title") || "Machine Integration",
                    items: getT("keyFeatures.integration.items") as unknown as string[] || []
                  },
                  {
                    title: getT("keyFeatures.rates.title") || "Flexible Rate Management",
                    items: getT("keyFeatures.rates.items") as unknown as string[] || []
                  }
                ].map((feat, index) => (
                  <div key={index} className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-200/60 dark:border-zinc-800/80 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#1E94A4]/40 dark:hover:border-[#1E94A4]/40">
                    <h4 className="font-bold text-lg text-[#1E94A4] dark:text-[#22d3ee] mb-4">{feat.title}</h4>
                    <ul className="space-y-2.5">
                      {feat.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-gray-650 dark:text-zinc-400 text-sm flex items-start gap-2.5 leading-relaxed font-serif">
                          <span className="text-blue-500 font-bold shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-zinc-850 pt-16">
              <h3 className="font-bold text-2xl text-gray-900 dark:text-zinc-100 mb-8 text-center flex items-center justify-center gap-3">
                📱 {getT("mobileAppsTitle") || "Additional Mobile Applications (Available at Extra Cost)"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: getT("mobileApps.farmer.title") || "Farmer Mobile App",
                    items: getT("mobileApps.farmer.items") as unknown as string[] || []
                  },
                  {
                    title: getT("mobileApps.admin.title") || "Dairy Administrator App",
                    items: getT("mobileApps.admin.items") as unknown as string[] || []
                  },
                  {
                    title: getT("mobileApps.collection.title") || "Milk Collection App",
                    items: getT("mobileApps.collection.items") as unknown as string[] || []
                  }
                ].map((app, index) => (
                  <div key={index} className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-200/60 dark:border-zinc-800/80 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#1E94A4]/40 dark:hover:border-[#1E94A4]/40">
                    <h4 className="font-bold text-lg text-[#1E94A4] dark:text-[#22d3ee] mb-4">{app.title}</h4>
                    <ul className="space-y-2.5">
                      {app.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-gray-650 dark:text-zinc-400 text-sm flex items-start gap-2.5 leading-relaxed font-serif">
                          <span className="text-purple-500 font-bold shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Recommended Solutions Section - hidden on Dairy page (product 1) */}
        {productId !== "1" && productId !== "billing-5" && productId !== "web-dairy" && (
          <div className="mt-20 border-t border-gray-200 dark:border-zinc-800 pt-16">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-sans font-bold mb-4 border border-purple-200 dark:border-purple-800/30">
                {language === 'mr' ? "इतर शिफारस केलेली उत्पादने" : language === 'kn' ? "ಇತರ ಶಿಫಾರಸು ಮಾಡಿದ ಉತ್ಪನ್ನಗಳು" : language === 'hi' ? "अन्य अनुशंसित उत्पाद" : "Other Recommended Solutions"}
              </span>
              <h2 className="text-2xl md:text-4xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-4">
                {language === 'mr' ? "आमची इतर प्रीमियम सोल्यूशन्स" :
                  language === 'kn' ? "ನಮ್ಮ ಇತರ ಪ್ರೀಮಿಯಂ ಪರಿಹಾರಗಳು" :
                    language === 'hi' ? "हमारे अन्य प्रीमियम समाधान" : "Our Other Premium Solutions"}
              </h2>
              <p className="text-gray-500 dark:text-zinc-400 font-serif max-w-2xl mx-auto text-sm">
                {language === 'mr' ? "तुमच्या व्यवसायाला अत्याधुनिक डिजिटल युगात नेण्यासाठी आणि दैनंदिन कामकाज सुलभ करण्यासाठी तयार करण्यात आलेली प्रगत सॉफ्टवेअर्स." :
                  language === 'kn' ? "ನಿಮ್ಮ ವ್ಯವಹಾರವನ್ನು ಅತ್ಯಾಧುನಿಕ ಡಿಜಿಟಲ್ ಯುಗಕ್ಕೆ ಕೊಂಡೊಯ್ಯಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸುಧಾರಿತ ಸಾಫ್ಟ್‌ವೇರ್." :
                    language === 'hi' ? "आपके व्यवसाय को अत्याधुनिक डिजिटल युग में ले जाने के लिए डिज़ाइन किए गए उन्नत सॉफ़्टवेयर।" : "Explore other advanced software solutions from WinSoft designed to help streamline operations and drive business growth."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allOtherRecommendations.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-50 dark:bg-zinc-900/50 hover-lift p-6 rounded-[2rem] flex flex-col justify-between min-h-[420px] group border border-gray-200/60 dark:border-zinc-800/50 shadow-sm"
                >
                  <div className="flex flex-col h-full">
                    <Link href={product.link} className="block relative">
                      <div className="absolute inset-0 bg-purple-600/10 dark:bg-purple-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                      <div className="relative w-full h-36 mb-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-xs bg-white dark:bg-black">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-purple-600 text-white text-[10px] font-sans font-bold px-2 py-0.5 rounded-full shadow-xs">
                          {product.tag}
                        </div>
                      </div>
                    </Link>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-zinc-100 leading-snug mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                      {product.title}
                    </h3>

                    <p className="text-gray-600 dark:text-zinc-400 text-xs mb-6 flex-grow leading-relaxed font-serif line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-gray-200/60 dark:border-zinc-800">
                    <Link href={product.link} className="block font-sans">
                      <Button variant="outline" className="w-full border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 font-semibold py-4 rounded-xl text-xs hover:bg-white dark:hover:bg-zinc-850 transition-all font-sans">
                        {t("home.viewDetails")}
                      </Button>
                    </Link>
                    <Link href="/contact" className="block font-sans">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl text-xs transition-all shadow-sm hover:shadow-purple-600/25 font-sans">
                        {t("home.requestDemo")}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

function ShieldCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
