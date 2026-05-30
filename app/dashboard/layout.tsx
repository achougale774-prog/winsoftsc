import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WinDash | Admin Dashboard",
  description: "Internal leads management dashboard",
  robots: { index: false, follow: false },
}

// Force dark theme for dashboard — independent of site theme
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark" style={{ colorScheme: "dark" }}>
      {children}
    </div>
  )
}
