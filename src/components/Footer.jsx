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
              <li>We offer a wide range of vehicles for all your driving needs. We have the perfect car to meet your needs.
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
                <a href="https://www.google.com/maps/place/Chase+Tower/@41.8815145,-87.6313365,17z/data=!3m1!5s0x870b194932d254cd:0xc885769eddbdc962!4m14!1m7!3m6!1s0x880e2cbb6ac88921:0x85997ccd07d88d03!2sChase+Tower!8m2!3d41.8814746!4d-87.6296092!16zL20vMDN6NDNw!3m5!1s0x880e2cbb6ac88921:0x85997ccd07d88d03!8m2!3d41.8814746!4d-87.6296092!16zL20vMDN6NDNw?entry=ttu">Gotham City</a>
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
