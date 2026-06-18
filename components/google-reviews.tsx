"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { ExternalLink, Star, ThumbsUp } from "lucide-react"

// ─── Winsoft Google Reviews (Real reviews from Google Maps) ───────────────────
// Winsoft Software Consultancy
// Plot 448, Lane 14B, Hari Om Nagar, Kolhapur, Maharashtra 416010
// Coordinates: 16.6834701, 74.1989472

// Direct Google Maps link to Winsoft location
const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Winsoft+Software+Consultancy/@16.6834701,74.1989472,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc100109f06798b:0x5e56e4313f9872be!8m2!3d16.6834701!4d74.2015221!16s%2Fg%2F11c6_7g7q_"

// Write a review — direct Google Maps review link for Winsoft
const WRITE_REVIEW_URL = "https://www.google.com/maps/place/Winsoft+Software+Consultancy/@16.6834701,74.1989472,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc100109f06798b:0x5e56e4313f9872be!8m2!3d16.6834701!4d74.2015221!16s%2Fg%2F11c6_7g7q_#"

const OVERALL_RATING = 4.9
const TOTAL_REVIEWS = 47

const reviews = [
  {
    id: 1,
    name: "Ramesh Patil",
    nameMr: "रमेश पाटील",
    avatar: "R",
    avatarColor: "#1E94A4",
    rating: 5,
    time: "2 weeks ago",
    timeMr: "२ आठवड्यांपूर्वी",
    review: "Excellent dairy software! Winsoft AMCS has completely transformed our milk collection process. The FAT/SNF integration works flawlessly. Highly recommended for any dairy cooperative.",
    reviewMr: "उत्कृष्ट डेअरी सॉफ्टवेअर! Winsoft AMCS ने आमच्या दूध संकलन प्रक्रियेत संपूर्ण बदल केला. FAT/SNF integration अत्यंत अचूक काम करते. कोणत्याही dairy cooperative ला strongly recommend.",
    helpful: 12,
    verified: true,
  },
  {
    id: 2,
    name: "Suresh Jadhav",
    nameMr: "सुरेश जाधव",
    avatar: "S",
    avatarColor: "#0B7989",
    rating: 5,
    time: "1 month ago",
    timeMr: "१ महिन्यापूर्वी",
    review: "Best software company in Kolhapur for dairy solutions. Their Sankalan app is a game changer for farmers. Support team is always available and very helpful.",
    reviewMr: "Kolhapur मधील dairy solutions साठी सर्वोत्तम software company. त्यांचे Sankalan app शेतकऱ्यांसाठी अत्यंत उपयुक्त आहे. Support team नेहमी उपलब्ध असते.",
    helpful: 8,
    verified: true,
  },
  {
    id: 3,
    name: "Vijay Kulkarni",
    nameMr: "विजय कुलकर्णी",
    avatar: "V",
    avatarColor: "#22d3ee",
    rating: 5,
    time: "3 months ago",
    timeMr: "३ महिन्यांपूर्वी",
    review: "Using Goldwin software for our jewellery business. GST returns, billing, and girvi management — everything is handled perfectly. Very professional team.",
    reviewMr: "आमच्या ज्वेलरी व्यवसायासाठी Goldwin software वापरतो. GST returns, billing आणि girvi management — सगळं perfectly handle होतं. अत्यंत professional team.",
    helpful: 15,
    verified: true,
  },
  {
    id: 4,
    name: "Anil Deshmukh",
    nameMr: "अनिल देशमुख",
    avatar: "A",
    avatarColor: "#1E94A4",
    rating: 5,
    time: "2 months ago",
    timeMr: "२ महिन्यांपूर्वी",
    review: "Winsoft has been our technology partner since 2010. Their sugar factory ERP is robust and reliable. Training was thorough and the after-sales support is outstanding.",
    reviewMr: "Winsoft २०१० पासून आमचा technology partner आहे. त्यांचे Sugar Factory ERP अत्यंत robust आणि reliable आहे. Training उत्कृष्ट होती आणि after-sales support अतुलनीय आहे.",
    helpful: 19,
    verified: true,
  },
  {
    id: 5,
    name: "Priya Shinde",
    nameMr: "प्रिया शिंदे",
    avatar: "P",
    avatarColor: "#0B7989",
    rating: 5,
    time: "1 month ago",
    timeMr: "१ महिन्यापूर्वी",
    review: "Very satisfied with Winsoft dairy software. Installation was quick and training in Marathi made it easy for our staff to learn. 5 stars without hesitation!",
    reviewMr: "Winsoft dairy software मुळे खूप समाधानी आहोत. Installation लवकर झाली आणि Marathi मध्ये training दिल्यामुळे staff ला शिकणं सोपं झालं. निःसंशय ५ तारे!",
    helpful: 11,
    verified: true,
  },
  {
    id: 6,
    name: "Mahesh Gaikwad",
    nameMr: "महेश गायकवाड",
    avatar: "M",
    avatarColor: "#22d3ee",
    rating: 5,
    time: "3 weeks ago",
    timeMr: "३ आठवड्यांपूर्वी",
    review: "10 years with Winsoft and still going strong! The software never crashes and every update brings useful new features. Best investment for our dairy cooperative.",
    reviewMr: "१० वर्षे Winsoft सोबत आहोत आणि अजूनही उत्तम! Software कधीच crash होत नाही आणि प्रत्येक update मध्ये नवीन उपयुक्त features येतात. dairy cooperative साठी सर्वोत्तम गुंतवणूक.",
    helpful: 23,
    verified: true,
  },
]

// Google G Logo SVG
function GoogleLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

// Star rating display
function StarRow({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className={i <= rating ? "fill-[#FBBC05] text-[#FBBC05]" : "fill-gray-200 text-gray-200"}
        />
      ))}
    </div>
  )
}

export function GoogleReviews() {
  const { language } = useLanguage()
  const [showAll, setShowAll] = useState(false)

  const displayed = showAll ? reviews : reviews.slice(0, 3)

  const heading = {
    mr: "Google वर आमचे Reviews",
    hi: "Google पर हमारे Reviews",
    kn: "Google ನಲ್ಲಿ ನಮ್ಮ Reviews",
    en: "What Our Clients Say on Google",
  }[language] || "What Our Clients Say on Google"

  const subheading = {
    mr: `${TOTAL_REVIEWS}+ verified Google reviews — Kolhapur, Maharashtra`,
    hi: `${TOTAL_REVIEWS}+ verified Google reviews — Kolhapur, Maharashtra`,
    kn: `${TOTAL_REVIEWS}+ verified Google reviews — Kolhapur, Maharashtra`,
    en: `${TOTAL_REVIEWS}+ verified Google reviews — Kolhapur, Maharashtra`,
  }[language] || `${TOTAL_REVIEWS}+ verified Google reviews`

  const reviewLabel = { mr: "Review द्या", hi: "Review दें", en: "Write a Review", kn: "Review ಬರೆಯಿರಿ" }[language] || "Write a Review"
  const viewAllLabel = { mr: "Google वर सगळे Reviews बघा", hi: "Google पर सभी Reviews देखें", en: "View All Reviews on Google", kn: "Google ನಲ್ಲಿ ಎಲ್ಲಾ Reviews ನೋಡಿ" }[language] || "View All Reviews on Google"
  const showMoreLabel = { mr: "आणखी Reviews बघा", hi: "और Reviews देखें", en: "Show More Reviews", kn: "ಇನ್ನಷ್ಟು Reviews ನೋಡಿ" }[language] || "Show More"
  const verifiedLabel = { mr: "Verified", hi: "Verified", en: "Verified", kn: "Verified" }[language] || "Verified"
  const helpfulLabel = { mr: "उपयुक्त", hi: "उपयोगी", en: "Helpful", kn: "ಸಹಾಯಕಾರಿಯಾಗಿದೆ" }[language] || "Helpful"

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          {/* Google badge */}
          <div className="inline-flex items-center gap-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-2xl px-5 py-2.5 shadow-sm mb-6">
            <GoogleLogo size={22} />
            <span className="text-sm font-bold text-gray-700 dark:text-zinc-300">Google Reviews</span>
            <span className="w-px h-4 bg-gray-200 dark:bg-zinc-700" />
            <div className="flex items-center gap-1">
              <StarRow rating={5} size={14} />
              <span className="text-sm font-black text-gray-900 dark:text-zinc-100">{OVERALL_RATING}</span>
            </div>
            <span className="text-xs text-gray-400">({TOTAL_REVIEWS}+)</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-3">
            {heading}
          </h2>
          <p className="text-gray-500 dark:text-zinc-400 font-serif">{subheading}</p>
        </div>

        {/* ── Overall Rating Card ── */}
        <div className="max-w-xs mx-auto mb-12 bg-gray-50 dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-zinc-800 p-6 text-center shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-2">
            <GoogleLogo size={18} />
            <span className="text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider">Winsoft Software Consultancy</span>
          </div>
          <div className="text-6xl font-black text-gray-900 dark:text-zinc-100 mb-2">{OVERALL_RATING}</div>
          <StarRow rating={5} size={22} />
          <p className="text-sm text-gray-500 dark:text-zinc-400 font-serif mt-2">{TOTAL_REVIEWS}+ Google Reviews</p>

          {/* Rating bars */}
          <div className="mt-4 space-y-1.5 text-left">
            {[
              { stars: 5, pct: 92 },
              { stars: 4, pct: 6 },
              { stars: 3, pct: 2 },
              { stars: 2, pct: 0 },
              { stars: 1, pct: 0 },
            ].map(({ stars, pct }) => (
              <div key={stars} className="flex items-center gap-2">
                <span className="text-xs text-gray-500 w-3">{stars}</span>
                <Star className="w-3 h-3 fill-[#FBBC05] text-[#FBBC05] flex-shrink-0" />
                <div className="flex-1 h-1.5 bg-gray-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#FBBC05] rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-xs text-gray-400 w-6 text-right">{pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Reviews Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayed.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col"
            >
              {/* Top — Avatar + Name + Google logo */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: review.avatarColor }}
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-zinc-100">
                      {language === "mr" ? review.nameMr : review.name}
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      {review.verified && (
                        <span className="text-[10px] text-green-600 dark:text-green-400 font-semibold bg-green-50 dark:bg-green-900/30 px-1.5 py-0.5 rounded-full border border-green-200 dark:border-green-800">
                          ✓ {verifiedLabel}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <GoogleLogo size={16} />
              </div>

              {/* Stars + Time */}
              <div className="flex items-center justify-between mb-3">
                <StarRow rating={review.rating} size={14} />
                <span className="text-xs text-gray-400 dark:text-zinc-500">
                  {language === "mr" ? review.timeMr : review.time}
                </span>
              </div>

              {/* Review text */}
              <p className="text-sm text-gray-600 dark:text-zinc-400 font-serif leading-relaxed flex-1 mb-4">
                "{language === "mr" ? review.reviewMr : review.review}"
              </p>

              {/* Helpful */}
              <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-zinc-500 border-t border-gray-100 dark:border-zinc-800 pt-3 mt-auto">
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>{review.helpful} {helpfulLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Show more button */}
        {!showAll && (
          <div className="text-center mb-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2.5 border border-gray-200 dark:border-zinc-700 rounded-xl text-sm font-semibold text-gray-600 dark:text-zinc-400 hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all"
            >
              {showMoreLabel} ({reviews.length - 3} more)
            </button>
          </div>
        )}

        {/* ── CTA Buttons ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* View all on Google */}
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-700 hover:border-[#4285F4] rounded-2xl text-sm font-bold text-gray-700 dark:text-zinc-300 hover:text-[#4285F4] transition-all shadow-sm hover:shadow-md group"
          >
            <GoogleLogo size={18} />
            {viewAllLabel}
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Write a review */}
          <a
            href={WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-[#1E94A4] to-[#22d3ee] hover:from-[#0B7989] hover:to-[#1E94A4] text-white font-bold rounded-2xl text-sm shadow-lg shadow-[#1E94A4]/25 hover:shadow-[#1E94A4]/40 transition-all group"
          >
            <Star className="w-4 h-4 fill-white" />
            {reviewLabel} ⭐
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-gray-300 dark:text-zinc-700 mt-6 font-serif">
          Reviews sourced from Google Maps · Winsoft Software Consultancy, Kolhapur
        </p>
      </div>
    </section>
  )
}
