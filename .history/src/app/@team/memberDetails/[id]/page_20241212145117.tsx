import Link from "next/link";

async function getMemberDetails(id: string, shouldError = false) {
  // Simulate loading delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (shouldError) {
    throw new Error("Failed to load member details");
  }

  const members = {
    "1": {
      id: 1,
      initials: "JD",
      name: "John Doe",
      role: "Lead Developer",
      status: "online",
      email: "john.doe@company.com",
      location: "San Francisco, CA",
      department: "Engineering",
      joinDate: "March 2021",
      gradientFrom: "blue-500",
      gradientTo: "blue-600",
    },
    "2": {
      id: 2,
      initials: "JS",
      name: "Jane Smith",
      role: "UX Designer",
      status: "offline",
      email: "jane.smith@company.com",
      location: "New York, NY",
      department: "Design",
      joinDate: "June 2022",
      gradientFrom: "purple-500",
      gradientTo: "purple-600",
    },
    "3": {
      id: 3,
      initials: "MJ",
      name: "Mike Johnson",
      role: "Product Manager",
      status: "online",
      email: "mike.johnson@company.com",
      location: "Austin, TX",
      department: "Product",
      joinDate: "January 2023",
      gradientFrom: "pink-500",
      gradientTo: "pink-600",
    },
  };

  return members[id as keyof typeof members] || null;
}

export default async function MemberDetails({
  params,
}: {
  params: { id: string };
}) {
  const member = await getMemberDetails(params.id);

  const gradientClasses: Record<string, string> = {
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    pink: "from-pink-500 to-pink-600",
  };

  if (!member) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-red-100 overflow-hidden">
        <div className="bg-red-600 p-6">
          <h2 className="text-xl font-bold text-white">Member Not Found</h2>
        </div>
        <div className="p-6">
          <p className="text-red-600">
            The requested team member could not be found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div
          className={`bg-gradient-to-r ${
            gradientClasses[member.gradientFrom.split("-")[0]]
          } p-6`}
        >
          <Link
            href="/"
            className="inline-flex items-center mb-4 px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Team
          </Link>
          <h2 className="text-xl font-bold text-white">Member Details</h2>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div
              className={`w-16 h-16 bg-gradient-to-br ${
                gradientClasses[member.gradientFrom.split("-")[0]]
              } rounded-full flex items-center justify-center text-white font-semibold text-2xl mr-4`}
            >
              {member.initials}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex border-b border-gray-100 pb-4">
              <div className="w-32 text-gray-500">Status</div>
              <div className="flex items-center">
                <div
                  className={`w-2 h-2 ${
                    member.status === "online" ? "bg-green-400" : "bg-gray-400"
                  } rounded-full mr-2`}
                ></div>
                <span className="text-gray-800 capitalize">
                  {member.status}
                </span>
              </div>
            </div>
            <div className="flex border-b border-gray-100 pb-4">
              <div className="w-32 text-gray-500">Email</div>
              <div className="text-gray-800">{member.email}</div>
            </div>
            <div className="flex border-b border-gray-100 pb-4">
              <div className="w-32 text-gray-500">Location</div>
              <div className="text-gray-800">{member.location}</div>
            </div>
            <div className="flex border-b border-gray-100 pb-4">
              <div className="w-32 text-gray-500">Department</div>
              <div className="text-gray-800">{member.department}</div>
            </div>
            <div className="flex">
              <div className="w-32 text-gray-500">Joined</div>
              <div className="text-gray-800">{member.joinDate}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
