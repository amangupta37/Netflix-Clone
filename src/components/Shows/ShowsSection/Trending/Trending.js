import React, { useState, useEffect } from "react";
import { TrendingContainer } from "./Styles/Trending-Style.js";
import {
  Container,
  TitleContainer,
  ImageContainer,
} from "../../ShowsSection/StyleShowsSection/Style.js";
import axios from "../../../../API/axios";
import requests from "../../../../API/Requests";
const Trending = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const RequestImage = async () => {
      const request = await axios.get(requests.fetchTrending);

      setImages(request.data.results);
    };
    RequestImage();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <h2>Trending Now</h2>
      </TitleContainer>
      <ImageContainer>
        {images
          .slice(0)
          .reverse()
          .map((val) => {
            return (
              <TrendingContainer key={val.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${val.backdrop_path}`}
                  alt="nn"
                />
              </TrendingContainer>
            );
          })}
      </ImageContainer>
    </Container>
  );
};

export default Trending;
