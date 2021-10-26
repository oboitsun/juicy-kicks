import React from "react";
import "../styles/heading.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Heading({ children }) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  return (
    <motion.div
      ref={ref}
      initial={{ color: "#000" }}
      animate={
        inView ? { scale: [1, 1.05, 1], color: ["#000", "#fff"] } : { color: "#000" }
      }
      transition={{
        delay: 0.3,
        repeatDelay: 0.3,
        repeatType: "reverse",
        // repeat: "Infinity",
        ease: "easeOut",
        duration: 1,
      }}
      className="heading font-fright uppercase text-center"
    >
      {children}
    </motion.div>
  );
}
