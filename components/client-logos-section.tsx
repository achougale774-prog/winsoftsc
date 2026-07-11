"use client"

import { useLanguage } from "@/components/language-provider"

const clients = [
  { name: "Shri Mahalaxmi Dudh Sanstha", nameMr: "श्री महालक्ष्मी दूध संस्था", location: "Kolhapur", locationMr: "कोल्हापूर", industry: "dairy" },
  { name: "Kolhapur Zilla Dudh Sangh", nameMr: "कोल्हापूर जिल्हा दूध संघ", location: "Kolhapur", locationMr: "कोल्हापूर", industry: "dairy" },
  { name: "Kulkarni Jewellers", nameMr: "कुलकर्णी ज्वेलर्स", location: "Sangli", locationMr: "सांगली", industry: "gold" },
  { name: "Shri Chhatrapati Sugar Factory", nameMr: "श्री छत्रपती साखर कारखाना", location: "Kolhapur", locationMr: "कोल्हापूर", industry: "sugar" },
  { name: "Mahalunge Dudh Sanstha", nameMr: "महालुंगे दूध संस्था", location: "Pune", locationMr: "पुणे", industry: "dairy" },
  { name: "Gaikwad Dairy Cooperative", nameMr: "गायकवाड डेअरी सहकारी", location: "Satara", locationMr: "सातारा", industry: "dairy" },
  { name: "Warna Dudh Sangh", nameMr: "वारणा दूध संघ", location: "Kolhapur", locationMr: "कोल्हापूर", industry: "dairy" },
  { name: "Solapur Gold Traders", nameMr: "सोलापूर गोल्ड ट्रेडर्स", location: "Solapur", locationMr: "सोलापूर", industry: "gold" },
  { name: "Rajarambapu Sugar Factory", nameMr: "राजारामबापू साखर कारखाना", location: "Sangli", locationMr: "सांगली", industry: "sugar" },
  { name: "Shivamrut Dudh Sanstha", nameMr: "शिवामृत दूध संस्था", location: "Nashik", locationMr: "नाशिक", industry: "dairy" },
  { name: "Belgaum Dairy Union", nameMr: "बेळगाव डेअरी युनियन", location: "Karnataka", locationMr: "कर्नाटक", industry: "dairy" },
  { name: "Pune Jewellery House", nameMr: "पुणे ज्वेलरी हाऊस", location: "Pune", locationMr: "पुणे", industry: "gold" },
]

const industryColors: Record<string, string> = {
  dairy: "bg-[#E8F4F5] dark:bg-[#1E94A4]/10 border-[#1E94A4]/20 dark:border-[#1E94A4]/20 text-[#0B7989] dark:text-[#22d3ee]",
  gold:  "bg-[#E8F4F5] dark:bg-[#0B7989]/10 border-[#0B7989]/20 dark:border-[#0B7989]/20 text-[#1E94A4] dark:text-[#22d3ee]",
  sugar: "bg-[#E8F4F5] dark:bg-[#22d3ee]/10 border-[#22d3ee]/20 dark:border-[#22d3ee]/20 text-[#0B7989] dark:text-[#1E94A4]",
}

const industryEmoji: Record<string, string> = {
  dairy: "🥛",
  gold: "💎",
  sugar: "🏭",
}

export function ClientLogosSection() {
  const { language } = useLanguage()

  const heading = language === "mr"
    ? "आमचे विश्वासू ग्राहक"
    : language === "hi"
    ? "हमारे विश्वसनीय ग्राहक"
    : language === "kn"
    ? "ನಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ಗ್ರಾಹಕರು"
    : "Trusted by 2000+ Businesses Across India"

  const subheading = language === "mr"
    ? "महाराष्ट्र, कर्नाटक आणि संपूर्ण भारतातील आघाडीच्या dairy, gold आणि sugar factory कंपन्या Winsoft वर विश्वास ठेवतात."
    : language === "hi"
    ? "महाराष्ट्र, कर्नाटक और पूरे भारत की अग्रणी डेयरी, गोल्ड और शुगर फैक्ट्री कंपनियां Winsoft पर भरोसा करती हैं।"
    : language === "kn"
    ? "ಮಹಾರಾಷ್ಟ್ರ, ಕರ್ನಾಟಕ ಮತ್ತು ಭಾರತದಾದ್ಯಂತ ಪ್ರಮುಖ ಡೈರಿ, ಗೋಲ್ಡ್ ಮತ್ತು ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆ ಕಂಪನಿಗಳು Winsoft ಅನ್ನು ನಂಬುತ್ತಾರೆ."
    : "Leading dairy cooperatives, jewellery businesses, and sugar factories across Maharashtra, Karnataka & India trust Winsoft."

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/80 dark:bg-zinc-900/50 border-t border-gray-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 text-[#1E94A4] text-xs font-sans font-bold mb-4 border border-[#1E94A4]/20">
            🤝 {language === "mr" ? "2000+ ग्राहक" : language === "hi" ? "2000+ ग्राहक" : "2000+ Clients"}
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-4">
            {heading}
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 font-serif max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${industryColors[client.industry]}`}
            >
              <span className="text-2xl mb-2">{industryEmoji[client.industry]}</span>
              <p className="text-xs font-bold leading-tight mb-1">
                {language === "mr" ? client.nameMr : client.name}
              </p>
              <p className="text-[10px] opacity-70">
                {language === "mr" ? client.locationMr : client.location}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { number: "2000+", labelMr: "आनंदी ग्राहक", labelEn: "Happy Clients", emoji: "😊" },
            { number: "25+", labelMr: "वर्षांचा अनुभव", labelEn: "Years Experience", emoji: "🏆" },
            { number: "15+", labelMr: "जिल्हे", labelEn: "Districts Covered", emoji: "📍" },
            { number: "3", labelMr: "उद्योग क्षेत्रे", labelEn: "Industry Sectors", emoji: "🏭" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm">
              <div className="text-2xl mb-1">{stat.emoji}</div>
              <div className="text-3xl font-bold text-[#1E94A4] font-sans">{stat.number}</div>
              <div className="text-sm text-gray-500 dark:text-zinc-400 font-serif mt-1">
                {language === "mr" ? stat.labelMr : stat.labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
