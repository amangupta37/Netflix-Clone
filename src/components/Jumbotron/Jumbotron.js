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
  DownloadSection,
  ImageSection,
} from "./styles/Jumbotron-Style";
import Jumbo from "../../fixtures/jumbo.json";
import downloadIcon from "./styles/Icon/download-icon.gif";
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
              <Jumboimagesection image={image}>
                {jumboValue.id === 2 ? null : (
                  <img
                    data={jumboValue.direction}
                    src={jumboValue.image}
                    alt={jumboValue.alt}
                    key={jumboValue.id}
                  />
                )}

                {jumboValue.id === 2 ? (
                  <DownloadSection>
                    <ImageSection>
                      <img
                        data={jumboValue.direction}
                        src={jumboValue.image}
                        alt={jumboValue.alt}
                        key={jumboValue.id}
                      />
                    </ImageSection>
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
                  </DownloadSection>
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
