'use client'
import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'

import locationImg from '@/static/images/appointment.png'
import { coconatBold, coconatDemi } from '@/configs/fonts'

export default function Locations() {
  const t = useTranslations()
  const swipper = useSwiper()

  const locations = [
    {
      name: 'Brelax Nam Ky Khoi Nghia',
      address: '210 Nam Kỳ Khởi Nghĩa, P6, Q3, HCM',
    },
    {
      name: 'Brelax Nam Ky Khoi Nghia',
      address: '210 Nam Kỳ Khởi Nghĩa, P6, Q3, HCM',
    },
    {
      name: 'Brelax Nam Ky Khoi Nghia',
      address: '210 Nam Kỳ Khởi Nghĩa, P6, Q3, HCM',
    },
  ]
  return (
    <div className="lg:h-screen lg:shrink-0 lg:snap-start flex bg-white flex-col gap-10 lg:gap-14 w-full items-center justify-center py-9 lg:py-[75px] px-4 lg:px-14">
      <div className="justify-center text-white items-center flex flex-col gap-6 w-full">
        <h1
          className={`block lg:hidden text-center text-[28px] lg:text-5xl font-bold mb-5 text-primary ${coconatBold.className}`}
        >
          {t('section.location.title')}
        </h1>
        <h1
          className={`hidden lg:block text-center text-[28px] lg:text-5xl font-bold mb-5 text-primary ${coconatDemi.className}`}
        >
          {t('section.location.title')}
        </h1>
        <p className="text-center text-base lg:text-lg text-black font-light lg:font-medium w-full lg:w-[50%]">
          {t('section.location.description')}
        </p>
      </div>
      <div className="w-full">
        <Swiper
          modules={[Pagination, Navigation]}
          loop={true}
          spaceBetween={25}
          slidesPerView={1}
          navigation={{
            prevEl: '.btn-swiper .prev',
            nextEl: '.btn-swiper .next',
            enabled: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          className="mySwiper flex flex-row items-center justify-center"
        >
          {locations.concat(locations).map((location, index) => {
            return (
              <SwiperSlide
                key={location.name + index}
                className="rounded-xl flex flex-col gap-4 h-full"
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  <Image
                    src={locationImg}
                    alt=""
                    className="w-full h-64 rounded-lg"
                  />
                  <div className="flex flex-col gap-2 p-4 bg-white">
                    <p
                      className={`text-2xl text-primary uppercase ${coconatDemi.className}`}
                    >
                      {location.name}
                    </p>
                    <p className="text-2x">{location.address}</p>
                  </div>
                  <button
                    onClick={() =>
                      window.open(
                        'https://bremiere.myspa.vn/booking',
                        '_blank',
                        'noopener,noreferrer',
                      )
                    }
                    className="btn btn-outline rounded-full text-black border-black hover:bg-transparent hover:border-black uppercase px-8 lg:!px-20 !py-1 hover:text-black text-xl font-light"
                  >
                    {t('book_now')}
                  </button>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className="flex flex-row gap-4 btn-swiper">
        <button
          className=" prev p-2 bg-white text-primary rounded-full border-[1px] border-black"
          onClick={() => swipper?.slidePrev()}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          className=" next p-2 bg-white text-primary rounded-full border-[1px] border-black"
          onClick={() => swipper?.slideNext()}
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
