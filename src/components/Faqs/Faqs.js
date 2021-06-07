import React from "react";
import { Faqcontainer, Title } from "./styles/Faqs-Style";
import Accordion from "../Accordion/Accordion";
import Mailform from "../MailForm/Mailform";
const Faqs = () => {
  return (
    <Faqcontainer>
      <Title>
        <h1>Frequently Asked Questions</h1>
      </Title>
      <Accordion />
      <Mailform />
    </Faqcontainer>
  );
};

export default Faqs;
