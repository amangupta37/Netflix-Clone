import React from "react";
import {
  Jumbocontainer,
  Jumbosection,
  Jumbotextsection,
  Jumboimagesection,
  Wrapjumbo,
} from "./styles/Jumbotron-Style";
import Jumbo from "../../fixtures/jumbo.json";
const Jumbotron = () => {
  return (
    <Jumbocontainer>
      {Jumbo.map((jumboValue) => {
        return (
          <Wrapjumbo>
            <Jumbosection rowDirection={jumboValue.direction}>
              <Jumbotextsection>
                <h1>{jumboValue.title}</h1>
                <p>{jumboValue.subTitle}</p>
              </Jumbotextsection>
              <Jumboimagesection>
                <img
                  data={jumboValue.direction}
                  src={jumboValue.image}
                  alt={jumboValue.alt}
                  key={jumboValue.id}
                  style={jumboValue.id === 2 ? { width: "150px" } : {}}
                />
              </Jumboimagesection>
            </Jumbosection>
          </Wrapjumbo>
        );
      })}
    </Jumbocontainer>
  );
};

export default Jumbotron;
