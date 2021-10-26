import React from "react";
import { motion } from "framer-motion";
export default function JuicyCard() {
  return (
    <motion.img
      animate={{
        filter: ["blur(0px)", "blur(2px)"],
        scale: [1.2, 0.9],
        rotateX: [12, 7],
        rotateY: [4, 7],
        rotateZ: [2, 6],
        skew: [0, 4],
        top: ["0%", "3%"],
        left: ["83%", "85%"],
      }}
      transition={{ duration: 5, repeat: "Infinity", repeatType: "mirror" }}
      className="absolute pointer-events-none top-1/4 left-1/3 transform rotate-12 w-20"
      src="/imgs/juicy-card.png"
      alt="card"
    />
  );
}
