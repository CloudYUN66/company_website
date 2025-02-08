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
    <section className="relative py-20 overflow-hidden [&_*]:!text-white">
      {/* 背景图案 */}
      <div className="absolute inset-0 bg-primary/90">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* 内容 */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center flex-1 min-w-[150px]"
            >
              <div className="text-3xl lg:text-4xl font-bold mb-2 flex items-start justify-center">
                <span style={{ color: '#FFFFFF' }}>{stat.number}</span>
                <span className="text-lg lg:text-xl font-medium translate-y-1">
                  {stat.suffix}
                </span>
              </div>
              <div className="text-xs lg:text-sm font-medium tracking-wider opacity-80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 