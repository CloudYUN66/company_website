export default function ServiceOffering() {
  const services = [
    {
      title: '咨询服务',
      description: '提供专业的IT战略规划、数字化转型咨询、业务流程优化等服务',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="url(#icon-gradient)">
          <defs>
            <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8C00" />
              <stop offset="100%" stopColor="#0066CC" />
            </linearGradient>
          </defs>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: '解决方案',
      description: '为各行业客户提供创新的信息化整体解决方案和技术架构设计',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="url(#icon-gradient)">
          <defs>
            <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8C00" />
              <stop offset="100%" stopColor="#0066CC" />
            </linearGradient>
          </defs>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: '开发服务',
      description: '提供软件定制开发、系统集成、应用迁移等专业技术服务',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="url(#icon-gradient)">
          <defs>
            <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8C00" />
              <stop offset="100%" stopColor="#0066CC" />
            </linearGradient>
          </defs>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: '运营服务',
      description: '提供全方位的IT运维支持、系统优化和技术保障服务',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="url(#icon-gradient)">
          <defs>
            <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8C00" />
              <stop offset="100%" stopColor="#0066CC" />
            </linearGradient>
          </defs>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: '产品服务',
      description: '提供自主研发产品、第三方产品集成和持续升级服务',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="url(#icon-gradient)">
          <defs>
            <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8C00" />
              <stop offset="100%" stopColor="#0066CC" />
            </linearGradient>
          </defs>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">我们的服务方案</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto tracking-wide">
            构建五类服务Offering体系，为客户提供信息化全生命周期服务适配
          </p>
        </div>

        {/* 服务卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative p-6 rounded-lg shadow-lg
                border-2 border-white
                bg-gradient-to-b from-[#FFE5CC]/40 via-[#FFF0E1]/30 to-[#FFF8F2]/20
                backdrop-blur-sm transition-all duration-300
                hover:shadow-xl hover:scale-105 hover:border-white/80 group"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">{service.description}</p>
            </div>
          ))}
        </div>

        {/* 全部服务按钮 */}
        <div className="flex justify-center mt-16">
          <button className="px-12 py-2.5 bg-white text-gray-700 text-base font-medium tracking-widest
            border border-gray-100
            transition-all duration-300 hover:shadow-lg hover:scale-105">
            全部服务
          </button>
        </div>
      </div>
    </section>
  )
} 