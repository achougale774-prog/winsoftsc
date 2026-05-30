import Script from "next/script"

// Replace GA_MEASUREMENT_ID with your actual Google Analytics ID
// Example: G-XXXXXXXXXX
// Get it from: https://analytics.google.com → Admin → Data Streams → Web Stream
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    // Analytics ID not configured yet — add NEXT_PUBLIC_GA_MEASUREMENT_ID to .env.local
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
