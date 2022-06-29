import React from 'react';
import  { render } from 'react-dom';
//import  { withLDProvider,useFlags } from 'launchdarkly-react-client-sdk';
import  { withLDProvider, useFlags, useLDClient } from 'launchdarkly-react-client-sdk';
import configData from './LaunchDarklyConfig.json'
import App from './App';

const LDProvider = withLDProvider({
  clientSideID: configData.REACT_APP_CLIENT_ID,
  //'62b79f9293fe561489af4349',
//   user: {
//     "key": "aa0ceb",
//     "name": "Grace Hopper",
//     "email": "gracehopper@example.com"
//   },
  options: { 
    bootstrap: localStorage 
  }
})(App);

const rootElement = document.getElementById("root");
render(<LDProvider />, rootElement);