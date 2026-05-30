import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Winsoft - Our Story Since 1998 | Kolhapur Software Company",
  description:
    "Winsoft Software Consultancy was founded in 1998 in Kolhapur, Maharashtra. 25+ years of delivering reliable ERP software for dairy, gold, and sugar industries across India.",
}

export default function OurStoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
