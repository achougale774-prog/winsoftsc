"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

const faqs = [
  {
    category: "General",
    categoryMr: "सामान्य प्रश्न",
    questions: [
      {
        q: "Winsoft software कोणत्या industries साठी आहे?",
        a: "Winsoft चे software मुख्यतः तीन industries साठी आहे: (1) Dairy / दूध संस्था — AMCS, Sankalan App, Cooperative ERP, (2) Gold / सुवर्ण पेढी — Goldwin billing software, (3) Sugar Factory / साखर कारखाना — Cane management ERP. 1998 पासून आम्ही या industries मध्ये काम करत आहोत.",
      },
      {
        q: "Software कुठे install होतो — Desktop वर की Cloud वर?",
        a: "आम्ही तीन options देतो: (1) Desktop version — तुमच्या office च्या computer वर install होतो, (2) Advanced version — Desktop + Mobile App, (3) Cloud version — Internet वरून कुठूनही access करता येतो. तुमच्या गरजेनुसार योग्य option निवडता येतो.",
      },
      {
        q: "Software किती रुपयांना मिळतो?",
        a: "Software ची किंमत तुमच्या business च्या size, required modules, आणि version (Desktop/Cloud) वर अवलंबून असते. Exact pricing साठी आम्हाला call करा: +91 94230 39902 किंवा आमच्याशी संपर्क करा — आम्ही तुम्हाला सगळ्या details सांगतो.",
      },
      {
        q: "अधिक माहिती किंवा मार्गदर्शन मिळते का?",
        a: "हो! आम्ही संपूर्ण मार्गदर्शन व माहिती देतो. अधिक माहितीसाठी 'संपर्क करा' button वर click करा किंवा +91 94230 39902 वर call करा.",
      },
    ],
  },
  {
    category: "Dairy Software",
    categoryMr: "डेअरी सॉफ्टवेअर",
    questions: [
      {
        q: "AMCS म्हणजे काय आणि ते कसे काम करते?",
        a: "AMCS म्हणजे Automatic Milk Collection System. हे software दूध संकलन केंद्रावर digital weighing scale, FAT testing machine, आणि thermal printer यांना connect करते. शेतकरी दूध घालताच automatically weight, FAT, SNF measure होते आणि slip print होते — कोणतीही manual entry नाही.",
      },
      {
        q: "Sankalan Mobile App काय आहे?",
        a: "Sankalan हे शेतकऱ्यांसाठी mobile app आहे. यात शेतकरी त्यांचे daily milk slips, 10-दिवसांचे payment, आणि account ledger पाहू शकतात. App Android वर available आहे आणि Marathi, Hindi, English, Kannada मध्ये वापरता येतो.",
      },
      {
        q: "Software कोणत्या FAT machines शी compatible आहे?",
        a: "आमचे software Milkotronic, Lactoscan, Milkotester, Eko Milk, आणि इतर popular FAT analyzers शी compatible आहे. Digital weighing scales (Essae, Mettler Toledo, etc.) आणि thermal printers शी पण connect होते.",
      },
      {
        q: "एका software मध्ये किती villages / centers manage करता येतात?",
        a: "आमचे software unlimited villages आणि collection centers manage करू शकते. Cooperative level वर सगळ्या centers चे data एकत्र पाहता येते. Multi-center, multi-route management supported आहे.",
      },
      {
        q: "10-दिवसांचे बिल automatically तयार होते का?",
        a: "हो! प्रत्येक 10 दिवसांनी automatically payment calculation होते. FAT/SNF rate chart नुसार प्रत्येक शेतकऱ्याचे payment calculate होते. Cattle feed advance, loan recovery automatically deduct होते. Bulk payment reports तयार होतात.",
      },
    ],
  },
  {
    category: "Gold Software",
    categoryMr: "सुवर्ण सॉफ्टवेअर",
    questions: [
      {
        q: "Goldwin software मध्ये काय काय features आहेत?",
        a: "Goldwin मध्ये: Barcode billing, Gold/Silver account management, Girvi (pledge) management, GST returns, Customer ledger, Old gold purchase, Repair/making charges tracking, Stock management, आणि detailed reports आहेत.",
      },
      {
        q: "GST filing साठी software मदत करते का?",
        a: "हो! Goldwin software GST-compliant bills generate करते. GSTR-1, GSTR-3B साठी ready reports मिळतात. CA किंवा accountant ला सहज data export करता येतो.",
      },
      {
        q: "Girvi (गहाणवट) management कसे होते?",
        a: "Girvi module मध्ये: customer चे gold/silver item pledge करणे, interest calculation, due date tracking, redemption, आणि auction management — सगळे एकाच software मध्ये होते.",
      },
    ],
  },
  {
    category: "Support & Training",
    categoryMr: "Support आणि Training",
    questions: [
      {
        q: "Software install केल्यानंतर training मिळते का?",
        a: "हो! Software installation नंतर आम्ही on-site training देतो. तुमच्या staff ला software कसे वापरायचे ते शिकवतो. Training Marathi, Hindi, किंवा English मध्ये देता येते.",
      },
      {
        q: "Technical support कसा मिळतो?",
        a: "आम्ही phone, WhatsApp, आणि remote desktop support देतो. Business hours: Monday-Saturday, 9:30 AM - 6:30 PM. Emergency support साठी +91 94230 39902 वर call करा.",
      },
      {
        q: "Software update मिळतात का?",
        a: "हो! Annual Maintenance Contract (AMC) मध्ये regular software updates, bug fixes, आणि new features मिळतात. Government regulation changes (GST, etc.) नुसार software automatically update होते.",
      },
      {
        q: "Internet नसेल तर software काम करते का?",
        a: "Desktop version साठी internet आवश्यक नाही — offline काम करते. Cloud version साठी internet लागते. Advanced version मध्ये offline + online sync होते.",
      },
    ],
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left bg-white dark:bg-zinc-950 hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-sans font-semibold text-gray-900 dark:text-zinc-100 pr-4 text-sm md:text-base">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-[#1E94A4] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 bg-gray-50 dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800">
          <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed pt-4 font-serif">
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-white dark:bg-zinc-950 border-b border-gray-100 dark:border-zinc-800 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 text-[#1E94A4] text-sm font-sans font-bold mb-6 border border-[#1E94A4]/20">
              <HelpCircle className="w-4 h-4" />
              {language === "mr" ? "वारंवार विचारले जाणारे प्रश्न" : "Frequently Asked Questions"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-zinc-100 mb-6 font-sans">
              {language === "mr" ? "तुमच्या मनातील प्रश्नांची उत्तरे" : "Got Questions? We Have Answers."}
            </h1>
            <p className="text-xl text-gray-600 dark:text-zinc-400 font-serif leading-relaxed max-w-2xl mx-auto">
              {language === "mr"
                ? "Winsoft software बद्दल सर्वात जास्त विचारले जाणारे प्रश्न आणि त्यांची उत्तरे येथे आहेत."
                : "Find answers to the most common questions about Winsoft software, pricing, support, and more."}
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-6 font-sans flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#1E94A4] rounded-full inline-block" />
                  {language === "mr" ? section.categoryMr : section.category}
                </h2>
                <div className="space-y-3">
                  {section.questions.map((item, idx) => (
                    <FAQItem key={idx} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still have questions CTA */}
        <section className="py-16 px-4 bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-800">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-[#1E94A4]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-[#1E94A4]" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">
              {language === "mr" ? "अजून प्रश्न आहेत?" : "Still Have Questions?"}
            </h2>
            <p className="text-gray-600 dark:text-zinc-400 font-serif text-lg mb-8">
              {language === "mr"
                ? "आमच्या team शी थेट बोला. आम्ही तुमच्या सगळ्या प्रश्नांची उत्तरे देण्यास तयार आहोत."
                : "Talk directly with our team. We're happy to answer any questions you have about our software."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="font-sans font-semibold px-8 bg-[#1E94A4] hover:bg-[#0B7989] text-white"
                >
                  {language === "mr" ? "संपर्क करा" : "Contact Us"}
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-sans font-semibold px-8 border-[#1E94A4] text-[#1E94A4] hover:bg-[#1E94A4]/5 bg-transparent"
                >
                  {language === "mr" ? "आमच्याशी संपर्क करा" : "Contact Us"}
                </Button>
              </Link>
              <a href="https://wa.me/919423039902?text=Hello%2C%20I%20have%20a%20question%20about%20Winsoft%20software." target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="font-sans font-semibold px-8 bg-[#25D366] hover:bg-[#1EBE5D] text-white"
                >
                  WhatsApp वर विचारा
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
