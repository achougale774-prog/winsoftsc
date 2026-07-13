"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Handshake, Settings, Shield, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function OurStoryPage() {
  const { t } = useLanguage()

  const timelineEvents = [
    {
      year: "1998",
      title: t("story.event1Title"),
      description: t("story.event1Desc"),
      image: "/live-image-dairy/5.0.png",
    },
    {
      year: "2000s",
      title: t("story.event2Title"),
      description: t("story.event2Desc"),
      image: "/sugerfac.png",
    },
    {
      year: "2005",
      title: t("story.event3Title"),
      description: t("story.event3Desc"),
      image: "/placeholder-vmvyw.png",
    },
    {
      year: "2010s",
      title: t("story.event4Title"),
      description: t("story.event4Desc"),
      image: "/live-image-dairy/5.0.png",
    },
    {
      year: "2018",
      title: t("story.event5Title"),
      description: t("story.event5Desc"),
      image: "/goldwin.png",
    },
    {
      year: t("nav.today") !== "nav.today" ? t("nav.today") : "Today",
      title: t("story.event6Title"),
      description: t("story.event6Desc"),
      image: "/placeholder-vmvyw.png",
    },
  ]

  const principles = [
    {
      icon: Handshake,
      title: t("story.value1Title"),
      description: t("story.value1Desc"),
    },
    {
      icon: Settings,
      title: t("story.value2Title"),
      description: t("story.value2Desc"),
    },
    {
      icon: Shield,
      title: t("story.value3Title"),
      description: t("story.value3Desc"),
    },
    {
      icon: Search,
      title: t("story.value4Title"),
      description: t("story.value4Desc"),
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#E8F4F5] to-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-zinc-100 mb-6 font-sans">
                  {t("story.title")}
                </h1>
                <p className="text-xl text-gray-600 dark:text-zinc-400 leading-relaxed">
                  {t("story.subtitle")}
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder-vmvyw.png"
                  alt="Winsoft founder from early days"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg dark:shadow-none"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                  {t("story.since1998")}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-zinc-100 mb-16 font-sans">
              {t("story.journeyTitle")}
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

              <div className="space-y-16">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg dark:shadow-none hidden md:block"></div>

                    <div className="md:ml-20">
                      <div
                        className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                      >
                        <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                          <div className="bg-[#1E94A4]/10 text-[#1E94A4] px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                            {event.year}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">{event.title}</h3>
                          <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-lg">{event.description}</p>
                        </div>
                        <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            width={500}
                            height={300}
                            className="rounded-lg shadow-lg dark:shadow-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-zinc-900/20 border-t border-b border-gray-100 dark:border-zinc-900">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 relative max-w-sm mx-auto lg:mx-0">
                <Image
                  src="/google map rating images/rajendra khot .jpeg"
                  alt="Rajendra Khot, Founder"
                  width={320}
                  height={400}
                  className="rounded-3xl shadow-xl object-cover aspect-[3/4]"
                />
              </div>
              <div className="lg:col-span-8">
                <span className="text-sm font-bold text-[#1E94A4] uppercase tracking-wider">Meet Our Founder</span>
                <h2 className="text-3xl font-sans font-bold text-gray-900 dark:text-zinc-100 mt-2 mb-1">
                  Rajendra Khot
                </h2>
                <p className="text-gray-500 dark:text-zinc-400 font-sans font-semibold mb-6 text-sm">Founder & CEO, Winsoft Software Consultancy</p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-[#1E94A4] pl-4">
                    <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-base italic font-serif">
                      "When I founded Winsoft, the goal was to build a trustable tech partner for dairy, sugar, and jewellery industries. Today, seeing our team digitalizing rural cooperatives and growing with our clients is my greatest pride."
                    </p>
                  </div>
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-base italic font-serif">
                      "जेव्हा मी Winsoft ची स्थापना केली, तेव्हा डेअरी, शुगर आणि ज्वेलरी उद्योगांसाठी एक विश्वसनीय तंत्रज्ञान भागीदार तयार करणे हे आमचे ध्येय होते. आज, आपली टीम ग्रामीण सहकारी संस्थांचे संगणकीकरण करताना आणि ग्राहकांसोबत प्रगती करताना पाहणे हा माझा सर्वात मोठा अभिमान आहे."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guiding Principles Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-zinc-100 mb-16 font-sans">
              {t("story.valuesTitle")}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {principles.map((principle, index) => (
                <Card key={index} className="text-center border-0 shadow-lg dark:shadow-none">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-[#1E94A4]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <principle.icon className="w-8 h-8 text-[#1E94A4]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100 mb-4 font-sans">{principle.title}</h3>
                    <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1E94A4]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6 font-sans">
              {t("story.ctaTitle")}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t("story.ctaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white dark:bg-zinc-950 text-[#1E94A4] hover:bg-[#E8F4F5] font-semibold px-8 py-3">
                  {t("header.scheduleDemo") !== "header.scheduleDemo" ? t("header.scheduleDemo") : "Schedule Demo"}
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white dark:bg-zinc-950 hover:text-[#1E94A4] font-semibold px-8 py-3 bg-transparent"
                >
                  {t("header.contact") !== "header.contact" ? t("header.contact") : "Contact"}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

