import Gameboard from "./modules/Gameboard";
import Ship from "./modules/Ships";

const gameboard = new Gameboard();
gameboard.placeShip(new Ship(3), { x: 1, y: 3 }, { x: 1, y: 5 });
console.log(gameboard.board);
