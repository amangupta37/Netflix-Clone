import React, { useState, useEffect } from "react";
import {
  Container,
  TitleContainer,
  ImageContainer,
  NetflixOriginalContainer,
} from "./Styles/Netflix-Styles";
import axios from "../../../../API/axios";
import requests from "../../../../API/Requests";
const Netflix = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const RequestImage = async () => {
      const request = await axios.get(requests.fetchTrending);

      console.log(request.data.results);

      setImages(request.data.results);
    };
    RequestImage();
  }, []);
  console.log(
    images.map((val) => {
      return val.id;
    })
  );

  return (
    <Container>
      <TitleContainer>
        <h2>NETFLIX ORIGINALS</h2>
      </TitleContainer>
      <ImageContainer>
        {images
          .slice(0)
          .reverse()
          .map((val) => {
            return (
              <NetflixOriginalContainer key={val.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${val.poster_path}`}
                  alt="nn"
                />
              </NetflixOriginalContainer>
            );
          })}
      </ImageContainer>
    </Container>
  );
};

export default Netflix;
