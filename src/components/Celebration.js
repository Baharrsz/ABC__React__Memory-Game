import React from "react";

export default function Celebration({ endCelebration, score }) {
  return (
    <div className="celebration" onClick={endCelebration}>
      <h1 className="celebration__main">You Won!</h1>
      <p className="celebration__score">Score: {score}</p>
      <p className="celebration__click">Click to start a new game</p>
    </div>
  );
}
