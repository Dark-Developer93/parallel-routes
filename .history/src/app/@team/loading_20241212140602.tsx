export default function TeamLoading() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
      <div className="bg-emerald-600/50 p-6">
        <div className="h-6 w-48 bg-emerald-400/50 rounded"></div>
      </div>
      <div className="p-4 space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-gray-100 p-4 rounded-lg border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
              <div className="h-3 w-16 bg-gray-200 rounded"></div>
            </div>
            <div className="h-8 w-32 bg-gray-300 rounded mt-2"></div>
            <div className="h-4 w-36 bg-gray-200 rounded mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
