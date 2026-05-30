import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing - Dairy, Gold & Sugar Software Plans | Winsoft",
  description:
    "Transparent pricing for Winsoft dairy management software, gold jewellery ERP, and sugar factory solutions. Desktop, Advanced, and Cloud plans available. Contact us for a custom quote.",
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
