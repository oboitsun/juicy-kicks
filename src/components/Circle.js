import React from "react";
import { motion } from "framer-motion";
export default function Circle({ delay }) {
  return (
    <motion.div
      className="w-full h-full border rounded-full "
      initial={{ opacity: 0 }}
      transition={{ duration: 5, repeat: "Infinity", repeatType: "reverse", delay }}
      animate={{
        opacity: 1,
        scale: 1.5,
      }}
    ></motion.div>
  );
}
