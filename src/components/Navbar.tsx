import Link from 'next/link'
import Logo from './Logo'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/60 backdrop-blur-sm z-50 border-b border-accent/10">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 pl-0">
            <Logo />
          </div>

          {/* 导航链接 */}
          <div className="hidden md:flex items-center justify-end flex-1 pr-4">
            <div className="flex items-center space-x-20">
              <Link href="/news" className="text-text hover:text-primary transition-colors">
                最新动态
              </Link>
              <Link href="/solutions" className="text-text hover:text-primary transition-colors">
                解决方案
              </Link>
              <Link href="/cases" className="text-text hover:text-primary transition-colors">
                客户案例
              </Link>
              <Link href="/cloud" className="text-text hover:text-primary transition-colors">
                公有云
              </Link>
              <Link href="/about" className="text-text hover:text-primary transition-colors">
                关于我们
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 