import React from "react";
import BgShape from "../images/cars-big/hero/bg-hero.png";
import HeroCar from "../images/cars-big/hero/main-car.png";
import { Link } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import 'animate.css';


function Hero() {
  

  
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container ">
          <img src={BgShape} alt="background-shape" className="bg-shape" />
          <div className="hero-content">
            <div className="hero-content_text animate__animated animate__bounceInLeft">
              <h4 >Plan Your Trip Now</h4>
              <h1 >
                Save <span>BIG</span> with our CAR Rental
              </h1>
              <p>
              Embark on Your Journey in Style! Irresistible Rates,
              Endless Adventures, and Tailored Pick-Up Choices Await You.
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
            {/* <div className="hero-content_car-img">
              <Lottie  options={lottieOptions} height={"auto"} width={"auto"} />
            </div> */}
            <img src={HeroCar} alt="car-img" className="hero-content_car-img animate__animated animate__bounceInRight" />
          </div>
        </div>

        {/* Page Up */}

        <ScrollTop/>
      </section>
    </>
  );
}

export default Hero;
