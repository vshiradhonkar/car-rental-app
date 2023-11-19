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
            <p>These terms are governed by Indian law.</p>


            <br />
        <h1>13. Changes to Terms</h1>
            <p>We reserve the right to update these terms without notice, please review them regularly.</p>


            <br />
        <h1>14. Contact Information</h1>
            <p>For questions or concerns, please contact us at customer care service.</p>

            <br />
        <h1>15. Entire Agreement</h1>
            <p>These terms and the rental agreement constitute the entire agreement between you and us.</p>
        <br/>
        <h1>16. Age Restrictions</h1>
            <p>We only rent vehicles to drivers who meet our minimum and maximum age requirements.</p>

            <br />
        <h1>17. Additional Drivers</h1>
            <p>If you want to add an additional driver, please inform us in advance and provide their information.</p>

            <br />
        <h1>18. Vehicle Availability</h1>
            <p>We strive to provide the vehicle you've reserved, but in rare cases, we may substitute it with a similar model.</p>

            <br />
        <h1>19. Mileage Limits</h1>
            <p>Your rental agreement will specify any mileage limits. Exceeding these limits may result in extra charges.</p>

            <br />
        <h1>20. Roadside Assistance</h1>
            <p>We offer roadside assistance in case of emergencies or breakdowns during your rental period.</p>

            <br />
        <h1>21. Return Policy</h1>
            <p>Return your rental car on or before the specified date and time to avoid late fees.</p>

            <br />
        <h1>22. Child Safety Seats</h1>
            <p>We provide child safety seats upon request to ensure the safety of young passengers.</p>

            <br />
        <h1>23. GPS Navigation</h1>
            <p>For your convenience, we offer GPS navigation systems to help you find your way during your trip.</p>

            <br />
        <h1>24. Smoking Policy</h1>
            <p>Smoking is strictly prohibited in our rental vehicles. A cleaning fee may apply if this policy is violated.</p>

            <br />
        <h1>25. Pets and Animals</h1>
            <p>To maintain cleanliness and prevent allergies, pets and animals are not allowed in our vehicles.</p>

            <br />
        <h1>26. Lost or Damaged Items</h1>
            <p>We are not responsible for any personal items left in the rental vehicle, and fees may apply for lost or damaged items.</p>

            <br />
        <h1>27. Maintenance Responsibility</h1>
            <p>You are responsible for checking the vehicle's fluids and tire pressure during your rental and reporting any issues.</p>

            <br />
        <h1>28. Fuel Refilling</h1>
            <p>Return the vehicle with the same fuel level as at the start of the rental. A refueling fee may apply if not followed.</p>

            <br />
        <h1>29. International Travel</h1>
            <p>If you plan to travel to another country, please inform us in advance to ensure proper documentation.</p>
            
            <br />
        <h1>30. Changes to Booking Date and Time</h1>
            <p>We reserve the right to change the booking date and time based on the availability of vehicles.</p>

        <br />

        <p style={{color:"red", fontSize: "2rem"}}>*for more details contact customer care service*</p>
        <br/>
        
        <p style={{color:"black", fontWeight: "700"}}>By using our service, you agree to these terms and conditions. If you do not agree, please do not use our services.</p>
        <br/>
        <br/>
    </div>
        <Banner/>
        <Footer />
        <ScrollTop />
    </motion.div>
)
}

export default Conditions