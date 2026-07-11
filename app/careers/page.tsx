"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import { toast } from "sonner"

export default function CareersPage() {
  const { language } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setSubmitting(false)
      toast.success(
        language === "mr"
          ? "✅ तुमचा अर्ज यशस्वीरित्या सबमिट झाला आहे! आमची टीम लवकरच संपर्क करेल."
          : "✅ Application submitted successfully! Our team will get back to you soon."
      )
      setFormData({ name: "", email: "", phone: "", position: "", message: "" })
      setSelectedFile(null)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-sky-50 dark:from-zinc-900/50 dark:to-zinc-950 py-20 border-b dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-zinc-100 mb-6 font-sans">
            {language === 'mr' ? 'करिअर' : 'Careers'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto">
            {language === 'mr' 
              ? 'आमच्यासोबत काम करा आणि नवीन तंत्रज्ञानाद्वारे उद्योगांना सक्षम बनवा.' 
              : 'Join our team and build the future of enterprise software solutions.'}
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-white dark:bg-zinc-950 border-b border-gray-100 dark:border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">
              {language === 'mr' ? 'आमची मुख्य तंत्रज्ञान प्रणाली' : 'Our Technology Stack'}
            </h2>
            <p className="text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
              {language === 'mr' ? 'आम्ही खालील आधुनिक आणि प्रगत तंत्रज्ञान वापरून दर्जेदार सॉफ्टवेअर विकसित करतो:' : 'We build and scale high-performance applications using these modern technologies:'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gradient-to-br from-blue-50/50 to-white dark:from-zinc-900/50 dark:to-zinc-950 border border-blue-100/50 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 font-sans font-bold text-blue-500">
                ANG
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100 mb-2">Frontend</h3>
              <p className="text-[#1E94A4] dark:text-[#22d3ee] text-sm font-semibold mb-3">Angular</p>
              <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed">
                {language === 'mr' ? 'वापरकर्त्यांना गतिमान, जलद आणि प्रतिसादात्मक अनुभव देण्यासाठी आम्ही मॉडर्न अँगुलर (Angular) फ्रेमवर्क वापरतो.' : 'We design structured, robust, and interactive user interfaces using Angular framework.'}
              </p>
            </div>

            {/* Backend */}
            <div className="bg-gradient-to-br from-purple-50/50 to-white dark:from-zinc-900/50 dark:to-zinc-950 border border-purple-100/50 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 font-sans font-bold text-purple-600">
                .NET
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100 mb-2">Backend</h3>
              <p className="text-[#1E94A4] dark:text-[#22d3ee] text-sm font-semibold mb-3">C# & .NET Core Web API</p>
              <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed">
                {language === 'mr' ? 'सुरक्षितता, व्यावसायिक लॉजिक आणि वेगवान API प्रतिसादांसाठी आम्ही बॅकएंडला मायक्रोसॉफ्ट .NET तंत्रज्ञान वापरतो.' : 'We build highly secure, scalable, enterprise-grade business logic and REST APIs using Microsoft .NET.'}
              </p>
            </div>

            {/* Database */}
            <div className="bg-gradient-to-br from-cyan-50/50 to-white dark:from-zinc-900/50 dark:to-zinc-950 border border-cyan-100/50 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 font-sans font-bold text-cyan-600">
                DB
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100 mb-2">Database</h3>
              <p className="text-[#1E94A4] dark:text-[#22d3ee] text-sm font-semibold mb-3">PostgreSQL</p>
              <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed">
                {language === 'mr' ? 'उद्योगांचा महत्त्वाचा डेटा सुरक्षित, संघटित आणि अतिशय गतीने व्यवस्थापित करण्यासाठी आम्ही पोस्टग्रेस डेटाबेस वापरतो.' : 'We structure, optimize, and safely manage relational data using PostgreSQL database systems.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden / Commented Sections as requested */}
      {/* 
      <section className="py-20 bg-white dark:bg-zinc-950">
        ... (More Than a Job, It's a Partnership & Life at Winsoft)
      </section>
      <section className="py-20 bg-gray-50 dark:bg-zinc-900/50">
        ... (Perks & Benefits)
      </section>
      <section className="py-20 bg-white dark:bg-zinc-950">
        ... (Current Openings)
      </section> 
      */}

      {/* Form Section */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div id="apply-form" className="bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-2xl p-8 shadow-xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-2 text-center">
              {language === 'mr' ? 'थेट अर्ज करा' : 'Apply Online'}
            </h3>
            <p className="text-gray-500 dark:text-zinc-400 text-center mb-8">
              {language === 'mr' ? 'खालील अर्ज भरून तुमचा रेझ्युमे (Resume) अपलोड करा' : 'Please fill the details and upload your latest resume'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2">
                    {language === 'mr' ? 'पूर्ण नाव' : 'Full Name'} *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#1E94A4] transition-all"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2">
                    {language === 'mr' ? 'ईमेल पत्ता' : 'Email Address'} *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#1E94A4] transition-all"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2">
                    {language === 'mr' ? 'मोबाईल नंबर' : 'Mobile Number'} *
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#1E94A4] transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2">
                    {language === 'mr' ? 'कामाचे पद' : 'Position Applied For'} *
                  </label>
                  <select
                    required
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#1E94A4] transition-all"
                  >
                    <option value="">{language === 'mr' ? 'पद निवडा' : 'Select Position'}</option>
                    <option value="Frontend Developer (Angular)">Frontend Developer (Angular)</option>
                    <option value="Backend Developer (.NET)">Backend Developer (.NET)</option>
                    <option value="Database Engineer (PostgreSQL)">Database Engineer (PostgreSQL)</option>
                    <option value="QA Engineer">QA Engineer</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="Other">Other / System Admin</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2">
                  {language === 'mr' ? 'रेझ्युमे अपलोड करा (PDF, DOCX)' : 'Upload Resume (PDF, DOCX)'} *
                </label>
                <div className="relative border-2 border-dashed border-gray-300 dark:border-zinc-700 rounded-2xl p-6 text-center hover:border-[#1E94A4] transition-colors bg-gray-50/50 dark:bg-zinc-900/50">
                  <input
                    type="file"
                    required
                    accept=".pdf,.docx,.doc"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="space-y-1">
                    <svg className="mx-auto h-10 w-10 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600 dark:text-zinc-400 justify-center">
                      <span className="font-semibold text-[#1E94A4] hover:text-[#0B7989]">
                        {selectedFile ? selectedFile.name : (language === 'mr' ? 'फाईल निवडा किंवा ड्रॅग करा' : 'Choose a file or drag here')}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOCX up to 10MB</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2">
                  {language === 'mr' ? 'अनुभव किंवा इतर माहिती' : 'Experience / Message'}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#1E94A4] transition-all"
                  placeholder={language === 'mr' ? 'तुमच्या कौशल्यांबद्दल किंवा अनुभवाबद्दल माहिती लिहा...' : 'Briefly describe your skill set or work experience...'}
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#1E94A4] hover:bg-[#0B7989] text-white py-6 rounded-xl font-semibold shadow-lg shadow-[#1E94A4]/20 transition-all text-base"
              >
                {submitting
                  ? (language === 'mr' ? 'अर्ज सबमिट होत आहे...' : 'Submitting Application...')
                  : (language === 'mr' ? 'अर्ज सबमिट करा' : 'Submit Application')}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
