import {React, useState, useRef, useReducer} from "react";
import { Container, Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/esm/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Card from 'react-bootstrap/Card';
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from '../context/UserContext';
import { useMemo } from "react";
import Select from "react-select";
import countryListing from "react-select-country-list";

  //const Signupuser = (props) => {
  //const [showMessage, setShowMsg] = useState(false);
  //const emailRef = useRef()
  //const formGridZip = useRef()

  const Signupuser = () => {
  const {registerUser, wait} = useContext(UserContext);
  const [form, setForm] = useState({})  
  const [errors, setErrors] = useState(false)
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorname, seterrorname] = useState(false);
  const [errorlastname, seterrorlastname] = useState(false);
  const [erroremail, seterroremail] = useState(false);
  const [errorpass, seterrorpass] = useState(false);
  const [errorpassretyped, seterrorpassretyped] = useState(false);
  const [erroradd, seterroradd] = useState(false);
  const [errorcountry, seterrorcountry] = useState(false);
  const [errorstate, seterrorstate] = useState(false);
  const [errorphone, seterrorphone] = useState(false);
  const [errorzip, seterrorzip] = useState(false);
  const [formCurrentCountry, setValue] = useState("");
  const options = useMemo(() => countryListing().getData(), []);
  //const [field, setallField] = useState('')
    
  //const formGridName = useRef(null);
  
    const formGridName = useRef(null);
    const formGridEmail = useRef(null);
    const formGridPassword = useRef(null);
    const formPasswordRetyped = useRef(null);
    const formGridAddress1 = useRef(null);
    const formGridPhone = useRef(null);
    //const formGridLastName = useRef(null);
    const formLastName = useRef(null);
    const formGridZip = useRef(null);
    const formGridCountry = useRef(null);

    const setField = (field,value) => {
    setForm({
        ...form,
        [field]:value
    })

    if(!!errors[field])
    setErrors({
    ...errors,
    [field]:null
    })
    }  

    {/*front end validation */}
    const validateForm = () => {
            const {formGridName, formLastName, formGridPhone, formGridEmail, formGridPassword,formPasswordRetyped,formGridAddress1,formGridCountry,formGridState} = form
            let newErrors = [];
            if(!formGridName || formGridName === '') seterrorname('Please enter your firstname');
            if(!formGridEmail || formGridEmail === '') seterroremail('Please enter your e-mail');
            if(!formGridPassword || formGridPassword === '') seterrorpass('Please enter your pasword');
            if(!formPasswordRetyped || formPasswordRetyped === '') seterrorpassretyped('Please check your re-typed pasword');
            if(!formGridAddress1 || formGridAddress1 === '') seterroradd('Please enter your address');
            if(!formGridCountry || formGridCountry === '') seterrorcountry('Please enter your country');
            if(!formGridState || formGridState === '') seterrorstate('Please enter your state/province');
            if(!formGridPhone || formGridPhone === '') seterrorphone('Please enter your phone #');
            if(!formLastName || formLastName === '') seterrorlastname('Please enter your lastname');

            //alert("signupuser validate " + formGridCountry);
            //alert("signupuser Country.name " + form.country.name);

            //var string1 = "Hello World";
            //var string2 = "Hello world.";
            if (formGridPassword === formPasswordRetyped) {
                //console.log("Matching strings!");
            }
            else {
                //console.log("Strings do not match");
                seterrorpass('Please make sure your paswords are matching');
                seterrorpassretyped('Please make sure your paswords are matching');
            }

            return newErrors; 
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formErrors = validateForm()
  
        if(Object.keys(formErrors).length > 0 ){
            setErrors(formErrors);
            setErrors('Please Fill in all Required Fields!');
        }else{        
            const data = await registerUser(form);
            if(data.success){
              //e.target.reset();
                setSuccessMsg('You have successfully registered.');
                setErrors(false);
                seterrorname('');
                seterroremail('');
                seterrorpass('');
                seterrorpassretyped('');
                seterroradd('');
                seterrorcountry('');
                seterrorstate('');
                seterrorphone('');
                seterrorlastname('');
                formGridName.current.value = ''; 
                formGridEmail.current.value = '';
                formGridPassword.current.value = ''; 
                formPasswordRetyped.current.value = '';
                formGridAddress1.current.value = ''; 
                formGridPhone.current.value = ''; 
                formLastName.current.value = ''; 
                formGridZip.current.value = ''; 
            }
            else if(!data.success && data.message){
                setSuccessMsg(false);
                setErrors(data.message);
            }
            //alert(form.formGridEmail);
            //alert(form.formGridPassword);
            //alert(form.formGridAddress1);
            //console.log("Form Submitted");
            //console.log(form);
        }

    }

    //const changeHandler = (formCurrentCountry) => {
        //setValue(formCurrentCountry);
        //alert("changeHandler country Label - form " + form.formCurrentCountry.label);
        ///alert("changeHandler country ID - form " + form.formCurrentCountry.value);
        //alert("changeHandler country Label " + formCurrentCountry.label);
       // alert("changeHandler country ID " + formCurrentCountry.value);
    //};

    const countryList = [
        {name: "Singapore",code: "SG"},
        {name: "India",code: "IN"},
        {name: "USA",code: "US"},
        {name: "Afghanistan",code: "AF"},
        {name: "Albania",code: "AL"},
        {name: "Algeria",code: "DZ"},
        {name: "American Samoa",code: "AS"},
        {name: "Andorra",code: "AD"},
        {name: "Angola",code: "AO"},
        {name: "Anguilla",code: "AI"},
        {name: "Antarctica",code: "AQ"},
        {name: "Antigua and Barbuda",code: "AG"},
        {name: "Armenia",code: "AR"},
        {name: "Aruba",code: "AW"},
        {name: "Australia",code: "AU"},
        {name: "Austria",code: "AT"},
        {name: "Azerbaijan",code: "AZ"},
        {name: "Bahamas (the)",code: "BS"},
        {name: "Bahrain",code: "BH"},
        {name: "Bangladesh",code: "BD"},
        {name: "Barbados",code: "BB"},
        {name: "Belarus",code: "BY"},
        {name: "Belgium",code: "BE"},
        {name: "Belize",code: "BZ"},
        {name: "Benin",code: "BJ"},
        {name: "Bermuda",code: "BM"},
        {name: "Bhutan",code: "BT"},
        {name: "Bolivia (Plurinational State of)",code: "BO"},
        {name: "Bonaire, Sint Eustatius and Saba",code: "BQ"},
        {name: "Bosnia and Herzegovina",code: "BA"},
        {name: "Botswana",code: "BW"},
        {name: "Bouvet Island ",code: "BV"},
        {name: "Brazil",code: "BR"},
        {name: "British Indian Ocean Territory (the)",code: "IO"},
        {name: "Brunei Darussalam ",code: "BN"},
        {name: "Bulgaria",code: "BG"},
        {name: "Burkina Faso",code: "BF"},
        {name: "Burundi",code: "BI"},
        {name: "Cabo Verde",code: "CV"},
        {name: "Cambodia",code: "KH"},
        {name: "Cameroon",code: "CM"},
        {name: "Canada",code: "CA"},
        {name: "Cayman Islands (the)",code: "KY"},
        {name: "Central African Republic (the)",code: "CF"},
        {name: "Chad",code: "TD"},
        {name: "Chile",code: "CL"},
        {name: "China",code: "CN"},
        {name: "Christmas Island",code: "CX"},
        {name: "Cocos (Keeling) Islands (the) ",code: "CC"},
        {name: "Colombia",code: "CO"},
        {name: "Comoros (the)",code: "KM"},
        {name: "Congo (the Democratic Republic of the)",code: "CD"},
        {name: "Congo (the)",code: "CG"},
        {name: "Cook Islands (the",code: "CK"},
        {name: "Costa Rica",code: "CR"},
        {name: "Croatia",code: "HR"},
        {name: "Cuba",code: "CU"},
        {name: "CuraÃ§ao",code: "CW"},
        {name: "Cyprus",code: "CY"},
        {name: "Czechia",code: "CZ"},
        {name: "CÃ´te d'Ivoire",code: "CI"},
        {name: "Denmark",code: "DK"},
        {name: "Djibouti",code: "DJ"},
        {name: "Dominica",code: "DM"},
        {name: "Dominican Republic (the)",code: "DO"},
        {name: "Ecuador",code: "EC"},
        {name: "Egypt",code: "EG"},
        {name: "El Salvador",code: "SV"},
        {name: "Equatorial Guinea",code: "GQ"},
        {name: "Eritrea",code: "ER"},
        {name: "Estonia",code: "EE"},
        {name: "Eswatini",code: "SZ"},
        {name: "Ethiopia",code: "ET"},
        {name: "Falkland Islands (the) [Malvinas]",code: "FK"},
        {name: "Faroe Islands (the)",code: "FO"},
        {name: "Fiji",code: "FJ"},
        {name: "Finland",code: "FI"},
        {name: "France",code: "FR"},
        {name: "French Guiana",code: "GF"},
        {name: "French Polynesia",code: "PF"},
        {name: "French Southern Territories (the)",code: "TF"},
        {name: "Gabon",code: "GA"},
        {name: "Gambia (the)",code: "GM"},
        {name: "Georgia",code: "GE"},
        {name: "Germany",code: "DE"},
        {name: "Ghana",code: "GH"},
        {name: "Gibraltar",code: "GI"},
        {name: "Greece",code: "GR"},
        {name: "Greenland",code: "GL"},
        {name: "Grenada",code: "GD"},
        {name: "Guadeloupe",code: "GP"},
        {name: "Guam",code: "GU"},
        {name: "Guatemala",code: "GT"},
        {name: "Guernsey",code: "GG"},
        {name: "Guinea",code: "GN"},
        {name: "Guinea-Bissau",code: "GW"},
        {name: "Guyana",code: "GY"},
        {name: "Haiti",code: "HT"},
        {name: "Heard Island and McDonald Islands",code: "HM"},
        {name: "Holy See (the)",code: "VA"},
        {name: "Honduras",code: "HN"},
        {name: "Hong Kong",code: "HK"},
        {name: "Hungary",code: "HU"},
        {name: "Iceland",code: "IN"},
        {name: "Indonesia",code: "ID"},
        {name: "Iran (Islamic Republic of)",code: "IR"},
        {name: "Iraq",code: "IQ"},
        {name: "Ireland",code: "IE"},
        {name: "Isle of Man",code: "IM"},
        {name: "Israel",code: "IL"},
        {name: "Italy",code: "IT"},
        {name: "Jamaica",code: "JM"},
        {name: "Japan",code: "JP"},
        {name: "Jersey",code: "JE"},
        {name: "Jordan",code: "JO"},
        {name: "Kazakhstan",code: "KZ"},
        {name: "Kenya",code: "KE"},
        {name: "Kiribati",code: "KI"},
        {name: "Korea (the Democratic People's Republic of)",code: "KP"},
        {name: "Korea (the Republic of)",code: "KR"},
        {name: "Kuwait",code: "KW"},
        {name: "Kyrgyzstan",code: "KG"},
        {name: "Lao People's Democratic Republic (the)",code: "LA"},
        {name: "Latvia",code: "LV"},
        {name: "Lebanon",code: "LB"},
        {name: "Lesotho",code: "LS"},
        {name: "Liberia",code: "LR"},
        {name: "Libya",code: "LY"},
        {name: "Liechtenstein",code: "LI"},
        {name: "Lithuania",code: "LT"},
        {name: "Luxembourg",code: "LU"},
        {name: "Macao",code: "MO"},
        {name: "Madagascar",code: "MG"},
        {name: "Malawi",code: "MW"},
        {name: "Malaysia",code: "MY"},
        {name: "Maldives",code: "MV"},
        {name: "Mali  ",code: "ML"},
        {name: "Malta",code: "MT"},
        {name: "Marshall Islands (the)",code: "MH"},
        {name: "Martinique",code: "MQ"},
        {name: "Mauritania",code: "MR"},
        {name: "Mauritius",code: "MU"},
        {name: "Mayotte",code: "YT"},
        {name: "Mexico",code: "MX"},
        {name: "Micronesia (Federated States of)",code: "FM"},
        {name: "Moldova (the Republic of)",code: "MD"},
        {name: "Monaco",code: "MC"},
        {name: "Mongolia",code: "MN"},
        {name: "Montenegro",code: "ME"},
        {name: "Montserrat",code: "MS"},
        {name: "Morocco",code: "MA"},
        {name: "Mozambique",code: "MZ"},
        {name: "Myanmar",code: "MM"},
        {name: "Namibia",code: "NA"},
        {name: "Nauru",code: "NR"},
        {name: "Nepal",code: "NP"},
        {name: "Netherlands (the)",code: "NL"},
        {name: "New Caledonia",code: "NC"},
        {name: "New Zealand",code: "NZ"},
        {name: "Nicaragua",code: "NI"},
        {name: "Niger (the)",code: "NE"},
        {name: "Nigeria",code: "NG"},
        {name: "Niue",code: "NU"},
        {name: "Norfolk Island",code: "NF"},
        {name: "Northern Mariana Islands (the)",code: "MP"},
        {name: "Norway",code: "NO"},
        {name: "Oman",code: "OM"},
        {name: "Pakistan",code: "PK"},
        {name: "Palau",code: "PW"},
        {name: "Palestine, State of",code: "PS"},
        {name: "Panama",code: "PA"},
        {name: "Papua New Guinea",code: "PG"},
        {name: "Paraguay",code: "PY"},
        {name: "Peru",code: "PE"},
        {name: "Philippines (the)",code: "PH"},
        {name: "Pitcairn",code: "PN"},
        {name: "Poland",code: "PL"},
        {name: "Portugal",code: "PT"},
        {name: "Puerto Rico",code: "PR"},
        {name: "Qatar",code: "QA"},
        {name: "Republic of North Macedonia",code: "MK"},
        {name: "Romania",code: "RO"},
        {name: "Russian Federation (the)",code: "RU"},
        {name: "Rwanda",code: "RW"},
        {name: "RÃ©union",code: "RE"},
        {name: "Saint BarthÃ©lemy",code: "BL"},
        {name: "Saint Helena, Ascension and Tristan da Cunha",code: "SH"},
        {name: "Saint Kitts and Nevis",code: "KN"},
        {name: "Saint Lucia",code: "LC"},
        {name: "Saint Martin (French part)",code: "MF"},
        {name: "Saint Pierre and Miquelon",code: "PM"},
        {name: "Saint Vincent and the Grenadines",code: "VC"},
        {name: "Samoa",code: "WS"},
        {name: "San Marino",code: "SM"},
        {name: "Sao Tome and Principe",code: "ST"},
        {name: "Saudi Arabia",code: "SA"},
        {name: "Senegal",code: "SN"},
        {name: "Serbia",code: "RS"},
        {name: "Seychelles",code: "SC"},
        {name: "Sierra Leone",code: "SL"},
        {name: "Singapore",code: "SG"},
        {name: "Sint Maarten (Dutch part)",code: "SX"},
        {name: "Slovakia",code: "SK"},
        {name: "Slovenia",code: "SI"},
        {name: "Solomon Islands",code: "SB"},
        {name: "Somalia",code: "SO"},
        {name: "South Africa",code: "ZA"},
        {name: "South Georgia and the South Sandwich Islands",code: "GS"},
        {name: "South Sudan",code: "SS"},
        {name: "Spain",code: "ES"},
        {name: "Sri Lanka",code: "LK"},
        {name: "Sudan (the)",code: "SD"},
        {name: "Suriname",code: "SR"},
        {name: "Svalbard and Jan Mayen",code: "SJ"},
        {name: "Sweden",code: "SE"},
        {name: "Switzerland",code: "CH"},
        {name: "Syrian Arab Republic",code: "SY"},
        {name: "Taiwan (Province of China)",code: "TW"},
        {name: "Tajikistan",code: "TJ"},
        {name: "Tanzania, United Republic of",code: "TZ"},
        {name: "Thailand",code: "TH"},
        {name: "Timor-Leste",code: "TL"},
        {name: "Togo",code: "TG"},
        {name: "Tokelau",code: "TK"},
        {name: "Tonga",code: "TO"},
        {name: "Trinidad and Tobago",code: "TT"},
        {name: "Tunisia",code: "TN"},
        {name: "Turkey",code: "TR"},
        {name: "Turkmenistan",code: "TM"},
        {name: "Turks and Caicos Islands (the)",code: "TC"},
        {name: "Tuvalu",code: "TV"},
        {name: "Uganda",code: "UG"},
        {name: "Ukraine",code: "UA"},
        {name: "United Arab Emirates (the)",code: "AE"},
        {name: "United Kingdom of Great Britain and Northern Ireland (the)",code: "GB"},
        {name: "United States Minor Outlying Islands (the)",code: "UM"},
        {name: "United States of America (the)",code: "US"},
        {name: "Uruguay",code: "UY"},
        {name: "Uzbekistan",code: "UZ"},
        {name: "Vanuatu",code: "VU"},
        {name: "Venezuela (Bolivarian Republic of)",code: "VE"},
        {name: "Viet Nam",code: "VN"},
        {name: "Virgin Islands (British)",code: "VG"},
        {name: "Virgin Islands (U.S.)",code: "VI"},
        {name: "Wallis and Futuna",code: "WF"},
        {name: "Western Sahara",code: "EH"},
        {name: "Yemen",code: "YE"},
        {name: "Zambia",code: "ZM"},
        {name: "Zimbabwe",code: "ZW"},
        {name: "Ã…land Islands",code: "AX"},
      ];
      

    const stateList = [
    {name: "Ekiti",code: "Ekiti"},  
    {name: "Lagos",code: "Lagos"},  
    {name: "Osun",code: "Osun"},  
    {name: "Saskatchewan",code: "Saskatchewan"},  
    ];
    
    return (
        <Container className="p-3">
            <Form>
            <br/><br/><br/>
            <Card className="text-left">
            <Card.Header>Registration Form</Card.Header>
            <Card.Body>
            {/*<Card.Title> </Card.Title>*/}
            <Card.Text>                  
			  <Row>
				<Col>
                    <Row>
                        <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Firstname</Form.Label>
                        {/*<Form.Control type="email" placeholder="Enter name" onChange={e=>console.log(e.target.value)}/>*/}
                        <Form.Control type="text" placeholder="" value = {form.formGridName} ref={formGridName}
                        onChange={ (e) => setField('formGridName', e.target.value)} 
                        isInvalid={!!errorname} />
                        <Form.Control.Feedback type='invalid'>
                            {errorname}
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formLastName">
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control placeholder="" value = {form.formLastName} ref={formLastName}
                            onChange={ (e) => setField('formLastName', e.target.value)} 
                            isInvalid={!!errorlastname} />
                            <Form.Control.Feedback type='invalid'>
                                {errorlastname}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control placeholder="" value = {form.formGridPhone} ref={formGridPhone}
                            onChange={ (e) => setField('formGridPhone', e.target.value)} 
                            isInvalid={!!errorphone} />
                            <Form.Control.Feedback type='invalid'>
                                {errorphone}
                            </Form.Control.Feedback>
                        </Form.Group>

                    </Row>

                    <Row className="mb-3 new2">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            {/*<Form.Control type="email" placeholder="Enter email" onChange={e=>console.log(e.target.value)}/>*/}
                            <Form.Control type="email" placeholder="" value = {form.formGridEmail} ref={formGridEmail}
                            onChange={ (e) => setField('formGridEmail', e.target.value)} 
                            isInvalid={!!erroremail} />
                            <Form.Control.Feedback type='invalid'>
                                {erroremail}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="" value = {form.formGridPassword} ref={formGridPassword}
                            onChange={ (e) => setField('formGridPassword', e.target.value)} 
                            isInvalid={!!errorpass} />
                            <Form.Control.Feedback type='invalid'>
                                {errorpass}
                            </Form.Control.Feedback>
                        </Form.Group> 

                        <Form.Group as={Col} controlId="formPasswordRetyped">
                            <Form.Label>Retype Password</Form.Label>
                            <Form.Control type="password" placeholder="" value = {form.formPasswordRetyped} ref={formPasswordRetyped}
                            onChange={ (e) => setField('formPasswordRetyped', e.target.value)} 
                            isInvalid={!!errorpassretyped} />
                            <Form.Control.Feedback type='invalid'>
                                {errorpassretyped}
                            </Form.Control.Feedback>
                        </Form.Group>

                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="" value = {form.formGridAddress1} ref={formGridAddress1}
                            onChange={ (e) => setField('formGridAddress1', e.target.value)} 
                            isInvalid={!!erroradd} />
                            <Form.Control.Feedback type='invalid'>
                                {erroradd}
                            </Form.Control.Feedback>
                        </Form.Group>
                         
                    </Row>

                    <Row className="mb-3  new3">
                        <Form.Group as={Col} controlId="formGridCountry">
                        <Form.Label>Country</Form.Label>

                        <Form.Control
                            as="select"
                            className="rounded-0 shadow"
                            onChange={ (e) => setField('formGridCountry', e.target.value)}
                        >
                            <option className="d-none" value="">
                            Select Country
                            </option>
                            {countryList.map((country, key) => (
                            <option key={key} title={country.code} value={country.name}>
                                {country.name}
                            </option>
                            ))}
                        </Form.Control>

                        <Form.Control.Feedback type='ivalid'>
                            {errorcountry}
                        </Form.Control.Feedback>
                        </Form.Group>

                        {/*className="rounded-0 shadow"*/}
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            as="select"
                            onChange={ (e) => setField('formGridState', e.target.value)}
                        >
                            <option className="d-none" value="">
                            .....
                            </option>
                            {stateList.map((state, key) => (
                            <option key={key} title={state.code} value={state.name}>
                                {state.name}
                            </option>
                            ))}
                        </Form.Control>
                        <Form.Control.Feedback type='invalid'>
                            {errorstate}
                        </Form.Control.Feedback>
                        </Form.Group>   


                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip/Postal Code</Form.Label>
                            <Form.Control placeholder="" value = {form.formGridZip} ref={formGridZip}
                            onChange={ (e) => setField('formGridZip', e.target.value)} 
                            isInvalid={!!errorzip} />
                            <Form.Control.Feedback type='invalid'>
                                {errorzip}
                            </Form.Control.Feedback>
                        </Form.Group>

                    </Row>

					{/*<Form.Group id="formGridCheckbox">
					  <Form.Check type="checkbox" label="Check me out" />
					</Form.Group>*/}  
                      
                    <Row className="mb-3 new7">

                        {/*<Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                          </Form.Group>*/}
                        
                        <Form.Group controlId="submit">

                        {successMsg && <div className="success-msg">{successMsg}</div>}
                        {errors && <div className="err-msg">{errors}</div>}

                        <div class="sub-here">
                            <Button variant="primary" type="submit" onClick={handleSubmit}>
                                Submit Form
                            </Button>
                        </div>

                        <div className="bottom-link"><Link to="/login">Login</Link></div>
                        
                        </Form.Group>
                    </Row>

				</Col>
			  </Row>
            </Card.Text>             
            </Card.Body>
            {/*<Card.Footer className="text-muted"> </Card.Footer>*/}		
            </Card>	
            </Form>
		</Container>
	  );
  }
export default Signupuser;

    
