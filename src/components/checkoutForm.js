import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate  } from 'react-router-dom';
import {UserContext} from '../context/UserContext';
import {useContext} from 'react'

const CheckoutForm = () => {

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const {user,getIntend} = useContext(UserContext); 

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        // Return URL where the customer should be redirected after the PaymentIntent is confirmed.
        return_url: 'https://example.com',
        payment_method_data: {
          billing_details: {
            name: user.name,
            email: user.email,
          },
        },
      },
      redirect: "if_required"
    });
    if (result.error) {
      navigate('/paymentFailed');
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // navigate('/paymentFailed');
     navigate('/uploadfiles');
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  return (
    <form className="rcontainer" onSubmit={handleSubmit}>
      <div><h4>You are paying $9.99 only</h4></div>
      <div><h3></h3></div>
      <br/>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;