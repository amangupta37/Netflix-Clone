import React from "react";
import {
  Container,
  ShowsContainer,
  NetflixOriginalContainer,
  TrendingContainer,
  TopRatedContainer,
  ActionContainer,
  ComedyContainer,
  HorrorContainer,
  RomanceContainer,
} from "./Styles/Shows-Styles";

import Netflix from "./ShowsSection/NetflixOriginal/Netflix";
import Trending from "./ShowsSection/Trending/Trending";
import Action from "./ShowsSection/Action/Action";
import Toprated from "./ShowsSection/TopRated/Toprated";
import Comedy from "./ShowsSection/Comedy/Comedy";
import Horror from "./ShowsSection/Horror/Horror";
import Romance from "./ShowsSection/Romance/Romance";

const Shows = () => {
  return (
    <Container>
      <ShowsContainer>
        <NetflixOriginalContainer>
          <Netflix />
        </NetflixOriginalContainer>
        <TrendingContainer>
          <Trending />
        </TrendingContainer>
        <TopRatedContainer>
          <Toprated />
        </TopRatedContainer>
        <ActionContainer>
          <Action />
        </ActionContainer>
        <ComedyContainer>
          <Comedy />
        </ComedyContainer>
        <HorrorContainer>
          <Horror />
        </HorrorContainer>
        <RomanceContainer>
          <Romance />
        </RomanceContainer>
      </ShowsContainer>
    </Container>
  );
};

export default Shows;
