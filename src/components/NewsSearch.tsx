interface SearchProps {
  searchParams: {
    dateRange: string;
    keyword: string;
    author: string;
  };
  setSearchParams: (params: any) => void;
}

export default function NewsSearch({ searchParams, setSearchParams }: SearchProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 日期搜索 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            发布日期
          </label>
          <input
            type="month"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            value={searchParams.dateRange}
            onChange={(e) => setSearchParams({
              ...searchParams,
              dateRange: e.target.value
            })}
          />
        </div>

        {/* 关键词搜索 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            关键词
          </label>
          <input
            type="text"
            placeholder="搜索标题或内容"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            value={searchParams.keyword}
            onChange={(e) => setSearchParams({
              ...searchParams,
              keyword: e.target.value
            })}
          />
        </div>

        {/* 作者搜索 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            发布人
          </label>
          <input
            type="text"
            placeholder="输入发布人姓名"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            value={searchParams.author}
            onChange={(e) => setSearchParams({
              ...searchParams,
              author: e.target.value
            })}
          />
        </div>
      </div>
    </div>
  )
} 