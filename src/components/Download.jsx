import React from "react";
// import Img1 from "../images/download/apple-store.svg";
// import Img2 from "../images/download/google-store.svg";

function Download() {
  return (
    <><section className="download-section">
      <h1 className="download_page_heading" >Locate us</h1>
      <p className="download_page_paragraph">Visit our car rental center,
      where convenience meets quality service.
      We're here to make your journey seamless, offering a wide range of vehicles to suit your needs.</p>
      <br/>      
      <iframe title="maps" width="100%" height="auto" frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Times%20Square%20n+(Car-rental-web)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
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
