import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "../styles/globals.css";  // 更新导入路径
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "企业名称 - 数字化转型专家",
  description: "为企业提供创新的技术解决方案",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-tech-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
} 