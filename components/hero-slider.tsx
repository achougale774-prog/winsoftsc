"use client"

import React, { useCallback, useMemo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])
  const { t, language } = useLanguage()

  const slides = useMemo(() => {
    if (language === 'mr') {
      return [
        {
          id: 1,
          mainHeading: "महा डेअरी टेक सेल",
          subHeading: "स्वयंचलित दूध संकलन सॉफ्टवेअर",
          priceText: "किंमत ₹४५,००० पासून",
          image: "/dairy33.png",
          bgColor: "from-[#E8F4F5] to-white",
          discount: "१०% पर्यंत त्वरित सूट",
          bank: "BOBCARD & HSBC",
          link: "/product/1"
        },
        {
          id: 2,
          mainHeading: "सुवर्ण ज्वेलरी टेक एक्स्पो",
          subHeading: "गोल्ड आणि ज्वेलरी एक्सचेंज सॉफ्टवेअर",
          priceText: "किंमत ₹३०,००० पासून",
          image: "/goldwin.png",
          bgColor: "from-[#1E94A4]/10 to-white",
          discount: "लायसन्सवर फ्लॅट ४०% सूट",
          bank: "HDFC & SBI",
          link: "/gold-industry-solutions"
        },
        {
          id: 3,
          mainHeading: "इंडस्ट्रियल ERP सोल्युशन्स",
          subHeading: "साखर कारखाना मॅनेजमेंट सिस्टीम",
          priceText: "किंमत ₹१,२०,००० पासून",
          image: "/sugerfac.png",
          bgColor: "from-[#0B7989]/10 to-white",
          discount: "विशेष बिझनेस ऑफर",
          bank: "ICICI & AXIS",
          link: "/sugar-factory-solutions"
        },
        {
          id: 4,
          mainHeading: "शेतकरी दूध पासबुक अॅप (Sankalan)",
          subHeading: "तुमचे दैनिक संकलन, बिल आणि खाते लेजर तपासा",
          priceText: "फ्री मोबाईल डेमो सुरू करा",
          image: "/modern-dairy-farm.png",
          bgColor: "from-[#E8F4F5] to-white",
          discount: "१००% पारदर्शक व जलद सिंक",
          bank: "Co-op & SBI Cards",
          link: "/product/2"
        },
        {
          id: 5,
          mainHeading: "डेअरी ॲडमिन डॅशबोर्ड",
          subHeading: "संस्थेचे दूध संकलन, पशूखाद्य आणि बँक खात्यांचे थेट नियंत्रण",
          priceText: "ॲडमिन ईआरपी डेमो सुरू करा",
          image: "/modern-office-dashboard.png",
          bgColor: "from-[#0B7989]/10 to-white",
          discount: "ताळेबंद, नफा-तोटा व ऑडिट रिपोर्टसह",
          bank: "Federal & State Co-op",
          link: "/product/3"
        }
      ]
    } else if (language === 'kn') {
      return [
        {
          id: 1,
          mainHeading: "ಮಹಾ ಡೈರಿ ಟೆಕ್ ಸೇಲ್",
          subHeading: "ಸ್ವಯಂಚಾಲಿತ ಹಾಲು ಸಂಗ್ರಹಣೆ ಸಾಫ್ಟ್‌ವೇರ್",
          priceText: "ಪ್ರಾರಂಭ ₹೪೫,೦೦೦",
          image: "/dairy33.png",
          bgColor: "from-[#E8F4F5] to-white",
          discount: "೧೦% ವರೆಗೆ ತ್ವರಿತ ರಿಯಾಯಿತಿ",
          bank: "BOBCARD & HSBC",
          link: "/product/1"
        },
        {
          id: 2,
          mainHeading: "ಸುವರ್ಣ ಜ್ಯುವೆಲ್ಲರಿ ಟೆಕ್ ಎಕ್ಸ್‌ಪೋ",
          subHeading: "ಚಿನ್ನ ಮತ್ತು ಜ್ಯುವೆಲ್ಲರಿ ಎಕ್ಸ್ಚೇಂಜ್ ಸಾಫ್ಟ್‌ವೇರ್",
          priceText: "ಪ್ರಾರಂಭ ₹೩೦,೦೦೦",
          image: "/goldwin.png",
          bgColor: "from-[#1E94A4]/10 to-white",
          discount: "ಲೈಸೆನ್ಸ್ ಮೇಲೆ ಫ್ಲಾಟ್ ೪೦% ರಿಯಾಯಿತಿ",
          bank: "HDFC & SBI",
          link: "/gold-industry-solutions"
        },
        {
          id: 3,
          mainHeading: "ಇಂಡಸ್ಟ್ರಿಯಲ್ ERP ಪರಿಹಾರಗಳು",
          subHeading: "ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್ ಸಿಸ್ಟಮ್ಸ್",
          priceText: "ಪ್ರಾರಂಭ ₹೧,೨೦,೦೦೦",
          image: "/sugerfac.png",
          bgColor: "from-[#0B7989]/10 to-white",
          discount: "ವಿಶೇಷ ಉದ್ಯಮ ಬೆಲೆಗಳು",
          bank: "ICICI & AXIS",
          link: "/sugar-factory-solutions"
        },
        {
          id: 4,
          mainHeading: "ರೈತರ ಹಾಲು ಪಾಸ್ಬುಕ್ ಮೊಬೈಲ್ ಆಪ್ (Sankalan)",
          subHeading: "ನಿಮ್ಮ ದೈನಂದಿನ ಹಾಲು ಸಂಗ್ರಹಣೆ, ಬಿಲ್ ಮತ್ತು ಲೆಡ್ಜರ್ ಪರಿಶೀಲಿಸಿ",
          priceText: "ಉಚಿತ ಮೊಬೈಲ್ ಡೆಮೊ ಪ್ರಾರಂಭಿಸಿ",
          image: "/modern-dairy-farm.png",
          bgColor: "from-[#1E94A4]/10 to-white",
          discount: "೧೦೦% ಪಾರದರ್ಶಕತೆ ಮತ್ತು ರಿಯಲ್-ಟೈಮ್ ಸಿಂಕ್",
          bank: "Co-op & SBI Cards",
          link: "/product/2"
        },
        {
          id: 5,
          mainHeading: "ಡೈರಿ ಅಡ್ಮಿನ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ERP",
          subHeading: "ಸಂಘದ ಹಾಲು ಸಂಗ್ರಹಣೆ ಮತ್ತು ಬ್ಯಾಂಕ್ ಖಾತೆಗಳ ನೇರ ನಿಯಂತ್ರಣ",
          priceText: "ಅಡ್ಮಿನ್ ಡೆಮೊ ವೀಕ್ಷಿಸಿ",
          image: "/modern-office-dashboard.png",
          bgColor: "from-[#0B7989]/10 to-white",
          discount: "ಸಂಪೂರ್ಣ ಆಡಿಟ್ ವರದಿ ಹಾಗೂ ಲಾಭ-ನಷ್ಟ ಖಾತೆಯೊಂದಿಗೆ",
          bank: "Federal & State Co-op",
          link: "/product/3"
        }
      ]
    } else if (language === 'hi') {
      return [
        {
          id: 1,
          mainHeading: "महा डेयरी टेक सेल",
          subHeading: "स्वचालित दूध संग्रह सॉफ्टवेयर",
          priceText: "कीमत ₹४५,००० से प्रारंभ",
          image: "/dairy33.png",
          bgColor: "from-[#E8F4F5] to-white",
          discount: "१०% तक त्वरित छूट",
          bank: "BOBCARD & HSBC",
          link: "/product/1"
        },
        {
          id: 2,
          mainHeading: "स्वर्ण आभूषण टेक एक्सपो",
          subHeading: "गोल्ड और ज्वेलरी एक्सचेंज सॉफ्टवेयर",
          priceText: "कीमत ₹३०,००० से प्रारंभ",
          image: "/goldwin.png",
          bgColor: "from-[#1E94A4]/10 to-white",
          discount: "लाइसेंस पर फ्लैट ४०% छूट",
          bank: "HDFC & SBI",
          link: "/gold-industry-solutions"
        },
        {
          id: 3,
          mainHeading: "औद्योगिक ERP समाधान",
          subHeading: "चीनी मिल प्रबंधन प्रणाली",
          priceText: "कीमत ₹१,२०,००० से प्रारंभ",
          image: "/sugerfac.png",
          bgColor: "from-[#0B7989]/10 to-white",
          discount: "विशेष उद्यम मूल्य निर्धारण",
          bank: "ICICI & AXIS",
          link: "/sugar-factory-solutions"
        },
        {
          id: 4,
          mainHeading: "किसान दूध पासबुक मोबाइल ऐप (Sankalan)",
          subHeading: "अपना दैनिक दूध संग्रह, बिल और खाता बही देखें",
          priceText: "मुफ़्त मोबाइल डेमो शुरू करें",
          image: "/modern-dairy-farm.png",
          bgColor: "from-[#1E94A4]/10 to-white",
          discount: "१००% पारदर्शी और रीयल-टाइम सिंक",
          bank: "Co-op & SBI Cards",
          link: "/product/2"
        },
        {
          id: 5,
          mainHeading: "डेयरी एडमिन डैशबोर्ड ERP",
          subHeading: "समिति का दूध संग्रह और बैंक खातों का सीधा नियंत्रण",
          priceText: "एडमिन ईआरपी डेमो शुरू करें",
          image: "/modern-office-dashboard.png",
          bgColor: "from-[#0B7989]/10 to-white",
          discount: "बैलेंस शीट, लाभ-हानि व ऑडिट रिपोर्ट सहित",
          bank: "Federal & State Co-op",
          link: "/product/3"
        }
      ]
    } else {
      return [
        {
          id: 1,
          mainHeading: t("home.heroSlide1Title"),
          subHeading: t("home.heroSlide1Desc"),
          priceText: t("home.heroSlide1Price"),
          image: "/dairy33.png",
          bgColor: "from-[#E8F4F5] to-white",
          discount: t("home.heroSlide1Discount"),
          bank: "BOBCARD & HSBC",
          link: "/product/1"
        },
        {
          id: 2,
          mainHeading: t("home.heroSlide2Title"),
          subHeading: t("home.heroSlide2Desc"),
          priceText: t("home.heroSlide2Price"),
          image: "/goldwin.png",
          bgColor: "from-[#1E94A4]/10 to-white",
          discount: t("home.heroSlide2Discount"),
          bank: "HDFC & SBI",
          link: "/gold-industry-solutions"
        },
        {
          id: 3,
          mainHeading: t("home.heroSlide3Title"),
          subHeading: t("home.heroSlide3Desc"),
          priceText: t("home.heroSlide3Price"),
          image: "/sugerfac.png",
          bgColor: "from-[#0B7989]/10 to-white",
          discount: t("home.heroSlide3Discount"),
          bank: "ICICI & AXIS",
          link: "/sugar-factory-solutions"
        },
        {
          id: 4,
          mainHeading: "Farmer Milk Passbook App (Sankalan)",
          subHeading: "Track your real-time daily milk slips, 10-day bill, and ledger statements",
          priceText: "Start Free Mobile Demo App",
          image: "/modern-dairy-farm.png",
          bgColor: "from-[#E8F4F5] to-white",
          discount: "100% Transparent & Secure Live Sync",
          bank: "Co-op & SBI Cards",
          link: "/product/2"
        },
        {
          id: 5,
          mainHeading: "Dairy Admin Dashboard ERP",
          subHeading: "Monitor society collection, bulk bank payouts, and complete co-op financials",
          priceText: "Launch Admin ERP Demo Now",
          image: "/modern-office-dashboard.png",
          bgColor: "from-[#0B7989]/10 to-white",
          discount: "Includes P&L, Balance Sheets & Audit reports",
          bank: "Federal & State Co-op",
          link: "/product/3"
        }
      ]
    }
  }, [language, t])


  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative overflow-hidden group" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide) => (
          <Link 
            key={slide.id} 
            href={slide.link}
            className={`flex-[0_0_100%] min-w-0 relative min-h-[380px] md:h-[380px] py-12 md:py-0 bg-gradient-to-r ${slide.bgColor} flex items-center cursor-pointer transition-opacity hover:opacity-95`}
          >
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
               {/* Left Content */}
               <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-zinc-100">{slide.mainHeading}</h2>
                <h3 className="text-2xl font-medium text-gray-700 dark:text-zinc-300">{slide.subHeading}</h3>
              </div>

              <div className="relative h-[250px] hidden md:block">
                <Image 
                  src={slide.image} 
                  alt={slide.mainHeading} 
                  fill 
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-zinc-950/50 hover:bg-white dark:bg-zinc-950 p-2 rounded-full shadow-lg dark:shadow-none opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <ChevronLeft className="w-8 h-8 text-gray-800 dark:text-zinc-200" />
      </button>
      <button 
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-zinc-950/50 hover:bg-white dark:bg-zinc-950 p-2 rounded-full shadow-lg dark:shadow-none opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <ChevronRight className="w-8 h-8 text-gray-800 dark:text-zinc-200" />
      </button>
    </div>
  )
}
