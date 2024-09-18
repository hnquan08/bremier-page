'use client'
import { useTranslations } from 'next-intl'

import { coconatBold, coconatDemi, coconatRegular } from '@/configs/fonts'

function Hero() {
  const t = useTranslations()
  return (
    <div className="flex flex-col gap-6 items-center justify-center py-14 px-4 bg-hero bg-cover lg:h-screen lg:shrink-0 lg:snap-start">
      <p
        className={`block: lg:hidden text-white text-center  text-3xl lg:text-5xl font-medium w-full lg:w-[50%] ${coconatBold.className}`}
      >
        {t('section.hero.title')}
      </p>
      <p
        className={`hidden lg:block text-white text-center lg:leading-[72px] text-3xl lg:text-5xl mb-6 font-medium w-full lg:w-[60%] uppercase ${coconatDemi.className}`}
      >
        {t('section.hero.title')}
      </p>
      <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-[40%] items-center justify-center">
        <input
          type="text"
          placeholder={t('section.hero.placeholder')}
          className="input input-bordered w-full lg:w-1/3 bg-white rounded-full flex-1 px-4 py-2"
        />
        <button
          className={`btn text-white bg-black hover:bg-black hover:text-white ${coconatRegular.className} text-base rounded-full px-6`}
        >
          {t('send')}
        </button>
      </div>
    </div>
  )
}
export default Hero
