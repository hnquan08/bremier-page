import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        membership: "url('/bg-membership.png')",
        hero: "url('/bg-hero.png')",
        heroService: "url('/bg-hero-service.png')",
        service: "url('/bg-service.png')",
        light: "url('/bg-light.png')",
      },
      colors: {
        primary: '#385E55',
        'primary-200': '#C8D1C9',
        black: '#202020',
        light: '#ffffff',
        gray: '#878787',
      },
    },
  },
  plugins: [require('daisyui')],
}
export default config
