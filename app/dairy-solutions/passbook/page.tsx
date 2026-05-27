"use client"

import React, { useState, useMemo } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Smartphone,
  Wifi,
  Battery,
  User,
  Calendar,
  Database,
  Droplets,
  Scale,
  Receipt,
  TrendingUp,
  Plus,
  Search,
  Share2,
  Printer,
  ArrowLeft,
  Languages,
  Phone,
  RefreshCw,
  Download,
  BookOpen,
  ShoppingBag,
  CreditCard,
  CheckCircle,
  AlertCircle
} from "lucide-react"

// Translations dictionary inside the page for rapid loading and multi-lingual passbook toggle
const PASSBOOK_TRANSLATIONS: Record<string, any> = {
  en: {
    appTitle: "Winsoft Passbook",
    subtitle: "SOFTWARE CONSULTANCY",
    selectMember: "Select Member Account",
    searchPlaceholder: "Search by name or code...",
    phone: "Phone Number",
    updateBtn: "UPDATE DATA",
    resetPhone: "Reset Phone",
    milkSlip: "Milk Slip",
    milkPassbook: "Passbook",
    milkBill: "Milk Bill",
    milkSale: "Milk Sale",
    ledger: "Ledger",
    shiftMorning: "Morning",
    shiftEvening: "Evening",
    cowMilk: "Cow Milk",
    buffaloMilk: "Buffalo Milk",
    qty: "Qty (Ltr)",
    fat: "FAT",
    snf: "SNF",
    rate: "Rate",
    amount: "Amount",
    netAmount: "Net Amount",
    totalQty: "Total Qty",
    grossEarning: "Gross Earning",
    deductions: "Deductions",
    paymentCycle: "10-Day Bill Summary",
    feedPurchase: "Cattle Feed Purchase",
    localSale: "Direct Milk Sale",
    balanceDue: "Balance Due",
    advanceTaken: "Advances Taken",
    bankTransfer: "Bank Transfer Status",
    transferCompleted: "Completed",
    printSlip: "Print Slip",
    shareWhatsapp: "Share on WhatsApp",
    successPhone: "Phone updated successfully!",
    memberInfo: "Member Information"
  },
  mr: {
    appTitle: "विन्सॉफ्ट पासबुक",
    subtitle: "सॉफ्टवेअर कन्सल्टन्सी",
    selectMember: "सभासद खाते निवडा",
    searchPlaceholder: "नाव किंवा कोडने शोधा...",
    phone: "मोबाईल नंबर",
    updateBtn: "माहिती अपडेट करा",
    resetPhone: "फोन रिसेट करा",
    milkSlip: "दूध पावती",
    milkPassbook: "पासबुक",
    milkBill: "दूध बिल",
    milkSale: "दूध विक्री",
    ledger: "खाते उतारा",
    shiftMorning: "सकाळ",
    shiftEvening: "संध्याकाळ",
    cowMilk: "गाय दूध",
    buffaloMilk: "म्हैस दूध",
    qty: "लीटर",
    fat: "फॅट",
    snf: "एस.एन.एफ.",
    rate: "दर/रुपये",
    amount: "रक्कम",
    netAmount: "निव्वळ रक्कम",
    totalQty: "एकूण दूध",
    grossEarning: "एकूण कमाई",
    deductions: "एकूण कपात",
    paymentCycle: "१० दिवसांचे बिल पत्रक",
    feedPurchase: "पशुखाद्य खरेदी",
    localSale: "थेट दूध विक्री कपात",
    balanceDue: "येणे शिल्लक",
    advanceTaken: "उचल/अॅडव्हान्स",
    bankTransfer: "बँक वर्ग स्थिती",
    transferCompleted: "पूर्ण झाले",
    printSlip: "पावती प्रिंट",
    shareWhatsapp: "व्हाट्सअपवर पाठवा",
    successPhone: "मोबाईल नंबर यशस्वीरीत्या अपडेट झाला!",
    memberInfo: "सभासद तपशील"
  },
  hi: {
    appTitle: "विनसॉफ्ट पासबुक",
    subtitle: "सॉफ्टवेयर कंसल्टेंसी",
    selectMember: "सदस्य खाता चुनें",
    searchPlaceholder: "नाम या कोड से खोजें...",
    phone: "मोबाइल नंबर",
    updateBtn: "डाटा अपडेट करें",
    resetPhone: "फ़ोन रीसेट",
    milkSlip: "दूध पर्ची",
    milkPassbook: "पासबुक",
    milkBill: "दूध बिल",
    milkSale: "दूध बिक्री",
    ledger: "खाता बही",
    shiftMorning: "सुबह",
    shiftEvening: "शाम",
    cowMilk: "गाय का दूध",
    buffaloMilk: "भैंस का दूध",
    qty: "मात्रा (लीटर)",
    fat: "FAT",
    snf: "SNF",
    rate: "दर",
    amount: "राशि",
    netAmount: "शुद्ध राशि",
    totalQty: "कुल मात्रा",
    grossEarning: "कुल कमाई",
    deductions: "कटौती",
    paymentCycle: "10-दिवसीय बिल सारांश",
    feedPurchase: "पशु चारा खरीद",
    localSale: "सीधी दूध बिक्री",
    balanceDue: "शेष राशि",
    advanceTaken: "अग्रिम राशि",
    bankTransfer: "बैंक ट्रांसफर स्थिति",
    transferCompleted: "पूर्ण",
    printSlip: "पर्ची प्रिंट करें",
    shareWhatsapp: "व्हाट्सएप पर साझा करें",
    successPhone: "फ़ोन नंबर सफलतापूर्वक अपडेट हुआ!",
    memberInfo: "सदस्य विवरण"
  },
  kn: {
    appTitle: "ವಿನ್‌ಸಾಫ್ಟ್ ಪಾಸ್‌ಬುಕ್",
    subtitle: "ಸಾಫ್ಟ್‌ವೇರ್ ಕನ್ಸಲ್ಟೆನ್ಸಿ",
    selectMember: "ಸದಸ್ಯರ ಖಾತೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    searchPlaceholder: "ಹೆಸರು ಅಥವಾ ಕೋಡ್ ಮೂಲಕ ಹುಡುಕಿ...",
    phone: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
    updateBtn: "ಮಾಹಿತಿ ಅಪ್‌ಡೇಟ್ ಮಾಡಿ",
    resetPhone: "ಫೋನ್ ರಿಸೆಟ್",
    milkSlip: "ಹಾಲಿನ ಚೀಟಿ",
    milkPassbook: "ಪಾಸ್‌ಬುಕ್",
    milkBill: "ಹಾಲಿನ ಬಿಲ್",
    milkSale: "ಹಾಲು ಮಾರಾಟ",
    ledger: "ಖಾತೆ ಉತಾರ",
    shiftMorning: "ಬೆಳಗ್ಗೆ",
    shiftEvening: "ಸಂಜೆ",
    cowMilk: "ಹಸುವಿನ ಹಾಲು",
    buffaloMilk: "ಎಮ್ಮೆಯ ಹಾಲು",
    qty: "ಪ್ರಮಾಣ (ಲೀ)",
    fat: "FAT",
    snf: "SNF",
    rate: "ದರ",
    amount: "ಮೊತ್ತ",
    netAmount: "ನಿವ್ವಳ ಮೊತ್ತ",
    totalQty: "ಒಟ್ಟು ಹಾಲು",
    grossEarning: "ಒಟ್ಟು ಆದಾಯ",
    deductions: "ಕಡಿತಗಳು",
    paymentCycle: "10 ದಿನಗಳ ಬಿಲ್ ಸಾರಾಂಶ",
    feedPurchase: "ಪಶು ಆಹಾರ ಖರೀದಿ",
    localSale: "ನೇರ ಹಾಲು ಮಾರಾಟ",
    balanceDue: "ಬಾಕಿ ಮೊತ್ತ",
    advanceTaken: "ಮುಂಗಡ ಹಣ",
    bankTransfer: "ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ ಸ್ಥಿತಿ",
    transferCompleted: "ಯಶಸ್ವಿಯಾಗಿದೆ",
    printSlip: "ಚೀಟಿ ಪ್ರಿಂಟ್ ಮಾಡಿ",
    shareWhatsapp: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ",
    successPhone: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನವೀಕರಿಸಲಾಗಿದೆ!",
    memberInfo: "ಸದಸ್ಯರ ಮಾಹಿತಿ"
  }
}

// Dynamic Mock Members matching the exact OCR outputs
const MOCK_MEMBERS = [
  { code: "101", name: "Krishna Nago Patil Uchawade", phone: "1234567890", milkType: "Cow", accountNo: "SBI-3021948831", village: "Uchawade" },
  { code: "102", name: "Bhairavnath Dudh Utpadak Sanstha", phone: "8970632939", milkType: "Buffalo", accountNo: "KDCC-9801828", village: "Goundwad" },
  { code: "103", name: "Sidray Nago Lahor", phone: "9449969121", milkType: "Cow", accountNo: "KGB-887163901", village: "Goundwad" },
  { code: "104", name: "Shre Maruti Parsappa Jangali Masmaddi", phone: "9448810815", milkType: "Cow", accountNo: "BDCC-77382103", village: "Masmaddi" },
  { code: "105", name: "Raju Anant Navaloor", phone: "9980101789", milkType: "Cow", accountNo: "SBI-10829377462", village: "Hirebagewadi" },
  { code: "106", name: "Sachine Tarle Ambewadi", phone: "8748828584", milkType: "Buffalo", accountNo: "KDCC-8827361", village: "Ambewadi" },
  { code: "107", name: "Mauli dudh Ut kendra", phone: "9611210504", milkType: "Cow", accountNo: "BDCC-9928371", village: "Chandgad" }
]

// Historic passbook entries matching OCR patterns
const MOCK_PASSBOOK_ENTRIES = [
  { date: "19/05/2026", shift: "Morning", type: "Cow", qty: 9.9, fat: 4.8, snf: 8.98, rate: 42.5, amount: 420.75 },
  { date: "19/05/2026", shift: "Evening", type: "Cow", qty: 9.2, fat: 4.2, snf: 8.5, rate: 38.2, amount: 351.44 },
  { date: "20/05/2026", shift: "Morning", type: "Cow", qty: 10.1, fat: 4.9, snf: 8.95, rate: 43.1, amount: 435.31 },
  { date: "20/05/2026", shift: "Evening", type: "Cow", qty: 9.5, fat: 4.1, snf: 8.48, rate: 37.8, amount: 359.1 },
  { date: "21/05/2026", shift: "Morning", type: "Cow", qty: 10.4, fat: 4.7, snf: 8.84, rate: 41.8, amount: 434.72 },
  { date: "21/05/2026", shift: "Evening", type: "Cow", qty: 9.8, fat: 4.3, snf: 8.52, rate: 39.0, amount: 382.2 },
  { date: "22/05/2026", shift: "Morning", type: "Cow", qty: 10.0, fat: 4.8, snf: 8.9, rate: 42.5, amount: 425.0 },
  { date: "22/05/2026", shift: "Evening", type: "Cow", qty: 9.7, fat: 4.2, snf: 8.5, rate: 38.2, amount: 370.54 }
]

export default function PassbookApp() {
  const [selectedLanguage, setSelectedLanguage] = useState<"en" | "mr" | "hi" | "kn">("en")
  const [selectedMember, setSelectedMember] = useState(MOCK_MEMBERS[0])
  const [activeTab, setActiveTab] = useState<"slip" | "passbook" | "bill" | "sale" | "ledger">("slip")
  const [searchQuery, setSearchQuery] = useState("")
  const [showMemberSelector, setShowMemberSelector] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState(selectedMember.phone)
  const [isPhoneUpdated, setIsPhoneUpdated] = useState(false)

  const t = (key: string) => {
    return PASSBOOK_TRANSLATIONS[selectedLanguage][key] || PASSBOOK_TRANSLATIONS["en"][key] || key
  }

  // Filtered members list for selector
  const filteredMembers = useMemo(() => {
    return MOCK_MEMBERS.filter(
      (m) =>
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.code.includes(searchQuery)
    )
  }, [searchQuery])

  // Handle member switch
  const handleSelectMember = (member: typeof MOCK_MEMBERS[0]) => {
    setSelectedMember(member)
    setPhoneNumber(member.phone)
    setIsPhoneUpdated(false)
    setShowMemberSelector(false)
  }

  // Handle phone update
  const handleUpdatePhone = (e: React.FormEvent) => {
    e.preventDefault()
    setIsPhoneUpdated(true)
    setTimeout(() => setIsPhoneUpdated(false), 3000)
  }

  // Reset phone
  const handleResetPhone = () => {
    setPhoneNumber(selectedMember.phone)
    setIsPhoneUpdated(false)
  }

  // Calculate passbook stats
  const passbookTotals = useMemo(() => {
    const entries = MOCK_PASSBOOK_ENTRIES
    const totalQty = entries.reduce((acc, curr) => acc + curr.qty, 0)
    const totalAmount = entries.reduce((acc, curr) => acc + curr.amount, 0)
    const avgFat = entries.reduce((acc, curr) => acc + curr.fat, 0) / entries.length
    const avgSnf = entries.reduce((acc, curr) => acc + curr.snf, 0) / entries.length
    return {
      qty: totalQty.toFixed(2),
      amount: totalAmount.toFixed(2),
      fat: avgFat.toFixed(2),
      snf: avgSnf.toFixed(2)
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 font-sans text-gray-900 dark:text-zinc-100 flex flex-col">
      <Header />

      {/* Intro section */}
      <section className="py-12 px-4 text-center max-w-4xl mx-auto">
        <Link href="/dairy-solutions" className="inline-flex items-center gap-2 text-[#1E94A4] hover:underline font-bold mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Dairy Solutions
        </Link>
        <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4">
          Farmer Milk Passbook App
        </h1>
        <p className="text-gray-600 dark:text-zinc-400 font-serif leading-relaxed text-lg">
          Try the interactive mobile passbook demo below. Farmers can view real-time milk slips, overall passbooks, billing cycles, direct sales, and ledger statements in their own language.
        </p>
      </section>

      {/* Mockup Area */}
      <section className="flex-1 flex justify-center items-center pb-24 px-4">
        <div className="relative flex flex-col items-center">
          
          {/* External controls */}
          <div className="flex gap-4 mb-6 z-10 flex-wrap justify-center">
            {/* Language Controls */}
            <div className="bg-white dark:bg-zinc-900 border dark:border-zinc-800 p-2 rounded-2xl flex gap-1.5 shadow-sm">
              <button
                onClick={() => setSelectedLanguage("en")}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${selectedLanguage === "en" ? "bg-[#1E94A4] text-white" : "hover:bg-slate-100 dark:hover:bg-zinc-800"}`}
              >
                EN
              </button>
              <button
                onClick={() => setSelectedLanguage("mr")}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${selectedLanguage === "mr" ? "bg-[#1E94A4] text-white" : "hover:bg-slate-100 dark:hover:bg-zinc-800"}`}
              >
                मराठी
              </button>
              <button
                onClick={() => setSelectedLanguage("hi")}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${selectedLanguage === "hi" ? "bg-[#1E94A4] text-white" : "hover:bg-slate-100 dark:hover:bg-zinc-800"}`}
              >
                हिंदी
              </button>
              <button
                onClick={() => setSelectedLanguage("kn")}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${selectedLanguage === "kn" ? "bg-[#1E94A4] text-white" : "hover:bg-slate-100 dark:hover:bg-zinc-800"}`}
              >
                ಕನ್ನಡ
              </button>
            </div>

            {/* Select Member Button */}
            <button
              onClick={() => setShowMemberSelector(true)}
              className="bg-white dark:bg-zinc-900 border dark:border-zinc-800 px-4 py-2 text-xs font-bold rounded-2xl shadow-sm hover:border-[#1E94A4] flex items-center gap-2"
            >
              <User className="w-4 h-4 text-[#1E94A4]" />
              Switch Member ({selectedMember.code})
            </button>
          </div>

          {/* Member Selection Overlay Dialog */}
          {showMemberSelector && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-50 rounded-[3rem] flex items-center justify-center p-4">
              <div className="bg-white dark:bg-zinc-900 border dark:border-zinc-800 w-full max-w-[340px] rounded-3xl p-6 shadow-2xl animate-in zoom-in-95 duration-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold font-sans text-sm">{t("selectMember")}</h3>
                  <button onClick={() => setShowMemberSelector(false)} className="text-gray-400 hover:text-gray-600 text-xs">Close</button>
                </div>
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t("searchPlaceholder")}
                    className="w-full pl-9 pr-4 py-2 border dark:border-zinc-800 rounded-xl text-xs bg-slate-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-[#1E94A4]/50"
                  />
                </div>
                <div className="max-h-[220px] overflow-y-auto space-y-1 pr-1">
                  {filteredMembers.map((m) => (
                    <button
                      key={m.code}
                      onClick={() => handleSelectMember(m)}
                      className={`w-full text-left p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-800 border transition-all text-xs flex justify-between items-center ${selectedMember.code === m.code ? "border-[#1E94A4] bg-[#1E94A4]/5" : "border-transparent"}`}
                    >
                      <div>
                        <div className="font-bold truncate max-w-[180px]">{m.name}</div>
                        <div className="text-[10px] text-gray-500">Code: {m.code} | {m.village}</div>
                      </div>
                      <span className="text-[10px] bg-slate-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full font-bold">
                        {m.milkType === "Cow" ? t("cowMilk") : t("buffaloMilk")}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Smartphone Frame Mockup */}
          <div className="w-[360px] h-[720px] rounded-[3rem] border-[12px] border-zinc-900 bg-white dark:bg-zinc-900 shadow-2xl relative flex flex-col overflow-hidden">
            
            {/* Speaker & Sensor Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-32 bg-zinc-900 rounded-b-2xl z-40 flex items-center justify-center">
              <div className="w-12 h-1 bg-zinc-800 rounded-full"></div>
            </div>

            {/* Simulated Phone Status Bar */}
            <div className="h-8 bg-zinc-50 dark:bg-zinc-950 px-6 pt-1 flex justify-between items-center text-[10px] font-sans font-semibold text-gray-600 dark:text-zinc-400 select-none border-b dark:border-zinc-800">
              <span>5:23 PM</span>
              <div className="flex items-center gap-1.5">
                <Wifi className="w-3.5 h-3.5" />
                <span className="text-[9px]">4G</span>
                <Battery className="w-4 h-4 rotate-90" />
              </div>
            </div>

            {/* App Header */}
            <div className="bg-[#1E94A4] p-4 text-white text-center shadow-md relative">
              <h2 className="font-sans font-bold text-base leading-tight tracking-wide">{t("appTitle")}</h2>
              <p className="text-[8px] tracking-[0.2em] font-black opacity-80 mt-0.5">{t("subtitle")}</p>
            </div>

            {/* Member Quick-Card */}
            <div className="bg-slate-50 dark:bg-zinc-950 px-4 py-3 border-b dark:border-zinc-800 flex justify-between items-center text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1E94A4]/10 flex items-center justify-center text-[#1E94A4] font-black">
                  {selectedMember.code}
                </div>
                <div>
                  <h4 className="font-bold truncate max-w-[160px]">{selectedMember.name}</h4>
                  <p className="text-[10px] text-gray-500">{selectedMember.village} | {selectedMember.phone}</p>
                </div>
              </div>
              <span className="text-[9px] font-bold bg-[#1E94A4]/10 text-[#1E94A4] px-2.5 py-1 rounded-full border border-[#1E94A4]/20">
                {selectedMember.milkType === "Cow" ? t("cowMilk") : t("buffaloMilk")}
              </span>
            </div>

            {/* App Content Area */}
            <div className="flex-1 overflow-y-auto bg-white dark:bg-zinc-900 p-4">
              
              {/* SLIP TAB */}
              {activeTab === "slip" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="border dark:border-zinc-800 rounded-2xl overflow-hidden bg-slate-50 dark:bg-zinc-950 p-4 relative">
                    <div className="absolute top-3 right-3 text-[10px] font-black uppercase text-[#1E94A4] bg-[#1E94A4]/10 px-2 py-0.5 rounded-md border border-[#1E94A4]/10">
                      LIVE SLIP
                    </div>

                    <div className="text-center border-b dark:border-zinc-800 pb-3 mb-3 border-dashed">
                      <h4 className="font-bold text-xs uppercase text-gray-500">BHARAT CO-OP DAIRY</h4>
                      <p className="text-[9px] text-gray-400">Goundwad-Khanapur Branch</p>
                    </div>

                    <div className="grid grid-cols-2 gap-y-2 text-xs font-medium">
                      <span className="text-gray-500">Date:</span>
                      <span className="text-right">19/05/2026</span>
                      <span className="text-gray-500">Shift:</span>
                      <span className="text-right text-[#1E94A4] font-bold">{t("shiftMorning")}</span>
                      <span className="text-gray-500">Milk Type:</span>
                      <span className="text-right">{selectedMember.milkType === "Cow" ? t("cowMilk") : t("buffaloMilk")}</span>
                      <span className="text-gray-500">{t("qty")}:</span>
                      <span className="text-right font-black">9.90 Ltr</span>
                      <span className="text-gray-500">{t("fat")}:</span>
                      <span className="text-right">4.80</span>
                      <span className="text-gray-500">{t("snf")}:</span>
                      <span className="text-right">8.98</span>
                      <span className="text-gray-500">{t("rate")}:</span>
                      <span className="text-right font-semibold">₹ 42.50</span>
                    </div>

                    <div className="border-t border-dashed dark:border-zinc-800 pt-3 mt-3 flex justify-between items-center">
                      <span className="font-bold text-xs">{t("amount")}:</span>
                      <span className="font-black text-base text-green-600">₹ 420.75</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 text-xs border-gray-300 py-5 rounded-xl flex items-center justify-center gap-1.5 hover:bg-slate-100 dark:hover:bg-zinc-800">
                      <Printer className="w-4 h-4 text-gray-500" />
                      {t("printSlip")}
                    </Button>
                    <Button className="flex-1 text-xs bg-green-600 hover:bg-green-700 text-white py-5 rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-green-600/10">
                      <Share2 className="w-4 h-4" />
                      {t("shareWhatsapp")}
                    </Button>
                  </div>

                  {/* Phone Update Section */}
                  <div className="border dark:border-zinc-800 rounded-2xl p-4 space-y-3">
                    <h4 className="font-bold text-xs flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#1E94A4]" />
                      {t("memberInfo")}
                    </h4>
                    <form onSubmit={handleUpdatePhone} className="space-y-3">
                      <div>
                        <label className="text-[10px] text-gray-500 block mb-1 font-bold uppercase">{t("phone")}</label>
                        <input
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full px-3 py-2 border dark:border-zinc-800 rounded-xl text-xs bg-slate-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-[#1E94A4]/50"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button type="button" onClick={handleResetPhone} variant="ghost" className="text-xs flex-1 rounded-xl py-3 text-gray-500">
                          {t("resetPhone")}
                        </Button>
                        <Button type="submit" className="text-xs bg-[#1E94A4] hover:bg-[#0B7989] text-white flex-1 rounded-xl py-3 font-bold">
                          {t("updateBtn")}
                        </Button>
                      </div>
                      {isPhoneUpdated && (
                        <div className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 p-2 rounded-xl text-[10px] text-center font-bold flex items-center justify-center gap-1 border border-emerald-500/20">
                          <CheckCircle className="w-3.5 h-3.5" />
                          {t("successPhone")}
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              )}

              {/* PASSBOOK TAB */}
              {activeTab === "passbook" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="font-bold uppercase tracking-wider text-gray-500 text-[10px]">RECENT LOGS</span>
                    <span className="text-[10px] bg-slate-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full font-bold">
                      Avg FAT: {passbookTotals.fat} | SNF: {passbookTotals.snf}
                    </span>
                  </div>

                  <div className="border dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px] text-left">
                        <thead className="bg-slate-50 dark:bg-zinc-950 border-b dark:border-zinc-800 text-[10px] font-bold text-gray-500 uppercase">
                          <tr>
                            <th className="p-2.5">Date</th>
                            <th className="p-2.5">Shift</th>
                            <th className="p-2.5 text-right">Ltr</th>
                            <th className="p-2.5 text-center">F/S</th>
                            <th className="p-2.5 text-right">Amt</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y dark:divide-zinc-800">
                          {MOCK_PASSBOOK_ENTRIES.map((entry, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-zinc-800/50">
                              <td className="p-2.5 text-gray-600 dark:text-zinc-400">{entry.date}</td>
                              <td className="p-2.5 font-bold text-gray-700 dark:text-zinc-300">
                                {entry.shift === "Morning" ? t("shiftMorning") : t("shiftEvening")}
                              </td>
                              <td className="p-2.5 text-right font-black">{entry.qty.toFixed(1)}</td>
                              <td className="p-2.5 text-center text-gray-500">{entry.fat.toFixed(1)}/{entry.snf.toFixed(1)}</td>
                              <td className="p-2.5 text-right font-bold text-green-600">₹{entry.amount.toFixed(0)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Summary Footer */}
                  <div className="bg-slate-50 dark:bg-zinc-950 p-4 border dark:border-zinc-800 rounded-2xl flex justify-between items-center text-xs">
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase block font-bold">{t("totalQty")}</div>
                      <div className="text-sm font-black text-gray-800 dark:text-zinc-200">{passbookTotals.qty} Ltr</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-gray-500 uppercase block font-bold">{t("grossEarning")}</div>
                      <div className="text-base font-black text-[#1E94A4]">₹ {passbookTotals.amount}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* BILL TAB */}
              {activeTab === "bill" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="border dark:border-zinc-800 rounded-2xl p-4 bg-slate-50 dark:bg-zinc-950 space-y-4 relative">
                    <div className="absolute top-3 right-3 text-[9px] font-bold bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full">
                      PAID
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="font-bold text-xs uppercase text-gray-500">{t("paymentCycle")}</h4>
                      <p className="text-[10px] text-gray-400 font-serif">Billing Period: 01/05/2026 - 10/05/2026</p>
                    </div>

                    <div className="border-t border-b dark:border-zinc-800 py-3 space-y-2 border-dashed text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Gross Earnings:</span>
                        <span className="font-bold text-gray-800 dark:text-zinc-200">₹ {passbookTotals.amount}</span>
                      </div>
                      <div className="flex justify-between text-rose-600">
                        <span>Cattle Feed Deduction:</span>
                        <span className="font-bold">- ₹ 200.00</span>
                      </div>
                      <div className="flex justify-between text-rose-600">
                        <span>Cash Advance recovery:</span>
                        <span className="font-bold">- ₹ 300.00</span>
                      </div>
                      <div className="flex justify-between text-rose-600">
                        <span>Local Trust deduction:</span>
                        <span className="font-bold">- ₹ 20.00</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-black text-xs uppercase text-gray-700 dark:text-zinc-300">{t("netAmount")}:</span>
                      <span className="text-lg font-black text-green-600">₹ {(parseFloat(passbookTotals.amount) - 520).toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Bank info box */}
                  <div className="border dark:border-zinc-800 rounded-2xl p-4 flex gap-4 items-center bg-white dark:bg-zinc-900">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-bold text-xs text-gray-700 dark:text-zinc-300">{t("bankTransfer")}</h5>
                      <p className="text-[10px] text-gray-500 font-sans mt-0.5">
                        Transferred to A/C {selectedMember.accountNo}<br/>
                        Trans ID: TXN98712398 | 12/05/2026
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* MILK SALE TAB */}
              {activeTab === "sale" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="border dark:border-zinc-800 rounded-2xl p-4 bg-slate-50 dark:bg-zinc-950 space-y-4">
                    <div className="flex justify-between items-center border-b dark:border-zinc-800 pb-2.5">
                      <h4 className="font-bold text-xs uppercase text-gray-500 flex items-center gap-1.5">
                        <ShoppingBag className="w-4 h-4 text-[#1E94A4]" />
                        {t("feedPurchase")}
                      </h4>
                      <span className="text-[9px] bg-[#1E94A4]/10 text-[#1E94A4] px-2 py-0.5 rounded-full font-bold">STORE</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-bold">Cattle Feed Bag (Kapas Pend)</div>
                          <div className="text-[10px] text-gray-500">Qty: 1 Bag | 05/05/2026</div>
                        </div>
                        <span className="font-black text-rose-600">₹ 200.00</span>
                      </div>
                      <div className="text-[10px] text-gray-400 italic">Deducted automatically from milk payment bills</div>
                    </div>
                  </div>

                  <div className="border dark:border-zinc-800 rounded-2xl p-4 bg-slate-50 dark:bg-zinc-950 space-y-4">
                    <div className="flex justify-between items-center border-b dark:border-zinc-800 pb-2.5">
                      <h4 className="font-bold text-xs uppercase text-gray-500 flex items-center gap-1.5">
                        <Droplets className="w-4 h-4 text-blue-500" />
                        {t("localSale")}
                      </h4>
                      <span className="text-[9px] bg-blue-500/10 text-blue-600 px-2 py-0.5 rounded-full font-bold">MILK</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-bold">Retained Milk for Home</div>
                          <div className="text-[10px] text-gray-500">1 Ltr Daily | 01/05/2026 - 10/05/2026</div>
                        </div>
                        <span className="font-black text-rose-600">₹ 420.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEDGER TAB */}
              {activeTab === "ledger" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="border dark:border-zinc-800 rounded-2xl p-4 bg-slate-50 dark:bg-zinc-950 space-y-3">
                    <h4 className="font-bold text-xs uppercase text-gray-500 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#1E94A4]" />
                      Account Statement
                    </h4>

                    <div className="grid grid-cols-2 gap-y-2 text-xs border-t dark:border-zinc-800 pt-3">
                      <span className="text-gray-500">Opening Balance:</span>
                      <span className="text-right font-semibold">₹ 0.00</span>
                      <span className="text-gray-500">Total Milk Income:</span>
                      <span className="text-right font-semibold text-green-600">+ ₹ {passbookTotals.amount}</span>
                      <span className="text-gray-500">Store Purchases:</span>
                      <span className="text-right font-semibold text-rose-600">- ₹ 200.00</span>
                      <span className="text-gray-500">Advances Taken:</span>
                      <span className="text-right font-semibold text-rose-600">- ₹ 300.00</span>
                      <span className="text-gray-500">Net Paid:</span>
                      <span className="text-right font-semibold text-rose-600">- ₹ {(parseFloat(passbookTotals.amount) - 520).toFixed(2)}</span>
                    </div>

                    <div className="border-t border-dashed dark:border-zinc-800 pt-3 flex justify-between items-center text-xs font-bold">
                      <span>{t("balanceDue")}:</span>
                      <span className="text-green-600">₹ 0.00</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 text-xs border-gray-300 py-4 rounded-xl flex items-center justify-center gap-1.5 hover:bg-slate-100 dark:hover:bg-zinc-800">
                      <Download className="w-4 h-4" />
                      Statement PDF
                    </Button>
                  </div>
                </div>
              )}

            </div>

            {/* Simulated Phone Bottom Nav Bar */}
            <div className="h-16 bg-zinc-50 dark:bg-zinc-950 border-t dark:border-zinc-800 flex items-center justify-around px-2 text-[10px] font-sans font-semibold text-gray-500 dark:text-zinc-400 select-none">
              <button
                onClick={() => setActiveTab("slip")}
                className={`flex flex-col items-center gap-1 transition-all ${activeTab === "slip" ? "text-[#1E94A4] scale-105" : "hover:text-gray-900"}`}
              >
                <Receipt className="w-5 h-5" />
                <span>{t("milkSlip")}</span>
              </button>
              
              <button
                onClick={() => setActiveTab("passbook")}
                className={`flex flex-col items-center gap-1 transition-all ${activeTab === "passbook" ? "text-[#1E94A4] scale-105" : "hover:text-gray-900"}`}
              >
                <BookOpen className="w-5 h-5" />
                <span>{t("milkPassbook")}</span>
              </button>

              <button
                onClick={() => setActiveTab("bill")}
                className={`flex flex-col items-center gap-1 transition-all ${activeTab === "bill" ? "text-[#1E94A4] scale-105" : "hover:text-gray-900"}`}
              >
                <CreditCard className="w-5 h-5" />
                <span>{t("milkBill")}</span>
              </button>

              <button
                onClick={() => setActiveTab("sale")}
                className={`flex flex-col items-center gap-1 transition-all ${activeTab === "sale" ? "text-[#1E94A4] scale-105" : "hover:text-gray-900"}`}
              >
                <ShoppingBag className="w-5 h-5" />
                <span>{t("milkSale")}</span>
              </button>

              <button
                onClick={() => setActiveTab("ledger")}
                className={`flex flex-col items-center gap-1 transition-all ${activeTab === "ledger" ? "text-[#1E94A4] scale-105" : "hover:text-gray-900"}`}
              >
                <Database className="w-5 h-5" />
                <span>{t("ledger")}</span>
              </button>
            </div>

            {/* Fake bottom notch bar for iPhone or Android */}
            <div className="h-4 bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center pb-1">
              <div className="w-28 h-1 bg-gray-400 dark:bg-zinc-800 rounded-full"></div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
