'use client'

export default function StatsSection() {
  const stats = [
    {
      number: 10,
      suffix: '+',
      label: '华为生态价值合作伙伴'
    },
    {
      number: 20,
      suffix: '+',
      label: '深耕政企行业'
    },
    {
      number: 100,
      suffix: '+',
      label: '大型集成&服务项目'
    },
    {
      number: 20,
      suffix: '+',
      label: '腾讯数据中心'
    },
    {
      number: 170,
      suffix: '+',
      label: '华为云精英服务伙伴'
    },
    {
      number: 1000,
      suffix: '+',
      label: '专业IT服务人才'
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* 浅蓝色背景 */}
      <div className="absolute inset-0 bg-[#E6F3FF]" />

      {/* 内容 */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center flex-1 min-w-[150px] relative"
            >
              <div className="text-3xl lg:text-4xl font-bold mb-2 flex items-start justify-center">
                <span>{stat.number}</span>
                <span className="text-lg lg:text-xl font-medium translate-y-1">
                  {stat.suffix}
                </span>
              </div>
              <div className="text-xs lg:text-sm font-medium tracking-wider">
                {stat.label}
              </div>
              {/* 添加分割线，最后一个元素不添加 */}
              {index !== stats.length - 1 && (
                <div className="hidden lg:block absolute right-[-1rem] top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 