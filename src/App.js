import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@stripe/stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './components/checkoutForm'
import {Elements} from '@stripe/react-stripe-js';


import {useContext} from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {UserContext} from './context/UserContext';
import Login from './components/Login';
//import Register from './components/Register';
import Register from './components/Signupuser';
//import Register from './components/Registration';


import Home from './components/Home';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import Backend from './components/Backend'
import PaypalComponent from "./components/paypal"
import payment from './pages/payment'
import Newhome from "./pages/Newhome";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout"
import PaymentFailed from "./pages/paymentFailed"

import Downloadfiles from "./pages/Downloadfiles";
import Uploadfiles from "./pages/Uploadfiles";
import Feepayment from "./pages/Feepayment";
import {clientSecure} from "./store/user"

let stripePromise=loadStripe(process.env.REACT_APP_STRIPE_KEY);

function App() {

  const {user,getIntend} = useContext(UserContext); 
  // const paymentIntend=getIntend();
  const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecure,
  };
  return (
    <div className="App">
          <BrowserRouter>
          <Navbar />
            <Routes>  
              { user && (
                <>
                <Route path="/home" element={<Home/>} /> 
                <Route path="/backend" element={<Backend/>} />
                <Route path="/process" element={<Process/>} />
                <Route path="/uploadfiles" element={<Uploadfiles/>} />
                <Route path="/downloadfiles" element={<Downloadfiles/>} />
                <Route path="/feepayment" element={<Feepayment/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path='/payment' element={<payment/>} />
                <Route path='/PaypalComponent' element={<PaypalComponent/>} />
                <Route path="/checkout" element ={<Checkout/>}/>
                <Route path="/paymentFailed" element = {<PaymentFailed/>}/>
                {/* <Route path="/reactjs/" element={<Newhome/>} /> */}
                </>
              )}
              {!user && (
                <>
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Register/>} />
                <Route exact component={Menu} />
                </>
              )}
              <Route path="*" element={<Navigate to={user ? '/process':'/login'} />} />
            </Routes>
            <Footer />
          </BrowserRouter>
    </div>
  );
}

export default App;