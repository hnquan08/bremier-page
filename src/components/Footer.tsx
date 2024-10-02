'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { icons } from '@/static/images/icons'
import { coconatRegular, gilroyRegular } from '@/configs/fonts'

export default function Footer() {
  const t = useTranslations()
  return (
    <div className="h-screen lg:shrink-0 lg:snap-start">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 w-full lg:px-14 py-16">
        <div className="lg:w-1/2 flex justify-center">
          <div className="flex flex-col gap-4 items-center lg:items-start bg-footer bg-cover bg-center w-full lg:w-2/3 lg:rounded-2xl h-[400px] py-8 px-10 text-white">
            <p className={`text-2xl text-white ${coconatRegular.className}`}>
              {t('footer.contact.title')}
            </p>
            <input
              type="text"
              placeholder="Your name"
              className="text-white border-white border backdrop-saturate-125 w-full bg-white/30 p-3 text-sm focus:border-white placeholder:text-white rounded-md"
            />
            <input
              type="text"
              placeholder="Your email"
              className="text-white border-white border backdrop-saturate-125 w-full bg-white/30 p-3 text-sm focus:border-white placeholder:text-white rounded-md"
            />
            <textarea
              placeholder="Your Message Here"
              className="text-white border-white border backdrop-saturate-125 w-full bg-white/30 p-3 text-sm focus:border-white placeholder:text-white rounded-md flex-1"
            />
            <button className="btn w-fit rounded-3xl px-6 bg-[#758C78] border-[#758C78] hover:border-[#758C78] text-white hover:bg-[#758C78] hover:text-white">
              {t('submit')}
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-primary gap-6">
          <Image src={icons.LogoDrawer} alt="logo" />
          <div className="grid grid-cols-1 lg:grid-cols-3 text-center lg:text-left gap-10">
            <div className="col-span-1 flex flex-col gap-4">
              <p className={`${coconatRegular.className} text-2xl`}>
                {t('footer.page.title')}
              </p>
              <a
                href="/"
                className={`${gilroyRegular.className} transition hover:opacity-75 text-base`}
              >
                {t('footer.page.home')}
              </a>
              <a
                href="#service"
                className={`${gilroyRegular.className} transition hover:opacity-75 text-base`}
              >
                {t('footer.page.service')}
              </a>
              <a
                href="#review"
                className={`${gilroyRegular.className} transition hover:opacity-75 text-base`}
              >
                {t('footer.page.customer')}
              </a>
              <a
                href="#membership"
                className={`${gilroyRegular.className} transition hover:opacity-75 text-base`}
              >
                {t('footer.page.membership')}
              </a>
              <a
                href="#brelax_journey"
                className={`${gilroyRegular.className} transition hover:opacity-75 text-base`}
              >
                {t('footer.page.KIA_journey')}
              </a>
            </div>
            <div className="col-span-1 flex flex-col gap-4">
              <p className={`${coconatRegular.className} text-2xl`}>
                {t('footer.links.title')}
              </p>
              <a
                href="/"
                className={`${gilroyRegular.className} transition hover:opacity-75 text-base`}
              >
                {t('footer.links.term')}
              </a>
              <a
                href="#service"
                className={`${gilroyRegular.className} transition hover:opacity-75 text-base`}
              >
                {t('footer.links.privacy')}
              </a>
            </div>
            <div className="col-span-1 flex flex-col gap-4">
              <p className={`${coconatRegular.className} text-2xl`}>
                {t('footer.logo.follow')}
              </p>
              <div className="flex flex-row gap-4">
                <div
                  className="text-light transition hover:opacity-75 cursor-pointer border-dashed border-primary border rounded-full"
                  onClick={() =>
                    window.open(
                      'https://www.facebook.com/brelax.therapyspa/',
                      '_blank',
                      'noopener,noreferrer',
                    )
                  }
                >
                  <Image src={icons.icFacebook} alt="facebook" />
                </div>
                <div
                  className="text-light transition hover:opacity-75 cursor-pointer border-dashed border-primary border rounded-full"
                  onClick={() =>
                    window.open(
                      'https://www.instagram.com/brelax.therapyspa',
                      '_blank',
                      'noopener,noreferrer',
                    )
                  }
                >
                  <Image src={icons.icInstagram} alt="instagram" />
                </div>
                <div
                  className="text-light transition hover:opacity-75 cursor-pointer border-dashed border-primary border rounded-full"
                  onClick={() =>
                    window.open(
                      'https://www.tiktok.com/@brelax_bremiereebykiai',
                      '_blank',
                      'noopener,noreferrer',
                    )
                  }
                >
                  <Image src={icons.icTiktok} alt="tiktok" />
                </div>
              </div>
            </div>
          </div>
          <p className={`${gilroyRegular.className} text-lg`}>
            {t('footer.copyRight')}
          </p>
        </div>
      </div>
    </div>
  )
}
