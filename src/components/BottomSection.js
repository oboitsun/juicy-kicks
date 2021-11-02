import React from "react";
import "../styles/bottom-section.scss";
export default function BottomSection() {
  return (
    <div className="pt-20 relative bottom-section">
      <div className="my-container relative bottom-20">
        <img
          className="xoverflow-hidden block w-full  relative top-5  z-10"
          src="/imgs/squad-bottom.png"
          alt="squaaaaad"
        />{" "}
        {/* <img className="other-cards-l-1 other-cards" src="/imgs/card1.png" alt="card" />
        <img
          className="other-cards-l-3 other-cards"
          src="/imgs/card3.png"
          alt="card"
        />{" "}
        <img className="other-cards-l-2 other-cards" src="/imgs/card7.png" alt="card" />
        <img className="other-cards-r-2 other-cards r" src="/imgs/card5.png" alt="card" />
        <img className="other-cards-r-3 other-cards r" src="/imgs/card6.png" alt="card" />
        <img className="other-cards-r-1 other-cards r" src="/imgs/card4.png" alt="card" /> */}
      </div>
      <div className="bottom-section-net">
        <img
          className=" w-full absolute  object-cover "
          src="/imgs/bottom-bg.png"
          alt="bg"
        />
      </div>
    </div>
  );
}
