import React, { Component } from "react";
import "./styles/main.css";
import Nav from "./Nav";
import DisplayCards from "./DisplayCards";
import Dialogue from "./Dialogue";
import Celebration from "./Celebration";
import { createCards } from "./helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.intervalId = undefined;
    this.state = {
      cards: createCards(20),
      display: [],
      matching: [],
      showDialogue: false,
      showCelebration: false,
      clickCount: 0,
      score: 100,
      animatingCards: [],
    };
  }

  cardClick = (click) => {
    //Ignoring clicks on cards that are displaying
    if (click.target.classList.contains("card--display")) return;

    const { cards, display } = this.state;
    const len = display.length;

    let last = cards.find((card) => card.id === display[len - 1]);

    let beforeLast = cards.find((card) => card.id === display[len - 2]);

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

    //Animation of matching cards and final celebration
    let matched = false;
    let clickedClr = cards.find((card) => card.id === click.target.id).color;
    if (len % 2 === 1 && last.color === clickedClr) {
      matched = true;
      this.setState({ matching: [last.id, click.target.id] }, () => {
        if (this.state.display.length === cards.length) {
          this.setState({ showCelebration: true });

          //celebration animation
          let cardId = cards.length;
          this.intervalId = setInterval(() => {
            cardId--;
            if (cardId === 0) clearInterval(this.intervalId);
            this.setState({
              animatingCards: [...this.state.animatingCards, `_${cardId}`],
            });
          }, 1000);
        }
      });
    }

    //Updating the score
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

  openPopUp = () => this.setState({ showDialogue: true });

  closePopUp = (windowName) => {
    let update = {};
    update[`show${windowName}`] = false;
    this.setState(update);
  };

  chooseGame = (submit) => {
    submit.preventDefault();

    //Stop celebration animation from the previous game
    clearInterval(this.intervalId);

    //Reset the game
    const cardNum = submit.target.difficulty.value;
    this.setState({
      cards: createCards(cardNum),
      display: [],
      matching: [],
      showDialogue: false,
      showCelebration: false,
      clickCount: 0,
      score: 100,
      animatingCards: [],
    });
  };

  calculateScore = (matched, score, clickCount, cardNum) => {
    let steps = Math.ceil(clickCount / (2 * cardNum));
    const increment = matched
      ? 100 / (2 * cardNum)
      : -(100 / (2 * cardNum * steps));
    return +(score + increment).toFixed(1);
  };

  render() {
    return (
      <div className="App">
        <Nav score={this.state.score} resetGame={this.openPopUp} />
        <DisplayCards
          cards={this.state.cards}
          display={this.state.display}
          matching={this.state.matching}
          cardClick={this.cardClick}
          animatingCards={this.state.animatingCards}
        />
        <Dialogue
          chooseGame={this.chooseGame}
          closeDialogue={() => this.closePopUp("Dialogue")}
          show={this.state.showDialogue}
        />
        {!this.state.showCelebration ? null : (
          <Celebration
            // show={this.state.showCelebration}
            endCelebration={() => {
              this.closePopUp("Celebration");
              this.openPopUp();
            }}
            score={this.state.score}
          />
        )}
      </div>
    );
  }
}

export default App;
