"use client"

import { useEffect } from "react"

// Tawk.to Live Chat Widget
// Setup: https://www.tawk.to → Create account → Get your Property ID and Widget ID
// Replace TAWK_PROPERTY_ID and TAWK_WIDGET_ID below with your actual values
// Example: s1.tawk.to/chat/64abc123def456/1h2i3j4k5

const TAWK_PROPERTY_ID = "YOUR_PROPERTY_ID"  // e.g. "64abc123def456"
const TAWK_WIDGET_ID   = "YOUR_WIDGET_ID"    // e.g. "1h2i3j4k5"

export function TawkToChat() {
  useEffect(() => {
    // Don't load if IDs not configured
    if (
      TAWK_PROPERTY_ID === "YOUR_PROPERTY_ID" ||
      TAWK_WIDGET_ID === "YOUR_WIDGET_ID"
    ) {
      console.info("Tawk.to: Set TAWK_PROPERTY_ID and TAWK_WIDGET_ID in components/tawkto-chat.tsx")
      return
    }

    // Avoid duplicate loading
    if (document.getElementById("tawkto-script")) return

    const s1 = document.createElement("script")
    s1.id = "tawkto-script"
    s1.async = true
    s1.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`
    s1.charset = "UTF-8"
    s1.setAttribute("crossorigin", "*")
    document.body.appendChild(s1)

    return () => {
      // Cleanup on unmount
      const existing = document.getElementById("tawkto-script")
      if (existing) existing.remove()
    }
  }, [])

  return null
}
