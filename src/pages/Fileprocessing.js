import React from "react";
import ContactBanner from "../assets/contact_us-banner.jpg";
import "../styles/Fileprocessing.css";
function Fileprocessing() {
  return (
    <div className="fileprocessing">
      <div
        className="fileprocessingTop"
        style={{ backgroundImage: `url(${ContactBanner})` }}>
    </div>

      {/*<h2>File <span>Processing</span></h2>*/}

      <div class="inner_banner contact-us-banner">
        <div class="black_overlay"></div>
        <img height="250px" alt="" src={ContactBanner} />
        <h3>Ethereum-Based File <span>Processing</span></h3>
      </div>
      <br/>


      <div className="fileprocessingBottom">
        <h1> SELECT AN OPTION</h1>
        <br/>
        

        <div class="container">
          <div class="row justify-content-center">
              {/*<button type="button" class="filebtn">&nbsp;&nbsp; Upload File &nbsp;&nbsp;</button>*/}
              <a href="/reactjs/process" type="button" class="filebtn">&nbsp;&nbsp; Upload File &nbsp;&nbsp;</a>
              <div>
              </div>
              {/*<button type="button" class="filebtn">Download File</button>
              <a href="/downloadfiles" class="btn btn-secondary btn-lg" type="button">Download Files</a>*/}
              <a href="/reactjs/downloadfiles" type="button" class="filebtn">Download File</a>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Fileprocessing;
