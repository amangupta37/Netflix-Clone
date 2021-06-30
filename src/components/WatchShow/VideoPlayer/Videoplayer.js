import React from "react";
import {
  showContainer,
  Container,
  VideoShowCase,
} from "./Styles/Videoplayer-Style";
const Videoplayer = ({ setshowTrailer }) => {
  const showVideo = () => {
    setshowTrailer(false);
  };
  return (
    <showContainer onClick={showVideo}>
      <Container>
        <VideoShowCase>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/nW948Va-l10"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoShowCase>
      </Container>
    </showContainer>
  );
};

export default Videoplayer;
