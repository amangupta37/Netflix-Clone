import React from "react";
import {
  Container,
  PlanConatiner,
  PlanBarConatiner,
  PlanNameConatiner,
  SubscribeConatiner,
} from "./Styles/Style-Plan";

import Plans from "../../fixtures/Plans.json";
const Plan = () => {
  return (
    <Container>
      <PlanConatiner>
        {Plans.map((value) => {
          return (
            <PlanBarConatiner>
              <PlanNameConatiner>
                <h2>{value.plan}</h2>
                <p>{value.screen}</p>
              </PlanNameConatiner>
              <SubscribeConatiner>
                <button>Subscribe</button>
              </SubscribeConatiner>
            </PlanBarConatiner>
          );
        })}
      </PlanConatiner>
    </Container>
  );
};

export default Plan;
