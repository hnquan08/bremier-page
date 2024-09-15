'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'

import Banner from '@/static/images/appointment.png'

function Appointment() {
  const t = useTranslations()

  return (
    <div
      id="book_now"
      className="flex flex-col gap-14 w-full items-center justify-center py-9 lg:py-[75px] px-4 lg:px-14 h-auto lg:h-screen lg:shrink-0 lg:snap-start"
    >
      <div className="justify-center items-center flex flex-col w-full">
        <h1 className="text-center text-[28px] lg:text-5xl font-bold mb-5">
          {t('section.appointment.title')}
        </h1>
        <p className="text-center text-base lg:text-lg font-light lg:font-medium w-full lg:w-[50%]">
          {t('section.appointment.description')}
        </p>
      </div>
      <div className="flex flex-col items-center lg:items-end lg:flex-row gap-10 lg:gap-10 w-full">
        <Image
          src={Banner}
          className="w-full lg:w-[680px] h-[300px] lg:h-[508px]"
          alt=""
        />
        <div className="w-full lg:w-1/4 flex flex-col items-start gap-4">
          <div className="flex flex-col gap-3">
            <p className="text-black text-[28px] font-semibold lg:text-left">
              {t('section.appointment.address.title')}
            </p>
            <p className="text-lg text-[28px] font-light lg:text-left">
              {t('section.appointment.address.content')}
            </p>
            <p className="text-lg text-[28px] font-light lg:text-left">
              {t('section.appointment.address.content_2')}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-black text-[28px] font-semibold lg:text-left">
              {t('section.appointment.contact.title')}
            </p>
            <p className="text-lg text-[28px] font-light lg:text-left">
              {t('section.appointment.contact.hotline')}
            </p>
            <p className="text-lg text-[28px] font-light lg:text-left">
              {t('section.appointment.contact.email')}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-black text-[28px] font-semibold lg:text-left">
              {t('section.appointment.open_time.title')}
            </p>
            <p className="text-lg text-[28px] font-light lg:text-left">
              {t('section.appointment.open_time.day')}
            </p>
            <p className="text-lg text-[28px] font-light lg:text-left">
              {t('section.appointment.open_time.time')}
            </p>
          </div>
          <button className="btn btn-sm btn-outline hover:bg-inherit text-black border-black border-[1px] rounded-full !px-16 w-full lg:w-auto">
            {t('book_now')}
          </button>
        </div>
        <div className="flex flex-row gap-4 lg:mt-10">
          <button className="p-2 bg-black text-white rounded-full">
            <ChevronLeftIcon className="w-6 h-6 font-bold" />
          </button>
          <button className="p-2 bg-black text-white rounded-full">
            <ChevronRightIcon className="w-6 h-6 font-bold" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Appointment
