export default function MemberDetailsLoading() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
      <div className="bg-gray-600/50 p-6">
        <div className="h-6 w-48 bg-gray-400/50 rounded"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
          <div>
            <div className="h-5 w-40 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
          </div>
        </div>

        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex border-b border-gray-100 pb-4">
              <div className="w-32 h-4 bg-gray-200 rounded"></div>
              <div className="flex-1 h-4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
