"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { speakText } from "@/lib/utils"
import { toast } from "sonner"
import { SiteSearch } from "@/components/site-search"

const navItems = (t: (key: string) => string, language: string) => [
  { label: t("nav.home"), href: "/" },
  { label: t("nav.about us"), href: "/our-story" },
  {
    label: t("nav.products"),
    wide: true,
    children: [
      {
        href: "/product/1",
        title: t("dairy5.title") || "Complete Dairy Software Solutions",
        description: language === 'mr' ? 'सहकारी संस्था आणि मोठ्या प्लांटसाठी संपूर्ण ERP सोल्यूशन' :
                     language === 'kn' ? 'ಸಹಕಾರಿ ಸಂಘಗಳು ಮತ್ತು ದೊಡ್ಡ ಪ್ಲಾಂಟ್‌ಗಳಿಗಾಗಿ ಸಂಪೂರ್ಣ ಇಆರ್‌ಪಿ' :
                     language === 'hi' ? 'सहकारी समितियों और बड़े संयंत्रों के लिए संपूर्ण ईआरपी' :
                     "Complete ERP for cooperative societies and large plants"
      },
      {
        href: "/product/billing-5",
        title: t("billing5.title") || "Dairy 5.0 – Milk Billing Software",
        description: language === 'mr' ? 'दूध बिल निर्मिती आणि सभासद खातेवही स्वयंचलित करा' :
                     language === 'kn' ? 'ಹಾಲು ಬಿಲ್ ಉತ್ಪಾದನೆ ಮತ್ತು ಸದಸ್ಯರ ಲೆಡ್ಜರ್ ಅನ್ನು ಸ್ವಯಂಚಾಲಿತಗೊಳಿಸಿ' :
                     language === 'hi' ? 'दूध बिल उत्पादन और सदस्य बहीखाता स्वचालित करें' :
                     "Automate milk bill generation and ledger accounts"
      },
      {
        href: "/product/web-dairy",
        title: t("webDairy.title") || "Web-based Dairy Software Solutions",
        description: language === 'mr' ? 'सहकारी संस्था आणि मोठ्या प्लांटसाठी वेब-बेस्ड सोल्यूशन' :
                     language === 'kn' ? 'ಸಹಕಾರಿ ಸಂಘಗಳಿಗೆ ವೆಬ್-ಆಧಾರಿತ ಪರಿಹಾರ' :
                     language === 'hi' ? 'सहकारी समितियों के लिए वेब-आधारित समाधान' :
                     "Web-based ERP for cooperative societies and dairy plants"
      },
      {
        href: "/product/2",
        title: t("dairy5.products.prod2.title") || "Farmer Mobile App (Sankalan)",
        description: language === 'mr' ? 'रोजचे दूध संकलन आणि बिल मोबाईलवर ट्रॅक करा' :
                     language === 'kn' ? 'ದೈನಂದಿನ ಹಾಲು ಸಂಗ್ರಹಣೆ ಮತ್ತು ಬಿಲ್ಲುಗಳನ್ನು ಮೊಬೈಲ್‌ನಲ್ಲಿ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ' :
                     language === 'hi' ? 'दैनिक दूध संग्रह और भुगतान मोबाइल पर ट्रैक करें' :
                     "Track milk collection and payments in real time"
      },
      {
        href: "/product/3",
        title: t("dairy5.products.prod3.title") || "Dairy Administrator App",
        description: language === 'mr' ? 'थेट दूध संकलन नियंत्रण आणि विविध ऑडिट रिपोर्ट्स' :
                     language === 'kn' ? 'ಲೈವ್ ಸಂಗ್ರಹಣೆ ಮೇಲ್ವಿಚಾರಣೆ ಮತ್ತು ವರದಿಗಳ ಪ್ರವೇಶ' :
                     language === 'hi' ? 'लाइव दूध संग्रह नियंत्रण और विभिन्न ऑडिट रिपोर्ट' :
                     "Live collection monitoring and MIS reports"
      },
      {
        href: "/product/4",
        title: t("dairy5.products.prod4.title") || "Milk Collection App & Machine Integration",
        description: language === 'mr' ? 'वजन काटा आणि फॅट मशीन थेट सॉफ्टवेअरशी कनेक्ट करा' :
                     language === 'kn' ? 'ತೂಕದ ಮಾಪಕ ಮತ್ತು ಫ್ಯಾಟ್ ಯಂತ್ರ ಜೋಡಣೆ' :
                     language === 'hi' ? 'वजन कांटा और फैट मशीन को सीधे सॉफ्टवेयर से जोड़ें' :
                     "Weighing scale and FAT machine integration"
      },
      {
        href: "/product/5",
        title: t("dairy5.products.prod5.title") || "Production Management System",
        description: language === 'mr' ? 'कच्च्या दुधाची प्रक्रिया आणि तयार उत्पादनांचे व्यवस्थापन' :
                     language === 'kn' ? 'ಕಚ್ಚಾ ಹಾಲು ಸಂಸ್ಕರಣೆ ಮತ್ತು ಸಿದ್ಧಪಡಿಸಿದ ಸರಕುಗಳ ನಿರ್ವಹಣೆ' :
                     language === 'hi' ? 'कच्चे दूध प्रसंस्करण और तैयार उत्पादों का प्रबंधन' :
                     "Track raw milk processing and finished goods"
      },
      {
        href: "/product/6",
        title: t("dairy5.products.prod6.title") || "Transport Management System",
        description: language === 'mr' ? 'दूध संकलन मार्ग आणि वाहन वाहतूक व्यवस्थापन' :
                     language === 'kn' ? 'ಮಾರ್ಗ ಮತ್ತು ವಾಹನ ಸಾರಿಗೆ ನಿರ್ವಹಣೆ' :
                     language === 'hi' ? 'दूध संग्रह मार्ग और वाहन परिवहन प्रबंधन' :
                     "Route optimization and vehicle dispatch logs"
      },
      {
        href: "/gold-industry-solutions",
        title: language === 'mr' ? "सुवर्ण पेढी व दागिने व्यवस्थापन प्रणाली (Goldwin)" :
               language === 'kn' ? "ಚಿನ್ನದ ಅಂಗಡಿ ಮತ್ತು ಆಭರಣ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ (Goldwin)" :
               language === 'hi' ? "स्वर्ण आभूषण शोरूम प्रबंधन प्रणाली (Goldwin)" :
               "Gold Jewellery Showroom ERP (Goldwin)",
        description: language === 'mr' ? 'सराफा दुकानांसाठी बिलिंग, इन्व्हेंटरी आणि सोने ठेव योजना' :
                     language === 'kn' ? 'ಆಭರಣ ಮಳಿಗೆಗಳಿಗಾಗಿ ಬಿಲ್ಲಿಂಗ್, ಇನ್ವೆಂಟರಿ ಮತ್ತು ಚಿನ್ನದ ಯೋಜನೆಗಳು' :
                     language === 'hi' ? 'ज्वेलरी शोरूम के लिए बिलिंग, इन्वेंटरी और स्वर्ण योजनाएं' :
                     "Billing, inventory and gold scheme management for jewellery showrooms"
      },
    ],
  },
  {
    label: t("nav.features"),
    children: [
      {
        href: "/features",
        title: t("nav.features"),
        description: language === 'mr' ? 'आमच्या सॉफ्टवेअरची सर्व वैशिष्ट्ये एक्सप्लोर करा' :
                     language === 'kn' ? 'ನಮ್ಮ ಸಾಫ್ಟ್‌ವೇರ್‌ನ ಎಲ್ಲಾ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ' :
                     language === 'hi' ? 'हमारे सॉफ़्टवेयर की सभी विशेषताओं का पता लगाएं' :
                     "Explore all our software features"
      },
      {
        href: "/products",
        title: t("footer.allProducts"),
        description: language === 'mr' ? 'आमची सर्व उत्पादने एक्सप्लोर करा' :
                     language === 'kn' ? 'ನಮ್ಮ ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ' :
                     language === 'hi' ? 'हमारे सभी उत्पादों का पता लगाएं' :
                     "Explore all our products"
      },
      {
        href: "/mobile-software",
        title: language === 'mr' ? 'मोबाईल सॉफ्टवेअर (संकलन)' :
               language === 'kn' ? 'ಮೊಬೈಲ್ ಸಾಫ್ಟ್‌ವೇರ್ (ಸಂಕಲನ)' :
               language === 'hi' ? 'मोबाइल सॉफ्टवेयर (संकलन)' :
               "Mobile Software (Sankalan)",
        description: language === 'mr' ? 'दूध संकलनासाठी संपूर्ण मोबाईल ॲप' :
                     language === 'kn' ? 'ಡೈರಿ ನಿರ್ವಹಣೆಗಾಗಿ ಸಂಪೂರ್ಣ ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್' :
                     language === 'hi' ? 'डेयरी प्रबंधन के लिए संपूर्ण मोबाइल ऐप' :
                     "Complete Mobile App for Dairy Management"
      },
      {
        href: "/features#simulator",
        title: language === 'mr' ? 'मोबाईल ॲप सिम्युलेटर' :
               language === 'kn' ? 'ಮೊಬೈಲ್ ಆಪ್ ಸಿಮ್ಯುಲೇಟರ್' :
               language === 'hi' ? 'मोबाइल ऐप सिम्युलेटर' :
               "Interactive Mobile App Simulator",
        description: language === 'mr' ? 'शेतकरी आणि प्रशासक मोबाईल ॲप्सचा थेट अनुभव घ्या.' :
                     language === 'kn' ? 'ರೈತರು ಮತ್ತು ಅಡ್ಮಿನ್ ಆಪ್‌ಗಳನ್ನು ಲೈವ್ ಆಗಿ ಅನುಭವಿಸಿ.' :
                     language === 'hi' ? 'किसानों और प्रशासकों के मोबाइल ऐप्स का लाइव अनुभव करें।' :
                     "Experience our farmer and admin apps live."
      },
    ],
  },
  {
    label: t("nav.industries"),
    children: [
      { href: "/dairy-solutions", title: t("nav.dairy"), description: t("dairy.dairySubtitle") },
      { href: "/gold-industry-solutions", title: t("nav.gold"), description: t("home.product2Desc") },
      { href: "/sugar-factory-solutions", title: t("nav.sugar"), description: t("home.product3Desc") },
    ],
  },
  { label: t("nav.contact"), href: "/contact" },
]

type NavItem = {
  label: string
  href?: string
  wide?: boolean
  children?: { href: string; title: string; description: string }[]
}

function DropdownItem({ item }: { item: NavItem & { children: NonNullable<NavItem["children"]> } }) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setOpen(true) }
  const handleMouseLeave = () => { timeoutRef.current = setTimeout(() => setOpen(false), 150) }
  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }, [])

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className="font-sans inline-flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-gray-800 dark:text-zinc-200 transition-colors hover:bg-gray-100 dark:hover:bg-zinc-900 hover:text-gray-900 dark:hover:text-white"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className={`absolute top-full left-0 z-50 mt-1 ${item.wide ? "w-[680px]" : "w-[340px]"} rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-3 shadow-xl dark:shadow-none animate-in fade-in slide-in-from-top-2 duration-150`}>
          <div className={`grid gap-1 ${item.wide ? "grid-cols-2" : "grid-cols-1"}`}>
            {item.children.map((child) => (
              <Link key={child.href} href={child.href}
                className="block rounded-md p-3 text-gray-800 dark:text-zinc-200 no-underline transition-colors hover:bg-gray-50 dark:hover:bg-zinc-900"
                onClick={() => setOpen(false)}
              >
                <div className="text-sm font-medium text-gray-900 dark:text-zinc-100">{child.title}</div>
                <p className="mt-1 text-xs text-gray-500 dark:text-zinc-400">{child.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function MobileDropdown({ item, onClose }: { item: NavItem & { children: NonNullable<NavItem["children"]> }; onClose: () => void }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        className="flex w-full items-center justify-between px-3 py-3 text-base font-medium text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-zinc-900 rounded-lg transition-colors"
        onClick={() => setOpen(!open)}
      >
        {item.label}
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="ml-4 space-y-0.5 border-l-2 border-[#1E94A4]/20 dark:border-[#1E94A4]/40 pl-3 pb-2 mt-1">
          {item.children.map((child) => (
            <Link key={child.href} href={child.href}
              className="block px-3 py-2.5 text-sm font-medium text-gray-600 dark:text-zinc-400 hover:text-[#1E94A4] dark:hover:text-[#22d3ee] hover:bg-[#E8F4F5] dark:hover:bg-[#E8F4F5]/10 rounded-lg transition-colors"
              onClick={onClose}
            >
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const currentNavItems = navItems(t, language)

  const speakWelcome = () => {
    const texts: Record<string, { text: string; toast: string }> = {
      mr: { text: "विनसॉफ्ट डिजिटल सोल्यूशन्स मध्ये आपले स्वागत आहे. आम्ही दुग्ध, साखर आणि सुवर्ण उद्योगांसाठी प्रगत सॉफ्टवेअर देतो.", toast: "माहिती बोलत आहे..." },
      kn: { text: "ವಿನ್ಸಾಫ್ಟ್ ಡಿಜಿಟಲ್ ಸೊಲ್ಯೂಷನ್ಸ್‌ಗೆ ಸುಸ್ವಾಗತ.", toast: "ಮಾಹಿತಿ ಹೇಳಲಾಗುತ್ತಿದೆ..." },
      en: { text: "Welcome to Winsoft Digital Solutions. We provide advanced software for Dairy, Sugar, and Gold industries.", toast: "Speaking information..." },
    }
    const msg = texts[language] || texts.en
    toast.info(msg.toast)
    speakText(msg.text, language)
  }

  return (
    <header className="bg-white dark:bg-zinc-950 shadow-sm dark:shadow-none border-b dark:border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-1">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img src="/winsoftlogo.jpg" alt="Winsoft Logo" className="h-10 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 ml-3">
            {currentNavItems.map((item) =>
              item.children ? (
                <DropdownItem key={item.label} item={item as NavItem & { children: NonNullable<NavItem["children"]> }} />
              ) : (
                <Link key={item.label} href={item.href!}
                  className="font-sans px-4 py-2 text-sm font-medium text-gray-800 dark:text-zinc-200 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-zinc-900 hover:text-gray-900 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Right Actions - kept near nav */}
          <div className="hidden lg:flex items-center gap-2 ml-3">
            <SiteSearch />

            <Link href="/pricing">
              <Button variant="outline" className="h-9 px-3.5 font-sans font-semibold border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all">
                {language === 'mr' ? 'दरपत्रक' : language === 'kn' ? 'ದರಪಟ್ಟಿ' : language === 'hi' ? 'दरपत्रक' : 'Pricing'}
              </Button>
            </Link>

            <Select value={language} onValueChange={(val: any) => setLanguage(val)}>
              <SelectTrigger className="w-[120px] h-9">
                <Globe className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="mr">मराठी</SelectItem>
                <SelectItem value="hi">हिंदी</SelectItem>
                <SelectItem value="kn">ಕನ್ನಡ</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Mobile Right */}
          <div className="lg:hidden flex items-center gap-2">
            <SiteSearch />

            <Select value={language} onValueChange={(val: any) => setLanguage(val)}>
              <SelectTrigger className="w-[72px] h-8 text-xs px-2">
                <Globe className="w-3 h-3" />
                <SelectValue placeholder="Lang" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="mr">मर</SelectItem>
                <SelectItem value="hi">हि</SelectItem>
                <SelectItem value="kn">ಕ</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1.5 dark:text-zinc-200">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-800 max-h-[80vh] overflow-y-auto">
            <div className="px-3 py-4 space-y-1">

              {currentNavItems.map((item) =>
                item.children ? (
                  <MobileDropdown
                    key={item.label}
                    item={item as NavItem & { children: NonNullable<NavItem["children"]> }}
                    onClose={() => setMobileMenuOpen(false)}
                  />
                ) : (
                  <Link key={item.label} href={item.href!}
                    className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-zinc-300 hover:text-[#1E94A4] dark:hover:text-[#22d3ee] hover:bg-[#E8F4F5] dark:hover:bg-[#E8F4F5]/10 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}

              <div className="px-3 py-3 border-t border-gray-100 dark:border-zinc-800 mt-2">
                <Link href="/pricing" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-5 rounded-xl transition-all shadow-md">
                    {language === 'mr' ? 'दरपत्रक (Pricing)' : language === 'kn' ? 'ದರಪಟ್ಟಿ (Pricing)' : language === 'hi' ? 'दरपत्रक (Pricing)' : 'Pricing'}
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        )}
      </div>
    </header>
  )
}
