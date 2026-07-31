import React from 'react'

const loading = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>

        <h1 className="text-2xl font-semibold text-gray-800">
          Loading data...
        </h1>

        <p className="text-sm text-gray-500">
          Please wait while we fetch the latest information.
        </p>
      </div>
    </main>
  );
};

export default loading