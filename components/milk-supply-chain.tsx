"use client"

import React, { useState, useEffect } from "react"
import { useLanguage } from "./language-provider"
import { RefreshCw, Radio } from "lucide-react"

// Node SVG Components representing the different entities in the dairy flow
const NodeIcons = [
  // 0: Cowshed / Farmer (Farm milking)
  () => (
    <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="22" width="52" height="34" rx="4" className="fill-emerald-500/10 stroke-emerald-500" strokeWidth="2.5" />
      <path d="M4 22L32 4l28 18" className="stroke-emerald-500" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 56V38h20v18" className="stroke-emerald-500" strokeWidth="2.5" />
      <circle cx="32" cy="22" r="5" className="fill-emerald-500/20 stroke-emerald-500" strokeWidth="2" />
      <path d="M14 34h6M44 34h6" className="stroke-emerald-500" strokeWidth="2" />
    </svg>
  ),
  // 1: Mobile Bike Collection (Motorbike with milk cans)
  () => (
    <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="46" r="8" className="stroke-cyan-500" strokeWidth="3" />
      <circle cx="46" cy="46" r="8" className="stroke-cyan-500" strokeWidth="3" />
      <path d="M18 46h28M18 38l8-14h14l6 22M32 24v14" className="stroke-cyan-500" strokeWidth="3" strokeLinecap="round" />
      <rect x="8" y="18" width="8" height="14" rx="1.5" className="fill-cyan-500/20 stroke-cyan-500" strokeWidth="2" />
      <path d="M10 18V14h4v4" className="stroke-cyan-500" strokeWidth="2" />
    </svg>
  ),
  // 2: Portable Collection Vehicle (Pickup truck)
  () => (
    <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 42V20h30v22H4z" className="fill-blue-500/10 stroke-blue-500" strokeWidth="3" />
      <path d="M34 28h14l8 6v8H34V28z" className="fill-blue-500/20 stroke-blue-500" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="14" cy="44" r="6" className="stroke-blue-500" strokeWidth="3" />
      <circle cx="42" cy="44" r="6" className="stroke-blue-500" strokeWidth="3" />
      <rect x="10" y="10" width="7" height="10" rx="1.5" className="stroke-blue-500" strokeWidth="2" />
      <rect x="21" y="10" width="7" height="10" rx="1.5" className="stroke-blue-500" strokeWidth="2" />
    </svg>
  ),
  // 3: Dairy Supplier Center (Weight scale & analyzer table)
  () => (
    <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 44h56M10 44v14M54 44v14" className="stroke-[#1E94A4]" strokeWidth="3" strokeLinecap="round" />
      <rect x="12" y="24" width="16" height="20" rx="2" className="fill-[#1E94A4]/10 stroke-[#1E94A4]" strokeWidth="2.5" />
      <rect x="36" y="18" width="14" height="26" rx="3" className="fill-[#1E94A4]/20 stroke-[#1E94A4]" strokeWidth="2.5" />
      <path d="M40 18V12h6v6" className="stroke-[#1E94A4]" strokeWidth="2" />
      <circle cx="20" cy="34" r="3" className="fill-[#1E94A4]" />
    </svg>
  ),
  // 4: Individual Dairy Office (Desk, monitor & charts)
  () => (
    <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="48" height="30" rx="3" className="fill-indigo-500/10 stroke-indigo-500" strokeWidth="3" />
      <path d="M22 42v12h20V42" className="stroke-indigo-500" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 54h36" className="stroke-indigo-500" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 34l10-8l8 6l14-12" className="stroke-emerald-500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // 5: Tanker Transport / Truck Sheet (Large milk tanker truck)
  () => (
    <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="14" width="38" height="26" rx="13" className="fill-teal-500/10 stroke-teal-500" strokeWidth="3" />
      <path d="M42 20h10l8 8v14H42V20z" className="fill-teal-500/20 stroke-teal-500" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="14" cy="44" r="6" className="stroke-teal-500" strokeWidth="3" />
      <circle cx="30" cy="44" r="6" className="stroke-teal-500" strokeWidth="3" />
      <circle cx="48" cy="44" r="6" className="stroke-teal-500" strokeWidth="3" />
      <path d="M8 27h30" className="stroke-teal-500" strokeWidth="2" strokeDasharray="3 3" />
    </svg>
  ),
  // 6: Milk Processing Plant (Dairy factory towers)
  () => (
    <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="16" width="18" height="38" rx="4" className="fill-violet-500/10 stroke-violet-500" strokeWidth="3" />
      <rect x="30" y="8" width="22" height="46" rx="4" className="fill-violet-500/20 stroke-violet-500" strokeWidth="3" />
      <path d="M26 26h4M26 38h4" className="stroke-violet-500" strokeWidth="3" />
      <path d="M52 20h6v20h-6" className="stroke-violet-500" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="41" cy="26" r="3" className="fill-violet-500" />
    </svg>
  )
]

const translations = {
  en: {
    title: "Dairy Procurement & Logistics Map",
    subtitle: "Real-time milk collection network connecting cowsheds, mobile collection agents, rural cooperative societies, and processing plants.",
    liveSync: "Live Telemetry Map Active",
    hoverPrompt: "Hover over any node to trace the workflow path",
    nodes: [
      {
        title: "Cowshed / Farmer",
        desc: "Farmers milk cows and input cattle feed data.",
        detailTitle: "Farm Telemetry:",
        details: ["Cow Health Logs", "Milking Volume Sync", "SMS Receipts"]
      },
      {
        title: "Mobile Bike Collection",
        desc: "Bluetooth scale collection on bikes in remote areas.",
        detailTitle: "Mobile Kit Telemetry:",
        details: ["Bluetooth Weight Sync", "Offline Data Sync", "Agent App Status"]
      },
      {
        title: "Portable Collection",
        desc: "Milk collection using auto/pickup transit vehicles.",
        detailTitle: "Vehicle Telemetry:",
        details: ["GPS Route Tracking", "Can Count Sync", "Transit Slip Logs"]
      },
      {
        title: "Dairy Supplier",
        desc: "Computerized FAT/SNF testing and voice rate announcement.",
        detailTitle: "Center Telemetry:",
        details: ["Weigh Scale Hookup", "FAT/SNF Analyzer Sync", "Voice Announcement Output"]
      },
      {
        title: "Individual dairy",
        desc: "Cooperative society billing, ledgers, and accounts.",
        detailTitle: "Society ERP Telemetry:",
        details: ["10-Day Automated Billing", "Advance Reductions", "Audit Trail Verification"]
      },
      {
        title: "Truck Sheet",
        desc: "Chilled milk tanker dispatch to dairy plants.",
        detailTitle: "Logistics Telemetry:",
        details: ["Chilled Temperature Tracker", "Dispatch Slip Sync", "Route Optimizer"]
      },
      {
        title: "Milk Plant",
        desc: "Pasteurization, packaging, and product distribution ERP.",
        detailTitle: "Factory Telemetry:",
        details: ["Batch Quality Analysis", "Inventory Management", "Distributor ERP billing"]
      }
    ]
  },
  mr: {
    title: "दुग्ध संकलन व वाहतूक नकाशा",
    subtitle: "गोठे, फिरते संकलन प्रतिनिधी, ग्रामीण सहकारी संस्था आणि प्रक्रिया प्रकल्प यांना जोडणारे रिअल-टाइम दुग्ध नेटवर्क.",
    liveSync: "थेट डेटा नकाशा सक्रिय",
    hoverPrompt: "प्रवाह आणि जोडणाऱ्या रेषा पाहण्यासाठी कोणत्याही केंद्रावर माउस न्या",
    nodes: [
      {
        title: "गोठा / शेतकरी",
        desc: "शेतकरी दूध संकलन आणि पशूखाद्य आहाराची नोंद ठेवतात.",
        detailTitle: "गोठा थेट डेटा प्रवाह:",
        details: ["गाय/म्हैस नोंदणी", "दूध काढण्याची मात्रा", "झटपट SMS सूचना"]
      },
      {
        title: "मोबाईल बाईक संकलन",
        desc: "ब्लूटूथ वजन काट्याद्वारे दुर्गम भागातून थेट बाईकवर दूध संकलन.",
        detailTitle: "बाईक कीट थेट डेटा प्रवाह:",
        details: ["ब्लूटूथ काटा सिंक", "ऑफलाइन संकलन सपोर्ट", "प्रतिनिधी ॲप स्टेटस"]
      },
      {
        title: "पोर्टेबल संकलन",
        desc: "पिकअप किंवा ऑटो ट्रान्झिटद्वारे विविध गावांमधून थेट दूध संकलन.",
        detailTitle: "वाहन थेट डेटा प्रवाह:",
        details: ["GPS मार्ग ट्रॅकिंग", "कॅन संख्या मोजणी", "वाहतूक डिस्पॅच नोंद"]
      },
      {
        title: "डेअरी सप्लायर",
        desc: "संगणकीय वजन काटा, फॅट तपासणी आणि व्हॉइस अनाउन्समेंट दर फलक.",
        detailTitle: "संकलन केंद्र थेट डेटा प्रवाह:",
        details: ["काटा मशीन जोडणी", "फॅट/SNF विश्लेषक सिंक", "व्हॉइस अनाउन्समेंट"]
      },
      {
        title: "वैयक्तिक डेअरी",
        desc: "सभासद हिशोब, बिलांमधून अॅडव्हान्स कपात आणि ऑडिट अहवाल.",
        detailTitle: "डेअरी ERP थेट डेटा प्रवाह:",
        details: ["१० दिवसांचे ऑटो बिलिंग", "पशूखाद्य रक्कम कपात", "वित्तीय लेजर अहवाल"]
      },
      {
        title: "ट्रक शीट",
        desc: "दुधाचे तापमान नियंत्रित ठेवून इन्सुलेटेड टँकरद्वारे प्रक्रिया प्रकल्पाकडे पाठवणे.",
        detailTitle: "लॉजिस्टिक्स थेट डेटा प्रवाह:",
        details: ["तापमान नियंत्रण ट्रॅकर", "डिस्पॅच पावती सिंक", "रूट ऑप्टिमायझेशन"]
      },
      {
        title: "मिल्क प्लांट",
        desc: "पाश्चरायझेशन, पॅकेजिंग आणि विविध दुग्धजन्य पदार्थांची निर्मिती.",
        detailTitle: "प्रकल्प थेट डेटा प्रवाह:",
        details: ["बॅच गुणवत्ता चाचणी", "उत्पादन साठा व्यवस्थापन", "डिस्ट्रिब्युटर ERP बिलिंग"]
      }
    ]
  },
  kn: {
    title: "ಡೈರಿ ಸಂಗ್ರಹಣೆ ಮತ್ತು ಲಾಜಿಸ್ಟಿಕ್ಸ್ ನಕ್ಷೆ",
    subtitle: "ಕೊಟ್ಟಿಗೆಗಳು, ಮೊಬೈಲ್ ಸಂಗ್ರಹಣಾ ಏಜೆಂಟರು, ಗ್ರಾಮೀಣ ಸಹಕಾರಿ ಸಂಘಗಳು ಮತ್ತು ಸಂಸ್ಕರಣಾ ಘಟಕಗಳನ್ನು ಸಂಪರ್ಕಿಸುವ ನೈಜ-ಸಮಯದ ಡೈರಿ ನೆಟ್‌ವರ್ಕ್.",
    liveSync: "ಲೈವ್ ಟೆಲಿಮೆಟ್ರಿ ನಕ್ಷೆ ಸಕ್ರಿಯವಾಗಿದೆ",
    hoverPrompt: "ಕಾರ್ಯಪ್ರವಾಹದ ಮಾರ್ಗವನ್ನು ಪತ್ತೆಹಚ್ಚಲು ಯಾವುದೇ ಕೇಂದ್ರದ ಮೇಲೆ ಮೌಸ್ ಇರಿಸಿ",
    nodes: [
      {
        title: "ಕೊಟ್ಟಿಗೆ / ರೈತರು",
        desc: "ರೈತರು ಹಾಲನ್ನು ಕರೆದು ಪಶು ಆಹಾರದ ಬಳಕೆಯನ್ನು ದಾಖಲಿಸುತ್ತಾರೆ.",
        detailTitle: "ಕೊಟ್ಟಿಗೆ ಟೆಲಿಮೆಟ್ರಿ:",
        details: ["ಹಸು ಆರೋಗ್ಯ ದಾಖಲೆ", "ಹಾಲು ಸಂಗ್ರಹ ಪ್ರಮಾಣ", "SMS ಅಧಿಸೂಚನೆ"]
      },
      {
        title: "ಮೊಬೈಲ್ ಬೈಕ್ ಸಂಗ್ರಹ",
        desc: "ದೂರದ ಪ್ರದೇಶಗಳಲ್ಲಿ ಬೈಕ್ ಬಳಸಿ ಬ್ಲೂಟೂತ್ ತೂಕದ ಮೂಲಕ ಹಾಲು ಸಂಗ್ರಹಣೆ.",
        detailTitle: "ಮೊಬೈಲ್ ಕಿಟ್ ಟೆಲಿಮೆಟ್ರಿ:",
        details: ["ಬ್ಲೂಟೂತ್ ತೂಕ ಸಿಂಕ್", "ಆಫ್‌ಲೈನ್ ಡೇಟಾ ಸಿಂಕ್", "ಏಜೆಂಟ್ ಆಪ್ ಸ್ಥಿತಿ"]
      },
      {
        title: "ಪೋರ್ಟಬಲ್ ಸಂಗ್ರಹ",
        desc: "ಆಟೋ/ಪಿಕಪ್ ವಾಹನಗಳನ್ನು ಬಳಸಿಕೊಂಡು ಹಾಲು ಸಂಗ್ರಹಣೆ.",
        detailTitle: "ವಾಹನ ಟೆಲಿಮೆಟ್ರಿ:",
        details: ["GPS ಮಾರ್ಗ ಟ್ರ್ಯಾಕಿಂಗ್", "ಕ್ಯಾನ್ ಸಂಖ್ಯೆ ಸಿಂಕ್", "ಸಾರಿಗೆ ಚೀಟಿ ದಾಖಲೆ"]
      },
      {
        title: "ಡೈರಿ ಸಪ್ಲೈಯರ್",
        desc: "ಕಂಪ್ಯೂಟರೀಕೃತ ತೂಕ आणि ಫ್ಯಾಟ್ ಪರೀಕ್ಷೆ ಹಾಗೂ ಧ್ವನಿ ದರ ಘೋಷಣೆ.",
        detailTitle: "ಕೇಂದ್ರ ಟೆಲಿಮೆಟ್ರಿ:",
        details: ["ತೂಕದ ಪ್ರಮಾಣ ಜೋಡಣೆ", "FAT/SNF ವಿಶ್ಲೇಷಕ ಸಿಂಕ್", "ಧ್ವನಿ ಘೋಷಣೆ ಔಟ್‌ಪುಟ್"]
      },
      {
        title: "ವೈಯಕ್ತಿಕ ಡೈರಿ",
        desc: "ಸಹಕಾರಿ ಸಂಘದ ಬಿಲ್ಲಿಂಗ್, ಲೆಡ್ಜರ್‌ಗಳು ಮತ್ತು ಖಾತೆಗಳ ನಿರ್ವಹಣೆ.",
        detailTitle: "ಸಂಘದ ERP ಟೆಲಿಮೆಟ್ರಿ:",
        details: ["೧೦ ದಿನಗಳ ಆಟೋ ಬಿಲ್ಲಿಂಗ್", "ಮುಂಗಡ ಕಡಿತಗಳು", "ಆಡಿಟ್ ವರದಿ ಪರಿಶೀಲನೆ"]
      },
      {
        title: "ಟ್ರಕ್ ಶೀಟ್",
        desc: "ಹಾಲನ್ನು ತಂಪುಗೊಳಿಸುವ ಕಂಟೈನರ್‌ಗಳ ಮೂಲಕ ಸಂಸ್ಕರಣಾ ಘಟಕಗಳಿಗೆ ಸಾಗಿಸುವುದು.",
        detailTitle: "ಲಾಜಿಸ್ಟಿಕ್ಸ್ ಟೆಲಿಮೆಟ್ರಿ:",
        details: ["ತಾಪಮಾನ ಟ್ರ್ಯಾಕರ್", "ರವಾನೆ ಚೀಟಿ ಸಿಂಕ್", "ಮಾರ್ಗ ಆಪ್ಟಿಮೈಸೇಶನ್"]
      },
      {
        title: "ಮಿಲ್ಕ್ ಪ್ಲಾಂಟ್",
        desc: "ಪಾಶ್ಚರೀಕರಣ, ಪ್ಯಾಕೇಜಿಂಗ್ ಮತ್ತು ವಿತರಕರ ಬಿಲ್ಲಿಂಗ್ ERP.",
        detailTitle: "ಘಟಕ ಟೆಲಿಮೆಟ್ರಿ:",
        details: ["ಬ್ಯಾಚ್ ಗುಣಮಟ್ಟ ವಿಶ್ಲೇಷಣೆ", "ದಾಸ್ತಾನು ನಿರ್ವಹಣೆ", "ವಿತರಕರ ಬಿಲ್ಲಿಂಗ್ ERP"]
      }
    ]
  },
  hi: {
    title: "डेयरी खरीद और रसद मानचित्र",
    subtitle: "गोशालाओं, मोबाइल संग्रह एजेंटों, ग्रामीण सहकारी समितियों और प्रसंस्करण संयंत्रों को जोड़ने वाला रीयल-टाइम डेयरी नेटवर्क।",
    liveSync: "लाइव टेलीमेट्री मानचित्र सक्रिय",
    hoverPrompt: "कार्यप्रवाह पथ का पता लगाने के लिए किसी भी नोड पर कर्सर लाएं",
    nodes: [
      {
        title: "गोशाला / किसान",
        desc: "किसान गाय का दूध दुहते हैं और पशु चारा सेवन का रिकॉर्ड रखते हैं.",
        detailTitle: "फार्म टेलीमेट्री:",
        details: ["पशु स्वास्थ्य लॉग", "दूध निकालने की मात्रा", "SMS रसीदें"]
      },
      {
        title: "मोबाइल बाइक संग्रह",
        desc: "दूरदराज के क्षेत्रों में बाइक पर ब्लूटूथ वजन द्वारा दूध संग्रह.",
        detailTitle: "मोबाइल किट टेलीमेट्री:",
        details: ["ब्लूटूथ वजन सिंक", "ऑफ़लाइन डेटा सिंक", "एजेंट ऐप स्थिति"]
      },
      {
        title: "पोर्टेबल संग्रह",
        desc: "ऑटो या पिकअप पारगमन वाहनों का उपयोग करके दूध संग्रह.",
        detailTitle: "वाहन टेलीमेट्री:",
        details: ["GPS मार्ग  ट्रैकिंग", "कैन संख्या सिंक", "पारगमन पर्ची लॉग"]
      },
      {
        title: "डेयरी सप्लायर",
        desc: "कम्प्यूटरीकृत वजन, फैट जांच और आवाज घोषणा दर तालिका.",
        detailTitle: "केंद्र टेलीमेट्री:",
        details: ["वजन स्केल हुकअप", "फैट/SNF विश्लेषक सिंक", "आवाज घोषणा आउटपुट"]
      },
      {
        title: "व्यक्तिगत डेयरी",
        desc: "सहकारी समिति बिलिंग, बहीखाता और खातों का प्रबंधन.",
        detailTitle: "समिति ERP टेलीमेट्री:",
        details: ["१०-दिवसीय स्वचालित बिलिंग", "अग्रिम कटौती", "ऑडिट रिपोर्ट सत्यापन"]
      },
      {
        title: "ट्रक शीट",
        desc: "दूध का तापमान नियंत्रित रखकर इंसुलेटेड टैंकरों द्वारा प्रोसेसिंग प्लांट तक सुरक्षित परिवहन.",
        detailTitle: "रसद टेलीमेट्री:",
        details: ["तापमान नियंत्रण ट्रैकर", "डिस्पैच पर्ची सिंक", "रूट ऑप्टिमाइज़र"]
      },
      {
        title: "मिल्क प्लांट",
        desc: "पाश्चुरीकरण, पैकेजिंग और वितरक बिलिंग ERP.",
        detailTitle: "फैक्ट्री टेलीमेट्री:",
        details: ["बैच गुणवत्ता विश्लेषण", "इन्वेंटरी प्रबंधन", "वितरक ERP बिलिंग"]
      }
    ]
  }
}

const nodeImages = [
  "/milk-dairy/village-1.jpg",         // 0: Cowshed / Farmer
  "/milk-dairy/collection-bike.webp",  // 1: Mobile Bike Collection
  "/milk-dairy/portable.jpg",          // 2: Portable Collection
  "/milk-dairy/village-3.jpg",         // 3: Dairy Supplier
  "/milk-dairy/indivisual-milk.webp",  // 4: Individual dairy
  "/milk-dairy/trucksheet-1.webp",     // 5: Truck Sheet
  "/milk-dairy/milk-plant.jpg"         // 6: Milk Plant
]

// Map coordinates and positions (matched to a 1000x600 SVG viewBox grid)
const mapNodes = [
  { id: 0, x: 140, y: 460, left: "14%", top: "76.6%" }, // Cowshed
  { id: 1, x: 450, y: 490, left: "45%", top: "81.6%" }, // Mobile Bike
  { id: 2, x: 820, y: 460, left: "82%", top: "76.6%" }, // Portable Vehicle
  { id: 3, x: 160, y: 230, left: "16%", top: "38.3%" }, // Dairy Supplier
  { id: 4, x: 540, y: 320, left: "54%", top: "53.3%" }, // Individual Dairy
  { id: 5, x: 480, y: 110, left: "48%", top: "18.3%" }, // Truck Sheet
  { id: 6, x: 820, y: 140, left: "82%", top: "23.3%" }  // Milk Plant
]

// Curved road pathways connecting the nodes
const roads = [
  { from: 0, to: 1, d: "M 140 460 C 230 480, 340 490, 450 490" },
  { from: 1, to: 2, d: "M 450 490 C 570 480, 700 480, 820 460" },
  { from: 0, to: 3, d: "M 140 460 C 100 380, 110 300, 160 230" },
  { from: 3, to: 4, d: "M 160 230 C 270 250, 410 280, 540 320" },
  { from: 1, to: 4, d: "M 450 490 C 480 440, 510 380, 540 320" },
  { from: 4, to: 5, d: "M 540 320 C 520 250, 500 180, 480 110" },
  { from: 5, to: 6, d: "M 480 110 C 590 100, 710 110, 820 140" },
  { from: 2, to: 6, d: "M 820 460 C 860 360, 860 240, 820 140" }
]

export function MilkSupplyChain() {
  const { language } = useLanguage()
  const [activeStep, setActiveStep] = useState<number>(0)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true)

  const content = translations[language] || translations.en
  const currentStep = hoveredStep !== null ? hoveredStep : activeStep

  // Auto-play cycling to show active live data flow
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 7)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleMouseEnter = (index: number) => {
    setHoveredStep(index)
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setHoveredStep(null)
    setIsAutoPlaying(true)
  }

  // Determine if a road is currently active (should display flowing pulse animation)
  const isRoadActive = (fromNode: number) => {
    return currentStep === fromNode
  }

  return (
    <section id="map" className="py-20 relative overflow-hidden bg-gray-50/50 dark:bg-zinc-950/20 border-y border-gray-200/50 dark:border-zinc-800/40">
      {/* Background soft tech grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Title & Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-4 border border-emerald-500/20 shadow-sm animate-pulse">
            <Radio className="w-4 h-4" />
            <span>{content.liveSync}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-zinc-50 mb-4 leading-tight">
            {content.title}
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed">
            {content.subtitle}
          </p>
          <p className="text-xs text-gray-400 dark:text-zinc-500 mt-3 italic">
            {content.hoverPrompt}
          </p>
        </div>

        {/* Responsive Connected Spatial Map Layout */}
        <div className="relative w-full aspect-[1000/600] bg-white dark:bg-zinc-900/40 rounded-[1.5rem] sm:rounded-[2.5rem] border border-gray-200/60 dark:border-zinc-800/60 shadow-[0_12px_40px_rgb(0,0,0,0.03)] p-4 sm:p-8 overflow-hidden mb-12 select-none">
          {/* Base SVG roads map */}
          <div className="absolute inset-0 z-0">
            <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background vector splash/road pattern from hamaridairy.com */}
              <image href="/milk-dairy/vector.png" x="0" y="0" width="1000" height="600" opacity="0.85" className="dark:opacity-20" />
              <image href="/section-2.png" x="0" y="0" width="1000" height="600" />

              {/* Render background roads */}
              {roads.map((road, idx) => (
                <g key={idx}>
                  {/* Thick transparent road backing to align animations */}
                  <path
                    d={road.d}
                    stroke="transparent"
                    strokeWidth="24"
                    strokeLinecap="round"
                  />
                  {/* Glowing active flow overlay */}
                  {isRoadActive(road.from) && (
                    <path
                      d={road.d}
                      stroke="url(#road-glow)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray="14 14"
                      className="animate-dash-flow"
                    />
                  )}
                </g>
              ))}

              <defs>
                <linearGradient id="road-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1E61DC" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Interactive Floating HTML Nodes positioned dynamically */}
          {mapNodes.map((node) => {
            const isSelected = currentStep === node.id
            const details = content.nodes[node.id]
            return (
              <div
                key={node.id}
                style={{
                  position: "absolute",
                  left: node.left,
                  top: node.top,
                  transform: "translate(-50%, -50%)"
                }}
                className="z-10 group"
                onMouseEnter={() => handleMouseEnter(node.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                  setActiveStep(node.id)
                  setIsAutoPlaying(false)
                }}
              >
                {/* Visual Node Element */}
                <div className="flex flex-col items-center relative">
                  {/* Invisible hover/click target matching the illustration size */}
                  <div className="w-20 h-16 sm:w-36 sm:h-28 rounded-full cursor-pointer relative flex items-center justify-center">
                    {/* Pulsing Radar Ring around active Node */}
                    {isSelected && (
                      <div className="absolute w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-[#1E61DC]/20 border border-[#1E61DC]/40 animate-ping pointer-events-none" />
                    )}
                    {/* Center glowing active dot */}
                    <div
                      className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-500 shadow-sm ${
                        isSelected
                          ? "bg-[#1E61DC] scale-125 shadow-[#1E61DC]/50 shadow-md"
                          : "bg-gray-400/0 group-hover:bg-[#1E61DC]/40"
                      }`}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Interactive Telemetry Details Panel */}
        <div className="glass-card p-8 rounded-3xl border border-white/50 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/50 shadow-md transition-all duration-500">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
              </span>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#1E94A4] dark:text-[#22d3ee] font-black">
                  Active Station Telemetry
                </span>
                <h4 className="text-2xl font-black text-gray-900 dark:text-zinc-100 mt-1">
                  {content.nodes[currentStep].title}
                </h4>
              </div>
            </div>

            {/* Resume Simulation Button */}
            {!isAutoPlaying && (
              <button
                onClick={() => setIsAutoPlaying(true)}
                className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-gray-200/50 hover:bg-gray-200 dark:bg-zinc-800/50 dark:hover:bg-zinc-800 text-gray-700 dark:text-zinc-300 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                Resume Cycle Simulation
              </button>
            )}
          </div>

          <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed mt-4 max-w-4xl">
            {content.nodes[currentStep].desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-gray-200/40 dark:border-zinc-800/40">
            <div className="space-y-1">
              <span className="text-xs text-gray-400 dark:text-zinc-500 block uppercase font-bold">Signal Latency</span>
              <span className="text-lg font-black text-emerald-500 dark:text-emerald-400">12ms - 32ms</span>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-gray-400 dark:text-zinc-500 block uppercase font-bold">Encryption Protocol</span>
              <span className="text-lg font-black text-gray-800 dark:text-zinc-200">SSL / TLS 1.3 Cloud</span>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-gray-400 dark:text-zinc-500 block uppercase font-bold">Data Package Sync</span>
              <span className="text-lg font-black text-[#1E94A4] dark:text-[#22d3ee]">Active Handshake</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200/40 dark:border-zinc-800/40">
            <h5 className="text-sm font-bold text-gray-800 dark:text-zinc-300 mb-3">
              {content.nodes[currentStep].detailTitle}
            </h5>
            <div className="flex flex-wrap gap-2.5">
              {content.nodes[currentStep].details.map((detail, dIdx) => (
                <span
                  key={dIdx}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-gray-100 dark:bg-zinc-800/80 text-gray-700 dark:text-zinc-300 border border-gray-200/20 dark:border-zinc-700/50"
                >
                  {detail}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
