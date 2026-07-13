"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { ExternalLink, Star, ThumbsUp, Instagram, Linkedin } from "lucide-react"

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
    name: "Abhishek Chougale",
    nameMr: "अभिषेक चौगुले",
    avatar: "A",
    avatarColor: "#1E94A4",
    image: "/google map rating images/abhishek chougale 1.jpeg",
    instagram: "https://www.instagram.com/abhishek_chougale_6448?igsh=MXB1OGVjZGI1ODluNw==",
    linkedin: "https://www.linkedin.com/in/abhishek-chougale-573786268?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    rating: 5,
    time: "2 weeks ago",
    timeMr: "२ आठवड्यांपूर्वी",
    review: "Incredible place to work! The work culture is highly supportive, and the leadership encourages innovation. I've had the opportunity to work on cutting-edge technologies like ERP integrations and mobile apps, which has immensely helped my career growth.",
    reviewMr: "काम करण्यासाठी अत्यंत उत्कृष्ट ठिकाण! येथील कामाचे वातावरण खूप सकारात्मक आणि प्रेरणादायी आहे. मला ERP integrations आणि मोबाईल ॲप्स सारख्या आधुनिक तंत्रज्ञानावर काम करण्याची संधी मिळाली, ज्यामुळे माझ्या करिअरच्या वाढीस खूप मदत झाली आहे.",
    helpful: 12,
    verified: true,
  },
  {
    id: 2,
    name: "Rutuja Patil",
    nameMr: "ऋतुजा पाटील",
    avatar: "R",
    avatarColor: "#0B7989",
    image: "/google map rating images/rutuja patil 1.jpeg",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    rating: 5,
    time: "1 month ago",
    timeMr: "१ महिन्यापूर्वी",
    review: "Winsoft offers a great work-life balance and a very professional atmosphere. The management values employee suggestions and provides excellent training programs. The collaborative environment makes it a pleasure to work here every day.",
    reviewMr: "Winsoft मध्ये कामाचे आणि वैयक्तिक आयुष्याचे उत्तम संतुलन राखता येते. येथील व्यवस्थापन कर्मचाऱ्यांच्या सूचनांना महत्त्व देते आणि उत्कृष्ट प्रशिक्षण कार्यक्रम आयोजित करते. सर्वांच्या सहकार्यामुळे दररोज उत्साहाने काम करायला मिळते.",
    helpful: 8,
    verified: true,
  },
  {
    id: 3,
    name: "Ayush Patil",
    nameMr: "आयुष पाटील",
    avatar: "A",
    avatarColor: "#22d3ee",
    image: "/google map rating images/ayush patil 2.jpeg",
    instagram: "https://www.instagram.com/_ayush_jr_10?igsh=MWpsc3oyaG16YzFlaA==",
    linkedin: "https://www.linkedin.com/in/ayush-patil-55097a248?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    rating: 5,
    time: "3 months ago",
    timeMr: "३ महिन्यांपूर्वी",
    review: "Highly supportive team and great learning opportunities for newcomers. The seniors are always ready to guide you, and the work environment is friendly. It is the best software company in Kolhapur to kickstart your tech career.",
    reviewMr: "नवीन काम करणाऱ्यांसाठी अत्यंत सहकारी टीम आणि शिकण्याच्या उत्तम संधी आहेत. सिनिअर्स नेहमी मार्गदर्शन करण्यास तयार असतात. कोल्हापूरमध्ये टेक्नॉलॉजी क्षेत्रात करिअर सुरू करण्यासाठी ही सर्वोत्तम सॉफ्टवेअर कंपनी आहे.",
    helpful: 15,
    verified: true,
  },
  {
    id: 4,
    name: "Ritesh Limble",
    nameMr: "रितेश लिंबळे",
    avatar: "R",
    avatarColor: "#1E94A4",
    image: "/google map rating images/Ritesh limble.jpeg",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    rating: 5,
    time: "2 months ago",
    timeMr: "२ महिन्यांपूर्वी",
    review: "Working here has been an amazing experience. The project management is highly organized, and the focus on quality software delivery is inspiring. I am proud to be a part of a company that is digitalizing rural businesses.",
    reviewMr: "येथे काम करण्याचा अनुभव अप्रतिम आहे. प्रकल्पांचे व्यवस्थापन अतिशय शिस्तबद्ध आहे आणि सॉफ्टवेअरच्या गुणवत्तेवर दिलेला भर प्रेरणादायी आहे. ग्रामीण भागातील व्यवसायांना डिजिटल करणाऱ्या या कंपनीचा भाग असल्याचा मला अभिमान वाटतो.",
    helpful: 19,
    verified: true,
  },
  {
    id: 5,
    name: "Shweta Alavekar",
    nameMr: "श्वेता आळवेकर",
    avatar: "S",
    avatarColor: "#0B7989",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    rating: 5,
    time: "1 month ago",
    timeMr: "१ महिन्यापूर्वी",
    review: "What I love most about Winsoft is the positive energy and diversity. We are encouraged to think outside the box. The training is very thorough, making it easy for new employees to adapt and contribute to client success.",
    reviewMr: "Winsoft मध्ये मला सर्वात जास्त सकारात्मक ऊर्जा आणि विविधता आवडते. आम्हाला चौकटीबाहेर जाऊन विचार करण्यास प्रोत्साहन दिले जाते. ट्रेनिंग अतिशय सविस्तर असल्याने नवीन कर्मचाऱ्यांना कामात रुळणे सोपे जाते.",
    helpful: 11,
    verified: true,
  },
  {
    id: 6,
    name: "Rahul Patil",
    nameMr: "राहुल पाटील",
    avatar: "R",
    avatarColor: "#22d3ee",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    rating: 5,
    time: "3 weeks ago",
    timeMr: "३ आठवड्यांपूर्वी",
    review: "A decade of growth and learning! Over the years, I've seen the company scale from simple solutions to robust ERP networks. The management is transparent, trustworthy, and always prioritizes employee well-being.",
    reviewMr: "१० वर्षांचा प्रगतीचा आणि शिकण्याचा प्रवास! या काळात कंपनीला साध्या सोल्यूशन्सपासून ते robust ERP नेटवर्कपर्यंत विस्तारताना पाहिले आहे. येथील व्यवस्थापन अतिशय पारदर्शक, विश्वासू आणि कर्मचाऱ्यांची काळजी घेणारे आहे.",
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
    mr: "कर्मचाऱ्यांचे अभिप्राय",
    hi: "कर्मचारियों के अभिप्राय",
    kn: "ಉದ್ಯೋಗಿಗಳ ಅಭಿಪ್ರಾಯಗಳು",
    en: "Employee Reviews",
  }[language] || "Employee Reviews"

  const subheading = {
    mr: "Winsoft मधील कामाचा अनुभव आणि कर्मचाऱ्यांचे अभिप्राय",
    hi: "Winsoft में काम करने का अनुभव और कर्मचारियों के विचार",
    kn: "Winsoft ನಲ್ಲಿ ಕೆಲಸದ अनुभव आणि ಉದ್ಯೋಗಿಗಳ ಅಭಿಪ್ರಾಯಗಳು",
    en: "Work experience and feedback from our team members at Winsoft",
  }[language] || "Work experience and feedback from our team members at Winsoft"

  const reviewLabel = { mr: "Review द्या", hi: "Review दें", en: "Write a Review", kn: "Review ಬರೆಯಿರಿ" }[language] || "Write a Review"
  const viewAllLabel = { mr: "Google वर सगळे Reviews बघा", hi: "Google पर सभी Reviews देखें", en: "View All Reviews on Google", kn: "Google ನಲ್ಲಿ ಎಲ್ಲಾ Reviews ನೋಡಿ" }[language] || "View All Reviews on Google"
  const showMoreLabel = { mr: "आणखी Reviews बघा", hi: "और Reviews देखें", en: "Show More Reviews", kn: "ಇನ್ನಷ್ಟು Reviews ನೋಡಿ" }[language] || "Show More"
  const verifiedLabel = { mr: "कर्मचारी", hi: "कर्मचारी", en: "Team Member", kn: "ಉದ್ಯೋಗಿ" }[language] || "Team Member"
  const helpfulLabel = { mr: "उपयुक्त", hi: "उपयोगी", en: "Helpful", kn: "ಸಹಾಯಕಾರಿಯಾಗಿದೆ" }[language] || "Helpful"

  return (
    <section id="employee-reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-3">
            {heading}
          </h2>
          <p className="text-gray-500 dark:text-zinc-400 font-serif">{subheading}</p>
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
                  {review.image ? (
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-gray-100 dark:border-zinc-800"
                    />
                  ) : (
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                      style={{ background: review.avatarColor }}
                    >
                      {review.avatar}
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-zinc-100">
                      {language === "mr" ? review.nameMr : review.name}
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      {review.verified && (
                        <span className="text-[10px] text-green-600 dark:text-green-400 font-semibold bg-green-50 dark:bg-green-900/30 px-1.5 py-0.5 rounded-full border border-green-200 dark:border-green-800">
                          ✓ {language === "mr" ? ((review as any).roleMr || verifiedLabel) : ((review as any).role || verifiedLabel)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {review.instagram && (
                    <a
                      href={review.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E1306C] hover:opacity-80 transition-all hover:scale-110"
                      title="Instagram"
                    >
                      <Instagram size={17} />
                    </a>
                  )}
                  {review.linkedin && (
                    <a
                      href={review.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0A66C2] dark:text-[#38bdf8] hover:opacity-80 transition-all hover:scale-110"
                      title="LinkedIn"
                    >
                      <Linkedin size={17} />
                    </a>
                  )}
                  <GoogleLogo size={17} />
                </div>
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

      </div>
    </section>
  )
}
