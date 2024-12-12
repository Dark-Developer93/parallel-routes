export default function Home() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-blue-600 p-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            Welcome to Parallel Routes
          </h2>
          <p className="text-blue-100">
            Discover the power of simultaneous page loading
          </p>
        </div>
        <div className="p-6">
          <p className="text-gray-600 leading-relaxed">
            This demo showcases Next.js 14&apos;s parallel routes feature,
            allowing multiple pages to load simultaneously in the same layout.
            Notice how the team and analytics sections load independently,
            creating a smooth and efficient user experience.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Independent Loading
              </h3>
              <p className="text-sm text-gray-600">
                Each section loads separately, improving performance
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Isolated Error Handling
              </h3>
              <p className="text-sm text-gray-600">
                Errors in one route don&apos;t affect others
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
