'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

import Locations from '@/components/Sections/Locations'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

import { our_servies } from '@/constants'

export default function ServicePage() {
  const t = useTranslations()
  const [active, setActive] = useState(0)
  return (
    <div className="flex flex-col w-full lg:snap-mandatory lg:snap-y overflow-y-auto h-auto lg:h-screen">
      <div className="lg:h-screen lg:shrink-0 lg:snap-start bg-service flex bg-cover h-[880px] pt-52 lg:pt-[20dvh] px-6 flex-col gap-4 items-center relative">
        <Header />
        <h1 className="text-center text-[28px] lg:text-5xl font-bold mb-5 text-white">
          {t('our_service')}
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {our_servies.map((service, index) => (
            <button
              key={service.key}
              onClick={() => setActive(index)}
              className={`col-span-1 btn btn-outline text-white border-white ${active === index && 'bg-white !text-black'} hover:bg-white hover:text-black rounded-full btn-xs lg:btn-md text-sm lg:text-base px-8 !py-1 lg:!px-5 lg:!py-0 h-auto`}
            >
              {service.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-5 lg:gap-10 w-full lg:w-2/4 mt-10">
          {our_servies[active].service.map((elm, index) => (
            <div key={elm.name + index} className="flex flex-col  text-white ">
              <div className="flex items-center">
                <p className="text-base lg:text-2xl">{elm.name}</p>
                <div className="flex-grow border-t border-dotted mx-2"></div>
                <p className="text-2xl lg:text-3xl">{elm.price}</p>
              </div>
              <p className="text-sm lg:text-base">{elm.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-4 mt-10 btn-swiper">
          <button className="prev p-2 bg-white text-black rounded-full">
            <ChevronLeftIcon className="w-6 h-6 font-bold" />
          </button>
          <button className="next p-2 bg-white text-black rounded-full">
            <ChevronRightIcon className="w-6 h-6 font-bold" />
          </button>
        </div>
      </div>
      <div className="lg:h-screen lg:shrink-0 lg:snap-start bg-cover flex flex-col items-center justify-center gap-4 h-96 p-14 bg-hero">
        <p className="text-white text-center text-base mb-5">
          {t('section.hero.title')}
        </p>
        <p className="text-white text-center text-3xl lg:text-5xl font-medium w-full lg:w-[50%]">
          {t('section.hero.description')}
        </p>
      </div>
      <Locations />
      <Footer />
    </div>
  )
}
