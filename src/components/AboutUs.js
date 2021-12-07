import React from "react";
import { motion } from "framer-motion";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import "../styles/about-us.scss";
import CarouselCards from "./CarouselCards";
export default function AboutUs() {
  return (
    <div id="about-us" className="relative ">
      <motion.img
        animate={{
          filter: ["blur(0px)", "blur(2px)"],
          scale: [1.2, 0.9],
          rotateX: [12, -47],
          rotateY: [4, 67],
          rotateZ: [2, 26],
          skew: [0, 4],
          top: ["5%", "8%"],
          left: ["3%", "9%"],
        }}
        transition={{ duration: 5, repeat: "Infinity", repeatType: "mirror" }}
        className="absolute pointer-events-none top-1/4 left-1/3 transform rotate-12 w-20 z-10"
        src="/imgs/fig.png"
        alt="card"
      />
      <motion.img
        animate={{
          filter: ["blur(0px)", "blur(2px)"],
          scale: [1.2, 0.9],
          rotateX: [140, 7],
          rotateY: [4, 147],
          rotateZ: [142, 6],
          skew: [0, 4],
          top: ["-5%", "-6%"],
          right: ["13%", "14%"],
        }}
        transition={{ duration: 5, repeat: "Infinity", repeatType: "mirror" }}
        className="absolute right-1/4 -top-1/4 w-1/12"
        src="/imgs/juicy-card1.png"
        alt="juicy-card"
      />
      <div className="my-container flex flex-col lg:flex-row items-center lg:gap-20 xl:gap-20 pb-20">
        <div className="lg:w-1/2 h-full">
          <CarouselCards />
        </div>
        <div className="lg:w-1/2 pt-40 lg:pt-0 lg:pl-10 xl:pl-0">
          <Heading>
            About <br /> Juicy kicks
          </Heading>
          <SubHeading>
            Donec gravida tellus nec elit consequat ultrices. Vivamus vel tincidunt
            mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante,
            et accumsan felis imperdiet at. In purus libero, venenatis dignissim massa ac,
            sodales malesuada quam. Aliquam in fermentum metus. Donec in mauris arcu.
          </SubHeading>
        </div>
      </div>
    </div>
  );
}
