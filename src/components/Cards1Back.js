import React from "react";
import { motion } from "framer-motion";
export default function Cards1Back() {
  return (
    <>
      <motion.img
        animate={{
          filter: ["blur(0px)", "blur(2px)"],
          scale: [1.2, 0.9],
          rotateX: [12, 7],
          rotateY: [4, 7],
          rotateZ: [2, 6],
          skew: [0, 4],
          top: ["21%", "17%"],
          left: ["53%", "55%"],
        }}
        transition={{ duration: 5, repeat: "Infinity", repeatType: "mirror" }}
        className="absolute hidden lg:block pointer-events-none top-1/4 left-1/3 transform rotate-12 w-20 z-10"
        src="/imgs/coconut.png"
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
          top: ["15%", "23%"],
          left: ["59%", "62%"],
        }}
        transition={{ duration: 5, repeat: "Infinity", repeatType: "mirror" }}
        className="absolute hidden lg:block pointer-events-none top-1/4 left-1/3 transform rotate-12 w-20 z-10"
        src="/imgs/cherry.png"
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
          top: ["18%", "19%"],
          left: ["70%", "79%"],
        }}
        transition={{ duration: 5, repeat: "Infinity", repeatType: "mirror" }}
        className="absolute pointer-events-none top-1/4 left-1/3 transform rotate-12 w-20 z-10"
        src="/imgs/fig.png"
        alt="card"
      />
    </>
  );
}
