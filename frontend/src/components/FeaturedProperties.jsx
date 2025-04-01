import React from "react";

const properties = [
  {
    id: 1,
    name: "Lake Tahoe",
    description: "Crystal-clear alpine lake surrounded by mountains.",
    price: "$120",
    rating: "8.9",
    review: "Excellent",
    image: "/featured-apartment.jpg",
  },
  {
    id: 2,
    name: "Aspen Retreat",
    description: "Cozy mountain lodge with breathtaking views.",
    price: "$150",
    rating: "9.2",
    review: "Superb",
    image: "/featured-apartment1.jpg",
  },
  {
    id: 3,
    name: "Santorini Escape",
    description: "Whitewashed homes with stunning ocean views.",
    price: "$200",
    rating: "9.5",
    review: "Exceptional",
    image: "/featured-apartment2.jpg",
  },
  // {
  //   id: 4,
  //   name: "Maldives Villa",
  //   description: "Luxury overwater bungalow with private pool.",
  //   price: "$300",
  //   rating: "9.8",
  //   review: "Outstanding",
  //   image: "/featured-apartment3.jpg",
  // },
];

const FeaturedProperties = () => {
  return (
    <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto p-4">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-7">
        Discover Our Best
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  2xl:grid-cols-4 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            {/* Image Wrapper */}
            <figure className="relative overflow-hidden rounded-t-xl h-60">
              <div className="absolute inset-0">
                <img
                  src={property.image}
                  alt={property.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ transformOrigin: "center" }}
                />
              </div>
              <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                <h1 className="text-xl font-bold">{property.name}</h1>
              </figcaption>
            </figure>
            {/* Property Details */}
            <div className="p-4 bg-white rounded-b-xl">
              <p className="text-sm text-gray-500">{property.description}</p>
              <p className="font-semibold text-base mt-2">
                Starting from {property.price}
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold mt-2">
                <span className="bg-blue-600 text-white px-2 py-1 rounded-md">
                  {property.rating}
                </span>
                <span className="text-gray-700">{property.review}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
