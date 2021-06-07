import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Footer from "../components/Footer/Footer";
import Faqs from "../components/Faqs/Faqs";
const Home = () => {
  return (
    <div className="home">
      <Jumbotron />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;
