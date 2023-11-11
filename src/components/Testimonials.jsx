import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Img1 from "../images/testimonials/first.jpg";
import Img2 from "../images/testimonials/second.png";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content_title">
              <h4>Reviewed By People</h4>
              <h2>Client's Testimonials</h2>
              <p>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>
            <div className="all-testimonials">
              <div className="all-testimonials_box">
                <span className="quotes-icon">
                  <FontAwesomeIcon icon={faQuoteRight} />
                </span>
                <p>
                  "This car rental service is so fire, it should be called Hot Wheels Rentals.
                  I got a sweet ride at a price that was totally smokin'.
                  The check-in process was quick and easy, and the staff was super chill.
                  I'll definitely be renting from here again."
                </p>
                <div className="all-testimonials_box_name">
                  <div className="all-testimonials_box_name_profile">
                    <img src={Img1} alt="bary-img" />
                    <span>
                      <h4>Franklin Clinton</h4>
                      <p>Central City</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials_box box-2">
                <span className="quotes-icon">
                  <FontAwesomeIcon icon={faQuoteRight} />
                </span>

                <p>
                  "Rented a car from CAR Rental and had an excellent experience.
                  The car was clean and in perfect condition, and the staff was friendly and helpful.
                  The check-in and check-out process was quick and easy, and the price was very reasonable."
                </p>
                <div className="all-testimonials_box_name">
                  <div className="all-testimonials_box_name_profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Steve Haines</h4>
                      <p>New York</p>
                    </span>
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

export default Testimonials;
