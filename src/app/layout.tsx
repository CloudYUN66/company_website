import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "../styles/globals.css";  // 更新导入路径
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "企业网站",
  description: "企业官方网站",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  )
} 