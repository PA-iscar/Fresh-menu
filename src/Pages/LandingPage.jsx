import React, { useState } from "react";
import NavBar from "../features/Navbar/NavBar";
import NavCarousel from "../features/Carousel/NavCarousel";
import Feed from "../features/Feed/Feed";
import Footer from "../features/Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <NavCarousel />
      <Feed />
      <Footer />
    </>
  );
};

export default LandingPage;
