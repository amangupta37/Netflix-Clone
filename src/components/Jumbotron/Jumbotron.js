import React, { useState, useEffect } from "react";
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
import downloadIcon from "./styles/Icon/download-icon.gif";
const Jumbotron = () => {
  const [image, setimage] = useState(null);

  let update = [];

  useEffect(() => {
    update.map((val) => {
      if (val === 2) {
        setimage(true);
      } else {
        setimage(false);
      }
      return "";
    });
  });

  const styleImage = (data) => {
    update.push(data);
  };

  console.log(image);

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
              <Jumboimagesection image={image}>
                <img
                  data={jumboValue.direction}
                  src={jumboValue.image}
                  alt={jumboValue.alt}
                  key={jumboValue.id}
                  style={
                    jumboValue.id === 2
                      ? {
                          width: "140px",
                        }
                      : {}
                  }
                />
                {styleImage(jumboValue.id)}
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
                          <img src={downloadIcon} alt="download" />
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
