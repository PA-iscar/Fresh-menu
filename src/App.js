import React from "react";
import { Checkout } from "./features/checkOut/Checkout";
import NavBar from "./features/checkOut/NavBar";


function App() {
  return (
    <>
      <div>APP</div>
      {/* just to check output */}
      <NavBar></NavBar>
      <Checkout></Checkout>
      {/* just to check output */}
    </>
  );
}

export default App;
