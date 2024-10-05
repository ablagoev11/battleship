import { SHIP_LENGTHS } from "../assets/constants";
import Coordinate from "./Coordinate";
class Gameboard {
  ships;

  constructor() {
    this.ships = [];
    this.board = new Array(10).fill(new Array(10).fill(new Coordinate()));
  }
}

export default Gameboard;
