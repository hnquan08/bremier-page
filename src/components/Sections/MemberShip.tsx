'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import p1 from '@/static/images/membership/membership_1.png'
import p2 from '@/static/images/membership/membership_2.png'
import p3 from '@/static/images/membership/membership_3.png'

function MemberShip() {
  const t = useTranslations()
  const memberships = [
    {
      image: p1,
      desc: t('section.membership.membership_1'),
      price: '$ 40.00',
    },
    {
      image: p2,
      desc: t('section.membership.membership_2'),
      price: '$ 60.00',
    },
    {
      image: p3,
      desc: t('section.membership.membership_3'),
      price: '$ 80.00',
    },
  ]

  return (
    <div
      id="membership"
      className="flex flex-col gap-10 w-full bg-membership bg-cover items-center justify-center py-9 lg:py-14 px-4 lg:px-14 h-auto lg:h-screen lg:shrink-0 lg:snap-start"
    >
      <div className="text-white justify-center items-center flex flex-col w-full">
        <h1 className="text-center text-[28px] lg:text-5xl font-bold mb-5">
          {t('section.membership.title')}
        </h1>
        <p className="text-center text-base lg:text-lg font-light lg:font-medium w-full lg:w-[50%]">
          {t('section.membership.description')}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 lg:gap-8 items-center justify-center">
        {memberships.map((mem, index) => (
          <div
            key={mem.price + index}
            className="flex flex-col gap-7 col-span-1 items-center justify-center text-white"
          >
            <Image
              src={mem.image}
              alt=""
              className="aspect-[4/4] hover:scale-105 duration-300 ease-linear"
            />
            <p className="text-xl lg:text-4xl text-center">{mem.price}</p>
            <p className="text-base text-center w-full font-light">
              {mem.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MemberShip
