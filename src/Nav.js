import React from "react";

export default function Nav({ score, resetGame }) {
  return (
    <nav className="nav">
      <span>Memory Game</span>
      <span>Score: {score}</span>
      <button className="button nav__btn" onClick={resetGame}>
        New Game
      </button>
    </nav>
  );
}
