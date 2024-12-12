"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function TeamError({ error, reset }: ErrorProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-red-100 overflow-hidden">
      <div className="bg-red-600 p-6">
        <h2 className="text-xl font-bold text-white">Team Error</h2>
      </div>
      <div className="p-6 space-y-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="text-red-800 font-medium mb-2">
            Something went wrong!
          </h3>
          <p className="text-red-600 text-sm mb-4">{error.message}</p>
          <button
            onClick={reset}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
