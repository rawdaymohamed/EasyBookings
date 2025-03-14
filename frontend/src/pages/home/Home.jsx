import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Search from "../../components/Search";
import Featured from "../../components/Featured";
import PropertyList from "../../components/PropertyList";

const Home = () => {
  return (
    <div className="h-[120vh] bg-[#edfbff] pt-[10vh]">
      <Navbar />
      <Header />
      <div className="pt-[10vh] w-[90%] lg:w-[80%] xl:w-[70%] mx-auto flex flex-col  gap-5">
        <Featured />

        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Browse by property type
        </h2>
        <PropertyList />
      </div>
    </div>
  );
};

export default Home;
