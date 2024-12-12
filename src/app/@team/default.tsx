export default function DefaultTeam() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 p-6">
        <h2 className="text-xl font-bold text-white">Team</h2>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-center h-32 text-gray-500">
          No team member selected to view details
        </div>
      </div>
    </div>
  );
}
