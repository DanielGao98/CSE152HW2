import React, { Component } from "react";
import NumberOfRoundsEnum from "./NumberOfRounds";

let OutOfRange = false;
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NumPlayers: 0,
      PlayerArray: null,
      rounds: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.value < 5 || event.target.value > 10) {
      OutOfRange = true;
      return;
    }
    OutOfRange = false;
    this.setState({ Numplayers: event.target.value });
    this.setState({ rounds: NumberOfRoundsEnum[event.target.value] });
  }

  handleSubmit(event) {
    if (OutOfRange) {
      alert("Please Enter a Number between 5 and 10");
      return;
    }
    alert("NumPlayers was set: " + this.state.Numplayers);
    event.preventDefault();
  }

  getNumberOfPlayersFromUser() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Number Of Players:
          <input
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  render() {
    return (
      <header>
        <h1>Welcome to the Avalon Game</h1>
        <h2>Please Enter a Number of Players Between 5 and 10</h2>
        {this.getNumberOfPlayersFromUser()}
        {console.log(this.state.Numplayers)}
        {console.log(this.state.rounds)}
      </header>
    );
  }
}

export default Game;
