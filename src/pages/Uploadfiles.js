import React, {useState,useContext,useRef} from 'react';
import Select, { components } from "react-select";
import {ethers} from 'ethers';
import Uploadfile_abi from './Uploadfile_abi.json';
import { create } from 'ipfs-http-client';
import "../styles/Uploadfiles.css";
import ContactBanner from "../assets/contact_us-banner.jpg";
import { render } from '@testing-library/react';
import {useNavigate} from 'react-router-dom';
import {UserContext} from '../context/UserContext';
import  { encrypt , decrypt } from 'react-crypt-gsm';
import Tanker from '@tanker/client-browser';
import SimpleCrypto from "simple-crypto-js";

const client = create('https://ipfs.infura.io:5001/api/v0')
const appId = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu';
const Input = (props) => <components.Input {...props} isHidden={false} />;

const Uploadfiles = () => {
	// deploy simple storage contract and paste deployed contract address here. 
  // This value is local ganache chain
	//let contractAddress = '0xCF31E7c9E7854D7Ecd3F3151a9979BC2a82B4fe3';

	//from metamask wallet address: 0xa4bc3d68212dea1a7eb4a4384280f13cad7a9e14
	//communicating with ethereum smart contract on Blockchain: 0x10edb9e33676921E02dCc6e7873171eAc4334401

	let contractAddress = '0x10edb9e33676921E02dCc6e7873171eAc4334401';
  const tanker = new Tanker({ appId });
  var simpleCrypto = new SimpleCrypto(appId);

  //const [keeptagname, setTagname] = useState('');
	const [obtainpagehash, pagehash] = useState(``)
	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	//const [currentContractVal, setCurrentContractVal] = useState(null);

	const [provider, setProvider] = useState(null);
	const [signer, setSigner] = useState(null);
	const [contract, setContract] = useState(null);

  const navigate = useNavigate();

  const {getPayment,user,addHashkey} = useContext(UserContext);
	const [resconnecetd, setConnected] = useState(false);

  const [value, setValue] = useState();
  //const [inputValue, setInputValue] = useState("");
  const [keeptagname, setInputValue] = useState("");
  //const [keeptagname, setTagname] = useState('');
  
  const options = useRef([
    { label: "Birth Certificate", value: 1 },
    { label: "Title Deed", value: 2 },
    { label: "Certificate of Occupancy", value: 3 },
    { label: "Architectural drawing", value: 4 },
    { label: "School Certificate", value: 5 },
    { label: "Marriage certificate", value: 6 },
    { label: "Receipt", value: 7 },
    { label: "Legal / Contractual document", value: 8 }
  ]).current;

  const selectRef = useRef();


	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
				//setConnected(true);
			})
			.catch(error => {
				setErrorMessage(error.message);
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		updateEthers();
	}

	const updateEthers = () => {
		let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
		setProvider(tempProvider);

		let tempSigner = tempProvider.getSigner();
		setSigner(tempSigner);

		let tempContract = new ethers.Contract(contractAddress, Uploadfile_abi, tempSigner);
		setContract(tempContract);	
	}

	/*const getCurrentVal = async () => {
		let val = await contract.get();
		setCurrentContractVal(val);
	}*/
	
	async function onChange(e) {
    const data = await getPayment(user.email);
    console.log("current_payment_status",data);
    // if(data==false){
		// 	alert("You have to update your preminium");
    //   navigate('/feepayment', {replace: true});
		// 	return;
    // }
		// if(!resconnecetd){
		// 	alert("Please Connect To Metamask....");
		// 	return;
		// }
		//const onChange = (e) => {
		//event.preventDefault();
		const file = e.target.files[0]
		try {
		  const added = await client.add(file)
		  let obtainpagehash = `${added.path}`
		  pagehash(obtainpagehash)
      console.log(obtainpagehash);
      const encryptedData = await simpleCrypto.encrypt(obtainpagehash);
      await addHashkey(user.email,keeptagname,encryptedData);
		  // console.log('sending ' + obtainpagehash + ' to the contract');
		  // the fllg fires up Metamask for u to pay gas fee
      contract.set(encryptedData);
		} catch (error) {
		  console.log('Error uploading file: ', error)
		}
	}

  var documentList = [
    {
      value: 1,
      label: "Title Deeds"
    },
    {
      value: 2,
      label: "Birth Certificate"
    },
    {
      value: 3,
      label: "Certificate of Occupancy"
    }
  ];
  //}

  //AY AUGUST 6
  const [documentID, documentvalue] = useState(documentList.label);
  //const documentvalue = useState(documentList.label);

  const documentHandler = e => {
      documentvalue (e.label); 
   }

  const onInputChange = (keeptagname, { action }) => {
      // onInputChange => update inputValue
    if (action === "input-change") {
      setInputValue(keeptagname);
    }
  };

  const onChangeDropdown = (option) => {
    setValue(option);
    setInputValue(option ? option.label : "");
  };

	return (
    <div className="downloadfiles">
        <div
          className="downloadfilesTop"
          style={{ backgroundImage: `url(${ContactBanner})` }}>
        </div>

        <div class="inner_banner contact-us-banner">
          <div class="black_overlay"></div>
          <img height="250px" alt="" src={ContactBanner} />
          <h3>Upload <span>File</span></h3>
        </div>

        {/*<hr />*/}
        <br/>

        <div className="App">	

          {/* AY USE THE FOLLLOWING TO COMMENT OUT THE CONNECT METAMASK BUTTON 07/27/22*/}
          {/*<div class="row">
              <div class="col-sm-3"></div>
              <div class="col-sm-6">
              <button onClick={connectWalletHandler}>{connButtonText}</button>
              {errorMessage}
              </div>
              <div class="col-sm-3"></div>
          </div>
          <br/> */}

          <div class="row">
            <div class="col-sm-3"> </div>

            <div class="col-sm-6"> 
                    
                <h5>Payment of $19.99 received, thank you.</h5>
                <br/>
                <h4>Select Document or Type the Name</h4>

                {/*<Select options={documentList} onChange={documentHandler}/>
                <center>
                  <h1>{documentID}</h1>
                </center>*/}

                  <Select
                    ref={selectRef}
                    options={options}
                    isClearable={true}
                    value={value}
                    inputValue={keeptagname}
                    onInputChange={onInputChange}
                    onChange={onChangeDropdown}
                    //onFocus={onFocus}
                    controlShouldRenderValue={false}
                    components={{
                      Input
                    }}
                  />
                    
            </div>
            <div class="col-sm-3"> </div>
          </div>

          <br/>

          {/*<div class="row">
            <div class="col-sm-3"> </div>
            <div class="col-sm-6"> 
                <label><h5>Enter your file tag name:</h5></label>
                <input type="text" class="form-control" required  value={keeptagname} onChange={(e) => setTagname(e.target.value)} />
            </div>
            <div class="col-sm-3"> </div>
          </div>

          <br/>*/}

          <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
              {/*<label><h3>Click choose file to select your document:</h3></label>*/}
              
               <input class="form-control form-control-lg" id="formFileLg" type="file" onChange={onChange}/>
              <br /> <br/>
               
            </div>
            <div class="col-sm-3"> </div>
          </div>

          <div class="row">
            <div class="col-sm-3"> </div>
            <div class="col-sm-6"> 
            {/*<h3>Output</h3>
            <div>IPFS Hash Stored on Eth Contract (Pls keep it safe): </div>*/}

          {/* {obtainpagehash.length > 1 ? (
          //"Thanks, You have uploaded your file successfully, click here to make payment"
         // window.location.href = "https://paypal.com"
            //window.location.href = "http://punditsoft.com/reactjs/feepayment"
            navigate('/feepayment', {replace: true})
           ) : (
          "Please, upload your file"
          )} */}

          {/*window.location.href = "https://paypal.com"
           <div class="col-sm-3"><a href="https://paypal.com" type='button' class="filebtn">Pay</a> </div>
          */}
            </div>
            <div class="col-sm-3"> </div>
            
          </div>

          <div class="row">
            <div class="col-sm-3"> </div>
            <div class="col-sm-6"> 
                <label><h6>Your file tag name is: &nbsp; &nbsp;</h6></label>
                {keeptagname} 
                {/*{inputValue}*/}
                <br/>
              
               {/*{obtainpagehash ? (<> </>) : (<> </>)} */}

               {obtainpagehash ? (<><h4>File Uploaded Successfully to Ethereum Network.</h4></>) : (<><h4>File Not Yet Uploaded</h4></>)}


               {/* <div>
                  <div>{!obtainpagehash ? "File Not Yet Uploaded" : " "}</div> 
                </div>

                <div>
                  <h3>
                  <div>{!obtainpagehash ? " " : "File Uploaded Successfully to Ethereum Network. "}</div> 
                  </h3>
                </div> */}

                {/*{if(obtainpagehash.length){
                  <label><h6>File Uploaded Successfully</h6></label>
                }
                }*/}

               </div>
            <div class="col-sm-3"> </div>
          </div>

          <br/>
          
		  </div>
      <br/><br/>
		</div>  
  );
}

export default Uploadfiles;