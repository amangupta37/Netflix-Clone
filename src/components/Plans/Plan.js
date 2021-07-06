import React, { useState } from "react";
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
  const [subsrcibed, setSubsrcibed] = useState(
    JSON.parse(localStorage.getItem("Paymentdata"))
  );

  let SubscriptionType;

  const paymentMode = (id) => {
    SubscriptionType = id;
  };

  const userToken = (token, address, kid) => {
    localStorage.setItem("Paymentdata", SubscriptionType);
    setSubsrcibed(SubscriptionType);
  };

  console.log(subsrcibed);
  return (
    <Container>
      <PlanConatiner>
        {Plans.map((value, index) => {
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
                  {subsrcibed === index ? (
                    <button id="btn">Subscribed</button>
                  ) : (
                    <button onClick={() => paymentMode(index)}>
                      Subscribe
                    </button>
                  )}
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
