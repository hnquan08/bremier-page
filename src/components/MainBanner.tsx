'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import mainBanner from '@/static/images/main-banner.png'
import Header from './Header'
import { coconatDemi } from '@/configs/fonts'

export default function MainBanner() {
  const t = useTranslations()

  return (
    <div className="h-screen lg:shrink-0 lg:snap-start relative flex justify-center">
      <Header />
      <Image
        src={mainBanner}
        alt=""
        className="w-full object-cover object-top"
      />
      <div
        className={`absolute max-w-5xl h-full flex items-center justify-center text-center px-8 ${coconatDemi.className}`}
      >
        <p className="text-[40px] leading-[54px] lg:leading-[78px] lg:text-[64px] text-light font-normal">
          {t('main_banner')}
        </p>
      </div>
    </div>
  )
}
