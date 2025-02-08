import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Products from '@/components/Products'
import Banner from '@/components/Banner'
import ServiceOffering from '@/components/ServiceOffering'
import StatsSection from '@/components/StatsSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Banner />
        <ServiceOffering />
        <StatsSection />
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>

        {/* Products Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Products />
        </div>

        {/* 解决方案部分 */}
        <div className="bg-background-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="tech-heading text-center mb-12">行业解决方案</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['制造业', '金融行业', '医疗健康'].map((industry, index) => (
                <div key={index} className="tech-container hover:shadow-neon-blue">
                  <h3 className="text-xl text-accent mb-4">{industry}</h3>
                  <p className="text-gray-400 mb-4">为{industry}提供专业的数字化转型解决方案</p>
                  <button className="tech-button-accent">了解更多</button>
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