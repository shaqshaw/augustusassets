import React from 'react';
import transparentLogo from './logo.png';

const Logo = () => {

    return(
        <img className="responsive-img " src={transparentLogo} width = "110" height = "110" alt="logo"/>
    );
}

export default Logo;