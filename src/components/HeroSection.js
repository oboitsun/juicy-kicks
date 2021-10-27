import React from "react";
import "../styles/hero-section.scss";
import WelcomeTo from "./WelcomeTo";
import { m, motion } from "framer-motion";
export default function HeroSection({
  showPopup,
  setShowPopup,
  userAddress,
  connectStoic,
  connectWallet,
}) {
  return (
    <motion.div
      id="hero-section"
      className="relative overflow-hidden flex flex-col lg:flex-row items-center lg:justify-end"
    >
      <motion.img
        animate={{
          filter: ["blur(0px)", "blur(2px)"],
          scale: [1.2, 0.9],
          rotateX: [12, 7],
          rotateY: [4, 7],
          rotateZ: [2, 6],
          skew: [0, 4],
          top: ["25%", "27%"],
          left: ["33%", "35%"],
        }}
        transition={{ duration: 5, repeat: "Infinity", repeatType: "mirror" }}
        className="absolute pointer-events-none top-1/4 left-1/3 transform rotate-12 w-20"
        src="/imgs/juicy-card.png"
        alt="card"
      />
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
        src="/imgs/juicy-card.png"
        alt="card"
      />
      <div className=" hero-section-net">
        <img
          className=" w-full absolute  object-cover "
          src="/imgs/bottom-bg.png"
          alt="bg"
        />
        {/* <div className=" left-0 net-gradient"></div>
        <div className="right-0  net-gradient gradient-r"></div> */}
      </div>

      <div className="my-container relative z-10  lg:flex lg:justify-between">
        <WelcomeTo
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          connectStoic={connectStoic}
          connectWallet={connectWallet}
          userAddress={userAddress}
        />
        <div className="relative z-10 splash ">
          <img className="w-full relative z-10" src="/imgs/splash.png" alt="splash" />
          <div className="burst">
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
              className="w-full"
              src="/imgs/burst.png"
              alt="burst"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
