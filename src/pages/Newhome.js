import React from "react";
import ContactBanner from "../assets/contact_us-banner.jpg";
import Proactive from "../assets/pro-active-icon.png";
import Team from "../assets/our-team-icon.png";
import Support from "../assets/24-support-icon.png";
import Certified from "../assets/certified-icon.png";

import "../styles/Newhome.css";

function Newhome() {
  return (
    <div className="newhome">
      <div
        className="newhomeTop"
        style={{ backgroundImage: `url(${ContactBanner})` }}>
      </div>

      <div class="inner_banner contact-us-banner">
        <div class="black_overlay"></div>
        <img height="250px" alt="" src={ContactBanner} />
        <h3>Ethereum-Based File <span>Processing</span></h3>
      </div>
      <br/>
 
      <div>
          <div class="row justify-content-center">
            <br/>
            <div class="link-center"><h2>Click <a href="login.html">here</a> to login </h2></div>
					  
            {/*Make this page look like this - http://punditsoftech.com/konfirmsite/land.htmlP*/}
            
          </div>
      </div>	

      <div class="grid-container">
        <div class="grid-item">
        <div class="why_box">
                    <img alt="" src={Proactive} />
                    <h3>NFT</h3>
                    <p>
                        Non fungible tokens are a digital asset that represents real world object like arts, music, gaming items and videos. 
                        These items are bought and sold online and are encoded with the same underlying software as several cryptocurrencies.
                    </p>
                  </div>
        </div>
        <div class="grid-item">
                  <div class="why_box">
                    <img alt="" src={Team} />
                    <h3>SCHOOL/BIRTH/MARRIAGE CERTIFICATES</h3>
                    <p>
                      There are innumerable real-world applications for
                      blockchain technology and first movers are establishing
                      themselves now. Altcoins are the natural
                    </p>
                  </div>  
          
        </div>
        <div class="grid-item">
                  <div class="why_box">
                    <img alt="" src={Support} />
                    <h3>CERTIFICATE OF OCCUPANCY</h3>
                    <p>
                      Beyond the Moon Coordinators Simplifying the most Most
                      Exciting Opportunity in Crypto - Launchpads What is a
                      Crypto Launchpad Launchpads introduce new Crypto Tokens to
                      the market providing early access. Beyond the Mood
                      Coordinators specialize in Crypto Launchpads,
                    </p>
                  </div>  
        </div>  
        <div class="grid-item">
                  <div class="why_box">
                    <img alt="" src={Certified} />
                    <h3>ARCHITECTURAL DRAWINGS</h3>
                    <p>
                      Our IT engineers and consultants are trained to remain up
                      to date with the latest technology trends, ensuring the
                      high level of security we provide evolves to mitigate
                      emerging threats.
                    </p>
                  </div>
        </div> 
      </div>
     
    </div>
  );
}

export default Newhome;
