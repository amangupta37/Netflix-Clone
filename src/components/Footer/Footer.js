import React from "react";
import {
  Footercontainer,
  FooterQnASection,
  FooterInfoSection,
  FooterChooseLanguageSection,
} from "./styles/Footer-Style";
import footercontent from "../../fixtures/footer.json";

const Footer = () => {
  return (
    <Footercontainer>
      {footercontent.map((val) => {
        return console.log(val);
      })}
      <FooterQnASection>
        <p>Questions? Call 000-800-040-1843</p>
      </FooterQnASection>
      <FooterInfoSection>
        {footercontent.map((val) => {
          return <p>{val.content}</p>;
        })}
      </FooterInfoSection>
      <FooterChooseLanguageSection>
        <select>
          <option>English</option>
          <option>हिन्दी</option>
        </select>
        <p>Netflix India</p>
      </FooterChooseLanguageSection>
    </Footercontainer>
  );
};

export default Footer;
