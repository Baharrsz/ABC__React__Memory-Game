import React from "react";

function Dialogue({ chooseGame, display }) {
  return (
    <form className="dialogue" onSubmit={chooseGame} style={{ display }}>
      <div className="dialogue__content">
        <label className="dialogue__label dialogue__label--main">
          Choose the difficulty level:
        </label>
        <div className="dialogue__options">
          <label className="dialogue__label">
            <input
              type="radio"
              value="20"
              name="difficulty"
              defaultChecked={true}
            />
            Easy (20 cards)
          </label>
          <label className="dialogue__label">
            <input type="radio" value="30" name="difficulty" /> Medium (30
            cards)
          </label>
          <label className="dialogue__label">
            <input type="radio" value="50" name="difficulty" /> Hard (50 cards)
          </label>
          <label className="dialogue__label">
            <input type="radio" value="70" name="difficulty" /> Very Hard (70
            cards)
          </label>
          <label className="dialogue__label">
            <input type="radio" value="100" name="difficulty" /> Evil (100
            cards)
          </label>
        </div>
        <button className="dialogue__btn">Start Game</button>
      </div>
    </form>
  );
}

export default Dialogue;
