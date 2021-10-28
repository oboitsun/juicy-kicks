import React from "react";
import FaqItem from "./FaqItem";
import "../styles/faq.scss";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { motion } from "framer-motion";

const faqs = [
  { qstn: "How do I buy a Juicy Kicks?", answr: "The Answer" },
  { qstn: "What Blockhain and technology are Juicy Kicks on?", answr: "The Answer" },
  { qstn: "What can I do with once I get my Juicy Kicks NFT?", answr: "The Answer" },
  { qstn: "How many Juicy Kicks caan I buy?", answr: "The Answer" },
];
export default function FAQ() {
  return (
    <div id="faq" className="relative">
      <motion.img
        animate={{
          filter: ["blur(0px)", "blur(2px)"],
          scale: [1.2, 0.9],
          rotateX: [12, -47],
          rotateY: [4, 67],
          rotateZ: [2, 26],
          skew: [0, 4],
          top: ["75%", "78%"],
          left: ["13%", "9%"],
        }}
        transition={{ duration: 5, repeat: "Infinity", repeatType: "mirror" }}
        className="absolute pointer-events-none top-1/4 left-1/3 transform rotate-12 w-20 z-10"
        src="/imgs/gooseberry.png"
        alt="card"
      />
      <motion.img
        animate={{
          filter: ["blur(0px)", "blur(2px)"],
          scale: [1.2, 0.9],
          rotateX: [140, 7],
          rotateY: [4, 147],
          rotateZ: [6, 6],
          skew: [0, 4],
          top: ["-5%", "-6%"],
          right: ["13%", "14%"],
        }}
        transition={{ duration: 5, repeat: "Infinity", repeatType: "mirror" }}
        className="absolute right-1/4 -top-1/4 w-1/12"
        src="/imgs/juicy-card1.png"
        alt="juicy-card"
      />
      <div className="my-container flex flex-col">
        <Heading>FAQ'S</Heading>
        <div className="text-center lg:w-1/2 mx-auto">
          <SubHeading>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </SubHeading>
        </div>
        <div className="grid grid-cols-1 gap-5 w-full">
          {faqs.map((f, i) => (
            <FaqItem key={i} {...f} />
          ))}
        </div>
      </div>
    </div>
  );
}
