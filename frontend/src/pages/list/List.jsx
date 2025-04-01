import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import { addDays, format } from "date-fns";
import { DateRange } from "react-date-range";
import { FaCalendar } from "react-icons/fa6";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import SearchItem from "../../components/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] =
    useState(location?.state?.destination) || "";
  const [options, setOptions] = useState(
    location?.state?.options || {
      adult: 1,
      children: 0,
      room: 1,
    }
  );
  const [date, setDate] = useState(
    location?.state?.dateRange || [
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 3),
        key: "selection",
      },
    ]
  );
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleOptionChange = (key, value) => {
    setOptions((prev) => ({
      ...prev,
      [key]: Math.max(value, key === "adult" || key === "room" ? 1 : 0),
    }));
  };

  return (
    <div className="pt-[10vh] bg-gray-100 min-h-screen">
      <Navbar />
      <Header type="list" />
      <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto py-6">
        <div className="flex flex-col lg:flex-row gap-2">
          {/* Search Box */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/4 h-fit xs:sticky xs:top-20 sm:static">
            <h1 className="text-2xl font-semibold text-gray-700 mb-4">
              Search
            </h1>
            <div className="flex flex-col gap-5">
              {/* Destination */}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Destination
                </label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              {/* Check-in Date */}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Check-in Date
                </label>
                <div className="relative w-full">
                  <div
                    className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 transition"
                    onClick={() => setShowDatePicker(!showDatePicker)}
                  >
                    <FaCalendar className="text-gray-600 size-5" />
                    <span className="text-gray-700 text-xs md:text-sm">
                      {`${format(date[0].startDate, "MMM dd")} - ${format(
                        date[0].endDate,
                        "MMM dd"
                      )}`}
                    </span>
                  </div>
                  {showDatePicker && (
                    <div className="absolute top-full left-0 z-50 mt-2 shadow-lg bg-white border p-2 rounded-lg">
                      <DateRange
                        editableDateInputs={true}
                        onChange={(ranges) => setDate([ranges.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        minDate={new Date()}
                        rangeColors={["#8b5cf6"]} // Purple selection color
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Price Range */}
              <div className="flex flex-col gap-4">
                <label className="text-sm font-medium text-gray-600">
                  Price Range
                </label>
                <input
                  type="number"
                  min="0"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="Min Price"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="number"
                  min="0"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="Max Price"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              {/* People Selection */}
              <div className="flex flex-col gap-4">
                {[
                  { label: "Adults", key: "adult", min: 1 },
                  { label: "Children", key: "children", min: 0 },
                  { label: "Rooms", key: "room", min: 1 },
                ].map(({ label, key, min }) => (
                  <div key={key} className="flex flex-col gap-2">
                    <label className="text-gray-700 font-medium text-sm">
                      {label}
                    </label>
                    <input
                      type="number"
                      min={min}
                      value={options[key]}
                      onChange={(e) =>
                        handleOptionChange(
                          key,
                          parseInt(e.target.value, 10) || min
                        )
                      }
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Search Button */}
            <button className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition mt-5 cursor-pointer">
              Search
            </button>
          </div>

          {/* List Results */}
          <div className="w-full bg-white shadow-lg rounded-lg flex-1 overflow-y-auto">
            <h2 className="py-2 text-center text-xl font-semibold text-gray-700 mb-4">
              List Results
            </h2>
            {/* Add dynamic content here */}
            <div className="flex flex-col gap-5 my-6">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
