import React, { useEffect, useState } from "react";
import Burger from "./Burger";
import Logo from "./Logo";
import { Link as Anchor } from "react-scroll";
import "../styles/header.scss";
import Button from "./Button";
import Socials from "./Socials";
import ConnectWallet from "./ConnectWallet";

export default function Header({
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
  showMenu,
  setShowMenu,
  scrolled,
}) {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    window && setRendered(true);
  }, []);
  const links = [
    { href: "about-us", text: "About" },
    { href: "team", text: "Team" },
    { href: "roadmap", text: "Roadmap" },
    { href: "https://portal.juicykicks.io", text: "Portal" },
    { href: "contact-us", text: "Get in touch" },
  ];

  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: "active",
    className: "anchor text-white ",
  };
  return (
    <div id="header" className={` ${scrolled ? "bg-orange py-3 shadow-lg" : "py-7"}`}>
      <div className="my-container justify-between flex items-center">
        <div className="w-1/4 lg:w-1/6">
          <Logo wide={false} />
        </div>
        <Burger showMenu={showMenu} setShowMenu={setShowMenu} />
        <div className="hidden lg:flex text-xs xl:text-base font-bold lg:gap-6   xl:gap-10 items-center">
          {links.map((l, i) =>
            l.text !== "Portal" ? (
              <Anchor key={i} to={l.href} {...linkProps}>
                {l.text}
              </Anchor>
            ) : (
              <a className="anchor text-white" href={l.href}>
                {l.text}
              </a>
            )
          )}
          <Socials />
          {rendered && (
            <ConnectWallet
              header
              showPopup={showPopup}
              setShowPopup={setShowPopup}
              setUserAddress={setUserAddress}
              userAddress={userAddress}
            />
          )}
        </div>
      </div>
    </div>
  );
}
