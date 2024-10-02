'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import p1 from '@/static/images/membership/membership_1.png'
import p2 from '@/static/images/membership/membership_2.png'
import p3 from '@/static/images/membership/membership_3.png'
import { coconatBold, coconatRegular, gilroyRegular } from '@/configs/fonts'

function MemberShip() {
  const t = useTranslations()
  const memberships = [
    {
      image: p1,
      level: 'PLATINUM MEMBER',
      desc: t('section.membership.membership_1'),
    },
    {
      image: p2,
      level: 'PREMIER MEMBER',
      desc: t('section.membership.membership_2'),
    },
    {
      image: p3,
      level: 'INFINITE MEMBER',
      desc: t('section.membership.membership_2'),
    },
  ]

  return (
    <div
      id="product"
      className="flex flex-col gap-9 w-full bg-membership bg-cover items-center justify-center py-9 lg:py-14 px-4 lg:px-14 h-auto lg:h-screen lg:shrink-0 lg:snap-start"
    >
      <div className="text-white justify-center items-center flex flex-col w-full">
        <h1
          className={`text-center text-[24px] text-white leading-[44px] lg:leading-[48px] lg:text-[34px] font-bold mb-5 uppercase ${coconatBold.className}`}
        >
          {t('section.membership.title')}
        </h1>
        <p
          className={`text-center text-base lg:text-lg font-thin w-full lg:w-[50%] ${gilroyRegular.className}`}
        >
          {t('section.membership.description')}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-9 lg:gap-5 items-center justify-center">
        {memberships.map((mem, index) => (
          <div
            key={mem.level + index}
            className="flex flex-col gap-4 items-center h-full justify-start text-white"
          >
            <div className="flex flex-col items-center gap-4 flex-1">
              <div className="overflow-hidden h-[320px] w-[320px]">
                <Image
                  src={mem.image}
                  alt=""
                  className="w-full h-full hover:scale-110 duration-300 ease-linear"
                />
              </div>
              <p
                className={`text-2xl text-center w-5/6 font-light ${gilroyRegular.className}`}
              >
                {mem.level}
              </p>
              <p
                className={`text-base text-center font-light ${gilroyRegular.className}`}
                dangerouslySetInnerHTML={{ __html: mem.desc }}
              ></p>
            </div>
            <button className="btn btn-outline rounded-full text-white border-white hover:bg-transparent hover:border-white uppercase px-8 lg:!px-20 !py-1 hover:text-white text-lg font-light">
              {t('section.membership.buy_now')}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MemberShip
