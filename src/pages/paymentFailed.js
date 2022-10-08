import React from "react";
import ContactBanner from "../assets/contact_us-banner.jpg";
import "../styles/Process.css";
import { useNavigate  } from 'react-router-dom';
//import { Button, Form } from 'react-bootstrap';
const PaymentFailed = () =>{

  const navigate = useNavigate();

  const toCheckout = async () => {
    navigate('/process');
  }
  return (
    <div className="process">
      <div
        className="processTop"
        style={{ backgroundImage: `url(${ContactBanner})` }}
      ></div>

      {/*<h2>File <span>Processing</span></h2>*/}

      <div class="inner_banner contact-us-banner">
        <div class="black_overlay"></div>
        <img height="250px" alt="" src={ContactBanner} />
        <h3>Payment <span>Failed</span></h3>
      </div>
      <div className="processBottom">
        
        <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-sm-3"><div onClick={toCheckout} type='button' class="filebtn">Return</div> </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentFailed;
