import React, { Component } from "react";
import "./App.css";
import Dialogue from "./Dialogue";
import DisplayCards from "./DisplayCards";
import { createCards } from "./helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: createCards(20),
      display: [],
      dialogueDisplay: "none",
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

  resetGame = () => this.setState({ dialogueDisplay: "flex" });

  closeDialogue = (event) => this.setState({ dialogueDisplay: "none" });

  chooseGame = (submit) => {
    submit.preventDefault();
    const cardNum = submit.target.difficulty.value;
    this.setState({
      cards: createCards(cardNum),
      display: [],
      dialogueDisplay: "none",
    });
  };

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <span>Memory Game</span>
          <button className="button nav__btn" onClick={this.resetGame}>
            New Game
          </button>
        </nav>
        <DisplayCards
          cards={this.state.cards}
          display={this.state.display}
          cardClick={this.cardClick}
        />

        <Dialogue
          chooseGame={this.chooseGame}
          closeDialogue={this.closeDialogue}
          display={this.state.dialogueDisplay}
        />
      </div>
    );
  }
}

export default App;
