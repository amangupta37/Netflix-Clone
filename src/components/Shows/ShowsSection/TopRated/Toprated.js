import React, { useState, useEffect } from "react";
import {
  Container,
  TitleContainer,
  ImageContainer,
  TopratedContainer,
} from "./Styles/Toprated-Style.js";
import axios from "../../../../API/axios";
import requests from "../../../../API/Requests";

const Toprated = () => {
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
        {images.map((val) => {
          return (
            <TopratedContainer key={val.id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${val.backdrop_path}`}
                alt="nn"
              />
            </TopratedContainer>
          );
        })}
      </ImageContainer>
    </Container>
  );
};

export default Toprated;
