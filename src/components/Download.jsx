import React from "react";
// import Img1 from "../images/download/apple-store.svg";
// import Img2 from "../images/download/google-store.svg";

function Download() {
  return (
    <><section className="download-section">
      <h1 className="download_page_heading" >Locate us</h1>
      <p className="download_page_paragraph">Visit our CAR Rental center,
      where convenience meets quality service.
      We're here to make your journey seamless, offering a wide range of vehicles to suit your needs.</p>
      <br/>
      <iframe title="map" width="100%" height="auto"  scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=707%20Wilshire%20Blvd,%20Los%20Angeles,%20CA%2090017,%20USA+(Car%20Rental)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      {/* <iframe title="map" width="100%" height="auto" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=1000&amp;hl=en&amp;q=Times%20Square,Manhattan,%20NY%2010036,%20United%20States+(Carental%20Location)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}
      {/* <div className="container">
          <div className="download-text">
            <h2>Download Our App to get most out of it</h2>
            <p>
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="download-text_btns">
              <img src={Img2} alt="download-img" />
              <img src={Img1} alt="download-img" />
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}

export default Download;
