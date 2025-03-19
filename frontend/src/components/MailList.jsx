import React from "react";

const MailList = () => {
  return (
    <div className="bg-black w-full py-16 md:py-18">
      <div className="w-[90%] lg:w-[40%] mx-auto text-center text-white">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Save Time, Save Money!
        </h2>
        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg mt-2">
          Sign up and we'll send you the best deals for you.
        </p>
        {/* Sign-up Form */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full sm:flex-grow px-4 py-3 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button className="w-full sm:w-auto bg-purple-400 hover:bg-purple-500 text-black font-semibold px-6 py-3 rounded-lg transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default MailList;
