import React from 'react'
import BookCar from "../components/BookCar";
import Hero from "../components/Hero";
import PlanTrip from '../components/PlanTrip';
import PickCar from '../components/PickCar';
import Banner from "../components/Banner"
import Testimonial from "../components/Testimonials"
import Faq from "../components/Faq"
import ChooseUs from '../components/ChooseUs';
import Download from '../components/Download';
import {motion} from "framer-motion";

function Home() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <Hero/>
      <BookCar/>
      <PlanTrip/>
      <PickCar/>
      <Banner/>
      <ChooseUs/>
      <Testimonial/>
      <Faq/>
      <Download/>
    </motion.div>
  )
}

export default Home