import createMiddleware from 'next-intl/middleware'
import { locales } from './helpers/navigation'

export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed',
})

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
}
