import React, { useState, useEffect } from "react";
import {
  Container,
  TitleContainer,
  ImageContainer,
  ComedyContainer,
} from "./Styles/Comedy-Style.js";
import axios from "../../../../API/axios";
import requests from "../../../../API/Requests";

const Comedy = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const RequestImage = async () => {
      const request = await axios.get(requests.fetchComedyMovies);

      setImages(request.data.results);
    };
    RequestImage();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <h2>Comedy Movies</h2>
      </TitleContainer>
      <ImageContainer>
        {images
          .slice(0)
          .reverse()
          .map((val) => {
            return (
              <ComedyContainer key={val.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${val.backdrop_path}`}
                  alt="nn"
                />
              </ComedyContainer>
            );
          })}
      </ImageContainer>
    </Container>
  );
};

export default Comedy;
