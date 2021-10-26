import React from "react";
import "./../styles/roadmap.scss";
import Circle from "./Circle";
import Heading from "./Heading";
import Line from "./Line";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const roadmap = [
  {
    img: "/imgs/fruit1.png",
    month: "0",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: "/imgs/fruit5.png",
    month: "25",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: "/imgs/fruit2.png",
    month: "50",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: "/imgs/fruit3.png",
    month: "75",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: "/imgs/fruit4.png",
    month: "100",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
export default function Roadmap() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const cont = {
    show: { opacity: 1, transition: { staggerChildren: 0.5, delayChildren: 0.5 } },
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
          className="grid gap-8 grid-cols-1 lg:grid-cols-2 py-10"
        >
          {roadmap.map((point, i) => (
            <motion.div
              variants={item}
              key={i}
              className="w-full flex flex-col lg:flex-row gap-10 items-center milestone"
            >
              <div className="relative w-1/2 lg:w-1/3">
                <img className="block w-full " src={point.img} alt="roadmap-milestone" />
                <p className={`roadmap-month month-${i + 1}`}>
                  {point.month}
                  <span>%</span>
                </p>
              </div>
              <div className="flex flex-col text-white lg:w-1/2 text-center">
                <p className="month-heading">{point.heading}</p>
                <p className="month-text">{point.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
