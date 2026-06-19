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
          id: "dairy",
          mainHeading: "दुग्ध व्यवसाय सोल्यूशन्स (Dairy Solutions)",
          subHeading: "सहकारी दूध संस्था, संकलन केंद्रे आणि डेअरी प्लांटसाठी प्रगत सॉफ्टवेअर",
          image: "/live-image-dairy/first-page.png",
          bgColor: "from-sky-100 to-white dark:from-zinc-900 dark:to-black",
          link: "/dairy-solutions"
        },
        {
          id: "gold",
          mainHeading: "सुवर्ण पेढी व दागिने व्यवस्थापन प्रणाली (Goldwin)",
          subHeading: "सराफा दुकानांसाठी बिलिंग, जीएसटी रिपोर्ट्स, गहाणवट (Girvi) आणि सोन्याचे हिशोब व्यवस्थापन",
          image: "/gold-image-new/gold_home_page.png",
          bgColor: "from-amber-100 to-white dark:from-zinc-900 dark:to-black",
          link: "/gold-industry-solutions"
        },
        {
          id: "sugar",
          mainHeading: "साखर कारखाना व्यवस्थापन प्रणाली",
          subHeading: "ऊस खरेदी, वजन काटा एकत्रीकरण, शेतकरी नोंदणी आणि संपूर्ण प्रशासकीय ERP सोल्यूशन",
          image: "/sugerfac.png",
          bgColor: "from-red-100 to-white dark:from-zinc-900 dark:to-black",
          link: "/sugar-factory-solutions"
        }
      ]
    } else if (language === 'kn') {
      return [
        {
          id: "dairy",
          mainHeading: "ಡೈರಿ ಉದ್ಯಮ ಪರಿಹಾರಗಳು (Dairy Solutions)",
          subHeading: "ಡೈರಿ ಸಹಕಾರಿ ಸಂಘಗಳು ಮತ್ತು ಹಾಲು ಉತ್ಪಾದನಾ ಪ್ಲಾಂಟ್‌ಗಳಿಗಾಗಿ ಅತ್ಯಾಧುನಿಕ ಸಾಫ್ಟ್‌ವೇರ್",
          image: "/live-image-dairy/first-page.png",
          bgColor: "from-sky-100 to-white dark:from-zinc-900 dark:to-black",
          link: "/dairy-solutions"
        },
        {
          id: "gold",
          mainHeading: "ಚಿನ್ನದ ಅಂಗಡಿ ಮತ್ತು ಆಭರಣ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ (Goldwin)",
          subHeading: "ಬಿಲ್ಲಿಂಗ್, ಇನ್ವೆಂಟರಿ, ಗಿರವಿ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ಜಿಎಸ್‌ಟಿ ವರದಿಗಳ ಸಂಪೂರ್ಣ ಪರಿಹಾರ",
          image: "/gold-image-new/gold_home_page.png",
          bgColor: "from-amber-100 to-white dark:from-zinc-900 dark:to-black",
          link: "/gold-industry-solutions"
        },
        {
          id: "sugar",
          mainHeading: "ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ",
          subHeading: "ಕಬ್ಬು ಖರೀದಿ, ತೂಕದ ಪ್ರಮಾಣ ಜೋಡಣೆ ಮತ್ತು ಸಂಪೂರ್ಣ ಆಡಳಿತಾತ್ಮಕ ERP ಪರಿಹಾರ",
          image: "/sugerfac.png",
          bgColor: "from-red-100 to-white dark:from-zinc-900 dark:to-black",
          link: "/sugar-factory-solutions"
        }
      ]
    } else if (language === 'hi') {
      return [
        {
          id: "dairy",
          mainHeading: "डेयरी उद्योग समाधान (Dairy Solutions)",
          subHeading: "सहकारी डेयरी समितियों, दूध संग्रह केंद्रों और डेयरी प्लांट के लिए संपूर्ण सॉफ्टवेयर",
          image: "/live-image-dairy/first-page.png",
          bgColor: "from-sky-100 to-white dark:from-zinc-900 dark:to-black",
          link: "/dairy-solutions"
        },
        {
          id: "gold",
          mainHeading: "स्वर्ण आभूषण शोरूम प्रबंधन प्रणाली (Goldwin)",
          subHeading: "ज्वेलरी शोरूम के लिए बिलिंग, इन्वेंटरी, गिरवी और संपूर्ण जीएसटी रिपोर्ट्स",
          image: "/gold-image-new/gold_home_page.png",
          bgColor: "from-amber-100 to-white dark:from-zinc-900 dark:to-black",
          link: "/gold-industry-solutions"
        },
        {
          id: "sugar",
          mainHeading: "चीनी मिल प्रबंधन प्रणाली",
          subHeading: "गन्ना खरीद, वजन कांटा एकीकरण और संपूर्ण प्रशासनिक ERP समाधान",
          image: "/sugerfac.png",
          bgColor: "from-red-100 to-white dark:from-zinc-900 dark:to-black",
          link: "/sugar-factory-solutions"
        }
      ]
    } else {
      return [
        {
          id: "dairy",
          mainHeading: "Dairy Industry Solutions",
          subHeading: "Comprehensive ERP & billing software for cooperative societies and large plants",
          image: "/live-image-dairy/first-page.png",
          bgColor: "from-sky-100 to-white dark:from-zinc-900 dark:to-black",
          link: "/dairy-solutions"
        },
        {
          id: "gold",
          mainHeading: "Gold Jewellery Showroom ERP (Goldwin)",
          subHeading: "Complete billing, account management, Girvi/pledge tracking, and GST returns",
          image: "/gold-image-new/gold_home_page.png",
          bgColor: "from-amber-100 to-white dark:from-zinc-900 dark:to-black",
          link: "/gold-industry-solutions"
        },
        {
          id: "sugar",
          mainHeading: "Sugar Factory Enterprise ERP",
          subHeading: "End-to-end ERP system to manage cane procurement, weighbridge operations, and factory accounts",
          image: "/sugerfac.png",
          bgColor: "from-red-100 to-white dark:from-zinc-900 dark:to-black",
          link: "/sugar-factory-solutions"
        }
      ]
    }
  }, [language])

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
