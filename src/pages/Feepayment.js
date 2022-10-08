import React from "react";
import ContactBanner from "../assets/contact_us-banner.jpg";
function Feepayment() {
  return (
        
        <div class="row">
          <div class="col-sm-3"> </div>
          <div class="col-sm-3">

           PayPal
           <input type="text" class="form-control" />        
           <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
           <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="5835PJEB228QU" />
            <table>
                <tr>
                  <td>
                  <br/><br/>
                    <input type="hidden" name="on0" value="Ethereum File Upload Fee" /><h4>Ethereum File Upload Fee</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" name="os0" maxlength="200" />
                  </td>
                </tr>
            </table>
            <br/><br/>
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>

          <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>

          </div>
          <div class="col-sm-3"> </div>

          
        </div>
      
  );
}

export default Feepayment;
