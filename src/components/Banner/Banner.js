import React, { useState, useEffect } from "react";
import {
  Container,
  ContentContainer,
  ShortdetailContainer,
  TopicContainer,
  ButtonContainer,
  DescriptionContainer,
} from "./Styles/Banner-Style";
import axios from "../../API/axios";
import requests from "../../API/Requests";
const Banner = () => {
  const [movie, setMovie] = useState([" "]);

  useEffect(() => {
    const MovieData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    };

    MovieData();
  }, []);

  return (
    <Container banner={movie.backdrop_path}>
      <ContentContainer>
        <ShortdetailContainer>
          <TopicContainer>{movie.name}</TopicContainer>
          <ButtonContainer>
            <button>Play</button>
            <button>My List</button>
          </ButtonContainer>
          <DescriptionContainer>
            <p>{movie.overview}</p>
          </DescriptionContainer>
        </ShortdetailContainer>
      </ContentContainer>
    </Container>
  );
};

export default Banner;
