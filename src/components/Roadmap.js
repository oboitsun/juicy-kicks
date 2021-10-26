import React from "react";
import "./../styles/roadmap.scss";
import Heading from "./Heading";
import NFTCarousel from "./NFTCarousel";

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
  return (
    <div id="roadmap" className="relative">
      <div className="my-container ">
        <Heading>roadmap</Heading>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 py-10">
          {roadmap.map((point, i) => (
            <div key={i} className="w-full flex flex-col lg:flex-row gap-10 items-center">
              <div className="relative w-1/2 lg:w-1/3">
                <img className="block w-full" src={point.img} alt="roadmap-milestone" />
                <p className={`roadmap-month month-${i + 1}`}>
                  {point.month}
                  <span>%</span>
                </p>
              </div>
              <div className="flex flex-col text-white lg:w-1/2 text-center">
                <p className="month-heading">{point.heading}</p>
                <p className="month-text">{point.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
