import React from "react";

const Footer = () => {
  const footerContent = [
    ["Destinations", "Europe", "Asia", "America", "Africa", "Australia"],
    ["Services", "Flights", "Car Rentals", "Hotels", "Cruises", "Tours"],
    ["Company", "About Us", "Careers", "Press", "Blog", "Investors"],
    ["Support", "Help Center", "Contact Us", "FAQs", "Cancellation", "Safety"],
    ["Follow Us", "Facebook", "Twitter", "Instagram", "LinkedIn", "YouTube"],
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      {/* Footer Lists */}
      <div className=" w-[90%] lg:w-[80%] xl:w-[70%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center sm:text-left">
        {footerContent.map((list, index) => (
          <ul key={index} className="space-y-2">
            <li className="font-semibold text-white">{list[0]}</li>
            {list.slice(1).map((item, i) => (
              <li
                key={i}
                className="hover:text-yellow-400 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
      {/* Copyright */}
      <p className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} Rawda Yasser. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
