import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Footer from "../components/Footer/Footer";
import Faqs from "../components/Faqs/Faqs";
import Header from "../components/Header/Header";
const Home = () => {
  return (
    <>
      <Header />
      <Jumbotron />
      <Faqs />
      <Footer />
    </>
  );
};

export default Home;
