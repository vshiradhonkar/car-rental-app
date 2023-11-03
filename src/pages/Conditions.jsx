import React from 'react';
import HeroPages from "../components/HeroPages";
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import Banner from '../components/Banner';


function Conditions() {
return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition: {duration:0.1}}} className='terms'>
        <HeroPages name="Terms & Conditions" />
        <h1 className='termsheading'>Car Rental Terms and Conditions</h1>
    <p className='termspara'>Welcome to our car rental service. Please read these Terms and Conditions carefully before using our website or app.</p>
    <div className='allconditions'>
    
        <h1>1. Booking and Reservation</h1>
            <p>To book a rental car, you must be of legal driving age and have a valid driver's license.</p>
            <p>Reservations are subject to availability and may require a deposit.</p>


            <br />
        <h1>2. Rental Agreement</h1>
            <p>Each rental is subject to a formal rental agreement, which outlines terms, conditions, and responsibilities.</p>


            <br />
        <h1>3. Payment and Fees</h1>
            <p>Payment must be made in advance, and additional fees may apply for late returns or damages.</p>


            <br />
        <h1>4. Cancellation and Refunds</h1>
            <p>Cancellation policies and refund conditions are specified in the rental agreement.</p>


            <br />
        <h1>5. Vehicle Condition</h1>
            <p>You are responsible for returning the vehicle in the same condition as received.</p>


            <br />
        <h1>6. Insurance and Liability</h1>
            <p>Rental insurance is available, and liability coverage is outlined in the rental agreement.</p>

            <br />

        <h1>7. Driver's Responsibility</h1>
            <p>Drivers are responsible for obeying all traffic laws and for any fines or penalties incurred.</p>


            <br />
        <h1>8. Fuel Policy</h1>
            <p>Fuel policies, including full-to-full or pre-paid, are specified in the rental agreement.</p>

            <br />

        <h1>9. Maintenance and Repairs</h1>
            <p>Report any mechanical issues promptly, and follow procedures outlined in the rental agreement.</p>


            <br />
        <h1>10. Prohibited Activities</h1>
            <p>Prohibited activities, such as smoking or off-road driving, are outlined in the rental agreement.</p>


            <br />
        <h1>11. Data Privacy</h1>
            <p>We collect and use personal data as described in our Privacy Policy.</p>


            <br />
        <h1>12. Governing Law</h1>
            <p>These terms are governed by [Your Jurisdiction] law.</p>


            <br />
        <h1>13. Changes to Terms</h1>
            <p>We reserve the right to update these terms without notice; please review them regularly.</p>


            <br />
        <h1>14. Contact Information</h1>
            <p>For questions or concerns, please contact us at [Your Contact Information].</p>

            <br />
        <h1>15. Entire Agreement</h1>
            <p>These terms and the rental agreement constitute the entire agreement between you and us.</p>
        
        <p style={{color:"red", fontSize: "2rem"}}>*for more details contact customer care service</p>
        <br/>
        <br/>
        
        <p style={{color:"black", fontWeight: "700"}}>By using our service, you agree to these terms and conditions. If you do not agree, please do not use our services.</p>
        
    </div>
        <Banner/>
        <Footer />
        <ScrollTop />
    </motion.div>
)
}

export default Conditions