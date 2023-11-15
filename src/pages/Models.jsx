import React from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faStar,
  faCarSide,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import CarImg1 from "../images/cars-big/audi.png";
import CarImg2 from "../images/cars-big/aventador.jpg";
import CarImg3 from "../images/cars-big/camaro.jpg";
import CarImg4 from "../images/cars-big/Ferrari.jpg";
import CarImg5 from "../images/cars-big/McLerean.jpg";
import CarImg6 from "../images/cars-big/panamera-turbo.jpg";
import { Link } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";
import {motion} from "framer-motion";

function Models() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="models-div">
            <div className="models-div_box">
              <div className="models-div_box_img">
                <span></span>
                <img src={CarImg1} alt="car-img" />
                <div className="models-div_box_descr">
                  <div className="models-div_box_descr_name-price">
                    <div className="models-div_box_descr_name-price_name">
                      <p>Audi Q7</p>
                      <span>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                    </div>
                    <div className="models-div_box_descr_name-price_price">
                      <h4>
                        <FontAwesomeIcon icon={faDollarSign} /> 20000
                      </h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <br/>
                  <div className="models-div_box_descr_name-price_details">
                    <span>
                      <FontAwesomeIcon icon={faCarSide} />
                      &nbsp; Audi
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <FontAwesomeIcon icon={faCarSide} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faCarSide} /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp;
                      <FontAwesomeIcon icon={faCarSide} />
                    </span>
                  </div>
                  <Link className="models-div_box_descr_name-price_btn" onClick={() => window.scrollTo(0, 490)} to="/" >
                      Book Ride
                  </Link>
                </div>
              </div>
            </div>

            <div className="models-div_box">
              <div className="models-div_box_img">
                <img src={CarImg5} alt="car-img" />
                <div className="models-div_box_descr">
                  <div className="models-div_box_descr_name-price">
                    <div className="models-div_box_descr_name-price_name">
                      <p>McLaren P7</p>
                      <span>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                    </div>
                    <div className="models-div_box_descr_name-price_price">
                      <h4>
                        <FontAwesomeIcon icon={faDollarSign} /> 36000
                      </h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <br/>
                  <div className="models-div_box_descr_name-price_details">
                    <span>
                      <FontAwesomeIcon icon={faCarSide} />
                      &nbsp; McLaren
                    </span>
                    <span style={{ textAlign: "right" }}>
                      2 &nbsp; <FontAwesomeIcon icon={faCarSide} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faCarSide} /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp;
                      <FontAwesomeIcon icon={faCarSide} />
                    </span>
                  </div>
                  <Link className="models-div_box_descr_name-price_btn" onClick={() => window.scrollTo(0, 490)} to="/" >
                      Book Ride
                  </Link>
                </div>
              </div>
            </div>

            <div className="models-div_box">
              <div className="models-div_box_img">
                <img src={CarImg6} alt="car-img" />
                <div className="models-div_box_descr">
                  <div className="models-div_box_descr_name-price">
                    <div className="models-div_box_descr_name-price_name">
                      <p>Panamera</p>
                      <span>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                    </div>
                    <div className="models-div_box_descr_name-price_price">
                      <h4>
                        <FontAwesomeIcon icon={faDollarSign} /> 40000
                      </h4>
                      <p>per day</p>
                    </div>
                  </div><br/>
                  <div className="models-div_box_descr_name-price_details">
                    <span>
                      <FontAwesomeIcon icon={faCarSide} />
                      &nbsp; Porsche
                    </span>
                    <span style={{ textAlign: "right" }}>
                      2 &nbsp; <FontAwesomeIcon icon={faCarSide} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faCarSide} /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Gasoline &nbsp;
                      <FontAwesomeIcon icon={faCarSide} />
                    </span>
                  </div>
                  <Link className="models-div_box_descr_name-price_btn" onClick={() => window.scrollTo(0, 490)} to="/" >
                      Book Ride
                  </Link>
                </div>
              </div>
            </div>

            <div className="models-div_box">
              <div className="models-div_box_img">
                <img src={CarImg2} alt="car-img" />
                <div className="models-div_box_descr">
                  <div className="models-div_box_descr_name-price">
                    <div className="models-div_box_descr_name-price_name">
                      <p>Lamborghini Aventador</p>
                      <span>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                    </div>
                    <div className="models-div_box_descr_name-price_price">
                      <h4>
                        <FontAwesomeIcon icon={faDollarSign} /> 35000
                      </h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div_box_descr_name-price_details">
                    <span>
                      <FontAwesomeIcon icon={faCarSide} />
                      &nbsp; Lamborghini
                    </span>
                    <span style={{ textAlign: "right" }}>
                      2 &nbsp; <FontAwesomeIcon icon={faCarSide} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faCarSide} /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp;
                      <FontAwesomeIcon icon={faCarSide} />
                    </span>
                  </div>
                  <Link className="models-div_box_descr_name-price_btn" onClick={() => window.scrollTo(0, 490)} to="/" >
                      Book Ride
                  </Link>
                </div>
              </div>
            </div>

            <div className="models-div_box">
              <div className="models-div_box_img">
                <img src={CarImg3} alt="car-img" />
                <div className="models-div_box_descr">
                  <div className="models-div_box_descr_name-price">
                    <div className="models-div_box_descr_name-price_name">
                      <p>Chevrolet Camaro</p>
                      <span>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                    </div>
                    <div className="models-div_box_descr_name-price_price">
                      <h4>
                        <FontAwesomeIcon icon={faDollarSign} /> 25000
                      </h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div_box_descr_name-price_details">
                    <span>
                      <FontAwesomeIcon icon={faCarSide} />
                      &nbsp; Chevrolet
                    </span>
                    <span style={{ textAlign: "right" }}>
                      2 &nbsp; <FontAwesomeIcon icon={faCarSide} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faCarSide} /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp;
                      <FontAwesomeIcon icon={faCarSide} />
                    </span>
                  </div>
                  <Link className="models-div_box_descr_name-price_btn" onClick={() => window.scrollTo(0, 490)} to="/" >
                      Book Ride
                  </Link>
                </div>
              </div>
            </div>

            <div className="models-div_box">
              <div className="models-div_box_img">
                <img src={CarImg4} alt="car-img" />
                <div className="models-div_box_descr">
                  <div className="models-div_box_descr_name-price">
                    <div className="models-div_box_descr_name-price_name">
                      <p>Ferrari LaFerrari</p>
                      <span>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                    </div>
                    <div className="models-div_box_descr_name-price_price">
                      <h4>
                        <FontAwesomeIcon icon={faDollarSign} /> 30000
                      </h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div_box_descr_name-price_details">
                    <span>
                      <FontAwesomeIcon icon={faCarSide} />
                      &nbsp;<br/>Ferrari
                    </span>
                    <span style={{ textAlign: "right" }}>
                      2 &nbsp; <FontAwesomeIcon icon={faCarSide} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faCarSide} /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Gasoline &nbsp;
                      <FontAwesomeIcon icon={faCarSide} />
                    </span>
                  </div>
                  <Link className="models-div_box_descr_name-price_btn" onClick={() => window.scrollTo(0, 490)} to="/" >
                      Book Ride
                  </Link>
                </div>
              </div>
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

export default Models;
