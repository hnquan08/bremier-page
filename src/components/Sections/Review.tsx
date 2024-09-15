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

function Review() {
  const t = useTranslations()
  const swipper = useSwiper()
  const { push } = useRouter()
  const reviews = [
    {
      text: t('section.client_review.review_1'),
      author: 'PHAM THI THANH THAO',
      job: t('section.client_review.job'),
    },
    {
      text: t('section.client_review.review_2'),
      author: 'LUONG ANH',
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
      <div className="flex flex-col lg:flex-row w-full lg:h-screen lg:shrink-0 lg:snap-start">
        <Image src={hero_1} alt="" className="lg:w-1/2 w-full h-full" />
        <Image src={hero_2} alt="" className="lg:w-1/2 w-full h-full" />
      </div>
      <div className="bg-light bg-cover flex flex-col w-full items-center bg-primary relative gap-10 py-9 lg:py-14 px-4 lg:px-14 h-auto lg:h-screen lg:shrink-0 lg:snap-start">
        <div
          id="review"
          className="text-white flex flex-col items-center justify-center w-full"
        >
          <h1 className="text-center text-[28px] lg:text-5xl font-bold mb-5">
            {t('section.client_review.title')}
          </h1>
          <p className="text-center text-base lg:text-lg font-light lg:font-medium w-full lg:w-[50%]">
            {t('section.client_review.description')}
          </p>
          <button
            onClick={() => push('/service')}
            className="btn hover:bg-white border-0 hover:border-0 px-4 py-1 bg-white text-primary text-xl rounded-full mt-10"
          >
            {t('section.client_review.see_detail')}
          </button>
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
                  className="p-4 bg-white rounded-xl w-full !flex flex-col gap-2 !h-auto"
                >
                  <div className="flex flex-row items-center gap-4">
                    <Image
                      src={avatar}
                      alt=""
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="flex flex-col gap-4">
                      <p className="text-primary text-xl">{review.author}</p>
                      <p className="text-[20px]"> {review.job}</p>
                    </div>
                  </div>
                  <p>{review.text}</p>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div className="flex flex-row gap-4 btn-swiper">
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
    </div>
  )
}

export default Review
