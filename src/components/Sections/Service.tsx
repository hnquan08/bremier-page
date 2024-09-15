'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { our_servies } from '@/constants'
import service_1 from '@/static/images/service-1.png'
import { useState } from 'react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import Link from 'next/link'

function Service() {
  const [hoveredService, setHoveredService] = useState(0)
  const [open, setOpen] = useState(false)
  const t = useTranslations()
  return (
    <div
      id="service"
      className="justify-center items-center flex flex-col py-9 lg:py-[75px] px-4 lg:px-14 w-full h-auto lg:h-screen lg:shrink-0 lg:snap-start"
    >
      <h1 className="text-center text-[28px] lg:text-5xl font-bold mb-5">
        {t('section.service.title')}
      </h1>
      <p className="text-center text-base lg:text-lg font-light lg:font-medium w-full lg:w-[50%]">
        {t('section.service.description')}
      </p>
      <div className="flex flex-col w-full mt-14 relative">
        {our_servies.map((item, index) => (
          <div
            key={item.name}
            className="service cursor-pointer flex lg:grid lg:grid-cols-12 border-t-[1px] gap-12 lg:h-32 py-5 hover:text-primary"
            onMouseEnter={() => setHoveredService(index + 1)}
            onMouseLeave={() => setHoveredService(0)}
          >
            <span className="text-xl col-span-4 hidden lg:block lg:text-2xl">
              {item.name}
            </span>
            <div
              className={`hidden desc col-span-0 lg:col-span-8 flex-col w-80 gap-2 text-sm`}
            >
              <p>{item.desc}</p>
              <Link href="/service">
                <span className="pb-2 border-b-[1px] inline-block">
                  {t('section.service.see_detail')}
                </span>
              </Link>
            </div>

            <Disclosure as="div" className="lg:hidden">
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center gap-2">
                    <span className="text-xl flex-1 lg:text-2xl">
                      {item.name}
                    </span>
                    {open ? (
                      <MinusIcon className="h-6 w-6 lg:hidden" />
                    ) : (
                      <PlusIcon className="h-6 w-6 lg:hidden" />
                    )}
                  </DisclosureButton>
                  <DisclosurePanel>
                    <div className="flex flex-col w-full gap-2 text-sm mt-4">
                      <Image src={service_1} alt="" className="h-full w-full" />
                      <p>{item.desc}</p>
                      <span className="inline-block mt-2">
                        {t('section.service.see_detail')}
                      </span>
                    </div>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
        <Image
          src={service_1}
          alt=""
          className={`h-full w-1/3 absolute right-0 hidden ${hoveredService !== 0 ? 'lg:block' : 'hidden'}`}
        />
      </div>
    </div>
  )
}

export default Service
