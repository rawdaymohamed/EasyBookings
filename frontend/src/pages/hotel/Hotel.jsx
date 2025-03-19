import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { FaLocationDot } from "react-icons/fa6";
import MailList from "../../components/MailList";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";

const Hotel = () => {
  const images = [
    { id: 1, src: "/hotel.jpg" },
    { id: 2, src: "/apartment.jpg" },
    { id: 3, src: "/featured-apartment.jpg" },
    { id: 4, src: "/featured-apartment1.jpg" },
    { id: 5, src: "/featured-apartment2.jpg" },
    { id: 6, src: "/featured-apartment3.jpg" },
  ];

  return (
    <div className="pt-[10vh] bg-gray-100 min-h-screen">
      <Navbar />
      <Header type="list" />
      <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto py-12 space-y-6">
        <div className="flex flex-col sm:flex-row md:items-center justify-between gap-5">
          <h1 className="text-3xl font-bold text-gray-900">Grand Hotel</h1>
          <button className="content-fit cursor-pointer bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
            Reserve or Book Now!
          </button>
        </div>
        {/* Hotel Address */}
        <div className="flex items-center gap-2 text-gray-700">
          <FaLocationDot className="text-red-500" />
          <p className="text-lg">6th of October, Giza, Egypt</p>
        </div>
        {/* Highlight */}
        <div className="bg-blue-100 text-blue-800 p-4 rounded-lg font-medium">
          Book a stay over $114 at this property and get a free airport taxi
        </div>
        <Slider images={images} />
        {/* Hotel images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={image.src}
                alt="Hotel"
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
        {/* Details */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            quos cumque nihil in, consectetur quasi obcaecati possimus fuga
            molestiae, quidem assumenda nam natus iusto repellendus fugit minus
            cupiditate, labore ullam.
          </p>
        </div>
        {/* Hotel details price */}
        <div className="bg-blue-50 p-6 shadow-md rounded-lg text-gray-900">
          <h3 className="text-xl font-semibold">Perfect for a 9-night stay</h3>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic porro
            dolore illo tenetur.
          </p>
          <p className="text-xl font-bold mt-4">$949 (9 nights)</p>
          <button className="cursor-pointer mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
            Reserve a book now
          </button>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default Hotel;
