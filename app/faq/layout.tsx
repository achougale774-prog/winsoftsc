import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Winsoft Software",
  description:
    "Find answers to common questions about Winsoft dairy, gold, and sugar factory software. Pricing, support, training, and more.",
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
