import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Shows from "../components/Shows/Shows";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
const Browse = () => {
  return (
    <Wrapper>
      <Navbar />
      <Banner />
      <Shows />
      <Footer />
    </Wrapper>
  );
};

export default Browse;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
