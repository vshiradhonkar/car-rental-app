import React from "react";
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

function Contact() {
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
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Jack Smith"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

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
