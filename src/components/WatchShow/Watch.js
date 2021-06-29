import React from "react";
import {
  Container,
  VideoContainer,
  TitleContainer,
  VideoBgContainer,
  BgContainer,
  ButtonContainer,
  CrossContainer,
} from "./Styles/Watch-Style";
import CancelIcon from "@material-ui/icons/Cancel";
import ClearIcon from "@material-ui/icons/Clear";

const Watch = (props) => {
  return (
    <Container>
      <VideoContainer>
        <TitleContainer>
          <h2>{props.posterDetails}</h2>
        </TitleContainer>
        <CrossContainer>
          <ClearIcon />
        </CrossContainer>
      </VideoContainer>
      <VideoBgContainer>
        <ButtonContainer>
          <h2>Play</h2>
        </ButtonContainer>

        <BgContainer>
          <img
            src={`https://image.tmdb.org/t/p/original/${props.posterPath}`}
            alt="new "
          />
        </BgContainer>
      </VideoBgContainer>
    </Container>
  );
};

export default Watch;
