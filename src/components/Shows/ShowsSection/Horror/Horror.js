import React, { useState, useEffect } from "react";
import { HorrorContainer } from "./Styles/Horror-Style.js";
import {
  Container,
  TitleContainer,
  ImageContainer,
} from "../../ShowsSection/StyleShowsSection/Style.js";
import axios from "../../../../API/axios";
import requests from "../../../../API/Requests";

const Horror = ({ searchInput }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const RequestImage = async () => {
      const request = await axios.get(requests.fetchHorrorMovies);

      setImages(request.data.results);
    };
    RequestImage();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <h2>Horror Movies</h2>
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
              <HorrorContainer key={val.id}>
                {val.backdrop_path !== null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original/${val.backdrop_path}`}
                    alt="nn"
                  />
                ) : null}
              </HorrorContainer>
            );
          })}
      </ImageContainer>
    </Container>
  );
};

export default Horror;
