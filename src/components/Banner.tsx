'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const bannerImages = [
  {
    src: '/images/banner1.jpg',
    alt: '全球科技网络',
    title: '全球数字化转型',
    subtitle: '为企业提供创新科技解决方案'
  },
  {
    src: '/images/banner2.jpg',
    alt: '智能科技',
    title: '智能技术革新',
    subtitle: '引领行业技术发展'
  },
  {
    src: '/images/banner3.jpg',
    alt: '数据科技',
    title: '数据驱动未来',
    subtitle: '释放数据价值'
  }
]

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[700px] w-full overflow-hidden">
      {bannerImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out
            ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transform transition-transform duration-[8000ms] ease-linear
                     scale-100 hover:scale-110"
            priority={index === 0}
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent">
            <div className="max-w-7xl mx-auto px-8 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className={`text-6xl font-bold mb-6 
                  ${index === currentSlide ? 'animate-slide-up opacity-100' : 'opacity-0'}`}>
                  {image.title}
                </h1>
                <p className={`text-2xl text-gray-100 
                  ${index === currentSlide ? 'animate-slide-up-delay opacity-100' : 'opacity-0'}`}>
                  {image.subtitle}
                </p>
                <button className={`mt-8 tech-button-accent text-lg
                  ${index === currentSlide ? 'animate-slide-up-delay-2 opacity-100' : 'opacity-0'}`}>
                  了解更多
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* 指示器 */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ease-out
              ${index === currentSlide ? 'w-12 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'}`}
            aria-label={`切换到第 ${index + 1} 张图片`}
          />
        ))}
      </div>
    </div>
  )
} 