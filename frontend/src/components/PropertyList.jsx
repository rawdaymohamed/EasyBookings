import React from "react";

const PropertyList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-4">
      {/* Hotels */}
      <div className="relative w-full text-left">
        <figure className="relative">
          <img
            src="/hotel.jpg"
            alt="Beautiful nature scene in California"
            className="w-full aspect-[4/3] object-cover rounded-md"
          />
          <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 rounded-b-md">
            <h1 className="text-2xl font-bold">Hotels</h1>
          </figcaption>
        </figure>
      </div>
      {/* Apartments */}
      <div className="relative w-full text-left">
        <figure className="relative">
          <img
            src="/apartment.jpg"
            alt="Beautiful nature scene in North Carolina"
            className="w-full aspect-[4/3] object-cover rounded-md"
          />
          <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 rounded-b-md">
            <h1 className="text-2xl font-bold">Apartments</h1>
          </figcaption>
        </figure>
      </div>
      {/* Resorts */}
      <div className="relative w-full text-left">
        <figure className="relative">
          <img
            src="/resort.jpg"
            alt="Beautiful nature scene in Dublin"
            className="w-full aspect-[4/3] object-cover rounded-md"
          />
          <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 rounded-b-md">
            <h1 className="text-2xl font-bold">Resorts</h1>
          </figcaption>
        </figure>
      </div>

      {/* Villas */}
      <div className="relative w-full text-left">
        <figure className="relative">
          <img
            src="/villa.jpg"
            alt="Beautiful nature scene in Dublin"
            className="w-full aspect-[4/3] object-cover rounded-md"
          />
          <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 rounded-b-md">
            <h1 className="text-2xl font-bold">villas</h1>
          </figcaption>
        </figure>
      </div>
      {/* cabins  */}
      <div className="relative w-full text-left">
        <figure className="relative">
          <img
            src="/cabin.jpg"
            alt="Beautiful nature scene in Dublin"
            className="w-full aspect-[4/3] object-cover rounded-md"
          />
          <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 rounded-b-md">
            <h1 className="text-2xl font-bold">Cabins</h1>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default PropertyList;
