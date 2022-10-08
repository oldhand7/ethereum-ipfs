import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { useNavigate  } from 'react-router-dom';

function Footer() {
  return (
  <div className="footer-area-l5">
   {/* comment out this one from raw HTML page - <footer class="footer-area-l5">*/}
      <div className="container">
	  
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 col-md-8 col-12">
              <div class="join-us-content text-center">
                <h2>Many people have joined. When are you joining us?</h2>
              </div>
           </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="border border-footer"></div>
            </div>
          </div>
		  
		  
          <div class="row footer-quick-link-area justify-content-lg-center">

            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="footer-area-list-item">
                <h4>HELP</h4>
                <ul class="list-unstyled">
                  {/* link below isworking, do for others*/}
                   <li><Link to="/downloadfiles">Help Center</Link></li>
				          <li><a href="#">Terms of Service</a></li> 
                </ul>
              </div>
            </div>
			
            <div class="col-xl-3 col-lg-2 col-md-4 col-sm-6">
              <div class="footer-area-list-item">
                <h4>FAQs</h4>
                <ul class="list-unstyled">
                  <li><Link to="/downloadfiles">FAQs</Link></li>
                </ul>
              </div>
            </div>
			
            <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <div class="footer-area-list-item">
                <h4>Pages</h4>
                <ul class="list-unstyled">
                <li><a href="#">Privacy Policy</a></li> 
				        <li><a href="#">Copyright Policy</a></li>                  
                </ul>
              </div>
            </div>
            
          </div>
    {/*addedd extra </div> below*/}	  
	</div>  
 </div> 

  );
}

export default Footer;
