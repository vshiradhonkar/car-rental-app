import React, { useEffect, useState } from "react";
import Captcha from "./Captcha";
import { FaSignInAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../firebase"; 




const SigninC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (e) => {
    console.log("handleChange called");
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log("handleSignIn called");
    try {
      // Sign in with email and password
      await auth.signInWithEmailAndPassword(formData.email, formData.password);

      // Reset form fields
      setFormData({
        email: "",
        password: "",
      });

      console.log("Sign-in successful");
      alert("signedin")
      // Additional actions after successful sign-in
    } catch (error) {
      console.error("Error signing in", error);
      // Handle sign-in error
    }
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // The user argument will be non-null if a user is signed in
      setUser(user);
    });

    // Cleanup function to unsubscribe when the component is unmounted
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="ui-panel">
        <div className="background-image"></div>
        <div className="login-form">
        
          <h1 className="h1s">Sign In</h1>
          <input className="login-input" name="email" type="text" placeholder="Enter your Email" value={formData.email}
            onChange={handleChange} />
          <br/>
          
          <input className="login-input" name="password" type={showPassword ? "text" : "password"} placeholder="Enter your Password" value={formData.password}
            onChange={handleChange} />
          <button className="loginpasseye" onClick={togglePasswordVisibility} type="button">
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
          
          <br/>
          <div className="buttons">
            <button type="submit" onClick={handleSignIn} className="Btn">
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
