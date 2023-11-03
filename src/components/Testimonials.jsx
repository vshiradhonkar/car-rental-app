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
                  "We were very satisfied with the organization of picking up
                  the car at the airport and dropping it off at the ferry in
                  Mahé. There were no problems and the car served our purpose. I
                  definitely recommend it! "
                </p>
                <div className="all-testimonials_box_name">
                  <div className="all-testimonials_box_name_profile">
                    <img src={Img1} alt="bary-img" />
                    <span>
                      <h4>Bary Allen</h4>
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
                  "Very nice and competent contact person, tries very hard to
                  organize everything to the satisfaction of the customer! Very
                  friendly communication in German or English! Many thanks for
                  everything! "
                </p>
                <div className="all-testimonials_box_name">
                  <div className="all-testimonials_box_name_profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Howard Stark</h4>
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
