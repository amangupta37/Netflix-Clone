import React, { useState, useEffect } from "react";
import { TrendingContainer } from "./Styles/Trending-Style.js";
import {
  Container,
  TitleContainer,
  ImageContainer,
  VideoContainer,
} from "../../ShowsSection/StyleShowsSection/Style.js";
import axios from "../../../../API/axios";
import requests from "../../../../API/Requests";
import Watch from "../../../WatchShow/Watch";

const Trending = ({ searchInput }) => {
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(false);
  const [movieName, setmovieName] = useState([]);
  const [moviePath, setmoviePath] = useState([]);
  const [movieID, setmovieID] = useState([]);

  useEffect(() => {
    const RequestImage = async () => {
      const request = await axios.get(requests.fetchTrending);

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
        <h2>Trending Now</h2>
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
          .slice(0)
          .reverse()
          .map((val) => {
            return (
              <TrendingContainer
                key={val.id}
                onClick={() =>
                  showVideo([val.id], [val.original_title], [val.backdrop_path])
                }
              >
                <img
                  src={`https://image.tmdb.org/t/p/original/${val.backdrop_path}`}
                  alt="nn"
                />
              </TrendingContainer>
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

export default Trending;
