import React from "react";

export default function Nav({ score, resetGame, showInstructions }) {
  return (
    <nav className="nav">
      <span className="nav__title">Memory Game</span>
      <span className="nav__score">Score: {score}</span>
      <div className="nav__btns">
        <button className="button nav__new-game" onClick={resetGame}>
          New Game
        </button>
        <button className="nav__question" onClick={showInstructions}></button>
      </div>
    </nav>
  );
}
