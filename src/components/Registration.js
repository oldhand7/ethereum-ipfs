import React, {useContext,useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import FormContainer from './FormContainer'
import {UserContext} from '../context/UserContext';
//import { Typehead } from 'react-bootstrap-typehead'
//import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
//import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Registration = () => {
    const {registerUser, wait} = useContext(UserContext);
  const [form, setForm] = useState({})  
  const [errors, setErrors] = useState(false)
    const [successMsg, setSuccessMsg] = useState(false);
    const [errorname, seterrorname] = useState(false);
    const [erroremail, seterroremail] = useState(false);
    const [errorpass, seterrorpass] = useState(false);
    const [erroradd, seterroradd] = useState(false);
    const [errorcountry, seterrorcountry] = useState(false);
    const [errorstate, seterrorstate] = useState(false);
  //const [field, setallField] = useState('')

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

const validateForm = () => {
          const {formGridName, formGridEmail, formGridPassword,formGridAddress1,formGridCountry,formGridState} = form
          let newErrors = [];

           if(!formGridName || formGridName === '') seterrorname('Please enter ur name');
          if(!formGridEmail || formGridEmail === '') seterroremail('Please enter ur e-mail');
          if(!formGridPassword || formGridPassword === '') seterrorpass('Please enter ur pasword');
          if(!formGridAddress1 || formGridAddress1 === '') seterroradd('Please enter ur address');
          if(!formGridCountry || formGridCountry === '') seterrorcountry('Please enter ur country');
          if(!formGridState || formGridState === '') seterrorstate('Please enter ur state');

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
        }
        else if(!data.success && data.message){
            setSuccessMsg(false);
            setErrors(data.message);
        }
        /*alert(form.formGridEmail);
        alert(form.formGridPassword);
        alert(form.formGridAddress1);
        console.log("Form Submitted");
        console.log(form);*/

    }
}


const countryList = [
  {name: "Singapore",code: "SG"},  
  {name: "India",code: "IN"},  
  {name: "USA",code: "US"},  
];

const stateList = [
  {name: "Punjab",code: "Punjab"},  
  {name: "Haryana",code: "Haryana"},  
  {name: "Himachal",code: "Himachal"},
  {name: "Saskatchewan",code: "Saskatchewan"},   
];

  return (
    <FormContainer>
    <div class="second">
        <Form>
       

        <Row className="mb-3 new1">
            <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            {/*<Form.Control type="email" placeholder="Enter name" onChange={e=>console.log(e.target.value)}/>*/}
            <Form.Control type="text" placeholder="Enter Name" value = {form.formGridName}
            onChange={ (e) => setField('formGridName', e.target.value)} 
            isInvalid={!!errorname} />
            <Form.Control.Feedback type='ivalid'>
                {errorname}
            </Form.Control.Feedback>
            </Form.Group>
            
        </Row>

        <Row className="mb-3 new2">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            {/*<Form.Control type="email" placeholder="Enter email" onChange={e=>console.log(e.target.value)}/>*/}
            <Form.Control type="email" placeholder="Enter email" value = {form.formGridEmail}
            onChange={ (e) => setField('formGridEmail', e.target.value)} 
            isInvalid={!!erroremail} />
            <Form.Control.Feedback type='ivalid'>
                {errorname}
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
        </Row>

        <Row className="mb-3  new4">
            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
                as="select"
                className="rounded-0 shadow"
                onChange={ (e) => setField('formGridState', e.target.value)}
              >
                <option className="d-none" value="">
                  Select State
                </option>
                {stateList.map((state, key) => (
                  <option key={key} title={state.code} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </Form.Control>
            <Form.Control.Feedback type='ivalid'>
                {errorstate}
            </Form.Control.Feedback>
            </Form.Group>            
        </Row>

        <Row className="mb-3 new5">
           <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value = {form.formGridPassword}
            onChange={ (e) => setField('formGridPassword', e.target.value)} 
            isInvalid={!!errorpass} />
            <Form.Control.Feedback type='ivalid'>
                {errorpass}
            </Form.Control.Feedback>
            </Form.Group> 
        </Row>
       <Row className="mb-3 new6">
        <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="" value = {form.formGridAddress1}
            onChange={ (e) => setField('formGridAddress1', e.target.value)} 
            isInvalid={!!erroradd} />
            <Form.Control.Feedback type='ivalid'>
                {erroradd}
            </Form.Control.Feedback>
        </Form.Group>
          </Row>
          <Row className="mb-3 new7">
            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            {successMsg && <div className="success-msg">{successMsg}</div>}
            {errors && <div className="err-msg">{errors}</div>}
        <Form.Group controlId="submit">
        <div class="sub-here">
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
            </div>
        </Form.Group>
           </Row>
        </Form>
        </div>
    </FormContainer>
  );
}

export default Registration;