import React from "react";
import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container_title">
              <h3>Plan Your Trip Now</h3>
              <h2>Quick & easy Car Rental</h2>
            </div>

            <div className="plan-container_boxes">
              <div className="plan-container_boxes_box">
                <img src={SelectCar} alt="icon_car" />
                <h3>Select Car</h3>
                <p>
                  We Offer a Big Range of Vehicles for all your Driving Needs.
                  We Have the perfect car to meet your needs
                </p>
              </div>

              <div className="plan-container_boxes_box">
                <img src={Contact} alt="icon_contact" />
                <h3>Contact Operator</h3>
                <p>
                  Our Knowledgeable and friendly Operators are always ready to
                  Help you with any Questions or concerns
                </p>
              </div>

              <div className="plan-container_boxes_box">
                <img src={Drive} alt="icon_drive" />
                <h3>Let's Drive</h3>
                <p>
                  Whether you're hitting the Open Road, we've got you covered
                  with our wide range of cars
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
