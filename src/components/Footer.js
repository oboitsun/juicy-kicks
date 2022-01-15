import React from "react";
import Logo from "./Logo";
import "../styles/footer.scss";
import Socials from "./Socials";

export default function Footer({
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
}) {

  return (
    <div className="footer ">
      <div className="my-container ">
        <div className="w-full justify-center flex-col flex items-center">
          <div className="flex flex-col items-center ">
            <Logo wide={false} />
            <div className="lg:hidden pt-5">
              {" "}
              <Socials big />
            </div>

            <p className="text-white lg:hidden text-center py-5">
              2021 © Juicy Kicks. All Rights Reserved.
            </p>
          </div>
          <p className="hidden lg:block text-white  text-center py-5">
            2021 © Juicy Kicks. All Rights Reserved.
          </p>
          <div className="hidden lg:flex text-xs xl:text-base font-bold lg:gap-8 xl:gap-10 items-center">
            {/* {links.map((l, i) => (
              <Anchor key={i} to={l.href} {...linkProps}>
                {l.text}
              </Anchor>
            ))} */}

            <div className="lg:block hidden ">
              <Socials />
            </div>
            {/* <ConnectWallet
              showPopup={showPopup}
              setShowPopup={setShowPopup}
              setUserAddress={setUserAddress}
              userAddress={userAddress}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
