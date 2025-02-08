'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const bannerImages = [
  {
    src: '/images/1.jpg',
    alt: '全球科技网络',
    title: '政企行业ICT综合服务提供商',
    subtitle: '为客户产业数字化转型发展提供优质的服务',
    animation: 'animate-zoomIn'
  },
  {
    src: '/images/2.jpg',
    alt: '智能科技',
    title: '政企行业ICT综合服务提供商',
    subtitle: '为客户产业数字化转型发展提供优质的服务',
    animation: 'animate-rotate3d'
  },
  {
    src: '/images/3.jpg',
    alt: '数据科技',
    title: '政企行业ICT综合服务提供商',
    subtitle: '为客户产业数字化转型发展提供优质的服务',
    animation: 'animate-fadeInScale'
  }
]

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const handlePrev = () => {
    setCurrentSlide((prev) => 
      (prev - 1 + bannerImages.length) % bannerImages.length
    )
  }

  const handleNext = () => {
    setCurrentSlide((prev) => 
      (prev + 1) % bannerImages.length
    )
  }

  return (
    <div className="relative w-full">
      <div className="relative h-screen w-screen overflow-hidden">
        {bannerImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-all duration-700
              ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className={`relative w-full h-full
              ${index === currentSlide ? image.animation : ''}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                quality={100}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent">
                <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-center">
                  <div className="text-white text-center max-w-4xl">
                    <h1 className={`text-6xl font-bold mb-8 text-white drop-shadow-lg tracking-normal whitespace-nowrap
                      ${index === currentSlide ? 'animate-slide-up opacity-100' : 'opacity-0'}`}>
                      {image.title}
                    </h1>
                    <div className={`inline-block px-12 py-2 
                      bg-gradient-to-r from-primary/10 via-primary to-primary/10
                      shadow-lg backdrop-blur-sm
                      ${index === currentSlide ? 'animate-slide-up-delay opacity-100' : 'opacity-0'}`}>
                      <p className="text-2xl text-white font-light leading-relaxed">
                        {image.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full 
                   bg-black/20 hover:bg-black/40 text-white transition-all
                   focus:outline-none focus:ring-2 focus:ring-white/60 cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full 
                   bg-black/20 hover:bg-black/40 text-white transition-all
                   focus:outline-none focus:ring-2 focus:ring-white/60 cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSlideChange(index)}
              className={`h-2 rounded-full transition-all duration-500 ease-out cursor-pointer
                ${index === currentSlide ? 'w-12 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 