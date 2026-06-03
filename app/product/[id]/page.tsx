"use client"

import { useState, useMemo } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowLeft, Headphones, Mail, Calendar, Play } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AudioButton } from "@/components/audio-button"
import { StarRatingSchema } from "@/components/star-rating-schema"

export default function ProductDetailPage() {
  const params = useParams()
  const { t, language } = useLanguage()
  const productId = typeof params?.id === 'string' ? params.id : "1"

  const productsData: Record<string, any> = useMemo(() => ({
    "1": {
      id: 1,
      title: language === 'mr' ? "स्वयंचलित दूध संकलन प्रणाली (AMCS)" :
             language === 'kn' ? "ಸ್ವಯಂಚಾಲಿತ ಹಾಲು ಸಂಗ್ರಹಣೆ ವ್ಯವಸ್ಥೆ (AMCS)" :
             language === 'hi' ? "स्वचालित दूध संग्रह प्रणाली (AMCS)" : "Automatic Milk Collection System (AMCS)",
      brand: "WinSoft Solutions",
      category: t("contact.dairy"),
      description: language === 'mr' ? "दूध संकलन केंद्रांसाठी संगणकीकृत वजन काटा आणि FAT/SNF तपासणीचे स्वयंचलित एकत्रीकरण." :
                   language === 'kn' ? "ಹಾಲು ಸಂಗ್ರಹಣಾ ಕೇಂದ್ರಗಳಿಗಾಗಿ ಕಂಪ್ಯೂಟರೀಕೃತ ತೂಕದ ಪ್ರಮಾಣ ಮತ್ತು FAT/SNF ಪರೀಕ್ಷೆಯ ಸ್ವಯಂಚಾಲಿತ ಏಕೀಕರಣ." :
                   language === 'hi' ? "दूध संग्रह केंद्रों के लिए कम्प्यूटरीकृत वजन कांटा और FAT/SNF परीक्षण का स्वचालित एकीकरण." : "Complete computerized weighing scale and FAT/SNF testing integration for seamless village milk collection.",
      variants: [t("product.prod1Variant1"), t("product.prod1Variant2"), t("product.prod1Variant3")],
      details: {
        [t("product.softwareType")]: "Desktop & Cloud",
        [t("product.brand")]: "WinSoft",
        [t("product.compatibility")]: "Windows, Android",
        [t("product.support")]: t("product.support247Text"),
        [t("product.license")]: t("product.lifetime"),
      },
      about: [
        t("product.prod1About1"),
        t("product.prod1About2"),
        t("product.prod1About3"),
        t("product.prod1About4"),
        t("product.prod1About5"),
      ],
      images: ["/dairy33.png", "/modern-dairy-farm.png", "/indian-software-office-collaboration.png"],
      videoUrl: "/dairy.mp4",
    },
    "2": {
      id: 2,
      title: language === 'mr' ? "शेतकरी दूध पासबुक मोबाईल अॅप (Sankalan)" :
             language === 'kn' ? "ರೈತರ ಹಾಲು ಪಾಸ್ಬುಕ್ ಮೊಬೈಲ್ ಆಪ್ (Sankalan)" :
             language === 'hi' ? "किसान दूध पासबुक मोबाइल ऐप (Sankalan)" : "Farmer Milk Passbook App (Sankalan)",
      brand: "WinSoft Sankalan App",
      category: t("contact.dairy"),
      description: language === 'mr' ? "शेतकऱ्यांसाठी दररोजचे दूध संकलन, १० दिवसांचे बिल आणि खात्याचे लेजर पाहण्यासाठीचे प्रगत मोबाईल अॅप्लिकेशन." :
                   language === 'kn' ? "ರೈತರಿಗಾಗಿ ದೈನಂದಿನ ಹಾಲು ಸಂಗ್ರಹಣೆ, ೧೦ ದಿನಗಳ ಬಿಲ್ ಮತ್ತು ಖಾತೆಯ ಲೆಡ್ಜರ್ ವೀಕ್ಷಿಸಲು ಸುಧಾರಿತ ಮೊಬೈಲ್ ಆಪ್." :
                   language === 'hi' ? "किसानों के लिए दैनिक दूध संग्रह, १० दिनों का बिल और खाता बही देखने के लिए उन्नत मोबाइल ऐप." : "Advanced mobile application for dairy farmers to track real-time daily milk slips, 10-day payment receipts, and ledger statements.",
      variants: language === 'mr' ? ["सभासद शेतकरी अॅप", "संकलन स्टाफ अॅप", "थेट विक्री आवृत्ती"] : 
                language === 'kn' ? ["ರೈತ ಆಪ್", "ಸಂಗ್ರಹಣಾ ಸಿಬ್ಬಂದಿ ಆಪ್", "ನೇರ ಮಾರಾಟ ಆವೃತ್ತಿ"] :
                language === 'hi' ? ["किसान ऐप", "संग्रह कर्मचारी ऐप", "प्रत्यक्ष बिक्री संस्करण"] : ["Farmer App", "Collection Staff App", "Direct Sales Edition"],
      details: {
        [t("product.softwareType")]: "Mobile App (Android/iOS)",
        [t("product.brand")]: "WinSoft",
        [t("product.compatibility")]: "Android, iOS (Mobile)",
        [t("product.support")]: t("product.support247Text"),
        [t("product.license")]: "Subscription Based",
      },
      about: language === 'mr' ? [
        "दररोज सकाळी आणि संध्याकाळी झालेल्या दूध संकलनाची पावती लगेच नोटिफिकेशन व SMS द्वारे मिळते.",
        "१० दिवसांचे बिलिंग चक्र, झालेली कपात आणि बँक खात्यात वर्ग झालेली निव्वळ रक्कम याची सविस्तर माहिती.",
        "पशुखाद्य खरेदी, उचल (Advance) आणि शिल्लक रकमेचे सुलभ आणि पारदर्शक खाते रजिस्टर (Ledger).",
        "मराठी, इंग्रजी, हिंदी आणि कन्नड अशा सर्व स्थानिक भाषांमध्ये सोप्या पद्धतीने कार्य करते.",
        "अॅपमधूनच थेट पशूखाद्य किंवा औषधे ऑर्डर करण्याची सोयीस्कर व्यवस्था."
      ] : language === 'kn' ? [
        "ದೈನಂದಿನ ಬೆಳಿಗ್ಗೆ ಮತ್ತು ಸಾಯಂಕಾಲದ ಹಾಲು ಸಂಗ್ರಹಣೆಯ ರಸೀದಿ ತಕ್ಷಣ ಪುಶ್ ನೋಟಿಫಿಕೇಶನ್ ಮತ್ತು SMS ಮೂಲಕ ದೊರೆಯುತ್ತದೆ.",
        "೧೦ ದಿನಗಳ ಬಿಲ್ಲಿಂಗ್ ವಿವರ, ಮುಂಗಡ ಕಡಿತಗಳು ಮತ್ತು ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮೆಯಾದ ಮೊತ್ತದ ಸಂಪೂರ್ಣ ಮಾಹಿತಿ.",
        "ಪಶು ಆಹಾರ ಖರೀದಿ, ಮುಂಗಡ ಮತ್ತು ಬಾಕಿ ಮೊತ್ತದ ಸರಳ ಹಾಗೂ ಪಾರದರ್ಶಕ ಲೆಡ್ಜರ್ ವರದಿ.",
        "ಕನ್ನಡ, ಮರಾಠಿ, ಹಿಂದಿ ಮತ್ತು ಇಂಗ್ಲಿಷ್ ಭಾಷೆಗಳಲ್ಲಿ ಸುಲಭವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.",
        "ಆಪ್ ಮೂಲಕವೇ ನೇರವಾಗಿ ಪಶು ಆಹಾರ ಅಥವಾ ಅಗತ್ಯ ಔಷಧಿಗಳನ್ನು ಆರ್ಡರ್ ಮಾಡುವ ಸೌಲಭ್ಯ."
      ] : language === 'hi' ? [
        "दैनिक दूध संग्रह की रसीद तुरंत पुश नोटिफिकेशन और SMS के माध्यम से प्राप्त होती है.",
        "१० दिनों का बिलिंग चक्र, कुल कटौती और बैंक खाते में जमा शुद्ध राशि का विस्तृत विवरण.",
        "पशु आहार खरीद, अग्रिम (Advance) और शेष राशि का आसान और पारदर्शी खाता बही (Ledger).",
        "हिंदी, मराठी, अंग्रेजी और कन्नड़ जैसी स्थानीय भाषाओं में सुचारू रूप से कार्य करता है.",
        "ऐप के माध्यम से सीधे पशु आहार या दवाओं का आर्डर करने की सुविधाजनक व्यवस्था."
      ] : [
        "Real-time Milk Collection Slips sent instantly via push notification & SMS.",
        "10-day Billing & Payout statement with deductions and net deposits.",
        "Interactive Account Ledger showing cattle feed purchases and advances.",
        "Multilingual Support: Fully operates in English, Marathi, Hindi, and Kannada.",
        "Direct Cattle Feed ordering system from within the farmer portal."
      ],
      images: ["/modern-dairy-farm.png", "/indian-software-office-collaboration.png"],
      videoUrl: "/dairy.mp4",
    },
    "3": {
      id: 3,
      title: language === 'mr' ? "सहकारी दूध संस्था प्रशासकीय ERP" :
             language === 'kn' ? "ಸಹಕಾರಿ ಹಾಲು ಉತ್ಪಾದಕರ ಸಂಘದ ಆಡಳಿತ ERP" :
             language === 'hi' ? "सहकारी दूध समिति प्रशासनिक ERP" : "Cooperative Society Admin ERP",
      brand: "WinSoft Admin ERP",
      category: t("contact.dairy"),
      description: language === 'mr' ? "दूध संस्था आणि संघांसाठी संकलन, पशूखाद्य विक्री, सभासद व्यवस्थापन आणि ऑडिट रिपोर्टचे संपूर्ण सोल्यूशन." :
                   language === 'kn' ? "ಹಾಲು ಸಂಘಗಳು ಮತ್ತು ಒಕ್ಕೂಟಗಳಿಗಾಗಿ ಸಂಗ್ರಹಣೆ, ಪಶು ಆಹಾರ ಮಾರಾಟ, ಸದಸ್ಯರ ನಿರ್ವಹಣೆ ಮತ್ತು ಸಂಪೂರ್ಣ ಆಡಿಟ್ ವರದಿ." :
                   language === 'hi' ? "दूध समितियों और संघों के लिए संग्रह, पशु आहार बिक्री, सदस्य प्रबंधन और ऑडिट रिपोर्ट का संपूर्ण समाधान." : "Comprehensive enterprise administration dashboard to manage collection metrics, member profiles, feed sales, and society-level accounting.",
      variants: language === 'mr' ? ["प्रशासकीय पोर्टल", "अकाउंटिंग ईआरपी", "ऑडिट आवृत्ती"] :
                language === 'kn' ? ["ಆಡಳಿತ ಪೋರ್ಟಲ್", "ಖಾತೆ ಇಆರ್‌ಪಿ", "ಆಡಿಟ್ ಆವೃತ್ತಿ"] :
                language === 'hi' ? ["प्रशासनिक पोर्टल", "अकाउंटिंग ईआरपी", "ऑडिट संस्करण"] : ["Admin Portal", "Accounting ERP", "Audit Edition"],
      details: {
        [t("product.softwareType")]: "Web & Cloud ERP",
        [t("product.brand")]: "WinSoft",
        [t("product.compatibility")]: "Chrome, Edge, Safari",
        [t("product.database")]: "Cloud SQL Server",
        [t("product.accounting")]: "Co-op Society Audit Compliant",
      },
      about: language === 'mr' ? [
        "संस्थेच्या सर्व शाखांचे दूध संकलन, सरासरी फॅट आणि एकूण रक्कम दर्शवणारा लाइव्ह डॅशबोर्ड.",
        "दूध संकलनातील भेसळ रोखण्यासाठी प्रगत अलार्म आणि गुणवत्ता नियंत्रण मॉनिटरींग.",
        "सहकारी संस्थेच्या निकषांनुसार नफा-तोटा पत्रक, ताळेबंद (Balance Sheet) आणि खरेदी-विक्री नोंदणी.",
        "शेतकऱ्यांचे बिल थेट त्यांच्या बँक खात्यामध्ये पाठवण्यासाठी वन-क्लिक बँक पेमेंट गेटवे एकत्रीकरण.",
        "ऑडिटरसाठी स्वतंत्र लॉगिन, ज्यामुळे ऑडिट तपासणी सुलभ आणि अत्यंत जलद होते."
      ] : language === 'kn' ? [
        "ಸಂಸ್ಥೆಯ ಎಲ್ಲಾ ಶಾಖೆಗಳ ಹಾಲು ಸಂಗ್ರಹಣೆ, ಸರಾಸರಿ ಫ್ಯಾಟ್ ಮತ್ತು ಒಟ್ಟು ಮೊತ್ತವನ್ನು ತೋರಿಸುವ ಲೈವ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್.",
        "ಹಾಲು ಸಂಗ್ರಹಣೆಯಲ್ಲಿ ಕಲಬೆರಕೆ ತಡೆಯಲು ಸುಧಾರಿತ ಅಲಾರಾಂ ಮತ್ತು ಗುಣಮಟ್ಟ ನಿಯಂತ್ರಣ ಮಾನಿಟರಿಂಗ್.",
        "ಸಹಕಾರಿ ಸಂಸ್ಥೆಯ ನಿಯಮಗಳ ಪ್ರಕಾರ ಲಾಭ-ನಷ್ಟ ವರದಿ, ತಾಳೆಪಟ್ಟಿ (Balance Sheet) ಮತ್ತು ಖರೀದಿ-ಮಾರಾಟ ನೋಂದಣಿ.",
        "ರೈತರ ಬಿಲ್ಲನ್ನು ನೇರವಾಗಿ ಅವರ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ವರ್ಗಾಯಿಸಲು ಒನ್-ಕ್ಲಿಕ್ ಬ್ಯಾಂಕ್ ಪೇಮೆಂಟ್ ಗೇಟ್‌ವೇ.",
        "ಆಡಿಟರ್‌ಗಾಗಿ ಪ್ರತ್ಯೇಕ ಲಾಗಿನ್ ವ್ಯವಸ್ಥೆ, ಇದರಿಂದ ತಪಾಸಣೆ ಸುಲಭ ಮತ್ತು ಅತ್ಯಂತ ತ್ವರಿತವಾಗುತ್ತದೆ."
      ] : language === 'hi' ? [
        "संस्था की सभी शाखाओं का दूध संग्रह, औसत FAT और कुल राशि दर्शाने वाला लाइव डैशबोर्ड.",
        "दूध संग्रह में मिलावट रोकने के लिए उन्नत अलार्म और गुणवत्ता नियंत्रण मॉनिटरिंग.",
        "सहकारी समिति मानदंडों के अनुसार लाभ-हानि पत्रक, बैलेंस शीट और खरीद-बिक्री रजिस्टर.",
        "किसानों के बिल सीधे उनके बैंक खातों में भेजने के लिए वन-क्लिक बैंक पेमेंट गेटवे.",
        "ऑडिटर के लिए अलग लॉगिन, जिससे ऑडिट जांच सुलभ और अत्यंत त्वरित होती है."
      ] : [
        "Consolidated Dashboard showing morning/evening collection metrics in real-time.",
        "AI-driven yield prediction models and anomaly detectors for purity checking.",
        "Complete double-entry accounting with instant balance sheets and P&L reports.",
        "Bulk bank payout transfers processed directly via API integrations.",
        "Auditor read-only access for simplified audit trails and cooperative tax filing."
      ],
      images: ["/modern-office-dashboard.png", "/indian-software-office-collaboration.png"],
      videoUrl: "/dairy.mp4",
    },
    "4": {
      id: 4,
      title: language === 'mr' ? "दूध विश्लेषक आणि वजन काटा एकत्रीकरण" :
             language === 'kn' ? "ಹಾಲು ವಿಶ್ಲೇಷಕ ಮತ್ತು ತೂಕದ ಪ್ರಮಾಣ ಏಕೀಕರಣ" :
             language === 'hi' ? "दूध विश्लेषक और वजन कांटा एकीकरण" : "Milk Analyzer & Hardware Integration",
      brand: "WinSoft IoT Middleware",
      category: t("contact.dairy"),
      description: language === 'mr' ? "डिजिटल वजन काटे, थर्मल प्रिंटर, फॅट मशीन आणि आवाजाद्वारे घोषणा (Voice Announcement) यांचे परिपूर्ण एकत्रीकरण." :
                   language === 'kn' ? "ಡಿಜಿಟಲ್ ತೂಕದ ಪ್ರಮಾಣಗಳು, ಥರ್ಮಲ್ ಪ್ರಿಂಟರ್ಗಳು, ಫ್ಯಾಟ್ ಮೆಷಿನ್ ಮತ್ತು ಧ್ವನಿ ಘೋಷಣೆಯ ಸಂಪೂರ್ಣ ಏಕೀಕರಣ." :
                   language === 'hi' ? "डिजिटल वजन कांटे, थर्मल प्रिंटर, फैट मशीन और आवाज घोषणा (Voice Announcement) का सटीक एकीकरण." : "High-precision integration with digital weigh scales, FAT testing machines, thermal printers, and multilingual voice announcements.",
      variants: language === 'mr' ? ["वजन काटा जोडणी", "फॅट मशीन जोडणी", "प्रिंटर व व्हॉईस मोड"] :
                language === 'kn' ? ["ತೂಕದ ಪ್ರಮಾಣ ಜೋಡಣೆ", "ಫ್ಯಾಟ್ ಮೆಷಿನ್ ಜೋಡಣೆ", "ಪ್ರಿಂಟರ್ ಮತ್ತು ವಾಯ್ಸ್ ಮೋಡ್"] :
                language === 'hi' ? ["वजन कांटा कनेक्शन", "फैट मशीन कनेक्शन", "प्रिंटर व वॉयस मोड"] : ["Weigh Scale Link", "FAT Machine Link", "Printer & Voice Module"],
      details: {
        [t("product.softwareType")]: "IoT Hardware Middleware",
        [t("product.brand")]: "WinSoft IoT",
        [t("product.compatibility")]: "Windows XP/7/10/11, Linux IoT",
        [t("product.hardwareIntegration")]: "Digital Scales, Milk Analyzers, Thermal Printers",
      },
      about: language === 'mr' ? [
        "बाजारातील २०+ नामवंत दूध विश्लेषक (Milk Analyzers) ब्रँड्सशी थेट आणि अचूक जोडणी.",
        "डिजिटल वजन काट्यावरून अचूक दूध वजन थेट सॉफ्टवेअरमध्ये गोळा केले जाते, ज्यामुळे मानवी चुका टळतात.",
        "दूध संकलन होताच शेतकऱ्याला जागेवर थर्मल प्रिंटरद्वारे लहान पावती दिली जाते.",
        "अशिक्षित शेतकऱ्यांसाठी पारदर्शकतेसाठी दूध वजन, फॅट आणि बिल रक्कम मराठी किंवा कन्नड आवाजात ऐकवली जाते.",
        "इंटरनेट नसल्यास ऑफलाइन मोडमध्ये संकलन सुरू राहते आणि नेट येताच डेटा आपोआप क्लाउडवर सिंक होतो."
      ] : language === 'kn' ? [
        "ಮಾರುಕಟ್ಟೆಯ ೨೦+ ಪ್ರಮುಖ ಹಾಲು ವಿಶ್ಲೇಷಕ (Milk Analyzers) ಬ್ರ್ಯಾಂಡ್‌ಗಳೊಂದಿಗೆ ನೇರ ಜೋಡಣೆ.",
        "ಡಿಜಿಟಲ್ ತೂಕದ ಪ್ರಮಾಣದಿಂದ ಹಾಲಿನ ತೂಕವನ್ನು ನೇರವಾಗಿ ಸಾಫ್ಟ್‌ವೇರ್‌ಗೆ ವರ್ಗಾಯಿಸುವುದರಿಂದ ಮಾನವ ತಪ್ಪುಗಳು ತಪ್ಪುತ್ತವೆ.",
        "ಹಾಲು ಸಂಗ್ರಹಣೆಯಾದ ತಕ್ಷಣ ರೈತರಿಗೆ ಥರ್ಮಲ್ ಪ್ರಿಂಟರ್ ಮೂಲಕ ಸ್ಥಳದಲ್ಲೇ ರಸೀದಿ ನೀಡಲಾಗುತ್ತದೆ.",
        "ರೈತರ ಪಾರದರ್ಶಕತೆಗಾಗಿ ಹಾಲಿನ ತೂಕ, ಫ್ಯಾಟ್ ಮತ್ತು ಬಿಲ್ ಮೊತ್ತವನ್ನು ಕನ್ನಡ ಅಥವಾ ಮರಾಠಿ ಧ್ವನಿಯಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ.",
        "ಇಂಟರ್ನೆಟ್ ಇಲ್ಲದಿದ್ದರೂ ಆಫ್‌ಲೈನ್ ಮೋಡ್‌ನಲ್ಲಿ ಸಂಗ್ರಹಣೆ ಮುಂದುವರಿಯುತ್ತದೆ ಮತ್ತು ನೆಟ್ ಬಂದ ತಕ್ಷಣ ಡೇಟಾ ಸಿಂಕ್ ಆಗುತ್ತದೆ."
      ] : language === 'hi' ? [
        "बाजार के २०+ प्रमुख दूध विश्लेषक (Milk Analyzers) ब्रांडों से सीधे और सटीक कनेक्शन.",
        "डिजिटल वजन कांटे से दूध का वजन सीधे सॉफ्टवेयर में दर्ज होता है, जिससे मानवीय गलतियां समाप्त होती हैं.",
        "दूध संग्रह होते ही किसान को थर्मल प्रिंटर द्वारा तुरंत रसीद दी जाती है.",
        "पारदर्शिता के लिए दूध का वजन, FAT और बिल राशि हिंदी या मराठी आवाज में जोर से सुनाई जाती है.",
        "इंटरनेट न होने पर ऑफलाइन मोड में संग्रह चालू रहता है और नेट आने पर डेटा अपने आप क्लाउड पर सिंक हो जाता."
      ] : [
        "Direct interface with 20+ analyzer brands (Lactocan, Lactoscan, etc.) via RS232/USB.",
        "Instant data capture from digital weighing scales to eliminate manual entries.",
        "Integrated Thermal Printers for instant receipt generation right at the collection gate.",
        "Multilingual Voice Announcement announcing FAT, SNF, and Amount loudly for transparency.",
        "Fail-safe offline mode that buffers collection logs and auto-syncs when online."
      ],
      images: ["/placeholder.jpg", "/indian-software-office-collaboration.png"],
      videoUrl: "/dairy.mp4",
    },
    "5": {
      id: 5,
      title: language === 'mr' ? "पशूखाद्य आणि उचल (Advance) व्यवस्थापन" :
             language === 'kn' ? "ಪಶು ಆಹಾರ ಮತ್ತು ಮುಂಗಡ (Advance) ನಿರ್ವಹಣೆ" :
             language === 'hi' ? "पशु आहार और अग्रिम (Advance) प्रबंधन" : "Cattle Feed & Advance Management",
      brand: "WinSoft Financials",
      category: t("contact.dairy"),
      description: language === 'mr' ? "पशूखाद्य खरेदी-विक्री आणि बिलांमधून अॅडव्हान्सची स्वयंचलित कपात व व्याजाची सुलभ गणना." :
                   language === 'kn' ? "ಪಶು ಆಹಾರ ಖರೀದಿ-ಮಾರಾಟ ಮತ್ತು ಬಿಲ್ಲುಗಳಿಂದ ಮುಂಗಡಗಳ ಸ್ವಯಂಚಾಲಿತ ಕಡಿತ ಮತ್ತು ಬಡ್ಡಿಯ ಸುಲಭ ಲೆಕ್ಕಾಚಾರ." :
                   language === 'hi' ? "पशु आहार खरीद-बिक्री और बिलों से अग्रिम की स्वचालित कटौती और ब्याज की आसान गणना." : "Streamlined module for tracking cattle feed distribution, inventory, automatic advance/loan recovery from milk bills, and interest calculation.",
      variants: language === 'mr' ? ["खाद्य व डेअरी स्टोअर", "अॅडव्हान्स व कर्ज रजिस्टर", "व्याज गणना विभाग"] :
                language === 'kn' ? ["ಪಶು ಆಹಾರ ಮತ್ತು ಸ್ಟೋರ್", "ಮುಂಗಡ ಮತ್ತು ಸಾಲ ರಿಜಿಸ್ಟರ್", "ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರ ವಿಭಾಗ"] :
                language === 'hi' ? ["पशु आहार व डेयरी स्टोर", "अग्रिम व ऋण रजिस्टर", "ब्याज गणना विभाग"] : ["Feed Inventory", "Advance & Loan Tracker", "Interest Calculation"],
      details: {
        [t("product.softwareType")]: "Billing & Financial Module",
        [t("product.brand")]: "WinSoft",
        [t("product.compatibility")]: "Windows, Web Interface",
        [t("product.support")]: t("product.support247Text"),
      },
      about: language === 'mr' ? [
        "संस्थेतील पशूखाद्य, पेंड, औषधे आणि इतर साहित्याची स्टॉक नोंदणी आणि सोपी इन्व्हॉइसिंग.",
        "खरेदी केलेल्या पशूखाद्याची रक्कम शेतकऱ्याच्या चालू बिलातून किंवा जमा रकमेतून आपोआप वजा करण्याची सुविधा.",
        "शेतकऱ्याला दिलेल्या उचल (Advance) किंवा कर्जाची सोप्या हप्त्यांमध्ये दूध बिलातून वसुली.",
        "दिलेल्या कर्जावर किंवा अनामत ठेवींवर शासकीय नियमांनुसार अचूक व्याज गणना करण्याची प्रणाली.",
        "उचल किंवा पशूखाद्य घेतल्यावर शेतकऱ्याच्या मोबाईलवर तत्काळ व्हॉट्सअॅप किंवा एसएमएसद्वारे मेसेज अलर्ट."
      ] : language === 'kn' ? [
        "ಸಂಸ್ಥೆಯಲ್ಲಿನ ಪಶು ಆಹಾರ, ಹಿಂಡಿ, ಔಷಧಿಗಳು ಮತ್ತು ಇತರ ಸಾಮಗ್ರಿಗಳ ಸ್ಟಾಕ್ ನೋಂದಣಿ ಮತ್ತು ಸರಳ ಇನ್ವಾಯ್ಸಿಂಗ್.",
        "ಖರೀದಿಸಿದ ಪಶು ಆಹಾರದ ಮೊತ್ತವನ್ನು ರೈತರ ಪ್ರಸ್ತುತ ಹಾಲಿನ ಬಿಲ್ಲಿನಿಂದ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಕಡಿತಗೊಳಿಸುವ ಸೌಲಭ್ಯ.",
        "ರೈತರಿಗೆ ನೀಡಲಾದ ಮುಂಗಡ (Advance) ಅಥವಾ ಸಾಲವನ್ನು ಸುಲಭ ಕಂತುಗಳಲ್ಲಿ ಹಾಲಿನ ಬಿಲ್ಲಿನಿಂದ ವಸೂಲಿ ಮಾಡುವುದು.",
        "ನೀಡಿದ ಸಾಲಗಳ ಮೇಲೆ ಅಥವಾ ಠೇವಣಿಗಳ ಮೇಲೆ ನಿಯಮಾವಳಿಗಳ ಪ್ರಕಾರ ನಿಖರ ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರದ ವ್ಯವಸ್ಥೆ.",
        "ಮುಂಗಡ ಅಥವಾ ಪಶು ಆಹಾರ ಪಡೆದ ತಕ್ಷಣ ರೈತರ ಮೊಬೈಲ್‌ಗೆ ವಾಟ್ಸಾಪ್ ಅಥವಾ ಎಸ್‌ಎಂಎಸ್ ಮೂಲಕ ಸಂದೇಶ ರವಾನೆ."
      ] : language === 'hi' ? [
        "संस्था में पशु आहार, दवाएं और अन्य सामग्रियों की स्टॉक एंट्री और आसान इनवॉइसिंग.",
        "खरीदे गए पशु आहार की राशि किसान के चालू बिल या जमा राशि से अपने आप काटने की सुविधा.",
        "किसानों को दिए गए अग्रिम (Advance) या ऋण की आसान किस्तों में दूध बिल से वसूली.",
        "दिए गए ऋण या जमा राशि पर सरकारी नियमों के अनुसार सटीक ब्याज गणना की प्रणाली.",
        "अग्रिम या पशु आहार लेने पर किसान के मोबाइल पर तुरंत व्हाट्सएप या एसएमएस अलर्ट."
      ] : [
        "Full inventory tracking for cattle feed stocks, supplements, and veterinary items.",
        "Flexible payment options: Cash sales, milk bill deduction, or ledger debit.",
        "Automatic advance/loan recovery from milk bills matching cooperative credit policies.",
        "Accurate interest calculation algorithms on long-term capital loans and deposits.",
        "SMS & WhatsApp alerts sent automatically to farmers on recovery transactions."
      ],
      images: ["/goldwin.png", "/indian-software-office-collaboration.png"],
      videoUrl: "/dairy.mp4",
    }
  }), [t, language])

  const product = productsData[productId] || productsData["1"]

  const [activeMedia, setActiveMedia] = useState({ type: 'video', url: product.videoUrl })
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])

  const variantsText = product.variants.join(", ")
  const technicalSpecs = Object.entries(product.details).map(([k, v]) => `${k}: ${v}`).join(", ")
  const featuresText = product.about.join(", ")
  
  let audioText = ""
  if (language === 'mr') {
    audioText = `उत्पादनाचे नाव: ${product.title}. वर्णन: ${product.description}. उपलब्ध आवृत्त्या: ${variantsText}. तांत्रिक माहिती: ${technicalSpecs}. मुख्य वैशिष्ट्ये: ${featuresText}.`
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
          image: "/jewelry-store-system.png",
          link: "/gold-industry-solutions",
          tag: "सुवर्ण सोल्यूशन"
        },
        {
          id: "sugar",
          title: "साखर कारखाना व्यवस्थापन प्रणाली",
          description: "साखर कारखान्यांसाठी ऊस खरेदी, वजन काटा जोडणी, शेतकरी नोंदणी आणि संपूर्ण प्रशासकीय ERP सोल्यूशन.",
          image: "/sugerfac.png",
          link: "/sugar-factory-solutions",
          tag: "साखर सोल्यूशन"
        }
      );
    } else if (language === 'kn') {
      enterprise.push(
        {
          id: "gold",
          title: "ಚಿನ್ನದ ಅಂಗಡಿ ಮತ್ತು ಆಭರಣ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ (Goldwin)",
          description: "ಆಭರಣ ಮಳಿಗೆಗಳಿಗಾಗಿ ಚಿನ್ನ ಮತ್ತು ಬೆಳ್ಳಿಯ ಲೆಕ್ಕಾಚಾರ, ಬಾರ್‌ಕೋಡ್ ಬಿಲ್ಲಿಂಗ್, ಗಿರವಿ ನಿರ್ವಹಣೆ ಮತ್ತು ಜಿಎಸ್‌ಟಿ ವರದಿಗಳ ಸಂಪೂರ್ಣ ಸಾಫ್ಟ್‌ವೇರ್.",
          image: "/jewelry-store-system.png",
          link: "/gold-industry-solutions",
          tag: "ಚಿನ್ನದ ಪರಿಹಾರ"
        },
        {
          id: "sugar",
          title: "ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ",
          description: "ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆಗಳಿಗಾಗಿ ಕಬ್ಬು ಖರೀದಿ, ತೂಕದ ಪ್ರಮಾಣ ಜೋಡಣೆ, ರೈತರ ನೋಂದಣಿ ಮತ್ತು ಸಂಪೂರ್ಣ ಆಡಳಿತಾತ್ಮಕ ERP ಪರಿಹಾರ.",
          image: "/sugerfac.png",
          link: "/sugar-factory-solutions",
          tag: "ಸಕ್ಕರೆ ಪರಿಹಾರ"
        }
      );
    } else if (language === 'hi') {
      enterprise.push(
        {
          id: "gold",
          title: "स्वर्ण आभूषण शोरूम प्रबंधन प्रणाली (Goldwin)",
          description: "ज्वेलरी शोरूम के लिए सोने-चांदी का हिसाब, बारकोड बिलिंग, गिरवी प्रबंधन और GST रिपोर्ट का संपूर्ण सॉफ्टवेयर.",
          image: "/jewelry-store-system.png",
          link: "/gold-industry-solutions",
          tag: "स्वर्ण समाधान"
        },
        {
          id: "sugar",
          title: "चीनी मिल प्रबंधन प्रणाली",
          description: "चीनी मिलों के लिए गन्ना खरीद, वजन कांटा एकीकरण, किसान पंजीकरण और संपूर्ण प्रशासनिक ERP समाधान.",
          image: "/sugerfac.png",
          link: "/sugar-factory-solutions",
          tag: "चीनी समाधान"
        }
      );
    } else {
      enterprise.push(
        {
          id: "gold",
          title: "Gold Jewellery Showroom ERP (Goldwin)",
          description: "Complete billing, account management, barcode scanning, Girvi/pledge tracking, and GST returns software for jewellery showrooms.",
          image: "/jewelry-store-system.png",
          link: "/gold-industry-solutions",
          tag: "Gold Solution"
        },
        {
          id: "sugar",
          title: "Sugar Factory Enterprise Solutions",
          description: "Complete ERP system for sugar factories to manage cane procurement, weighbridge operations, farmer billing, and factory accounts.",
          image: "/sugerfac.png",
          link: "/sugar-factory-solutions",
          tag: "Sugar Solution"
        }
      );
    }
    return [...otherDairyProducts, ...enterprise];
  }, [otherDairyProducts, language])

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans text-gray-900 dark:text-zinc-100">
      <StarRatingSchema
        name={product.title}
        description={product.description}
        rating={4.9}
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
                <Image
                  src={activeMedia.url}
                  alt={product.title}
                  fill
                  className="object-contain p-4"
                />
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
          <div className="w-full lg:w-4/12 space-y-8">
            <div>
              <div className="flex flex-col items-start gap-4 mb-4">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 leading-tight">
                  {product.title}
                </h1>
                <AudioButton text={audioText} colorTheme="purple" />
              </div>
              <p className="text-lg text-gray-600 dark:text-zinc-400 leading-relaxed">
                {product.description}
              </p>
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
          </div>

          {/* RIGHT SECTION (CONTACT/ACTION) */}
          <div className="w-full lg:w-3/12">
            <div className="bg-gray-50 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 sticky top-8 space-y-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100 mb-2">
                  {t("product.interested")}
                </h3>
                <p className="text-gray-500 dark:text-zinc-400 text-sm">
                  {t("product.personalizedWalkthrough")}
                </p>
              </div>

              <div className="space-y-4">
                <Link href="/schedule-demo" className="block">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-6 rounded-2xl shadow-lg dark:shadow-none transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {t("product.requestDemo")}
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 dark:text-zinc-300 font-bold py-6 rounded-2xl hover:bg-white dark:bg-zinc-950 transition-all flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    {t("product.contactSales")}
                  </Button>
                </Link>
                <WhatsAppButton className="block" productName={product.title} />
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-zinc-800 space-y-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">
                  {t("product.supportAssistance")}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-zinc-300">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-950 border border-gray-100 flex items-center justify-center shadow-sm dark:shadow-none">
                    <Headphones className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-bold">{t("product.support247")}</p>
                    <p className="text-gray-500 dark:text-zinc-400 text-xs">
                      {t("product.callUs")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-zinc-300">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-950 border border-gray-100 flex items-center justify-center shadow-sm dark:shadow-none">
                    <ShieldCheck className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-bold">{t("product.dataSecurity")}</p>
                    <p className="text-gray-500 dark:text-zinc-400 text-xs">{t("product.certified")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Solutions Section */}
        <div className="mt-20 border-t border-gray-200 dark:border-zinc-800 pt-16">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-sans font-bold mb-4 border border-purple-200 dark:border-purple-800/30">
              📦 {language === 'mr' ? "इतर शिफारस केलेली उत्पादने" : language === 'kn' ? "ಇತರ ಶಿಫಾರಸು ಮಾಡಿದ ಉತ್ಪನ್ನಗಳು" : language === 'hi' ? "अन्य अनुशंसित उत्पाद" : "Other Recommended Solutions"}
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
                  <Link href="/schedule-demo" className="block font-sans">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl text-xs transition-all shadow-sm hover:shadow-purple-600/25 font-sans">
                      {t("home.requestDemo")}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
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



