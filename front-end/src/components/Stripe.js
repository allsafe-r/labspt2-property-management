// import React from "react";
// import StripeCheckout from "react-stripe-checkout";
// import axios from "axios";

// const Stripe = () => {
//     const publishableKey = "pk_test_uGZWgKZiorkYlZ8MsxYEIrA2";
     
//     const onToken = token => {
//       const body = {
//         amount: 999,
//         token: token
//     };
//     axios
//         .post("http://localhost:9000/payment", body)
//         .then(response => {
//           console.log(response);
//           alert("Payment Success");
//         })
//         .catch(error => {
//           console.log("Payment Error: ", error);
//           alert("Payment Error");
//         });
//     };
//     return (
//       <StripeCheckout
//       label="Pay with 💳"
//       name="Tenantly, LLC"
//       description="Upgrade to a premium account today."
//       panelLabel="Go Premium" 
//       amount={999} 
//       token={onToken}
//       stripeKey={publishableKey}
//       image="https://i.ibb.co/L1sx35T/sd.jpg"
//       billingAddress={false}
//     />
//         );
//       };

// export default Stripe;
