export default function DataStats() {
  const stats = [
    {
      number: '10',
      suffix: '年',
      label: '华为生态价值合作伙伴'
    },
    {
      number: '20',
      suffix: '年',
      label: '深耕政企行业'
    },
    {
      number: '100',
      suffix: '+',
      label: '大型集成&服务项目'
    },
    {
      number: '20',
      suffix: '+',
      label: '腾讯数据中心'
    },
    {
      number: '170',
      suffix: '+',
      label: '华为云精英服务伙伴'
    },
    {
      number: '1000',
      suffix: '+',
      label: '专业IT服务人才'
    }
  ]

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8 px-8 py-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center flex-1 min-w-[150px] relative"
            >
              <div className="text-2xl lg:text-3xl font-bold mb-2 text-primary inline-flex items-start">
                <span>{stat.number}</span>
                <span className="text-sm font-normal -translate-y-1 translate-x-0.5">
                  {stat.suffix}
                </span>
              </div>
              <div className="text-xs lg:text-sm text-gray-600">
                {stat.label}
              </div>
              {index !== stats.length - 1 && (
                <div className="hidden lg:block absolute right-[-1rem] top-1/2 -translate-y-1/2 w-[1px] h-10 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 