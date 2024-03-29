import React from "react";
import "../styles/hero-section.scss";
import WelcomeTo from "./WelcomeTo";
import { motion } from "framer-motion";
import SplashCarousel from "./SplashCarousel";
import Cards1Back from "./Cards1Back";
export default function HeroSection({ showPopup, setShowPopup, userAddress, setUserAddress }) {
  return (
    <motion.div
      id="hero-section"
      className="relative overflow-hidden flex flex-col lg:flex-row items-center lg:justify-end"
    >
      <Cards1Back />

      <motion.img
        animate={{
          filter: ["blur(0px)", "blur(2px)"],
          scale: [1.2, 0.9],
          rotateX: [12, -47],
          rotateY: [4, 67],
          rotateZ: [2, 26],
          skew: [0, 4],
          top: ["75%", "78%"],
          left: ["93%", "89%"],
        }}
        transition={{ duration: 5, repeat: "Infinity", repeatType: "mirror" }}
        className="absolute pointer-events-none top-1/4 left-1/3 transform rotate-12 w-20 z-10"
        src="/imgs/cherry.png"
        alt="card"
      />
      <div className=" hero-section-net">
        <img className=" w-full absolute  object-cover " src="/imgs/bottom-bg.png" alt="bg" />
      </div>

      <div className="my-container relative z-10  lg:flex lg:justify-between">
        <WelcomeTo
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          setUserAddress={setUserAddress}
          userAddress={userAddress}
        />
        <div className="relative z-10 splash ">
          <SplashCarousel />
          <div className="burst pointer-events-none">
            <motion.img
              animate={{
                scale: [1, 1.05, 0.9, 1],
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: "Infinity",
                repeatType: "loop",
                ease: "linear",
              }}
              className="w-full pointer-events-none"
              src="/imgs/burst.png"
              alt="burst"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
