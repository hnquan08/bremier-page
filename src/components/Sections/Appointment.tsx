'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'

import Banner from '@/static/images/appointment.png'
import { coconatBold, coconatDemi, coconatRegular } from '@/configs/fonts'

function Appointment() {
  const t = useTranslations()

  return (
    <div
      id="book_now"
      className="flex flex-col gap-14 w-full items-center justify-center py-9 lg:py-[80px] px-4 lg:px-14 h-auto lg:h-screen lg:shrink-0 lg:snap-start"
    >
      <div className="flex flex-col lg:grid lg:grid-cols-12 items-center lg:items-end gap-6 lg:gap-10 w-full h-full">
        <h1
          className={`text-center lg:hidden text-[28px] lg:text-5xl font-bold text-primary ${coconatBold.className}`}
        >
          {t('section.appointment.title')}
        </h1>
        <p className="text-center lg:hidden text-base lg:text-lg font-light lg:font-medium w-full">
          {t('section.appointment.description')}
        </p>
        <Image
          src={Banner}
          className="h-72 lg:h-full col-span-12 lg:col-span-6"
          alt=""
        />
        <div className="lg:col-span-3 flex flex-col lg:items-start items-center text-center lg:text-start gap-6 w-full">
          <h1
            className={`text-center hidden lg:block text-[28px] lg:text-5xl font-bold uppercase text-primary ${coconatDemi.className}`}
          >
            {t('section.appointment.title')}
          </h1>
          <p className="text-base hidden lg:block lg:text-lg font-light lg:font-medium w-full">
            {t('section.appointment.description')}
          </p>
          <div className="flex flex-col">
            <p
              className={`${coconatRegular.className} text-black text-[28px] font-normal lg:text-left uppercase`}
            >
              {t('section.appointment.address.title')}
            </p>
            <p className="text-lg text-[28px] font-light lg:text-left">
              {t('section.appointment.address.content')}
            </p>
            <p className="text-lg text-[28px] font-light lg:text-left">
              {t('section.appointment.address.content_2')}
            </p>
          </div>
          <div className="flex flex-col">
            <p
              className={`${coconatRegular.className} text-black text-[28px] font-normal lg:text-left uppercase`}
            >
              {t('section.appointment.contact.title')}
            </p>
            <p className="text-lg text-[28px] font-light lg:text-left">
              {t('section.appointment.contact.hotline')}
            </p>
            <p className="text-lg text-[28px] font-light lg:text-left">
              {t('section.appointment.contact.email')}
            </p>
          </div>
          <div className="flex flex-col">
            <p
              className={`${coconatRegular.className} text-black text-[28px] font-normal lg:text-left uppercase`}
            >
              {t('section.appointment.open_time.title')}
            </p>
            <p className="text-lg text-[28px] font-light lg:text-left">
              {t('section.appointment.open_time.day')}
            </p>
            <p className="text-lg text-[28px] font-light lg:text-left">
              {t('section.appointment.open_time.time')}
            </p>
          </div>
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
        </div>
        <div className=" lg:col-span-3 flex flex-row gap-4 lg:mt-10">
          <button className="p-2 bg-white text-black border-[1px] border-black rounded-full">
            <ChevronLeftIcon className="w-6 h-6 font-bold" />
          </button>
          <button className="p-2 bg-white text-black border-[1px] border-black rounded-full">
            <ChevronRightIcon className="w-6 h-6 font-bold" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Appointment
