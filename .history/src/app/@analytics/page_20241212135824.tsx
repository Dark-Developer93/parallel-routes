export default function AnalyticsPage() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-emerald-600 p-6">
        <h2 className="text-xl font-bold text-white">Analytics Overview</h2>
      </div>
      <div className="p-4 space-y-4">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-blue-800">Page Views</div>
            <div className="text-xs text-blue-600">Last 24h</div>
          </div>
          <div className="text-2xl font-bold text-blue-900">12,345</div>
          <div className="text-sm text-blue-600 mt-1">↑ 12% from yesterday</div>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-purple-800">
              Active Users
            </div>
            <div className="text-xs text-purple-600">Real-time</div>
          </div>
          <div className="text-2xl font-bold text-purple-900">892</div>
          <div className="text-sm text-purple-600 mt-1">
            ↑ 3% from last hour
          </div>
        </div>
        <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-4 rounded-lg border border-emerald-200">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-emerald-800">
              Conversion Rate
            </div>
            <div className="text-xs text-emerald-600">This Month</div>
          </div>
          <div className="text-2xl font-bold text-emerald-900">2.4%</div>
          <div className="text-sm text-emerald-600 mt-1">
            ↑ 0.3% from last month
          </div>
        </div>
      </div>
    </div>
  );
}
