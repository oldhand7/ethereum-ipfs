import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer-area-l5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-8 col-12">
            <div className="join-us-content text-center">
              <h2>Many people have joined. When are you joining us?. </h2>
            </div>
          </div>

        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="border border-footer"></div>
          </div>
        </div>

        <div className="row footer-quick-link-area justify-content-lg-center">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="footer-area-list-item">
              <h4>COMPANY BIO</h4>
              <ul className="list-unstyled">
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/">Help Center</Link></li>
                <li><Link to="/">Sales Tools Catalog</Link></li>
                <li><Link to="/">Academy</Link></li>
                <li><Link to="/">Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6">
            <div className="footer-area-list-item">
              <h4>PARTNERSHIP</h4>
              <ul className="list-unstyled">
                <li><Link to="/">Partners</Link></li>
                <li><Link to="/">Peseller Program</Link></li>
                <li><Link to="/">AI Labs</Link></li>
                <li><Link to="/">Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
            <div className="footer-area-list-item">
              <h4>Pages</h4>
              <ul className="list-unstyled">
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/">About us</Link></li>
                <li><Link to="/">Support</Link></li>
                <li><Link to="/">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
