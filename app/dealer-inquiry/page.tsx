"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import { toast } from "sonner"
import { ShieldCheck, TrendingUp, Users } from "lucide-react"

export default function DealerInquiryPage() {
  const { language } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    address: "",
  })
  const [submitting, setSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([{
          name: formData.name,
          company: formData.businessName || "Dealer Lead",
          phone: formData.phone,
          email: formData.email,
          inquiry_type: "Dealer Inquiry",
          message: `Shop Name: ${formData.businessName || 'N/A'}\nAddress/Location: ${formData.address}`,
          status: "new",
        }]),
      })

      if (response.ok) {
        toast.success(
          language === "mr"
            ? "✅ तुमची डीलर चौकशी यशस्वीरित्या नोंदवली गेली आहे! आमची टीम लवकरच संपर्क करेल."
            : "✅ Dealer inquiry submitted successfully! Our team will contact you shortly."
        )
        setFormData({ name: "", businessName: "", phone: "", email: "", address: "" })
      } else {
        toast.error("Failed to submit inquiry. Please try again.")
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-sky-50 dark:from-zinc-900/50 dark:to-zinc-950 py-8 border-b dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-3 font-sans">
            {language === 'mr' ? 'डीलर चौकशी (Dealer Inquiry)' : 'Dealer Inquiry Network'}
          </h1>
          <p className="text-lg text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            {language === 'mr'
              ? 'आमचे अधिकृत सॉफ्टवेअर डीलर बना आणि तुमच्या भागात व्यवसाय वाढवा.'
              : 'Become our authorized partner/dealer and grow your business in your region.'}
          </p>
        </div>
      </section>

      {/* 2-Column Info & Form Section */}
      <section className="py-10 bg-gray-50 dark:bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Benefits / Information */}
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-zinc-100 font-sans">
                {language === 'mr' ? 'Winsoft सोबत भागीदार का बनावे?' : 'Why Partner with Winsoft?'}
              </h2>
              
              <div className="space-y-6">
                {/* Benefit 1 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 shrink-0">
                    📢
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-zinc-100 mb-1">
                      {language === 'mr' ? '१००% हमी कमिशन (पूर्ण पारदर्शकता)' : '100% Guaranteed Commission (Total Transparency)'}
                    </h3>
                    <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {language === 'mr' 
                        ? 'तुम्ही आमच्या पोर्टलवर एखाद्या क्लायंटची त्यांच्या फोन नंबर आणि भेट नोंदीसह नोंदणी केली की, तो क्लायंट तुमचाच राहील. तुमचे कमिशन १००% हमीसह दिले जाईल—जरी त्यांनी नंतर आमच्याकडून थेट खरेदी केली तरीही!'
                        : 'Once you register a lead with their phone number and visit log on our portal, that client is yours. Your commission is 100% guaranteed—even if they purchase directly later.'}
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-500 shrink-0">
                    💰
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-zinc-100 mb-1">
                      {language === 'mr' ? 'शून्य गुंतवणूक, कोणताही धोका नाही' : 'Zero Investment, No Risk'}
                    </h3>
                    <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {language === 'mr'
                        ? 'तुम्हाला कोणताही स्टॉक खरेदी करण्याची किंवा कोणतीही नोंदणी फी देण्याची गरज नाही. तुम्ही फक्त तुमचा वेळ गुंतवता.'
                        : 'You don\'t need to buy stock or pay sign-up fees. You only invest your time.'}
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-600 shrink-0">
                    🎓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-zinc-100 mb-1">
                      {language === 'mr' ? 'मोफत उत्पादन प्रशिक्षण आणि विपणन साहित्य' : 'Free Product Training & Marketing Material'}
                    </h3>
                    <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {language === 'mr'
                        ? 'आम्ही तुम्हाला बॅनर्स, व्हॉट्सॲप ब्रोशर्स आणि डेमो खाती (demo accounts) देऊ, जेणेकरून तुम्हाला शून्यापासून काहीही तयार करण्याची गरज नाही.'
                        : 'We will provide the banners, WhatsApp brochures, and a demo account so you don\'t have to create anything from scratch.'}
                    </p>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-500 shrink-0">
                    ✨
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-zinc-100 mb-1">
                      {language === 'mr' ? 'उत्कृष्ट साईड हसल (Perfect Side Hustle)' : 'Perfect Side Hustle'}
                    </h3>
                    <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {language === 'mr'
                        ? 'आयटी विद्यार्थी, कॉम्प्युटर/हार्डवेअर रिपेअरिंग शॉप्स आणि अतिरिक्त उत्पन्नाचा स्रोत शोधत असलेल्या फ्रीलान्स बिझनेस कन्सल्टंटसाठी हे अगदी योग्य आहे.'
                        : 'Perfect for IT students, hardware service shops, and freelance business consultants looking to add an extra income stream.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Registration Form */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-2">
                  {language === 'mr' ? 'डीलर म्हणून नावनोंदणी करा' : 'Register as a Dealer Partner'}
                </h3>
                <p className="text-gray-500 dark:text-zinc-400 mb-8">
                  {language === 'mr' ? 'कृपया तुमचे तपशील भरा, आमचे प्रतिनिधी लवकरच संपर्क साधतील.' : 'Please fill details below, our representative will contact you shortly.'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2">
                        {language === 'mr' ? 'पूर्ण नाव / संपर्क व्यक्ती' : 'Full Name / Contact Person'} *
                      </label>
                      <input
                        type="text"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#1E94A4] transition-all text-sm font-medium"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2">
                        {language === 'mr' ? 'व्यवसाय / दुकानाचे नाव (पर्यायी)' : 'Business / Shop Name (Optional)'}
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#1E94A4] transition-all text-sm font-medium"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-6" className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2">
                        {language === 'mr' ? 'व्हॉट्सॲप नंबर' : 'WhatsApp Number'} *
                      </label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#1E94A4] transition-all text-sm font-medium"
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
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#1E94A4] transition-all text-sm font-medium"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2">
                      {language === 'mr' ? 'सध्याचे स्थान / पूर्ण पत्ता' : 'Current Location / Full Address'} *
                    </label>
                    <textarea
                      required
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#1E94A4] transition-all text-sm font-medium resize-none"
                      placeholder=""
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#1E94A4] hover:bg-[#0B7989] text-white py-6 rounded-xl font-semibold shadow-lg shadow-[#1E94A4]/20 transition-all text-base"
                  >
                    {submitting
                      ? (language === 'mr' ? 'अर्ज सबमिट होत आहे...' : 'Submitting')
                      : (language === 'mr' ? 'नोंदणी करा' : 'Register Now')}
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
