import React from "react";
import "./../styles/team.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SubHeading from "./SubHeading";
import Heading from "./Heading";
import Line from "./Line";
import JuicyCard from "./JuicyCard";
const team = [
  {
    src: "/imgs/card8.png",
    name: "John Johnson",
    position: "CEO Juicy kicks",
    fb: "https://facebook.com",
    twitter: "https://twitter.com",
  },
  {
    src: "/imgs/card2.png",
    name: "John Johnson",
    position: "CEO Juicy kicks",
    fb: "https://facebook.com",
    twitter: "https://twitter.com",
  },
  {
    src: "/imgs/card3.png",
    name: "John Johnson",
    position: "CEO Juicy kicks",
    fb: "https://facebook.com",
    twitter: "https://twitter.com",
  },
  {
    src: "/imgs/card5.png",
    name: "John Johnson",
    position: "CEO Juicy kicks",
    fb: "https://facebook.com",
    twitter: "https://twitter.com",
  },
];
export default function Team() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const cont = {
    show: {
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.3 },
    },
    hidden: { transition: { duration: 0.3 } },
  };
  const item = {
    show: {
      x: 0,
      scale: [1, 1.3, 1],
      opacity: 1,
      transition: { duration: 0.3, staggerChildren: 0.5, delayChildren: 0.5 },
    },
    hidden: { x: "-100%", scale: 0, opacity: 0, transition: { duration: 0.3 } },
  };
  const item1 = {
    show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { y: "-50px", opacity: 0, transition: { duration: 0.3 } },
  };
  return (
    <div id="team" className=" ">
      <div className="my-container relative">
        <motion.img
          animate={{
            filter: ["blur(0px)", "blur(2px)"],
            scale: [1.2, 0.9],
            rotateX: [12, -47],
            rotateY: [4, 67],
            rotateZ: [2, 26],
            skew: [0, 4],
            top: ["15%", "18%"],
            left: ["13%", "9%"],
          }}
          transition={{ duration: 5, repeat: "Infinity", repeatType: "mirror" }}
          className="absolute pointer-events-none top-1/4 left-1/3 transform rotate-12 w-20 z-10"
          src="/imgs/blueberry.png"
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
            top: ["95%", "98%"],
            left: ["83%", "89%"],
          }}
          transition={{ duration: 5, repeat: "Infinity", repeatType: "mirror" }}
          className="absolute pointer-events-none top-1/4 left-1/3 transform rotate-12 w-20 z-10"
          src="/imgs/fig.png"
          alt="card"
        />
        <Heading>team</Heading>
        <div className="w-1/2 lg:w-1/4 absolute top-0 -left-1/4">
          <Line />
        </div>
        <div className="w-1/2 lg:w-1/4 absolute top-10 -left-1/4">
          <Line delay={1} />
        </div>
        <JuicyCard />
        <motion.div
          variants={cont}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          ref={ref}
          className="team-grid"
        >
          {team.map((t, i) => (
            <motion.div
              variants={item}
              key={i}
              className="flex flex-col w-full team-member"
            >
              <div className="w-full relative z-[1] hover mb-6">
                <img src={t.src} alt={t.name} />
              </div>
              <motion.div variants={item1} className="team-name flex items-center">
                <div className="mr-auto">
                  {t.name}

                  <p className="team-pos"> {t.position}</p>
                </div>
                <div className="flex gap-1">
                  <a href={t.fb}>
                    <img className="icon icon-fb" src="/imgs/fb.svg" />
                  </a>
                  <a href={t.twitter}>
                    <img className="icon " src="/imgs/twitter.svg" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
