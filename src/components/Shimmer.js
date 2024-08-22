import React from 'react';

const ShimmerCard = () => {
  return (
    <div className="w-64 shadow-md rounded-md m-2 p-2 animate-pulse md:p-3">
      <div className="h-40 bg-gray-300 rounded-md"></div>
      <ul>
        <li className="py-1 mt-2 bg-gray-300 h-6 rounded"></li>
        <li className="py-1 mt-1 bg-gray-300 h-4 rounded"></li>
        <li className="py-1 mt-1 bg-gray-300 h-4 rounded w-1/2"></li>
      </ul>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center mt-2 lg:ml-12">
      {Array(12)
        .fill('')
        .map((_, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  );
};

export default Shimmer;
