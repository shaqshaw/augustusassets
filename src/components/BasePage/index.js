import React from 'react';
import Header from '../Header/index.js';
import Footer from '../Footer/index.js';

const BasePage =(props) =>{
    
    if (props.auth ===null){
        return(
            <div class="preloader-wrapper big active">
                <div class="spinner-layer spinner-blue-only">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div>
                    <div class="gap-patch">
                        <div class="circle"></div>
                    </div>
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
        );
    } else if(props.auth === false ){
        return(
            <AuthError/>
        );
    } else {
        return(
            <>
                <Header/>
                <div>{props.children}</div>
                <Footer/>
            </>
        );
    }
};



const AuthError =() =>{
    return(
        <>
            <Header/>
            <p>Please Log In</p>
            <Footer/>
        </>
    );
};

export default BasePage;