export default function Products() {
  const products = [
    {
      title: "智能云服务",
      description: "提供全方位的云计算解决方案",
      icon: "☁️",
    },
    {
      title: "数据分析",
      description: "深度挖掘数据价值",
      icon: "📊",
    },
    {
      title: "物联网平台",
      description: "连接智能设备，创造无限可能",
      icon: "🌐",
    },
    {
      title: "安全服务",
      description: "保障企业数字资产安全",
      icon: "🔒",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="tech-heading text-center mb-12">产品与服务</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="tech-container hover:shadow-neon-orange transition-all duration-300">
              <div className="text-4xl mb-4">{product.icon}</div>
              <h3 className="text-xl text-primary mb-2">{product.title}</h3>
              <p className="text-gray-400">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 