import React, { useEffect, useState } from "react";
import "../styles/utilities-section.scss";
import "swiper/swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import Heading from "./Heading";

const utilities = [
  {
    img: "/imgs/utilities/1.png",
    icon: "/imgs/utilities/icon1.svg",
    text: "The more you hold - the more games you can access",
  },
  {
    img: "/imgs/utilities/2.png",
    icon: "/imgs/utilities/icon2.svg",
    text: `Future airdrops to
    Juicy Kicks holders`,
  },
  {
    img: "/imgs/utilities/3.png",
    icon: "/imgs/utilities/icon3.svg",
    text: `Ability to form a team for
    the Battle Kicks tournament`,
  },
  {
    img: "/imgs/utilities/4.png",
    icon: "/imgs/utilities/icon4.svg",
    text: `Access to
    the Juicy Kicks Portal`,
  },
  {
    img: "/imgs/utilities/5.png",
    icon: "/imgs/utilities/icon5.svg",
    text: `Some other
    perks`,
  },
];
SwiperCore.use([Autoplay, Navigation]);
export default function UtilitiesSection() {
  const [sliderProps, setSliderProps] = useState({
    slidesPerView: 5,
    spaceBetween: 60,
  });
  useEffect(() => {
    const screenWidth = window.innerWidth;
    let props = { slidesPerView: 5, spaceBetween: 60 };

    if (screenWidth < 1024) {
      props.slidesPerView = 3;
      props.spaceBetween = 30;
    }
    if (screenWidth < 426) {
      props.slidesPerView = 1;
      props.spaceBetween = 10;
    }
    setSliderProps({ ...props });
  }, []);
  return (
    <div className="my-container relative UtilitySection">
      <Heading>UTILITY OF THE NFT’s</Heading>
      <div className="w-full relative z-10">
        <div id="utilities-next" className="splash-next cursor-pointer">
          <img
            className="w-1/2 transform rotate-180 invert pr-1"
            src="/imgs/left-arrow.svg"
            alt="next-slide"
          />
        </div>
        <div id="utilities-prev" className="splash-prev cursor-pointer">
          <img
            className="w-1/2 pr-1  invert"
            src="/imgs/left-arrow.svg"
            alt="next-slide"
          />
        </div>
        <Swiper
          autoplay={{ delay: 2500 }}
          loop={true}
          centeredSlides
          navigation={{ nextEl: "#utilities-next", prevEl: "#utilities-prev" }}
          spaceBetween={sliderProps.spaceBetween}
          slidesPerView={sliderProps.slidesPerView}
        >
          {utilities.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-full grid gap-5 ">
                <div className="w-full flex justify-center relative items-end lg:h-32">
                  <div className="w-1/2 relative">
                    <img className="w-full" src={slide.img} alt="splash" />
                    <img
                      className="absolute w-1/3 transform bottom-1/3  left-1/2 -translate-x-1/2"
                      src={slide.icon}
                      alt="splash"
                    />
                  </div>
                </div>
                <div className="lg:h-20">
                  {" "}
                  <p className="text-center text-white font-medium">
                    {slide.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
