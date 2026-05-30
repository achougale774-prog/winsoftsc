"use client"

import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowLeft, Share2, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

const blogPosts: Record<string, any> = {
  "digital-transformation-dairy-industry": {
    title: "Digital Transformation in Dairy Industry: A Complete Guide",
    titleMr: "डेअरी उद्योगातील डिजिटल परिवर्तन: संपूर्ण मार्गदर्शिका",
    author: "Rajesh Kumar",
    date: "January 15, 2024",
    category: "Dairy Industry",
    readTime: "8 min read",
    image: "/dairy33.png",
    content: [
      {
        heading: "Introduction",
        headingMr: "प्रस्तावना",
        text: "The dairy industry in India is undergoing a massive digital transformation. With over 75 million dairy farmers and a market worth ₹11 lakh crore, the adoption of technology is no longer optional — it's essential for survival and growth.",
        textMr: "भारतातील डेअरी उद्योग मोठ्या प्रमाणात डिजिटल परिवर्तनातून जात आहे. ७.५ कोटींहून अधिक दूध उत्पादक शेतकरी आणि ११ लाख कोटी रुपयांचे बाजारमूल्य असलेल्या या उद्योगात तंत्रज्ञानाचा वापर आता पर्यायी राहिलेला नाही — तो अस्तित्व आणि वाढीसाठी अत्यावश्यक झाला आहे.",
      },
      {
        heading: "Key Challenges in Traditional Dairy Operations",
        headingMr: "पारंपरिक डेअरी कामकाजातील प्रमुख आव्हाने",
        text: "Manual milk collection leads to errors in weight measurement and FAT/SNF testing. Farmers often receive incorrect payments due to human error. Paper-based records are prone to loss and manipulation. Delayed payments affect farmer trust and loyalty.",
        textMr: "हाताने दूध संकलन केल्यामुळे वजन मोजणी आणि FAT/SNF तपासणीत चुका होतात. मानवी चुकांमुळे शेतकऱ्यांना अनेकदा चुकीचे पेमेंट मिळते. कागदावरील नोंदी हरवण्याची आणि फेरफार होण्याची शक्यता असते. उशिरा पेमेंटमुळे शेतकऱ्यांचा विश्वास आणि निष्ठा कमी होते.",
      },
      {
        heading: "How AMCS Software Solves These Problems",
        headingMr: "AMCS Software या समस्या कशा सोडवते",
        text: "Automatic Milk Collection System (AMCS) integrates digital weighing scales, FAT analyzers, and thermal printers into one seamless workflow. The moment a farmer delivers milk, the system automatically records weight, tests FAT/SNF, calculates payment, and prints a receipt — all in under 30 seconds.",
        textMr: "Automatic Milk Collection System (AMCS) डिजिटल वजन काटे, FAT analyzers, आणि thermal printers एकत्र जोडते. शेतकरी दूध घालताच system आपोआप वजन नोंदवते, FAT/SNF तपासते, पेमेंट calculate करते, आणि पावती print करते — सगळं ३० सेकंदांत.",
      },
      {
        heading: "Benefits of Digital Dairy Management",
        headingMr: "डिजिटल डेअरी व्यवस्थापनाचे फायदे",
        text: "Winsoft clients have reported: 40% reduction in billing errors, 60% faster payment processing, 99% farmer satisfaction rate, 25% increase in milk collection volume, and complete elimination of manual record-keeping.",
        textMr: "Winsoft च्या ग्राहकांनी नोंदवले: बिलिंग चुकांमध्ये ४०% घट, पेमेंट प्रक्रियेत ६०% वेग, ९९% शेतकरी समाधान दर, दूध संकलनात २५% वाढ, आणि हाताने नोंदी ठेवण्याचे संपूर्ण उच्चाटन.",
      },
      {
        heading: "Getting Started with Dairy Software",
        headingMr: "डेअरी Software सुरू करणे",
        text: "Starting your digital transformation journey is simpler than you think. Winsoft offers free on-site demos, complete installation support, and training in Marathi, Hindi, English, and Kannada. Our team visits your dairy, understands your specific needs, and recommends the right solution.",
        textMr: "तुमचा डिजिटल परिवर्तनाचा प्रवास सुरू करणे तुम्हाला वाटते त्यापेक्षा सोपे आहे. Winsoft मोफत on-site demos, संपूर्ण installation support, आणि मराठी, हिंदी, इंग्रजी, आणि कन्नड मध्ये training देते.",
      },
    ],
  },
  "sugar-factory-automation": {
    title: "Sugar Factory Automation: Boosting Production Efficiency",
    titleMr: "साखर कारखाना ऑटोमेशन: उत्पादन कार्यक्षमता वाढवणे",
    author: "Priya Sharma",
    date: "January 10, 2024",
    category: "Sugar Factory",
    readTime: "6 min read",
    image: "/sugerfac.png",
    content: [
      {
        heading: "The Sugar Industry's Digital Challenge",
        headingMr: "साखर उद्योगाचे डिजिटल आव्हान",
        text: "India is the world's second-largest sugar producer. Yet many sugar factories still rely on manual processes for cane procurement, weighbridge operations, and farmer payments — leading to inefficiencies and disputes.",
        textMr: "भारत जगातील दुसरा सर्वात मोठा साखर उत्पादक आहे. तरीही अनेक साखर कारखाने अजूनही ऊस खरेदी, वजन काटा कामकाज, आणि शेतकरी पेमेंटसाठी हाताने प्रक्रियांवर अवलंबून आहेत.",
      },
      {
        heading: "Weighbridge Integration: The First Step",
        headingMr: "वजन काटा एकत्रीकरण: पहिली पायरी",
        text: "Modern sugar factory ERP starts with weighbridge integration. When a cane-loaded vehicle arrives, the system automatically captures the gross weight, tare weight, and net cane weight — eliminating manual entry and potential fraud.",
        textMr: "आधुनिक साखर कारखाना ERP वजन काटा एकत्रीकरणापासून सुरू होते. ऊस भरलेले वाहन आल्यावर system आपोआप gross weight, tare weight, आणि net cane weight capture करते.",
      },
      {
        heading: "Farmer Payment Automation",
        headingMr: "शेतकरी पेमेंट ऑटोमेशन",
        text: "Winsoft Sugar ERP automates the entire farmer payment cycle. From cane slip generation to final payment calculation including FRP (Fair and Remunerative Price), SAP (State Advised Price), and bonus — everything is handled automatically.",
        textMr: "Winsoft Sugar ERP संपूर्ण शेतकरी पेमेंट चक्र स्वयंचलित करते. ऊस slip generation पासून FRP, SAP, आणि bonus सह अंतिम पेमेंट calculation पर्यंत — सगळं आपोआप होते.",
      },
    ],
  },
  "gold-inventory-management": {
    title: "Gold Inventory Management: Best Practices for Jewelers",
    titleMr: "सोने इन्व्हेंटरी व्यवस्थापन: ज्वेलर्ससाठी सर्वोत्तम पद्धती",
    author: "Amit Patel",
    date: "January 5, 2024",
    category: "Gold Industry",
    readTime: "5 min read",
    image: "/goldwin.png",
    content: [
      {
        heading: "Why Gold Inventory Management is Critical",
        headingMr: "सोने इन्व्हेंटरी व्यवस्थापन का महत्त्वाचे आहे",
        text: "Gold jewellery businesses deal with high-value inventory where even small discrepancies can mean significant financial losses. Traditional manual tracking methods are no longer sufficient in today's competitive market.",
        textMr: "सोने दागिन्यांच्या व्यवसायात उच्च-मूल्याची इन्व्हेंटरी असते जिथे लहान विसंगती देखील मोठ्या आर्थिक नुकसानाचा अर्थ असू शकतो.",
      },
      {
        heading: "Barcode-Based Tracking",
        headingMr: "बारकोड-आधारित ट्रॅकिंग",
        text: "Goldwin software uses barcode labels on each jewellery piece. This enables instant identification, weight verification, and purity tracking. When a customer purchases an item, the system automatically updates inventory and generates a GST-compliant bill.",
        textMr: "Goldwin software प्रत्येक दागिन्यावर barcode labels वापरते. यामुळे तत्काळ ओळख, वजन पडताळणी, आणि शुद्धता ट्रॅकिंग शक्य होते.",
      },
      {
        heading: "Girvi (Pledge) Management",
        headingMr: "गिरवी (गहाणवट) व्यवस्थापन",
        text: "One of the most complex aspects of jewellery business is managing gold pledges (Girvi). Goldwin's dedicated Girvi module tracks pledged items, calculates interest, sends payment reminders, and manages redemptions — all in one place.",
        textMr: "ज्वेलरी व्यवसायातील सर्वात गुंतागुंतीच्या पैलूंपैकी एक म्हणजे सोने गहाणवट (Girvi) व्यवस्थापन. Goldwin च्या Girvi module मध्ये गहाण ठेवलेल्या वस्तू track होतात, व्याज calculate होते.",
      },
    ],
  },
  "future-of-erp-systems": {
    title: "The Future of ERP Systems in Manufacturing",
    titleMr: "उत्पादन क्षेत्रातील ERP प्रणालींचे भविष्य",
    author: "Sneha Gupta",
    date: "December 28, 2023",
    category: "Technology",
    readTime: "7 min read",
    image: "/dairy33.png",
    content: [
      {
        heading: "ERP Evolution in Indian Manufacturing",
        headingMr: "भारतीय उत्पादन क्षेत्रातील ERP उत्क्रांती",
        text: "Enterprise Resource Planning (ERP) systems have evolved dramatically over the past decade. What once required expensive servers and IT teams can now run on a smartphone. This democratization of technology is transforming Indian manufacturing.",
        textMr: "Enterprise Resource Planning (ERP) प्रणाली गेल्या दशकात नाटकीयरित्या विकसित झाल्या आहेत. एकेकाळी महागड्या servers आणि IT teams ची आवश्यकता असलेल्या गोष्टी आता smartphone वर चालू शकतात.",
      },
      {
        heading: "Cloud ERP: The New Standard",
        headingMr: "Cloud ERP: नवीन मानक",
        text: "Cloud-based ERP systems offer several advantages: no upfront hardware costs, automatic updates, access from anywhere, and scalability. For dairy cooperatives and sugar factories, this means real-time visibility across multiple locations.",
        textMr: "Cloud-based ERP प्रणाली अनेक फायदे देतात: कोणतेही upfront hardware खर्च नाही, automatic updates, कुठूनही access, आणि scalability.",
      },
    ],
  },
  "quality-control-food-processing": {
    title: "Quality Control in Food Processing: Technology Solutions",
    titleMr: "अन्न प्रक्रियेत गुणवत्ता नियंत्रण: तंत्रज्ञान उपाय",
    author: "Vikram Singh",
    date: "December 20, 2023",
    category: "Food Processing",
    readTime: "6 min read",
    image: "/modern-dairy-farm.png",
    content: [
      {
        heading: "Quality Standards in Dairy Processing",
        headingMr: "डेअरी प्रक्रियेत गुणवत्ता मानके",
        text: "FSSAI regulations require dairy processors to maintain strict quality standards. Modern software solutions help automate quality testing, maintain records, and generate compliance reports — reducing the burden of manual documentation.",
        textMr: "FSSAI नियमांनुसार डेअरी प्रक्रियाकर्त्यांना कठोर गुणवत्ता मानके राखणे आवश्यक आहे. आधुनिक software solutions गुणवत्ता चाचणी स्वयंचलित करण्यास, नोंदी ठेवण्यास, आणि compliance reports तयार करण्यास मदत करतात.",
      },
      {
        heading: "FAT/SNF Testing Automation",
        headingMr: "FAT/SNF चाचणी ऑटोमेशन",
        text: "Automated FAT/SNF testing eliminates human error in quality measurement. Winsoft's AMCS integrates with leading milk analyzers to provide instant, accurate readings that are automatically recorded in the system.",
        textMr: "Automated FAT/SNF testing गुणवत्ता मोजणीतील मानवी चुका दूर करते. Winsoft चे AMCS आघाडीच्या milk analyzers शी integrate होते.",
      },
    ],
  },
  "crm-for-small-businesses": {
    title: "Customer Relationship Management for Small Businesses",
    titleMr: "लहान व्यवसायांसाठी ग्राहक संबंध व्यवस्थापन",
    author: "Meera Joshi",
    date: "December 15, 2023",
    category: "Business Strategy",
    readTime: "4 min read",
    image: "/modern-office-dashboard.png",
    content: [
      {
        heading: "Why CRM Matters for Small Businesses",
        headingMr: "लहान व्यवसायांसाठी CRM का महत्त्वाचे आहे",
        text: "For small dairy cooperatives, jewellery shops, and sugar factories, maintaining strong customer relationships is the foundation of business success. A good CRM system helps track customer interactions, preferences, and payment history.",
        textMr: "लहान डेअरी सहकारी संस्था, ज्वेलरी दुकाने, आणि साखर कारखान्यांसाठी मजबूत ग्राहक संबंध राखणे व्यवसाय यशाचा पाया आहे.",
      },
      {
        heading: "Integrated CRM in Winsoft Products",
        headingMr: "Winsoft Products मध्ये Integrated CRM",
        text: "Winsoft software includes built-in CRM features: farmer profiles with complete history, automated payment reminders via SMS/WhatsApp, loyalty tracking, and complaint management — all without needing a separate CRM tool.",
        textMr: "Winsoft software मध्ये built-in CRM features आहेत: संपूर्ण इतिहासासह शेतकरी profiles, SMS/WhatsApp द्वारे automated payment reminders, loyalty tracking, आणि complaint management.",
      },
    ],
  },
}

const slugToId: Record<string, number> = {
  "digital-transformation-dairy-industry": 1,
  "sugar-factory-automation": 2,
  "gold-inventory-management": 3,
  "future-of-erp-systems": 4,
  "quality-control-food-processing": 5,
  "crm-for-small-businesses": 6,
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = typeof params?.slug === "string" ? params.slug : ""
  const { language } = useLanguage()
  const post = blogPosts[slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-zinc-950">
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-24 text-center">
          <div className="text-6xl mb-6">📄</div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">Post Not Found</h1>
          <p className="text-gray-500 dark:text-zinc-400 mb-8 font-serif">This blog post does not exist.</p>
          <Link href="/blog">
            <Button className="bg-[#1E94A4] hover:bg-[#0B7989] text-white font-sans font-bold">← Back to Blog</Button>
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  const title = language === "mr" ? post.titleMr : post.title

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#E8F4F5] to-white dark:from-zinc-900 dark:to-zinc-950 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#1E94A4] hover:underline text-sm font-sans font-medium mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <Badge className="mb-4 bg-[#1E94A4]/10 text-[#1E94A4] border-[#1E94A4]/20 font-sans">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-6 font-sans leading-tight">{title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-zinc-400 font-serif">
              <div className="flex items-center gap-2"><User className="w-4 h-4" />{post.author}</div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{post.date}</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime}</div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto px-4 -mt-8">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src={post.image} alt={title} fill className="object-cover" />
          </div>
        </div>

        {/* Content */}
        <article className="max-w-3xl mx-auto px-4 py-12">
          <div className="space-y-10">
            {post.content.map((section: any, i: number) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">
                  {language === "mr" ? section.headingMr : section.heading}
                </h2>
                <p className="text-gray-600 dark:text-zinc-400 font-serif leading-relaxed text-lg">
                  {language === "mr" ? section.textMr : section.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 p-8 bg-[#1E94A4]/5 dark:bg-[#1E94A4]/10 border border-[#1E94A4]/20 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100 mb-3 font-sans">
              {language === "mr" ? "Winsoft Software बद्दल अधिक जाणून घ्या" : "Want to Learn More About Winsoft Software?"}
            </h3>
            <p className="text-gray-600 dark:text-zinc-400 font-serif mb-6">
              {language === "mr"
                ? "आमच्या team शी बोला आणि तुमच्या business साठी free demo बुक करा."
                : "Talk to our team and book a free demo for your business."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule-demo">
                <Button className="bg-[#1E94A4] hover:bg-[#0B7989] text-white font-sans font-bold px-8">
                  {language === "mr" ? "Free Demo बुक करा" : "Book Free Demo"}
                </Button>
              </Link>
              <a href="tel:+919423039902">
                <Button variant="outline" className="border-[#1E94A4] text-[#1E94A4] font-sans font-bold px-8 bg-transparent">
                  <Phone className="w-4 h-4 mr-2" /> +91 94230 39902
                </Button>
              </a>
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 flex items-center gap-4 pt-8 border-t border-gray-100 dark:border-zinc-800">
            <Share2 className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-zinc-400 font-sans">Share this article:</span>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(title + " - Read on Winsoft Blog: https://www.winsoft.in/blog/" + slug)}`}
              target="_blank" rel="noopener noreferrer"
              className="text-sm text-[#25D366] hover:underline font-sans font-medium"
            >
              WhatsApp
            </a>
          </div>
        </article>

        {/* Related Posts */}
        <section className="bg-gray-50 dark:bg-zinc-900 py-16 px-4 border-t border-gray-100 dark:border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-8 font-sans">More Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(blogPosts)
                .filter(([s]) => s !== slug)
                .slice(0, 3)
                .map(([s, p]: [string, any]) => (
                  <Link key={s} href={`/blog/${s}`} className="group block bg-white dark:bg-zinc-950 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 hover:shadow-lg transition-all">
                    <div className="relative h-36">
                      <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-4">
                      <Badge className="mb-2 text-xs bg-[#1E94A4]/10 text-[#1E94A4] border-[#1E94A4]/20">{p.category}</Badge>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-zinc-100 font-sans line-clamp-2 group-hover:text-[#1E94A4] transition-colors">
                        {language === "mr" ? p.titleMr : p.title}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
