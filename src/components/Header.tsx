'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import ISO6391 from 'iso-639-1'
import Link from 'next/link'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { locales, usePathname, useRouter } from '@/helpers/navigation'
import { icons } from '@/static/images/icons'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslations()
  const locale = useLocale()
  const router = useRouter()
  const pathName = usePathname()

  const handleChange = (lang: string) => {
    router.push(pathName, { locale: lang })
  }

  const menuList = [
    {
      name: t('header.home'),
      description: 'Get a better understanding of your traffic',
      href: '/#home',
      icon: ChartPieIcon,
    },
    {
      name: t('header.service'),
      href: '/#service',
      icon: FingerPrintIcon,
    },
    {
      name: t('header.review'),
      href: '/#review',
      icon: SquaresPlusIcon,
    },
    {
      name: t('header.product'),
      href: '/#product',
      icon: ArrowPathIcon,
    },
    {
      name: t('header.brelax_journey'),
      href: '/#brelax_journey',
      icon: ArrowPathIcon,
    },
    {
      name: t('header.book_now'),
      href: 'https://bremiere.myspa.vn/booking',
      target: '_blank',
      icon: ArrowPathIcon,
    },
  ]
  return (
    <div className="w-full absolute z-10 px-4 lg:px-14 top-0 lg:top-12">
      <div className="flex flex-row items-center justify-between px-0 py-4 lg:py-0 lg:px-10 border-white bg-inherit lg:bg-inherit border-b-2">
        <Link href="/">
          <Image alt="" src={icons.LogoFooter} className="h-20 w-auto" />
        </Link>
        <div className="block lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <Bars3Icon
              aria-hidden="true"
              style={
                mobileMenuOpen ? { display: 'none' } : { display: 'block' }
              }
              className="h-6 w-6 text-white"
            />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:items-center lg:gap-x-4">
          {menuList.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.target}
              className={`text-base font-light leading-7 text-white uppercase ${item.target ? 'bg-white !rounded-full py-2 !text-primary px-6' : ''} px-4 py-2 rounded-lg`}
            >
              {item.name}
            </Link>
          ))}
          <Popover className="relative pl-2">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <Image
                alt="flag country"
                src={locale === 'en' ? icons.icFlagEN : icons.icFlagVN}
                className="h-5 w-auto"
              />
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-white"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute right-0 top-full z-20 mt-3 w-screen max-w-48 rounded-3xl bg-light shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {locales.map((lang) => (
                  <div
                    key={lang}
                    className="hover:bg-primary-200 group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex-auto">
                      <a
                        href={'#'}
                        onClick={() => handleChange(lang)}
                        className="text-base block font-normal  text-black"
                      >
                        {ISO6391.getNativeName(lang)}
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full bg-light px-4 py-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="pt-5 pl-4">
              <Image alt="" src={icons.LogoDrawer} className="h-10 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon
                color="#758C78"
                aria-hidden="true"
                className="h-6 w-6 "
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 ">
              <div className="space-y-2 py-6 divide-primary divide-y">
                {menuList.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    target={item.target}
                    className="-mx-3 block px-3 py-2 text-base font-normal leading-7 text-primary hover:bg-primary-200 "
                  >
                    {item.name}
                  </Link>
                ))}

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    <Image
                      alt="flag country"
                      src={locale === 'en' ? icons.icFlagEN : icons.icFlagVN}
                      className="h-5 w-auto"
                    />
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {locales.map((lang) => (
                      <DisclosureButton
                        key={lang}
                        as="a"
                        href={'#'}
                        onClick={() => handleChange(lang)}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-black hover:bg-light"
                      >
                        {ISO6391.getNativeName(lang)}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  )
}
