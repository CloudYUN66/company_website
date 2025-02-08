import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import ServiceOffering from '@/components/ServiceOffering'
import DataStats from '@/components/DataStats'

export default function Home() {
  const cases = [
    {
      industry: '政府机构',
      title: '某省政务服务平台',
      description: '打造全省一体化政务服务平台，实现"一网通办"'
    },
    {
      industry: '金融行业',
      title: '某大型商业银行',
      description: '构建新一代分布式核心业务系统，提升金融服务能力'
    },
    {
      industry: '医疗健康',
      title: '某三甲医院集团',
      description: '实现医疗服务智慧化升级，打造智慧医院标杆'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Banner />
        <DataStats />
        <ServiceOffering />

        {/* 客户案例部分 */}
        <div className="bg-background-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="tech-heading text-center mb-12">客户案例</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cases.map((item, index) => (
                <div key={index} className="tech-container hover:shadow-neon-blue">
                  <div className="text-sm text-accent mb-2">{item.industry}</div>
                  <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{item.description}</p>
                  <button className="tech-button-accent">查看详情</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 数据统计部分 */}
        <div className="bg-tech-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '15+', label: '年行业经验' },
                { number: '1000+', label: '企业客户' },
                { number: '50+', label: '技术专利' },
                { number: '24/7', label: '技术支持' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 