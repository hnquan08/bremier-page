'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import blog_1 from '@/static/images/blog/blog_1.png'

function Blog() {
  const t = useTranslations()
  const blogs = [
    {
      text: t('section.blog.blog_1'),
      date: 'May 4, 2024',
      category: 'Wellness, Body',
    },
    {
      text: t('section.blog.blog_2'),
      date: 'May 4, 2024',
      category: 'Wellness, Body',
    },
    {
      text: t('section.blog.blog_3'),
      date: 'May 4, 2024',
      category: 'Wellness, Body',
    },
  ]

  return (
    <div
      id="blog"
      className="flex flex-col gap-10 lg:gap-14 w-full items-center justify-center py-9 lg:py-[75px] px-4 lg:px-14 h-auto lg:h-screen lg:shrink-0 lg:snap-start"
    >
      <div className="justify-center items-center flex flex-col w-full">
        <h1 className="text-center text-[28px] lg:text-5xl font-bold mb-5">
          {t('section.blog.title')}
        </h1>
        <p className="text-center text-base lg:text-lg font-light lg:font-medium w-full lg:w-[50%]">
          {t('section.blog.description')}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-center">
        {blogs.map((blog, index) => (
          <div
            key={blog.category + index}
            className="p-4 rounded-xl flex flex-col gap-4 col-span-1 h-full"
          >
            <Image src={blog_1} alt="" className="w-full h-64 rounded-lg" />
            <div className="flex flex-col gap-4">
              <p>{blog.category + ' - ' + blog.date}</p>
              <p className="text-xl">{blog.text}</p>
            </div>
            <button className="btn btn-sm btn-outline hover:bg-inherit text-black border-black border-[1px] self-start">
              Massage
            </button>
          </div>
        ))}
      </div>
      <button className="btn btn-ghost text-base">
        {t('section.blog.read_more')}
      </button>
    </div>
  )
}

export default Blog
