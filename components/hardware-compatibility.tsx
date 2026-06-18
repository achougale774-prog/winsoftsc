"use client"

import React, { useState } from "react"
import { useLanguage } from "./language-provider"
import { 
  Cpu, 
  Link2, 
  Radio, 
  CheckCircle2, 
  Zap, 
  RotateCcw,
  Smartphone,
  Check,
  Server,
  Cable
} from "lucide-react"

const localizedTexts = {
  en: {
    sectionTitle: "Machine & Hardware Compatibility Chart",
    sectionSubtitle: "Winsoft connects instantly with popular weighing scales and fat analyzers in the market. Eliminate manual entry errors and build member trust.",
    scaleCategory: "Compatible Weighing Scales",
    analyzerCategory: "Compatible Milk Analyzers",
    winsoftHub: "Winsoft Dairy Software",
    connStatus: "Active Connection",
    rs232Detail: "RS232 Serial Data",
    usbDetail: "USB Interface",
    bluetoothDetail: "Bluetooth Wireless",
    clickPrompt: "Click on any brand to check connection specifications",
    featuresTitle: "Zero-Error Hardware Integration",
    features: [
      { title: "Sub-Second Data Capture", desc: "Weight and FAT/SNF values populate in the software automatically in less than 0.8 seconds." },
      { title: "Tamper-Proof Controls", desc: "Lock manual editing on weights to prevent manipulation and ensure 100% farmer transparency." },
      { title: "Hot-Plug Compatibility", desc: "Easily switch hardware units or plug in new machines without reinstalling the software." }
    ],
    techSpecTitle: "Connection Details",
    protocols: {
      scale: "Weighing Scale connection runs over standard RS232 COM port or USB-to-Serial. Supports continuous streams or print-stable triggers.",
      analyzer: "Milk Analyzer data parses automatically via standard serial protocols. Extracts FAT, SNF, Added Water, and density parameters in one go."
    }
  },
  mr: {
    sectionTitle: "मशीन सुसंगतता तक्ता (Hardware Compatibility)",
    sectionSubtitle: "बाजारातील लोकप्रिय वजन काटे आणि फॅट मशिन्स Winsoft सॉफ्टवेअरसोबत सहज कनेक्ट होतात. मानवी चुका टाळा आणि सभासदांचा विश्वास वाढवा.",
    scaleCategory: "सुसंगत वजन काटे (Weighing Scales)",
    analyzerCategory: "सुसंगत फॅट मशिन्स (Analyzers)",
    winsoftHub: "Winsoft डेअरी सॉफ्टवेअर",
    connStatus: "सक्रिय जोडणी",
    rs232Detail: "RS232 सिरिअल डेटा",
    usbDetail: "USB केबल कनेक्टिव्हिटी",
    bluetoothDetail: "ब्लूटूथ वायरलेस",
    clickPrompt: "कनेक्शन वैशिष्ट्ये पाहण्यासाठी कोणत्याही ब्रँडवर क्लिक करा",
    featuresTitle: "शून्य-त्रुटी हार्डवेअर एकत्रीकरण",
    features: [
      { title: "१ सेकंदाच्या आत डेटा संकलन", desc: "वजन काटा आणि फॅट मशीनचे रिडिंग एका सेकंदापेक्षा कमी वेळेत सॉफ्टवेअरमध्ये आपोआप नोंदवले जाते." },
      { title: "भेसळ व फेरफार नियंत्रण", desc: "वजन हाताने टाईप करण्याची सुविधा बंद ठेवता येते, जेणेकरून कोणत्याही प्रकारे वजनात फेरफार होणार नाही." },
      { title: "सहज प्लग-अँड-प्ले जोडणी", desc: "कोणतेही नवीन मॉडेल किंवा मशीन जुन्या जोडणीला बदलून सॉफ्टवेअर री-इन्स्टॉल न करता जोडता येते." }
    ],
    techSpecTitle: "कनेक्शन तपशील",
    protocols: {
      scale: "वजन काट्यांचे कनेक्शन स्टँडर्ड RS23 COM पोर्ट किंवा USB द्वारे चालते. हे आपोआप वजनाचे स्थिर रिडिंग कॅप्चर करते.",
      analyzer: "फॅट आणि मिल्क ॲनालायझर डेटा सिरीयल प्रोटोकॉलद्वारे आपोआप रीड केला जातो. फॅट, SNF, पाणी आणि घनता सर्व एकाच वेळी जमा होते."
    }
  }
}

export function HardwareCompatibility() {
  const { language } = useLanguage()

  const tHard = localizedTexts[language === "mr" ? "mr" : "en"] || localizedTexts.en

  const [selectedBrand, setSelectedBrand] = useState<{
    name: string;
    type: "scale" | "analyzer";
    model: string;
    port: string;
    speed: string;
  } | null>({
    name: "Lactoscan",
    type: "analyzer",
    model: "Lactoscan S / SL / MCC",
    port: "RS232 DB9 / USB COM",
    speed: "9600 bps"
  })

  // Scales mock brands
  const scaleBrands = [
    { name: "Empire", model: "Empire DX Series", port: "RS232 Serial", speed: "2400 / 9600 bps" },
    { name: "Essae", model: "Essae DS-852", port: "RS232 / USB", speed: "9600 bps" },
    { name: "Phoenix", model: "Phoenix PW Series", port: "RS232 COM", speed: "4800 bps" },
    { name: "Avery", model: "Avery Weigh-Tronix", port: "Serial Loop", speed: "9600 bps" },
    { name: "Sansui", model: "Sansui Scale", port: "RS232 Serial", speed: "2400 bps" },
    { name: "Crown", model: "Crown Industrial Scale", port: "USB COM", speed: "9600 bps" }
  ]

  // Analyzer mock brands
  const analyzerBrands = [
    { name: "Lactoscan", model: "Lactoscan S / SL / MCC", port: "RS232 DB9 / USB COM", speed: "9600 bps" },
    { name: "Milkotester", model: "Milkotester Master Series", port: "RS232 Serial", speed: "9600 bps" },
    { name: "REIL", model: "REIL Milk Analyzer", port: "RS232 COM", speed: "2400 bps" },
    { name: "Everest", model: "Everest Eco", port: "USB / Serial", speed: "9600 bps" },
    { name: "Funke Gerber", model: "LactoStar", port: "RS232 Serial", speed: "19200 bps" }
  ]

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 dark:bg-[#1E94A4]/20 text-[#1E94A4] text-xs font-sans font-bold mb-4 border border-[#1E94A4]/20">
            🔌 {language === "mr" ? "हार्डवेअर कनेक्टिव्हिटी" : "Hardware Integration"}
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6">
            {tHard.sectionTitle}
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 font-serif text-lg leading-relaxed">
            {tHard.sectionSubtitle}
          </p>
          <p className="text-xs text-slate-400 dark:text-zinc-500 italic mt-3">
            💡 {tHard.clickPrompt}
          </p>
        </div>

        {/* Diagram Area */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-50 dark:bg-zinc-900/30 p-8 sm:p-12 rounded-[2.5rem] border dark:border-zinc-900 relative">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Left: Weighing Scales */}
          <div className="lg:col-span-4 space-y-4 z-10">
            <h4 className="font-bold text-xs uppercase text-[#1E94A4] tracking-wider mb-2 border-b pb-2 dark:border-zinc-800">
              {tHard.scaleCategory}
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {scaleBrands.map((brand) => {
                const isSelected = selectedBrand?.name === brand.name
                return (
                  <button
                    key={brand.name}
                    onClick={() => setSelectedBrand({ ...brand, type: "scale" })}
                    className={`p-3.5 rounded-xl border text-center transition-all ${
                      isSelected
                        ? "bg-gradient-to-tr from-[#1E94A4] to-[#22d3ee] text-white border-transparent shadow-lg shadow-[#1E94A4]/20 scale-105"
                        : "bg-white dark:bg-zinc-950 border-slate-200/60 dark:border-zinc-850 hover:border-[#1E94A4] text-gray-700 dark:text-zinc-300"
                    }`}
                  >
                    <div className="font-sans font-bold text-sm">{brand.name}</div>
                    <div className={`text-[9px] mt-1 ${isSelected ? "text-white/80" : "text-gray-400"}`}>
                      {brand.port}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Center: Connection Animation & Software Node */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 text-center space-y-6 z-10">
            
            {/* Connection Visual Hub */}
            <div className="relative w-40 h-40 flex items-center justify-center">
              {/* Pulsing rings */}
              <div className="absolute inset-0 rounded-full border border-[#1E94A4]/30 animate-ping opacity-60" />
              <div className="absolute w-32 h-32 rounded-full border border-dashed border-[#1E94A4]/40 animate-spin opacity-40" />

              {/* Center Core node */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#1E94A4] to-[#22d3ee] text-white shadow-xl flex flex-col items-center justify-center relative border-4 border-white dark:border-zinc-900">
                <Server className="w-8 h-8" />
                <span className="text-[9px] uppercase tracking-wider font-bold mt-1">WINSOFT</span>
              </div>

              {/* Data streams indicator */}
              <div className="absolute -top-4 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2.5 py-0.5 rounded-full text-[9px] font-bold flex items-center gap-1">
                <Zap className="w-3 h-3 fill-emerald-500" />
                <span>{tHard.connStatus}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] text-gray-400 block font-bold uppercase tracking-widest">Protocol Support</span>
              <div className="flex gap-2 justify-center text-[9px] font-bold text-gray-600 dark:text-zinc-400">
                <span className="bg-slate-100 dark:bg-zinc-800 px-2 py-0.5 rounded">{tHard.rs232Detail}</span>
                <span className="bg-slate-100 dark:bg-zinc-800 px-2 py-0.5 rounded">{tHard.usbDetail}</span>
              </div>
            </div>
          </div>

          {/* Right: Milk Analyzers */}
          <div className="lg:col-span-4 space-y-4 z-10">
            <h4 className="font-bold text-xs uppercase text-[#1E94A4] tracking-wider mb-2 border-b pb-2 dark:border-zinc-800 text-right lg:text-left">
              {tHard.analyzerCategory}
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {analyzerBrands.map((brand) => {
                const isSelected = selectedBrand?.name === brand.name
                return (
                  <button
                    key={brand.name}
                    onClick={() => setSelectedBrand({ ...brand, type: "analyzer" })}
                    className={`p-3.5 rounded-xl border text-center transition-all ${
                      isSelected
                        ? "bg-gradient-to-tr from-[#1E94A4] to-[#22d3ee] text-white border-transparent shadow-lg shadow-[#1E94A4]/20 scale-105"
                        : "bg-white dark:bg-zinc-950 border-slate-200/60 dark:border-zinc-850 hover:border-[#1E94A4] text-gray-700 dark:text-zinc-300"
                    }`}
                  >
                    <div className="font-sans font-bold text-sm">{brand.name}</div>
                    <div className={`text-[9px] mt-1 ${isSelected ? "text-white/80" : "text-gray-400"}`}>
                      {brand.port}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

        </div>

        {/* Lower Info Area: Left connection details panel, Right general integration features list */}
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          
          {/* Tech Details Panel */}
          {selectedBrand && (
            <div className="bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 p-6 rounded-3xl space-y-4 flex flex-col justify-between shadow-xs animate-scaleIn">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#1E94A4]/15 rounded-xl text-[#1E94A4]">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider">
                    {selectedBrand.type === "scale" ? "Weighing Scale Brand" : "Analyzer Brand"}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {selectedBrand.name} <span className="text-sm font-normal text-gray-500">({selectedBrand.model})</span>
                  </h4>
                </div>
              </div>

              <p className="text-gray-500 dark:text-zinc-400 text-xs font-serif leading-relaxed">
                {selectedBrand.type === "scale" ? tHard.protocols.scale : tHard.protocols.analyzer}
              </p>

              <div className="grid grid-cols-2 gap-4 border-t dark:border-zinc-850 pt-4 text-[11px] font-semibold">
                <div>
                  <span className="text-gray-400 block text-[9px] uppercase font-bold mb-0.5">Interface Port</span>
                  <span className="text-gray-800 dark:text-zinc-200 font-bold flex items-center gap-1"><Cable className="w-3.5 h-3.5 text-[#1E94A4]" /> {selectedBrand.port}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[9px] uppercase font-bold mb-0.5">Baud Rate speed</span>
                  <span className="text-gray-800 dark:text-zinc-200 font-bold">{selectedBrand.speed}</span>
                </div>
              </div>
            </div>
          )}

          {/* Features Checkpoints */}
          <div className="space-y-6 flex flex-col justify-center">
            <h4 className="text-2xl font-sans font-bold text-gray-900 dark:text-zinc-100 flex items-center gap-2">
              <Link2 className="w-6 h-6 text-[#1E94A4]" />
              {tHard.featuresTitle}
            </h4>
            
            <div className="space-y-4">
              {tHard.features.map((feat, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3px]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 dark:text-zinc-100 text-sm">{feat.title}</h5>
                    <p className="text-gray-500 dark:text-zinc-400 text-xs font-serif mt-1 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
