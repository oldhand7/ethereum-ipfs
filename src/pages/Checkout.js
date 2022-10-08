import { useEffect, useState,useContext } from "react";

import { loadStripe } from "@stripe/stripe-js";
import CardIcon from "../images/credit-card.svg";
import ProductImage from "../images/product-image.jpg";
import {Elements} from '@stripe/react-stripe-js';
import {UserContext} from '../context/UserContext';
import "../styles.css";
import {clientSecure} from "../store/user"
import CheckoutForm from '../components/checkoutForm'
let stripePromise=loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Checkout = () => {
  const {user,getIntend} = useContext(UserContext); 
  // const paymentIntend=getIntend();
  
  const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecure,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;
