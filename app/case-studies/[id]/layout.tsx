import type { Metadata } from "next"

const meta: Record<string, { title: string; description: string }> = {
  "1": {
    title: "Dairy Cooperative: 300% Efficiency Increase | Winsoft Case Study",
    description: "How Maharashtra Dairy Cooperative modernized operations with Winsoft AMCS software and achieved 300% efficiency increase.",
  },
  "2": {
    title: "Sugar Factory Automation: Streamlining Production | Winsoft Case Study",
    description: "How Rajasthan Sugar Mills automated cane procurement and production tracking with Winsoft ERP.",
  },
  "3": {
    title: "Gold Jewellery ERP: Digital Transformation | Winsoft Case Study",
    description: "How a leading jewellery showroom digitalized inventory and billing with Goldwin software.",
  },
  "4": {
    title: "Multi-Center Dairy Network: Scaling Operations | Winsoft Case Study",
    description: "How a dairy union managed 50+ collection centers with Winsoft's enterprise dairy ERP.",
  },
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const m = meta[id]
  return {
    title: m?.title ?? "Case Study | Winsoft Software",
    description: m?.description ?? "Read how Winsoft software transformed business operations.",
  }
}

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
