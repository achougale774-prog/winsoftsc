import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Support & Help Center | Winsoft Software",
  description:
    "Get support for Winsoft dairy, gold, and sugar factory software. Phone support, remote desktop, WhatsApp help, and AMC details.",
}

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
