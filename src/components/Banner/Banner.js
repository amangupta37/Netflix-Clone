import React from "react";
import {
  Container,
  ContentContainer,
  ShortdetailContainer,
  TopicContainer,
  ButtonContainer,
  DescriptionContainer,
} from "./Styles/Banner-Style";

const Banner = () => {
  return (
    <Container>
      <ContentContainer>
        <ShortdetailContainer>
          <TopicContainer>Education</TopicContainer>
          <ButtonContainer>
            <button>Play</button>
            <button>My List</button>
          </ButtonContainer>
          <DescriptionContainer>
            <p>
              Sed et est sed ipsum et clita nonumy nonumy consetetur rebum, et
              sed at amet sanctus. Ipsum ut aliquyam ut.
            </p>
          </DescriptionContainer>
        </ShortdetailContainer>
      </ContentContainer>
    </Container>
  );
};

export default Banner;
