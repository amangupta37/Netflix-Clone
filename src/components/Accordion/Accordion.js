import React, { useState } from "react";
import {
  Container,
  AccordionContainer,
  AccordionBar,
  AccordionContent,
  AccordionAddIcon,
  AnswerSection,
} from "./styles/Accordion-Style";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import Faqs from "../../fixtures/faqs.json";
const Accordion = () => {
  const [displayAnswers, setdisplayAnswers] = useState(false);

  const showAnswer = (index) => {
    if (displayAnswers === index) {
      return setdisplayAnswers(false);
    }
    setdisplayAnswers(index);
  };

  return (
    <Container>
      {Faqs.map((faq, index) => {
        return (
          <AccordionContainer>
            <AccordionBar onClick={() => showAnswer(index)}>
              <AccordionContent>{faq.header}</AccordionContent>
              <AccordionAddIcon>
                {displayAnswers === index ? (
                  <ClearIcon id="iconClear" />
                ) : (
                  <AddIcon id="iconAdd" onClick={() => showAnswer(index)} />
                )}
              </AccordionAddIcon>
            </AccordionBar>

            {displayAnswers === index ? (
              <AnswerSection>
                <p>{faq.body}</p>
              </AnswerSection>
            ) : null}
          </AccordionContainer>
        );
      })}
    </Container>
  );
};

export default Accordion;
