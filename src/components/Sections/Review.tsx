'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

import hero_1 from '@/static/images/hero_1.png'
import hero_2 from '@/static/images/hero_2.png'
import avatar from '@/static/images/avatar-review.png'
import { useRouter } from 'next/navigation'
import { coconatBold, coconatDemi, coconatRegular } from '@/configs/fonts'

function Review() {
  const t = useTranslations()
  const swipper = useSwiper()
  const { push } = useRouter()
  const reviews = [
    {
      text: t('section.client_review.review_1'),
      author: 'MS. JOYCE YU',
      job: t('section.client_review.job'),
    },
    {
      text: t('section.client_review.review_2'),
      author: 'MS. JOYCE YU',
      job: t('section.client_review.job'),
    },
    {
      text: t('section.client_review.review_3'),
      author: 'ENI LYHA',
      job: t('section.client_review.job'),
    },
  ]

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center lg:flex-row w-full h-96 lg:h-screen lg:shrink-0 lg:snap-start bg-heroService bg-cover bg-center px-4 lg:px-48">
        <p
          className={`${coconatRegular.className} text-center text-white text-xl lg:text-3xl font-normal`}
        >
          {t('section.hero_text')}
        </p>
      </div>
      <div className="flex flex-col w-full items-center relative gap-6 lg:gap-10 py-10 lg:py-14 px-4 lg:px-14 justify-center h-screen lg:shrink-0 lg:snap-start">
        <div
          id="review"
          className="text-white flex flex-col items-center justify-center w-full"
        >
          <h1
            className={`block lg:hidden text-center text-[28px] lg:text-5xl font-bold mb-5 text-primary uppercase ${coconatBold.className}`}
          >
            {t('section.client_review.title')}
          </h1>
          <h1
            className={`hidden lg:block text-center text-[28px] lg:text-5xl font-bold mb-5 text-primary uppercase ${coconatDemi.className}`}
          >
            {t('section.client_review.title')}
          </h1>
          <p className="text-center text-black text-base lg:text-lg font-light lg:font-medium w-full lg:w-[40%]">
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
                  className="p-4 bg-white rounded-xl w-full !flex flex-col items-center justify-between gap-6 !h-auto"
                >
                  <div className="flex flex-col items-center gap-4">
                    <Image
                      src={avatar}
                      alt=""
                      className="w-16 h-16 rounded-full"
                    />
                    <p className="text-center">{review.text}</p>
                  </div>
                  <p
                    className={`text-2xl text-[#404041] ${coconatDemi.className}`}
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
