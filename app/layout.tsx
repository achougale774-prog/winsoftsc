import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { FloatingAudio } from "@/components/floating-audio"
import { EnquiryPopup } from "@/components/enquiry-popup"
import { GoogleAnalytics } from "@/components/google-analytics"
import { CookieConsent } from "@/components/cookie-consent"
import { BackToTop } from "@/components/back-to-top"
import { PageProgressBar } from "@/components/page-progress-bar"
import { WhatsAppQuickReply } from "@/components/whatsapp-quick-reply"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { MobileCallBar } from "@/components/mobile-call-bar"
import { TawkToChat } from "@/components/tawkto-chat"
import { HotjarAnalytics } from "@/components/hotjar-analytics"
import { PushNotificationPrompt, OneSignalLoader } from "@/components/push-notifications"
import { OrganizationSchema } from "@/components/star-rating-schema"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Winsoft - Industry Software Solutions Since 1998",
    template: "%s | Winsoft Software",
  },
  description:
    "Winsoft provides professional ERP software solutions for dairy, sugar factory, and gold/jewellery industry. 25+ years of experience. Trusted by 2000+ clients across India.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: [
    "dairy software",
    "dairy management software",
    "milk collection software",
    "AMCS software",
    "gold jewellery software",
    "sugar factory ERP",
    "Winsoft",
    "Kolhapur software company",
    "dairy ERP India",
    "cooperative dairy software",
  ],
  authors: [{ name: "Winsoft Software Consultancy" }],
  creator: "Winsoft Software Consultancy",
  publisher: "Winsoft Software Consultancy",
  metadataBase: new URL("https://www.winsoft.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.winsoft.in",
    siteName: "Winsoft Software",
    title: "Winsoft - Industry Software Solutions Since 1998",
    description:
      "Professional ERP software for dairy, sugar factory, and gold industry. 25+ years of experience. 2000+ happy clients across India.",
    images: [
      {
        url: "/winsoftlogo.jpg",
        width: 400,
        height: 200,
        alt: "Winsoft Software Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Winsoft - Industry Software Solutions Since 1998",
    description:
      "Professional ERP software for dairy, sugar factory, and gold industry. 25+ years of experience.",
    images: ["/winsoftlogo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} ${sourceSans.variable}`}>
      <body className="font-sans">
        <GoogleAnalytics />
        <HotjarAnalytics />
        <OneSignalLoader />
        <OrganizationSchema />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>
            <PageProgressBar />
            {children}
            <FloatingAudio />
            <WhatsAppQuickReply />
            <MobileCallBar />
            <EnquiryPopup />
            <ExitIntentPopup />
            <PushNotificationPrompt />
            <CookieConsent />
            <BackToTop />
            <TawkToChat />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
