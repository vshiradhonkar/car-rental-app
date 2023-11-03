import React from 'react'
import HeroPages from "../components/HeroPages";
import Footer from "../components/Footer"
import Testimonials from "../components/Testimonials"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import ScrollTop from '../components/ScrollTop';
import {motion} from "framer-motion";


function TestimonialsPage() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <section className="testimonial-page">
        <HeroPages name="Testimonials" />
        <Testimonials />
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <FontAwesomeIcon icon={faPhone}/>
                <h3>(0) 123-456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
        <ScrollTop/>
      </section>
    </motion.div>
  )
}

export default TestimonialsPage;