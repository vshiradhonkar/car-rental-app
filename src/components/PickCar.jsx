import React, { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData.js";

function PickCar() {
  const [active, setActive] = useState("SecondCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container_title">
              <h3>Vehicle Models</h3>
              <h2>Our Rental Fleet</h2>
              <p>
                Choose From a variety Of our amazing vehicles to rent for Your{" "}
                <strong> Upcoming </strong>Adventure or Business Trip
              </p>
            </div>
            <div className="pick-container_car-content">
              {/* Pick Car */}
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("SecondCar");
                    btnID("btn1");
                  }}
                >
                  Chevrolet Camaro
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  onClick={() => {
                    setActive("FirstCar");
                    btnID("btn2");
                  }}
                >
                  Audi Q7
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  onClick={() => {
                    setActive("ThirdCar");
                    btnID("btn3");
                  }}
                >
                  Ferrari LaFerrari
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  onClick={() => {
                    setActive("ForthCar");
                    btnID("btn4");
                  }}
                >
                  Lamborghini Aventador
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  onClick={() => {
                    setActive("FifthCar");
                    btnID("btn5");
                  }}
                >
                  McLaren P7
                </button>
                <button
                  className={`${coloringButton("btn6")}`}
                  onClick={() => {
                    setActive("SixthCar");
                    btnID("btn6");
                  }}
                >
                  Porsche Panamera Turbo
                </button>
              </div>
              {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
              {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
              {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
              {active === "ForthCar" && <CarBox data={CAR_DATA} carID={3} />}
              {active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
              {active === "SixthCar" && <CarBox data={CAR_DATA} carID={5} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
