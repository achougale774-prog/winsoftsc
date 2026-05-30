import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Dairy, Gold & Sugar Industry Insights | Winsoft",
  description:
    "Read expert articles on dairy management, gold jewellery software, sugar factory operations, and digital transformation for Indian industries.",
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
