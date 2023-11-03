import React from "react";
import Captcha from "./Captcha";
import { FaSignInAlt } from "react-icons/fa";
const SigninC = () => {
  return (
    <>
      <div className="ui-panel">
        <div className="background-image"></div>
        <div className="login-form">
        
          <h1 className="h1s">Sign In</h1>
          <input className="login-input" type="text" placeholder="Enter Email" />
          <br/>
          <input className="login-input" type="text" placeholder="Enter Password" />
          
          <br/>
          <div className="buttons">
            <button href="/" className="Btn">
              <div className="sign">
                <FaSignInAlt 

                  className="icon fa-xl "
                  style={{ color: "#ffffff" }}
                />
              </div>
              <div className="texts">Login</div>
            </button>
          </div>
          <br/>
        </div>
        <a href="#/register" onClick={() => window.scrollTo(0,0)} className="text1" >
          Don't have an account?
        </a>
        <br />
        <Captcha />
      </div>
      
    </>
  );
};

export default SigninC;
