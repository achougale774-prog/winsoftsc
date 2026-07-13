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
  Sprout,
  CalendarCheck,
  ShoppingBag,
  Scale,
  FlaskConical,
  Droplet,
  Flame,
  ShoppingCart,
  Boxes,
  Calculator,
  Wrench,
  PieChart,
  ShieldCheck,
  CheckCircle2,
  ListFilter
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useMemo, useState } from "react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import Image from "next/image"
import { CallNowButton } from "@/components/call-now-button"

export default function SugarFactorySolutionsPage() {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState("agri")

  const capabilities = useMemo(() => [
    { title: t("sugar.caneProc") || "Cane Procurement", icon: Truck, color: "red" },
    { title: t("sugar.farmerMgmt") || "Farmer Management", icon: Users, color: "blue" },
    { title: t("sugar.prodTracking") || "Production Tracking", icon: Factory, color: "orange" },
    { title: t("sugar.financialERP") || "Financial ERP", icon: BarChart3, color: "green" },
  ], [t])

  const categoryTabs = useMemo(() => [
    {
      id: "agri",
      name: language === 'mr' ? "कृषी आणि कापणी" : language === 'kn' ? "ಕಬ್ಬು ಕೃಷಿ ಮತ್ತು ಕಟಾವು" : language === 'hi' ? "कृषि और कटाई" : "Agriculture & Harvesting",
      modules: [
        {
          title: t("sugar.agriDeptTitle"),
          icon: Sprout,
          color: "#22c55e",
          description: language === 'mr' ? "ऊसाची शेती, शेतकरी नोंदणी आणि जमीन मोजणीचे व्यवस्थापन." :
                       language === 'kn' ? "ಕಬ್ಬು ಕೃಷಿ, ರೈತರ ನೋಂದಣಿ आणि ಭೂ ಸಮೀಕ್ಷೆ ನಿರ್ವಹಣೆ." :
                       language === 'hi' ? "गन्ना कृषि, किसान पंजीकरण और भूमि सर्वेक्षण प्रबंधन।" : "Managing cane cultivation, farmer registration, and land surveys.",
          items: t("sugar.agriDeptItems") as unknown as string[] || []
        },
        {
          title: t("sugar.harvestMgmtTitle"),
          icon: CalendarCheck,
          color: "#eab308",
          description: language === 'mr' ? "तोडणी कार्यक्रम नियोजन, वेळापत्रक आणि कंत्राटदार बिलिंगचे नियंत्रण." :
                       language === 'kn' ? "ಕಟಾವು ಯೋಜನೆ, ವೇಳಾಪಟ್ಟಿ ಮತ್ತು ಗುತ್ತಿಗೆದಾರರ ಬಿಲ್ಲಿಂಗ್ ನಿಯಂತ್ರಣ." :
                       language === 'hi' ? "कटाई योजना, समय सारणी और ठेकेदार बिलिंग नियंत्रण।" : "Controlling harvesting program planning, scheduling, and contractor billing.",
          items: t("sugar.harvestMgmtItems") as unknown as string[] || []
        }
      ]
    },
    {
      id: "logistics",
      name: language === 'mr' ? "खरेदी आणि वाहतूक" : language === 'kn' ? "ಖರೀದಿ ಮತ್ತು ಸಾರಿಗೆ" : language === 'hi' ? "खरीद और परिवहन" : "Procurement & Logistics",
      modules: [
        {
          title: t("sugar.transMgmtTitle"),
          icon: Truck,
          color: "#3b82f6",
          description: language === 'mr' ? "वाहन नोंदणी, वाहतूक कंत्राटदार आणि जीपीएस ट्रॅकिंगचे नियंत्रण." :
                       language === 'kn' ? "ವಾಹನ ನೋಂದಣಿ, ಸಾರಿಗೆ ಗುತ್ತಿಗೆದಾರರು ಮತ್ತು ಜಿಪಿಎಸ್ ಟ್ರ್ಯಾಕಿಂಗ್ ನಿಯಂತ್ರಣ." :
                       language === 'hi' ? "वाहन पंजीकरण, परिवहन ठेकेदार और जीपीएस ट्रैकिंग नियंत्रण।" : "Managing vehicle registration, transport contractors, and GPS tracking.",
          items: t("sugar.transMgmtItems") as unknown as string[] || []
        },
        {
          title: t("sugar.caneProcTitle"),
          icon: ShoppingBag,
          color: "#ec4899",
          description: language === 'mr' ? "ऊस खरेदी, वजन नोंदणी, गुणवत्ता विश्लेषण आणि पेमेंट प्रक्रिया." :
                       language === 'kn' ? "ಕಬ್ಬು ಖರೀದಿ, ತೂಕದ ರೆಕಾರ್ಡಿಂಗ್, ಗುಣಮಟ್ಟದ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಪಾವತಿ ಪ್ರಕ್ರಿಯೆ." :
                       language === 'hi' ? "गन्ना खरीद, वजन रिकॉर्डिंग, गुणवत्ता विश्लेषण और भुगतान प्रसंस्करण।" : "Cane purchase registration, weight recording, quality analysis, and payments.",
          items: t("sugar.caneProcItems") as unknown as string[] || []
        },
        {
          title: t("sugar.weighbridgeMgmtTitle"),
          icon: Scale,
          color: "#f97316",
          description: language === 'mr' ? "वाहनांचे प्रवेश, ग्रॉस/टॅरे/निव्वळ वजन आणि वजन पावती निर्मिती." :
                       language === 'kn' ? "ವಾಹನ ಪ್ರವೇಶ, ಒಟ್ಟು/ಖಾಲಿ/ನಿವ್ವಳ ತೂಕದ ರೆಕಾರ್ಡಿಂಗ್ ಮತ್ತು ತೂಕದ ಚೀಟಿ ರಚನೆ." :
                       language === 'hi' ? "वाहन प्रवेश, सकल/खाली/शुद्ध वजन और वजन पर्ची जनरेशन।" : "Vehicle entry, gross/tare/net weight recording, and slip generation.",
          items: t("sugar.weighbridgeMgmtItems") as unknown as string[] || []
        },
        {
          title: t("sugar.labMgmtTitle"),
          icon: FlaskConical,
          color: "#06b6d4",
          description: language === 'mr' ? "ऊस गुणवत्ता, साखर रिकव्हरी आणि उत्पादन गुणवत्ता चाचणी." :
                       language === 'kn' ? "ಕಬ್ಬಿನ ಗುಣಮಟ್ಟ, ಸಕ್ಕರೆ ರಿಕವರಿ ಮತ್ತು ಉತ್ಪಾದನಾ ಗುಣಮಟ್ಟದ ಪರೀಕ್ಷೆ." :
                       language === 'hi' ? "गन्ना गुणवत्ता, चीनी रिकवरी और उत्पादन गुणवत्ता परीक्षण।" : "Cane quality testing, sugar recovery analysis, and lab reports.",
          items: t("sugar.labMgmtItems") as unknown as string[] || []
        }
      ]
    },
    {
      id: "production",
      name: language === 'mr' ? "उत्पादन आणि कारखाना" : language === 'kn' ? "ಉತ್ಪಾದನೆ ಮತ್ತು ಕಾರ್ಖಾನೆ" : language === 'hi' ? "उत्पादन और कारखाना" : "Refinery & Production",
      modules: [
        {
          title: t("sugar.prodMgmtTitle"),
          icon: Factory,
          color: "#ef4444",
          description: language === 'mr' ? "ऊस गाळप, साखर निर्मिती प्रक्रिया आणि वीज/स्टीम वापर ट्रॅकिंग." :
                       language === 'kn' ? "ಕಬ್ಬು ನುರಿಸುವಿಕೆ, ಸಕ್ಕರೆ ತಯಾರಿಕೆ ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ವಿದ್ಯುತ್/ಉಗಿ ಬಳಕೆ ಟ್ರ್ಯಾಕಿಂಗ್." :
                       language === 'hi' ? "गन्ना पेराई, चीनी निर्माण प्रक्रिया और बिजली/भाप खपत ट्रैकिंग।" : "Cane crushing, sugar manufacturing process, and steam/power consumption tracking.",
          items: t("sugar.prodMgmtItems") as unknown as string[] || []
        },
        {
          title: t("sugar.molassesMgmtTitle"),
          icon: Droplet,
          color: "#8b5cf6",
          description: language === 'mr' ? "मळी उत्पादन, स्टोरेज टँक आणि विक्री/डिस्पॅच ट्रॅकिंग." :
                       language === 'kn' ? "ಮೊಳಾಸಿಸ್ ಉತ್ಪಾದನೆ, ಶೇಖರಣಾ ಟ್ಯಾಂಕ್ ಮತ್ತು ಮಾರಾಟ/ರವಾನೆ ಟ್ರ್ಯಾಕಿಂಗ್." :
                       language === 'hi' ? "शीरा उत्पादन, भंडारण टैंक और बिक्री/प्रेषण ट्रैकिंग।" : "Molasses production, storage tank management, sales, and dispatches.",
          items: t("sugar.molassesMgmtItems") as unknown as string[] || []
        },
        {
          title: t("sugar.bagasseMgmtTitle"),
          icon: Flame,
          color: "#f59e0b",
          description: language === 'mr' ? "बगॅस उत्पादन, अंतर्गत वापर आणि विक्री नियंत्रण." :
                       language === 'kn' ? "ಬಗಾಸ್ ಉತ್ಪಾದನೆ, ಆಂತರಿಕ ಬಳಕೆ ಮತ್ತು ಮಾರಾಟ ನಿಯಂತ್ರಣ." :
                       language === 'hi' ? "खोई उत्पादन, आंतरिक खपत और बिक्री नियंत्रण।" : "Bagasse production tracking, internal consumption, sales, and dispatches.",
          items: t("sugar.bagasseMgmtItems") as unknown as string[] || []
        },
        {
          title: t("sugar.maintMgmtTitle"),
          icon: Wrench,
          color: "#64748b",
          description: language === 'mr' ? "उपकरणे, प्रतिबंधात्मक आणि ब्रेकडाउन देखभाल आणि स्पेअर पार्ट्स व्यवस्थापन." :
                       language === 'kn' ? "ಉಪಕರಣಗಳು, ನಿವಾರಕ ಮತ್ತು ಸ್ಥಗಿತ ನಿರ್ವಹಣೆ ಮತ್ತು ಬಿಡಿಭಾಗಗಳ ನಿರ್ವಹಣೆ." :
                       language === 'hi' ? "उपकरण, निवारक और ब्रेकडाउन रखरखाव और स्पेयर पार्ट्स प्रबंधन।" : "Equipment master, preventive/breakdown maintenance, and spare parts.",
          items: t("sugar.maintMgmtItems") as unknown as string[] || []
        }
      ]
    },
    {
      id: "sales",
      name: language === 'mr' ? "इन्व्हेंटरी आणि विक्री" : language === 'kn' ? "ದಾಸ್ತಾನು ಮತ್ತು ಮಾರಾಟ" : language === 'hi' ? "इन्वेंटरी और बिक्री" : "Inventory & Sales",
      modules: [
        {
          title: t("sugar.sugarInvMgmtTitle"),
          icon: Warehouse,
          color: "#10b981",
          description: language === 'mr' ? "साखर स्टॉक व्यवस्थापन, गोदाम आणि बॅगिंग नियंत्रण." :
                       language === 'kn' ? "ಸಕ್ಕರೆ ಸ್ಟಾಕ್ ನಿರ್ವಹಣೆ, ಗೋದಾಮು ಮತ್ತು ಬ್ಯಾಗಿಂಗ್ ನಿಯಂತ್ರಣ." :
                       language === 'hi' ? "चीनी स्टॉक प्रबंधन, गोदाम और पैकिंग नियंत्रण।" : "Sugar stock management, godown control, and bagging management.",
          items: t("sugar.sugarInvMgmtItems") as unknown as string[] || []
        },
        {
          title: t("sugar.sugarSalesMgmtTitle"),
          icon: TrendingUp,
          color: "#a855f7",
          description: language === 'mr' ? "ग्राहक व्यवस्थापन, सेल्स ऑर्डर, डिस्पॅच आणि जीएसटी इनव्हॉइस." :
                       language === 'kn' ? "ಗ್ರಾಹಕರ ನಿರ್ವಹಣೆ, ಮಾರಾಟ ಆದೇಶ, ರವಾನೆ ಮತ್ತು ಜಿಎಸ್ಟಿ ಸರಕುಪಟ್ಟಿ." :
                       language === 'hi' ? "ग्राहक प्रबंधन, बिक्री आदेश, प्रेषण और जीएसटी चालान।" : "Customer management, sales orders, dispatch, and GST invoices.",
          items: t("sugar.sugarSalesMgmtItems") as unknown as string[] || []
        },
        {
          title: t("sugar.purchaseMgmtTitle"),
          icon: ShoppingCart,
          color: "#14b8a6",
          description: language === 'mr' ? "विक्रेता व्यवस्थापन, खरेदी मागणी, पीओ, जीआरएन आणि देयके." :
                       language === 'kn' ? "ಮಾರಾಟಗಾರರ ನಿರ್ವಹಣೆ, ಖರೀದಿ वಿನಂತಿ, PO, GRN ಮತ್ತು ಪಾವತಿಗಳು." :
                       language === 'hi' ? "विक्रेता प्रबंधन, खरीद मांग, पीओ, जीआरएन और भुगतान।" : "Vendor management, purchase requisition, PO, GRN, and payments.",
          items: t("sugar.purchaseMgmtItems") as unknown as string[] || []
        }
      ]
    },
    {
      id: "finance",
      name: language === 'mr' ? "वित्त आणि प्रशासन" : language === 'kn' ? "ಹಣಕಾಸು ಮತ್ತು ಆಡಳಿತ" : language === 'hi' ? "वित्त और प्रशासन" : "Finance & Admin",
      modules: [
        {
          title: t("sugar.storeInvMgmtTitle"),
          icon: Boxes,
          color: "#0ea5e9",
          description: language === 'mr' ? "स्टोअर मटेरियल मास्टर, स्टॉक एंट्री/इश्यू, रिऑर्डर लेव्हल आणि स्टोअर लेझर व्यवस्थापन." :
                       language === 'kn' ? "ಮಟೀರಿಯಲ್ ಮಾಸ್ಟರ್, ಸ್ಟಾಕ್ ಎಂಟ್ರಿ/ಇಶ್ಯೂ, ಮರುಕ್ರಮಗೊಳಿಸುವ ಮಟ್ಟ ಮತ್ತು ಸ್ಟೋರ್ ಲೆಡ್ಜರ್ ನಿರ್ವಹಣೆ." :
                       language === 'hi' ? "सामग्री मास्टर, स्टॉक प्रविष्टि/जारी, पुनरावृत्ति स्तर और स्टोर लेजर प्रबंधन।" : "Store material master, stock entry & issue, reorder levels, and store ledger management.",
          items: t("sugar.storeInvMgmtItems") as unknown as string[] || []
        },
        {
          title: t("sugar.payrollMgmtTitle"),
          icon: FileText,
          color: "#8b5cf6",
          description: language === 'mr' ? "कर्मचारी हजेरी, रजा व्यवस्थापन, वेतन प्रक्रिया, PF/ESIC आणि सॅलरी स्लिप निर्मिती." :
                       language === 'kn' ? "ನೌಕರರ ಹಾಜರಾತಿ, ರಜೆ ನಿರ್ವಹಣೆ, ಸಂಬಳ ಪ್ರಕ್ರಿಯೆ, PF/ESIC ಮತ್ತು ಸಂಬಳದ ಚೀಟಿ ರಚನೆ." :
                       language === 'hi' ? "कर्मचारी उपस्थिति, अवकाश प्रबंधन, वेतन प्रसंस्करण, PF/ESIC और वेतन पर्ची जनरेशन।" : "Employee attendance, leave management, payroll processing, PF/ESIC, and salary slip generation.",
          items: t("sugar.payrollMgmtItems") as unknown as string[] || []
        },
        {
          title: t("sugar.accountingFinanceTitle"),
          icon: BarChart3,
          color: "#10b981",
          description: language === 'mr' ? "सामान्य खातेवही, जीएसटी लेखा, देय/प्राप्त खाती, बजेट आणि वित्तीय अहवाल." :
                       language === 'kn' ? "ಸಾಮಾನ್ಯ ಲೆಡ್ಜರ್, ಜಿಎಸ್ಟಿ ಅಕೌಂಟಿಂಗ್, ಪಾವತಿಸಬೇಕಾದ/ಸ್ವೀಕರಿಸಬೇಕಾದ ಖಾತೆಗಳು ಮತ್ತು ಹಣಕಾಸು ವರದಿಗಳು." :
                       language === 'hi' ? "सामान्य बही, जीएसटी लेखांकन, देय/प्राप्य खाते, बजट और वित्तीय विवरण।" : "General ledger, GST accounting, accounts payable/receivable, budgeting, and financial statements.",
          items: t("sugar.accountingFinanceItems") as unknown as string[] || []
        },
        {
          title: t("sugar.misTitle"),
          icon: PieChart,
          color: "#f59e0b",
          description: language === 'mr' ? "कार्यकारी डॅशबोर्ड, वास्तविक वेळ उत्पादन अहवाल, कामगिरी विश्लेषण आणि KPI देखरेख." :
                       language === 'kn' ? "ಕಾರ್ಯನಿರ್ವಾಹಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್, ನೈಜ-ಸಮಯದ ಉತ್ಪಾದನಾ ವರದಿಗಳು, ಕಾರ್ಯಕ್ಷಮತೆ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು KPI ಮೇಲ್ವಿಚಾರಣೆ." :
                       language === 'hi' ? "कार्यकारी डैशबोर्ड, वास्तविक समय उत्पादन रिपोर्ट, प्रदर्शन विश्लेषिकी और KPI निगरानी।" : "Executive dashboards, real-time production reports, performance analytics, and KPI monitoring.",
          items: t("sugar.misItems") as unknown as string[] || []
        },
        {
          title: t("sugar.commonFeaturesTitle"),
          icon: ShieldCheck,
          color: "#64748b",
          description: language === 'mr' ? "भूमिका-आधारित प्रवेश नियंत्रण, मोबाईल ॲप एकत्रीकरण, एसएमएस/व्हाट्सॲप सूचना आणि मंजुरी कार्यप्रवाह." :
                       language === 'kn' ? "ಪಾತ್ರ-ಆಧಾರಿತ ಪ್ರವೇಶ ನಿಯಂತ್ರಣ, ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್ ಏಕೀಕರಣ, SMS/WhatsApp ಅಧಿಸೂಚನೆಗಳು ಮತ್ತು ಅನುಮೋದನೆ ವ್ಯವಸ್ಥೆ." :
                       language === 'hi' ? "भूमिका आधारित पहुंच नियंत्रण, मोबाइल ऐप एकीकरण, एसएमएस/whatsapp सूचनाएं और कार्यप्रवाह अनुमोदन।" : "Role-based access control, mobile app integration, SMS/WhatsApp alerts, and workflow approvals.",
          items: t("sugar.commonFeaturesItems") as unknown as string[] || []
        }
      ]
    }
  ], [language, t])

  const sugarProducts = useMemo(() => {
    if (language === 'mr') {
      return [
        {
          id: "sugar-erp",
          title: "संपूर्ण साखर कारखाना ERP सोल्यूशन",
          description: "साखर कारखान्यांसाठी शेतकरी नोंदणीपासून ते साखर विक्रीपर्यंत सर्व विभागांचे एकत्रित ERP व्यवस्थापन सोल्यूशन.",
          image: "/suger-factory-images/sugar-erp.jpg",
          tag: "साखर ERP",
          link: "/product/sugar-erp"
        },
        {
          id: "sugar-agri",
          title: "कृषी व तोडणी व्यवस्थापन",
          description: "शेतकरी नोंदणी, जमीन मोजणी, ऊस लागवड व्यवस्थापन, खत व बियाणे वितरण आणि तोडणी कार्यक्रम नियोजन.",
          image: "/suger-factory-images/sugar-agri.jpg",
          tag: "कृषी विभाग",
          link: "/product/sugar-agri"
        },
        {
          id: "sugar-procurement",
          title: "ऊस खरेदी व वजन काटा व्यवस्थापन",
          description: "ऊस खरेदी नोंदणी, शेतकरी बिलिंग, वजन नोंदणी, गुणवत्ता विश्लेषण (रिकव्हरी/फॅट) आणि पेमेंट प्रक्रिया.",
          image: "/suger-factory-images/sugar-procurement.jpg",
          tag: "खरेदी व वजन काटा",
          link: "/product/sugar-procurement"
        },
        {
          id: "sugar-production",
          title: "उत्पादन व्यवस्थापन प्रणाली",
          description: "ऊस गाळप व्यवस्थापन, दैनिक उत्पादन नियोजन, साखर निर्मिती प्रक्रिया देखरेख, स्टीम व वीज वापर ट्रॅकिंग.",
          image: "/sugar-factory-production-line.png",
          tag: "उत्पादन प्रणाली",
          link: "/product/sugar-production"
        },
        {
          id: "sugar-inventory",
          title: "साखर इन्व्हेंटरी व विक्री व्यवस्थापन",
          description: "साखर स्टॉक व्यवस्थापन, गोदाम नियंत्रण, बॅगिंग, ग्राहक व्यवस्थापन, सेल्स ऑर्डर, GST इनव्हॉइस, विक्रेता खरेदी (PO/GRN) आणि स्टोअर इन्व्हेंटरी ट्रॅकिंग.",
          image: "/suger-factory-images/sugar-inventory.jpg",
          tag: "इन्व्हेंटरी व विक्री",
          link: "/product/sugar-inventory"
        },
        {
          id: "sugar-accounts",
          title: "लेखा, वेतन व MIS अहवाल",
          description: "सामान्य खातेवही, बजेट, GST लेखा, कर्मचारी वेतन, PF/ESIC, प्रतिबंधात्मक देखभाल, प्रयोगशाळा चाचणी, MIS अहवाल आणि सामान्य ERP वैशिष्ट्ये.",
          image: "/suger-factory-images/sugar-accounts.jpg",
          tag: "लेखा व MIS",
          link: "/product/sugar-accounts"
        },
      ]
    } else if (language === 'hi') {
      return [
        {
          id: "sugar-erp",
          title: "संपूर्ण चीनी मिल ERP समाधान",
          description: "चीनी मिलों के लिए किसान पंजीकरण से लेकर चीनी बिक्री तक सभी विभागों का एकीकृत ERP प्रबंधन समाधान.",
          image: "/suger-factory-images/sugar-erp.jpg",
          tag: "चीनी ERP",
          link: "/product/sugar-erp"
        },
        {
          id: "sugar-agri",
          title: "कृषि एवं कटाई प्रबंधन",
          description: "किसान पंजीकरण, भूमि सर्वेक्षण, गल्ला रोपण प्रबंधन, उर्वरक व बीज वितरण और कटाई कार्यक्रम योजना.",
          image: "/suger-factory-images/sugar-agri.jpg",
          tag: "कृषि विभाग",
          link: "/product/sugar-agri"
        },
        {
          id: "sugar-procurement",
          title: "गन्ना खरीद व तुलाई प्रबंधन",
          description: "गन्ना खरीद पंजीकरण, किसान बिलिंग, वजन रिकॉर्डिंग, गुणवत्ता विश्लेषण (रिकवरी/फैट) और भुगतान प्रक्रिया.",
          image: "/suger-factory-images/sugar-procurement.jpg",
          tag: "खरीद व तुलाई",
          link: "/product/sugar-procurement"
        },
        {
          id: "sugar-production",
          title: "उत्पादन प्रबंधन प्रणाली",
          description: "गन्ना पेराई प्रबंधन, दैनिक उत्पादन योजना, चीनी निर्माण प्रक्रिया निगरानी, भाप और बिजली खपत ट्रैकिंग.",
          image: "/sugar-factory-production-line.png",
          tag: "उत्पादन प्रणाली",
          link: "/product/sugar-production"
        },
        {
          id: "sugar-inventory",
          title: "चीनी इन्वेंटरी व बिक्री प्रबंधन",
          description: "चीनी स्टॉक प्रबंधन, गोदाम नियंत्रण, पैकिंग, ग्राहक प्रबंधन, बिक्री आदेश, GST चालान, विक्रेता खरीद (PO/GRN) और स्टोर इन्वेंटरी ट्रैकिंग.",
          image: "/suger-factory-images/sugar-inventory.jpg",
          tag: "इन्वेंटरी व बिक्री",
          link: "/product/sugar-inventory"
        },
        {
          id: "sugar-accounts",
          title: "लेखा, वेतन व MIS रिपोर्ट",
          description: "सामान्य बही, बजट, GST लेखांकन, कर्मचारी वेतन, PF/ESIC, निवारक रखरखाव, प्रयोगशाला परीक्षण, MIS रिपोर्ट और सामान्य ERP विशेषताएं.",
          image: "/suger-factory-images/sugar-accounts.jpg",
          tag: "लेखा व MIS",
          link: "/product/sugar-accounts"
        },
      ]
    } else if (language === 'kn') {
      return [
        {
          id: "sugar-erp",
          title: "ಸಂಪೂರ್ಣ ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆ ERP ಪರಿಹಾರ",
          description: "ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆಗಳಿಗಾಗಿ ರೈತರ ನೋಂದಣಿಯಿಂದ ಸಕ್ಕರೆ ಮಾರಾಟದವರೆಗೆ ಎಲ್ಲಾ ವಿಭಾಗಗಳ ಸಂಯೋಜಿತ ERP ನಿರ್ವಹಣಾ ಪರಿಹಾರ.",
          image: "/suger-factory-images/sugar-erp.jpg",
          tag: "ಸಕ್ಕರೆ ERP",
          link: "/product/sugar-erp"
        },
        {
          id: "sugar-agri",
          title: "ಕೃಷಿ ಮತ್ತು ಕಟಾವು ನಿರ್ವಹಣೆ",
          description: "ರೈತರ ನೋಂದಣಿ, ಭೂ ಸಮೀಕ್ಷೆ, ಕಬ್ಬು ನಾಟಿ ನಿರ್ವಹಣೆ, ಗೊಬ್ಬರ ಮತ್ತು ಬೀಜ ವಿತರಣೆ ಮತ್ತು ಕಟಾವು ಯೋಜನೆ.",
          image: "/suger-factory-images/sugar-agri.jpg",
          tag: "ಕೃಷಿ ವಿಭಾಗ",
          link: "/product/sugar-agri"
        },
        {
          id: "sugar-procurement",
          title: "ಕಬ್ಬು ಖರೀದಿ ಮತ್ತು ತೂಕ ನಿರ್ವಹಣೆ",
          description: "ಕಬ್ಬು ಖರೀದಿ ನೋಂದಣಿ, ರೈತರ ಬಿಲ್ಲಿಂಗ್, ತೂಕ ದಾಖಲಾತಿ, ಗುಣಮಟ್ಟ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಪಾವತಿ ಪ್ರಕ್ರಿಯೆ.",
          image: "/suger-factory-images/sugar-procurement.jpg",
          tag: "ಖರೀದಿ ಮತ್ತು ತೂಕ",
          link: "/product/sugar-procurement"
        },
        {
          id: "sugar-production",
          title: "ಉತ್ಪಾದನಾ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ",
          description: "ಕಬ್ಬು ಅರೆಯುವ ನಿರ್ವಹಣೆ, ದೈನಂದಿನ ಉತ್ಪಾದನಾ ಯೋಜನೆ, ಸಕ್ಕರೆ ತಯಾರಿಕೆ ಪ್ರಕ್ರಿಯೆ ಮೇಲ್ವಿಚಾರಣೆ ಮತ್ತು ಉಗಿ/ವಿದ್ಯುತ್ ಟ್ರ್ಯಾಕಿಂಗ್.",
          image: "/sugar-factory-production-line.png",
          tag: "ಉತ್ಪಾದನಾ ವ್ಯವಸ್ಥೆ",
          link: "/product/sugar-production"
        },
        {
          id: "sugar-inventory",
          title: "ಸಕ್ಕರೆ ದಾಸ್ತಾನು ಮತ್ತು ಮಾರಾಟ ನಿರ್ವಹಣೆ",
          description: "ಸಕ್ಕರೆ ಸ್ಟಾಕ್ ನಿರ್ವಹಣೆ, ಗೋದಾಮು ನಿಯಂತ್ರಣ, ಬ್ಯಾಗಿಂಗ್ ನಿರ್ವಹಣೆ, ಗ್ರಾಹಕ ನಿರ್ವಹಣೆ, GST ಸರಕುಪಟ್ಟಿ, ಮಾರಾಟಗಾರರ ಖರೀದಿ (PO/GRN) ಮತ್ತು ಸ್ಟೋರ್ ದಾಸ್ತಾನು ಟ್ರ್ಯಾಕಿಂಗ್.",
          image: "/suger-factory-images/sugar-inventory.jpg",
          tag: "ದಾಸ್ತಾನು ಮತ್ತು ಮಾರಾಟ",
          link: "/product/sugar-inventory"
        },
        {
          id: "sugar-accounts",
          title: "ಲೆಕ್ಕಪತ್ರ, ವೇತನ ಮತ್ತು MIS ವರದಿಗಳು",
          description: "ಸಾಮಾನ್ಯ ಲೆಡ್ಜರ್, ಬಜೆಟ್, GST, ನೌಕರರ ವೇತನ, PF/ESIC, ನಿವಾರಕ ನಿರ್ವಹಣೆ, ಪ್ರಯೋಗಾಲಯ ಪರೀಕ್ಷೆ, MIS ವರದಿಗಳು ಮತ್ತು ಸಾಮಾನ್ಯ ERP ವೈಶಿಷ್ಟ್ಯಗಳು.",
          image: "/suger-factory-images/sugar-accounts.jpg",
          tag: "ಲೆಕ್ಕಪತ್ರ ಮತ್ತು MIS",
          link: "/product/sugar-accounts"
        },
      ]
    } else {
      return [
        {
          id: "sugar-erp",
          title: "Complete Sugar Factory ERP Solution",
          description: "An integrated ERP management solution for sugar factories covering all departments from farmer registration to sugar sales.",
          image: "/suger-factory-images/sugar-erp.jpg",
          tag: "Sugar ERP",
          link: "/product/sugar-erp"
        },
        {
          id: "sugar-agri",
          title: "Agriculture & Harvesting Management",
          description: "Farmer registration, land survey & mapping, sugarcane plantation management, fertilizer & seed distribution, and harvesting program planning.",
          image: "/suger-factory-images/sugar-agri.jpg",
          tag: "Agriculture Dept",
          link: "/product/sugar-agri"
        },
        {
          id: "sugar-procurement",
          title: "Cane Procurement & Weighbridge Management",
          description: "Cane purchase registration, farmer billing, weight recording, quality analysis (Recovery/Fat/Lab Reports), and payment processing.",
          image: "/suger-factory-images/sugar-procurement.jpg",
          tag: "Procurement & Weighbridge",
          link: "/product/sugar-procurement"
        },
        {
          id: "sugar-production",
          title: "Production Management System",
          description: "Cane crushing management, daily production planning, sugar manufacturing process monitoring, steam & power consumption tracking, and yield analysis.",
          image: "/sugar-factory-production-line.png",
          tag: "Production System",
          link: "/product/sugar-production"
        },
        {
          id: "sugar-inventory",
          title: "Sugar Inventory & Sales Management",
          description: "Sugar stock management, godown control, bagging management, customer management, sales order processing, dispatch, GST invoice, vendor purchase (PO/GRN) and store inventory tracking.",
          image: "/suger-factory-images/sugar-inventory.jpg",
          tag: "Inventory & Sales",
          link: "/product/sugar-inventory"
        },
        {
          id: "sugar-accounts",
          title: "Accounts, Payroll & MIS Reports",
          description: "General ledger, accounts payable/receivable, budget, GST accounting, employee payroll, PF/ESIC, maintenance, laboratory testing, MIS reports, and common ERP features.",
          image: "/suger-factory-images/sugar-accounts.jpg",
          tag: "Accounts & MIS",
          link: "/product/sugar-accounts"
        },
      ]
    }
  }, [language]);

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
                  <Link href="/contact">
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

        {/* Sugar Factory Products Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-zinc-900 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 dark:bg-red-600/20 text-red-600 text-xs font-sans font-bold mb-4 border border-red-600/20">
                🏭 {language === 'mr' ? "साखर कारखाना उत्पादने व सोल्यूशन्स" : language === 'kn' ? "ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆ ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಪರಿಹಾರಗಳು" : language === 'hi' ? "चीनी मिल उत्पाद और समाधान" : "Sugar Factory Products & Solutions"}
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6">
                {language === 'mr' ? "आमची साखर कारखाना उत्पादने" :
                  language === 'kn' ? "ನಮ್ಮ ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆ ಉತ್ಪನ್ನಗಳು" :
                    language === 'hi' ? "हमारे चीनी मिल उत्पाद" : "Our Sugar Factory Products"}
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 font-serif max-w-3xl mx-auto text-lg">
                {language === 'mr' ? "साखर कारखान्याच्या प्रत्येक विभागासाठी तयार केलेले प्रगत ERP मॉड्यूल्स – शेतकऱ्यापासून गोदामापर्यंत." :
                  language === 'kn' ? "ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆಯ ಪ್ರತಿ ವಿಭಾಗಕ್ಕಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಿದ ಸುಧಾರಿತ ERP ಮಾಡ್ಯೂಲ್‌ಗಳು." :
                    language === 'hi' ? "चीनी मिल के हर विभाग के लिए डिज़ाइन किए गए उन्नत ERP मॉड्यूल – किसान से गोदाम तक।" : "Advanced ERP modules designed specifically for every department of the sugar factory – from farmer to godown."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sugarProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-zinc-950 hover-lift p-8 rounded-[2rem] flex flex-col justify-between min-h-[480px] group border border-slate-100 dark:border-zinc-800/50 shadow-sm"
                >
                  <div className="flex flex-col h-full">
                    <Link href={product.link} className="block relative">
                      <div className="absolute inset-0 bg-red-600/10 dark:bg-red-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                      <div className="relative w-full h-48 mb-8 rounded-2xl overflow-hidden border border-slate-100 dark:border-zinc-800 shadow-xs">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-sans font-bold px-2 py-0.5 rounded-full shadow-xs">
                          {product.tag}
                        </div>
                      </div>
                    </Link>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 leading-tight mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {product.title}
                    </h3>

                    <p className="text-gray-600 dark:text-zinc-400 text-sm mb-8 flex-grow leading-relaxed font-serif">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Link href={product.link} className="block">
                      <Button variant="outline" className="w-full border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 font-semibold py-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all">
                        {language === 'mr' ? "अधिक माहिती" : language === 'kn' ? "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ" : language === 'hi' ? "अधिक जानकारी" : "View Details"}
                      </Button>
                    </Link>
                    <div className="grid grid-cols-2 gap-3">
                      <Link href="/contact?inquiryType=demo#contact-form" className="block">
                        <Button className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-5 rounded-2xl transition-all shadow-lg hover:shadow-red-600/25 text-xs sm:text-sm">
                          {language === 'mr' ? "डेमो मागवा" : language === 'kn' ? "ಡೆಮೋ ವಿನಂತಿಸಿ" : language === 'hi' ? "डेमो अनुरोध करें" : "Request Demo"}
                        </Button>
                      </Link>
                      <CallNowButton
                        className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-5 rounded-2xl transition-all shadow-lg shadow-[#25D366]/20 text-xs sm:text-sm border-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
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

        {/* Detailed Product Section / Modules Explorer */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6">
                {t("sugar.sugarSystemTitle")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-zinc-400 font-serif max-w-4xl mx-auto mb-12">
                {t("sugar.sugarSystemDesc")}
              </p>
            </div>

            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 p-2 bg-slate-100/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-2xl max-w-5xl mx-auto border border-slate-200/50 dark:border-zinc-800/50">
              {categoryTabs.map((tab) => {
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-sans font-bold text-sm transition-all duration-300 ${activeTab === tab.id
                        ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                        : "text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-100 hover:bg-slate-200/50 dark:hover:bg-zinc-800/50"
                      }`}
                  >
                    <ListFilter className="h-4 w-4" />
                    {tab.name}
                  </button>
                )
              })}
            </div>

            {/* Tab Contents */}
            <div className="min-h-[400px]">
              {categoryTabs.map((tab) => {
                if (activeTab !== tab.id) return null;
                return (
                  <div key={tab.id} className="grid md:grid-cols-2 gap-8 animate-fadeIn">
                    {tab.modules.map((module, idx) => {
                      const ModuleIcon = module.icon;
                      return (
                        <div key={idx} className="bg-slate-50 dark:bg-zinc-900/40 rounded-3xl p-8 border border-slate-100 dark:border-zinc-800 hover:shadow-xl hover:border-red-600/40 dark:hover:border-red-600/40 transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-bl-full group-hover:bg-red-600/10 transition-all duration-300" />
                          <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-red-600/10 dark:bg-red-600/20 text-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-350" style={{ backgroundColor: `${module.color}1A`, color: module.color }}>
                              <ModuleIcon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-sans font-bold text-gray-900 dark:text-zinc-100 group-hover:text-red-600 transition-colors">{module.title}</h3>
                          </div>
                          
                          <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm mb-6 leading-relaxed relative z-10">
                            {module.description}
                          </p>
                          
                          <ul className="space-y-3 flex-grow relative z-10">
                            {module.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-zinc-400 font-serif text-sm leading-relaxed">
                                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>

            <div className="mt-16 text-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#1E94A4] hover:bg-[#0B7989] text-white font-sans font-bold px-10">
                  {t("sugar.requestModules")}
                </Button>
              </Link>
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


        {/* Other Recommended Solutions Section */}
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: "dairy",
                  title: language === 'mr' ? "संपूर्ण डेअरी सॉफ्टवेअर सोल्यूशन्स" : language === 'kn' ? "ಸಂಪೂರ್ಣ ಡೈರಿ ಸಾಫ್ಟ್‌ವೇರ್ ಪರಿಹಾರಗಳು" : language === 'hi' ? "संपूर्ण डेयरी सॉफ्टवेयर समाधान" : "Complete Dairy Software Solutions",
                  description: language === 'mr' ? "सहकारी दूध संस्था, दूध संकलन केंद्रे आणि डेअरी प्लांटसाठी डिझाइन केलेले व्यापक दुग्ध व्यवस्थापन सोल्यूशन." : language === 'kn' ? "ಡೈರಿ ಸಹಕಾರಿ ಸಂಘಗಳು, ಹಾಲು ಸಂಗ್ರಹಣಾ ಕೇಂದ್ರಗಳಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಡೈರಿ ನಿರ್ವಹಣಾ ಪರಿಹಾರ." : language === 'hi' ? "डेयरी सहकारी समितियों और दूध संग्रह केंद्रों के लिए डिज़ाइन किया गया व्यापक डेयरी प्रबंधन समाधान।" : "A comprehensive dairy management solution designed for Dairy Cooperatives, Milk Collection Centers, and Dairy Plants.",
                  image: "/live-image-dairy/5.0.png",
                  link: "/dairy-solutions",
                  tag: language === 'mr' ? "डेअरी सोल्यूशन" : language === 'kn' ? "ಡೈರಿ ಪರಿಹಾರ" : language === 'hi' ? "डेयरी समाधान" : "Dairy Solution"
                },
                {
                  id: "gold",
                  title: language === 'mr' ? "सुवर्ण पेढी व दागिने ERP (Goldwin)" : language === 'kn' ? "ಚಿನ್ನದ ಅಂಗಡಿ ERP (Goldwin)" : language === 'hi' ? "स्वर्ण आभूषण ERP (Goldwin)" : "Gold Jewellery Showroom ERP (Goldwin)",
                  description: language === 'mr' ? "सराफा दुकानांसाठी सोन्या-चांदीचे हिशोब, बारकोड बिलिंग, गहाणवट व्यवस्थापन आणि GST रिपोर्टचे संपूर्ण सॉफ्टवेअर." : language === 'kn' ? "ಆಭರಣ ಮಳಿಗೆಗಳಿಗಾಗಿ ಬಾರ್‌ಕೋಡ್ ಬಿಲ್ಲಿಂಗ್, ಗಿರವಿ ನಿರ್ವಹಣೆ ಮತ್ತು GST ವರದಿಗಳ ಸಾಫ್ಟ್‌ವೇರ್." : language === 'hi' ? "ज्वेलरी शोरूम के लिए बारकोड बिलिंग, गिरवी प्रबंधन और GST रिपोर्ट का संपूर्ण सॉफ्टवेयर." : "Complete billing, barcode scanning, Girvi/pledge tracking, and GST returns software for jewellery showrooms.",
                  image: "/gold-image-new/gold_home_page.png",
                  link: "/gold-industry-solutions",
                  tag: language === 'mr' ? "सुवर्ण सोल्यूशन" : language === 'kn' ? "ಚಿன்னದ ಪರಿಹಾರ" : language === 'hi' ? "स्वर्ण समाधान" : "Gold Solution"
                },
                {
                  id: "mobile",
                  title: language === 'mr' ? "शेतकरी व प्रशासक मोबाईल ॲप" : language === 'kn' ? "ರೈತರ ಮತ್ತು ಅಡ್ಮಿನ್ ಮೊಬೈಲ್ ಆಪ್" : language === 'hi' ? "किसान एवं प्रशासक मोबाइल ऐप" : "Farmer & Administrator Mobile App",
                  description: language === 'mr' ? "दुग्ध उत्पादक शेतकऱ्यांसाठी दैनिक दूध संकलन, बिल आणि खात्याचे लेझर तपासण्यासाठीचे प्रगत मोबाईल ॲप्लिकेशन." : language === 'kn' ? "ಡೈರಿ ರೈತರಿಗಾಗಿ ದೈನಂದಿನ ಹಾಲು ಸಂಗ್ರಹಣೆ, ಬಿಲ್ ಮತ್ತು ಲೆಡ್ಜರ್ ವೀಕ್ಷಿಸಲು ಮೊಬೈಲ್ ಆಪ್." : language === 'hi' ? "डेयरी किसानों के लिए दैनिक दूध संग्रह, बिल और खाता लेज़र देखने का मोबाइल ऐप।" : "Advanced mobile application for farmers to track real-time daily milk slips, payment receipts, and ledger statements.",
                  image: "/modern-dairy-farm.png",
                  link: "/dairy-solutions",
                  tag: language === 'mr' ? "मोबाईल ॲप" : language === 'kn' ? "ಮೊಬೈಲ್ ಆಪ್" : language === 'hi' ? "मोबाइल ऐप" : "Mobile App"
                },
              ].map((product) => (
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

                    <p className="text-gray-600 dark:text-zinc-400 text-xs mb-6 flex-grow leading-relaxed font-serif line-clamp-4">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-900">
                    <Link href={product.link} className="block">
                      <Button variant="outline" className="w-full border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 font-semibold py-4 rounded-xl text-xs hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all font-sans">
                        {language === 'mr' ? "अधिक माहिती" : language === 'kn' ? "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ" : language === 'hi' ? "अधिक जानकारी" : "View Details"}
                      </Button>
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      <Link href="/contact?inquiryType=demo#contact-form" className="block">
                        <Button className="w-full bg-[#1E94A4] hover:bg-[#0B7989] text-white font-bold py-4 rounded-xl text-[10px] sm:text-xs transition-all shadow-sm hover:shadow-[#1E94A4]/25 font-sans">
                          {language === 'mr' ? "डेमो मागवा" : language === 'kn' ? "ಡೆಮೋ ವಿನಂತಿಸಿ" : language === 'hi' ? "डेमो अनुरोध" : "Request Demo"}
                        </Button>
                      </Link>
                      <CallNowButton
                        className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-4 rounded-xl text-[10px] sm:text-xs transition-all shadow-sm shadow-[#25D366]/25 border-none"
                      />
                    </div>
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
                <Link href="/contact?inquiryType=demo#contact-form">
                  <Button size="lg" className="bg-white dark:bg-zinc-950 text-[#1E94A4] hover:bg-slate-100 font-sans font-bold px-10">
                    {t("sugar.freeERPDemo")}
                  </Button>
                </Link>
                <CallNowButton
                  text={language === 'mr' ? 'कॉल करा' : 'Call Expert'}
                  className="border-white text-white hover:bg-white dark:bg-zinc-950/10 font-sans font-bold px-10 py-6 rounded-xl border border-solid text-base bg-transparent"
                />
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
