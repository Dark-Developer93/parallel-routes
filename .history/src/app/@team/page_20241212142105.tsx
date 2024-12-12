import Link from "next/link";

// Simulating a delay and potential error for demonstration
async function getTeamData(shouldError = false) {
  // Simulate loading delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (shouldError) {
    throw new Error("Failed to load team data");
  }

  return {
    members: [
      {
        id: 1,
        initials: "JD",
        name: "John Doe",
        role: "Lead Developer",
        status: "online",
        gradientFrom: "blue-500",
        gradientTo: "blue-600",
        projects: 12,
        tasks: 5,
      },
      {
        id: 2,
        initials: "JS",
        name: "Jane Smith",
        role: "UX Designer",
        status: "offline",
        gradientFrom: "purple-500",
        gradientTo: "purple-600",
        projects: 8,
        tasks: 3,
      },
      {
        id: 3,
        initials: "MJ",
        name: "Mike Johnson",
        role: "Product Manager",
        status: "online",
        gradientFrom: "pink-500",
        gradientTo: "pink-600",
        projects: 15,
        tasks: 7,
      },
    ],
  };
}

export default async function TeamPage() {
  // Change this to true to trigger an error
  const data = await getTeamData(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">Team Members</h2>
            <p className="text-indigo-200 text-sm">
              Manage your team and their workload
            </p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="text-sm text-gray-500">
            {data.members.filter((m) => m.status === "online").length} members
            online
          </div>
          <div className="flex -space-x-2">
            {data.members.map((member) => (
              <div
                key={`avatar-${member.id}`}
                className={`w-8 h-8 bg-gradient-to-br from-${member.gradientFrom} to-${member.gradientTo} rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium`}
              >
                {member.initials}
              </div>
            ))}
          </div>
        </div>

        <ul className="space-y-3">
          {data.members.map((member) => (
            <Link href={`/members/${member.id}`} key={member.id}>
              <li className="group relative bg-white rounded-xl border border-gray-100 p-4 hover:border-indigo-100 hover:shadow-md transition-all duration-150">
                <div className="absolute right-4 top-4 flex items-center space-x-2">
                  <div className="bg-gray-50 group-hover:bg-indigo-50 px-2 py-1 rounded text-xs font-medium text-gray-500 group-hover:text-indigo-600 transition-colors">
                    {member.projects} Projects
                  </div>
                  <div className="bg-gray-50 group-hover:bg-indigo-50 px-2 py-1 rounded text-xs font-medium text-gray-500 group-hover:text-indigo-600 transition-colors">
                    {member.tasks} Tasks
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br from-${member.gradientFrom} to-${member.gradientTo} rounded-xl flex items-center justify-center text-white font-semibold text-lg shadow-sm group-hover:shadow-md transition-shadow`}
                    >
                      {member.initials}
                    </div>
                    <div
                      className={`absolute -bottom-1 -right-1 w-4 h-4 ${
                        member.status === "online"
                          ? "bg-green-400"
                          : "bg-gray-400"
                      } border-2 border-white rounded-full`}
                    ></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                      {member.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <p className="text-sm text-gray-500">{member.role}</p>
                      <span className="block w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span
                        className={`text-sm ${
                          member.status === "online"
                            ? "text-green-500"
                            : "text-gray-400"
                        }`}
                      >
                        {member.status === "online" ? "Available" : "Away"}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
