import React, { Component } from "react";
import "./App.css";
import Dialogue from "./Dialogue";
import DisplayCards from "./DisplayCards";

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

function createCards(cardNum) {
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
    "turquoise",
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
      // cardNum: 16,
      cards: createCards(20),
      display: [],
    };
  }

  cardClick = (click) => {
    //Ignoring clicks on cards that are displaying
    if (click.target.classList.contains("card--display")) return;

    const { display } = this.state;
    const len = display.length;

    let last = this.state.cards.find((card) => card.id === display[len - 1]);
    if (last) last = last.color;

    let beforeLast = this.state.cards.find(
      (card) => card.id === display[len - 2]
    );
    if (beforeLast) beforeLast = beforeLast.color;

    if (last === beforeLast || len % 2 === 1) {
      this.setState({ display: [...display, click.target.id] });
    } else
      this.setState({
        display: [...display.slice(0, len - 2), click.target.id],
      });
  };

  // newGame = () => {
  //   this.setState({ cards: createCards(this.state.cardNum), display: [] });
  // };

  chooseGame = (submit) => {
    submit.preventDefault();
    const cardNum = submit.target.difficulty.value;
    this.setState({ cards: createCards(cardNum), display: [] });
  };

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <span>Memory Game</span>
          <button onClick={this.newGame}>New Game</button>
        </nav>
        <DisplayCards
          cards={this.state.cards}
          display={this.state.display}
          cardClick={this.cardClick}
        />

        <Dialogue chooseGame={this.chooseGame} />
      </div>
    );
  }
}

export default App;
