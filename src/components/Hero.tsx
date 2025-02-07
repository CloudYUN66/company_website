export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* 背景图片 */}
      <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* 内容 */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="tech-heading text-5xl md:text-6xl mb-6">
            引领数字化转型
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            为企业提供创新的技术解决方案，助力实现智能化升级
          </p>
          <div className="flex space-x-4">
            <button className="tech-button">了解更多</button>
            <button className="tech-button-accent">联系我们</button>
          </div>
        </div>
      </div>
    </div>
  )
} 