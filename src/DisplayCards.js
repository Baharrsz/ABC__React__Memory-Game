import React from "react";

function DisplayCards({ cards }) {
  let cardElements = cards.map((card) => (
    <div
      className="card"
      style={{ backgroundColor: card.color }}
      id={card.id}
      key={card.id}
    ></div>
  ));
  return <div className="deck">{cardElements}</div>;
}

export default DisplayCards;
