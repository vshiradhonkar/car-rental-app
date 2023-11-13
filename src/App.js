import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import "../src/dist/styles.css";
import { SunspotLoader } from 'react-awesome-loaders-py3';
import AnimatedRoutes from './AnimatedRoutes';


function App() {
  // document.body.style.overflowX = 'hidden';//to hide the horizontal scroll bar in web page

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 1.65 seconds
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1650);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div  className="App">
      {loading ? (
        <div className="react_loader">
        <SunspotLoader
                gradientColors={["#ad21ff", "#E0E7FF"]}
                shadowColor={"#3730A3"}
                desktopSize={"46px"}
                mobileSize={"40px"}
        />
        </div>
      ):(
        <>
          <Navbar />
          <AnimatedRoutes />
        </>
      )}
    </div>
  );
}

export default App;