import React from 'react';
import { propTypes } from 'prop-types';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const Header = ({ flags }) =>{
    let header;
    if(flags.headerText)
    {
        header = 
        <header className='header'>
                <h1 style={{ flex: 1, backgroundColor: "#888888", margin: 20 }}>Welcome to Launch Darkly</h1>
                <h2>Let's explore new ways to deploy applications!</h2>
        </header>
    }
    else
    {  header =  
        <header className='header'>
        <h1>Welcome to React Application</h1>       
        </header>
    }

    return(
        <div className='header'>
            { header }
        </div>
    )

}

Header.propTypes = {
   flags : propTypes
};

export default withLDConsumer()(Header);