import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Search from "../../components/Search";

const Home = () => {
  return (
    <div className="h-[120vh] bg-[#edfbff] pt-[10vh]">
      <Navbar />
      <Header />
    </div>
  );
};

export default Home;
