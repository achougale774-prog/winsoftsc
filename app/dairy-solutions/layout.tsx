import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dairy Software Solutions - AMCS, Passbook App & ERP | Winsoft",
  description:
    "Complete dairy management software for milk collection centers, cooperative societies, and dairy unions. AMCS, Sankalan mobile app, FAT/SNF integration. Trusted by 2000+ dairies across India.",
  keywords: [
    "dairy software India",
    "AMCS software",
    "milk collection software",
    "dairy cooperative ERP",
    "Sankalan app",
    "FAT SNF testing software",
    "dairy management system Kolhapur",
  ],
}

export default function DairySolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
