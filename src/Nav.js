import React from "react";

export default function Nav({ score, resetGame }) {
  return (
    <nav className="nav">
      <span className="nav__title">Memory Game</span>
      <span className="nav__score">Score: {score}</span>
      <button className="button nav__btn" onClick={resetGame}>
        New Game
      </button>
    </nav>
  );
}
