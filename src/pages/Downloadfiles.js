import { useState ,useContext,useEffect} from 'react';
import * as React from 'react';
import ContactBanner from "../assets/contact_us-banner.jpg";
import "../styles/Downloadfiles.css";
import { MDBDataTableV5 } from 'mdbreact';
import {UserContext} from '../context/UserContext';
import { useNavigate  } from 'react-router-dom';
import {currentItem,setCurrentItem} from "../store/user"
import  { encrypt , decrypt } from 'react-crypt-gsm';
import Tanker from '@tanker/client-browser';
import SimpleCrypto from "simple-crypto-js";
const appId = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu';

const Downloadfiles=()=> {

  console.log("starting............");

  var simpleCrypto = new SimpleCrypto(appId);
  const tanker = new Tanker({ appId });
  const navigate = useNavigate();
  const [keephash, setHash] = useState('');
  const {addPayment} = useContext(UserContext);
  const onSubmit = async (event) => {
    //alert(keephash);
    if(!keephash){
      alert("Please enter hash key for the document to download!");
      return;
    }
    event.preventDefault();
    //window.location.href = "https://ipfs.io/ipfs/"+keephash;
    window.location.href = "https://ipfs.infura.io/ipfs/"+keephash;
  };
  const {getHashKeys,user} = useContext(UserContext);
  const [datatable, setDatatable] = React.useState({});
  const [Data,setData] = useState([]);

  let DownloadFile = async(postId) => {
    console.log(Data[postId]['payment'],"paymetn_checkt");
    if(Data[postId]['payment']==0){
      console.log("outpayed")
      await addPayment(Data[postId]['hashkey']);
      Data[postId]['payment']=1;
      setData(Data);
      return ;
    }
    window.open(Data[postId]['hashkeyLink'],"_blank");
  };
  let payWithPaypal = async(postID) =>{
    setCurrentItem(Data[postID]['hashkey'])
    navigate('/PaypalComponent');
  }
  useEffect(async()=>{
    console.log("updated");
    await Data.map((item, index) => {
      item.action = (
        // item.payment==1?
        // (        
        <div style={{ display: "flex", justifyContent: "space-between"}}>
          <div
            className="uil-trash-alt"
            style={{
              cursor: "pointer",
              color: "white",
              backgroundColor:"green",
              fontSize: ".9em",
              padding: ".5rem",
              borderRadius: ".3rem",
              width:100,
              textAlign: "center",
            }}
            onClick={() => DownloadFile(index)}
          >
            Download
          </div>
        </div>
      //   )
      //   :(
      //   <div style={{ display: "flex", justifyContent: "space-between"}}>
      //   <div
      //     className="uil-trash-alt"
      //     style={{
      //       cursor: "pointer",
      //       color: "white",
      //       backgroundColor:"blue",
      //       fontSize: ".9em",
      //       width:100,
      //       padding: ".5rem",
      //       borderRadius: ".3rem",
      //       textAlign: "center",
      //     }}
      //     onClick={() => payWithPaypal(index)}
      //   >
      //     Pay
      //   </div>
      // </div>)
      );
    });
    const rlt = {
    columns: [
        {
          //label: 'ID',
          //field: 'id',
          width: 200,
        },
        {
          //label: 'ID',
          //field: 'id',
          width: 200,
        },
        {
            label: 'Name',
            field: 'name',
            width: 150,
            attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
            },
        },
        {
            label: 'Action',
            field: 'action',
            sort: 'disabled',
            width: 150,
        },
        ],
        rows: Data,
    }
    setDatatable(rlt);  
  },[Data])
  useEffect(async () => {
      const data = await getHashKeys(user.email);
      await data.map(async (item)=>{
        const curHash = item['hashkey'];
        const clearText = simpleCrypto.decrypt(curHash);
        console.log(clearText)
        //item['hashkeyLink']="https://ipfs.io/ipfs/"+clearText;
        item['hashkeyLink']="https://ipfs.infura.io/ipfs/"+clearText;
        //window.location.href = "https://ipfs.infura.io/ipfs/"+keephash;
      });
      setData(data);
  }, []);

  return (
    <div className="downloadfiles">
      <div
        className="downloadfilesTop"
        style={{ backgroundImage: `url(${ContactBanner})` }}
      ></div>

      {/*<h2>File <span>Processing</span></h2>*/}

      <div class="inner_banner contact-us-banner">
        <div class="black_overlay"></div>
        <img height="250px" alt="" src={ContactBanner} />
        <h3>Download <span>File</span></h3>
      </div>
      <div className="downpcontainer">
             <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />
      </div>      
      {/* <div class="row">
      <div class="col-sm-3"> </div>
      <div class="col-sm-6">
        <Form onSubmit={onSubmit}>
        <label><h4><b>Enter your retrieval code:</b></h4></label>
         <input type="text" class="form-control" id="uname" name="uname" required  value={keephash} onChange={(e) => setHash(e.target.value)} />
        <div class="col-sm-3"> <Button id="whiteButton" type='submit'>Submit</Button> </div>
        <br /> <br /> <br /> <br />
        </Form>
      </div>
      </div> */}
    </div>
  );
}

export default Downloadfiles;
