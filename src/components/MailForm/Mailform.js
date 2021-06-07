import React from "react";
import {
  FormContainer,
  TextContainer,
  MailContainer,
  ButtonContainer,
  ArrowContainer,
} from "./styles/MailForm-Style";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
const Mailform = () => {
  return (
    <FormContainer>
      <TextContainer>
        <span>
          Ready to watch? Enter your email to create or restart your membership.
        </span>
      </TextContainer>
      <MailContainer>
        <input type="text" placeholder="Email address" />
        <ButtonContainer>
          <button>
            Get Started
            <ArrowContainer>
              <ChevronRightIcon />
            </ArrowContainer>
          </button>
        </ButtonContainer>
      </MailContainer>
    </FormContainer>
  );
};

export default Mailform;
