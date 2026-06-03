"use client"

import { useEffect } from "react"

// Hotjar Heatmap & Session Recording
// Setup: https://www.hotjar.com → Create account (Free plan: 35 sessions/day)
// Replace HOTJAR_SITE_ID with your actual Site ID from Hotjar dashboard
// Hotjar Dashboard → Settings → Tracking Code → Site ID

const HOTJAR_SITE_ID = process.env.NEXT_PUBLIC_HOTJAR_SITE_ID || ""
const HOTJAR_VERSION = 6

export function HotjarAnalytics() {
  useEffect(() => {
    if (!HOTJAR_SITE_ID) {
      console.info("Hotjar: Set NEXT_PUBLIC_HOTJAR_SITE_ID in .env.local")
      return
    }

    // Avoid duplicate loading
    if ((window as any).hj) return

    ;(function(h: any, o: any, t: any, j: any, a?: any, r?: any) {
      h.hj = h.hj || function(...args: any[]) { (h.hj.q = h.hj.q || []).push(args) }
      h._hjSettings = { hjid: parseInt(HOTJAR_SITE_ID), hjsv: HOTJAR_VERSION }
      a = o.getElementsByTagName("head")[0]
      r = o.createElement("script")
      r.async = 1
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
      a.appendChild(r)
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=")
  }, [])

  return null
}
