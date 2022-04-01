import React from "react";
import Feed from "../features/Feed/Feed";
import NavBar from "../features/landingPage/NavBar";
import UserAuth from "../features/UserAuth/UserAuth";
const LandingPage = () => {
  return (
    <>
      <UserAuth />
      <NavBar />
      <Feed />
    </>
  );
};

export default LandingPage;
