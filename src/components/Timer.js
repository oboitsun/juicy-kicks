import React, { useEffect, useState } from "react";
import TimerCountItem from "./TimerCountItem";

import { calculateTimeLeft } from "./utils";
export default function Timer() {
  const today = Date.now();
  const dayX = new Date("December 23, 2021 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    hours: "0",
    days: "0",
    minutes: "0",
    seconds: "0",
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(dayX));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div className=" flex items-center  mb-4 lg:mb-6 lg:mt-4 relative ">
      <img
        className="w-full absolute pointer-events-none"
        src="/imgs/timer-border.svg"
        alt="border"
      />
      {dayX < today ? (
        <p className="font-fright text-xl lg:text-4xl text-white">Ready to Mint now!</p>
      ) : (
        <div className=" text-white  timer">
          <TimerCountItem time={timeLeft.days} text="Days" />
          <p className="timer-digits px-1 relative top-2 ">:</p>
          <TimerCountItem time={timeLeft.hours} text="Hours" />
          <p className="timer-digits px-1 relative top-2 ">:</p>
          <TimerCountItem time={timeLeft.minutes} text="Minutes" />
          <p className="timer-digits px-1 relative top-2">:</p>
          <TimerCountItem time={timeLeft.seconds} text="Seconds" />
        </div>
      )}
    </div>
  );
}
