import React, { useState } from "react";
import {
  Container,
  VideoContainer,
  TitleContainer,
  VideoBgContainer,
  BgContainer,
  ButtonContainer,
  CrossContainer,
} from "./Styles/Watch-Style";
import ClearIcon from "@material-ui/icons/Clear";
import Videoplayer from "./VideoPlayer/Videoplayer";
const Watch = (props) => {
  const [showTrailer, setshowTrailer] = useState(false);
  const ClosePopup = () => {
    props.closeVideo(false);
  };

  const TrailerPopup = (movieID) => {
    setshowTrailer(true);
    console.log(movieID[0]);
  };

  return (
    <Container>
      <VideoContainer>
        <TitleContainer>
          <h2>{props.posterDetails}</h2>
        </TitleContainer>
        <CrossContainer>
          <ClearIcon id="close" onClick={ClosePopup} />
        </CrossContainer>
      </VideoContainer>
      <VideoBgContainer>
        <ButtonContainer onClick={() => TrailerPopup(props.posterid)}>
          <h2>Play</h2>
        </ButtonContainer>

        <BgContainer>
          <img
            src={`https://image.tmdb.org/t/p/original/${props.posterPath}`}
            alt="new "
          />
        </BgContainer>
      </VideoBgContainer>
      {showTrailer ? <Videoplayer setshowTrailer={setshowTrailer} /> : null}
    </Container>
  );
};

export default Watch;
