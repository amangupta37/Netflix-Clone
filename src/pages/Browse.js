import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Shows from "../components/Shows/Shows";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
const Browse = () => {
  const [searchInput, setsearchInput] = useState("");

  return (
    <Wrapper>
      <Navbar setsearchInput={setsearchInput} />
      <Banner />
      <Shows searchInput={searchInput} />
      <Footer />
    </Wrapper>
  );
};

export default Browse;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
