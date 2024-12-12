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
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div
        className={`bg-gradient-to-r from-${member.gradientFrom} to-${member.gradientTo} p-6`}
      >
        <h2 className="text-xl font-bold text-white">Member Details</h2>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div
            className={`w-16 h-16 bg-gradient-to-br from-${member.gradientFrom} to-${member.gradientTo} rounded-full flex items-center justify-center text-white font-semibold text-2xl mr-4`}
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
              <span className="text-gray-800 capitalize">{member.status}</span>
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
  );
}
