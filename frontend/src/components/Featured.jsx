import React from "react";

const Featured = () => {
  const places = [
    {
      name: "California",
      properties: 123,
      image: "/nature3.jpg",
    },
    {
      name: "North Carolina",
      properties: 234,
      image: "/nature2.jpg",
    },
    {
      name: "Los Angeles",
      properties: 456,
      image: "/los-angeles.jpg",
    },
  ];

  return (
    <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <div
            key={index}
            className="relative w-full text-left group overflow-hidden rounded-md shadow-lg"
          >
            <figure className="relative">
              <img
                src={place.image}
                alt={`Beautiful scene in ${place.name}`}
                className="w-full aspect-[4/3] object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
              />
              <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white p-4 rounded-b-md">
                <h1 className="text-2xl font-bold">{place.name}</h1>
                <h2 className="text-lg">{place.properties} properties</h2>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
