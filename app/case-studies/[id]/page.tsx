"use client"

import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, ArrowLeft, TrendingUp, Users, Award, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

const caseStudies: Record<string, any> = {
  "1": {
    title: "Modernizing Dairy Operations: 300% Efficiency Increase",
    titleMr: "डेअरी कामकाज आधुनिकीकरण: ३००% कार्यक्षमता वाढ",
    client: "Maharashtra Dairy Cooperative",
    clientMr: "महाराष्ट्र डेअरी सहकारी संस्था",
    industry: "Dairy Industry",
    timeline: "6 months",
    image: "/dairy33.png",
    challenge: "Manual milk collection processes, inconsistent quality testing, and delayed farmer payments were affecting operations. The cooperative was managing 200+ farmers across 5 villages with paper-based records, leading to frequent disputes and errors.",
    challengeMr: "हाताने दूध संकलन प्रक्रिया, असंगत गुणवत्ता चाचणी, आणि उशिरा शेतकरी पेमेंट कामकाजावर परिणाम करत होते. सहकारी संस्था ५ गावांमध्ये २०० हून अधिक शेतकऱ्यांचे व्यवस्थापन कागदावरील नोंदींसह करत होती.",
    solution: "Winsoft implemented a complete AMCS (Automatic Milk Collection System) with digital weighing scales, FAT/SNF analyzers, thermal printers, and the Sankalan mobile app for farmers. The cooperative society admin ERP was also deployed for accounting and audit.",
    solutionMr: "Winsoft ने digital weighing scales, FAT/SNF analyzers, thermal printers, आणि शेतकऱ्यांसाठी Sankalan mobile app सह संपूर्ण AMCS (Automatic Milk Collection System) implement केले.",
    results: [
      { metric: "300%", label: "Efficiency Increase", labelMr: "कार्यक्षमता वाढ", icon: TrendingUp },
      { metric: "50%", label: "Reduction in Complaints", labelMr: "तक्रारींमध्ये घट", icon: Users },
      { metric: "99%", label: "Farmer Satisfaction", labelMr: "शेतकरी समाधान", icon: Award },
      { metric: "₹2.5 Cr", label: "Annual Savings", labelMr: "वार्षिक बचत", icon: TrendingUp },
    ],
    testimonial: "Winsoft software ने आमच्या संस्थेत पारदर्शकता आणली. शेतकऱ्यांचा विश्वास वाढला आणि manual errors पूर्णपणे बंद झाल्या.",
    testimonialAuthor: "Ramesh Patil, Chairman",
    steps: [
      { title: "Assessment", titleMr: "मूल्यांकन", desc: "Winsoft team visited the cooperative, assessed existing processes, and identified key pain points." },
      { title: "Installation", titleMr: "Installation", desc: "Hardware setup including weighing scales, FAT machines, and thermal printers at all 5 collection centers." },
      { title: "Training", titleMr: "Training", desc: "3-day on-site training for all staff in Marathi. Farmers trained on the Sankalan mobile app." },
      { title: "Go Live", titleMr: "Go Live", desc: "System went live with full support. All 200+ farmers onboarded within 2 weeks." },
    ],
  },
  "2": {
    title: "Sugar Factory Automation: Streamlining Production",
    titleMr: "साखर कारखाना ऑटोमेशन: उत्पादन सुव्यवस्थित करणे",
    client: "Rajasthan Sugar Mills Ltd.",
    clientMr: "राजस्थान शुगर मिल्स लि.",
    industry: "Sugar Factory",
    timeline: "8 months",
    image: "/sugerfac.png",
    challenge: "Inefficient cane procurement and manual production tracking were impacting overall productivity. The factory was processing 5,000 tonnes of cane per day with manual weighbridge operations causing long queues and payment delays.",
    challengeMr: "अकार्यक्षम ऊस खरेदी आणि हाताने उत्पादन ट्रॅकिंग एकूण उत्पादकतेवर परिणाम करत होते. कारखाना दररोज ५,००० टन ऊस प्रक्रिया करत होता.",
    solution: "Winsoft deployed a complete Sugar Factory ERP with weighbridge integration, automated cane slip generation, farmer payment management, and production tracking modules.",
    solutionMr: "Winsoft ने weighbridge integration, automated cane slip generation, शेतकरी पेमेंट व्यवस्थापन, आणि उत्पादन ट्रॅकिंग modules सह संपूर्ण Sugar Factory ERP deploy केले.",
    results: [
      { metric: "40%", label: "Faster Processing", labelMr: "जलद प्रक्रिया", icon: TrendingUp },
      { metric: "Zero", label: "Payment Disputes", labelMr: "पेमेंट वाद", icon: Award },
      { metric: "2000+", label: "Farmers Managed", labelMr: "शेतकरी व्यवस्थापित", icon: Users },
      { metric: "₹8 Cr", label: "Annual Savings", labelMr: "वार्षिक बचत", icon: TrendingUp },
    ],
    testimonial: "Sugar factory ERP ने आमच्या cane procurement आणि farmer payment process पूर्णपणे digitalize केली. Audit खूप सोपे झाले.",
    testimonialAuthor: "Anil Deshmukh, Director",
    steps: [
      { title: "Process Mapping", titleMr: "Process Mapping", desc: "Complete mapping of existing cane procurement and production workflows." },
      { title: "Weighbridge Integration", titleMr: "Weighbridge Integration", desc: "Integration with existing weighbridge hardware for automated weight capture." },
      { title: "Data Migration", titleMr: "Data Migration", desc: "Migration of 3 years of historical farmer and payment data." },
      { title: "Full Deployment", titleMr: "Full Deployment", desc: "Complete system go-live with 24/7 support during crushing season." },
    ],
  },
  "3": {
    title: "Gold Jewellery ERP: Complete Digital Transformation",
    titleMr: "सुवर्ण ज्वेलरी ERP: संपूर्ण डिजिटल परिवर्तन",
    client: "Kulkarni Jewellers, Sangli",
    clientMr: "कुलकर्णी ज्वेलर्स, सांगली",
    industry: "Gold Industry",
    timeline: "4 months",
    image: "/goldwin.png",
    challenge: "Manual billing, paper-based inventory, and complex Girvi (pledge) management were creating operational bottlenecks. The showroom was losing customers due to slow billing and inventory discrepancies.",
    challengeMr: "हाताने billing, कागदावरील inventory, आणि गुंतागुंतीचे Girvi (गहाणवट) व्यवस्थापन operational bottlenecks निर्माण करत होते.",
    solution: "Goldwin ERP was implemented with barcode-based inventory, automated billing, Girvi management module, and GST-compliant reporting.",
    solutionMr: "Goldwin ERP barcode-based inventory, automated billing, Girvi management module, आणि GST-compliant reporting सह implement केले.",
    results: [
      { metric: "80%", label: "Faster Billing", labelMr: "जलद Billing", icon: TrendingUp },
      { metric: "100%", label: "GST Compliance", labelMr: "GST Compliance", icon: Award },
      { metric: "Zero", label: "Inventory Errors", labelMr: "Inventory Errors", icon: Users },
      { metric: "35%", label: "Revenue Growth", labelMr: "महसूल वाढ", icon: TrendingUp },
    ],
    testimonial: "Goldwin software मुळे billing, Girvi management, आणि GST filing खूप सोपे झाले. आधी 2-3 तास लागायचे, आता 15 मिनिटांत सगळे होते.",
    testimonialAuthor: "Vijay Kulkarni, Owner",
    steps: [
      { title: "Inventory Audit", titleMr: "Inventory Audit", desc: "Complete physical inventory audit and barcode labeling of all jewellery items." },
      { title: "Software Setup", titleMr: "Software Setup", desc: "Goldwin installation with custom rate charts and GST configuration." },
      { title: "Staff Training", titleMr: "Staff Training", desc: "2-day training for billing staff and management on all modules." },
      { title: "Live Operations", titleMr: "Live Operations", desc: "Smooth transition to digital operations with zero downtime." },
    ],
  },
  "4": {
    title: "Multi-Center Dairy Network: Scaling to 50+ Centers",
    titleMr: "Multi-Center डेअरी Network: ५०+ केंद्रांपर्यंत विस्तार",
    client: "Kolhapur Zilla Dudh Utpadak Sangh",
    clientMr: "कोल्हापूर जिल्हा दूध उत्पादक संघ",
    industry: "Dairy Industry",
    timeline: "12 months",
    image: "/modern-office-dashboard.png",
    challenge: "Managing 50+ collection centers across the district with inconsistent data, delayed consolidated reports, and manual payment processing for 5,000+ farmers was becoming unmanageable.",
    challengeMr: "जिल्ह्यातील ५०+ संकलन केंद्रांचे व्यवस्थापन असंगत डेटा, उशिरा consolidated reports, आणि ५,०००+ शेतकऱ्यांसाठी हाताने पेमेंट प्रक्रियेसह अव्यवस्थापनीय होत होते.",
    solution: "Winsoft Web Dairy (Cloud ERP) was deployed across all 50+ centers with centralized dashboard, real-time data sync, bulk payment processing, and audit-ready reports.",
    solutionMr: "Winsoft Web Dairy (Cloud ERP) सर्व ५०+ केंद्रांमध्ये centralized dashboard, real-time data sync, bulk payment processing, आणि audit-ready reports सह deploy केले.",
    results: [
      { metric: "50+", label: "Centers Connected", labelMr: "केंद्रे जोडली", icon: Users },
      { metric: "5000+", label: "Farmers Managed", labelMr: "शेतकरी व्यवस्थापित", icon: Users },
      { metric: "Real-time", label: "Data Visibility", labelMr: "Data Visibility", icon: TrendingUp },
      { metric: "₹15 Cr", label: "Annual Savings", labelMr: "वार्षिक बचत", icon: Award },
    ],
    testimonial: "Sankalan mobile app मुळे आमच्या शेतकऱ्यांना त्यांचे daily slips आणि payment mobile वर पाहता येतात. Support team खूप responsive आहे.",
    testimonialAuthor: "Suresh Jadhav, Manager",
    steps: [
      { title: "Pilot Program", titleMr: "Pilot Program", desc: "Started with 5 centers as pilot, refined processes before full rollout." },
      { title: "Phased Rollout", titleMr: "Phased Rollout", desc: "Gradual expansion to all 50+ centers over 6 months." },
      { title: "Farmer Onboarding", titleMr: "Farmer Onboarding", desc: "All 5,000+ farmers onboarded to Sankalan mobile app with village-level training." },
      { title: "Full Operations", titleMr: "Full Operations", desc: "Complete district-wide digital dairy operations with centralized reporting." },
    ],
  },
}

export default function CaseStudyDetailPage() {
  const params = useParams()
  const id = typeof params?.id === "string" ? params.id : "1"
  const { language } = useLanguage()
  const study = caseStudies[id]

  if (!study) {
    return (
      <div className="min-h-screen bg-white dark:bg-zinc-950">
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">Case Study Not Found</h1>
          <Link href="/case-studies">
            <Button className="bg-[#1E94A4] hover:bg-[#0B7989] text-white font-sans font-bold">← Back to Case Studies</Button>
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  const title = language === "mr" ? study.titleMr : study.title
  const client = language === "mr" ? study.clientMr : study.client

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#E8F4F5] to-white dark:from-zinc-900 dark:to-zinc-950 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-[#1E94A4] hover:underline text-sm font-sans font-medium mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Case Studies
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-[#1E94A4]/10 text-[#1E94A4] border-[#1E94A4]/20 font-sans">{study.industry}</Badge>
              <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-zinc-400 font-serif">
                <Clock className="w-4 h-4" /> {study.timeline}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-3 font-sans leading-tight">{title}</h1>
            <p className="text-lg text-[#1E94A4] font-sans font-semibold">{client}</p>
          </div>
        </section>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto px-4 -mt-6">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image src={study.image} alt={title} fill className="object-cover" />
          </div>
        </div>

        {/* Results Stats */}
        <section className="py-12 px-4 bg-white dark:bg-zinc-950">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {study.results.map((r: any, i: number) => (
                <div key={i} className="text-center p-6 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800">
                  <div className="text-3xl font-black text-[#1E94A4] font-sans mb-1">{r.metric}</div>
                  <div className="text-sm text-gray-600 dark:text-zinc-400 font-serif">
                    {language === "mr" ? r.labelMr : r.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-12 px-4 bg-gray-50 dark:bg-zinc-900">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800">
              <h2 className="text-xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans flex items-center gap-2">
                <span className="text-2xl">⚠️</span>
                {language === "mr" ? "आव्हान" : "The Challenge"}
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 font-serif leading-relaxed">
                {language === "mr" ? study.challengeMr : study.challenge}
              </p>
            </div>
            <div className="bg-[#1E94A4]/5 dark:bg-[#1E94A4]/10 p-8 rounded-2xl border border-[#1E94A4]/20">
              <h2 className="text-xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans flex items-center gap-2">
                <span className="text-2xl">✅</span>
                {language === "mr" ? "उपाय" : "The Solution"}
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 font-serif leading-relaxed">
                {language === "mr" ? study.solutionMr : study.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Implementation Steps */}
        <section className="py-12 px-4 bg-white dark:bg-zinc-950">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-8 font-sans">
              {language === "mr" ? "Implementation कसे झाले" : "How We Implemented It"}
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {study.steps.map((step: any, i: number) => (
                <div key={i} className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#1E94A4] text-white flex items-center justify-center text-sm font-bold font-sans flex-shrink-0">
                      {i + 1}
                    </div>
                    <h3 className="font-sans font-bold text-gray-900 dark:text-zinc-100 text-sm">
                      {language === "mr" ? step.titleMr : step.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 dark:text-zinc-400 font-serif text-sm leading-relaxed pl-11">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-12 px-4 bg-[#1E94A4]/5 dark:bg-[#1E94A4]/10 border-y border-[#1E94A4]/20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl mb-4">💬</div>
            <blockquote className="text-xl font-serif italic text-gray-700 dark:text-zinc-300 mb-4 leading-relaxed">
              "{study.testimonial}"
            </blockquote>
            <p className="font-sans font-semibold text-[#1E94A4]">— {study.testimonialAuthor}</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-[#1E94A4] to-[#0B7989]">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4 font-sans">
              {language === "mr" ? "तुमची Success Story लिहायची आहे?" : "Ready to Write Your Success Story?"}
            </h2>
            <p className="text-white/80 font-serif mb-8 text-lg">
              {language === "mr"
                ? "आमच्या टीमशी बोला आणि तुमच्या बिझनेससाठी योग्य माहिती मिळवा."
                : "Talk to our team and get the right solutions for your business."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#1E94A4] hover:bg-gray-100 font-sans font-bold px-8">
                  {language === "mr" ? "संपर्क करा" : "Contact Us"}
                </Button>
              </Link>
              <a href="tel:+919423039902">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-sans font-bold px-8 bg-transparent">
                  <Phone className="w-4 h-4 mr-2" /> +91 94230 39902
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
