import React, { Component } from "react";
import NumberOfRoundsEnum from "./NumberOfRounds";
import ReactDOM from "react-dom";

class GameInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrRound: props.CurrRound
    };
  }

  render() {
    return (
      <header>
        <h1>HEllo</h1>
        {console.log(this.state.CurrRound)}
      </header>
    );
  }
}

export default GameInstance;
