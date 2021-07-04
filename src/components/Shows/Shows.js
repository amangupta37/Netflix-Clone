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

const Shows = ({ searchInput }) => {
  return (
    <Container>
      <ShowsContainer>
        <NetflixOriginalContainer>
          <Netflix searchInput={searchInput} />
        </NetflixOriginalContainer>
        <TrendingContainer>
          <Trending searchInput={searchInput} />
        </TrendingContainer>
        <TopRatedContainer>
          <Toprated searchInput={searchInput} />
        </TopRatedContainer>
        <ActionContainer>
          <Action searchInput={searchInput} />
        </ActionContainer>
        <ComedyContainer>
          <Comedy searchInput={searchInput} />
        </ComedyContainer>
        <HorrorContainer>
          <Horror searchInput={searchInput} />
        </HorrorContainer>
        <RomanceContainer>
          <Romance searchInput={searchInput} />
        </RomanceContainer>
      </ShowsContainer>
    </Container>
  );
};

export default Shows;
