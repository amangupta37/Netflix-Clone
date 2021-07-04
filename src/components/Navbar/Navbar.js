import React, { useState, useEffect } from "react";
import {
  Container,
  NavContainer,
  LogoContainer,
  ProfileContainer,
  SearchBarContainer,
} from "./Styles/Navbar-Style";
import SearchIcon from "@material-ui/icons/Search";

import { Netflixlogo } from "../Header/Logo/Netflixlogo";

import user from "../WhoIsWatching/Styles/UserProfile/user.png";

const Navbar = ({ setsearchInput }) => {
  const [showSearchBar, setshowSearchBar] = useState(false);

  const [initialPosition, setInitialPosition] = useState(0);

  const [navBackground, setnavBackground] = useState(false);

  useEffect(() => {
    const Scroll = () => {
      let currentPosition = window.pageYOffset;

      if (currentPosition > initialPosition) {
        setnavBackground(true);
      } else {
        setnavBackground(false);
      }
      setInitialPosition(currentPosition < 0 ? 0 : currentPosition);
    };

    window.addEventListener("scroll", Scroll);
  }, [initialPosition, navBackground]);

  const showSearch = () => {
    setshowSearchBar(showSearchBar === false ? true : false);
  };

  const searchInput = (e) => {
    const userSearchInput = e.target.value;
    setsearchInput(userSearchInput);
  };

  return (
    <Container
      toogleBackground={navBackground}
      initialPosition={initialPosition}
    >
      <NavContainer toogleBackground={navBackground}>
        <LogoContainer>
          <Netflixlogo />
        </LogoContainer>

        <ProfileContainer>
          <SearchBarContainer>
            <SearchIcon id="search" onClick={showSearch} />

            {showSearchBar ? (
              <input
                type="search"
                placeholder="Search movies"
                onChange={searchInput}
              />
            ) : null}
          </SearchBarContainer>
          <img src={user} alt="profile" />
        </ProfileContainer>
      </NavContainer>
    </Container>
  );
};

export default Navbar;
