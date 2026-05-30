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
  MapPin,
  Users,
  Factory,
  Smartphone,
  Cloud,
  CheckCircle2,
  Brain,
  TrendingUp,
  LayoutDashboard,
  Activity
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { useMemo } from "react"
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

export default function DairySolutionsPage() {
  const { t, language } = useLanguage()

  const industries = useMemo(() => [
    {
      title: t("dairy.industry1Title"),
      description: t("dairy.industry1Desc"),
      features: [t("dairy.feat1"), t("dairy.feat2"), t("dairy.feat3"), t("dairy.feat4")],
      icon: MapPin,
      color: "blue",
    },
    {
      title: t("dairy.industry2Title"),
      description: t("dairy.industry2Desc"),
      features: [t("dairy.feat5"), t("dairy.feat6"), t("dairy.feat7"), t("dairy.feat8")],
      icon: Users,
      color: "green",
    },
    {
      title: t("dairy.industry3Title"),
      description: t("dairy.industry3Desc"),
      features: [t("dairy.feat9"), t("dairy.feat10"), t("dairy.feat11"), t("dairy.feat12")],
      icon: Factory,
      color: "orange",
    },
    {
      title: t("dairy.industry4Title"),
      description: t("dairy.industry4Desc"),
      features: [t("dairy.feat13"), t("dairy.feat14"), t("dairy.feat15"), t("dairy.feat16")],
      icon: Building2,
      color: "purple",
    },
    {
      title: t("dairy.industry5Title"),
      description: t("dairy.industry5Desc"),
      features: [t("dairy.feat17"), t("dairy.feat18"), t("dairy.feat19"), t("dairy.feat20")],
      icon: Landmark,
      color: "red",
    },
    {
      title: t("dairy.industry6Title"),
      description: t("dairy.industry6Desc"),
      features: [t("dairy.feat21"), t("dairy.feat22"), t("dairy.feat23"), t("dairy.feat24")],
      icon: Package,
      color: "amber",
    },
  ], [t])

  const tiers = useMemo(() => [
    {
      name: "Desktop",
      subtitle: t("dairy.tier1Subtitle"),
      description: t("dairy.tier1Desc"),
      includes: t("dairy.tier1Includes"),
      bestFor: t("dairy.tier1Best"),
      icon: Monitor,
    },
    {
      name: "Advanced",
      subtitle: t("dairy.tier2Subtitle"),
      description: t("dairy.tier2Desc"),
      includes: t("dairy.tier2Includes"),
      bestFor: t("dairy.tier2Best"),
      icon: Smartphone,
    },
    {
      name: "Cloud",
      subtitle: t("dairy.tier3Subtitle"),
      description: t("dairy.tier3Desc"),
      includes: t("dairy.tier3Includes"),
      bestFor: t("dairy.tier3Best"),
      icon: Cloud,
    },
  ], [t])

  const suggestions = useMemo(() => {
    if (language === 'mr') {
      return [
        {
          title: "पशु आहार आणि फॅट/एसएनएफ नियोजन",
          description: "जनावरांना दररोज संतुलित आहार, हिरवा आणि सुका चारा द्यावा. बायपास फॅट (Bypass Fat) आणि खनिज मिश्रण (Mineral Mixture) दिल्यामुळे दुधाचे फॅट (FAT) आणि एसएनएफ (SNF) वाढण्यास मदत होते.",
          tips: ["नियमित संतुलित पशूखाद्य द्यावे", "हिरवा व सुका चारा यांचे योग्य प्रमाण ठेवावे", "पाण्याची चोवीस तास उपलब्धता ठेवावी"]
        },
        {
          title: "स्वच्छ आणि शुद्ध दूध उत्पादन",
          description: "दूध काढण्यापूर्वी जनावरांचे सड आणि भांडी स्वच्छ धुवावीत. स्वच्छ दुधामुळे जिवाणूंची वाढ रोखली जाते आणि दुधाला बाजारात उच्च प्रतिचा दर मिळतो.",
          tips: ["दूध काढण्यापूर्वी भांडी निर्जंतुक करा", "सड स्वच्छ धुवून कोरडे करा", "आजारी जनावरांचे दूध वेगळे ठेवा"]
        },
        {
          title: "नियमित आरोग्य आणि लसीकरण",
          description: "जनावरांचे लाळ्या-खुरकुत (FMD) आणि इतर साथीच्या आजारांपासून संरक्षण करण्यासाठी वेळेवर लसीकरण करावे. नियमित जंतनिर्मूलन (Deworming) केल्यामुळे दूध उत्पादनात घट येत नाही.",
          tips: ["दर ६ महिन्यांनी लसीकरण करा", "नियमित जंतनिर्मूलन करावे", "पशुवैद्यांच्या सल्ल्याने उपचार करा"]
        },
        {
          title: "डेअरी ऑटोमेशन आणि पारदर्शकता",
          description: "दूध संकलनात अचूकता आणि पारदर्शकतेसाठी नेहमी संगणकीकृत AMCS सॉफ्टवेअरचा वापर करा. यामुळे शेतकऱ्यांच्या नोंदी सुरक्षित राहतात आणि योग्य मोबदला वेळेवर मिळतो.",
          tips: ["मानवी चुका टाळण्यासाठी डिजिटल काटे वापरा", "दूध घालताच पावती तपासा", "मोबाईल अॅपद्वारे नोंदींवर लक्ष ठेवा"]
        }
      ]
    } else if (language === 'kn') {
      return [
        {
          title: "ಪಶು ಆಹಾರ ಮತ್ತು ಫ್ಯಾಟ್/ಎಸ್‌ಎನ್‌ಎಫ್ ನಿರ್ವಹಣೆ",
          description: "ಜಾನುವಾರುಗಳಿಗೆ ದಿನನಿತ್ಯ ಸಮತೋಲಿತ ಆಹಾರ, ಹಸಿರು ಮತ್ತು ಒಣ ಮೇವನ್ನು ನೀಡಬೇಕು. ಬೈಪಾಸ್ ಫ್ಯಾಟ್ ಮತ್ತು ಖನಿಜ ಮಿಶ್ರಣವನ್ನು ನೀಡುವುದರಿಂದ ಹಾಲಿನ ಫ್ಯಾಟ್ ಮತ್ತು ಎಸ್‌ಎನ್‌ಎಫ್ ಹೆಚ್ಚಿಸಲು ಸಹಾಯವಾಗುತ್ತದೆ.",
          tips: ["ನಿಯಮಿತ ಸಮತೋಲಿತ ಪಶು ಆಹಾರ ನೀಡಿ", "ಹಸಿರು ಮತ್ತು ಒಣ ಮೇವಿನ ಸೂಕ್ತ ಪ್ರಮಾಣ ಕಾಯ್ದುಕೊಳ್ಳಿ", "ಕುಡಿಯುವ ನೀರಿನ ನಿರಂತರ ಲಭ್ಯತೆ ಇರಲಿ"]
        },
        {
          title: "ಸ್ವಚ್ಛ ಮತ್ತು ಶುದ್ಧ ಹಾಲು ಉತ್ಪಾದನೆ",
          description: "ಹಾಲು ಕರೆಯುವ ಮುನ್ನ ಜಾನುವಾರುಗಳ ಕೆಚ್ಚಲು ಮತ್ತು ಪಾತ್ರೆಗಳನ್ನು ಸ್ವಚ್ಛವಾಗಿ ತೊಳೆಯಬೇಕು. ಸ್ವಚ್ಛ ಹಾಲಿನಿಂದ ಬ್ಯಾಕ್ಟೀರಿಯಾ ಬೆಳವಣಿಗೆ ತಡೆಯಬಹುದು ಮತ್ತು ಹಾಲಿಗೆ ಹೆಚ್ಚಿನ ದರ ಸಿಗುತ್ತದೆ.",
          tips: ["ಹಾಲು ಕರೆಯುವ ಪಾತ್ರೆಗಳನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಿ", "ಕೆಚ್ಚಲನ್ನು ತೊಳೆದು ಒಣ ಬಟ್ಟೆಯಿಂದ ಒರೆಸಿ", "ಅನಾರೋಗ್ಯ ಪೀಡಿತ ಜಾನುವಾರುಗಳ ಹಾಲು ಪ್ರತ್ಯೇಕಿಸಿ"]
        },
        {
          title: "ನಿಯಮಿತ ಆರೋಗ್ಯ ಮತ್ತು ಲಸಿಕೆ",
          description: "ಜಾನುವಾರುಗಳನ್ನು ಬಾಯಿ ಜ್ವರ (FMD) ಮತ್ತು ಇತರ ಸಾಂಕ್ರಾಮಿಕ ರೋಗಗಳಿಂದ ರಕ್ಷಿಸಲು ಸಕಾಲದಲ್ಲಿ ಲಸಿಕೆ ಹಾಕಿಸಬೇಕು. ನಿಯಮಿತ ಜಂತುನಾಶಕ ನೀಡುವುದರಿಂದ ಹಾಲು ಉತ್ಪಾದನೆ ಕುಂಠಿತವಾಗುವುದಿಲ್ಲ.",
          tips: ["ಪ್ರತಿ ೬ ತಿಂಗಳಿಗೊಮ್ಮೆ ಲಸಿಕೆ ಹಾಕಿ", "ನಿಯಮಿತವಾಗಿ ಜಂತುನಾಶಕ ಔಷಧ ನೀಡಿ", "ಪಶುವೈದ್ಯರ ಸಲಹೆಯಂತೆ ಚಿಕಿತ್ಸೆ ಕೊಡಿಸಿ"]
        },
        {
          title: "ಡೈರಿ ಆಟೊಮೇಷನ್ ಮತ್ತು ಪಾರದರ್ಶಕತೆ",
          description: "ಹಾಲು ಸಂಗ್ರಹಣೆಯಲ್ಲಿ ನಿಖರತೆ ಮತ್ತು ಪಾರದರ್ಶಕತೆಗಾಗಿ ಯಾವಾಗಲೂ ಕಂಪ್ಯೂಟರೀಕೃತ AMCS ಸಾಫ್ಟ್‌ವೇರ್ ಬಳಸಿ. ಇದರಿಂದ ರೈತರ ದಾಖಲೆಗಳು ಸುರಕ್ಷಿತವಾಗಿರುತ್ತವೆ ಮತ್ತು ಸೂಕ್ತ ಪಾವತಿ ಲಭಿಸುತ್ತದೆ.",
          tips: ["ಮಾನವ ತಪ್ಪುಗಳನ್ನು ತಡೆಯಲು ಡಿಜಿಟಲ್ ತೂಕ ಬಳಸಿ", "ಹಾಲು ಸಂಗ್ರಹಣೆಯಾದ ತಕ್ಷಣ ರಸೀದಿ ಪರಿಶೀಲಿಸಿ", "ಮೊಬೈಲ್ ಆಪ್ ಮೂಲಕ ದಾಖಲೆಗಳ ಮೇಲೆ ನಿಗಾ ಇರಿಸಿ"]
        }
      ]
    } else if (language === 'hi') {
      return [
        {
          title: "पशु आहार और फैट/एसएनएफ प्रबंधन",
          description: "पशुओं को दैनिक संतुलित आहार, हरा और सूखा चारा देना चाहिए. बाईपास फैट (Bypass Fat) और खनिज मिश्रण देने से दूध का फैट और एसएनएफ बढ़ाने में मदद मिलती है.",
          tips: ["नियमित संतुलित पशु आहार दें", "हरे व सूखे चारे का सही अनुपात रखें", "पीने के पानी की २४ घंटे उपलब्धता सुनिश्चित करें"]
        },
        {
          title: "स्वच्छ और शुद्ध दूध उत्पादन",
          description: "दूध निकालने से पहले पशु के थन और बर्तनों को अच्छी तरह धोएं. स्वच्छ दूध से जीवाणुओं की वृद्धि रुकती है और दूध का अधिकतम मूल्य प्राप्त होता है.",
          tips: ["दूध निकालने के बर्तनों को कीटाणुरहित करें", "थनों को साफ करके सुखाएं", "बीमार पशुओं का दूध अलग रखें"]
        },
        {
          title: "नियमित स्वास्थ्य और टीकाकरण",
          description: "पशुओं को खुरपका-मुंहपका (FMD) और अन्य संक्रामक रोगों से बचाने के लिए समय पर टीकाकरण कराएं. नियमित कृमिनाशक (Deworming) दवा देने से दूध उत्पादन बना रहता है.",
          tips: ["हर ६ महीने में टीकाकरण कराएं", "नियमित कृमिनाशक दवा दें", "पशु चिकित्सक की सलाह से ही उपचार करें"]
        },
        {
          title: "डेयरी ऑटोमेशन और पारदर्शिता",
          description: "दूध संग्रह में सटीकता और पारदर्शिता के लिए हमेशा स्वचालित AMCS सॉफ्टवेयर का उपयोग करें. इससे किसानों के रिकॉर्ड सुरक्षित रहते हैं और समय पर भुगतान मिलता है.",
          tips: ["मानवीय गलतियों से बचने के लिए डिजिटल कांटे अपनाएं", "दूध जमा करते ही रसीद की जांच करें", "मोबाइल ऐप के माध्यम से रिकॉर्ड पर नजर रखें"]
        }
      ]
    } else {
      return [
        {
          title: "Cattle Nutrition & FAT/SNF Optimization",
          description: "Provide cattle with a balanced daily diet of green and dry fodder. Supplementing with bypass fat and mineral mixtures significantly boosts overall milk FAT and SNF yields.",
          tips: ["Feed high-quality balanced cattle feed daily", "Maintain proper ratios of green & dry fodder", "Provide 24/7 access to clean drinking water"]
        },
        {
          title: "Clean & Hygienic Milk Production",
          description: "Thoroughly wash cow udders and sanitize all collection cans before milking. Clean milking prevents bacterial contamination, extending milk shelf-life and ensuring top-tier payouts.",
          tips: ["Sterilize all milking equipment before use", "Wash udders with warm water and dry cleanly", "Keep milk from sick cattle completely separate"]
        },
        {
          title: "Routine Vaccination & Veterinary Care",
          description: "Vaccinate your livestock timely against Foot-and-Mouth Disease (FMD) and other epidemics. Regular deworming preserves cow energy levels and prevents drops in milk yield.",
          tips: ["Administer vaccinations every 6 months", "Perform regular deworming schedules", "Consult professional vets for health diagnostics"]
        },
        {
          title: "Cooperative Automation & Transparency",
          description: "Always implement automated AMCS software for high-precision weighing and FAT testing. Digitalization guarantees transparent rates, secure records, and faster direct payouts.",
          tips: ["Utilize digital weighing scales to stop manual errors", "Always check your instant collection slips", "Monitor your ledger logs using the Mobile App"]
        }
      ]
    }
  }, [language])

  const dairyProducts = useMemo(() => {
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
    <div className="min-h-screen bg-slate-50 dark:bg-black">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950 border-b relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 dark:bg-[#1E94A4]/20 text-[#1E94A4] text-sm font-sans font-bold mb-6 border border-[#1E94A4]/20">
                  <div className="w-2 h-2 rounded-full bg-[#1E94A4] animate-pulse" />
                  {t("footer.dairySoftware")}
                </div>
                <h1 className="text-4xl md:text-7xl font-sans font-bold mb-6 text-gray-900 dark:text-zinc-100 tracking-tight leading-[1.1]">
                  {t("dairy.dairyTitle")} <span className="text-[#1E94A4]">{t("nav.dairy")}</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-zinc-400 font-serif leading-relaxed mb-10 max-w-xl">
                  {t("dairy.dairySubtitle")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/schedule-demo">
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
                  src="/modern-dairy-farm.png"
                  alt="Modern Dairy Management"
                  width={800}
                  height={600}
                  className="rounded-[40px] shadow-2xl relative z-10 object-cover h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6">
                {t("dairy.industriesTitle")}
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 font-serif max-w-3xl mx-auto text-lg">
                {t("dairy.industriesSubtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-zinc-950 p-8 rounded-3xl border border-slate-100 dark:border-zinc-800 hover:border-blue-200 hover:shadow-xl dark:shadow-none hover:shadow-blue-900/5 transition-all group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-${item.color === 'blue' ? '[#1E94A4]/10' : item.color + '-50'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`h-7 w-7 text-${item.color === 'blue' ? '[#1E94A4]' : item.color + '-600'}`} />
                  </div>
                  <h3 className="text-xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-4">{item.title}</h3>
                  <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <ul className="space-y-3">
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-500 dark:text-zinc-400 font-sans">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Suggestions & Guidance Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950 border-t border-slate-100 dark:border-zinc-800 relative overflow-hidden">
          {/* Subtle glowing elements */}
          <div className="absolute top-1/2 left-0 w-[30%] h-[30%] bg-[#1E94A4]/5 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 dark:bg-[#1E94A4]/20 text-[#1E94A4] text-xs font-sans font-bold mb-4 border border-[#1E94A4]/20">
                💡 {language === 'mr' ? "उपयुक्त मार्गदर्शन व सल्ले" : language === 'kn' ? "ಉಪಯುಕ್ತ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಸಲಹೆಗಳು" : language === 'hi' ? "उपयोगी मार्गदर्शन और सुझाव" : "Business Advice & Guidelines"}
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6">
                {language === 'mr' ? "दूध व्यवसायासाठी उपयुक्त सल्ले व मार्गदर्शन" :
                 language === 'kn' ? "ಹಾಲು ವ್ಯವಹಾರಕ್ಕಾಗಿ ಉಪಯುಕ್ತ ಸಲಹೆಗಳು ಮತ್ತು ಮಾರ್ಗದರ್ಶನ" :
                 language === 'hi' ? "दुग्ध व्यवसाय के लिए उपयोगी सुझाव और मार्गदर्शन" : "Suggestions & Guidelines for Dairy Success"}
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 font-serif max-w-3xl mx-auto text-lg">
                {language === 'mr' ? "तुमच्या दूध डेअरीचे संकलन वाढवण्यासाठी, जनावरांचे आरोग्य जपण्यासाठी आणि व्यवसायात नफा मिळवण्यासाठी काही खास सल्ले." :
                 language === 'kn' ? "ನಿಮ್ಮ ಡೈರಿ ಸಂಗ್ರಹಣೆ ಹೆಚ್ಚಿಸಲು, ಜಾನುವಾರುಗಳ ಆರೋಗ್ಯ ಕಾಪಾಡಲು ಮತ್ತು ಲಾಭ ಗಳಿಸಲು ಕೆಲವು ವಿಶೇಷ ಸಲಹೆಗಳು." :
                 language === 'hi' ? "आपके डेयरी संग्रह को बढ़ाने, पशुओं के स्वास्थ्य की रक्षा करने और व्यवसाय में लाभ कमाने के लिए कुछ विशेष सुझाव." : "Expert advice and practical suggestions to help optimize your daily milk collection, maintain livestock health, and maximize profitability."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {suggestions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-zinc-900 p-8 rounded-[2rem] border border-slate-100 dark:border-zinc-800 hover:border-[#1E94A4]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                      <span className="text-[#1E94A4]">0{idx + 1}.</span> {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>
                  <div className="border-t border-slate-200/60 dark:border-zinc-800 pt-4">
                    <h4 className="text-xs font-sans font-bold text-gray-400 uppercase tracking-wider mb-3">
                      {language === 'mr' ? "महत्त्वाचे सल्ले:" : language === 'kn' ? "ಪ್ರಮುಖ ಸಲಹೆಗಳು:" : language === 'hi' ? "महत्वपूर्ण सुझाव:" : "Key Guidelines:"}
                    </h4>
                    <ul className="space-y-2">
                      {item.tips.map((tip, tIdx) => (
                        <li key={tIdx} className="flex items-center gap-2 text-xs text-gray-500 dark:text-zinc-400 font-sans">
                          <CheckCircle2 className="h-4 w-4 text-[#1E94A4]" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
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
                    <Link href="/schedule-demo" className="block">
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
                {t("dairyInfo.title")}
              </h2>
              <div className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-zinc-400 font-serif leading-relaxed space-y-4">
                <p>{t("dairyInfo.intro1")}</p>
                <p>{t("dairyInfo.intro2")}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: t("dairyInfo.billingTitle"), items: t("dairyInfo.billingList"), icon: Landmark },
                { title: t("dairyInfo.rebateTitle"), items: t("dairyInfo.rebateList"), icon: Users },
                { title: t("dairyInfo.accountingTitle"), items: t("dairyInfo.accountingList"), icon: Store },
                { title: t("dairyInfo.collectionTitle"), items: t("dairyInfo.collectionList"), icon: Milk },
                { title: t("dairyInfo.companyTitle"), items: t("dairyInfo.companyList"), icon: Building2 },
                { title: t("dairyInfo.workflowTitle"), items: t("dairyInfo.workflowList"), icon: Factory },
                { title: t("dairyInfo.feedTitle"), items: t("dairyInfo.feedList"), icon: Package },
                { title: t("dairyInfo.appTitle"), items: t("dairyInfo.appList"), icon: Smartphone },
              ].map((section, idx) => (
                <div key={idx} className="bg-white dark:bg-zinc-950 rounded-3xl p-8 border border-slate-200 dark:border-zinc-800 hover:shadow-xl dark:shadow-none transition-all h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#1E94A4]/10 dark:bg-[#1E94A4]/20 text-[#1E94A4] flex items-center justify-center">
                      <section.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-sans font-bold text-gray-900 dark:text-zinc-100">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {Array.isArray(section.items) ? (section.items as any[]).map((item: any, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-zinc-400 font-serif text-sm leading-relaxed">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    )) : null}
                  </ul>
                </div>
              ))}
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

        {/* Interactive Demos Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E94A4]/10 dark:bg-[#1E94A4]/20 text-[#1E94A4] text-xs font-sans font-bold mb-4 border border-[#1E94A4]/20">
                <Activity className="w-3.5 h-3.5" />
                Live Interactive Product Demos
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6">
                Try Our Live Application Mockups
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 font-serif max-w-3xl mx-auto text-lg">
                Explore the actual user experience and core modules of both the Farmer Mobile App and the Cooperative Admin System.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Passbook Card */}
              <div className="bg-slate-50 dark:bg-zinc-900 border dark:border-zinc-800 p-8 rounded-[2.5rem] flex flex-col justify-between hover:shadow-2xl transition-all group hover:-translate-y-1">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#1E94A4]/10 flex items-center justify-center text-[#1E94A4] mb-6 group-hover:scale-110 transition-transform">
                    <Smartphone className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-4">Farmer Milk Passbook App</h3>
                  <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm leading-relaxed mb-6">
                    A dedicated mobile application mockup for dairy farmers. Track real-time milk collection slips, overall passbooks, 10-day payment receipts, direct store sales, and ledger sheets.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Milk Slip Receipts (Daily Entries)", "10-Day Billing Cycle Overview", "Account Ledger & Advances Balance", "Multilingual (EN, मराठी, हिंदी, ಕನ್ನಡ)"].map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-zinc-400 font-sans">
                        <CheckCircle2 className="h-4.5 w-4.5 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/dairy-solutions/passbook">
                  <Button className="w-full bg-[#1E94A4] hover:bg-[#0B7989] text-white font-bold py-6 rounded-2xl shadow-lg shadow-[#1E94A4]/15">
                    Launch Mobile Demo
                  </Button>
                </Link>
              </div>

              {/* Admin Card */}
              <div className="bg-slate-50 dark:bg-zinc-900 border dark:border-zinc-800 p-8 rounded-[2.5rem] flex flex-col justify-between hover:shadow-2xl transition-all group hover:-translate-y-1">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                    <LayoutDashboard className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-4">Dairy Admin Dashboard</h3>
                  <p className="text-gray-600 dark:text-zinc-400 font-serif text-sm leading-relaxed mb-6">
                    A comprehensive administration panel for cooperative societies and milk unions. Monitor live collection metrics, view detailed stats, process bills, and access AI-driven insights.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["AI-Driven Dairy level Dashboard", "Dynamic Recharts Statistics & Graphs", "Daily Summary & Collection Reports", "Individual Milk Bill & Ledger Copy"].map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-zinc-400 font-sans">
                        <CheckCircle2 className="h-4.5 w-4.5 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/dairy-solutions/admin">
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-bold py-6 rounded-2xl shadow-lg">
                    Launch Admin Demo
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        </section>

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

        {/* Product Tiers */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6">
                {t("dairy.tiersTitle")}
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 font-serif max-w-3xl mx-auto text-lg">
                {t("dairy.tiersSubtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {tiers.map((tier, idx) => (
                <div
                  key={idx}
                  className={`relative p-8 rounded-3xl border ${idx === 1 ? "border-blue-600 shadow-2xl shadow-blue-900/10" : "border-slate-100 dark:border-zinc-800"} flex flex-col`}
                >
                  {idx === 1 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-sans font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="mb-8">
                    <tier.icon className={`h-12 w-12 ${idx === 1 ? "text-[#1E94A4]" : "text-slate-400"} mb-6`} />
                    <h3 className="text-2xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-2">{tier.name}</h3>
                    <div className="text-[#1E94A4] font-sans font-bold mb-4">{tier.subtitle}</div>
                    <p className="text-gray-500 dark:text-zinc-400 font-serif text-sm leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <div className="space-y-6 mt-auto">
                    <div className="pt-6 border-t border-slate-100 dark:border-zinc-800">
                      <div className="text-xs font-sans font-bold text-gray-400 uppercase tracking-wider mb-3">
                        {t("product.includes")}
                      </div>
                      <div className="text-gray-900 dark:text-zinc-100 font-sans font-bold">{tier.includes}</div>
                    </div>
                    <div className="pt-6 border-t border-slate-100 dark:border-zinc-800">
                      <div className="text-xs font-sans font-bold text-gray-400 uppercase tracking-wider mb-3">
                        {t("product.bestFor")}
                      </div>
                      <div className="text-gray-700 dark:text-zinc-300 font-serif text-sm">{tier.bestFor}</div>
                    </div>
                    <Link href="/contact" className="block mt-8">
                      <Button
                        className={`w-full py-6 rounded-xl font-sans font-bold ${
                          idx === 1 ? "bg-[#1E94A4] hover:bg-[#0B7989] text-white" : "bg-slate-900 hover:bg-slate-800 text-white"
                        }`}
                      >
                        {t("product.contactSales")}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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

        {/* Video Demo Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950 border-t border-slate-100 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100">
                {t("product.videoTitle")}
              </h2>
              <div className="h-1.5 w-20 bg-[#1E94A4] mx-auto rounded-full" />
              <p className="text-lg text-gray-600 dark:text-zinc-400 font-serif">
                {t("product.videoDesc")}
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1E94A4] to-[#22d3ee] rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
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
              <Link href="/schedule-demo">
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
