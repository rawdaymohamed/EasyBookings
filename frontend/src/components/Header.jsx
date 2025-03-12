import React from "react";
import { FaBed, FaCar } from "react-icons/fa6";
import { GrAttraction } from "react-icons/gr";
import { IoAirplane } from "react-icons/io5";
const Header = () => {
  return (
    <div className=" bg-purple-600 text-white p-16">
      <div className="w-[95%] lg:w-[80%] xl:w-[70%] mx-auto space-y-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:justify-center">
          <div className="flex items-center gap-5 px-4 py-2 active">
            <FaBed className="size-6" />
            <p>Stays</p>
          </div>
          <div className="flex items-center gap-5  px-4 py-2">
            <IoAirplane className="size-6" />
            <p>Flights</p>
          </div>
          <div className="flex items-center gap-5 px-4 py-2">
            <FaCar className="size-6" />
            <p>Car Rentals</p>
          </div>
          <div className="flex items-center gap-5  px-4 py-2">
            <FaBed className="size-6" />
            <p>Attractions</p>
          </div>
          <div className="flex items-center gap-5  px-4 py-2">
            <GrAttraction className="size-6" />
            <p>Airport Taxis</p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-2xl lg:text-4xl leading-[2.5rem] lg:leading-[3rem] lg:text-center">
            Welcome to EasyBookings, your gateway to exceptional accommodations.
          </h2>
          <p className="lg:text-center font-light leading-[2rem] lg:text-lg">
            We offer a range of comfortable rooms and suites to suit every
            traveler. Explore our amenities, check availability, and book your
            stay with ease. Experience unparalleled hospitality and create
            lasting memories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
