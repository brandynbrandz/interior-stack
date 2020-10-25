import React from "react";
import Header from "../components/Header";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <MobileMenu />
      <LoginRegister />
      <Footer />
    </>
  );
};

export default Home;
