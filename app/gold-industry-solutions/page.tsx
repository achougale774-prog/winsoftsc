"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Gem,
  ArrowLeftRight,
  ShoppingBag,
  FileText,
  CalendarCheck,
  CheckCircle,
  Shield,
  Clock,
  TrendingUp,
  Award,
  BarChart3,
  Search,
  ChevronLeft,
  ChevronRight,
  Users,
  Coins,
  Archive,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { useLanguage } from "@/components/language-provider"
import { useMemo, useState } from "react"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function GoldIndustrySolutionsPage() {
  const { t, language } = useLanguage()
  const [activeImage, setActiveImage] = useState("/gold-image-new/gold_home_page.png")

  const goldImages = useMemo(() => [
    "/gold-image-new/gold_home_page.png",
    "/gold-image-new/gold_1.png",
    "/gold-image-new/gold_2.png",
    "/gold-image-new/inword_outword.png",
    "/gold-image-new/inword_outword2.png"
  ], [])

  const pageData = useMemo(() => {
    if (language === 'mr') {
      return {
        badge: "गोल्ड एक्सचेंज सोल्यूशन",
        heroTitle: "गोल्ड एक्सचेंज सॉफ्टवेअर",
        heroSubtitle: "सोने व्यापारी, सराफा डीलर, ज्वेलरी शॉप्स आणि गोल्ड एक्सचेंज व्यवसायांसाठी डिझाइन केलेली संपूर्ण ERP प्रणाली. लाइव्ह सोन्याचे दर, खरेदी-विक्री, इन्व्हेंटरी, अकाउंटिंग आणि रिपोर्टिंग सर्व काही एकाच सुरक्षित प्लॅटफॉर्मवर व्यवस्थापित करा.",
        solutionsTitle: "आमचे की-फीचर्स",
        solutionsDesc: "तुमच्या सुवर्ण विनिमय व्यवसायाची कार्यक्षमता वाढवण्यासाठी आणि कामकाज डिजिटल करण्यासाठी प्रगत वैशिष्ट्ये.",
        products: [
          {
            title: "१. लाइव्ह सोने आणि चांदीचे दर",
            icon: TrendingUp,
            description: "बाजारातील चढ-उतारांवर लक्ष ठेवण्यासाठी रिअल-टाइम मेटल दर व्यवस्थापन.",
            features: [
              "रिअल-टाइम सोन्याचे दर (24K, 22K, 18K)",
              "चांदीचे दर व्यवस्थापन",
              "स्वयंचलित दर अपडेट्स",
              "ऐतिहासिक किंमत तक्ते (Charts)",
              "मार्केट ओपन/क्लोज स्टेटस",
            ],
          },
          {
            title: "२. ग्राहक व्यवस्थापन",
            icon: Users,
            description: "ग्राहकांची नोंदणी, व्यवहार इतिहास आणि पत मर्यादा सुलभपणे व्यवस्थापित करा.",
            features: [
              "ग्राहक नोंदणी व प्रोफाइल",
              "KYC दस्तऐवज व्यवस्थापन",
              "ग्राहक वॉलेट / शिल्लक रक्कम",
              "क्रेडिट मर्यादा व्यवस्थापन",
              "ग्राहक खातेवही (Ledger)",
              "व्यवहारांचा इतिहास आणि लॉयल्टी प्रोग्राम",
            ],
          },
          {
            title: "३. सोने खरेदी (Buy Gold)",
            icon: Coins,
            description: "लाइव्ह सोन्याचे दर आणि अचूक हिशोबासह सुलभ खरेदी नोंदणी.",
            features: [
              "सोने खरेदी नोंदणी",
              "लाइव्ह दरानुसार स्वयंचलित गणना",
              "GST व कर गणना",
              "पेमेंट पद्धती (रोख, UPI, बँक, कार्ड)",
              "खरेदी इनव्हॉइस आणि पावती निर्मिती",
            ],
          },
          {
            title: "४. सोने विक्री (Sell Gold)",
            icon: ShoppingBag,
            description: "जलद बिलिंग, बारकोड स्कॅनिंग आणि अचूक विक्री व्यवस्थापन.",
            features: [
              "सोने विक्री नोंदणी",
              "इनव्हॉइस जनरेशन आणि बारकोड सपोर्ट",
              "डिस्काउंट व्यवस्थापन",
              "पेमेंट ट्रॅकिंग आणि डिलिव्हरी कन्फर्मेशन",
            ],
          },
          {
            title: "५. जुने सोने एक्सचेंज",
            icon: ArrowLeftRight,
            description: "जुन्या दागिन्यांच्या बदल्यात नवीन दागिने एक्सचेंजची संपूर्ण पारदर्शक प्रक्रिया.",
            features: [
              "जुन्या दागिन्यांची खरेदी व वजन नोंदणी",
              "शुद्धता (कॅरेट) पडताळणी",
              "दगडाचे वजन वजा करणे",
              "वितळण्याचे नुकसान (Melting loss) गणना",
              "निव्वळ सोन्याच्या मूल्याची गणना",
              "नवीन दागिन्यांच्या बदल्यात विनिमय आणि इनव्हॉइस",
            ],
          },
          {
            title: "६. इन्व्हेंटरी व्यवस्थापन",
            icon: Archive,
            description: "सोन्याच्या विटा, नाणी आणि दागिन्यांच्या साठ्याची रिअल-टाइम ट्रॅकिंग.",
            features: [
              "सोन्याच्या विटा (Gold bars) व नाणी (Coins) ट्रॅकिंग",
              "दागिन्यांचा साठा आणि चांदीची इन्व्हेंटरी",
              "वेअरहाऊस व बारकोड व्यवस्थापन",
              "कमी साठा इशारे (Low-stock alerts)",
              "स्टॉक ट्रान्सफर व्यवस्थापन",
            ],
          },
        ]
      };
    } else if (language === 'kn') {
      return {
        badge: "ಚಿನ್ನದ ವಿನಿಮಯ ಪರಿಹಾರ",
        heroTitle: "ಗೋಲ್ಡ್ ಎಕ್ಸ್ಚೇಂಜ್ ಸಾಫ್ಟ್‌ವೇರ್",
        heroSubtitle: "ಚಿನ್ನದ ವ್ಯಾಪಾರಿಗಳು, ಬುಲಿಯನ್ ವಿತರಕರು, ಆಭರಣ ಮಳಿಗೆಗಳು ಮತ್ತು ಚಿನ್ನದ ವಿನಿಮಯ ವ್ಯವಹಾರಗಳಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸಂಪೂರ್ಣ ERP ವ್ಯವಸ್ಥೆ. ಲೈವ್ ಚಿನ್ನದ ದರಗಳು, ಖರೀದಿ, ಮಾರಾಟ, ದಾಸ್ತಾನು ಮತ್ತು ವರದಿಗಳನ್ನು ಒಂದೇ ಸುರಕ್ಷಿತ ವೇದಿಕೆಯಲ್ಲಿ ನಿರ್ವಹಿಸಿ.",
        solutionsTitle: "ನಮ್ಮ ಪ್ರಮುಖ ವೈಶಿಷ್ಟ್ಯಗಳು",
        solutionsDesc: "ನಿಮ್ಮ ಚಿನ್ನದ ವ್ಯವಹಾರದ ದಕ್ಷತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಮತ್ತು ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ಡಿಜಿಟಲೈಸ್ ಮಾಡಲು ಸುಧಾರಿತ ವೈಶಿಷ್ಟ್ಯಗಳು.",
        products: [
          {
            title: "೧. ಲೈವ್ ಚಿನ್ನ ಮತ್ತು ಬೆಳ್ಳಿ ದರಗಳು",
            icon: TrendingUp,
            description: "ಮಾರುಕಟ್ಟೆಯ ಏರಿಳಿತಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ನೈಜ-ಸಮಯದ ಲೋಹದ ದರ ನಿರ್ವಹಣೆ.",
            features: [
              "ರಿಯಲ್-ಟೈಮ್ ಚಿನ್ನದ ದರಗಳು (24K, 22K, 18K)",
              "ಬೆಳ್ಳಿ ದರಗಳು",
              "ಸ್ವಯಂಚಾಲಿತ ದರ ನವೀಕರಣಗಳು",
              "ಐತಿಹಾಸಿಕ ಬೆಲೆ ಚಾರ್ಟ್‌ಗಳು",
              "ಮಾರುಕಟ್ಟೆ ಓಪನ್/ಕ್ಲೋಸ್ ಸ್ಥಿತಿ",
            ],
          },
          {
            title: "೨. ಗ್ರಾಹಕ ನಿರ್ವಹಣೆ",
            icon: Users,
            description: "ಗ್ರಾಹಕರ ನೋಂದಣಿ, ವಹಿವಾಟು ಇತಿಹಾಸ ಮತ್ತು ಕ್ರೆಡಿಟ್ ಮಿತಿಗಳನ್ನು ಸುಲಭವಾಗಿ ನಿರ್ವಹಿಸಿ.",
            features: [
              "ಗ್ರಾಹಕರ ನೋಂದಣಿ ಮತ್ತು ಪ್ರೊಫೈಲ್",
              "KYC ದಾಖಲೆ ನಿರ್ವಹಣೆ",
              "ಗ್ರಾಹಕ ವಾಲೆಟ್ / ಬಾಕಿ ಮೊತ್ತ",
              "ಕ್ರೆಡಿಟ್ ಮಿತಿ ನಿರ್ವಹಣೆ",
              "ಗ್ರಾಹಕ ಲೆಡ್ಜರ್ ಮತ್ತು ವಹಿವಾಟು ಇತಿಹಾಸ",
              "ಲಾಯಲ್ಟಿ ಪ್ರೋಗ್ರಾಂ",
            ],
          },
          {
            title: "೩. ಚಿನ್ನದ ಖರೀದಿ (Buy Gold)",
            icon: Coins,
            description: "ಲೈವ್ ಚಿನ್ನದ ದರಗಳು ಮತ್ತು ನಿಖರ ಲೆಕ್ಕಾಚಾರದೊಂದಿಗೆ ಸುಲಭ ಖರೀದಿ ಪ್ರವೇಶ.",
            features: [
              "ಚಿನ್ನದ ಖರೀದಿ ಪ್ರವೇಶ",
              "ಲೈವ್ ದರ ಸ್ವಯಂಚಾಲಿತ ಲೆಕ್ಕಾಚಾರ",
              "ಜಿಎಸ್ಟಿ ಮತ್ತು ತೆರಿಗೆ ಲೆಕ್ಕಾಚಾರ",
              "ಪಾವತಿ ವಿಧಾನಗಳು (ನಗದು, UPI, ಬ್ಯಾಂಕ್, ಕಾರ್ಡ್)",
              "ಖರೀದಿ ಇನ್‌ವಾಯ್ಸ್‌ಗಳು ಮತ್ತು ರಶೀದಿ ರಚನೆ",
            ],
          },
          {
            title: "೪. ಚಿನ್ನದ ಮಾರಾಟ (Sell Gold)",
            icon: ShoppingBag,
            description: "ವೇಗದ ಬಿಲ್ಲಿಂಗ್, ಬಾರ್‌ಕೋಡ್ ಸ್ಕ್ಯಾನಿಂಗ್ ಮತ್ತು ನಿಖರ ಮಾರಾಟ ನಿರ್ವಹಣೆ.",
            features: [
              "ಚಿನ್ನದ ಮಾರಾಟ ಪ್ರವೇಶ",
              "ಇನ್‌ವಾಯ್ಸ್ ರಚನೆ ಮತ್ತು ಬಾರ್‌ಕೋಡ್ ಬೆಂಬಲ",
              "ರಿಯಾಯಿತಿ ನಿರ್ವಹಣೆ",
              "ಪಾವತಿ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ವಿತರಣೆ ದೃಢೀಕರಣ",
            ],
          },
          {
            title: "೫. ಹಳೆಯ ಚಿನ್ನದ ವಿನಿಮಯ",
            icon: ArrowLeftRight,
            description: "ಹಳೆಯ ಆಭರಣಗಳ ಬದಲಿಗೆ ಹೊಸ ಆಭರಣಗಳ ವಿನಿಮಯದ ಸಂಪೂರ್ಣ ಪಾರದರ್ಶಕ ಪ್ರಕ್ರಿಯೆ.",
            features: [
              "ಹಳೆಯ ಆಭರಣಗಳ ಖರೀದಿ ಮತ್ತು ತೂಕ ಪ್ರವೇಶ",
              "ಶುದ್ಧತೆ (ಕ್ಯಾರೆಟ್) ಪರಿಶೀಲನೆ",
              "ಕಲ್ಲಿನ ತೂಕ ಕಡಿತ",
              "ಕರಗುವ ನಷ್ಟದ ಲೆಕ್ಕಾಚಾರ",
              "ನಿವ್ವಳ ಚಿನ್ನದ ಮೌಲ್ಯದ ಲೆಕ್ಕಾಚಾರ",
              "ಹೊಸ ಆಭರಣಗಳ ವಿನಿಮಯ ಮತ್ತು ಇನ್‌ವಾಯ್ಸ್",
            ],
          },
          {
            title: "೬. ದಾಸ್ತಾನು ನಿರ್ವಹಣೆ",
            icon: Archive,
            description: "ಚಿನ್ನದ ಗಟ್ಟಿಗಳು, ನಾಣ್ಯಗಳು ಮತ್ತು ಆಭರಣಗಳ ಸ್ಟಾಕ್‌ನ ನೈಜ-ಸಮಯದ ಟ್ರ್ಯಾಕಿಂಗ್.",
            features: [
              "ಚಿನ್ನದ ಗಟ್ಟಿಗಳು (Gold bars) ಮತ್ತು ನಾಣ್ಯಗಳ (Coins) ಟ್ರ್ಯಾಕಿಂಗ್",
              "ಆಭರಣಗಳ ಸ್ಟಾಕ್ ಮತ್ತು ಬೆಳ್ಳಿ ದಾಸ್ತಾನು",
              "ಗೋದಾಮು ಮತ್ತು ಬಾರ್‌ಕೋಡ್ ನಿರ್ವಹಣೆ",
              "ಕಡಿಮೆ ದಾಸ್ತಾನು ಎಚ್ಚರಿಕೆಗಳು",
              "ಸ್ಟಾಕ್ ವರ್ಗಾವಣೆ ನಿರ್ವಹಣೆ",
            ],
          },
        ]
      };
    } else if (language === 'hi') {
      return {
        badge: "गोल्ड एक्सचेंज समाधान",
        heroTitle: "गोल्ड एक्सचेंज सॉफ्टवेयर",
        heroSubtitle: "सोना व्यापारियों, सर्राफा डीलरों, आभूषण दुकानों और गोल्ड एक्सचेंज व्यवसायों के लिए डिज़ाइन की गई संपूर्ण ERP प्रणाली। लाइव सोने की दरों, खरीद-बिक्री, इन्वेंट्री, Accounting और रिपोर्टिंग को एक सुरक्षित प्लेटफॉर्म पर प्रबंधित करें।",
        solutionsTitle: "हमारे प्रमुख फीचर्स",
        solutionsDesc: "आपके स्वर्ण विनिमय व्यवसाय की दक्षता बढ़ाने और संचालन को डिजिटल बनाने के लिए उन्नत सुविधाएँ।",
        products: [
          {
            title: "१. लाइव सोना और चांदी की दरें",
            icon: TrendingUp,
            description: "बाजार के उतार-चढ़ाव पर नजर रखने के लिए रीयल-टाइम मेटल दर प्रबंधन।",
            features: [
              "रीयल-टाइम सोने की दरें (24K, 22K, 18K)",
              "चांदी की दर प्रबंधन",
              "स्वचालित दर अपडेट",
              "ऐतिहासिक मूल्य चार्ट (Charts)",
              "मार्केट ओपन/क्लोज स्टेटस",
            ],
          },
          {
            title: "२. ग्राहक प्रबंधन",
            icon: Users,
            description: "ग्राहकों का पंजीकरण, लेनदेन का इतिहास और क्रेडिट सीमा को आसानी से प्रबंधित करें।",
            features: [
              "ग्राहक पंजीकरण और प्रोफाइल",
              "KYC दस्तावेज़ प्रबंधन",
              "ग्राहक वॉलेट / शेष राशि",
              "क्रेडिट सीमा प्रबंधन",
              "ग्राहक बहीखाता (Ledger) और लेनदेन इतिहास",
              "लॉयल्टी प्रोग्राम",
            ],
          },
          {
            title: "३. सोना खरीद (Buy Gold)",
            icon: Coins,
            description: "लाइव सोने की दरों और सटीक गणना के साथ आसान खरीद प्रविष्टि।",
            features: [
              "सोना खरीद प्रविष्टि",
              "लाइव दर स्वचालित गणना",
              "GST और टैक्स गणना",
              "भुगतान विधियां (नकद, UPI, बैंक, कार्ड)",
              "खरीद चालान और रसीद निर्माण",
            ],
          },
          {
            title: "४. सोना बिक्री (Sell Gold)",
            icon: ShoppingBag,
            description: "तेज़ बिलिंग, बारकोड स्कैनिंग और सटीक बिक्री प्रबंधन।",
            features: [
              "सोना बिक्री प्रविष्टि",
              "चालान जनरेशन और बारकोड सपोर्ट",
              "छूट प्रबंधन",
              "भुगतान ट्रैकिंग और डिलीवरी की पुष्टि",
            ],
          },
          {
            title: "५. पुराना सोना एक्सचेंज",
            icon: ArrowLeftRight,
            description: "पुराने आभूषणों के बदले नए आभूषणों के एक्सचेंज की पूरी पारदर्शी प्रक्रिया।",
            features: [
              "पुराने आभूषणों की खरीद और वजन प्रविष्टि",
              "शुद्धता (कैरेट) सत्यापन",
              "पत्थर का वजन घटाना",
              "पिघलने का नुकसान (Melting loss) गणना",
              "शुद्ध सोने के मूल्य की गणना",
              "नए आभूषणों के बदले एक्सचेंज और चालान",
            ],
          },
          {
            title: "६. इन्वेंटरी प्रबंधन",
            icon: Archive,
            description: "सोने की छड़ें, सिक्के और आभूषणों के स्टॉक की रीयल-टाइम ट्रैकिंग।",
            features: [
              "सोने की छड़ें (Gold bars) और सिक्के (Coins) ट्रैकिंग",
              "आभूषण स्टॉक और चांदी की इन्वेंट्री",
              "वेयरहाउस और बारकोड प्रबंधन",
              "कम स्टॉक अलर्ट",
              "स्टॉक ट्रांसफर प्रबंधन",
            ],
          },
        ]
      };
    } else {
      return {
        badge: "Gold Exchange Solution",
        heroTitle: "Gold Exchange Software",
        heroSubtitle: "A complete ERP system designed for gold traders, bullion dealers, jewellery shops, refiners, and gold exchange businesses. Manage the entire process from live gold rates to buying, selling, inventory, accounting, and reporting in one secure platform.",
        solutionsTitle: "Key Features",
        solutionsDesc: "Advanced features tailored to power your gold exchange operations and digitalize daily business workflows.",
        products: [
          {
            title: "1. Live Gold & Silver Rates",
            icon: TrendingUp,
            description: "Real-time metal rate management to stay aligned with market fluctuations.",
            features: [
              "Real-time Gold (24K, 22K, 18K) rates",
              "Silver rates tracking",
              "Automatic rate updates",
              "Historical price charts",
              "Market open/closed status",
            ],
          },
          {
            title: "2. Customer Management",
            icon: Users,
            description: "Streamline customer onboarding, transaction history, and credit parameters.",
            features: [
              "Customer registration & profiling",
              "KYC document management",
              "Customer wallet/balance tracking",
              "Credit limit management",
              "Customer ledger and transaction history",
              "Loyalty program management",
            ],
          },
          {
            title: "3. Buy Gold",
            icon: Coins,
            description: "Seamless purchase entry linked with live rates and tax calculations.",
            features: [
              "Gold purchase entry",
              "Live rate automatic calculation",
              "GST and billing computation",
              "Multiple payment methods (Cash, UPI, Bank, Card)",
              "Purchase invoices and receipt generation",
            ],
          },
          {
            title: "4. Sell Gold",
            icon: ShoppingBag,
            description: "Accelerate sales with barcode scanning, custom invoicing, and order tracking.",
            features: [
              "Gold sales entry",
              "Invoice generation and barcode support",
              "Discount & scheme management",
              "Payment tracking and delivery confirmation",
            ],
          },
          {
            title: "5. Old Gold Exchange",
            icon: ArrowLeftRight,
            description: "Complete transparent old-to-new gold valuation, melting analysis, and invoicing.",
            features: [
              "Old jewellery purchase & weight entry",
              "Purity (Karat) verification",
              "Stone weight deduction",
              "Melting loss calculation",
              "Net gold value calculation",
              "Exchange against new jewellery with exchange invoice",
            ],
          },
          {
            title: "6. Inventory Management",
            icon: Archive,
            description: "Real-time stock tracking for bullion, coins, finished jewellery, and silver.",
            features: [
              "Gold bars and coins stock tracking",
              "Finished jewellery stock and silver inventory",
              "Warehouse & bin location management",
              "Barcode generation & scanning",
              "Low-stock alerts and stock transfer logs",
            ],
          },
        ]
      };
    }
  }, [language])

  const challenges = useMemo(() => [
    {
      title: t("gold.complexCalc"),
      description: t("gold.complexCalcDesc"),
      icon: BarChart3,
      color: "blue",
    },
    {
      title: t("gold.inventorySecurity"),
      description: t("gold.inventorySecurityDesc"),
      icon: Shield,
      color: "amber",
    },
    {
      title: t("gold.inconsistentBilling"),
      description: t("gold.inconsistentBillingDesc"),
      icon: Search,
      color: "green",
    },
  ], [t])

  const benefits = useMemo(() => [
    { title: t("about.yearsExp"), icon: Award, text: t("about.industrySpecialist") },
    { title: t("gold.financialAccuracy"), icon: TrendingUp, text: t("gold.financialAccuracyDesc") },
    { title: t("gold.complianceReady"), icon: Shield, text: t("gold.complianceReadyDesc") },
    { title: t("gold.instantSupport"), icon: Clock, text: t("gold.instantSupportDesc") },
  ], [t])

  const recommendedSolutions = useMemo(() => {
    if (language === 'mr') {
      return [
        {
          id: 1,
          title: "स्वयंचलित दूध संकलन प्रणाली (AMCS)",
          description: "दूध संकलन केंद्रांसाठी संगणकीकृत वजन काटा आणि FAT/SNF तपासणीचे स्वयंचलित एकत्रीकरण.",
          image: "/live-image-dairy/5.0.png",
          link: "/product/1",
          tag: "डेअरी सोल्यूशन"
        },
        {
          id: 2,
          title: "शेतकरी दूध पासबुक मोबाईल अॅप",
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
          id: "sugar",
          title: "साखर कारखाना व्यवस्थापन प्रणाली",
          description: "साखर कारखान्यांसाठी ऊस खरेदी, वजन काटा जोडणी, शेतकरी नोंदणी आणि संपूर्ण प्रशासकीय ERP सोल्यूशन.",
          image: "/sugerfac.png",
          link: "/sugar-factory-solutions",
          tag: "कारखाना सोल्यूशन"
        }
      ]
    } else if (language === 'kn') {
      return [
        {
          id: 1,
          title: "ಸ್ವಯಂಚಾಲಿತ ಹಾಲು ಸಂಗ್ರಹಣೆ ವ್ಯವಸ್ಥೆ (AMCS)",
          description: "ಹಾಲು ಸಂಗ್ರಹಣಾ ಕೇಂದ್ರಗಳಿಗಾಗಿ ಕಂಪ್ಯೂಟರೀಕೃತ ತೂಕದ ಪ್ರಮಾಣ ಮತ್ತು FAT/SNF ಪರೀಕ್ಷೆಯ ಸ್ವಯಂಚಾಲಿತ ಏಕೀಕರಣ.",
          image: "/live-image-dairy/5.0.png",
          link: "/product/1",
          tag: "ಡೈರಿ ಪರಿಹಾರ"
        },
        {
          id: 2,
          title: "ರೈತರ ಹಾಲು ಪಾಸ್ಬುಕ್ ಮೊಬೈಲ್ ಆಪ್",
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
          id: "sugar",
          title: "ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ",
          description: "ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆಗಳಿಗಾಗಿ ಕಬ್ಬು ಖರೀದಿ, ತೂಕದ ಪ್ರಮಾಣ ಜೋಡಣೆ, ರೈತರ ನೋಂದಣಿ ಮತ್ತು ಸಂಪೂರ್ಣ ಆಡಳಿತಾತ್ಮಕ ERP ಪರಿಹಾರ.",
          image: "/sugerfac.png",
          link: "/sugar-factory-solutions",
          tag: "ಕಾರ್ಖಾನೆ ಪರಿಹಾರ"
        }
      ]
    } else if (language === 'hi') {
      return [
        {
          id: 1,
          title: "स्वचालित दूध संग्रह प्रणाली (AMCS)",
          description: "दूध संग्रह केंद्रों के लिए कम्प्यूटरीकृत वजन कांटा और FAT/SNF परीक्षण का स्वचालित एकीकरण.",
          image: "/live-image-dairy/5.0.png",
          link: "/product/1",
          tag: "डेयरी समाधान"
        },
        {
          id: 2,
          title: "किसान दूध पासबुक मोबाइल ऐप",
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
          id: "sugar",
          title: "चीनी मिल प्रबंधन प्रणाली",
          description: "चीनी मिलों के लिए गन्ना खरीद, वजन कांटा एकीकरण, किसान पंजीकरण और संपूर्ण प्रशासनिक ERP समाधान.",
          image: "/sugerfac.png",
          link: "/sugar-factory-solutions",
          tag: "फैक्ट्री समाधान"
        }
      ]
    } else {
      return [
        {
          id: 1,
          title: "Automatic Milk Collection System (AMCS)",
          description: "Complete computerized weighing scale and FAT/SNF testing integration for seamless village milk collection.",
          image: "/live-image-dairy/5.0.png",
          link: "/product/1",
          tag: "Dairy Solution"
        },
        {
          id: 2,
          title: "Farmer Milk Passbook App",
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
          id: "sugar",
          title: "Sugar Factory Enterprise Solutions",
          description: "Complete ERP system for sugar factories to manage cane procurement, weighbridge operations, farmer billing, and factory accounts.",
          image: "/sugerfac.png",
          link: "/sugar-factory-solutions",
          tag: "Enterprise Solution"
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
                  <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <Gem className="h-6 w-6 text-amber-600" />
                  </div>
                  <Badge variant="secondary" className="px-3 py-1 font-sans bg-amber-50 text-amber-700 border-amber-200">
                    {pageData.badge}
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-6xl font-sans font-bold mb-6 text-gray-900 dark:text-zinc-100 leading-tight">
                  {pageData.heroTitle}
                </h1>
                <p className="text-xl text-gray-600 dark:text-zinc-400 font-serif leading-relaxed mb-8">
                  {pageData.heroSubtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact?inquiryType=demo">
                    <Button
                      size="lg"
                      className="font-sans font-semibold px-8 py-3 bg-[#1E94A4] hover:bg-[#0B7989] text-white"
                    >
                      {t("hero.cta1")}
                    </Button>
                  </Link>
                  <a href="tel:+919423039902">
                    <Button variant="outline" size="lg" className="font-sans font-semibold px-8 py-3 bg-[#25D366] hover:bg-[#1EBE5D] border-none text-white shadow-lg shadow-[#25D366]/20">
                      📞 {language === 'mr' ? 'कॉल करा' : 'Call Now'}
                    </Button>
                  </a>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative w-full aspect-[4/3] border border-gray-200 dark:border-zinc-800 rounded-3xl overflow-hidden bg-black flex items-center justify-center shadow-lg dark:shadow-none group">
                  <Image
                    src={activeImage}
                    alt="Goldwin Software Screen"
                    fill
                    className="object-contain p-2 transition-all duration-300"
                  />
                  <button
                    onClick={() => {
                      const idx = goldImages.indexOf(activeImage)
                      const prevIdx = (idx - 1 + goldImages.length) % goldImages.length
                      setActiveImage(goldImages[prevIdx])
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10 focus:outline-none cursor-pointer"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => {
                      const idx = goldImages.indexOf(activeImage)
                      const nextIdx = (idx + 1) % goldImages.length
                      setActiveImage(goldImages[nextIdx])
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10 focus:outline-none cursor-pointer"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  {goldImages.map((img, idx) => (
                    <div
                      key={idx}
                      className={`relative w-20 h-16 border-2 rounded-xl cursor-pointer overflow-hidden transition-all ${activeImage === img
                          ? "border-[#1E94A4] shadow-md scale-105"
                          : "border-gray-200 dark:border-zinc-800 hover:border-amber-300"
                        }`}
                      onClick={() => setActiveImage(img)}
                      onMouseEnter={() => setActiveImage(img)}
                    >
                      <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-4">
                {t("gold.manualProcessTitle")}
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 font-serif max-w-2xl mx-auto text-lg">
                {t("gold.manualProcessDesc")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {challenges.map((item, idx) => (
                <Card key={idx} className="border-0 shadow-sm dark:shadow-none hover:shadow-md dark:shadow-none transition-shadow">
                  <CardHeader>
                    <div className={`bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                      <item.icon className={`h-6 w-6 text-amber-600`} />
                    </div>
                    <CardTitle className="text-xl font-sans font-bold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-zinc-400 font-serif">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Software Products */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-4">
                {pageData.solutionsTitle}
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 font-serif text-lg">
                {pageData.solutionsDesc}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pageData.products.map((product, idx) => (
                <Card key={idx} className="border border-slate-100 dark:border-zinc-800 hover:border-amber-200 transition-colors bg-white dark:bg-zinc-950 shadow-sm dark:shadow-none hover:shadow-lg dark:shadow-none overflow-hidden flex flex-col">
                  <div className="p-8 flex-1">
                    <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                      <product.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-3">{product.title}</h3>
                    <p className="text-gray-600 dark:text-zinc-400 font-serif mb-6">{product.description}</p>
                    <ul className="space-y-3">
                      {product.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-zinc-300 font-serif">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-8 bg-slate-50 dark:bg-black border-t border-slate-100 dark:border-zinc-800">
                    <div className="grid grid-cols-2 gap-2">
                      <Link href="/contact?inquiryType=demo">
                        <Button className="w-full bg-[#1E94A4] hover:bg-[#0B7989] text-white font-sans font-semibold text-xs sm:text-sm">
                          {t("gold.getDemo")}
                        </Button>
                      </Link>
                      <a href="tel:+919423039902">
                        <Button className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans font-semibold text-xs sm:text-sm">
                          📞 {language === 'mr' ? 'कॉल करा' : 'Call'}
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust/Benefits Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-sans font-bold mb-8">
                  {t("gold.whyChooseGold")}
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="bg-white dark:bg-zinc-950/10 p-3 rounded-lg flex-shrink-0">
                        <benefit.icon className="h-6 w-6 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-lg mb-1">{benefit.title}</h4>
                        <p className="text-slate-400 font-serif">{benefit.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-950/5 p-8 rounded-2xl border border-white/10 h-full flex flex-col justify-center">
                <blockquote className="text-2xl font-serif italic mb-8 leading-relaxed text-slate-300">
                  "{t("gold.goldQuote")}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center font-bold text-lg">J</div>
                  <div>
                    <div className="font-bold">{t("gold.shopOwner")}</div>
                    <div className="text-slate-500 text-sm">{t("gold.mumbaiIndia")}</div>
                  </div>
                </div>
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
                    <div className="grid grid-cols-2 gap-2">
                      <Link href="/contact?inquiryType=demo" className="block font-sans">
                        <Button className="w-full bg-[#1E94A4] hover:bg-[#0B7989] text-white font-bold py-4 rounded-xl text-[10px] sm:text-xs transition-all shadow-sm hover:shadow-[#1E94A4]/25 font-sans">
                          {t("home.requestDemo")}
                        </Button>
                      </Link>
                      <a href="tel:+919423039902" className="block font-sans">
                        <Button className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-4 rounded-xl text-[10px] sm:text-xs transition-all shadow-sm hover:shadow-[#25D366]/25 font-sans">
                          📞 {language === 'mr' ? 'कॉल करा' : 'Call Now'}
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#1E94A4] to-[#0B7989] rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-sans font-bold mb-6">
              {t("gold.elevateBusinessTitle")}
            </h2>
            <p className="text-xl opacity-90 mb-10 font-serif max-w-2xl mx-auto">
              {t("gold.elevateBusinessDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?inquiryType=demo">
                <Button size="lg" className="bg-white dark:bg-zinc-950 text-[#1E94A4] hover:bg-slate-100 font-sans font-bold px-10">
                  {t("gold.getStartedNow")}
                </Button>
              </Link>
              <a href="tel:+919423039902">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white dark:bg-zinc-950/10 font-sans font-bold px-10 bg-transparent">
                  📞 {language === 'mr' ? 'कॉल करा' : 'Call Expert'}
                </Button>
              </a>
              <WhatsAppButton productName={pageData.heroTitle} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
