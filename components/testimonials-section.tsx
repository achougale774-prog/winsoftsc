"use client"

import { useLanguage } from "@/components/language-provider"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Ramesh Patil",
    nameMr: "रमेश पाटील",
    role: "Chairman",
    roleMr: "अध्यक्ष",
    company: "Shri Mahalaxmi Dudh Sanstha, Kolhapur",
    companyMr: "श्री महालक्ष्मी दूध संस्था, कोल्हापूर",
    image: "/professional-indian.png",
    rating: 5,
    review:
      "Winsoft चे AMCS software आमच्या संस्थेत install केल्यापासून दूध संकलनात पारदर्शकता आली. शेतकऱ्यांचा विश्वास वाढला आणि manual errors पूर्णपणे बंद झाल्या. 25 वर्षांचा अनुभव software मध्ये दिसतो.",
    reviewEn:
      "Since installing Winsoft's AMCS software, transparency in milk collection has improved greatly. Farmer trust has increased and manual errors have completely stopped. Their 25 years of experience shows in the product.",
  },
  {
    name: "Suresh Jadhav",
    nameMr: "सुरेश जाधव",
    role: "Manager",
    roleMr: "व्यवस्थापक",
    company: "Kolhapur Zilla Dudh Utpadak Sangh",
    companyMr: "कोल्हापूर जिल्हा दूध उत्पादक संघ",
    image: "/indian-businessman-ceo.png",
    rating: 5,
    review:
      "मोबाईल ॲप मुळे आमच्या शेतकऱ्यांना त्यांचे daily slips आणि payment mobile वर पाहता येतात. Support team खूप responsive आहे — कोणतीही problem असली तरी लगेच solve होते.",
    reviewEn:
      "The mobile app allows our farmers to view their daily slips and payments on mobile. The support team is very responsive — any problem gets solved immediately.",
  },
  {
    name: "Vijay Kulkarni",
    nameMr: "विजय कुलकर्णी",
    role: "Owner",
    roleMr: "मालक",
    company: "Kulkarni Jewellers, Sangli",
    companyMr: "कुलकर्णी ज्वेलर्स, सांगली",
    image: "/indian-man-client-success-headshot.png",
    rating: 5,
    review:
      "Goldwin software मुळे आमच्या showroom चे billing, Girvi management, आणि GST filing खूप सोपे झाले. आधी 2-3 तास लागायचे, आता 15 मिनिटांत सगळे होते. Excellent product!",
    reviewEn:
      "Goldwin software has made our showroom's billing, Girvi management, and GST filing very easy. It used to take 2-3 hours, now everything is done in 15 minutes. Excellent product!",
  },
  {
    name: "Anil Deshmukh",
    nameMr: "अनिल देशमुख",
    role: "Director",
    roleMr: "संचालक",
    company: "Shri Chhatrapati Sugar Factory, Kolhapur",
    companyMr: "श्री छत्रपती साखर कारखाना, कोल्हापूर",
    image: "/indian-software-office-collaboration.png",
    rating: 5,
    review:
      "Sugar factory ERP software ने आमच्या cane procurement आणि farmer payment process पूर्णपणे digitalize केली. Reports accurate आहेत आणि audit खूप सोपे झाले. Winsoft team ला धन्यवाद!",
    reviewEn:
      "The Sugar Factory ERP software has completely digitalized our cane procurement and farmer payment process. Reports are accurate and audits have become much easier. Thank you Winsoft team!",
  },
  {
    name: "Priya Shinde",
    nameMr: "प्रिया शिंदे",
    role: "Secretary",
    roleMr: "सचिव",
    company: "Mahalunge Dudh Sanstha, Pune",
    companyMr: "महालुंगे दूध संस्था, पुणे",
    image: "/indian-woman-software-developer.png",
    rating: 5,
    review:
      "Software install केल्यानंतर training खूप चांगली मिळाली. Marathi मध्ये सगळे explain केले. आमच्या staff ला लगेच समजले. Customer support 24/7 available आहे असे वाटते!",
    reviewEn:
      "After software installation, the training was excellent. Everything was explained in Marathi. Our staff understood it immediately. Customer support feels like it's available 24/7!",
  },
  {
    name: "Mahesh Gaikwad",
    nameMr: "महेश गायकवाड",
    role: "President",
    roleMr: "अध्यक्ष",
    company: "Gaikwad Dairy Cooperative, Satara",
    companyMr: "गायकवाड डेअरी सहकारी संस्था, सातारा",
    image: "/placeholder-user.jpg",
    rating: 5,
    review:
      "10 वर्षांपासून Winsoft software वापरत आहोत. प्रत्येक update मध्ये नवीन features येतात. Software कधीही crash होत नाही. Reliable आणि trustworthy company आहे.",
    reviewEn:
      "We have been using Winsoft software for 10 years. Every update brings new features. The software never crashes. A reliable and trustworthy company.",
  },
]

export function TestimonialsSection() {
  const { language } = useLanguage()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 text-[#1E94A4] text-xs font-sans font-bold mb-4 border border-[#1E94A4]/20">
            ⭐ {language === "mr" ? "ग्राहकांचे अभिप्राय" : language === "hi" ? "ग्राहकों की समीक्षाएं" : language === "kn" ? "ಗ್ರಾಹಕರ ಅಭಿಪ್ರಾಯಗಳು" : "Customer Reviews"}
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-6">
            {language === "mr"
              ? "2000+ ग्राहक आमच्यावर विश्वास ठेवतात"
              : language === "hi"
              ? "2000+ ग्राहक हम पर भरोसा करते हैं"
              : language === "kn"
              ? "2000+ ಗ್ರಾಹಕರು ನಮ್ಮನ್ನು ನಂಬುತ್ತಾರೆ"
              : "2000+ Clients Trust Winsoft"}
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 font-serif max-w-2xl mx-auto text-lg">
            {language === "mr"
              ? "महाराष्ट्र, कर्नाटक आणि संपूर्ण भारतातील dairy, gold, आणि sugar factory व्यावसायिकांचे अनुभव."
              : language === "hi"
              ? "महाराष्ट्र, कर्नाटक और पूरे भारत के डेयरी, गोल्ड और शुगर फैक्ट्री व्यवसायियों के अनुभव।"
              : "Real experiences from dairy, gold, and sugar factory businesses across Maharashtra, Karnataka, and India."}
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "2000+", label: language === "mr" ? "आनंदी ग्राहक" : "Happy Clients" },
            { number: "25+", label: language === "mr" ? "वर्षांचा अनुभव" : "Years Experience" },
            { number: "4.9/5", label: language === "mr" ? "सरासरी Rating" : "Average Rating" },
            { number: "99.9%", label: language === "mr" ? "Uptime Guarantee" : "Uptime Guarantee" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800"
            >
              <div className="text-3xl font-bold text-[#1E94A4] font-sans mb-1">{stat.number}</div>
              <div className="text-sm text-gray-500 dark:text-zinc-400 font-serif">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-zinc-900 rounded-2xl p-6 border border-gray-100 dark:border-zinc-800 hover:border-[#1E94A4]/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-[#1E94A4]/30 mb-4 flex-shrink-0" />

              {/* Review Text */}
              <p className="text-gray-700 dark:text-zinc-300 font-serif text-sm leading-relaxed flex-grow mb-6">
                "{language === "mr" ? t.review : t.reviewEn}"
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-gray-200 dark:border-zinc-800 pt-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-[#1E94A4]/10">
                  <Image
                    src={t.image}
                    alt={language === "mr" ? t.nameMr : t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-sans font-semibold text-gray-900 dark:text-zinc-100 text-sm">
                    {language === "mr" ? t.nameMr : t.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-zinc-400 font-serif">
                    {language === "mr" ? t.roleMr : t.role},{" "}
                    {language === "mr" ? t.companyMr : t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
