'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { coconatBold, coconatRegular, gilroyRegular } from '@/configs/fonts'

import avatar from '@/static/images/avatar-review.png'

function Review() {
  const t = useTranslations()
  const swipper = useSwiper()
  const reviews = [
    {
      text: t('section.client_review.review_1'),
      author: 'THI NGUYỄN',
    },
    {
      text: t('section.client_review.review_2'),
      author: 'PHẠM THỊ THANH THẢO',
    },
    {
      text: t('section.client_review.review_3'),
      author: 'LUONG ANH',
    },
    {
      text: t('section.client_review.review_3'),
      author: 'EDDIE TRAN',
    },
  ]

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center lg:flex-row w-full h-screen lg:shrink-0 lg:snap-start bg-heroService bg-cover bg-center px-4 lg:px-48">
        <p
          className={`${coconatRegular.className} text-center text-white text-xl lg:text-2xl font-normal`}
        >
          {t('section.hero_text')}
        </p>
      </div>
      <div className="flex flex-col w-full items-center relative gap-4 lg:gap-8 py-10 lg:py-14 px-4 lg:px-14 justify-center lg:h-screen lg:shrink-0 lg:snap-start">
        <div
          id="review"
          className="text-white flex flex-col items-center justify-center w-full"
        >
          <h1
            className={`text-center text-[24px] lg:text-3xl mb-4 text-primary uppercase ${coconatBold.className}`}
          >
            {t('section.client_review.title')}
          </h1>
          <p
            className={`text-center text-black text-sm lg:text-lg font-thin w-full lg:w-[50%] ${gilroyRegular.className}`}
          >
            {t('section.client_review.description')}
          </p>
        </div>
        <div className="px-4 lg:px-14 w-full">
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
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="mySwiper flex flex-row gap-4 items-center justify-center w-full"
          >
            {reviews.concat(reviews).map((review, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="p-4 bg-white rounded-xl w-full !flex flex-col items-center justify-between gap-4 lg:gap-6 !h-auto"
                >
                  <div className="flex flex-col items-center gap-4">
                    <Image
                      src={avatar}
                      alt=""
                      className="lg:w-16 w-14 h-14 lg:h-16 rounded-full"
                    />
                    <p
                      className={`text-base text-center ${gilroyRegular.className}`}
                      dangerouslySetInnerHTML={{ __html: review.text }}
                    ></p>
                  </div>
                  <p
                    className={`text-xl lg:text-2xl text-[#404041] ${coconatRegular.className}`}
                  >
                    {review.author}
                  </p>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div className="flex flex-row gap-4 btn-swiper">
          <button
            className=" prev p-1 bg-white text-primary rounded-full border-[1px] border-black"
            onClick={() => swipper?.slidePrev()}
          >
            <ChevronLeftIcon className="w-5 h-5 font-bold" />
          </button>
          <button
            className=" next p-1 bg-white text-primary rounded-full border-[1px] border-black"
            onClick={() => swipper?.slideNext()}
          >
            <ChevronRightIcon className="w-5 h-5 font-bold" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Review
