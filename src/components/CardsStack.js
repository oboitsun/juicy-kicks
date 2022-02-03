import React from 'react';
import '../styles/cards-stack.scss';
const cards = [
  '/imgs/card2.png',
  '/imgs/card3.png',
  '/imgs/card4.png',
  '/imgs/card5.png',
  '/imgs/card6.png',
];
function CardsStack() {
  return (
    <div className="cards-stack relative">
      <img className="card-1" src="/imgs/card1.png" alt="card" />

      <img className="card half-card" src="/imgs/card1.png" alt="card" />
      {cards.map((card, i) => (
        <img className={`card card_${i + 2}`} src={card} alt="card" />
      ))}
    </div>
  );
}

export default CardsStack;
