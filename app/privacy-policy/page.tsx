import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Winsoft Software",
  description:
    "Read Winsoft Software's privacy policy. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">
            Privacy Policy
          </h1>
          <p className="text-gray-500 dark:text-zinc-400 text-sm">
            Last updated: May 2026
          </p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-10 text-gray-700 dark:text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">1. Introduction</h2>
            <p>
              Winsoft Software Consultancy ("Winsoft", "we", "us", or "our") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
              our website <strong>www.winsoftsc.com</strong> or use our software products and services.
            </p>
            <p className="mt-3">
              By using our website or services, you agree to the collection and use of information in accordance with
              this policy. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-zinc-200 mb-2">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, phone number, and company name when you fill out contact or demo request forms</li>
              <li>Business details such as industry type and company size</li>
              <li>Messages and inquiries you send us</li>
              <li>Preferred date and time for demo scheduling</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-zinc-200 mb-2 mt-6">2.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website or source</li>
              <li>Device type (mobile, desktop, tablet)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Schedule and conduct product demonstrations</li>
              <li>Send you information about our products and services (only if you opt in)</li>
              <li>Improve our website and software products</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">4. How We Share Your Information</h2>
            <p>
              We do <strong>not</strong> sell, trade, or rent your personal information to third parties.
              We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Service Providers:</strong> We may share data with trusted third-party service providers
                (such as email services, database hosting) who assist us in operating our website and services.
                These providers are bound by confidentiality agreements.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information if required by law or in
                response to valid legal requests by public authorities.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets,
                your information may be transferred as part of that transaction.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. Our data is stored
              securely using industry-standard encryption and access controls.
            </p>
            <p className="mt-3">
              However, no method of transmission over the Internet or electronic storage is 100% secure.
              While we strive to use commercially acceptable means to protect your information, we cannot
              guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">6. Cookies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience.
              Cookies are small files stored on your device that help us remember your preferences and understand
              how you use our website.
            </p>
            <p className="mt-3">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              However, if you do not accept cookies, some portions of our website may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:info@winsoft.in" className="text-[#1E94A4] hover:underline">
                info@winsoft.in
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy
              practices or content of those websites. We encourage you to review the privacy policies of any
              third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">9. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect
              personal information from children. If you believe we have inadvertently collected information
              from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting
              the new policy on this page with an updated date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">11. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="mt-4 p-6 bg-gray-50 dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800">
              <p className="font-semibold text-gray-900 dark:text-zinc-100">Winsoft Software Consultancy</p>
              <p className="mt-1">Plot 448, Lane 14B, Hari Om Nagar,</p>
              <p>Kolhapur, Maharashtra 416010, India</p>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:info@winsoft.in" className="text-[#1E94A4] hover:underline">
                  info@winsoft.in
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+919423039902" className="text-[#1E94A4] hover:underline">
                  +91 94230 39902
                </a>
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}
