import React from "react";
import FaqItem from "./FaqItem";
import "../styles/faq.scss";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { motion } from "framer-motion";

const faqs = [
  {
    qstn: "How do I buy a Juicy Kicks?",
    answr:
      "It’s simple, just press the “Connect Wallet” button, and connect with either STOIC Wallet or Plug. You will then be able to “Mint” your own Juicy Kick using the “Mint Now” button. Please note there is a limit of 20 Juicy Kicks per person.",
  },
  {
    qstn: "What Blockhain and technology are Juicy Kicks on?",
    answr:
      "We have minted the Juicy Kicks on the Solana blockchain, in which we believe is perfect for the project. ",
  },
  {
    qstn: "What can I do with my Juicy Kick once purchased?",
    answr:
      "At this stage you can collect it, like other NFT’s with the high possibility of the value of it increasing. We believe that not only is it fun, cool artwork, but there could be potential in the future to turn Juicy Kicks into potentially a game, or something even larger in the future.",
  },
  {
    qstn: "How many Juicy Kicks can I buy?",
    answr: `You can buy only 20 Juicy Kicks per person. There will be other ones available on the secondary market place in which you can buy and sell your Juicy Kicks as you wish.`,
  },
  {
    qstn: "What wallet do I need to be able to connect to buy?",
    answr: "You can connect using Phantom wallet at this time",
  },
  {
    qstn: "What are the future plans for the Juicy Kicks project?",
    answr:
      "We have plans to make a potential game, which will include VS mode and team mode. We have other ideas for future NFT collections that can be used in the same game with Juicy Kicks, so stay tuned!",
  },
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
        className="absolute pointer-events-none top-1/4 left-1/3 transform rotate-12 w-20 z-0 hidden lg:block"
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
          top: ["1%", "3%"],
          right: ["13%", "14%"],
        }}
        transition={{ duration: 5, repeat: "Infinity", repeatType: "mirror" }}
        className="absolute right-1/4 -top-1/4 w-1/12"
        src="/imgs/juicy-card1.png"
        alt="juicy-card"
      />
      <div className="my-container flex flex-col">
        <Heading>FAQ'S</Heading>
        <div className="text-center lg:w-4/5 mx-auto">
          <SubHeading>Some answers to some of the questions you may have</SubHeading>
        </div>
        <div className="grid lg:grid-cols-2 gap-x-5 text-white">
          <div className="faq-divider"></div>
          <div className="faq-divider hidden lg:block"></div>
          {faqs.map((f, i) => (
            <FaqItem key={i} {...f} />
          ))}
        </div>
      </div>
    </div>
  );
}
