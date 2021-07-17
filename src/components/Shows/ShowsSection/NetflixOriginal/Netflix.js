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
const Netflix = ({ searchInput }) => {
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(false);
  const [movieName, setmovieName] = useState([]);
  const [moviePath, setmoviePath] = useState([]);
  const [movieID, setmovieID] = useState([]);

  useEffect(() => {
    const RequestImage = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setImages(request.data.results);
    };
    RequestImage();
  }, []);

  const showVideo = (id, name, vid) => {
    setmovieName(name);
    setmoviePath(vid);
    setmovieID(id);
    setVideo(true);
  };

  return (
    <Container>
      <TitleContainer>
        {searchInput === "" ? <h2>NETFLIX ORIGINALS</h2> : null}
      </TitleContainer>
      <ImageContainer>
        {images
          .filter((val) => {
            return searchInput === ""
              ? val
              : val.name.toLowerCase().includes(searchInput.toLowerCase());
          })
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
                {val.poster_path !== null ? (
                  <img
                    id="netflix-poster"
                    src={`https://image.tmdb.org/t/p/original/${val.poster_path}`}
                    alt="nn"
                  />
                ) : null}
              </NetflixOriginalContainer>
            );
          })}
      </ImageContainer>

      {video ? (
        <VideoContainer>
          <Watch
            posterid={movieID}
            posterDetails={movieName}
            posterPath={moviePath}
            closeVideo={setVideo}
          />
        </VideoContainer>
      ) : null}
    </Container>
  );
};

export default Netflix;
