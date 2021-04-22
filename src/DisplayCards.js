import React from "react";

function DisplayCards({ cards, display, cardClick }) {
  let cardElements = cards.map((card) => {
    const className = display.includes(card.id)
      ? `card card--${cards.length} card--display`
      : `card card--${cards.length} card--hide`;
    return (
      <div
        className={className}
        style={{ backgroundColor: card.color }}
        id={card.id}
        key={card.id}
        onClick={cardClick}
      ></div>
    );
  });

  return <div className={`deck deck--${cards.length}`}>{cardElements}</div>;
}

export default DisplayCards;
