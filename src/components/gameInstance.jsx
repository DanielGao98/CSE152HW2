import React, { Component } from "react";
import Player from "./player";
import NumberOfRoundsEnum from "./NumberOfRounds";
import ReactDOM from "react-dom";

class GameInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Rounds: props.Rounds,
      CurrRound: 0,
      NumPlayers: props.NumPlayers,
      Players: Array(props.NumPlayers).fill(6)
    };
  }

  initializePlayers(NumPlayers) {
    this.setState({ Players: Array(NumPlayers).fill(Player) });
  }

  render() {
    return (
      <header>
        <h1>Round {this.state.CurrRound}</h1>
        {/* {this.initializePlayers(this.state.NumPlayers)} */}
        {console.log(this.state)}
        {console.log(this.state.Rounds)}
        {console.log(this.state.NumPlayers)}
        {console.log(this.state.Players)}
      </header>
    );
  }
}

export default GameInstance;
