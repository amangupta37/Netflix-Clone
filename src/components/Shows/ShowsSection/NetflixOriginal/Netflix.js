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
  const [movieName, setmovieName] = useState([]);
  const [moviePath, setmoviePath] = useState([]);

  useEffect(() => {
    const RequestImage = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setImages(request.data.results);
    };
    RequestImage();
  }, []);

  // console.log(images);

  const showVideo = (id, name, vid) => {
    setmovieName(name);
    setmoviePath(vid);
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
                onClick={() =>
                  showVideo([val.id], [val.name], [val.backdrop_path])
                }
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
          <Watch
            posterDetails={movieName}
            posterPath={moviePath}
            cutVideo={setVideo}
          />
        </VideoContainer>
      ) : null}
    </Container>
  );
};

export default Netflix;
