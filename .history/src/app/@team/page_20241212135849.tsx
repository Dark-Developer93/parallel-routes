export default function TeamPage() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-indigo-600 p-6">
        <h2 className="text-xl font-bold text-white">Team Members</h2>
      </div>
      <div className="p-4">
        <ul className="space-y-4">
          <li className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition duration-150">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                JD
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">John Doe</h3>
              <p className="text-sm text-gray-500">Lead Developer</p>
            </div>
          </li>
          <li className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition duration-150">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                JS
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-400 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-sm text-gray-500">UX Designer</p>
            </div>
          </li>
          <li className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition duration-150">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                MJ
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Mike Johnson</h3>
              <p className="text-sm text-gray-500">Product Manager</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
