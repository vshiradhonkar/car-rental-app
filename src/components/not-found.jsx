import React from 'react';
import {motion} from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../Animations/404 animation.json";




function NotFound() {

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
    <div className='not-found_page'>
        <Lottie  options={lottieOptions} height={700} width={"auto"} />
    </div>
    </motion.div>
  )
}

export default NotFound