import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sugar Factory ERP Software - Cane Management System | Winsoft",
  description:
    "Complete sugar factory management ERP. Cane procurement, weighbridge integration, farmer billing, production tracking, and financial reports. Trusted by sugar factories across Maharashtra.",
  keywords: [
    "sugar factory software",
    "sugar ERP India",
    "cane management software",
    "sugar factory billing",
    "weighbridge software",
    "sugar factory Maharashtra",
  ],
}

export default function SugarSolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
