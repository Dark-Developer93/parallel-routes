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
      },
      {
        id: 2,
        initials: "JS",
        name: "Jane Smith",
        role: "UX Designer",
        status: "offline",
        gradientFrom: "purple-500",
        gradientTo: "purple-600",
      },
      {
        id: 3,
        initials: "MJ",
        name: "Mike Johnson",
        role: "Product Manager",
        status: "online",
        gradientFrom: "pink-500",
        gradientTo: "pink-600",
      },
    ],
  };
}

export default async function TeamPage() {
  // Change this to true to trigger an error
  const data = await getTeamData(true);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-indigo-600 p-6">
        <h2 className="text-xl font-bold text-white">Team Members</h2>
      </div>
      <div className="p-4">
        <ul className="space-y-4">
          {data.members.map((member) => (
            <Link href={`/members/${member.id}`} key={member.id}>
              <li className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition duration-150 cursor-pointer">
                <div className="relative">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br from-${member.gradientFrom} to-${member.gradientTo} rounded-full flex items-center justify-center text-white font-semibold text-lg`}
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
                  <h3 className="font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
