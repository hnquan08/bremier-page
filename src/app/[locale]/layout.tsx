import { NextIntlClientProvider, useMessages } from 'next-intl'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata } from 'next'

import '@/static/styles.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { CalendarDaysIcon } from '@heroicons/react/16/solid'
import { coconatBold, coconatDemi, mosafinMedium } from '@/configs/fonts'
import Link from 'next/link'

export type PageParamsType = {
  locale: string
}

export const metadata: Metadata = {
  title: 'KIAI Group',
  description: 'The Journey of Holistic Transformation from Within',
  icons: {
    icon: '/favicon.svg',
  },
}

const RootLayout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: PageParamsType
}) => {
  const messages = useMessages()

  return (
    <html
      lang={locale}
      className={`${mosafinMedium.className} ${coconatDemi.className} ${coconatBold.className}`}
    >
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="relative">
            {children}
            <Link
              href="https://bremiere.myspa.vn/booking"
              target="_blank"
              className="btn btn-outline z-30 border-[1px] fixed hover:text-white hover:bg-[#7d8f7f] hover:border-white border-white lg:absolute bottom-11 rounded-full right-9 bg-[#7d8f7f] text-white"
            >
              <span className="">Booking Online</span>
              <CalendarDaysIcon className="w-6 h-6" />
            </Link>
          </div>
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout
