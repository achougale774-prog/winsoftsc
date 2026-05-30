import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ROI Calculator - Dairy Software Savings | Winsoft",
  description:
    "Calculate how much your dairy cooperative or milk collection society saves with Winsoft software. See monthly savings, time saved, and ROI in minutes.",
  keywords: [
    "dairy software ROI",
    "milk collection software savings",
    "dairy ERP cost benefit",
    "Winsoft ROI calculator",
  ],
}

export default function ROILayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
