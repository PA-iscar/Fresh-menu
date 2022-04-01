import React, { useState } from "react";
import Feed from "../features/Feed/Feed";
import NavBar from "../features/landingPage/NavBar";
import UserAuth from "../features/UserAuth/UserAuth";
const LandingPage = () => {
  const [feature, setFeature] = useState("");
  return (
    <>
      <UserAuth feature={feature} setFeature={setFeature} />
      <NavBar />
      <Feed />
    </>
  );
};

export default LandingPage;
