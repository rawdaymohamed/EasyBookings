import React from "react";

const Featured = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {/* California */}
      <div className="relative w-full text-left">
        <figure className="relative">
          <img
            src="/nature3.jpg"
            alt="Beautiful nature scene in California"
            className="w-full aspect-[4/3] object-cover rounded-md"
          />
          <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 rounded-b-md">
            <h1 className="text-2xl font-bold">California</h1>
            <h2 className="text-lg">123 properties</h2>
          </figcaption>
        </figure>
      </div>
      {/* North Carolina */}
      <div className="relative w-full text-left">
        <figure className="relative">
          <img
            src="/nature2.jpg"
            alt="Beautiful nature scene in North Carolina"
            className="w-full aspect-[4/3] object-cover rounded-md"
          />
          <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 rounded-b-md">
            <h1 className="text-2xl font-bold">North Carolina</h1>
            <h2 className="text-lg">234 properties</h2>
          </figcaption>
        </figure>
      </div>
      {/* Los Angeles */}
      <div className="relative w-full text-left">
        <figure className="relative">
          <img
            src="/los-angeles.jpg"
            alt="Beautiful nature scene in Dublin"
            className="w-full aspect-[4/3] object-cover rounded-md"
          />
          <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 rounded-b-md">
            <h2 className="text-lg">456 properties</h2>
            <h1 className="text-2xl font-bold">Los Angeles</h1>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Featured;
