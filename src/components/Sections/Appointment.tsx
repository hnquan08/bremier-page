'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'

import Banner from '@/static/images/appoint_bremiere.png'
import { coconatBold, coconatRegular, gilroyRegular } from '@/configs/fonts'

function Appointment() {
  const t = useTranslations()

  return (
    <div
      id="book_now"
      className="flex flex-col gap-14 w-full items-center justify-center py-9 lg:py-[80px] px-4 lg:px-14 h-auto lg:h-screen lg:shrink-0 lg:snap-start"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-center gap-6 lg:gap-10 w-full">
        <h1
          className={`text-center lg:hidden text-[28px] lg:text-[36px] text-primary ${coconatBold.className}`}
        >
          {t('section.appointment.title')}
        </h1>
        <p className="text-center lg:hidden text-base lg:text-lg font-light lg:font-medium w-full">
          {t('section.appointment.description')}
        </p>
        <Image
          src={Banner}
          className="h-72 lg:h-[660px] w-[528px] lg:mr-20"
          alt=""
        />
        <div className="h-full flex flex-col lg:items-start lg:justify-center items-center text-center lg:text-start gap-9 w-full lg:w-[572px]">
          <h1
            className={`text-center hidden lg:block text-[28px] lg:text-[36px] uppercase text-primary ${coconatBold.className}`}
          >
            {t('section.appointment.title')}
          </h1>
          <p
            className={`text-base hidden lg:block lg:text-lg font-light lg:font-medium w-full ${gilroyRegular.className}`}
          >
            {t('section.appointment.description')}
          </p>
          <div className="flex flex-col">
            <p
              className={`${coconatRegular.className} text-black text-[24px] font-normal lg:text-left uppercase`}
            >
              {t('section.appointment.address.title')}
            </p>
            <p
              className={`text-lg font-light lg:text-left ${gilroyRegular.className}`}
            >
              {t('section.appointment.address.content')}
            </p>
          </div>
          <div className="flex flex-col">
            <p
              className={`${coconatRegular.className} text-black text-[24px] font-normal lg:text-left uppercase`}
            >
              {t('section.appointment.contact.title')}
            </p>
            <p
              className={`text-lg font-light lg:text-left ${gilroyRegular.className}`}
            >
              {t('section.appointment.contact.hotline')}
            </p>
            <p
              className={`text-lg font-light lg:text-left ${gilroyRegular.className}`}
            >
              {t('section.appointment.contact.email')}
            </p>
          </div>
          <div className="flex flex-col">
            <p
              className={`${coconatRegular.className} text-black text-[24px] font-normal lg:text-left uppercase`}
            >
              {t('section.appointment.open_time.title')}
            </p>
            <p
              className={`text-lg font-light lg:text-left ${gilroyRegular.className}`}
            >
              {t('section.appointment.open_time.day')}
            </p>
            <p
              className={`text-lg font-light lg:text-left ${gilroyRegular.className}`}
            >
              {t('section.appointment.open_time.time')}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <button
              onClick={() =>
                window.open(
                  'https://bremiere.myspa.vn/booking',
                  '_blank',
                  'noopener,noreferrer',
                )
              }
              className="btn text-base uppercase  hover:bg-inherit text-white hover:text-white hover:bg-primary bg-primary border-0 rounded-full py-3 !px-16 lg:w-auto"
            >
              {t('book_now')}
            </button>
            <div className="flex flex-row gap-4">
              <button className="btn btn-md btn-outline !h-10 w-10 !min-h-10 !px-0 bg-white hover:bg-inherit hover:border-black text-primary rounded-full border-[1px] border-black">
                <ChevronLeftIcon className="w-8 h-8 font-bold" />
              </button>
              <button className="btn btn-md btn-outline !h-10 w-10 !min-h-10 !px-0 bg-white hover:bg-inherit hover:border-black text-primary rounded-full border-[1px] border-black">
                <ChevronRightIcon className="w-8 h-8 font-bold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment
