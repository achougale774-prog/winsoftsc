"use client"

import { useState, useMemo } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Users, Building, Laptop, Search, Globe, ChevronRight } from "lucide-react"

// ── Types ──
type DistrictData = {
  id: string
  name: { en: string; mr: string; hi: string; kn: string }
  x: number // X coordinate on SVG viewBox
  y: number // Y coordinate on SVG viewBox
  installations: { en: string; mr: string; hi: string; kn: string }
  farmers: { en: string; mr: string; hi: string; kn: string }
  keyClients: { en: string; mr: string; hi: string; kn: string }
  types: { en: string; mr: string; hi: string; kn: string }
  color: string
}

// ── Geographic District Configurations ──
const DISTRICTS: DistrictData[] = [
  {
    id: "kolhapur",
    name: { en: "Kolhapur", mr: "कोल्हापूर", hi: "कोल्हापूर", kn: "ಕೊಲ್ಹಾಪುರ" },
    x: 180,
    y: 350,
    installations: { en: "230+ Active Sites", mr: "२३०+ सक्रिय संस्था", hi: "२३०+ सक्रिय संस्था", kn: "೨೩೦+ ಸಕ್ರಿಯ ಸಂಸ್ಥೆಗಳು" },
    farmers: { en: "45,000+ Farmers", mr: "४५,०००+ शेतकरी", hi: "४५,०००+ किसान", kn: "೪೫,೦೦೦+ ರೈತರು" },
    keyClients: { 
      en: "Gokul Dairy, Warna Dudh Sangh, Mahalaxmi Dairy, Shri Chhatrapati Sugar", 
      mr: "गोकुळ डेअरी, वारणा दूध संघ, महालक्ष्मी दूध संस्था, श्री छत्रपती साखर कारखाना",
      hi: "गोकुल डेयरी, वारणा दूध संघ, महालक्ष्मी दूध संस्था, श्री छत्रपति शुगर",
      kn: "ಗೋಕುಲ್ ಡೈರಿ, ವಾರಣಾ ಹಾಲು ಒಕ್ಕೂಟ, ಮಹಾಲಕ್ಷ್ಮಿ ಹಾಲು ಸಂಸ್ಥೆ"
    },
    types: { 
      en: "Dairy AMCS, Society ERP, Sugar Factory ERP", 
      mr: "डेअरी AMCS, सोसायटी ERP, साखर कारखाना ERP",
      hi: "डेयरी AMCS, सोसाइटी ERP, चीनी मिल ERP",
      kn: "ಡೈರಿ AMCS, ಸಹಕಾರಿ ಹಾಲು ಸಂಘ ERP"
    },
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: "sangli",
    name: { en: "Sangli", mr: "सांगली", hi: "सांगली", kn: "ಸಾಂಗ್ಲಿ" },
    x: 230,
    y: 330,
    installations: { en: "140+ Active Sites", mr: "१४०+ सक्रिय संस्था", hi: "१४०+ सक्रिय संस्था", kn: "೧೪೦+ ಸಕ್ರಿಯ ಸಂಸ್ಥೆಗಳು" },
    farmers: { en: "28,000+ Farmers", mr: "२८,०००+ शेतकरी", hi: "२८,०००+ किसान", kn: "೨೮,೦೦೦+ ರೈತರು" },
    keyClients: { 
      en: "Rajarambapu Sugar Factory, Sangli Union Partners, Kulkarni Jewellers", 
      mr: "राजारामबापू साखर कारखाना, सांगली युनियन पार्टनर्स, कुलकर्णी ज्वेलर्स",
      hi: "राजारामबापू चीनी मिल, सांगली यूनियन पार्टनर्स, कुलकर्णी ज्वेलर्स",
      kn: "ರಾಜಾರಾಂಬಾಪು ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆ, ಕುಲಕರ್ಣಿ ಜ್ಯುವೆಲ್ಲರ್ಸ್"
    },
    types: { 
      en: "Dairy ERP, Sugar Factory ERP, Goldwin Jewellery Software", 
      mr: "डेअरी ERP, साखर कारखाना, सुवर्ण पेढी सॉफ्टवेअर",
      hi: "डेयरी ERP, चीनी मिल, स्वर्ण आभूषण सॉफ्टवेयर",
      kn: "ಡೈರಿ ERP, ಆಭರಣ ಮಳಿಗೆ ಸಾಫ್ಟ್‌ವೇರ್"
    },
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "pune",
    name: { en: "Pune", mr: "पुणे", hi: "पुणे", kn: "ಪುಣೆ" },
    x: 160,
    y: 230,
    installations: { en: "85+ Active Sites", mr: "८५+ सक्रिय संस्था", hi: "८५+ सक्रिय संस्था", kn: "೮೫+ ಸಕ್ರಿಯ ಸಂಸ್ಥೆಗಳು" },
    farmers: { en: "15,000+ Farmers", mr: "१५,०००+ शेतकरी", hi: "१५,०००+ किसान", kn: "೧೫,೦೦೦+ ರೈತರು" },
    keyClients: { 
      en: "Mahalunge Dudh Sanstha, Pune Jewellery House, Katraj Dairy Partners", 
      mr: "महालुंगे दूध संस्था, पुणे ज्वेलरी हाऊस, कात्रज डेअरी भागीदार",
      hi: "महालुंगे दूध संस्था, पुणे ज्वेलरी हाउस, कातराज डेयरी भागीदार",
      kn: "ಮಹಾಲುಂಗೆ ಹಾಲು ಸಂಸ್ಥೆ, ಪುಣೆ ಜ್ಯುವೆಲ್ಲರಿ ಹೌಸ್"
    },
    types: { 
      en: "Dairy AMCS & Goldwin Jewellery Software", 
      mr: "डेअरी AMCS आणि सुवर्ण पेढी व्यवस्थापन सॉफ्टवेअर",
      hi: "डेयरी AMCS और स्वर्ण आभूषण शोरूम सॉफ्टवेयर",
      kn: "ಡೈರಿ AMCS ಮತ್ತು ಬಾರ್‌ಕೋಡ್ ಬಿಲ್ಲಿಂಗ್ ಸಾಫ್ಟ್‌ವೇರ್"
    },
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: "satara",
    name: { en: "Satara", mr: "सातारा", hi: "सतारा", kn: "ಸತಾರಾ" },
    x: 170,
    y: 290,
    installations: { en: "60+ Active Sites", mr: "६०+ सक्रिय संस्था", hi: "६०+ सक्रिय संस्था", kn: "೬೦+ ಸಕ್ರಿಯ ಸಂಸ್ಥೆಗಳು" },
    farmers: { en: "12,000+ Farmers", mr: "१२,०००+ शेतकरी", hi: "१२,०००+ किसान", kn: "೧೨,೦೦೦+ ರೈತರು" },
    keyClients: { 
      en: "Gaikwad Dairy Cooperative, Satara Union Partners", 
      mr: "गायकवाड डेअरी सहकारी, सातारा युनियन भागीदार",
      hi: "गायकवाड डेयरी सहकारी, सतारा यूनियन भागीदार",
      kn: "ಗಾಯಕ್ವಾಡ್ ಡೈರಿ ಕೋ-ಆಪರೇಟಿವ್"
    },
    types: { 
      en: "Dairy AMCS & Sankalan Farmer App", 
      mr: "डेअरी AMCS आणि संकलन शेतकरी मोबाईल ॲप",
      hi: "डेयरी AMCS और संकलन किसान मोबाइल ऐप",
      kn: "ಡೈರಿ AMCS ಮತ್ತು ರೈತರ ಹಾಲು ಪಾಸ್‌ಬುಕ್ ಆಪ್"
    },
    color: "from-teal-500 to-emerald-500",
  },
  {
    id: "solapur",
    name: { en: "Solapur", mr: "सोलापूर", hi: "सोलापुर", kn: "ಸೋಲಾಪುರ" },
    x: 280,
    y: 300,
    installations: { en: "55+ Active Sites", mr: "५५+ सक्रिय संस्था", hi: "५५+ सक्रिय संस्था", kn: "೫೫+ ಸಕ್ರಿಯ ಸಂಸ್ಥೆಗಳು" },
    farmers: { en: "9,500+ Farmers", mr: "९,५००+ शेतकरी", hi: "९,५००+ किसान", kn: "೯,೫೦೦+ ರೈತರು" },
    keyClients: { 
      en: "Solapur Gold Traders, Siddheshwar Sugar Partners", 
      mr: "सोलापूर गोल्ड ट्रेडर्स, सिद्धेश्वर साखर कारखाना भागीदार",
      hi: "सोलापुर गोल्ड ट्रेडर्स, सिद्धेश्वर चीनी मिल भागीदार",
      kn: "ಸೋಲಾಪುರ ಗೋಲ್ಡ್ ಟ್ರೇಡರ್ಸ್, ಸಿದ್ದೇಶ್ವರ ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆ"
    },
    types: { 
      en: "Goldwin Jewellery ERP & Sugar Factory ERP", 
      mr: "सुवर्ण पेढी व्यवस्थापन ERP आणि साखर कारखाना ERP",
      hi: "स्वर्ण आभूषण ERP और चीनी मिल ERP",
      kn: "ಆಭರಣ ಮಳಿಗೆ ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆ ERP"
    },
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "belgaum",
    name: { en: "Belgaum (Karnataka)", mr: "बेळगाव (कर्नाटक)", hi: "बेलगाम (कर्नाटक)", kn: "ಬೆಳಗಾವಿ (ಕರ್ನಾಟಕ)" },
    x: 190,
    y: 410,
    installations: { en: "90+ Active Sites", mr: "९०+ सक्रिय संस्था", hi: "९०+ सक्रिय संस्था", kn: "೯೦+ ಸಕ್ರಿಯ ಸಂಸ್ಥೆಗಳು" },
    farmers: { en: "22,000+ Farmers", mr: "२२,०००+ शेतकरी", hi: "२२,०००+ किसान", kn: "೨೨,೦೦೦+ ರೈತರು" },
    keyClients: { 
      en: "Belgaum Dairy Union, Krishna Sahakari Sugar Mill", 
      mr: "बेळगाव डेअरी युनियन, कृष्णा सहकारी साखर कारखाना",
      hi: "बेलगाम डेयरी यूनियन, कृष्णा सहकारी चीनी मिल",
      kn: "ಬೆಳಗಾವಿ ಹಾಲು ಒಕ್ಕೂಟ, ಕೃಷ್ಣಾ ಸಹಕಾರಿ ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆ"
    },
    types: { 
      en: "Dairy Cooperative ERP & Sugar Factory Solutions", 
      mr: "डेअरी सहकारी संस्था ERP आणि साखर कारखाना सोल्यूशन्स",
      hi: "डेयरी सहकारी संस्था ERP और चीनी मिल समाधान",
      kn: "ಸಹಕಾರಿ ಹಾಲು ಸಂಘ ERP ಮತ್ತು ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆ ERP"
    },
    color: "from-emerald-500 to-cyan-500",
  },
  {
    id: "nashik",
    name: { en: "Nashik", mr: "नाशिक", hi: "नाशिक", kn: "ನಾಶಿಕ್" },
    x: 140,
    y: 140,
    installations: { en: "40+ Active Sites", mr: "४०+ सक्रिय संस्था", hi: "४०+ सक्रिय संस्था", kn: "೪೦+ ಸಕ್ರಿಯ ಸಂಸ್ಥೆಗಳು" },
    farmers: { en: "7,000+ Farmers", mr: "७,०००+ शेतकरी", hi: "७,०००+ किसान", kn: "೭,೦೦೦+ ರೈತರು" },
    keyClients: { 
      en: "Shivamrut Dudh Sanstha, Godavari Milk Cooperatives", 
      mr: "शिवामृत दूध संस्था, गोदावरी मिल्क कोऑपरेटिव्ह",
      hi: "शिवामृत दूध संस्था, गोदावरी मिल्क कोऑपरेटिव",
      kn: "ಶಿವಾವೃತ್ ಹಾಲು ಸಂಸ್ಥೆ, ಗೋದಾವರಿ ಹಾಲು ಸಂಘ"
    },
    types: { 
      en: "Dairy Collection Software & Billing Systems", 
      mr: "डेअरी संकलन सॉफ्टवेअर आणि बिलिंग प्रणाली",
      hi: "डेयरी संग्रह सॉफ्टवेयर और बिलिंग प्रणाली",
      kn: "ಡೈರಿ ಸಂಗ್ರಹಣೆ ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ಬಿಲ್ಲಿಂಗ್ ಸಿಸ್ಟಮ್"
    },
    color: "from-sky-500 to-blue-500",
  },
  {
    id: "mumbai",
    name: { en: "Mumbai", mr: "मुंबई", hi: "मुंबई", kn: "ಮುಂಬೈ" },
    x: 70,
    y: 200,
    installations: { en: "25+ Corporate Clients", mr: "२५+ कॉर्पोरेट ग्राहक", hi: "२५+ कॉर्पोरेट ग्राहक", kn: "೨೫+ ಕಾರ್ಪೊರೇಟ್ ಗ್ರಾಹಕರು" },
    farmers: { en: "Corporate Support Hub", mr: "कॉर्पोरेट सपोर्ट हब", hi: "कॉर्पोरेट सपोर्ट हब", kn: "ಕಾರ್ಪೊರೇಟ್ ಬೆಂಬಲ ಕೇಂದ್ರ" },
    keyClients: { 
      en: "Winsoft Corporate Support Center, Mumbai Gold Exchangers", 
      mr: "विन्सॉफ्ट कॉर्पोरेट सपोर्ट सेंटर, मुंबई गोल्ड एक्सचेंजर्स",
      hi: "विन्सॉफ्ट कॉर्पोरेट सपोर्ट सेंटर, मुंबई गोल्ड एक्सचेंजर्स",
      kn: "ವಿನ್‌ಸಾಫ್ಟ್ ಕಾರ್ಪೊರೇಟ್ ಬೆಂಬಲ ಕೇಂದ್ರ, ಮುಂಬೈ ಗೋಲ್ಡ್ ಎಕ್ಸ್‌ಚೇಂಜರ್ಸ್"
    },
    types: { 
      en: "Gold Showroom Full ERP & Corporate Sales", 
      mr: "सुवर्ण दालन संपूर्ण ERP आणि कॉर्पोरेट सेल्स",
      hi: "गोल्ड शोरूम संपूर्ण ERP और कॉर्पोरेट बिक्री",
      kn: "ಆಭರಣ ಮಳಿಗೆ ಸಂಪೂರ್ಣ ERP ಸಾಫ್ಟ್‌ವೇರ್"
    },
    color: "from-rose-500 to-pink-500",
  },
  {
    id: "sambhajinagar",
    name: { en: "Chhatrapati Sambhajinagar", mr: "छत्रपती संभाजीनगर", hi: "छत्रपति संभाजीनगर", kn: "ಛತ್ರಪತಿ ಸಂಭಾಜಿನಗರ" },
    x: 250,
    y: 160,
    installations: { en: "30+ Active Sites", mr: "३०+ सक्रिय संस्था", hi: "३०+ सक्रिय संस्था", kn: "೩೦+ ಸಕ್ರಿಯ ಸಂಸ್ಥೆಗಳು" },
    farmers: { en: "4,500+ Farmers", mr: "४,५००+ शेतकरी", hi: "४,५००+ किसान", kn: "೪,೫೦೦+ ರೈತರು" },
    keyClients: { 
      en: "Marathwada Dairy Cooperative Partner, Ajanta Jewellers", 
      mr: "मराठवाडा डेअरी सहकारी संस्था भागीदार, अजिंठा ज्वेलर्स",
      hi: "मराठवाड़ा डेयरी सहकारी संस्था भागीदार, अजंता ज्वेलर्स",
      kn: "ಮರಾಠವಾಡ ಡೈರಿ ಕೋ-ಆಪರೇಟಿವ್, ಅಜಂತಾ ಜ್ಯುವೆಲ್ಲರ್ಸ್"
    },
    types: { 
      en: "Dairy AMCS & Goldwin Jewellery Software", 
      mr: "डेअरी AMCS आणि सुवर्ण पेढी सॉफ्टवेअर",
      hi: "डेयरी AMCS और स्वर्ण आभूषण सॉफ्टवेयर",
      kn: "ಡೈರಿ AMCS ಮತ್ತು ಆಭರಣ ಮಳಿಗೆ ಸಾಫ್ಟ್‌ವೇರ್"
    },
    color: "from-indigo-500 to-cyan-500",
  },
  {
    id: "nagpur",
    name: { en: "Nagpur", mr: "नागपूर", hi: "नागपुर", kn: "ನಾಗಪುರ" },
    x: 500,
    y: 100,
    installations: { en: "20+ Active Sites", mr: "२०+ सक्रिय संस्था", hi: "२०+ सक्रिय संस्था", kn: "೨೦+ ಸಕ್ರಿಯ ಸಂಸ್ಥೆಗಳು" },
    farmers: { en: "3,000+ Farmers", mr: "३,०००+ शेतकरी", hi: "३,०००+ किसान", kn: "೩,೦೦೦+ ರೈತರು" },
    keyClients: { 
      en: "Vidarbha Co-op Dairy, Nagpur Gold Retailers", 
      mr: "विदर्भ सहकारी डेअरी, नागपूर गोल्ड रिटेलर्स",
      hi: "विदर्भ सहकारी डेयरी, नागपुर गोल्ड रिटेलर्स",
      kn: "ವಿದರ್ಭ ಸಹಕಾರಿ ಡೈರಿ, ನಾಗ್ಪುರ ಗೋಲ್ಡ್ ರಿಟೇಲರ್ಸ್"
    },
    types: { 
      en: "Dairy AMCS & Goldwin Jewellery Software", 
      mr: "डेअरी AMCS आणि सुवर्ण पेढी सॉफ्टवेअर",
      hi: "डेयरी AMCS और स्वर्ण आभूषण सॉफ्टवेयर",
      kn: "ಡೈರಿ AMCS ಮತ್ತು ಆಭರಣ ಮಳಿಗೆ ಸಾಫ್ಟ್‌ವೇರ್"
    },
    color: "from-orange-500 to-red-500",
  }
]

// ── Translation Dictionary for Map UI Elements ──
const TRANSLATIONS = {
  en: {
    badge: "📍 Geographic Footprint",
    title: "Interactive Client Footprint",
    subtitle: "Click on the glowing cities to see our active software installations, farmer networks, and key client societies.",
    searchPlaceholder: "Search city or district...",
    allDistricts: "Select City/District",
    installations: "Active Installations",
    farmersConnected: "Farmers Network",
    keyClients: "Key Client Cooperatives",
    softwareType: "Software & ERP Installed",
    requestDemo: "Book Demo for This Region",
    statsHeader: "Region Statistics",
    selectPrompt: "Click a location on the map to explore stats",
    hqLabel: "Headquarters",
    maharashtraState: "Maharashtra & Border Region Map"
  },
  mr: {
    badge: "📍 भौगोलिक विस्तार",
    title: "आमचा ग्राहक विस्तार नकाशा",
    subtitle: "आमचे सक्रिय सॉफ्टवेअर इन्स्टॉलेशन्स, शेतकरी नेटवर्क आणि प्रमुख संस्थांची माहिती पाहण्यासाठी चमकणाऱ्या शहरांवर क्लिक करा.",
    searchPlaceholder: "शहर किंवा जिल्हा शोधा...",
    allDistricts: "शहर/जिल्हा निवडा",
    installations: "सक्रिय सॉफ्टवेअर जोडण्या",
    farmersConnected: "जोडलेले शेतकरी",
    keyClients: "प्रमुख ग्राहक संस्था",
    softwareType: "वापरले जाणारे सॉफ्टवेअर प्रकार",
    requestDemo: "या भागासाठी डेमो बुक करा",
    statsHeader: "प्रादेशिक आकडेवारी",
    selectPrompt: "माहिती पाहण्यासाठी नकाशावरील शहरावर क्लिक करा",
    hqLabel: "मुख्य कार्यालय",
    maharashtraState: "महाराष्ट्र आणि सीमाभाग नकाशा"
  },
  hi: {
    badge: "📍 भौगोलिक विस्तार",
    title: "हमारा ग्राहक विस्तार मानचित्र",
    subtitle: "हमारे सक्रिय सॉफ़्टवेयर इंस्टॉलेशन, किसान नेटवर्क और प्रमुख समितियों की जानकारी देखने के लिए चमकते शहरों पर क्लिक करें।",
    searchPlaceholder: "शहर या जिला खोजें...",
    allDistricts: "शहर/जिला चुनें",
    installations: "सक्रिय सॉफ्टवेयर इंस्टॉलेशन",
    farmersConnected: "जुड़े हुए किसान",
    keyClients: "प्रमुख ग्राहक समितियां",
    softwareType: "सॉफ्टवेयर के प्रकार",
    requestDemo: "इस क्षेत्र के लिए डेमो बुक करें",
    statsHeader: "क्षेत्रीय आँकड़े",
    selectPrompt: "जानकारी देखने के लिए मानचित्र पर शहर पर क्लिक करें",
    hqLabel: "मुख्य कार्यालय",
    maharashtraState: "महाराष्ट्र और सीमा क्षेत्र मानचित्र"
  },
  kn: {
    badge: "📍 ಭೌಗೋಳಿಕ ಹೆಜ್ಜೆಗುರುತು",
    title: "ನಮ್ಮ ಗ್ರಾಹಕ ಹೆಜ್ಜೆಗುರುತು",
    subtitle: "ನಮ್ಮ ಸಕ್ರಿಯ ಸಾಫ್ಟ್‌ವೇರ್ ಸ್ಥಾಪನೆಗಳು, ರೈತ ನೆಟ್‌ವರ್ಕ್ ಮತ್ತು ಪ್ರಮುಖ ಸಂಸ್ಥೆಗಳನ್ನು ನೋಡಲು ಹೊಳೆಯುವ ನಗರಗಳ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ.",
    searchPlaceholder: "ನಗರ ಅಥವಾ ಜಿಲ್ಲೆಯನ್ನು ಹುಡುಕಿ...",
    allDistricts: "ನಗರ/ಜಿಲ್ಲೆ ಆಯ್ಕೆಮಾಡಿ",
    installations: "ಸಕ್ರಿಯ ಸ್ಥಾಪನೆಗಳು",
    farmersConnected: "ಸಂಪರ್ಕಿತ ರೈತರು",
    keyClients: "ಪ್ರಮುಖ ಗ್ರಾಹಕ ಸಂಸ್ಥೆಗಳು",
    softwareType: "ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ಇಆರ್‌ಪಿ ಪ್ರಕಾರ",
    requestDemo: "ಈ ಪ್ರದೇಶಕ್ಕೆ ಡೆಮೊ ಬುಕ್ ಮಾಡಿ",
    statsHeader: "ಪ್ರಾದೇಶಿಕ ಅಂಕಿಅಂಶಗಳು",
    selectPrompt: "ಮಾಹಿತಿ ತಿಳಿಯಲು ನಕ್ಷೆಯ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ",
    hqLabel: "ಮುಖ್ಯ ಕಛೇರಿ",
    maharashtraState: "ಮಹಾರಾಷ್ಟ್ರ ಮತ್ತು ಗಡಿ ಪ್ರದೇಶದ ನಕ್ಷೆ"
  }
}

export function ClientMap() {
  const { language } = useLanguage()
  const [selectedId, setSelectedId] = useState<string>("kolhapur")
  const [searchQuery, setSearchQuery] = useState("")

  const t = useMemo(() => {
    return TRANSLATIONS[language as keyof typeof TRANSLATIONS] || TRANSLATIONS.en
  }, [language])

  const selectedDistrict = useMemo(() => {
    return DISTRICTS.find(d => d.id === selectedId) || DISTRICTS[0]
  }, [selectedId])

  // Filtered districts for search
  const filteredDistricts = useMemo(() => {
    if (!searchQuery) return DISTRICTS
    const q = searchQuery.toLowerCase()
    return DISTRICTS.filter(d => 
      d.name[language as keyof typeof d.name]?.toLowerCase().includes(q) ||
      d.name.en.toLowerCase().includes(q)
    )
  }, [searchQuery, language])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-zinc-950 dark:to-zinc-900 border-t border-slate-200 dark:border-zinc-800 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 dark:bg-[#1E94A4]/20 text-[#1E94A4] text-xs font-sans font-bold mb-4 border border-[#1E94A4]/20">
            {t.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 font-serif max-w-3xl mx-auto text-lg leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: SVG Map + Search Filter */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white dark:bg-zinc-900/50 p-6 md:p-8 rounded-[2rem] border border-slate-100 dark:border-zinc-800 shadow-sm relative">
            
            {/* Search and Selection Helper */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6 relative z-30">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-950/50 text-sm focus:border-[#1E94A4] focus:outline-none dark:text-zinc-100"
                />
              </div>

              {/* Fast dropdown search selector */}
              <select
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-sm font-sans font-semibold text-gray-700 dark:text-zinc-300 focus:border-[#1E94A4] focus:outline-none"
              >
                {DISTRICTS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name[language as keyof typeof d.name] || d.name.en}
                  </option>
                ))}
              </select>
            </div>

            {/* Stylized Geography Graphic & Interactive SVG Nodes */}
            <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/50 dark:from-zinc-950 dark:to-zinc-900 border border-slate-100 dark:border-zinc-800 overflow-hidden flex items-center justify-center p-2">
              <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-zinc-900 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
              
              {/* Graphic Title */}
              <span className="absolute bottom-3 left-4 text-[10px] text-gray-400 dark:text-zinc-500 uppercase tracking-widest font-sans flex items-center gap-1.5 font-bold">
                <Globe className="w-3.5 h-3.5 text-cyan-600 animate-spin-slow" />
                {t.maharashtraState}
              </span>

              {/* HQ Label */}
              <div className="absolute top-4 right-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xs border border-teal-500/30 px-3 py-1.5 rounded-lg text-[10px] font-bold font-sans flex items-center gap-1.5 text-teal-600">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-ping" />
                <span>HQ: Kolhapur (कोल्हापूर)</span>
              </div>

              {/* Maharashtra stylized SVG Map Container */}
              <svg 
                viewBox="0 0 600 450" 
                className="w-full h-full max-h-[400px] select-none text-slate-300 dark:text-zinc-700 z-10 transition-all duration-500"
              >
                {/* Stylized background grid pattern/wireframe for Maharashtra boundary */}
                <path
                  d="M120,80 L240,100 L380,90 L550,70 L570,70 L550,180 L480,240 L400,260 L300,320 L220,390 L190,430 L170,380 L110,300 L60,240 L70,150 Z"
                  fill="url(#state-gradient)"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="opacity-70 dark:opacity-40"
                />

                {/* Definitions for Gradients */}
                <defs>
                  <radialGradient id="map-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#1E94A4" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="state-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f1f5f9" className="stop-color-slate-100 dark:stop-color-zinc-950" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#e2e8f0" className="stop-color-slate-200 dark:stop-color-zinc-900" stopOpacity="0.6" />
                  </linearGradient>
                </defs>

                {/* Highlight/glow ring behind active node */}
                {selectedDistrict && (
                  <circle
                    cx={selectedDistrict.x}
                    cy={selectedDistrict.y}
                    r="55"
                    fill="url(#map-glow)"
                    className="animate-pulse"
                  />
                )}

                {/* Map Connections / Line networks for premium tech feel */}
                <g className="stroke-[#1E94A4]/15 dark:stroke-cyan-500/10 stroke-1" strokeDasharray="3 3">
                  <line x1="180" y1="350" x2="230" y2="330" /> {/* Kolhapur -> Sangli */}
                  <line x1="180" y1="350" x2="170" y2="290" /> {/* Kolhapur -> Satara */}
                  <line x1="170" y1="290" x2="160" y2="230" /> {/* Satara -> Pune */}
                  <line x1="160" y1="230" x2="70" y2="200" />  {/* Pune -> Mumbai */}
                  <line x1="160" y1="230" x2="140" y2="140" />  {/* Pune -> Nashik */}
                  <line x1="140" y1="140" x2="250" y2="160" />  {/* Nashik -> Sambhajinagar */}
                  <line x1="250" y1="160" x2="280" y2="300" />  {/* Sambhajinagar -> Solapur */}
                  <line x1="230" y1="330" x2="280" y2="300" />  {/* Sangli -> Solapur */}
                  <line x1="180" y1="350" x2="190" y2="410" />  {/* Kolhapur -> Belgaum */}
                  <line x1="250" y1="160" x2="500" y2="100" />  {/* Sambhajinagar -> Nagpur */}
                </g>

                {/* Glowing Nodes / District Pins */}
                {filteredDistricts.map((d) => {
                  const isActive = d.id === selectedId
                  return (
                    <g
                      key={d.id}
                      className="cursor-pointer group/pin"
                      onClick={() => setSelectedId(d.id)}
                    >
                      {/* Outer pulse effect */}
                      <circle
                        cx={d.x}
                        cy={d.y}
                        r={isActive ? "13" : "8"}
                        className={`fill-cyan-500/20 dark:fill-cyan-400/20 stroke-cyan-500/40 dark:stroke-cyan-400/40 transition-all ${
                          isActive ? "animate-ping" : "group-hover/pin:scale-125"
                        }`}
                      />
                      
                      {/* Inner solid node */}
                      <circle
                        cx={d.x}
                        cy={d.y}
                        r={isActive ? "6" : "4.5"}
                        className={`transition-all duration-300 ${
                          isActive 
                            ? "fill-teal-500 dark:fill-cyan-400 stroke-white dark:stroke-zinc-950 stroke-2 shadow-lg" 
                            : "fill-[#1E94A4] dark:fill-zinc-400 group-hover/pin:fill-teal-500"
                        }`}
                      />

                      {/* Floating Text tag beside active pins */}
                      {(isActive || d.id === "kolhapur") && (
                        <text
                          x={d.x + 10}
                          y={d.y + 4}
                          className={`text-[9px] font-sans font-bold transition-all fill-gray-800 dark:fill-zinc-300 pointer-events-none`}
                        >
                          {d.name[language as keyof typeof d.name] || d.name.en}
                          {d.id === "kolhapur" && ` (${t.hqLabel})`}
                        </text>
                      )}
                    </g>
                  )
                })}
              </svg>
            </div>
          </div>

          {/* Right Side: Glassmorphism Detail Dashboard Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <Card className="glass-card flex-1 p-8 rounded-[2rem] flex flex-col justify-between border-t border-white/40 dark:border-zinc-800/50 shadow-lg relative overflow-hidden h-full">
              
              {/* Highlight backdrop gradient inside details card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-600/5 rounded-full blur-2xl" />

              <div className="space-y-6">
                {/* Stats Header */}
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-zinc-800/80 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-[#1E94A4]/10 rounded-xl">
                      <MapPin className="w-5 h-5 text-[#1E94A4]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-sans font-bold text-gray-400 uppercase tracking-wider">
                        {t.statsHeader}
                      </h4>
                      <h3 className="text-2xl font-sans font-black text-gray-900 dark:text-zinc-100">
                        {selectedDistrict.name[language as keyof typeof selectedDistrict.name] || selectedDistrict.name.en}
                      </h3>
                    </div>
                  </div>
                  {selectedDistrict.id === "kolhapur" && (
                    <span className="bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 text-[10px] font-bold font-sans px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {t.hqLabel}
                    </span>
                  )}
                </div>

                {/* Statistics Highlights */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Installation Stat */}
                  <div className="p-4 bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl border border-slate-100/50 dark:border-zinc-800">
                    <Laptop className="w-4 h-4 text-[#1E94A4] mb-2" />
                    <span className="text-[10px] text-gray-400 font-sans font-bold uppercase tracking-wider block">
                      {t.installations}
                    </span>
                    <span className="text-lg font-sans font-bold text-gray-900 dark:text-zinc-100 mt-1 block">
                      {selectedDistrict.installations[language as keyof typeof selectedDistrict.installations] || selectedDistrict.installations.en}
                    </span>
                  </div>

                  {/* Farmers Connected Stat */}
                  <div className="p-4 bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl border border-slate-100/50 dark:border-zinc-800">
                    <Users className="w-4 h-4 text-[#1E94A4] mb-2" />
                    <span className="text-[10px] text-gray-400 font-sans font-bold uppercase tracking-wider block">
                      {t.farmersConnected}
                    </span>
                    <span className="text-lg font-sans font-bold text-gray-900 dark:text-zinc-100 mt-1 block">
                      {selectedDistrict.farmers[language as keyof typeof selectedDistrict.farmers] || selectedDistrict.farmers.en}
                    </span>
                  </div>
                </div>

                {/* Key Clients */}
                <div className="space-y-2">
                  <span className="text-[10px] text-gray-400 font-sans font-bold uppercase tracking-wider flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-[#1E94A4]" />
                    {t.keyClients}
                  </span>
                  <p className="text-sm text-gray-700 dark:text-zinc-300 font-serif leading-relaxed pl-1 border-l-2 border-slate-200 dark:border-zinc-700">
                    {selectedDistrict.keyClients[language as keyof typeof selectedDistrict.keyClients] || selectedDistrict.keyClients.en}
                  </p>
                </div>

                {/* Software Types */}
                <div className="space-y-2">
                  <span className="text-[10px] text-gray-400 font-sans font-bold uppercase tracking-wider flex items-center gap-1">
                    <Laptop className="w-3.5 h-3.5 text-[#1E94A4]" />
                    {t.softwareType}
                  </span>
                  <p className="text-sm text-gray-700 dark:text-zinc-300 font-sans font-semibold leading-relaxed pl-1 border-l-2 border-slate-200 dark:border-zinc-700">
                    {selectedDistrict.types[language as keyof typeof selectedDistrict.types] || selectedDistrict.types.en}
                  </p>
                </div>
              </div>

              {/* Call-to-action button */}
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-zinc-800/80">
                <a href={`/contact?region=${selectedDistrict.id}`} className="block">
                  <Button className="w-full bg-gradient-to-r from-[#1E94A4] to-[#22d3ee] hover:from-[#0B7989] hover:to-[#1E94A4] text-white font-bold py-6 rounded-2xl transition-all shadow-lg hover:shadow-[#1E94A4]/25 flex items-center justify-center gap-2">
                    <span>{t.requestDemo}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>

            </Card>
          </div>

        </div>
        
      </div>
    </section>
  )
}
