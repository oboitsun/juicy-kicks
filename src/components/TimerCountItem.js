import React from "react";

export default function TimerCountItem({ time, text }) {
  return (
    <div className="flex flex-col items-center text-white">
      <p className="timer-digits relative top-2">{time.length > 1 ? time : 0 + time}</p>
      {text === "Seconds" || text === "Minutes" ? (
        <p className="timer-date relative left-1.5 top-2 lg:top-2">{text}</p>
      ) : (
        <p className="timer-date relative   top-2 lg:top-2">{text}</p>
      )}
    </div>
  );
}
