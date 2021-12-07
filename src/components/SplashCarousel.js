import React from "react";

import "swiper/swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
const splash_array = [
  "/imgs/splash.png",
  "/imgs/splash2.png",
  "/imgs/splash3.png",
  "/imgs/splash4.png",
  "/imgs/splash5.png",
];
SwiperCore.use([Autoplay, Navigation]);
export default function SplashCarousel() {
  return (
    <div className="w-full relative z-10">
      <div id="splash-next" className="splash-next">
        <img
          className="w-1/2 transform rotate-180 invert pr-1"
          src="/imgs/left-arrow.svg"
          alt="next-slide"
        />
      </div>
      <div id="splash-prev" className="splash-prev">
        <img className="w-1/2 pr-1  invert" src="/imgs/left-arrow.svg" alt="next-slide" />
      </div>
      <Swiper
        autoplay={{ delay: 2500 }}
        loop={true}
        centeredSlides
        navigation={{ nextEl: "#splash-next", prevEl: "#splash-prev" }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {splash_array.map((slide, i) => (
          <SwiperSlide key={i}>
            <img className="w-full relative z-10 px-4" src={slide} alt="splash" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
