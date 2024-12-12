export default function DefaultPage() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gray-600 p-6">
        <h2 className="text-xl font-bold text-white">Page Not Found</h2>
      </div>
      <div className="p-6">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h3 className="text-gray-800 font-medium mb-2">
            The requested page could not be found
          </h3>
          <p className="text-gray-600 text-sm">
            Please check the URL and try again, or navigate to an existing page.
          </p>
        </div>
      </div>
    </div>
  );
}
