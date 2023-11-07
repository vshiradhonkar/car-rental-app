import React, { useState } from "react";
import Captcha from "./Captcha";
import { FaSignInAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const SigninC = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <>
      <div className="ui-panel">
        <div className="background-image"></div>
        <div className="login-form">
        
          <h1 className="h1s">Sign In</h1>
          <input className="login-input" type="text" placeholder="Enter your Email" />
          <br/>
          
          <input className="login-input" type={showPassword ? "text" : "password"} placeholder="Enter your Password" />
          <button className="loginpasseye" onClick={togglePasswordVisibility} type="button">
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
          
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
