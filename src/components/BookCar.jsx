import React, { useEffect, useState } from "react";
import carAudi from "../images/cars-big/audi.png";
import carMc from "../images/cars-big/McLerean.jpg";
import carFerrari from "../images/cars-big/Ferrari.jpg";
import carCamaro from "../images/cars-big/camaro.jpg";
import carAven from "../images/cars-big/aventador.jpg";
import carPorsche from "../images/cars-big/panamera-turbo.jpg";
import { Link } from "react-router-dom";

function BookCar() {
  const [modal, setModal] = useState(false);

  const [carType, setCarType] = useState("");

  const [pickUp, setPickup] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZip(e.target.value);
  };

  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };
  const handlePick = (e) => {
    setPickup(e.target.value);
  };
  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };
  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };
  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  let imgUrl;
  switch (carImg) {
    case "Audi Q7":
      imgUrl = carAudi;
      break;
    case "Chevrolet Camaro":
      imgUrl = carCamaro;
      break;
    case "McLerean P7":
      imgUrl = carMc;
      break;
    case "Ferrari LaFerrari":
      imgUrl = carFerrari;
      break;
    case "Lamborghini Aventador":
      imgUrl = carAven;
      break;
    case "Porsche Panamera turbo":
      imgUrl = carPorsche;
      break;

    default:
      imgUrl = "";
  }

  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };
  

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* Overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content_box">
              <h2>Book a Car</h2>

              <p className="error-message">
                All Fields Required! <i className="fa-solid fa-xmark"></i>
              </p>

              <p className="booking-done">
                Check Your Email to confirm an Order.{" "}
                <i onClick={hideMessage} className="fa-solid fa-cmark"></i>
              </p>

              <form className="box-form">
                <div className="box-form_car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Select Your Car
                    Type
                    <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>Select Your Car Type</option>
                    <option value="Audi Q7"> Audi A7 </option>
                    <option value="Chevrolet Camaro"> Chevrolet Camaro </option>
                    <option value="McLeren P7"> McLeren P7 </option>
                    <option value="Ferrari LaFerrari">
                      {" "}
                      Ferrari LaFerrari{" "}
                    </option>
                    <option value="Lamborghini Aventador">
                      {" "}
                      Lamborghini Aventador{" "}
                    </option>
                    <option value="Porsche Panamera turbo">
                      {" "}
                      Porsche Panamera turbo{" "}
                    </option>
                  </select>
                </div>
                <div className="box-form_car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up-Location{" "}
                    <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handlePick}>
                    <option>Select Your Pick Up Location</option>
                    <option>Mumbai</option>
                    <option>Pune</option>
                    <option>Delhi</option>
                    <option>Jaipur</option>
                    <option>Chennai</option>
                  </select>
                </div>

                <div className="box-form_car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-of-Location{" "}
                    <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleDrop}>
                    <option>Select drop off location</option>
                    <option>Mumbai</option>
                    <option>Pune</option>
                    <option>Delhi</option>
                    <option>Jaipur</option>
                    <option>Chennai</option>
                  </select>
                </div>

                <div className="box-form_car-time">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Pick-up-Date <b>*</b>
                  </label>
                  <input
                    type="date"
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                  />
                </div>

                <div className="box-form_car-time">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Drop-of-Date <b>*</b>
                  </label>
                  <input
                    type="date"
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                  />
                </div>

                <button onClick={openModal} type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* title */}
        <div className="booking-modal_title">
          <h2>Complete Reservation</h2>
          <i onClick={openModal} className="fa-solid fa-xmark"></i>
        </div>

        {/* Message */}
        <div className="booking-modal_message">
          <h4>
            <i className="fa-solid fa-circle-info"></i>
            Upon Completing this reservation enquiry , You will recieve:
          </h4>
          <p>
            Your Rental Voucher to produce on arrival at the rental desk and a
            toll-free customer support Number.
          </p>
        </div>

        {/* Car Info */}
        <div className="booking-modal_car-info">
          <div className="dates-div">
            <div className="booking-modal_car-info_dates">
              <h5>Location & Date</h5>
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Pick-Up Date & Time</h6>
                  <p>
                    {pickTime} / <input type="time" className="input-time" />
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal_car-info_dates">
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Drop-Off Date & Time</h6>
                  <p>
                    {dropTime} / <input type="time" className="input-time" />
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal_car-info_dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal_car-info_dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Drop-Off Location</h6>
                  <p>{dropOff}</p>
                </div>
              </span>
            </div>
          </div>

          <div className="booking-modal_car-info_model">
            <h5>
              <span>Car -</span> {carType}
            </h5>
            {imgUrl && <img src={imgUrl} alt="car_img" />}
          </div>
        </div>

        {/* personal Info */}

        <div className="booking-modal_person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form_2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={handleName}
                  placeholder="Enter Your First Name"
                />
                <p className="error-modal">This is Required Field.</p>
              </span>

              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={handleLastName}
                  placeholder="Enter Your Last Name"
                />
                <p className="error-modal">This is Required Field.</p>
              </span>

              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={handlePhone}
                  placeholder="Enter Your Phone Number"
                />
                <p className="error-modal">This is Required Field.</p>
              </span>

              <span>
                <label>
                  Age <b>*</b>
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={handleAge}
                  placeholder="18"
                />
                <p className="error-modal">This is Required Field.</p>
              </span>
            </div>

            <div className="info-form_1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                value={email}
                  type="email"
                  onChange={handleEmail}
                  placeholder="Enter your Email Address"
                />
                <p className="error-modal">This is Required Field.</p>
              </span>

              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  value={address}
                  type="text"
                  onChange={handleAddress}
                  placeholder="Enter your Street Address"
                />
                <p className="error-modal">This is Required Field.</p>
              </span>

              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                value={city}
                  type="text"
                  onChange={handleCity}
                  placeholder="Enter your City"
                />
                <p className="error-modal">This is Required Field.</p>
              </span>

              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input
                  type="text"
                  onChange={handleZip}
                  value={zip}
                  placeholder="Enter your Zip Code"
                />
                <p className="error-modal">This is Required Field.</p>
              </span>
            </div>
            <span className="info-form_checkbox">
              <input type="checkbox" />
              <p>I agree to all <Link  to="/conditions" style={{ textDecoration: 'none' }}><strong>Terms & Conditions*</strong></Link></p>
            </span>
            <div className="reserve-button">
              <button onClick={confirmBooking}>Reserve Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookCar;
