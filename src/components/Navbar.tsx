import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">企业名称</span>
          </Link>

          {/* 导航链接 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-300 hover:text-primary transition-colors">
              产品与服务
            </Link>
            <Link href="/solutions" className="text-gray-300 hover:text-primary transition-colors">
              解决方案
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">
              关于我们
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
              联系我们
            </Link>
          </div>

          {/* 搜索和语言切换 */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="tech-button-accent">登录</button>
          </div>
        </div>
      </div>
    </nav>
  )
} 