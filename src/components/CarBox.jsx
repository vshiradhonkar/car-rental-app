import React, { useState } from "react";
import { Link } from "react-router-dom";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car, id) => (
        <div className="box-cars" id={id}>
          {/* car */}
          <div className="pick-car">
            {carLoad && <span className="loader"></span>}
            <img
              src={car.img}
              alt="car_img"
              style={{ display: carLoad ? "none" : "block" }}
              onLoad={() => setCarLoad(false)}
            />
          </div>

          {/* description */}
          <div className="pick-description">
            <div className="pick-description_price">
                <span>${car.price}</span>/ rent per day
            </div>
            <div className="pick-description_table">
                <div className="pick-description_table_col">
                    <span>Model</span>
                    <span>{car.model}</span>
                </div>

                <div className="pick-description_table_col">
                    <span>Mark</span>
                    <span>{car.mark}</span>
                </div>

                <div className="pick-description_table_col">
                    <span>Year</span>
                    <span>{car.year}</span>
                </div>

                <div className="pick-description_table_col">
                    <span>Doors</span>
                    <span>{car.doors}</span>
                </div>

                <div className="pick-description_table_col">
                    <span>AC</span>
                    <span>{car.air}</span>
                </div>

                <div className="pick-description_table_col">
                    <span>Transmission</span>
                    <span>{car.transmission}</span>
                </div>

                <div className="pick-description_table_col">
                    <span>Fuel</span>
                    <span>{car.fuel}</span>
                </div>

            </div>

            <Link href="/" onClick={() => window.scrollTo(0, 490)} className="cta-btn">
                Reserve Now
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
