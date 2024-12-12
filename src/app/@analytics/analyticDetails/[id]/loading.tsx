export default function AnalyticDetailsLoading() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-emerald-600 p-6">
        <div className="h-7 bg-emerald-500/50 rounded-lg w-48 animate-pulse" />
      </div>
      <div className="p-4 space-y-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-100 p-4 rounded-lg border border-gray-200 animate-pulse"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="h-4 bg-gray-200 rounded w-24" />
              <div className="h-3 bg-gray-200 rounded w-16" />
            </div>
            <div className="h-8 bg-gray-200 rounded w-32 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-40" />
          </div>
        ))}
      </div>
    </div>
  );
}
