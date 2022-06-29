import React from 'react';
import { propTypes } from 'prop-types';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';
import logoreact from "../img/logo.svg";
import ldlogo from "../img/LaunchDarklyLogo.png";

const LogoInfo = ({ flags }) =>{
    let logo;
    if(flags.logoSwicth)
    {
        logo = 
  
         <img className='App-logo' src={ldlogo}  alt="logo" />
    }
    else
    {  logo = 
  
        <img className='App-logo' src={logoreact}  alt="logo" />
    }

    return(
        <div className='App-logo'>
            { logo }
        </div>
    )

}

LogoInfo.propTypes = {
   flags : propTypes
};

export default withLDConsumer()(LogoInfo);