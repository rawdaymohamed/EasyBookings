import React from "react";
import { FaBed, FaCar, FaTaxi } from "react-icons/fa6";
import { GrAttraction } from "react-icons/gr";
import { IoAirplane } from "react-icons/io5";
import Search from "./Search";

const Header = ({ type }) => {
  return (
    <>
      {/* Header Section */}
      <div
        className={`relative bg-purple-700 text-gray-100 ${type !== "list" ? "py-14 md:py-20" : "py-12"
          }`}
      >
        <div className="w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto space-y-8 md:space-y-10 font-bold">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-3 px-4 py-2 active">
              <FaBed className="size-5 md:size-6" />
              <p className="text-sm md:text-base">Stays</p>
            </div>
            <div className="flex items-center gap-3 px-4 py-2">
              <IoAirplane className="size-5 md:size-6" />
              <p className="text-sm md:text-base">Flights</p>
            </div>
            <div className="flex items-center gap-3 px-4 py-2">
              <FaCar className="size-5 md:size-5" />
              <p className="text-sm md:text-base">Car Rentals</p>
            </div>
            <div className="flex items-center gap-3 px-4 py-2">
              <FaBed className="size-5 md:size-6" />
              <p className="text-sm md:text-base">Attractions</p>
            </div>
            <div className="flex items-center gap-3 px-4 py-2">
              <FaTaxi className="size-5 md:size-5" />
              <p className="text-sm md:text-base">Airport Taxis</p>
            </div>
          </div>

          {type !== "list" && (
            <div className="flex flex-col gap-4 text-center">
              <h2 className="font-bold text-xl md:text-3xl lg:text-4xl leading-snug md:leading-[3rem]">
                Welcome to EasyBookings, your gateway to exceptional
                accommodations.
              </h2>
              <p className="font-normal text-sm md:text-lg leading-relaxed">
                We offer a range of comfortable rooms and suites to suit every
                traveler. Explore our amenities, check availability, and book
                your stay with ease. Experience unparalleled hospitality and
                create lasting memories.
              </p>
            </div>
          )}
        </div>

        {/* Search for medium & larger screens (inside the header) */}
        {type !== "list" && (
          <div className="z-50 hidden md:block absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 w-full px-4">
            <Search />
          </div>
        )}
      </div>

      {/* Search for small screens (outside the header with gray background) */}
      {type !== "list" && (
        <div className="z-50 block md:hidden bg-gray-200 py-6 px-4">
          <Search />
        </div>
      )}
    </>
  );
};

export default Header;
