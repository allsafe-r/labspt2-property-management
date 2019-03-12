import React, { Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Stripe = () => {
  const publishableKey = "pk_test_uGZWgKZiorkYlZ8MsxYEIrA2";
   
  const onToken = token => {
    const body = {
      amount: 999,
      token: token
  };
  axios
      .post("http://localhost:9000/payment", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };
  return (
<h1>Test </h1> 
  );
};
export default Stripe;