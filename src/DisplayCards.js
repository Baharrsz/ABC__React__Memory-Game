import React from "react";

function DisplayCards({ cards, display, matching, cardClick, animatingCards }) {
  let cardElements = cards.map((card) => {
    let className = `card card--${cards.length} `;
    className += display.includes(card.id) ? "card--display " : "card--hide ";
    className += matching.includes(card.id) ? "card--matching " : "";
    className += animatingCards.includes(card.id) ? "card--animation" : "";
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
