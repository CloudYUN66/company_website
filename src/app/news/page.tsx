'use client'
import { useState } from 'react'
import NewsCard from '@/components/NewsCard'
import NewsSearch from '@/components/NewsSearch'

export default function NewsPage() {
  // 新闻数据
  const newsData = [
    {
      id: 1,
      title: '公司成功中标某省重大数字化转型项目',
      content: '近日，我公司成功中标某省重大数字化转型项目，将为该省提供全方位的数字化解决方案...',
      date: '2024-02-20',
      author: '张三',
      category: '公司新闻',
      image: '/images/news1.jpg'
    },
    {
      id: 2,
      title: '公司与某大型企业集团达成战略合作',
      content: '我公司与某大型企业集团正式签署战略合作协议，双方将在数字化转型领域展开深入合作...',
      date: '2024-02-18',
      author: '李四',
      category: '合作动态',
      image: '/images/news2.jpg'
    },
    // ... 更多新闻数据
  ]

  // 搜索状态
  const [searchParams, setSearchParams] = useState({
    dateRange: '',
    keyword: '',
    author: ''
  })

  // 过滤新闻
  const filteredNews = newsData.filter(news => {
    const matchDate = !searchParams.dateRange || news.date.includes(searchParams.dateRange)
    const matchKeyword = !searchParams.keyword || 
      news.title.toLowerCase().includes(searchParams.keyword.toLowerCase()) ||
      news.content.toLowerCase().includes(searchParams.keyword.toLowerCase())
    const matchAuthor = !searchParams.author || news.author.includes(searchParams.author)
    
    return matchDate && matchKeyword && matchAuthor
  })

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">新闻中心</h1>
          <p className="text-xl text-gray-500">了解公司最新动态与行业资讯</p>
        </div>

        {/* 搜索部分 */}
        <NewsSearch 
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />

        {/* 新闻列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredNews.map(news => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </div>
  )
} 