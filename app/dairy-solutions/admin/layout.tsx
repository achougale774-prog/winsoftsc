import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dairy Admin Dashboard Demo | Winsoft",
  description: "Interactive demo of the Winsoft dairy cooperative admin dashboard.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
