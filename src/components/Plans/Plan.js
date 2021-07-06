import React from "react";
import {
  Container,
  PlanConatiner,
  PlanBarConatiner,
  PlanNameConatiner,
  SubscribeConatiner,
} from "./Styles/Style-Plan";
import Stripe from "react-stripe-checkout";
import Plans from "../../fixtures/Plans.json";
const Plan = () => {
  const paymentMode = () => {
    console.log("click ");
  };

  const userToken = (token, address) => {
    console.log(token, address);
  };

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

              <Stripe
                id="payment"
                stripeKey="pk_test_51JA4VISHSPrBXKmdl3YyUIWRDNukFeWzMuOx8oNcsSsBxk9RcMUH0T9oWNEWY32I3HHwFP3ERHuohBwVJ4yTE1QF00jzPiqi2G"
                token={userToken}
                amount={value.amount}
                currency="inr"
              >
                <SubscribeConatiner>
                  <button>Subscribe</button>
                </SubscribeConatiner>
              </Stripe>
            </PlanBarConatiner>
          );
        })}
      </PlanConatiner>
    </Container>
  );
};

export default Plan;
