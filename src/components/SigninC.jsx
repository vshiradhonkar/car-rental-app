import React, { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

const SigninC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isAlertOpen, setIsAlertOpen] = useState(false); // State for alert
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(formData.email, formData.password);
      setFormData({
        email: "",
        password: "",
      });

      console.log("Sign-in successful");
      setIsAlertOpen(true); // Open the alert for successful sign-in
    } catch (error) {
      console.error("Error signing in", error);

      // Check the error code to display appropriate alerts
      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        alert("Invalid email or password. Please try again.");
      } else {
        alert("Error signing in. Please try again later.");
      }
    }
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
    navigate('/'); // Navigate to the '/' route
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // The user argument will be non-null if a user is signed in
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <>
      <div className="ui-panel">
        <div className="background-image"></div>
        <div className="login-form">
          <h1 className="h1s">Sign In</h1>
          <input
            className="login-input"
            name="email"
            type="text"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <input
            className="login-input"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button className="loginpasseye" onClick={togglePasswordVisibility} type="button">
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
          <br />
          <div className="buttons">
            <button type="submit" onClick={handleSignIn} className="Btn">
              <div className="sign">
                <FaSignInAlt className="icon fa-xl" style={{ color: "#ffffff" }} />
              </div>
              <div className="texts">Login</div>
            </button>
          </div>
          <br />
        </div>
        <a href="#/register" onClick={() => window.scrollTo(0, 0)} className="text1">
          Don't have an account?
        </a>
        <br />
      </div>

      {isAlertOpen && (
        <div className="alert">
          <h2>Greetings!</h2>
          <p>You are signed in successfully. Thank you!</p>
          <button className="alert-button" onClick={closeAlert}>
            OK
          </button>
        </div>
      )}
    </>
  );
};

export default SigninC;
