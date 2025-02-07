export default function Footer() {
  return (
    <footer className="bg-background-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-primary font-bold mb-4">关于我们</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary">公司简介</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">发展历程</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">新闻中心</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-primary font-bold mb-4">产品服务</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary">云服务</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">数据分析</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">安全服务</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-primary font-bold mb-4">支持</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary">技术支持</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">服务政策</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">联系我们</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-primary font-bold mb-4">关注我们</h3>
            <p className="text-gray-400">电话：400-xxx-xxxx</p>
            <p className="text-gray-400">邮箱：contact@company.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 企业名称. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 