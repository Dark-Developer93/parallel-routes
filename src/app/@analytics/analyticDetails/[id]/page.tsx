import Link from "next/link";

async function getAnalyticDetails(id: string, shouldError = false) {
  // Simulate loading delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (shouldError) {
    throw new Error("Failed to load analytic details");
  }

  const metrics = {
    pageviews: {
      title: "Page Views",
      color: "blue",
      data: {
        today: 12345,
        yesterday: 11234,
        lastWeek: 78234,
        lastMonth: 283456,
        trend: [4232, 4432, 4321, 4567, 4789, 4532, 4234],
      },
    },
    activeusers: {
      title: "Active Users",
      color: "purple",
      data: {
        current: 892,
        lastHour: 867,
        peak: 1023,
        average: 756,
        trend: [756, 845, 892, 789, 823, 856, 892],
      },
    },
    conversion: {
      title: "Conversion Rate",
      color: "emerald",
      data: {
        rate: 2.4,
        lastMonth: 2.1,
        target: 3.0,
        trend: [2.1, 2.2, 2.3, 2.4, 2.4, 2.3, 2.4],
      },
    },
  };

  return metrics[id as keyof typeof metrics] || null;
}

type PageProps = {
  params: {
    id: string;
  };
};

export default async function AnalyticDetails({ params }: PageProps) {
  const { id } = params;
  const metric = await getAnalyticDetails(id);

  if (!metric) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-red-100 overflow-hidden">
        <div className="bg-red-600 p-6">
          <h2 className="text-xl font-bold text-white">Metric Not Found</h2>
        </div>
        <div className="p-6">
          <p className="text-red-600">
            The requested analytics metric could not be found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-6">
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
            Back to Overview
          </Link>
          <h2 className="text-xl font-bold text-white">
            {metric.title} Details
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {Object.entries(metric.data).map(([key, value]) => {
              if (key !== "trend") {
                return (
                  <div key={key} className="flex border-b border-gray-100 pb-4">
                    <div className="w-32 text-gray-500">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </div>
                    <div className="text-gray-800">
                      {typeof value === "number"
                        ? key.toLowerCase().includes("rate")
                          ? `${value}%`
                          : value.toLocaleString()
                        : value}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
