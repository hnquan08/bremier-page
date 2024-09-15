'use client'
import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'

import locationImg from '@/static/images/appointment.png'

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
    <div className="lg:h-screen lg:shrink-0 lg:snap-start flex bg-primary flex-col gap-10 lg:gap-14 w-full items-center justify-center py-9 lg:py-[75px] px-4 lg:px-14">
      <div className="justify-center text-white items-center flex flex-col gap-6 w-full">
        <h1 className="text-center text-[28px] lg:text-5xl font-bold mb-5">
          {t('section.location.title')}
        </h1>
        <p className="text-center text-base lg:text-lg font-light lg:font-medium w-full lg:w-[50%]">
          {t('section.location.description')}
        </p>
      </div>
      <div className="w-full">
        <Swiper
          modules={[Pagination, Navigation]}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: '.btn-swiper .prev',
            nextEl: '.btn-swiper .next',
            enabled: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper flex flex-row gap-4 items-center justify-center w-full"
        >
          {locations.map((location, index) => {
            return (
              <SwiperSlide
                key={location.name + index}
                className="p-4 rounded-xl flex flex-col gap-4 col-span-1 h-full"
              >
                <Image
                  src={locationImg}
                  alt=""
                  className="w-full h-64 rounded-lg"
                />
                <div className="flex flex-col gap-2 p-4 bg-white">
                  <p className="text-xl text-primary">{location.name}</p>
                  <p>{location.address}</p>
                </div>
                <button className="btn btn-md text-white w-full border-black border-[1px]">
                  {t('book_now')}
                </button>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className="flex flex-row gap-4 mt-5 btn-swiper">
        <button
          className=" prev p-2 bg-white text-primary rounded-full"
          onClick={() => swipper?.slidePrev()}
        >
          <ChevronLeftIcon className="w-6 h-6 font-bold" />
        </button>
        <button
          className=" next p-2 bg-white text-primary rounded-full"
          onClick={() => swipper?.slideNext()}
        >
          <ChevronRightIcon className="w-6 h-6 font-bold" />
        </button>
      </div>
    </div>
  )
}
