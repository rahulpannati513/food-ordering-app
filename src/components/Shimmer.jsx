import React from "react";

const Shimmer = () => {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[5%]">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="max-w-sm rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
        >
          <div className="res_image">
            <div className="h-48 bg-gray-200 animate-pulse rounded-lg" />
          </div>
          <div className="res_details p-4 bg-white">
            <div className="h-6 bg-gray-200 animate-pulse mb-2 rounded w-3/4" />
            <div className="h-4 bg-gray-200 animate-pulse mb-2 rounded w-1/2" />
            <div className="h-4 bg-gray-200 animate-pulse mb-2 rounded w-1/2" />
            <div className="h-4 bg-gray-200 animate-pulse rounded w-1/3" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
