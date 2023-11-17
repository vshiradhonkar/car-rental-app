import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Navbar/Car Rental.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { auth } from "../firebase";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsUserSignedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const navbarClass = scrollPosition > 0 ? "navbar navbar-blur" : "navbar";
  const openNav = () => {
    setNav(!nav);
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      alert("Signed out successfully. Thank You!");
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
        {/* For Mobiles */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar_close">
            <FaTimes />
          </div>
          <ul className="mobile-navbar_links">
            <li>
              <Link  onClick={() => { openNav(); window.scrollTo(0, 0); }} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => { openNav(); window.scrollTo(0, 0); }} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={() => { openNav(); window.scrollTo(0, 0); }} to="/models">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={() => { openNav(); window.scrollTo(0, 0); }} to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={() => { openNav(); window.scrollTo(0, 0); }} to="/conditions">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link onClick={() => { openNav(); window.scrollTo(0, 0); }} to="/contact">
                Contact
              </Link>
            </li>
            {
              isUserSignedIn ? (
                <>
                <li>
                <Link onClick={() => { openNav(); window.scrollTo(0, 0); }} to="/history">
                  Rental History
                </Link></li>
                <li>
                <Link onClick={handleSignOut} to="/" >
                  Sign out
                </Link>
              </li>
              </>
            ) : (
              <>
              <li>
              <Link onClick={() => { openNav(); window.scrollTo(0, 0); }} to="/sign-in">
              Sign in
            </Link>
            </li>
            <li>
            <Link onClick={() => { openNav(); window.scrollTo(0, 0); }} to="/register">
              Register
            </Link>
            </li>
            </>
            )
            }
          </ul>
        </div>

        {/* For Desktops */}

        <div className={navbarClass}>
          <div className="navbar_img">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <img className="navbar-logo" src={Logo} alt="logo" />
            </Link>
          </div>
          <ul className="navbar_links">
            <li>
              <Link onClick={() => window.scrollTo(0, 0)} className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => window.scrollTo(0, 0)} className="about-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={() => window.scrollTo(0, 0)} className="models-link" to="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              <Link onClick={() => window.scrollTo(0, 0)} className="testi-link" to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={() => window.scrollTo(0, 0)} className="team-link" to="/conditions">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link onClick={() => window.scrollTo(0, 0)} className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar_buttons">
            {
              isUserSignedIn ? (<>
                <Link onClick={() => window.scrollTo(0, 0)} className="navbar_buttons_sign-in" to="/history">
                  Rental History
                </Link>
                <Link onClick={handleSignOut} className="navbar_buttons_sign-out" to="/">
                  Sign out
                </Link>
              </>
            ) : (<>
              <Link onClick={() => window.scrollTo(0, 0)} className="navbar_buttons_sign-in" to="/sign-in">
              Sign in
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} className="navbar_buttons_register" to="/register">
              Register
            </Link>
            </>
            )
            }
          </div>

          {/* for Mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <FaBars />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
