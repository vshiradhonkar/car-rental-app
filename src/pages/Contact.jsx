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
import Modal from "react-modal";
import Lottie from "react-lottie";
import animationData from "../Animations/contact animation.json";


function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  

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
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending the message. Please try again.");
      // Handle error, e.g., show an error message to the user
    }
  };
  const closeModal = () => {
    // Close the modal and reset the state
    setIsModalOpen(false);
  };
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="contact-div_lottie">
            <Lottie options={lottieOptions} height={300} width={400} />
        </div>
        <div className="container">
          <div className="contact-div">
            <div className="contact-div_text">
              <h2>Need additional information?</h2>
              <p>
              Unleash the thrill of the open road with us. Seamlessly browse, book, and ride – experience travel at your fingertips, where every journey is an adventure.
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
                &nbsp; Los Santos
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
          {/* Modal */}
      <Modal className="contact-modal"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Query Recorded Modal">
        <h2>Greetings!</h2>
        <p>Your query has been recorded successfully.Thank you!</p>
        
        <button className="contact-modal-button" onClick={closeModal}>OK</button>
      
      </Modal>
      

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
