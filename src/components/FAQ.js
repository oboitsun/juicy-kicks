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
    <div id="faq">
      <div className="my-container flex flex-col">
        <Heading>FAQ'S</Heading>
        <div className="text-center lg:w-1/2 mx-auto">
          <SubHeading>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </SubHeading>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 w-full">
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
