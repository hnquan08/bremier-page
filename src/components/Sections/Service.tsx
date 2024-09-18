'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

import { our_services } from '@/constants'
import { coconatDemi, coconatBold } from '@/configs/fonts'
import service_1 from '@/static/images/service-1.png'

function Service() {
  const t = useTranslations()
  const { push } = useRouter()
  return (
    <div
      id="service"
      className="justify-center items-center flex flex-col py-9 lg:py-[75px] px-4 lg:px-14 w-full h-auto lg:h-screen lg:shrink-0 lg:snap-start"
    >
      <h1
        className={`block lg:hidden text-center text-[28px] lg:text-5xl font-bold mb-5 text-primary ${coconatBold.className}`}
      >
        {t('section.service.title')}
      </h1>
      <h1
        className={`hidden lg:block text-center text-[28px] lg:text-5xl font-bold mb-5 text-primary ${coconatDemi.className}`}
      >
        {t('section.service.title')}
      </h1>
      <p className="text-center text-base lg:text-lg font-light lg:font-medium w-full lg:w-[50%]">
        {t('section.service.description')}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center justify-center w-full mt-8 relative">
        {our_services.map((item) => (
          <div
            key={item.name}
            className="service cursor-pointer col-span-1 flex flex-col items-center text-center lg:flex-col gap-5 py-5 hover:text-primary"
            onClick={() => push(`/service?tab=${item.key}`)}
          >
            <Image src={service_1} alt="" className={`h-1/4 w-full`} />
            <span
              className={`text-xl lg:text-2xl uppercase text-primary ${coconatDemi.className}`}
            >
              {item.name}
            </span>
            <p className="text-xl">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service
