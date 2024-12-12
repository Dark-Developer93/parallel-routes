"use client";

import { useEffect } from "react";

export default function AnalyticDetailsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-red-100 overflow-hidden">
      <div className="bg-red-600 p-6">
        <h2 className="text-xl font-bold text-white">Something went wrong!</h2>
      </div>
      <div className="p-6">
        <p className="text-red-600 mb-4">
          {error.message || "Failed to load analytics data"}
        </p>
        <button
          onClick={reset}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
