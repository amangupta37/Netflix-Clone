import React from "react";
import {
  Jumbocontainer,
  Jumbosection,
  Jumbotextsection,
  Jumboimagesection,
  Jumbonotify,
  Wrapjumbo,
  Jumbonotifycontent,
  Imageboxshot,
  Textboxshot,
  Textarea,
  Iconarea,
} from "./styles/Jumbotron-Style";
import Jumbo from "../../fixtures/jumbo.json";
import GetAppIcon from "@material-ui/icons/GetApp";
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
                  style={jumboValue.id === 2 ? { width: "140px" } : {}}
                />
                {jumboValue.id === 2 ? (
                  <Jumbonotify>
                    <Jumbonotifycontent>
                      <Imageboxshot>
                        <img
                          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                          alt="notify"
                        />
                      </Imageboxshot>
                      <Textboxshot>
                        <Textarea>
                          <h3>Stranger Things</h3>
                          <p>Downloading...</p>
                        </Textarea>
                        <Iconarea>
                          <GetAppIcon />
                        </Iconarea>
                      </Textboxshot>
                    </Jumbonotifycontent>
                  </Jumbonotify>
                ) : null}
              </Jumboimagesection>
            </Jumbosection>
          </Wrapjumbo>
        );
      })}
    </Jumbocontainer>
  );
};

export default Jumbotron;
