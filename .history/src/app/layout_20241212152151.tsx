import type { Metadata } from "next";
import "./globals.css";
// import DefaultPage from "./default";
// import DefaultAnalyticsPage from "./@analytics/default";

export const metadata: Metadata = {
  title: "Parallel Routes Demo",
  description: "Demonstration of Next.js 14 Parallel Routes",
};

export default function RootLayout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  // const role = "admin";
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Parallel Routes Demo
            </h1>
            <p className="text-gray-600">
              Experience the power of Next.js 14 parallel routing
            </p>
          </header>

          <div className="flex flex-col gap-6">
            <div className="flex-1">{children}</div>
            <div className="flex-1">
              <div className="grid grid-cols-12 gap-6">
                {/* <div className="col-span-12 md:col-span-6 lg:col-span-3">
                  {team}
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                  {analytics}
                </div> */}
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                  {role === "admin" ? team : <DefaultPage />}
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                  {role === "admin" ? <DefaultAnalyticsPage /> : analytics}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
