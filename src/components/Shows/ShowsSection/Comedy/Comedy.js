import React, { useState, useEffect } from "react";
import { ComedyContainer } from "./Styles/Comedy-Style.js";
import {
  Container,
  TitleContainer,
  ImageContainer,
} from "../../ShowsSection/StyleShowsSection/Style.js";
import axios from "../../../../API/axios";
import requests from "../../../../API/Requests";

const Comedy = ({ searchInput }) => {
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
          .filter((val) => {
            return searchInput === ""
              ? val
              : val.original_title
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
          })
          .slice(0)
          .reverse()
          .map((val) => {
            return (
              <ComedyContainer key={val.id}>
                {val.backdrop_path !== null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original/${val.backdrop_path}`}
                    alt="nn"
                  />
                ) : null}
              </ComedyContainer>
            );
          })}
      </ImageContainer>
    </Container>
  );
};

export default Comedy;
