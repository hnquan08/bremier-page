'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

import { our_services } from '@/constants'
import { coconatRegular, coconatBold, gilroyRegular } from '@/configs/fonts'

function Service() {
  const t = useTranslations()
  const { push } = useRouter()
  return (
    <div
      id="service"
      className="justify-center items-center flex flex-col py-9 lg:py-[75px] px-4 lg:px-14 w-full h-auto lg:h-screen lg:shrink-0 lg:snap-start"
    >
      <h1
        className={`text-center text-[28px] leading-[44px] lg:leading-[48px] lg:text-[36px] font-bold mb-4 text-primary ${coconatBold.className}`}
      >
        {t('section.service.title')}
      </h1>
      <p
        className={`text-center text-base lg:text-lg font-thin w-full lg:w-[50%] ${gilroyRegular.className}`}
      >
        {t('section.service.description')}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start justify-center w-5/6 mt-0 relative">
        {our_services.map((item) => (
          <div
            key={item.name}
            className="service cursor-pointer col-span-1 flex flex-col items-center text-center lg:flex-col gap-5 py-5 hover:text-primary"
            onClick={() => push(`/service?tab=${item.key}`)}
          >
            <div className="overflow-hidden h-[360px] w-[312px]">
              <Image
                src={item.image}
                alt=""
                className="w-full h-full hover:scale-110 duration-300 ease-linear"
              />
            </div>
            <span
              className={`text-xl lg:text-2xl uppercase text-primary ${coconatRegular.className}`}
            >
              {item.name}
            </span>
            <p className={`text-lg w-[90%] ${gilroyRegular.className}`}>
              {t(item.desc)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service
