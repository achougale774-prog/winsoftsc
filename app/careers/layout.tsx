import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers at Winsoft - Join Our Team | Kolhapur",
  description:
    "Join Winsoft Software Consultancy in Kolhapur. We are hiring software developers, business analysts, QA engineers, and UI/UX designers. Build your career with us.",
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
