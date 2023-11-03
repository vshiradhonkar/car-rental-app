import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content_1">
              <li>
                <span>CAR</span> Rental
              </li>
              <li>
                We Offer a big range of Vehicles for all your driving Needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <a href="tel:0123456789">
                  <FontAwesomeIcon icon={faPhone} /> &nbsp; (0) -123-456-789
                </a>
              </li>

              <li>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNqbwNXQMpXbQgKsfFPrCvbsdLxwCgmTQCWCqSGrwdNDWPLnvHKNcLfSlzCTncJfRnpwL">
                  <FontAwesomeIcon icon={faEnvelope} /> &nbsp;
                  carental@carrental.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNqbwNXQMpXbQgKsfFPrCvbsdLxwCgmTQCWCqSGrwdNDWPLnvHKNcLfSlzCTncJfRnpwL"
                  rel="noreferrer"
                  target="_blank"
                  
                >
                  Design by Winter
                </a>
              </li>
            </ul>

            <ul className="footer-content_2">
              <li>Company</li>
              <li>
                <a href="https://www.google.com/maps/place/Times+Square/@40.7579747,-73.9881175,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25855c6480299:0x55194ec5a1ae072e!8m2!3d40.7579747!4d-73.9855426!16zL20vMDdxZHI?entry=ttu">New York</a>
              </li>
              <li>
                <a href="#home">Careers</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">How we work</a>
              </li>
            </ul>

            <ul className="footer-content_2">
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 4:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content_2">
              <li>Subscription</li>
              <li>
                <p>Subscribe to our Email address for latest news & Updates.</p>
              </li>
              <li>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                />
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
