import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Schedule a Free Demo - See Winsoft Software in Action",
  description:
    "Book a free personalized demo of Winsoft dairy, gold, or sugar factory software. See how our ERP solutions can transform your business operations.",
}

export default function ScheduleDemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
