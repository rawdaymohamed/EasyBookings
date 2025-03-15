import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Search from "../../components/Search";
import Featured from "../../components/Featured";
import PropertyList from "../../components/PropertyList";
import FeaturedProperties from "../../components/FeaturedProperties";
import MailList from "../../components/MailList";

const Home = () => {
  return (
    <div className="h-[120vh] bg-[#edfbff] pt-[10vh]">
      <Navbar />
      <Header />
      <div className="pt-[10vh] flex flex-col  gap-5">
        <Featured />

        <PropertyList />

        <FeaturedProperties />
        <MailList />
      </div>
    </div>
  );
};

export default Home;
