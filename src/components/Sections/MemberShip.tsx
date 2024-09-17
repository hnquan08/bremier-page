'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import p1 from '@/static/images/membership/membership_1.png'
import p2 from '@/static/images/membership/membership_2.png'
import p3 from '@/static/images/membership/membership_3.png'
import { coconatBold, coconatDemi } from '@/configs/fonts'

function MemberShip() {
  const t = useTranslations()
  const memberships = [
    {
      image: p1,
      level: 'Vip 1',
      desc: t('section.membership.membership_1'),
    },
    {
      image: p2,
      level: 'Vip 2',
      desc: t('section.membership.membership_2'),
    },
    {
      image: p3,
      level: 'Vip 3',
      desc: t('section.membership.membership_3'),
    },
  ]

  return (
    <div
      id="product"
      className="flex flex-col gap-10 w-full bg-membership bg-cover items-center justify-center py-9 lg:py-14 px-4 lg:px-14 h-auto lg:h-screen lg:shrink-0 lg:snap-start"
    >
      <div className="text-white justify-center items-center flex flex-col w-full">
        <h1
          className={`block lg:hidden text-center text-[28px] lg:text-5xl font-bold mb-5 text-white ${coconatBold.className}`}
        >
          {t('section.membership.title')}
        </h1>
        <h1
          className={`hidden lg:block text-center text-[28px] lg:text-5xl font-bold mb-5 text-white ${coconatDemi.className}`}
        >
          {t('section.membership.title')}
        </h1>
        <p className="text-center text-base lg:text-lg font-light lg:font-medium w-full lg:w-[50%]">
          {t('section.membership.description')}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-9 lg:gap-8 items-center justify-center">
        {memberships.map((mem, index) => (
          <div
            key={mem.level + index}
            className="flex flex-col gap-7 items-center justify-center text-white"
          >
            <Image
              src={mem.image}
              alt=""
              className=" hover:scale-105 duration-300 ease-linear h-72 w-80"
            />
            <p
              className={`text-2xl text-center w-5/6 font-light ${coconatDemi.className}`}
            >
              {mem.level}
            </p>
            <p
              className="text-lg text-center  w-5/6 font-light"
              dangerouslySetInnerHTML={{ __html: mem.desc }}
            ></p>
            <button className="btn btn-outline rounded-full text-white border-white hover:bg-transparent hover:border-white uppercase px-8 lg:!px-20 !py-1 hover:text-white text-xl font-light">
              {t('section.membership.buy_now')}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MemberShip
