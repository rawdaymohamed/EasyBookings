import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // cleanup: this prevents memory leaks when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`${
          isSticky ? "shadow-lg z-50" : "z-50"
        }  bg-white h-[10vh] fixed z-900 w-full font-medium text-gray-900  duration-200 top-0 left-0 text-sm lg:text-base`}
      >
        <div className="flex items-center h-full">
          <nav className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <span className="mr-0.5 -mt-1 font-extrabold text-purple-500 text-xl lg:text-3xl">
                Easy
              </span>
              <div className="text-sm lg:text-lg font-bold uppercase tracking-wider">
                Bookings
              </div>
            </Link>
            <div className="text-medium lg:text-base flex items-center space-x-4 lg:space-x-6">
              <Link to="/login" className="text-gray-800 hover:text-gray-950">
                Login
              </Link>
              <Link
                to="/register"
                className="px-6 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-normal"
              >
                Register
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
