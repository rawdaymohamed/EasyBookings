"use client";
import React, { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos, MdClose } from "react-icons/md";

const Slider = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open full-screen mode
  const openFullScreen = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
    setIsFullScreen(true);
  };

  // Close full-screen mode when clicking outside the image and arrows
  const closeFullScreen = (e) => {
    if (e.target.id === "fullscreen-overlay") {
      setIsFullScreen(false);
    }
  };

  // Navigate images
  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div>
      {/* Full-Screen Slider Modal */}
      {isFullScreen && (
        <div
          id="fullscreen-overlay"
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4"
          onClick={closeFullScreen} // Only closes when clicking the overlay
        >
          {/* Close Button */}
          <button
            onClick={() => setIsFullScreen(false)}
            className="absolute z-50 top-[12vh] right-4 text-white text-3xl cursor-pointer"
          >
            <MdClose />
          </button>

          {/* Left Arrow (Previous Image Button) */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl sm:text-5xl bg-opacity-50 rounded-full z-50 cursor-pointer hover:bg-opacity-80"
          >
            <MdArrowBackIosNew />
          </button>

          {/* Full-Screen Image */}
          <div
            className="relative w-full h-auto flex justify-center items-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
          >
            <img
              src={selectedImage.src}
              width={1000}
              height={800}
              className="w-full h-full md:h-[80vh] md:w-[80vw] object-contain"
              alt="Full-screen"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl sm:text-5xl bg-opacity-50 rounded-full z-50 cursor-pointer hover:bg-opacity-80"
          >
            <MdArrowForwardIos />
          </button>
        </div>
      )}

      {/* Normal Slider */}

      {/* Big Image (Click to Open Full Screen) */}
      {/* <div
          className="relative w-full h-[250px] sm:h-[350px] lg:h-[400px] overflow-hidden rounded-lg cursor-pointer"
          onClick={() => openFullScreen(images.indexOf(selectedImage))}
        >
          <img
            src={selectedImage.src}
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-lg"
            alt="Selected"
          />
        </div> */}

      {/* Thumbnail Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, i) => (
          <button
            key={i}
            onClick={() => openFullScreen(i)}
            className={`rounded-lg overflow-hidden shadow-lg ${
              selectedImage === image ? "border-gray-800" : "border-transparent"
            }`}
          >
            <img
              src={image.src}
              width={100}
              height={80}
              className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-80 cursor-pointer"
              alt={`Thumbnail ${i + 1}`}
            />
          </button>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Slider;
