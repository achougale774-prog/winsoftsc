"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

const SEARCH_DATA = [
  // Products
  { title: "Dairy Software (AMCS)", titleMr: "डेअरी सॉफ्टवेअर (AMCS)", href: "/product/1", category: "Product", categoryMr: "प्रॉडक्ट", tags: ["dairy", "amcs", "milk", "दूध", "डेअरी"] },
  { title: "Gold Jewellery Software", titleMr: "सुवर्ण पेढी सॉफ्टवेअर", href: "/product/2", category: "Product", categoryMr: "प्रॉडक्ट", tags: ["gold", "jewellery", "goldwin", "सोने", "ज्वेलरी"] },
  { title: "Sugar Factory ERP", titleMr: "साखर कारखाना ERP", href: "/product/3", category: "Product", categoryMr: "प्रॉडक्ट", tags: ["sugar", "factory", "erp", "साखर", "कारखाना"] },
  { title: "Sankalan Mobile App", titleMr: "Sankalan मोबाईल अॅप", href: "/mobile-software", category: "Product", categoryMr: "प्रॉडक्ट", tags: ["sankalan", "mobile", "app", "farmer", "शेतकरी"] },
  // Pages
  { title: "Pricing & Plans", titleMr: "किंमत व योजना", href: "/pricing", category: "Page", categoryMr: "पेज", tags: ["pricing", "price", "cost", "किंमत", "plan"] },
  { title: "Schedule Demo", titleMr: "Demo बुक करा", href: "/contact", category: "Page", categoryMr: "पेज", tags: ["demo", "schedule", "book", "डेमो"] },
  { title: "ROI Calculator", titleMr: "ROI Calculator", href: "/roi-calculator", category: "Tool", categoryMr: "टूल", tags: ["roi", "calculator", "savings", "बचत"] },
  { title: "Contact Us", titleMr: "संपर्क करा", href: "/contact", category: "Page", categoryMr: "पेज", tags: ["contact", "phone", "email", "संपर्क"] },
  { title: "FAQ", titleMr: "सामान्य प्रश्न", href: "/faq", category: "Page", categoryMr: "पेज", tags: ["faq", "questions", "help", "प्रश्न"] },
  { title: "Support", titleMr: "Support", href: "/support", category: "Page", categoryMr: "पेज", tags: ["support", "help", "amc", "मदत"] },
  { title: "Our Story", titleMr: "आमची कहाणी", href: "/our-story", category: "Page", categoryMr: "पेज", tags: ["about", "story", "history", "आमच्याबद्दल"] },
  { title: "Careers", titleMr: "करिअर", href: "/careers", category: "Page", categoryMr: "पेज", tags: ["careers", "jobs", "hiring", "नोकरी"] },
  { title: "Blog", titleMr: "Blog", href: "/blog", category: "Blog", categoryMr: "Blog", tags: ["blog", "articles", "news", "लेख"] },
  { title: "Case Studies", titleMr: "Case Studies", href: "/case-studies", category: "Page", categoryMr: "पेज", tags: ["case", "studies", "success", "stories"] },
  { title: "Dairy Solutions", titleMr: "डेअरी सोल्यूशन्स", href: "/dairy-solutions", category: "Solution", categoryMr: "सोल्यूशन", tags: ["dairy", "cooperative", "society", "दूध संस्था"] },
  { title: "Gold Industry Solutions", titleMr: "Gold Industry Solutions", href: "/gold-industry-solutions", category: "Solution", categoryMr: "सोल्यूशन", tags: ["gold", "jewellery", "industry", "सुवर्ण"] },
  { title: "Sugar Factory Solutions", titleMr: "Sugar Factory Solutions", href: "/sugar-factory-solutions", category: "Solution", categoryMr: "सोल्यूशन", tags: ["sugar", "factory", "cane", "साखर"] },
]

export function SiteSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const { language } = useLanguage()

  const results = query.trim().length >= 1
    ? SEARCH_DATA.filter(item => {
        const q = query.toLowerCase()
        return (
          item.title.toLowerCase().includes(q) ||
          item.titleMr.includes(q) ||
          item.tags.some(t => t.includes(q))
        )
      }).slice(0, 6)
    : []

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50)
  }, [open])

  // Keyboard shortcut Ctrl+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        setOpen(o => !o)
      }
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  const placeholder = language === "mr" ? "Search करा... (Ctrl+K)" : language === "hi" ? "खोजें... (Ctrl+K)" : "Search... (Ctrl+K)"

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="hidden sm:flex items-center gap-1.5 px-2 py-1 text-xs text-gray-500 dark:text-zinc-400 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-md border border-gray-200 dark:border-zinc-700 transition-all"
        aria-label="Search"
      >
        <Search className="w-3 h-3" />
        <kbd className="hidden md:inline text-[9px] bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded px-1 py-0.5 font-mono">⌘K</kbd>
      </button>

      {/* Mobile search icon */}
      <button
        onClick={() => setOpen(true)}
        className="sm:hidden p-1.5 text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 transition-colors"
        aria-label="Search"
      >
        <Search className="w-4 h-4" />
      </button>

      {/* Search Modal */}
      {open && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[10vh] px-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="w-full max-w-xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-zinc-700 overflow-hidden animate-in zoom-in-95 duration-150">

            {/* Search input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-zinc-800">
              <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={placeholder}
                className="flex-1 text-sm text-gray-900 dark:text-zinc-100 bg-transparent outline-none placeholder-gray-400 dark:placeholder-zinc-500"
              />
              {query && (
                <button onClick={() => setQuery("")} className="text-gray-400 hover:text-gray-600 dark:hover:text-zinc-300">
                  <X className="w-4 h-4" />
                </button>
              )}
              <button onClick={() => setOpen(false)}
                className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-zinc-300 border border-gray-200 dark:border-zinc-700 rounded px-1.5 py-0.5 font-mono">
                ESC
              </button>
            </div>

            {/* Results */}
            {results.length > 0 ? (
              <div className="py-2 max-h-80 overflow-y-auto">
                {results.map((item, i) => (
                  <Link key={i} href={item.href} onClick={() => { setOpen(false); setQuery("") }}
                    className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors group">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-zinc-100 group-hover:text-[#1E94A4]">
                        {language === "mr" ? item.titleMr : item.title}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-zinc-500 mt-0.5">
                        {language === "mr" ? item.categoryMr : item.category}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 dark:text-zinc-600 group-hover:text-[#1E94A4] transition-colors" />
                  </Link>
                ))}
              </div>
            ) : query.trim().length >= 1 ? (
              <div className="py-10 text-center text-sm text-gray-400 dark:text-zinc-500">
                {language === "mr" ? "कोणताही result सापडला नाही" : "No results found"}
              </div>
            ) : (
              <div className="py-4 px-4">
                <p className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-3">
                  {language === "mr" ? "Quick Links" : "Quick Links"}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {SEARCH_DATA.slice(0, 6).map((item, i) => (
                    <Link key={i} href={item.href} onClick={() => setOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-zinc-800 hover:bg-[#1E94A4]/10 dark:hover:bg-[#1E94A4]/10 text-xs font-medium text-gray-700 dark:text-zinc-300 hover:text-[#1E94A4] transition-all">
                      <ArrowRight className="w-3 h-3 flex-shrink-0" />
                      {language === "mr" ? item.titleMr : item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
