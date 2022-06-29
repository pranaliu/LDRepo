import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Redirect } from "react-router";
import {
  withLDProvider,
  useFlags,
  useLDClient,
} from "launchdarkly-react-client-sdk";


import Header from "./components/Header";
import LogoInfo from "./components/LogoInfo";
import FooterInfo from "./components/FooterInfo";
import configData from "./LaunchDarklyConfig.json";
import LoginPage from "./components/LoginPage";
import StartNowButton from "./components/StartNowButton";
import { InputForm } from "./components/InputForm";
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
//import { LDProvider } from 'react';


function App() {
  const {  footerText } = useFlags();

  //const  client  = useLDClient();
  
  const [email, setEmail] = useState("");
  const updateEmail = (eachEntry) => {
    setEmail(eachEntry);
  };

  //  const user = {
  //   key: 'anonymous',
  //   email : email
  // };

  return (
    <div className="App">
      <header className="App-header">
       <Header></Header> 
        <LogoInfo />
        <FooterInfo />
        <InputForm />
      </header>
    </div>
  );
}

export default withLDProvider({
  clientSideID: configData.REACT_APP_CLIENT_ID,
  // user: {
  //     "key": "aa0ceb",
  //     "name": "Grace Hopper",
  //   "email":  "pranali.u@gmail.com"
  // },
  options: {
    bootstrap: localStorage,
  },
})(App);
