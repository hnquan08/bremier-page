'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { icons } from '@/static/images/icons'
import { coconatDemi, coconatRegular } from '@/configs/fonts'

export default function Footer() {
  const t = useTranslations()
  return (
    <div className="bg-primary h-screen lg:shrink-0 lg:snap-start">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <Image
              src={icons.LogoFooter}
              alt="logo"
              className="h-16 w-auto mx-auto lg:mx-0"
            />
            <div className="mt-4 lg:w-48 mx-auto lg:mx-0">
              <p className=" text-light text-base">
                {t('footer.logo.address')}
              </p>
            </div>

            <p
              className={`mt-4 text-light text-2xl uppercase ${coconatDemi.className}`}
            >
              {t('footer.logo.follow')}
            </p>

            <div className="flex flex-row gap-4 mt-4">
              <div
                className="text-light transition hover:opacity-75 cursor-pointer"
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
                className="text-light transition hover:opacity-75 cursor-pointer"
                onClick={() =>
                  window.open(
                    'https://www.instagram.com/brelax.therapyspa/',
                    '_blank',
                    'noopener,noreferrer',
                  )
                }
              >
                <Image src={icons.icInstagram} alt="instagram" />
              </div>
              <div
                className="text-light transition hover:opacity-75 cursor-pointer"
                onClick={() =>
                  window.open(
                    'https://www.tiktok.com/@brelax_bremierebykiai',
                    '_blank',
                    'noopener,noreferrer',
                  )
                }
              >
                <Image src={icons.icTiktok} alt="tiktok" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3 text-center lg:text-left">
            <div>
              <p
                className={`font-medium text-light text-2xl uppercase ${coconatRegular.className}`}
              >
                {t('footer.page.title')}
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-light transition hover:opacity-75 text-base"
                  >
                    {t('footer.page.home')}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-light transition hover:opacity-75 text-base"
                  >
                    {t('footer.page.about')}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-light transition hover:opacity-75 text-base"
                  >
                    {t('footer.page.blog')}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className={`text-light transition hover:opacity-75 text-base ${coconatRegular.className}`}
                  >
                    {t('footer.page.contact')}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p
                className={`font-medium text-light text-2xl uppercase ${coconatRegular.className}`}
              >
                {t('footer.open_time.title')}
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-light transition hover:opacity-75 text-base"
                  >
                    {t('footer.open_time.day')}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-light transition hover:opacity-75 text-base"
                  >
                    {t('footer.open_time.time')}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p
                className={`font-medium text-light text-2xl uppercase ${coconatRegular.className}`}
              >
                {t('footer.contact.title')}
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-light transition hover:opacity-75 text-base"
                  >
                    {t('footer.contact.email')}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-light transition hover:opacity-75 text-base"
                  >
                    {t('footer.contact.phone')}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-light transition hover:opacity-75 text-base"
                  >
                    {t('footer.contact.hotline')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
