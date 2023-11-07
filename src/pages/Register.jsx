import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPhone, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import HeroPages from "../components/HeroPages";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/register", formData) // Send the form data to the server
      .then((response) => {
        console.log("Registration successful");
        // Reset form fields
        setFormData({
          name: "",
          surname: "",
          phoneNumber: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.error("Error registering user", error);
        // Handle registration error
      });
  };
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <HeroPages name="Register" />
      <section className="register-page ">
        <div className="container-register">
          <h1 className="text">Sign Up</h1>
          <div className="signUpGoogle">
            <Link className="signUpGoogle" to="/">
              Sign up with Google <pre> </pre>
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 488 512">
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
              </svg>
            </Link>
          </div>
          <h2 className="signup-head">or Sign Up With your email</h2>
          <div className="name">
            <div className="input-group">
              <h3>First Name</h3>
              <input
                type="text"
                name="firstName"
                value={formData.name}
                placeholder="Enter Your First Name"
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <h3>Last Name</h3>
              <input
                type="text"
                name="lastName"
                value={formData.surname}
                placeholder="Enter Your Last Name"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-group">
            <h3>Phone Number</h3>
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              placeholder="Enter Your Phone Number"
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <h3>Email</h3>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter Your Email Address"
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <h3>Password</h3>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                placeholder="Enter Your Password"
                onChange={handleChange}
              />
              <button onClick={togglePasswordVisibility} type="button">
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>

          <div className="input-group">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              By Signing up I agree with <Link to="/conditions"  onClick={() => window.scrollTo(0,0)}>
              Terms & Conditions
            </Link>
            </label>
          </div>
          <div className="signUp">
            <button className="signUpButton" onClick={handleSubmit}>
              Sign up
            </button>
          </div>
          <h3 className="already">
            Already have an Account? &nbsp;
            <a href="/#/sign-in" onClick={() => window.scrollTo(0,0)}>Sign In</a>
          </h3>
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a car by getting in touch with us</h2>
            <span>
              <FontAwesomeIcon icon={faPhone} />
              <h3>(0) 123-456-6789</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollTop />
    </motion.div>
  );
}

export default Register;