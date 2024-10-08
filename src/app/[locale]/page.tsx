'use client'
import Footer from '@/components/Footer'
import MainBanner from '@/components/MainBanner'
import Appointment from '@/components/Sections/Appointment'
import Blog from '@/components/Sections/Blog'
import Hero from '@/components/Sections/Hero'
import MemberShip from '@/components/Sections/MemberShip'
import Review from '@/components/Sections/Review'
import Service from '@/components/Sections/Service'

export default function Home() {
  return (
    <div className="flex flex-col lg:snap-mandatory lg:snap-y overflow-y-scroll scroll-smooth h-auto lg:h-screen relative">
      <MainBanner />
      <Service />
      <Review />
      <MemberShip />
      <Blog />
      <Hero text="section.hero.title_1" />
      <Appointment />
      <Footer />
    </div>
  )
}
