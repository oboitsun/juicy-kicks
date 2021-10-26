import React from "react";
import "./../styles/team.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SubHeading from "./SubHeading";
import Heading from "./Heading";
const team = [
  {
    src: "/imgs/team1.png",
    name: "John Johnson",
    position: "CEO Juicy kicks",
    fb: "https://facebook.com",
    twitter: "https://twitter.com",
  },
  {
    src: "/imgs/team2.png",
    name: "John Johnson",
    position: "CEO Juicy kicks",
    fb: "https://facebook.com",
    twitter: "https://twitter.com",
  },
  {
    src: "/imgs/team3.png",
    name: "John Johnson",
    position: "CEO Juicy kicks",
    fb: "https://facebook.com",
    twitter: "https://twitter.com",
  },
  {
    src: "/imgs/team4.png",
    name: "John Johnson",
    position: "CEO Juicy kicks",
    fb: "https://facebook.com",
    twitter: "https://twitter.com",
  },
];
export default function Team() {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
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
      <div className="my-container">
        <Heading>team</Heading>

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
