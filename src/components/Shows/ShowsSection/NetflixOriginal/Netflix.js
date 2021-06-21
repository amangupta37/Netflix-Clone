import React, { useState, useEffect } from "react";
import { NetflixOriginalContainer } from "./Styles/Netflix-Styles";
import {
  Container,
  TitleContainer,
  ImageContainer,
  VideoContainer,
} from "../../ShowsSection/StyleShowsSection/Style.js";
import axios from "../../../../API/axios";
import requests from "../../../../API/Requests";
import Watch from "../../../WatchShow/Watch";
const Netflix = () => {
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(false);

  useEffect(() => {
    const RequestImage = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setImages(request.data.results);
    };
    RequestImage();
  }, []);

  console.log(images);

  const showVideo = (id, name) => {
    console.log(id, name);
    setVideo(true);
  };

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
              <NetflixOriginalContainer
                key={val.id}
                onClick={() => showVideo([val.id, val.name])}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original/${val.poster_path}`}
                  alt="nn"
                />
              </NetflixOriginalContainer>
            );
          })}
      </ImageContainer>

      {video ? (
        <VideoContainer>
          <Watch />
        </VideoContainer>
      ) : null}
    </Container>
  );
};

export default Netflix;
