import React from 'react'
import Footer from '../components/Footer'
import HeroPages from "../components/HeroPages"
import PlanTrip from "../components/PlanTrip";
// import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import ScrollTop from '../components/ScrollTop';
import {motion} from "framer-motion";
import Download from '../components/Download';
import Lottie from "react-lottie";
import animationData from "../Animations/about animation.json";



function About() {
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
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
          <Lottie options={lottieOptions} height={"auto"} width={"auto"} />
            {/* <img
              className="about-main_img"
              src={AboutMain}
              alt="car-renting"
            /> */}
            <div className="about-main_text">
              <h3>About Company</h3>
              <h2>Start the engine and adventure begins</h2>
              <p>
              We offer Premium cars to choose from, and our rates are competitive.
              Committed to providing our customers with the best possible customer service.
              We are confident that you will be satisfied with our service and our commitment to providing you with the best possible experience.
              </p>
              <div className="about-main_text_icons">
                <div className="about-main_text_icons_box">
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>20+</h4>
                    <p>Car Types</p>
                  </span>
                </div>
                <div className="about-main_text_icons_box">
                  <img src={Box2} alt="car-icon" />
                  <span>
                    <h4>85+</h4>
                    <p>Rental Outlets</p>
                  </span>
                </div>
                <div className="about-main_text_icons_box">
                  <img src={Box3} alt="car-icon" className="last-fk" />
                  <span>
                    <h4>75+</h4>
                    <p>Repair Shop</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Download/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <PlanTrip />
          <ScrollTop/>
          <p className='use-of_images'>
        All images of brand cars used on this website are for educational purposes only.The copyrights of these images belong to their respective owners. This usage is in accordance with the principles of fair use for educational and informational purposes. These images are not used for commercial gain, and their inclusion does not imply any endorsement or affiliation with CAR Rental.
        </p>
        <p className='use-of_images'>
        Developed by Winter(
          <a
          rel="noreferrer"
          target="_blank" href='https://github.com/vshiradhonkar'>
          GitHub
          </a>, 
          <a
          rel="noreferrer"
          target="_blank" href='https://twitter.com/Tweetved1'>
          X
          </a>)
        </p>
        
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner_overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a car by getting in touch with us</h2>
            <span>
              <FontAwesomeIcon icon={faPhone}/>
              <h3>(0) 123-456-7869</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}

export default About