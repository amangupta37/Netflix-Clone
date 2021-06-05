import React from "react";
import {
  Jumbocontainer,
  Jumbosection,
  Jumbotextsection,
  Jumboimagesection,
} from "./styles/Jumbotron-Style";
import Jumbo from "../../fixtures/jumbo.json";
const Jumbotron = () => {
  return (
    <Jumbocontainer>
      {Jumbo.map((jumboValue) => {
        return (
          <Jumbosection>
            <Jumbotextsection>
              <h1>{jumboValue.title}</h1>
              <p>{jumboValue.subTitle}</p>
            </Jumbotextsection>
            <Jumboimagesection>
              <img id="images" src={jumboValue.image} alt={jumboValue.alt} />
            </Jumboimagesection>
          </Jumbosection>
        );
      })}
    </Jumbocontainer>
  );
};

export default Jumbotron;
