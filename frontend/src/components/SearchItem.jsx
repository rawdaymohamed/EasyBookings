import React from "react";

const SearchItem = () => {
  return (
    <div className="flex flex-col xl:flex-row items-start shadow-lg p-3 rounded-xl bg-white hover:shadow-xl transition-all w-full  gap-6">
      {/* Image Section */}
      <div className="w-full xl:w-1/3 flex-shrink-0">
        <img
          src="/apartment.jpg"
          alt="Apartment"
          className="w-full h-[200px] md:h-[250px] object-cover rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col md:flex-row justify-between gap-4 w-full">
        {/* Description Section */}
        <div className="flex flex-col gap-2 text-gray-700">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
            Tower Street Apartments
          </h1>
          <span className="text-sm text-gray-500">500m from center</span>
          <span className="text-sm text-green-600 font-medium">
            Free airport taxi
          </span>
          <p className="text-sm">Studio Apartment with Air conditioning</p>
          <p className="text-sm">
            Entire studio • 1 bathroom • 21m² • 1 full bed
          </p>
          <span className="text-sm text-green-600 font-semibold">
            Free cancellation
          </span>
          <span className="text-xs text-gray-500">
            You can cancel later, so lock in this great price today!
          </span>
        </div>

        {/* Details Section */}
        <div className="flex flex-col items-end md:items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600">Excellent</span>
            <button className="bg-purple-600 text-white font-bold px-3 py-1 rounded-md shadow-md hover:bg-purple-700 transition">
              8.9
            </button>
          </div>
          <div className="text-right md:flex md:flex-col gap-2">
            <span className="block text-lg font-semibold text-gray-800">
              $112
            </span>
            <span className="text-xs text-gray-500">
              Includes taxes and fees
            </span>
            <button className="cursor-pointer mt-2 w-full md:w-auto bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition">
              Check
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
