import React from "react";
import "../styles/cardsCarousel.scss";
import { useSwipeable } from "react-swipeable";
export default function CarouselCards() {
  let carousel = document.getElementById("carousel"),
    currdeg = 0;
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  function rotate(e) {
    if (e === "n") {
      currdeg = currdeg - 60;
    }
    if (e === "p") {
      currdeg = currdeg + 60;
    }
    carousel.style.transform = "rotateY(" + currdeg + "deg)";
  }
  const handlers = useSwipeable({
    onSwipedLeft: () => rotate("n"),
    onSwipedRight: () => rotate("p"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  return (
    <>
      <div class="container">
        <div {...handlers} id="carousel" class="carousel">
          <div class="item a">
            <img className="pointer-events-none" src="/imgs/card1.png" alt="card" />
          </div>
          <div class="item b">
            <img className="pointer-events-none" src="/imgs/card2.png" alt="card" />
          </div>
          <div class="item c">
            <img className="pointer-events-none" src="/imgs/card3.png" alt="card" />
          </div>
          <div class="item d">
            <img className="pointer-events-none" src="/imgs/card4.png" alt="card" />
          </div>
          <div class="item e">
            <img className="pointer-events-none" src="/imgs/card5.png" alt="card" />
          </div>
          <div class="item f">
            <img className="pointer-events-none" src="/imgs/card6.png" alt="card" />
          </div>
        </div>
        <div
          onClick={() => {
            rotate("n");
          }}
          class="next"
        >
          Next
        </div>
        <div
          onClick={() => {
            rotate("p");
          }}
          class="prev"
        >
          Prev
        </div>
      </div>
    </>
  );
}
