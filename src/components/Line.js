import React from "react";
import { motion } from "framer-motion";
export default function Line({ delay = 0, rotate = 45 }) {
  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className="h-0.5 w-full transform  
     overflow-hidden"
    >
      <motion.div
        className="w-full h-full bg-gray-200 "
        initial={{ opacity: 0 }}
        transition={{ duration: 5, repeat: "Infinity", repeatType: "reverse", delay }}
        animate={{
          opacity: 1,
          x: "200%",
        }}
      ></motion.div>
    </div>
  );
}
