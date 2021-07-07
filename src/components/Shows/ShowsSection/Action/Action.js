import React, { useState, useEffect } from "react";
import { ActionContainer } from "./Styles/Action-Style.js";
import {
  Container,
  TitleContainer,
  ImageContainer,
  VideoContainer,
} from "../../ShowsSection/StyleShowsSection/Style.js";
import axios from "../../../../API/axios";
import requests from "../../../../API/Requests";
import Watch from "../../../WatchShow/Watch";

const Action = ({ searchInput }) => {
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(false);
  const [movieName, setmovieName] = useState([]);
  const [moviePath, setmoviePath] = useState([]);
  const [movieID, setmovieID] = useState([]);

  useEffect(() => {
    const RequestImage = async () => {
      const request = await axios.get(requests.fetchActionMovies);
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
        {searchInput === "" ? <h2>Action Movies</h2> : null}
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
              <ActionContainer
                key={val.id}
                onClick={() =>
                  showVideo([val.id], [val.original_title], [val.backdrop_path])
                }
              >
                {val.backdrop_path !== null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original/${val.backdrop_path}`}
                    alt="nn"
                  />
                ) : null}
              </ActionContainer>
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

export default Action;
