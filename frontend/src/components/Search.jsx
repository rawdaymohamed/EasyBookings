import React, { useState, useRef, useEffect } from "react";
import { FaBed, FaCalendar, FaPerson } from "react-icons/fa6";
import { DateRange } from "react-date-range";
import { addDays, format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: "selection",
    },
  ]);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState({ adult: 1, children: 0, room: 1 });
  const [destination, setDestination] = useState("");
  const optionsRef = useRef(null);

  const handleSearch = () => {
    navigate("/hotels", { state: { dateRange, destination, options } });
  };
  // Close the options menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Function to update options
  const handleOptionChange = (field, amount) => {
    setOptions((prev) => ({
      ...prev,
      [field]: Math.max(0, prev[field] + amount),
    }));
  };

  return (
    <div className="relative w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%]  mx-auto bg-white py-3 md:py-4 px-4 md:px-6 lg:border-2 border-[#ffd60a] flex flex-wrap items-center  text-gray-600 rounded-lg shadow-md gap-4">
      {/* Destination Input */}
      <div className="flex items-center gap-2 md:gap-3 bg-gray-100 px-4 py-2 rounded-lg w-full md:min-w-[200px] md:flex-1">
        <FaBed className="text-gray-600 size-6" />
        <input
          type="text"
          placeholder="Where are you going...?"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400 text-sm md:text-base"
        />
      </div>

      {/* Date Selection */}
      <div className="relative w-full md:min-w-[200px] md:flex-1">
        <div
          className="flex items-center gap-2 md:gap-3 bg-gray-100 px-4 py-2 rounded-lg cursor-pointer"
          onClick={() => setShowDatePicker(!showDatePicker)}
        >
          <FaCalendar className="text-gray-600 size-5" />
          <span className="text-gray-700 text-xs md:text-sm whitespace-nowrap">
            {`${format(dateRange[0].startDate, "MMM dd")} - ${format(
              dateRange[0].endDate,
              "MMM dd"
            )}`}
          </span>
        </div>

        {showDatePicker && (
          <div className="absolute top-full left-0 z-50 mt-2 shadow-lg bg-white border p-2 rounded-lg">
            <DateRange
              editableDateInputs={true}
              onChange={(ranges) => setDateRange([ranges.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dateRange}
              rangeColors={["#8b5cf6"]} // Purple selection color
              minDate={new Date()}
            />
          </div>
        )}
      </div>

      {/* People Selection */}
      <div
        className="relative w-full md:min-w-[200px] md:flex-2"
        ref={optionsRef}
      >
        <div
          className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-200 transition"
          onClick={() => setShowOptions(!showOptions)}
        >
          <div className="flex items-center gap-3">
            <FaPerson className="text-gray-600 size-6" />
            <span className="text-gray-700 text-xs md:text-sm">
              {`${options.adult} Adults, ${options.children} Children, ${options.room} Rooms`}
            </span>
          </div>
          <span className="text-gray-500 text-xs">▼</span>
        </div>

        {showOptions && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg border border-gray-300 rounded-lg p-4 mt-2 z-50">
            {[
              { label: "Adults", key: "adult", min: 1 },
              { label: "Children", key: "children", min: 0 },
              { label: "Rooms", key: "room", min: 1 },
            ].map(({ label, key, min }) => (
              <div key={key} className="flex justify-between items-center mb-3">
                <span className="text-gray-700 font-medium text-sm">
                  {label}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    className={`px-3 py-1 rounded-lg text-sm transition ${
                      options[key] === min
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gray-200 hover:bg-gray-400 hover:text-white"
                    }`}
                    onClick={() => handleOptionChange(key, -1)}
                    disabled={options[key] === min}
                  >
                    -
                  </button>
                  <span className="text-gray-700 font-semibold text-sm">
                    {options[key]}
                  </span>
                  <button
                    className="px-3 py-1 rounded-lg text-sm bg-gray-200 hover:bg-gray-400 hover:text-white transition"
                    onClick={() => handleOptionChange(key, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Search Button */}
      <div className="flex justify-center w-full md:flex-1">
        <button
          onClick={handleSearch}
          className="font-bold bg-purple-600 hover:bg-purple-700 transition text-white px-8 py-3 rounded-md w-full cursor-pointer"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
