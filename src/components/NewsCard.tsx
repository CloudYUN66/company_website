interface NewsProps {
  news: {
    id: number;
    title: string;
    content: string;
    date: string;
    author: string;
    category: string;
    image: string;
  };
}

export default function NewsCard({ news }: NewsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* 新闻图片 */}
      <div className="relative h-48">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${news.image})` }}
        />
      </div>

      {/* 新闻内容 */}
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>{news.date}</span>
          <span>{news.category}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {news.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {news.content}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            发布人：{news.author}
          </span>
          <button className="text-primary hover:text-primary-dark transition-colors">
            查看详情
          </button>
        </div>
      </div>
    </div>
  )
} 