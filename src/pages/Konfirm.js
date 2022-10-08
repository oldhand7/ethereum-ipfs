import React from "react";
//import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import ContactBanner from "../assets/contact_us-banner.jpg";
import "../styles/Konfirm.css";
function Konfirm() {
  return (
    <div className="konfirm">
      <div
        className="konfirmTop"
        style={{ backgroundImage: `url(${ContactBanner})` }} ></div>
   
      <div class="inner_banner contact-us-banner">
        <div class="black_overlay"></div>
        <img alt="" src={ContactBanner} />
        <h2>Process <span>Files</span></h2>
      </div>
    
      <div className="konfirmBottom">
        <h1> KONFIRM US</h1>
        <p>
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit
        </p>
      </div>
    </div>
  );
}

export default Konfirm;
