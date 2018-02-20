import React, {Component} from "react";
import "./Game.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../Navbar";
import About from "../About";
import ClickItem from "../ClickItem"
import Container from "../Container"
import Scoreboard from "../Scoreboard";
import Footer from "../Footer";
import data from "../../data.json";

class Game extends Component {
  state = {
    data,
    score: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({ data: this.shuffleData(this.state.data) });
  }

  handleCorrectGuess = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;
    this.setState({
      data: this.shuffleData(newData),
      score: newScore,
      topScore: newTopScore
    });
  };

  handleIncorrectGuess = data => {
    this.setState({
      data: this.resetData(data),
      score: 0
    });
  };

  resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffleData(resetData);
  };

  shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  handleItemClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.data.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.handleCorrectGuess(newData)
      : this.handleIncorrectGuess(newData);
  };

  render() {
    return (
      <div>
        <Navbar />
        <About />
        <Scoreboard score={this.state.score} topScore={this.state.topScore} />
        <div class ="window">
          <Container>
            {this.state.data.map(item => (
              <ClickItem
                key={item.id}
                id={item.id}
                shake={!this.state.score && this.state.topScore}
                handleClick={this.handleItemClick}
                image={item.image}
              />
            ))}
          </Container>
        </div>
        <div class = "window">
            <Footer />
        </div>
      </div>
    );
  };
}

export default Game;