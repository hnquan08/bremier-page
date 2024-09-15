import { NextIntlClientProvider, useMessages } from 'next-intl'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata } from 'next'

import '@/static/styles.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
    <html lang={locale}>
      <body className="relative" suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout
