import React, { useState, useEffect } from "react";
import FAQ from "./components/FAQ";
import "./styles/common.scss";
import HeroSection from "./components/HeroSection";
import Team from "./components/Team";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModalMenu from "./components/ModalMenu";
import ComingSoonPopUp from "./components/ComingSoonPopUp";
import Roadmap from "./components/Roadmap";
import ContactUs from "./components/ContactUs";
import BottomSection from "./components/BottomSection";
import AboutUs from "./components/AboutUs";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e) => {
    if (e.target.scrollingElement.scrollTop < 10) setScrolled(false);
    if (e.target.scrollingElement.scrollTop >= 10) setScrolled(true);
  };
  //scrolling listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  //connect wallet functions
  const [userAddress, setUserAddress] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className=" relative overflow-hidden app">
      <div id="top"></div>
      <img
        className="w-full h-full fixed top-0 left-0 object-cover z-0"
        src="/imgs/fixed-bg.jpg"
        alt="fixed"
      />
      <Header
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        userAddress={userAddress}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        scrolled={scrolled}
        setUserAddress={setUserAddress}
      />

      <HeroSection
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        setUserAddress={setUserAddress}
        userAddress={userAddress}
      />
      <AboutUs />

      <Team />
      <Roadmap />
      <FAQ />
      <div className="bottom-gradient">
        <ContactUs />
        <BottomSection />
      </div>

      <Footer
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        setUserAddress={setUserAddress}
        userAddress={userAddress}
      />

      <ComingSoonPopUp showPopup={showPopup} setShowPopup={setShowPopup} />
      <ModalMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}
