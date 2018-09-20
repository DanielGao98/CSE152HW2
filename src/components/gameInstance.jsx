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
      Players: Array(props.NumPlayers).fill(null)
    };
  }

  initializePlayers() {
    var AllegianceArray = Array(this.state.NumPlayers).fill(0);
    console.log(AllegianceArray);
    var TotalSpies = 0;
    while (TotalSpies < Math.floor((this.state.NumPlayers - 1) / 2)) {
      var index = getRandomInt(this.state.NumPlayers);
      console.log(index);
      if (AllegianceArray[index] != 1) {
        AllegianceArray[index] = 1;
        TotalSpies++;
        console.log(AllegianceArray);
      }
    }
    console.log(AllegianceArray);

    var Leader = getRandomInt(this.state.NumPlayers);
    console.log(Leader);
    //var Merlin = getRandomInt(this.state.NumPlayers - TotalSpies);

    this.state.Players[Leader] = (
      <Player Allegiance={AllegianceArray[Leader]} IsLeader={true} />
    );
    console.log(this.state.Players);

    for (var player in this.state.Players) {
      if (player == null) {
        player = (
          <Player Allegiance={AllegianceArray[Leader]} IsLeader={true} />
        );
      }
    }
    console.log(this.state.Players);

    var setMerlin = false;
    while (setMerlin == false) {
      var Merlin = getRandomInt(this.state.NumPlayers);
      if (AllegianceArray[Merlin] == 0) {
        this.state.NumPlayers[Merlin].setState({ Role: "Merlin" });
      }
    }
  }

  render() {
    return (
      <header>
        <h1>Round {this.state.CurrRound}</h1>
        {this.initializePlayers()}
        {console.log(this.state)}
        {console.log(this.state.Rounds)}
        {console.log(this.state.NumPlayers)}
        {console.log(this.state.Players)}
      </header>
    );
  }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default GameInstance;
