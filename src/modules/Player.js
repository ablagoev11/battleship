import Gameboard from "./Gameboard";

class Player {
  gameboard;
  name;
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard();
  }
}
