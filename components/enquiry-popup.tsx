"use client"

import React, { useState, useEffect, useMemo } from "react"
import { X, Sparkles, Phone, User, Check, Loader2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { toast } from "sonner"

export function EnquiryPopup() {
  const { language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "AMCS",
  })

  const productOptions = useMemo(() => {
    if (language === 'mr') {
      return [
        { value: "AMCS",                 label: "डेअरी सॉफ्टवेअर मॅनेजमेंट (Dairy Software Management)" },
        { value: "Sankalan App",         label: "शेतकरी दूध पासबुक मोबाईल अॅप" },
        { value: "Admin ERP",            label: "सहकारी दूध संस्था प्रशासकीय ERP" },
        { value: "Hardware Integration", label: "दूध विश्लेषक आणि वजन काटा एकत्रीकरण" },
        { value: "Cattle Feed",          label: "पशूखाद्य आणि उचल व्यवस्थापन" },
        { value: "Gold Software",        label: "सुवर्ण पेढी सॉफ्टवेअर (Goldwin)" },
        { value: "Sugar ERP",            label: "साखर कारखाना ERP" },
      ]
    } else if (language === 'hi') {
      return [
        { value: "AMCS",                 label: "डेयरी सॉफ्टवेयर मैनेजमेंट (Dairy Software Management)" },
        { value: "Sankalan App",         label: "किसान दूध पासबुक मोबाइल ऐप" },
        { value: "Admin ERP",            label: "सहकारी दूध समिति प्रशासनिक ERP" },
        { value: "Hardware Integration", label: "दूध विश्लेषक और वजन कांटा एकीकरण" },
        { value: "Cattle Feed",          label: "पशु आहार और अग्रिम प्रबंधन" },
        { value: "Gold Software",        label: "सुवर्ण पेढी सॉफ्टवेयर (Goldwin)" },
        { value: "Sugar ERP",            label: "चीनी कारखाना ERP" },
      ]
    } else if (language === 'kn') {
      return [
        { value: "AMCS",                 label: "ಡೈರಿ ಸಾಫ್ಟ್‌ವೇರ್ ಮ್ಯಾನೇಜ್ಮೆಂಟ್ (Dairy Software Management)" },
        { value: "Sankalan App",         label: "ರೈತರ ಹಾಲು ಪಾಸ್ಬುಕ್ ಮೊಬೈಲ್ ಆಪ್" },
        { value: "Admin ERP",            label: "ಸಹಕಾರಿ ಹಾಲು ಉತ್ಪಾದಕರ ಸಂಘದ ಆಡಳಿತ ERP" },
        { value: "Hardware Integration", label: "ಹಾಲು ವಿಶ್ಲೇಷಕ ಮತ್ತು ತೂಕದ ಪ್ರಮಾಣ ಏಕೀಕರಣ" },
        { value: "Cattle Feed",          label: "ಪಶು ಆಹಾರ ಮತ್ತು ಮುಂಗಡ ನಿರ್ವಹಣೆ" },
        { value: "Gold Software",        label: "ಚಿನ್ನದ ಅಂಗಡಿ ಸಾಫ್ಟ್‌ವೇರ್ (Goldwin)" },
        { value: "Sugar ERP",            label: "ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆ ERP" },
      ]
    } else {
      return [
        { value: "AMCS",                 label: "Dairy Software Management" },
        { value: "Sankalan App",         label: "Farmer Milk Passbook App" },
        { value: "Admin ERP",            label: "Cooperative Society Admin ERP" },
        { value: "Hardware Integration", label: "Milk Analyzer & Hardware Integration" },
        { value: "Cattle Feed",          label: "Cattle Feed & Advance Management" },
        { value: "Gold Software",        label: "Gold Jewellery Software (Goldwin)" },
        { value: "Sugar ERP",            label: "Sugar Factory ERP" },
      ]
    }
  }, [language])

  const text = useMemo(() => {
    const dicts: Record<string, any> = {
      mr: {
        title: "मोफत सल्ला व मार्गदर्शन",
        subtitle: "तुमचे नाव, मोबाईल नंबर आणि हवे असलेले software निवडा. आमची टीम लवकरच call करेल.",
        nameLabel: "तुमचे नाव",
        namePlaceholder: "उदा. कृष्णा पाटील",
        phoneLabel: "मोबाईल नंबर",
        phonePlaceholder: "10 अंकी मोबाईल नंबर",
        productLabel: "कोणते Software हवे आहे?",
        btnSubmit: "Call Back मागवा — मोफत",
        successToast: "✅ यशस्वी! आमची टीम लवकरच call करेल.",
        errorToast: "❌ काहीतरी चूक झाली. पुन्हा प्रयत्न करा.",
        validationPhone: "कृपया 10 अंकी मोबाईल नंबर टाका.",
      },
      hi: {
        title: "मुफ़्त सलाह और मार्गदर्शन",
        subtitle: "अपना नाम, मोबाइल नंबर और चाहिए सॉफ्टवेयर चुनें। हमारी टीम जल्द कॉल करेगी।",
        nameLabel: "आपका नाम",
        namePlaceholder: "उदा. कृष्णा पाटिल",
        phoneLabel: "मोबाइल नंबर",
        phonePlaceholder: "10 अंकों का मोबाइल नंबर",
        productLabel: "कौन सा Software चाहिए?",
        btnSubmit: "Call Back मांगें — मुफ़्त",
        successToast: "✅ सफल! हमारी टीम जल्द कॉल करेगी।",
        errorToast: "❌ कुछ गलत हुआ। पुनः प्रयास करें।",
        validationPhone: "कृपया 10 अंकों का मोबाइल नंबर दर्ज करें।",
      },
      kn: {
        title: "ಉಚಿತ ಸಲಹೆ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ",
        subtitle: "ನಿಮ್ಮ ಹೆಸರು, ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಮತ್ತು ಬೇಕಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಆಯ್ಕೆ ಮಾಡಿ. ನಮ್ಮ ತಂಡ ಶೀಘ್ರದಲ್ಲೇ ಕರೆ ಮಾಡುತ್ತದೆ.",
        nameLabel: "ನಿಮ್ಮ ಹೆಸರು",
        namePlaceholder: "ಉದಾ. ಕೃಷ್ಣ ಪಾಟೀಲ್",
        phoneLabel: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
        phonePlaceholder: "10 ಅಂಕಿಗಳ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
        productLabel: "ಯಾವ Software ಬೇಕು?",
        btnSubmit: "Call Back ಕೇಳಿ — ಉಚಿತ",
        successToast: "✅ ಯಶಸ್ವಿ! ನಮ್ಮ ತಂಡ ಶೀಘ್ರದಲ್ಲೇ ಕರೆ ಮಾಡುತ್ತದೆ.",
        errorToast: "❌ ಏನೋ ತಪ್ಪಾಗಿದೆ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
        validationPhone: "ದಯವಿಟ್ಟು 10 ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ.",
      },
      en: {
        title: "Free Expert Guidance",
        subtitle: "Enter your name, mobile number and select the software you need. Our team will call you back shortly.",
        nameLabel: "Your Full Name",
        namePlaceholder: "e.g. Krishna Patil",
        phoneLabel: "Mobile Number",
        phonePlaceholder: "10-digit mobile number",
        productLabel: "Which Software do you need?",
        btnSubmit: "Request Free Call Back",
        successToast: "✅ Success! Our team will call you shortly.",
        errorToast: "❌ Something went wrong. Please try again.",
        validationPhone: "Please enter a valid 10-digit mobile number.",
      },
    }
    return dicts[language] || dicts['en']
  }, [language])

  // ── Timing logic ──────────────────────────────────────────────────────────
  useEffect(() => {
    // If already submitted this session, don't show again
    const isSubmitted = sessionStorage.getItem("winsoft_popup_submitted") === "true"
    if (isSubmitted) return

    const mountTime = Date.now()

    const interval = setInterval(() => {
      if (isOpen) return

      const closeCount = parseInt(localStorage.getItem("winsoft_popup_close_count") || "0", 10)
      const lastClosed = parseInt(localStorage.getItem("winsoft_popup_last_closed") || "0", 10)
      const now = Date.now()

      if (closeCount === 0) {
        // First visit: show after 15 seconds
        if (now - mountTime >= 15000) setIsOpen(true)
      } else if (closeCount === 1) {
        // Second time: 2 min after first close
        if (lastClosed > 0 && now - lastClosed >= 120000) setIsOpen(true)
      } else {
        // After that: every 5 min
        if (lastClosed > 0 && now - lastClosed >= 300000) setIsOpen(true)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
    const count = parseInt(localStorage.getItem("winsoft_popup_close_count") || "0", 10)
    localStorage.setItem("winsoft_popup_close_count", String(count + 1))
    localStorage.setItem("winsoft_popup_last_closed", String(Date.now()))
  }

  // ── Submit — direct API call, no supabase wrapper ─────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const phone = formData.phone.replace(/[\s-]/g, '')
    if (!/^[0-9]{10}$/.test(phone)) {
      toast.error(text.validationPhone)
      return
    }

    setIsLoading(true)

    try {
      const selectedLabel = productOptions.find(p => p.value === formData.product)?.label || formData.product

      const payload = [{
        name:         formData.name.trim(),
        email:        `${phone}@popup.winsoft.in`,
        phone:        phone,
        company:      "Popup Lead",
        inquiry_type: `Popup - ${formData.product}`,
        message:      `Product: ${selectedLabel} | Language: ${language.toUpperCase()}`,
        status:       "new",
      }]

      const res = await fetch("/api/contacts", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      })

      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      toast.success(text.successToast)
      // Mark submitted for this session only (not permanently)
      sessionStorage.setItem("winsoft_popup_submitted", "true")
      setIsOpen(false)

    } catch (err) {
      console.error("Popup submit error:", err)
      toast.error(text.errorToast)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">

        {/* Top gradient bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#1E94A4] via-[#22d3ee] to-[#0B7989]" />

        {/* Glow blobs */}
        <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#1E94A4]/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-[#22d3ee]/15 rounded-full blur-2xl pointer-events-none" />

        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-500 transition-all z-10"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-7">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex p-2.5 rounded-2xl bg-[#1E94A4]/10 text-[#1E94A4] mb-3">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black text-gray-900 dark:text-zinc-100 mb-1">
              {text.title}
            </h2>
            <p className="text-gray-500 dark:text-zinc-400 text-xs leading-relaxed max-w-xs mx-auto">
              {text.subtitle}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                <User className="w-3.5 h-3.5 text-[#1E94A4]" />
                {text.nameLabel} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={text.namePlaceholder}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:border-[#1E94A4] focus:ring-2 focus:ring-[#1E94A4]/20 rounded-xl outline-none text-sm transition-all"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                <Phone className="w-3.5 h-3.5 text-[#1E94A4]" />
                {text.phoneLabel} <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                maxLength={10}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                placeholder={text.phonePlaceholder}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:border-[#1E94A4] focus:ring-2 focus:ring-[#1E94A4]/20 rounded-xl outline-none text-sm transition-all font-mono tracking-widest"
              />
            </div>

            {/* Product dropdown */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#1E94A4]" />
                {text.productLabel}
              </label>
              <div className="relative">
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:border-[#1E94A4] focus:ring-2 focus:ring-[#1E94A4]/20 rounded-xl outline-none text-sm transition-all appearance-none cursor-pointer pr-10"
                >
                  {productOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 8 4 4 4-4" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading || !formData.name.trim() || formData.phone.length < 10}
              className="w-full py-3.5 bg-gradient-to-r from-[#1E94A4] to-[#22d3ee] hover:from-[#0B7989] hover:to-[#1E94A4]
                text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-[#1E94A4]/30
                disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{language === 'mr' ? "जतन करत आहे..." : "Saving..."}</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>{text.btnSubmit}</span>
                </>
              )}
            </button>

          </form>

          <p className="text-center text-xs text-gray-400 dark:text-zinc-600 mt-4">
            🔒 {language === 'mr' ? "तुमची माहिती सुरक्षित आहे" : "Your information is safe with us"}
          </p>
        </div>
      </div>
    </div>
  )
}
