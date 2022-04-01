import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import FoodItem from "./features/FoodItem/FoodItem"
import Footer from "./features/Footer/Footer";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:id" element={<FoodItem />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
