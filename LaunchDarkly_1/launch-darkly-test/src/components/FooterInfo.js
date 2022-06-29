import React from 'react';
import { propTypes } from 'prop-types';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';


const FooterInfo = ({ flags }) =>{
    let footer;
    if(flags.footerText)
    {
        
        
    return(
        <div>
            <p> {flags.footerText} </p>
        </div>
    )
    }

}

FooterInfo.propTypes = {
   flags : propTypes
};

export default withLDConsumer()(FooterInfo);