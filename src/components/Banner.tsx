'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const bannerImages = [
  {
    src: '/images/1.jpg',
    alt: '全球科技网络',
    title: '全球数字化转型',
    subtitle: '为企业提供创新科技解决方案',
    animation: 'animate-zoomIn'
  },
  {
    src: '/images/2.jpg',
    alt: '智能科技',
    title: '智能技术革新',
    subtitle: '引领行业技术发展',
    animation: 'animate-rotate3d'
  },
  {
    src: '/images/3.jpg',
    alt: '数据科技',
    title: '数据驱动未来',
    subtitle: '释放数据价值',
    animation: 'animate-fadeInScale'
  }
]

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const handleSlideChange = useCallback((index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 1200)
  }, [isAnimating])

  const nextSlide = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (isAnimating) return
    const nextIndex = (currentSlide + 1) % bannerImages.length
    handleSlideChange(nextIndex)
  }, [currentSlide, handleSlideChange, isAnimating])

  const prevSlide = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (isAnimating) return
    const prevIndex = (currentSlide - 1 + bannerImages.length) % bannerImages.length
    handleSlideChange(prevIndex)
  }, [currentSlide, handleSlideChange, isAnimating])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      const nextIndex = (currentSlide + 1) % bannerImages.length
      handleSlideChange(nextIndex)
    }, 6000)
    return () => clearInterval(timer)
  }, [currentSlide, isPaused, handleSlideChange])

  return (
    <div className="relative w-full">
      <div 
        className="relative h-screen w-screen overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {bannerImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-all duration-1000
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
          </div>
        ))}

        {/* 左右箭头 */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full 
                   bg-black/20 hover:bg-black/40 text-white transition-all
                   focus:outline-none focus:ring-2 focus:ring-white/60"
          aria-label="上一张"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full 
                   bg-black/20 hover:bg-black/40 text-white transition-all
                   focus:outline-none focus:ring-2 focus:ring-white/60"
          aria-label="下一张"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* 指示器 */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => !isAnimating && handleSlideChange(index)}
              className={`h-2 rounded-full transition-all duration-500 ease-out
                ${index === currentSlide ? 'w-12 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'}`}
              aria-label={`切换到第 ${index + 1} 张图片`}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 