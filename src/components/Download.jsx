import React from "react";
import Img1 from "../images/download/apple-store.svg";
import Img2 from "../images/download/google-store.svg";

function Download() {
  return (
    <>
      <section className="download-section">
        <div className="container">
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
        </div>
      </section>
    </>
  );
}

export default Download;
