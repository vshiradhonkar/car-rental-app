import React from 'react';
import HeroPages from "../components/HeroPages";
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import Banner from '../components/Banner';

function History() {
  // Dummy rental history data (replace with your actual data)
const rentalHistoryData = [
    {
    id: 1,
    carName: "Toyota Camry",
    pickUpDate: "2023-01-01",
    dropOffDate: "2023-01-05",
    pickUpLocation: "City A",
    dropOffLocation: "City B",
    },
    // Add more rental history entries as needed
];

return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }} className='history'>
        <HeroPages name="Rental History" />
        <div className='history-container'>
        <h2>Your Rental History</h2>
        <table className='history-table'>
            <thead>
            <tr>
                <th>Car Name</th>
                <th>Pick-up Date</th>
                <th>Drop-off Date</th>
                <th>Pick-up Location</th>
                <th>Drop-off Location</th>
            </tr>
        </thead>
        <tbody>
            {rentalHistoryData.map((historyItem) => (
            <tr key={historyItem.id}>
                <td>{historyItem.carName}</td>
                <td>{historyItem.pickUpDate}</td>
                <td>{historyItem.dropOffDate}</td>
                <td>{historyItem.pickUpLocation}</td>
                <td>{historyItem.dropOffLocation}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    <Banner />
    <Footer />
    <ScrollTop />
    </motion.div>
);
}

export default History;
