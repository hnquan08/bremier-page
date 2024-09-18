'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

import Locations from '@/components/Sections/Locations'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

import { our_services } from '@/constants'
import { coconatBold, coconatDemi } from '@/configs/fonts'
import Hero from '@/components/Sections/Hero'

export default function ServicePage() {
  const t = useTranslations()
  const [active, setActive] = useState(0)
  return (
    <div className="flex flex-col w-full lg:snap-mandatory lg:snap-y overflow-y-auto h-auto lg:h-screen">
      <div className="lg:h-screen lg:shrink-0 lg:snap-start bg-service flex bg-cover h-auto pt-40 pb-8 lg:pt-[25dvh] px-6 flex-col gap-4 items-center relative">
        <Header />
        <h1
          className={`hidden lg:block text-center text-[28px] lg:text-5xl font-bold mb-5 text-white ${coconatDemi.className}`}
        >
          {t('our_service')}
        </h1>
        <h1
          className={`block lg:hidden text-center text-[28px] lg:text-5xl font-bold mb-5 text-white ${coconatBold.className}`}
        >
          {t('our_service')}
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {our_services.map((service, index) => (
            <button
              key={service.key}
              onClick={() => setActive(index)}
              className={`col-span-1 btn btn-outline text-white border-white ${active === index && 'bg-white !text-black'} hover:bg-white hover:text-black rounded-full btn-xs lg:btn-md text-sm lg:text-base px-4 py-2 lg:!px-5 lg:!py-0 h-auto`}
            >
              {service.name}
            </button>
          ))}
        </div>
        <div className="hidden lg:flex flex-col gap-5 lg:gap-5 w-full lg:w-3/4 mt-4">
          {our_services[active].service.map((elm, index) => (
            <div key={elm.name + index} className="flex flex-col  text-white ">
              <div className="flex items-center">
                <p className={`text-base lg:text-2xl ${coconatDemi.className}`}>
                  {elm.name}
                </p>
                <div className="flex-grow border-t border-dotted mx-2" />
                <p className={`text-2xl lg:text-2xl ${coconatDemi.className}`}>
                  {elm.price}
                </p>
              </div>
              <p className="text-sm lg:text-base">{elm.desc}</p>
            </div>
          ))}
        </div>
        {/* mobile */}
        <div className="lg:hidden flex flex-col gap-5 lg:gap-10 w-full lg:w-3/4 mt-10">
          {our_services[active].service.map((elm, index) => (
            <div
              key={elm.name + index}
              className="flex flex-col gap-4 text-white "
            >
              <div className="flex flex-col gap-2">
                <p className={`text-base lg:text-2xl ${coconatDemi.className}`}>
                  {elm.name}
                </p>
                <p className="text-sm lg:text-base">{elm.desc}</p>
              </div>
              <div className="flex-grow border-t border-dotted mx-2" />
              <p
                className={`text-2xl lg:text-2xl ${coconatDemi.className} text-end`}
              >
                {elm.price}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Hero />
      <Locations />
      <Footer />
    </div>
  )
}
