"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function PageProgressBar() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Start progress on route change
    setVisible(true)
    setProgress(20)

    const t1 = setTimeout(() => setProgress(60), 100)
    const t2 = setTimeout(() => setProgress(85), 300)
    const t3 = setTimeout(() => {
      setProgress(100)
      setTimeout(() => {
        setVisible(false)
        setProgress(0)
      }, 300)
    }, 600)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [pathname])

  if (!visible) return null

  return (
    <div
      className="fixed top-0 left-0 z-[999] h-[3px] bg-gradient-to-r from-[#1E94A4] to-[#22d3ee] transition-all duration-300 ease-out shadow-[0_0_8px_rgba(30,148,164,0.6)]"
      style={{ width: `${progress}%` }}
    />
  )
}
