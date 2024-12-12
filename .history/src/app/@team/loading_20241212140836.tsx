export default function TeamLoading() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
      <div className="bg-indigo-600/50 p-6">
        <div className="h-6 w-48 bg-indigo-400/50 rounded"></div>
      </div>
      <div className="p-4">
        <ul className="space-y-4">
          {[1, 2, 3].map((i) => (
            <li key={i} className="flex items-center space-x-4 p-3 rounded-lg">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                  <div className="w-6 h-3 bg-gray-300 rounded"></div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-300 border-2 border-white rounded-full"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
                <div className="h-3 w-24 bg-gray-200 rounded"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
