import React, { Component } from "react";

let OutOfRange = false;
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NumPlayers: 0,
      PlayerArray: null
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
    console.log(this.state.NumPlayers);
    console.log(event.target.value);
  }

  handleSubmit(event) {
    if (OutOfRange) {
      alert("Please Enter a Number between 5 and 10");
      return;
    }
    alert("NumPlayers was set: " + this.state.Numplayers);
    console.log(this.state.NumPlayers);
    event.preventDefault();
  }

  render() {
    console.log("props", this.props);

    return (
      <header>
        <h1>Welcome to the Avalon Game</h1>
        <h2>Please Enter a Number of Players Between 5 and 10</h2>
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
      </header>
    );
  }
}

export default Game;
