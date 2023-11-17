import React, { useEffect, useState } from 'react';
import HeroPages from '../components/HeroPages';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Banner from '../components/Banner';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs, query } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';

function History() {
  const [rentalHistoryData, setRentalHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          setLoading(true);
          setError(null);

          const q = query(collection(db, `users/${user.uid}/bookings`));
          const querySnapshot = await getDocs(q);

          const historyData = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            historyData.push({
              id: doc.id,
              carName: data.carType,
              pickUpDate: data.pickTime,
              dropOffDate: data.dropTime,
              pickUpLocation: data.pickUp,
              dropOffLocation: data.dropOff,
              totalAmount: data.totalAmount,
            });
          });
          setRentalHistoryData(historyData);
        } catch (error) {
          console.error('Error fetching booking history: ', error);
          setError('Error fetching booking history');
        } finally {
          setLoading(false);
        }
      } else {
        setRentalHistoryData([]);
        setLoading(false);
      }
    });

    // Cleanup function
    return () => unsubscribe();
  }, [auth, db]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      className='history'
    >
      <HeroPages name='Rental History' />
      <div className="history-container">
        <h2>Your Rental History</h2>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && rentalHistoryData.length === 0 && (<div className='no-history'>
        <NavLink to="/" style={{ textDecoration: 'none', color:"#ad21ff" }}>Explore our premium cars and start building your rental history with us today! Book Now.</NavLink>
          </div>)}

        {!loading && !error && rentalHistoryData.length > 0 && (
          <table className="history-table">
            <thead>
              <tr style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                <th>Car Name</th>
                <th>Pick-up Date</th>
                <th>Drop-off Date</th>
                <th>Pick-up Location</th>
                <th>Drop-off Location</th>
                <th>Total Amount</th>
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
                  <td>
                  {typeof historyItem.totalAmount === 'number'
                    ? `$${historyItem.totalAmount}`
                    : 'N/A'}  
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Banner />
      <Footer />
      <ScrollTop />
    </motion.div>
  );
}

export default History;