import React from "react";

function Card({ color }) {
  const style = { backgroundColor: color };

  return <div className="card" style={style}></div>;
}

export default Card;
