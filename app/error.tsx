"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("App Error:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-red-500" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-sans font-bold text-gray-900 dark:text-zinc-100 mb-3">
          काहीतरी चुकलं!
        </h1>
        <p className="text-gray-600 dark:text-zinc-400 font-serif mb-2">
          Something went wrong on this page.
        </p>
        {error?.message && (
          <p className="text-xs text-gray-400 dark:text-zinc-600 font-mono bg-gray-100 dark:bg-zinc-900 rounded-lg px-3 py-2 mb-8 break-all">
            {error.message}
          </p>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1E94A4] to-[#22d3ee] text-white font-bold rounded-2xl hover:from-[#0B7989] hover:to-[#1E94A4] transition-all shadow-lg"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 font-bold rounded-2xl hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>

        {/* Contact */}
        <p className="text-sm text-gray-500 dark:text-zinc-500 font-serif mt-8">
          Problem persist होत असेल तर{" "}
          <Link href="/contact" className="text-[#1E94A4] underline hover:no-underline">
            contact करा
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
