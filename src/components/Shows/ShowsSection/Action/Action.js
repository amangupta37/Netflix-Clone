import React, { useState, useEffect } from "react";
import { ActionContainer } from "./Styles/Action-Style.js";
import {
  Container,
  TitleContainer,
  ImageContainer,
} from "../../ShowsSection/StyleShowsSection/Style.js";
import axios from "../../../../API/axios";
import requests from "../../../../API/Requests";

const Action = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const RequestImage = async () => {
      const request = await axios.get(requests.fetchActionMovies);

      setImages(request.data.results);
    };
    RequestImage();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <h2>Action Movies</h2>
      </TitleContainer>
      <ImageContainer>
        {images
          .slice(0)
          .reverse()
          .map((val) => {
            return (
              <ActionContainer key={val.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${val.backdrop_path}`}
                  alt="nn"
                />
              </ActionContainer>
            );
          })}
      </ImageContainer>
    </Container>
  );
};

export default Action;
