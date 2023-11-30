import React from 'react';
import HeroPages from '../components/HeroPages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import ScrollTop from '../components/ScrollTop';
import {motion} from "framer-motion";

function Team() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="container">
          <div className="team-container">
          {/* Add the team data here  */}
          
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <FontAwesomeIcon icon={faPhone}/>
                <h3>(0) 123-456-6789</h3>
              </span>
            </div>
          </div>
        </div>
        <ScrollTop/>
      </section>
    </motion.div>
  )
}

export default Team