import React from "react";
import Heading from "./Heading";

export default function GamesSection() {
  return (
    <div className="my-container relative">
      <Heading>Juicy Games</Heading>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 py-10">
        <img
          className="w-full hover:scale-105 cursor-pointer transition-all transform"
          src="/imgs/game1.png"
          alt="juicy game"
        />
        <img
          className="w-full hover:scale-105 cursor-pointer transition-all transform"
          src="/imgs/game2.png"
          alt="juicy game"
        />
        <img
          className="w-full hover:scale-105 cursor-pointer transition-all transform"
          src="/imgs/game-3.png"
          alt="juicy game"
        />
      </div>
    </div>
  );
}
