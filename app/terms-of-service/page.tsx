import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Winsoft Software",
  description:
    "Read Winsoft Software's terms of service. Understand the terms and conditions for using our website and software products.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">
            Terms of Service
          </h1>
          <p className="text-gray-500 dark:text-zinc-400 text-sm">
            Last updated: May 2026
          </p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-10 text-gray-700 dark:text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website <strong>www.winsoftsc.com</strong> or any software products and services
              provided by Winsoft Software Consultancy ("Winsoft", "we", "us", or "our"), you agree to be bound by
              these Terms of Service ("Terms").
            </p>
            <p className="mt-3">
              If you do not agree to these Terms, please do not use our website or services. We reserve the right
              to update these Terms at any time, and your continued use of our services constitutes acceptance of
              any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">2. Description of Services</h2>
            <p>
              Winsoft provides enterprise software solutions for the dairy, gold/jewellery, and sugar factory
              industries. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Software licensing and deployment</li>
              <li>Product demonstrations and consultations</li>
              <li>Technical support and maintenance</li>
              <li>Training and onboarding services</li>
              <li>Website information and resources</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">3. Use of Website</h2>
            <p>You agree to use our website only for lawful purposes and in a manner that does not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Violate any applicable local, national, or international laws or regulations</li>
              <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
              <li>Attempt to gain unauthorized access to any part of our website or systems</li>
              <li>Interfere with or disrupt the integrity or performance of our website</li>
              <li>Collect or harvest any personally identifiable information from our website</li>
              <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">4. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, software,
              and other materials, is the property of Winsoft Software Consultancy and is protected by applicable
              intellectual property laws.
            </p>
            <p className="mt-3">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit
              any content from our website without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">5. Software Licensing</h2>
            <p>
              Our software products are licensed, not sold. The specific terms of each software license are
              governed by the separate Software License Agreement provided at the time of purchase or deployment.
              Key points include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Licenses are non-transferable unless explicitly stated otherwise</li>
              <li>You may not reverse engineer, decompile, or disassemble our software</li>
              <li>You may not sublicense or resell our software without written permission</li>
              <li>License fees and payment terms are as agreed in your service contract</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">6. Demo Requests and Inquiries</h2>
            <p>
              When you submit a demo request or contact form on our website, you agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>The information you provide is accurate and complete</li>
              <li>You authorize us to contact you via the provided contact details</li>
              <li>Demo scheduling is subject to availability and confirmation by our team</li>
              <li>We may follow up with you regarding our products and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">7. Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided on an "as is" and "as available" basis without any warranties
              of any kind, either express or implied. We do not warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>The website will be uninterrupted or error-free</li>
              <li>Any defects will be corrected</li>
              <li>The website or server is free of viruses or other harmful components</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Winsoft shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, including but not limited to loss of profits,
              data, or goodwill, arising out of or in connection with your use of our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes
              arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in
              Kolhapur, Maharashtra, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">10. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
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
