'use client'
import { useEffect, useState } from 'react'
import SwiperCore, { Autoplay, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/effect-fade/effect-fade.min.css'

// Install Swiper modules
SwiperCore.use([Autoplay, EffectFade])

export default function Banner() {
  const banners = [
    {
      title: '数字化转型的引领者',
      subtitle: '为企业提供全方位的数字化解决方案',
      image: '/images/banner1.jpg'
    },
    {
      title: '技术创新的践行者',
      subtitle: '持续创新，驱动企业数字化升级',
      image: '/images/banner2.jpg'
    },
    {
      title: '行业发展的推动者',
      subtitle: '深耕行业，助力企业高质量发展',
      image: '/images/banner3.jpg'
    }
  ]

  return (
    <Swiper
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      loop={true}
      className="w-full h-[600px]"
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            {/* 背景图片 */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${banner.image})` }}
            />
            
            {/* 渐变遮罩 */}
            <div className="absolute inset-0 bg-black/50" />
            
            {/* 文字内容 */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
              <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">
                {banner.title}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl animate-fade-in-delay">
                {banner.subtitle}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
} 