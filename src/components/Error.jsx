import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-500">Oops!</h1>
        <p className="mt-4 text-lg text-gray-700">Something went wrong.</p>
        {error && (
          <p className="mt-2 text-gray-600">
            <strong>Error:</strong> {error.status} - {error.statusText}
          </p>
        )}
        <p className="mt-2 text-gray-500">
          Please check the URL or return to the homepage.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default Error;
