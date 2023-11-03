import React, { useEffect } from 'react';

function Captcha() {
  const recaptchaCallback = () => {
    const response = window.grecaptcha.getResponse();
    const button = document.querySelector(".button-register");
    document.querySelector("#hidden-grecaptcha").value = response;
    console.log(document.querySelector("#registerForm").valid());
    if (document.querySelector("#registerForm").valid()) {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", "disabled");
    }
  };

  const recaptchaExpired = () => {
    const button = document.querySelector(".button-register");
    document.querySelector("#hidden-grecaptcha").value = "";
    if (document.querySelector("#registerForm").valid()) {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", "disabled");
    }
  };

  useEffect(() => {
    window.recaptchaCallback = recaptchaCallback;
    window.recaptchaExpired = recaptchaExpired;
  }, []);

  return (
    <div>
      <div
        className="g-recaptcha"
        data-sitekey="6LeS4O8SAAAAALWqAVWnlcB6TDeIjDDAqoWuoyo9"
        data-callback="recaptchaCallback"
        data-expired-callback="recaptchaExpired"
        style={{ marginTop: '3rem' }}
      ></div>
      <input
        id="hidden-grecaptcha"
        name="hidden-grecaptcha"
        type="text"
        style={{
          opacity: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          height: '1px',
          width: '1px',
        }}
      />
    </div>
  );
}

export default Captcha;
