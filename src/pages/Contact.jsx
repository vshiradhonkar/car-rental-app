import React, { useState } from "react";
import HeroPages from "../components/HeroPages";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faEnvelopeOpenText,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import ScrollTop from "../components/ScrollTop";
import {motion} from "framer-motion";
import { firestore } from "../firebase";


function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if required fields are filled
    if (!fullName || !email || !question) {
      // Handle validation error, e.g., show an alert
      alert("Please fill in all required fields");
      return;
    }

    try {
      // Store user's inquiry in Firestore
      await firestore.collection("inquiries").add({
        fullName,
        email,
        question,
      });

      // Reset form fields after successful submission
      setFullName("");
      setEmail("");
      setQuestion("");

      // Display a success message or redirect the user
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div_text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="/">
                <FontAwesomeIcon icon={faPhone} />
                &nbsp; (0) 123-456-6789
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faEnvelope} />
                &nbsp; carrental@carental.com
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faLocationDot} />
                &nbsp; New York, USA
              </a>
            </div>
            <div className="contact-div_form">
              <form onSubmit={handleSubmit}>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Jack Smith"' value={fullName} onChange={(e) => setFullName(e.target.value)}/>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"  value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."  value={question}  onChange={(e) => setQuestion(e.target.value)}></textarea>
                <button type="submit">
                  <FontAwesomeIcon icon={faEnvelopeOpenText} />
                  &nbsp; Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner_overlay"></div>
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
        <ScrollTop/>
      </section>
    </motion.div>
  );
}

export default Contact;
