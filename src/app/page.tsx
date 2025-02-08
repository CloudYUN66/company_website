import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import ServiceOffering from '@/components/ServiceOffering'
import DataStats from '@/components/DataStats'

export default function Home() {
  const cases = [
    {
      industry: '政府机构',
      title: '某省政务服务平台',
      subtitle: '一体化政务服务',
      image: '/images/anli1.jpg',
      link: '/cases/gov-platform'
    },
    {
      industry: '金融行业',
      title: '某大型商业银行',
      subtitle: '分布式核心系统',
      image: '/images/anli2.jpg',
      link: '/cases/bank-system'
    },
    {
      industry: '医疗健康',
      title: '某三甲医院集团',
      subtitle: '智慧医院建设',
      image: '/images/anli3.jpg',
      link: '/cases/smart-hospital'
    },
    {
      industry: '制造业',
      title: '某大型制造企业',
      subtitle: '智能工厂转型',
      image: '/images/anli4.jpg',
      link: '/cases/smart-factory'
    },
    {
      industry: '教育行业',
      title: '某知名高校',
      subtitle: '智慧校园建设',
      image: '/images/anli5.jpg',
      link: '/cases/smart-campus'
    },
    {
      industry: '能源行业',
      title: '某电力集团',
      subtitle: '智慧能源管理',
      image: '/images/anli5.jpg',
      link: '/cases/smart-energy'
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
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-4 text-primary">客户案例</h2>
            <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto tracking-wide">
              坚持以客户需求为中心、以专业服务为根本、以价值创造为导向
            </p>

            {/* 案例网格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <a 
                    href={item.link}
                    className="group relative h-[300px] overflow-hidden rounded-lg cursor-pointer mb-4"
                  >
                    {/* 背景图片 */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    
                    {/* 渐变遮罩 - 默认透明，hover时变为橙色 */}
                    <div className="absolute inset-0 bg-transparent group-hover:bg-primary/60 transition-all duration-300" />
                    
                    {/* 文字内容 - 确保所有文字为白色 */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <div className="text-sm mb-2 text-white">{item.industry}</div>
                      <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-sm text-white">{item.subtitle}</p>
                    </div>
                  </a>
                  {/* 卡片下方标题 */}
                  <h3 className="text-lg font-medium text-gray-800 hover:text-primary transition-colors text-center">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
            
            {/* 全部案例按钮 */}
            <div className="flex justify-center mt-16">
              <a 
                href="/cases" 
                className="px-12 py-2.5 bg-white text-gray-700 text-base font-medium tracking-widest
                  border border-gray-100
                  transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                全部案例
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 