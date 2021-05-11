import React from "react";

export default function Instructions({ display, hide }) {
  return !display ? (
    <></>
  ) : (
    <div className="instructions">
      <div className="instructions__background" onClick={hide}></div>
      <div className="instructions__main">
        <p className="instructions__text">
          Click on a card to see its colour. There are two cards from each
          colour.
        </p>
        <p className="instructions__text">
          Match all cards with the same colour to win the game.
        </p>
      </div>
    </div>
  );
}
