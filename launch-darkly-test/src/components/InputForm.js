import React, { useState, useEffect } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { propTypes } from 'prop-types';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';
import LoginPage from "./LoginPage";
import StartNowButton from "./StartNowButton";

export const InputForm = (flags, props) => {
  let linkClick;
  
  //const { updateEmail } = props;

  const [eachEmail, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const { email } = eachEmail;
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    
    if (val.length === 0) {
      setEmailValidError('email address must be enter');
    } else if (reg.test(val) === false) {
      setEmailValidError('enter valid email address');
    } else if (reg.test(val) === true) {
      setEmailValidError('');
    }
    };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (eachEmail)
    {
      handleValidEmail(eachEmail);
      console.log("Email is:"+ eachEmail);
      setEmail('');
    }
  
   
    //updateEmail(eachEmail);
  };

  //Evaluate User here with email and LD client
  if(flags.EmailUser)
  {
    linkClick = 
    <LoginPage />
  }
  else
  {
    linkClick = 
    <StartNowButton />
  }

  return (
    <div>
      <Row>
        <Col sm="12" md={{ size: 10, offset: 3 }}>
          <Form>
            <FormGroup>
              <Label for="Email">Submit Email </Label>

              <Input
                name="Email"
                placeholder="Ex: test@testdomain.com"
                onChange={ value =>{
                  handleInputChange(value);
                
                }
                }
                value={eachEmail}
               >
                {" "}
              </Input>
              {emailValidError ? <p style = {{ flex: 1, backgroundColor: "#FF0000", margin: 20 }}>{emailValidError}</p> : null}
            </FormGroup>

            <Button onClick={handleFinalSubmit}>Submit</Button>
          </Form>
        </Col>
        <br />
        <div>
        <Row>
        { linkClick }
        </Row>
       
        </div>
      
      
      </Row>
    </div>
  );
};
export default InputForm;
