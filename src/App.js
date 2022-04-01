import React from "react";
import LandingPage from "./Pages/LandingPage";
import FoodItem from "./features/foodItems/FoodItem";
import NavBar from "./features/foodItems/NavBar";

function App() {
  return (
    <>
      <LandingPage />
      {/* <NavBar/> */}
     <FoodItem/>
    </>
  );
}

export default App;
