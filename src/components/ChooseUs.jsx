import React from "react";
import MainImg from "../images/cars-big/main-img.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function ChooseUs() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              srcSet={MainImg}
              alt="Car_img"
              className="choose-container_img"
            />
            <div className="text-container">
              <div className="text-container_left">
                <h4>Why Choose Us</h4>
                <h2>Best Valued Deals you will ever Find</h2>
                <p>
                  We want you to have a stress-free rental experience, so we
                  make it easy to hire a car Everywhere —by providing simple
                  search tools, customer reviews and plenty of pick-up locations
                  across the city In a matter of seconds, we compare prices from
                  all the major companies. Not only that, but the handy filters
                  let you narrow down the results based on your needs and
                  preferences, so you can quickly find the right car for you.
                  Whether you’re looking for a nifty vehicle for city driving or
                  a luxury car for a business meeting or wedding, you will be
                  spoiled for choice with us. Don’t forget: many of the
                  great prices you see on our site are exclusive to us, so you
                  know you’re getting a great car at the best price.
                </p>
              
                <a href="#/about" onClick={scrollToTop} >
                  Find Details &nbsp;
                  <FontAwesomeIcon icon={faAngleRight} />
                </a>
              </div>
              <div className="text-container_right">
                <div className="text-container_right_box">
                  <img src={Box1} alt="car_img" />
                  <div className="text-container_right_box_text">
                    <h4>Cross Country Drive</h4>
                    <p>
                      Let's Take your Driving Experience to the next level with
                      our top-notch vehicles for Cross-Country Adventures.
                    </p>
                  </div>
                </div>
                <div className="text-container_right_box">
                  {" "}
                  <img src={Box2} alt="coin_img" />
                  <div className="text-container_right_box_text">
                    <h4>All Inclusive Pricing</h4>
                    <p>
                      Get Everything you need in one convenient, transparent
                      price with our all-inclusive policy.
                    </p>
                  </div>
                </div>
                <div className="text-container_right_box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container_right_box_text">
                    <h4>No Hidden Charges</h4>{" "}
                    <p>
                    Enjoy Your wonderful journey with our no hidden charges
                    policy. <strong>Pay What You see.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
