"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { MapPin, Phone, Mail, Clock, Send, Calendar, Headphones, MessageSquare, ChevronDown } from "lucide-react"
import { supabase } from "@/lib/supabase/client"
import { sendContactNotification } from "@/lib/email"
import { useLanguage } from "@/components/language-provider"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const type = params.get("inquiryType") || params.get("type")
      if (type) {
        setFormData(prev => ({ ...prev, inquiryType: type }))
      }
    }
  }, [])

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const { language, t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const { error: insertError } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || null,
          inquiry_type: formData.inquiryType,
          message: formData.message,
        },
      ])

      if (insertError) {
        throw insertError
      }

      await sendContactNotification({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message,
        inquiry_type: formData.inquiryType,
      })

      // Construct WhatsApp Message
      const messageText = formData.inquiryType === 'dealer'
        ? `*New Dealer Inquiry Submission*\n\n*Dealer Name:* ${formData.name}\n*Business/Shop Name:* ${formData.company || "N/A"}\n*WhatsApp Number:* ${formData.phone}\n*Email:* ${formData.email}\n*Location/Address:* ${formData.message}\n\nThank you for connecting with Winsoft.`
        : `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Company:* ${formData.company || "N/A"}\n*Inquiry:* ${formData.inquiryType}\n*Message:* ${formData.message}\n\nThank you for connecting with Winsoft.`
      const whatsappUrl = `https://wa.me/919423039902?text=${encodeURIComponent(messageText)}`

      // Attempt to open WhatsApp
      setTimeout(() => {
        try {
          const waWindow = window.open(whatsappUrl, "_blank")
          if (!waWindow) {
            window.location.href = whatsappUrl
          }
        } catch (e) {
          window.location.href = whatsappUrl
        }
      }, 100)

      console.log("Contact form submitted successfully:", formData)
      setIsSubmitted(true)
    } catch (err: any) {
      console.error("CRITICAL ERROR submitting contact form:", err);
      if (err.message) console.error("Error Message:", err.message);
      if (err.details) console.error("Error Details:", err.details);
      
      setError(t("contactPage.errorMsg") || `Submission failed: ${err.message || "Unknown error"}. Please try again.`);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F4F5] to-white">
      <Header />

      <main>
        {/* Header Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-sans font-bold mb-6" style={{ color: "var(--primary)" }}>
              {t("contactPage.heroTitle")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-zinc-400 dark:text-gray-300 font-serif leading-relaxed max-w-3xl mx-auto mb-8">
              {t("contactPage.heroSubtitle")}
            </p>

            {/* Quick-Link Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="font-sans font-semibold px-8 py-3"
                style={{ backgroundColor: "var(--primary)", color: "white" }}
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Calendar className="mr-2 h-5 w-5" />
                {t("header.scheduleDemo")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-sans font-semibold px-8 py-3 bg-transparent"
                style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                onClick={() => document.getElementById("direct-contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Headphones className="mr-2 h-5 w-5" />
                {t("dairy.supportLabel")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-sans font-semibold px-8 py-3 bg-transparent"
                style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                {t("nav.contact")}
              </Button>
            </div>
          </div>
        </section>

        {/* Main Contact Hub - Two Column Layout */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column: Contact Form */}
              <div id="contact-form">
                <h2 className="text-3xl font-sans font-bold mb-4" style={{ color: "var(--primary)" }}>
                  {t("contactPage.formTitle")}
                </h2>
                <p className="text-gray-600 dark:text-zinc-400 font-serif mb-8 leading-relaxed">
                  {t("contactPage.formSubtitle")}
                </p>

                {!isSubmitted ? (
                  <Card>
                    <CardContent className="p-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                            {error}
                          </div>
                        )}

                        <div>
                          <Label htmlFor="name" className="font-sans font-medium">
                            {formData.inquiryType === 'dealer'
                              ? (language === 'mr' ? 'पूर्ण नाव / संपर्क व्यक्ती *' : 'Full Name / Contact Person *')
                              : `${t("contactPage.fullName")} *`}
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            placeholder=""
                            className="font-serif mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="company" className="font-sans font-medium">
                            {formData.inquiryType === 'dealer'
                              ? (language === 'mr' ? 'व्यवसाय / दुकानाचे नाव (पर्यायी)' : 'Business / Shop Name (Optional)')
                              : (t("contact.companyName") !== "contact.companyName" ? t("contact.companyName") : "Company Name")}
                          </Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder=""
                            className="font-serif mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="email" className="font-sans font-medium">
                            {t("contactPage.email")} *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            placeholder=""
                            className="font-serif mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone" className="font-sans font-medium">
                            {formData.inquiryType === 'dealer'
                              ? (language === 'mr' ? 'व्हॉट्सॲप नंबर *' : 'WhatsApp Number *')
                              : `${t("contactPage.phone")} *`}
                          </Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                            placeholder=""
                            className="font-serif mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="inquiryType" className="font-sans font-medium">
                            {t("contactPage.subject")} *
                          </Label>
                          <Select
                            value={formData.inquiryType}
                            onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                          >
                            <SelectTrigger className="font-serif mt-1">
                              <SelectValue placeholder={t("contactPage.subject")} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="demo">{t("header.scheduleDemo")}</SelectItem>
                              <SelectItem value="dairy">{t("nav.dairy")}</SelectItem>
                              <SelectItem value="sugar">{t("nav.sugar")}</SelectItem>
                              <SelectItem value="gold">{t("nav.gold")}</SelectItem>
                              <SelectItem value="dealer">{language === 'mr' ? 'डीलर चौकशी (Dealer Inquiry)' : 'Dealer Inquiry'}</SelectItem>
                              <SelectItem value="support">{t("dairy.supportLabel")}</SelectItem>
                              <SelectItem value="general">{t("nav.contact")}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="message" className="font-sans font-medium">
                            {formData.inquiryType === 'dealer'
                              ? (language === 'mr' ? 'सध्याचे ठिकाण / पूर्ण पत्ता *' : 'Current Location / Full Address *')
                              : `${t("contactPage.message")} *`}
                          </Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            rows={5}
                            placeholder=""
                            className="font-serif mt-1"
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="w-full font-sans font-semibold py-3"
                          style={{ backgroundColor: "var(--accent)", color: "white" }}
                        >
                          {isLoading ? t("contactPage.sending") : t("contactPage.sendMessage")} <Send className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-8 text-center">
                      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Send className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-sans font-bold text-green-800 mb-2">{t("contactPage.successMsg")}</h3>
                      <p className="text-green-700 mb-6">If WhatsApp didn't open automatically, click the button below:</p>
                      <Button 
                        onClick={() => {
                          const messageText = formData.inquiryType === 'dealer'
                            ? `*New Dealer Inquiry Submission*\n\n*Dealer Name:* ${formData.name}\n*Business/Shop Name:* ${formData.company || "N/A"}\n*WhatsApp Number:* ${formData.phone}\n*Email:* ${formData.email}\n*Location/Address:* ${formData.message}\n\nThank you for connecting with Winsoft.`
                            : `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Company:* ${formData.company || "N/A"}\n*Inquiry:* ${formData.inquiryType}\n*Message:* ${formData.message}\n\nThank you for connecting with Winsoft.`
                          window.open(`https://wa.me/919423039902?text=${encodeURIComponent(messageText)}`, "_blank")
                        }}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-xl flex items-center justify-center gap-2 mx-auto"
                      >
                        <MessageSquare className="w-5 h-5" />
                        Send on WhatsApp
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Right Column: Direct Contact Information */}
              <div id="direct-contact">
                <h2 className="text-3xl font-sans font-bold mb-8" style={{ color: "var(--primary)" }}>
                  {t("contactPage.findUs")}
                </h2>

                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1E94A4]/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6" style={{ color: "var(--primary)" }} />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-lg mb-2">{t("contactPage.callTitle")}</h3>
                      <p className="text-gray-700 dark:text-zinc-300 font-serif text-lg">+91 94230 39902</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1E94A4]/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6" style={{ color: "var(--primary)" }} />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-lg mb-2">{t("contactPage.emailTitle")}</h3>
                      <div className="space-y-1 font-serif text-gray-700 dark:text-zinc-300">
                        <p>info@winsoft.in</p>
                        <p>sales@winsoft.in</p>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1E94A4]/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6" style={{ color: "var(--primary)" }} />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-lg mb-2">{t("contactPage.officeTitle")}</h3>
                      <div className="font-serif text-gray-700 dark:text-zinc-300 leading-relaxed">
                        <p>Plot 448, Lane 14B, Hari Om Nagar,</p>
                        <p>Kolhapur, Maharashtra 416010</p>
                        <p>India</p>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1E94A4]/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6" style={{ color: "var(--primary)" }} />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-lg mb-2">{t("contactPage.workHours")}</h3>
                      <div className="font-serif text-gray-700 dark:text-zinc-300">
                        <p>Monday - Saturday: 9:30 AM - 6:30 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                    <h3 className="font-sans font-semibold text-xl mb-6" style={{ color: "var(--primary)" }}>Connect With Us</h3>
                    <div className="flex flex-wrap gap-5">
                      <a href="https://wa.me/919423039902?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20software%20solutions.%20Thank%20you%20for%20connecting%20with%20Winsoft." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] p-3.5 rounded-full text-white hover:bg-[#1EBE5D] hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-[#25D366]/30 group hover:shadow-[#25D366]/50">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        <span className="sr-only">WhatsApp</span>
                      </a>
                      <a href="https://www.instagram.com/winsoft_kolhapur?igsh=NDdiZjR2YzVlM2l4" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-3.5 rounded-full text-white hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-[#dc2743]/30 group hover:shadow-[#dc2743]/50">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        <span className="sr-only">Instagram</span>
                      </a>
                      <a href="https://facebook.com/winsoft" target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] p-3.5 rounded-full text-white hover:bg-[#166FE5] hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-[#1877F2]/30 group hover:shadow-[#1877F2]/50">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a href="https://linkedin.com/company/winsoft" target="_blank" rel="noopener noreferrer" className="bg-[#0A66C2] p-3.5 rounded-full text-white hover:bg-[#0958A8] hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-[#0A66C2]/30 group hover:shadow-[#0A66C2]/50">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section — Enhanced */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-zinc-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 text-[#1E94A4] text-xs font-bold mb-3 border border-[#1E94A4]/20">
                📍 {t("contactPage.findUs")}
              </span>
              <h2 className="text-3xl font-sans font-bold" style={{ color: "var(--primary)" }}>
                {t("contactPage.findUs")}
              </h2>
              <p className="text-gray-500 dark:text-zinc-400 mt-2 font-serif">
                Plot 448, Lane 14B, Hari Om Nagar, Kolhapur, Maharashtra 416010
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Map */}
              <div className="lg:col-span-2 bg-white dark:bg-zinc-950 rounded-2xl shadow-lg dark:shadow-none overflow-hidden border border-gray-100 dark:border-zinc-800" style={{ height: 420 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.868349822982!2d74.19894721150493!3d16.68347008437996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc100109f06798b%3A0x5e56e4313f9872be!2sWinsoft%20Software%20Consultancy!5e0!3m2!1sen!2sin!4v1714476000000!5m2!1sen!2sin"
                  width="100%" height="100%"
                  style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Winsoft Software Consultancy — Plot 448, Lane 14B, Hari Om Nagar, Kolhapur 416010"
                />
              </div>

              {/* Info cards */}
              <div className="flex flex-col gap-4">
                {[
                  {
                    emoji: "🏢",
                    title: "Office Address",
                    lines: ["Plot 448, Lane 14B,", "Hari Om Nagar,", "Kolhapur, MH 416010"],
                  },
                  {
                    emoji: "⏰",
                    title: "Business Hours",
                    lines: ["Mon – Sat: 9:30 AM – 6:30 PM", "Sunday: Closed"],
                  },
                  {
                    emoji: "📞",
                    title: "Phone",
                    lines: ["+91 94230 39902"],
                    href: "tel:+919423039902",
                  },
                  {
                    emoji: "✉️",
                    title: "Email",
                    lines: ["info@winsoft.in"],
                    href: "mailto:info@winsoft.in",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white dark:bg-zinc-950 rounded-2xl border border-gray-100 dark:border-zinc-800 p-4 flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                    <div>
                      <p className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-1">{item.title}</p>
                      {item.lines.map((line, j) =>
                        item.href ? (
                          <a key={j} href={item.href} className="block text-sm font-semibold text-[#1E94A4] hover:underline">{line}</a>
                        ) : (
                          <p key={j} className="text-sm text-gray-700 dark:text-zinc-300 font-serif">{line}</p>
                        )
                      )}
                    </div>
                  </div>
                ))}

                {/* Directions button */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Winsoft+Software+Consultancy&destination_place_id=0x3bc100109f06798b:0x5e56e4313f9872be"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#1E94A4] to-[#22d3ee] text-white font-bold text-sm rounded-xl hover:from-[#0B7989] hover:to-[#1E94A4] transition-all shadow-lg shadow-[#1E94A4]/25">
                  🗺️ Get Directions
                </a>

                {/* Write Review Button */}
                <a
                  href="https://www.google.com/maps/place/Winsoft+Software+Consultancy/@16.6834701,74.1989472,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc100109f06798b:0x5e56e4313f9872be!8m2!3d16.6834701!4d74.2015221!16s%2Fg%2F11c6_7g7q_#"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-white dark:bg-zinc-900 border-2 border-yellow-400 text-yellow-600 dark:text-yellow-400 font-bold text-sm rounded-xl hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-all">
                  ⭐ Google Review द्या
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

