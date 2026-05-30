import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gold & Jewellery Management Software - Goldwin ERP | Winsoft",
  description:
    "Complete gold and jewellery showroom management software. Barcode billing, Girvi/pledge management, GST reports, gold/silver accounts. Trusted by jewellers across India.",
  keywords: [
    "gold jewellery software",
    "jewellery ERP India",
    "Goldwin software",
    "girvi management software",
    "jewellery billing software",
    "gold shop software Kolhapur",
  ],
}

export default function GoldSolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
