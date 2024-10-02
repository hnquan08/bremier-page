'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { ArrowLongRightIcon } from '@heroicons/react/16/solid'
import { coconatBold, coconatRegular, gilroyRegular } from '@/configs/fonts'

import blog_1 from '@/static/images/blog/blog_1.png'
import blog_2 from '@/static/images/blog/blog_2.png'
import blog_3 from '@/static/images/blog/blog_3.png'

function Blog() {
  const t = useTranslations()
  const blogs = [
    {
      image: blog_1,
      text: t('section.blog.blog_1'),
      desc: t('section.blog.blog_desc'),
      date: 'May 4, 2024',
      category: 'Wellness, Body',
    },
    {
      image: blog_2,
      text: t('section.blog.blog_2'),
      desc: t('section.blog.blog_desc'),
      date: 'May 4, 2024',
      category: 'Wellness, Body',
    },
    {
      image: blog_3,
      text: t('section.blog.blog_3'),
      desc: t('section.blog.blog_desc'),
      date: 'May 4, 2024',
      category: 'Wellness, Body',
    },
  ]

  return (
    <div
      id="brelax_journey"
      className="flex flex-col gap-10 lg:gap-6 w-full items-center justify-center py-10 lg:py-[75px] px-4 lg:px-14 h-auto lg:h-screen lg:shrink-0 lg:snap-start"
    >
      <div className="justify-center items-center flex flex-col w-full">
        <h1
          className={`text-center text-[28px] leading-[44px] lg:leading-[48px] lg:text-[36px] font-bold mb-5 text-primary uppercase ${coconatBold.className}`}
        >
          {t('section.blog.title')}
        </h1>
        <p
          className={`text-center text-base lg:text-lg font-thin w-full lg:w-[50%] ${gilroyRegular.className}`}
        >
          {t('section.blog.description')}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-center">
        {blogs.map((blog, index) => (
          <div
            key={blog.category + index}
            className="p-4 rounded-xl flex flex-col gap-4 col-span-1 h-full  cursor-pointer"
          >
            <div className="overflow-hidden max-h-[436px]">
              <Image
                src={blog.image}
                alt=""
                className="w-full h-64 hover:scale-110 duration-300 ease-linear"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className={`text-base ${gilroyRegular.className}`}>
                {blog.category + ' - ' + blog.date}
              </p>
              <p
                className={`text-xl text-[#404041] font-normal ${coconatRegular.className}`}
              >
                {blog.text}
              </p>
              <p
                className={`text-lg text-[#969696] ${gilroyRegular.className}`}
              >
                {blog.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-ghost text-xl text-[#404041] font-normal">
        <span className={`${coconatRegular.className} `}>
          {t('section.blog.read_more')}
        </span>
        <ArrowLongRightIcon className="w-5 h-5 font-thin" />
      </button>
    </div>
  )
}

export default Blog
