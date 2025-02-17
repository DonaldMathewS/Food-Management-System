import React from "react";
import "./Home.css";
import Head from "../Header/Header";
import Menu from "../Menu/menu";
import Logout from "../Header/headLogout";

const Home = () => {
  return (
    <>
      <Logout />
      <Menu />
    </>
  );
};

export default Home;
