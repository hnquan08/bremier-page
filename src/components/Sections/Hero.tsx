'use client'

import { useTranslations } from 'next-intl'

function Hero() {
  const t = useTranslations()
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-14 bg-hero bg-cover lg:h-screen lg:shrink-0 lg:snap-start">
      <p className="text-white text-center text-base mb-5">
        {t('section.hero.title')}
      </p>
      <p className="text-white text-center text-3xl lg:text-5xl font-medium w-full lg:w-[50%]">
        {t('section.hero.description')}
      </p>
    </div>
  )
}
export default Hero
