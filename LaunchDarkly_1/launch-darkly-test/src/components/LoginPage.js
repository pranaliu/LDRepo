import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function LoginPage() {
  return (
    <div className="app flex-row align-items-center">
      <button>
        <a href="https://app.launchdarkly.com/default/production/features">
          {" "}
          Create your first feature flag{" "}
        </a>
      </button>
    </div>
  );
}

export default LoginPage;
