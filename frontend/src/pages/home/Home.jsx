import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Featured from "../../components/Featured";
import PropertyList from "../../components/PropertyList";
import FeaturedProperties from "../../components/FeaturedProperties";
import MailList from "../../components/MailList";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="h-full bg-purple-50 pt-[10vh]">
      <Navbar />
      <Header />
      <div className="pt-[10vh] flex flex-col">
        <Featured />
        <PropertyList />
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
