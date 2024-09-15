'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import mainBanner from '@/static/images/main-banner.png'
import Header from './Header'

export default function MainBanner() {
  const t = useTranslations()

  return (
    <div className="h-screen lg:shrink-0 lg:snap-start relative flex justify-center">
      <Header />
      <Image src={mainBanner} alt="" className="w-full object-cover" />
      <div className="absolute max-w-[888px] h-full flex items-center justify-center text-center px-14">
        <p className="text-5xl lg:text-8xl text-light italic">
          {t('main_banner')}
        </p>
      </div>
    </div>
  )
}
