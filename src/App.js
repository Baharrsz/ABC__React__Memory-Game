import React, { Component } from "react";
import "./App.css";
import DisplayCards from "./DisplayCards";

const colorNames = [
  "lightsalmon",
  "darksalmon",
  "indianred",
  "crimson",
  "firebrick",
  "red",
  "darkred",
  "orangered",
  "gold",
  "darkorange",
  "khaki",
  "darkkhaki",
  "yellow",
  "charteuse",
  "lime",
  "green",
  "darkgreen",
  "greenyellow",
  "yellowgreen",
  "springgreen",
  "palegreen",
  "mediumseagreen",
  "seagreen",
  "olive",
  "darkolivegreen",
  "olivedrab",
  "aqua",
  "turqoise",
  "teal",
  "deepskyblue",
  "dodgerblue",
  "steelblue",
  "royalblue",
  "blue",
  "navy",
  "mediumslateblue",
  "violet",
  "fuchsia",
  "mediumpurple",
  "blueviolet",
  "darkviolet",
  "darkmagenta",
  "indigo",
  "lightpink",
  "hotpink",
  "deeppink",
  "gainsboro",
  "dimgray",
  "black",
  "white",
];

function shuffle(array) {
  let order = [...Array(array.length).keys()];
  let shuffled = [];
  array.forEach((element) => {
    let i = Math.floor(Math.random() * order.length);
    shuffled[order[i]] = element;
    order.splice(i, 1);
  });
  return shuffled;
}

function createCards(cardNum, colorNames) {
  cardNum = cardNum / 2;
  let colors = [];
  for (let i = 1; i <= cardNum; i++) {
    let random = Math.floor(Math.random() * colorNames.length);
    if (colors.indexOf(colorNames[random]) < 0) {
      colors.push(colorNames[random], colorNames[random]);
    } else i--;
  }

  return shuffle(colors.map((color, idx) => ({ id: `_${idx}`, color: color })));
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: createCards(16, colorNames),
      display: [],
    };
  }
  cardClick = (click) => {
    const { display } = this.state;
    const len = display.length;
    if (display[len - 1] === display[len - 2] || len % 2 === 1) {
      this.setState({ display: [...display, click.target.id] });
    } else
      this.setState({
        display: [...display.slice(0, len - 2), click.target.id],
      });
  };

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <span>Memory Game</span>
          <button>New Game</button>
        </nav>
        <DisplayCards
          cards={this.state.cards}
          display={this.state.display}
          cardClick={this.cardClick}
        />
      </div>
    );
  }
}

export default App;
