'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import mainBanner from '@/static/images/main-banner.png'
import Header from './Header'
import { coconatBold } from '@/configs/fonts'

export default function MainBanner() {
  const t = useTranslations()

  return (
    <div className="h-screen lg:shrink-0 lg:snap-start relative flex justify-center">
      <Header />
      <Image src={mainBanner} alt="" className="w-full object-fill" />
      <div
        className={`absolute max-w-5xl h-full flex items-center justify-center text-center px-8 ${coconatBold.className}`}
      >
        <p className="text-[28px] leading-[40px] lg:leading-[64px] lg:text-[48px] text-light font-normal">
          {t('main_banner')}
        </p>
      </div>
    </div>
  )
}
