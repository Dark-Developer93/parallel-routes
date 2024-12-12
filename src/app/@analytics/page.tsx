/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";

// Simulating a delay and potential error for demonstration
async function getData(shouldError = false) {
  // Simulate loading delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (shouldError) {
    throw new Error("Failed to load analytics data");
  }

  const metrics = {
    pageviews: {
      id: "pageviews",
      title: "Page Views",
      color: "blue",
      icon: "👁️",
      period: "Last 24h",
      currentValue: 12345,
      increase: 12,
      description: "from yesterday",
      isPercentage: false,
    },
    activeusers: {
      id: "activeusers",
      title: "Active Users",
      color: "purple",
      icon: "👥",
      period: "Real-time",
      currentValue: 892,
      increase: 3,
      description: "from last hour",
      isPercentage: false,
    },
    conversion: {
      id: "conversion",
      title: "Conversion Rate",
      color: "emerald",
      icon: "📈",
      period: "This Month",
      currentValue: 2.4,
      increase: 0.3,
      description: "from last month",
      isPercentage: true,
    },
  };

  return metrics;
}

export default async function AnalyticsPage() {
  // Change this to true to trigger an error
  const metrics = await getData(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-6">
        <h2 className="text-xl font-bold text-white">Analytics Overview</h2>
      </div>
      <div className="p-4 space-y-4">
        {Object.entries(metrics).map(([_, metric]) => (
          <Link
            href={`/analyticDetails/${metric.id}`}
            key={metric.id}
            className="block"
          >
            <div
              className={`bg-gradient-to-r from-${metric.color}-50 to-${metric.color}-100 p-4 rounded-lg border border-${metric.color}-200 hover:border-${metric.color}-300 hover:shadow-md transition-all duration-150`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span>{metric.icon}</span>
                  <div
                    className={`text-sm font-medium text-${metric.color}-800`}
                  >
                    {metric.title}
                  </div>
                </div>
                <div className={`text-xs text-${metric.color}-600`}>
                  {metric.period}
                </div>
              </div>
              <div className={`text-2xl font-bold text-${metric.color}-900`}>
                {metric.isPercentage
                  ? `${metric.currentValue}%`
                  : metric.currentValue.toLocaleString()}
              </div>
              <div className={`text-sm text-${metric.color}-600 mt-1`}>
                ↑ {metric.increase}
                {metric.isPercentage ? "" : "%"} {metric.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
