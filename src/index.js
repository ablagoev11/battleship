import Gameboard from "./modules/Gameboard";
import Ship from "./modules/Ships";

const gameboard = new Gameboard();
gameboard.board[0][0].placeShip(new Ship(3));

console.log(gameboard.board);
