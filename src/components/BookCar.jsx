import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
import { CAR_DATA } from "./CarData";
import emailjs from 'emailjs-com';



import carAudi from "../images/cars-big/audi.png";
import carMc from "../images/cars-big/McLerean.jpg";
import carFerrari from "../images/cars-big/Ferrari.jpg";
import carCamaro from "../images/cars-big/camaro.jpg";
import carAven from "../images/cars-big/aventador.jpg";
import carPorsche from "../images/cars-big/panamera-turbo.jpg";

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

  const [inputPickupTime, setInputPickupTime] = useState("");
  const [inputDropoffTime, setInputDropoffTime] = useState("");


  const handleInputPickupTime = (e) => {
    setInputPickupTime(e.target.value);
  };

  const handleInputDropoffTime = (e) => {
    setInputDropoffTime(e.target.value);
  };

  // eslint-disable-next-line
  const [totalAmount, setTotalAmount] = useState(0);

  const db = getFirestore();
  const auth = getAuth();

// Function to calculate the order amount
  const calculateOrderAmount = () => {
    const selectedCar = CAR_DATA.flat().find((car) => car.name === carType);
  
    const dailyRate = selectedCar ? parseFloat(selectedCar.price) : 0;
  
    const startDate = new Date(pickTime);
    const endDate = new Date(dropTime);
  
    console.log('startDate:', startDate);
    console.log('endDate:', endDate);
  
    const timeDifference = endDate.getTime() - startDate.getTime();
    console.log('timeDifference:', timeDifference);
  
    let rentalDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    console.log('rentalDays:', rentalDays);
  
    // Ensure at least one day for the rental
    rentalDays = Math.max(rentalDays, 1);
  
    const totalAmount = dailyRate * rentalDays;
  

    const additionalCosts = 0;

    const totalAmountWithExtras = totalAmount + additionalCosts;
  
    console.log('totalAmountWithExtras:', totalAmountWithExtras);
  
    return totalAmountWithExtras;
  };
  

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
    
    const user = auth.currentUser;
    
    if (!user) {
      errorMsg.innerHTML = "Sign In Required! <i className='fa-solid fa-xmark'></i>";
      errorMsg.style.display = "flex";
      return; // Exit the function if the user is not signed in
    }
  
    if (pickUp === "" || dropOff === "" || pickTime === "" || dropTime === "" || carType === "") {
      errorMsg.innerHTML = "All Fields Required! <i className='fa-solid fa-xmark'></i>";
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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modal]);

  const confirmBooking = async (e) => {
    if (e) {
      e.preventDefault();
    }
  
    try {
      const user = auth.currentUser;
      if (user) {
        const currentDate = new Date().toLocaleDateString();
        const amount = calculateOrderAmount();
        const bookingRef = await addDoc(collection(db, `users/${user.uid}/bookings`), {
          carType,
          pickUp,
          dropOff,
          pickTime,
          dropTime,
          inputPickupTime,
          inputDropoffTime,
          name,
          lastName,
          phone,
          age,
          email,
          address,
          city,
          zip,
          totalAmount: amount,
        });
  
        console.log('Booking added with ID: ', bookingRef.id);
        
        setTotalAmount(amount);
  
        // Send confirmation email using EmailJS
        const emailParams = {
          to_name: name,
          to_email: email, 
          from_name: "Car Rental Services",
          message: "Your booking was successful. Thank you!",
          currentDate,
          carType,
          pickUpLocation: pickUp,
          dropOffLocation: dropOff,
          pickUpDate: pickTime,
          dropOffDate: dropTime,
          inputPickupTime: inputPickupTime,
          inputDropoffTime:inputDropoffTime,
          totalAmount:amount,
          userName: name,
          userLastName: lastName,
          userPhone: phone,
          userAge: age,
          userEmail: email,  
          userAddress: address,
          userCity: city,
          userZip: zip,
        };
  
        // 'service_your_service_id' and 'template_your_template_id' 
        const emailResponse = await emailjs.send(
          'service_2p5z0ka',
          'template_2yjjf7e',
          emailParams
        );
  
        console.log('Email sent successfully:', emailResponse);
      }
    } catch (error) {
      console.error('Error adding booking: ', error);
    }
  
    const historyData = {
      carType,
      pickUp,
      dropOff,
      pickUpTime: pickTime,
      dropOffTime: dropTime,
      totalAmount: calculateOrderAmount(),
      userName: name,
      userLastName: lastName,
      userPhone: phone,
      userAge: age,
      userEmail: email,
      userAddress: address,
      userCity: city,
      userZip: zip,
    };
    localStorage.setItem('bookingData', JSON.stringify(historyData));
  
    setModal(!modal);
    const doneMsg = document.querySelector('.booking-done');
    doneMsg.style.display = 'flex';
    console.log('Booking was successful, Thank You!');
  };
  

  const handleReserveNow = (e) => {
    e.preventDefault();
    const checkbox = document.querySelector('input[type="checkbox"]');
    if (!checkbox.checked) {
      alert('Please agree to the Terms & Conditions.');
      return;
    }
    if (
      name === '' ||
      lastName === '' ||
      phone === '' ||
      age === '' ||
      email === '' ||
      address === '' ||
      city === '' ||
      zip === '' ||
      inputPickupTime === '' || 
      inputDropoffTime === ''
    ) {
      // Show an alert if any required field is empty
      alert('Please fill in all required fields!');
    }const amount = calculateOrderAmount();
    if (amount === 0) {
      alert('Sorry, cannot proceed with reservation because Total amount is $0.');
    }
    else {
      confirmBooking();
    }
  };




  const handleCar = (e) => {
    const selectedCarType = e.target.value;

    // Update carType state
    setCarType(selectedCarType);

    // Update carImg state based on the selected car type
    switch (selectedCarType) {
      case "Audi Q7":
        setCarImg(carAudi);
        break;
      case "Chevrolet Camaro":
        setCarImg(carCamaro);
        break;
      case "McLaren P7":
        setCarImg(carMc);
        break;
      case "Ferrari LaFerrari":
        setCarImg(carFerrari);
        break;
      case "Lamborghini Aventador":
        setCarImg(carAven);
        break;
      case "Porsche Panamera Turbo":
        setCarImg(carPorsche);
        break;
      default:
        setCarImg(""); // Set to an empty string if no match
    }
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

  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  let imgUrl;
  switch (carImg) {
    case carAudi:
      imgUrl = carAudi;
      break;
    case carCamaro:
      imgUrl = carCamaro;
      break;
    case carMc:
      imgUrl = carMc;
      break;
    case carFerrari:
      imgUrl = carFerrari;
      break;
    case carAven:
      imgUrl = carAven;
      break;
    case carPorsche:
      imgUrl = carPorsche;
      break;
    default:
      imgUrl = "";
  }


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
                    <option value="McLaren P7"> McLaren P7 </option>
                    <option value="Ferrari LaFerrari">
                      {" "}
                      Ferrari LaFerrari{" "}
                    </option>
                    <option value="Lamborghini Aventador">
                      {" "}
                      Lamborghini Aventador{" "}
                    </option>
                    <option value="Porsche Panamera Turbo">
                      {" "}
                      Porsche Panamera Turbo{" "}
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
                    <option>Los Santos International Airport</option>
                    <option>Del Perro Beach</option>
                    <option>Vinewood Hills</option>
                    <option>Rockford Hills</option>
                    <option>Downtown</option>
                    <option>Sandy Shores</option>
                    <option>Los Santos Port</option>
                    <option>Richman Golf Club</option>
                  </select>
                </div>

                <div className="box-form_car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-of-Location{" "}
                    <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleDrop}>
                    <option>Select drop off location</option>
                    <option>Los Santos International Airport</option>
                    <option>Del Perro Beach</option>
                    <option>Vinewood Hills</option>
                    <option>Rockford Hills</option>
                    <option>Downtown</option>
                    <option>Sandy Shores</option>
                    <option>Los Santos Port</option>
                    <option>Richman Golf Club</option>
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
                    min={new Date().toISOString().split('T')[0]}
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
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <button onClick={openModal} type="submit">
                  Book Now
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
          Your rental voucher is to be presented upon arrival at the rental desk, along with a toll-free customer support number. Please note that pickup and drop-off times may vary based on availability
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
                    {pickTime} / <input type="time" className="input-time" value={inputPickupTime} onChange={handleInputPickupTime} required/>
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
                    {dropTime} / <input type="time" className="input-time" value={inputDropoffTime} onChange={handleInputDropoffTime} required/>
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
                  required
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
                  required
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
                  required
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
                  min="18"
                  max="75"
                  required
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
                  required
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
                  required
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
                  required
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
                  required
                />
                <p className="error-modal">This is Required Field.</p>
              </span>
            </div>
            <span className="info-form_checkbox">
              <input type="checkbox" required/>
              <p>I agree to all <Link  to="/conditions" style={{ textDecoration: 'none' }}><strong>Terms & Conditions*</strong></Link></p>
            </span>
            <div className="booking-modal_total-amount">
            <h5>Total Amount</h5>
            <p>${calculateOrderAmount()}</p>
            </div>
            <p className="error-modal">After submitting the form, you'll receive an email with your reservation details, including car information, pickup/drop-off locations, scheduled times, 
            and instructions for completing the full payment. Ensure payment is made to secure your booking. For assistance, contact our toll-free number or reach out 
            through the website or email us at "carentalproject@gmail.com".
            Safe travels!</p>

            <div className="reserve-button">
              <button onClick={handleReserveNow}>Reserve Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookCar;
