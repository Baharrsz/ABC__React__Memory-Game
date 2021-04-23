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
      matching: [],
      dialogueDisplay: "none",
      clickCount: 0,
      score: 100,
    };
  }

  cardClick = (click) => {
    //Ignoring clicks on cards that are displaying
    if (click.target.classList.contains("card--display")) return;

    let matched = false;

    const { display } = this.state;
    const len = display.length;

    let last = this.state.cards.find((card) => card.id === display[len - 1]);

    let beforeLast = this.state.cards.find(
      (card) => card.id === display[len - 2]
    );

    //Showing and hiding cards
    if (
      len % 2 === 1 ||
      (last && last.color) === (beforeLast && beforeLast.color)
    ) {
      this.setState({ display: [...display, click.target.id] });
    } else
      this.setState({
        display: [...display.slice(0, len - 2), click.target.id],
      });

    //Animation of matching cards
    if (len % 2 === 1 && last.color === click.target.style.backgroundColor) {
      matched = true;
      this.setState({ matching: [last.id, click.target.id] });
    }

    this.setState(
      (prevState) => {
        return { clickCount: prevState.clickCount + 1 };
      },
      () => {
        this.setState((prevState) => {
          return {
            score: this.calculateScore(
              matched,
              prevState.score,
              this.state.clickCount,
              this.state.cards.length
            ),
          };
        });
      }
    );
  };

  resetGame = () => this.setState({ dialogueDisplay: "flex" });

  closeDialogue = (event) => this.setState({ dialogueDisplay: "none" });

  chooseGame = (submit) => {
    submit.preventDefault();
    const cardNum = submit.target.difficulty.value;
    this.setState({
      cards: createCards(cardNum),
      display: [],
      matching: [],
      dialogueDisplay: "none",
      clickCount: 0,
      score: 100,
    });
  };

  calculateScore = (matched, score, clickCount, cardNum) => {
    let steps = Math.ceil(clickCount / (2 * cardNum));
    const increment = matched
      ? 100 / (2 * cardNum)
      : -(100 / (2 * cardNum * steps));
    return +(score + increment).toFixed(0);
  };

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <span>Memory Game</span>
          <span>Score: {this.state.score}</span>
          <button className="button nav__btn" onClick={this.resetGame}>
            New Game
          </button>
        </nav>
        <DisplayCards
          cards={this.state.cards}
          display={this.state.display}
          matching={this.state.matching}
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
