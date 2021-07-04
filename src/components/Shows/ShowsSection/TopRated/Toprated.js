import React, { useState, useEffect } from "react";
import { TopratedContainer } from "./Styles/Toprated-Style.js";
import {
  Container,
  TitleContainer,
  ImageContainer,
} from "../../ShowsSection/StyleShowsSection/Style.js";
import axios from "../../../../API/axios";
import requests from "../../../../API/Requests";

const Toprated = ({ searchInput }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const RequestImage = async () => {
      const request = await axios.get(requests.fetchTopRated);

      setImages(request.data.results);
    };
    RequestImage();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <h2>Top Rated</h2>
      </TitleContainer>
      <ImageContainer>
        {images
          .filter((val) => {
            if (val.original_title) {
              return searchInput === ""
                ? val
                : val.original_title
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
            } else {
              return null;
            }
          })
          .map((val) => {
            return (
              <TopratedContainer key={val.id}>
                {val.backdrop_path !== null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original/${val.backdrop_path}`}
                    alt="nn"
                  />
                ) : null}
              </TopratedContainer>
            );
          })}
      </ImageContainer>
    </Container>
  );
};

export default Toprated;
