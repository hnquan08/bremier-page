'use client'

import { coconatBold, coconatRegular, gilroyRegular } from '@/configs/fonts'
import { useTranslations } from 'next-intl'

function Hero({ text }: { text: string }) {
  const t = useTranslations()
  return (
    <div className="flex flex-col gap-6 items-center justify-center py-14 px-4 bg-hero bg-cover lg:h-screen lg:shrink-0 lg:snap-start">
      <p
        className={`text-white text-center lg:leading-[72px] text-3xl lg:text-4xl mb-6 font-medium w-full lg:w-[70%] uppercase ${coconatBold.className}`}
      >
        {t(text)}
      </p>
      <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-[40%] items-center justify-center">
        <button
          onClick={() =>
            window.open(
              'https://bremiere.myspa.vn/booking',
              '_blank',
              'noopener,noreferrer',
            )
          }
          className={`btn text-white bg-black hover:bg-black hover:text-white ${gilroyRegular.className} text-base rounded-full px-6`}
        >
          {t('booking_now')}
        </button>
      </div>
    </div>
  )
}
export default Hero
