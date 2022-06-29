import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//import { Button } from "react-bootstrap";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


function StartNowButton() {
  // let navigate = useNavigate();
  const routeChange = () => {};

  return (
    <div className="app flex-row align-items-center">
      {/* <Button color="primary" className="px-4"
            onClick={routeChange}
              >
              Start Now
            </Button> */}
<Col sm="12" md={{ size: 10, offset: 3 }}>
      <button>
        {" "}
        <a href="https://docs.launchdarkly.com/home/getting-started">
          {" "}
          Start Now{" "}
        </a>
      </button>
      </Col>
    </div>
  );
}
export default StartNowButton;
