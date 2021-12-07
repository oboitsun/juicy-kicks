import React from "react";
import "./../styles/roadmap.scss";
import Circle from "./Circle";
import Heading from "./Heading";
import Line from "./Line";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RoadmapLine from "./RoadmapLine";
const roadmap = [
  {
    img: "/imgs/roadmap-milestone1.svg",
    month: "25",
    heading: "November 2021",
    text: "Juicy Kicks world design and development starts. ",
  },
  {
    img: "/imgs/fruit5.png",
    month: "50",
    heading: "December 2021",
    text: "Official minting of the first 4444 Juicy Kicks begins.",
  },
  {
    img: "/imgs/roadmap-milestone3.svg",
    month: "75",
    heading: "January 2022",
    text: "Second phase of minting another 4444 Juicy Kicks",
  },
  {
    img: "/imgs/fruit5.png",
    month: "100",
    heading: "February 2022",
    text: "Potential game development, partnerships and expansion.",
  },
];
export default function Roadmap2() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const cont = {
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
    hidden: { opacity: 0 },
  };
  const item = {
    show: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <div id="roadmap" className="relative">
      <div className="absolute top-0 right-0 w-20 h-20">
        <Circle />
      </div>
      <div className="w-1/2 lg:w-3/4 absolute top-0 left-10">
        <Line rotate={135} />
      </div>
      <div className="w-1/2 lg:w-2/3 absolute top-10 left-3/4">
        <Line delay={2} rotate={135} />
      </div>
      <div className="my-container ">
        <Heading>roadmap</Heading>
        <motion.div
          ref={ref}
          variants={cont}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-5 grid-cols-1 lg:grid-cols-4 py-10 relative"
        >
          {roadmap.map((point, i) => (
            <motion.div
              variants={item}
              key={i}
              className="w-full flex flex-col gap-10  items-center milestone  z-10 relative p-5"
            >
              <div className={`roadmap-line ${i % 2 === 0 ? "top" : "bottom"}`}></div>
              <div className={`relative w-1/2 ${i % 2 === 0 ? "lg:order-1" : ""}`}>
                <img className="block w-full " src={point.img} alt="roadmap-milestone" />
                <p className={`roadmap-month month-${i + 1}`}>
                  {point.month}
                  <span>%</span>
                </p>
              </div>
              <div className="flex flex-col text-white  text-center">
                <p className="month-heading">{point.heading}</p>
                <p className="month-text  ">{point.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
