import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 - Page Not Found | Winsoft Software",
  description: "The page you are looking for does not exist.",
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* Big 404 */}
          <div className="relative mb-8">
            <div className="text-[180px] font-black text-[#1E94A4]/10 dark:text-[#1E94A4]/5 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl">🔍</div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">
            Page Not Found
          </h1>
          <p className="text-gray-500 dark:text-zinc-400 text-lg font-serif mb-2">
            हे page सापडले नाही / This page does not exist.
          </p>
          <p className="text-gray-400 dark:text-zinc-500 text-sm font-serif mb-10">
            The page you are looking for may have been moved, deleted, or never existed.
          </p>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10 text-sm">
            {[
              { href: "/", label: "🏠 Home" },
              { href: "/dairy-solutions", label: "🥛 Dairy Software" },
              { href: "/gold-industry-solutions", label: "💛 Gold Software" },
              { href: "/sugar-factory-solutions", label: "🏭 Sugar Factory" },
              { href: "/contact", label: "📅 Schedule Demo" },
              { href: "/contact", label: "📞 Contact Us" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-zinc-300 hover:border-[#1E94A4] hover:text-[#1E94A4] hover:bg-[#1E94A4]/5 transition-all font-sans font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#1E94A4] hover:bg-[#0B7989] text-white font-sans font-semibold rounded-xl transition-colors"
            >
              ← Go Back Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-[#1E94A4] text-[#1E94A4] hover:bg-[#1E94A4]/5 font-sans font-semibold rounded-xl transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
