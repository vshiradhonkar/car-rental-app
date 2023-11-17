import React from "react";
import BgShape from "../images/cars-big/hero/bg-hero.png";
// import HeroCar from "../images/cars-big/hero/main-car.png";
import { Link } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import Lottie from "react-lottie";
import animationData from "../Animations/hero animation.json";


function Hero() {
  
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <img src={BgShape} alt="background-shape" className="bg-shape" />
          <div className="hero-content">
            <div className="hero-content_text">
              <h4>Plan Your Trip now</h4>
              <h1>
                Save <span>big</span> with our car Rental
              </h1>
              <p>
                Rent the Car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="hero-content_text_btns">
                <Link onClick={() => window.scrollTo(0, 490)}
                className="hero-content_text_btns_book-ride" to='/'>
                  Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
                <Link className="hero-content_text_btns_learn-more" onClick={() => window.scrollTo(0, 0)} to="/about">
                  Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>
            {/* Images */}
            <div className="hero-content_car-img">
              <Lottie  options={lottieOptions} height={"auto"} width={"auto"} />
            </div>
            {/* <img src={HeroCar} alt="car-img" className="hero-content_car-img" /> */}
          </div>
        </div>

        {/* Page Up */}

        <ScrollTop/>
      </section>
    </>
  );
}

export default Hero;
