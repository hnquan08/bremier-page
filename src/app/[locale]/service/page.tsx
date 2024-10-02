'use client'
import { useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import Locations from '@/components/Sections/Locations'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Sections/Hero'

import { our_services } from '@/constants'
import { coconatBold, coconatRegular, gilroyRegular } from '@/configs/fonts'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'

export default function ServicePage() {
  const t = useTranslations()
  const current = useSearchParams().get('tab') || 'quick_healing'
  const [active, setActive] = useState(current)
  const swipper = useSwiper()

  const index = useMemo(
    () => our_services.findIndex((item) => item.key === active),
    [active],
  )

  const chunkArray = (
    array: { name: string; desc: string; min: string; price: string }[],
    chunkSize: number,
  ) => {
    const result = []
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize))
    }
    return result
  }

  return (
    <div className="flex flex-col w-full lg:snap-mandatory lg:snap-y overflow-y-auto h-auto lg:h-screen">
      <div className="lg:h-screen min-h-screen lg:shrink-0 lg:snap-start bg-service flex bg-fixed lg:bg-cover bg-center pt-40 pb-8 lg:pt-[20dvh] px-4 flex-col gap-4 lg:gap-6 items-center relative">
        <Header />
        <h1
          className={`text-center text-[28px] lg:text-4xl font-bold mb-5 text-white ${coconatBold.className}`}
        >
          {t('our_service')}
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {our_services.map((service) => (
            <button
              key={service.key}
              onClick={() => setActive(service.key)}
              className={`col-span-1 btn btn-outline text-white border-white ${active === service.key && 'bg-white !text-black'} hover:bg-white hover:text-black rounded-full btn-xs lg:btn-md text-sm lg:text-base px-4 py-2 lg:!px-5 lg:!py-0 h-auto`}
            >
              {service.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-8 lg:gap-5 w-full lg:w-3/4  mt-10 lg:mt-4">
          <Swiper
            modules={[Pagination, Navigation]}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.btn-swiper .prev',
              nextEl: '.btn-swiper .next',
              enabled: true,
            }}
            className="mySwiper flex flex-row gap-4 items-center justify-center w-full"
          >
            {chunkArray(our_services[index].service, 2).map(
              (chunk, slideIndex) => (
                <SwiperSlide key={slideIndex}>
                  <div className="flex flex-col gap-6">
                    {chunk.map((elm, index) => (
                      <div
                        key={elm.name + index}
                        className="flex flex-col gap-2 text-white"
                      >
                        <p
                          className={`text-xl lg:text-2xl ${coconatRegular.className}`}
                        >
                          {elm.name}
                        </p>
                        <p
                          className={`text-base ${gilroyRegular.className}`}
                          dangerouslySetInnerHTML={{ __html: elm.desc }}
                        ></p>
                        <div className="flex items-center">
                          <p
                            className={`text-xl lg:text-2xl ${coconatRegular.className}`}
                          >
                            {elm.min}
                          </p>
                          <div className="flex-grow border-t border-dotted mx-2" />
                          <p
                            className={`text-xl lg:text-2xl ${coconatRegular.className}`}
                          >
                            {elm.price} VND
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>
        <div className="flex flex-row gap-4 btn-swiper">
          <button
            onClick={() => swipper?.slidePrev()}
            className="prev btn btn-md btn-outline !h-10 w-10 !min-h-10 !px-0 bg-inherit hover:bg-inherit hover:text-white hover:border-white text-white rounded-full border-[1px] border-white"
          >
            <ChevronLeftIcon className="w-8 h-8 font-bold" />
          </button>
          <button
            onClick={() => swipper?.slideNext()}
            className="next btn btn-md btn-outline !h-10 w-10 !min-h-10 !px-0 bg-inherit hover:bg-inherit hover:text-white hover:border-white text-white rounded-full border-[1px] border-white"
          >
            <ChevronRightIcon className="w-8 h-8 font-bold" />
          </button>
        </div>
      </div>
      <Hero text="section.hero.title_2" />
      <Locations />
      <Footer />
    </div>
  )
}
