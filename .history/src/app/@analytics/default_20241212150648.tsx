export default function DefaultAnalyticsPage() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-emerald-600 p-6">
        <h2 className="text-xl font-bold text-white">Analytics Not Found</h2>
      </div>
      <div className="p-6">
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <h3 className="text-emerald-800 font-medium mb-2">
            No Analytics Data Available
          </h3>
          <p className="text-emerald-600 text-sm">
            The requested analytics view could not be found. Please check your
            configuration or try a different analytics view.
          </p>
        </div>
      </div>
    </div>
  );
}
