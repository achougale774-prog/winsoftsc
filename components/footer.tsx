"use client"

import Link from "next/link"
import { Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#0B7989] text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Link href="/" className="inline-block bg-white p-2 rounded-xl">
                <img 
                  src="/winsoftlogo.jpg" 
                  alt="Winsoft Logo" 
                  className="h-10 w-auto object-contain" 
                />
              </Link>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              {t("footer.about")}
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link href="https://wa.me/919423039902?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20software%20solutions.%20Thank%20you%20for%20connecting%20with%20Winsoft." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] p-2.5 rounded-full text-white hover:bg-[#1EBE5D] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-[#25D366]/30 group">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link href="https://www.instagram.com/winsoft_kolhapur?igsh=NDdiZjR2YzVlM2l4" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-2.5 rounded-full text-white hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-[#dc2743]/30 group">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://facebook.com/winsoft" target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] p-2.5 rounded-full text-white hover:bg-[#166FE5] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-[#1877F2]/30 group">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://linkedin.com/company/winsoft" target="_blank" rel="noopener noreferrer" className="bg-[#0A66C2] p-2.5 rounded-full text-white hover:bg-[#0958A8] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-[#0A66C2]/30 group">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-sans font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t("footer.products")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-white/80 hover:text-white text-sm transition-colors">
                  {t("footer.allProducts")}
                </Link>
              </li>
              <li>
                <Link href="/dairy-solutions" className="text-white/80 hover:text-white text-sm transition-colors">
                  {t("footer.dairySoftware")}
                </Link>
              </li>
              <li>
                <Link href="/gold-industry-solutions" className="text-white/80 hover:text-white text-sm transition-colors">
                  {t("footer.goldSoftware")}
                </Link>
              </li>
              <li>
                <Link href="/sugar-factory-solutions" className="text-white/80 hover:text-white text-sm transition-colors">
                  {t("footer.sugarSoftware")}
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-white/80 hover:text-white text-sm transition-colors">
                  {t("footer.features")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/80 hover:text-white text-sm transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/80 hover:text-white text-sm transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t("footer.company")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/our-story" className="text-white/80 hover:text-white text-sm transition-colors">
                   {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="text-white/80 hover:text-white text-sm transition-colors">
                  {t("footer.ourTeam")}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/80 hover:text-white text-sm transition-colors">
                  {t("footer.careers")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-white text-sm transition-colors">
                  {t("footer.blog")}
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-white/80 hover:text-white text-sm transition-colors">
                  {t("footer.caseStudies")}
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-white/80 hover:text-white text-sm transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-sans font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-white/60 flex-shrink-0" />
                <span>+91 94230 39902</span>
              </li>
              <li className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-white/60 flex-shrink-0" />
                <span>info@winsoft.in</span>
              </li>
              <li className="flex items-start text-sm">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-white/60 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/Winsoft+Software+Consultancy/@16.6834701,74.1989472,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc100109f06798b:0x5e56e4313f9872be!8m2!3d16.6834701!4d74.2015221!16s%2Fg%2F11c6_7g7q_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Plot 448, Lane 14B, Hari Om Nagar,
                  <br />
                  Kolhapur, Maharashtra 416010
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/schedule-demo"
                className="inline-block rounded-md px-5 py-2.5 text-sm font-sans font-semibold text-white transition-colors"
                style={{ backgroundColor: "var(--accent)" }}
              >
                {t("footer.requestDemo")}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-zinc-400 text-sm">© {new Date().getFullYear()} Winsoft. {t("footer.allRightsReserved")}</p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-500 dark:text-zinc-400 hover:text-gray-300 text-sm transition-colors">
              {t("footer.privacyPolicy")}
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 dark:text-zinc-400 hover:text-gray-300 text-sm transition-colors">
              {t("footer.termsOfService")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

