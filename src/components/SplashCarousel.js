import React from "react";

import "swiper/swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
const splash_array = [
  "/imgs/splash.png",
  "/imgs/splash2.png",
  "/imgs/splash3.png",
  "/imgs/splash4.png",
  "/imgs/splash5.png",
];
SwiperCore.use([Autoplay]);
export default function SplashCarousel() {
  return (
    <div className="w-full relative z-10">
      <Swiper
        autoplay={{ delay: 2500 }}
        loop={true}
        centeredSlides
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
