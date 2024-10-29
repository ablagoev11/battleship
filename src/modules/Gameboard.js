import { SHIP_LENGTHS, coordinateStatus } from "../assets/constants";
import Coordinate from "./Coordinate";
class Gameboard {
  ships;

  constructor() {
    this.ships = [];
    this.board = Array.from({ length: 10 }, () =>
      Array.from({ length: 10 }, () => new Coordinate())
    );
  }

  placeShip(ship, coordinatesA, coordinatesB) {
    const { x: xA, y: yA } = coordinatesA;
    const { x: xB, y: yB } = coordinatesB;

    const isHorizontal = yA === yB;
    const isVertical = xA === xB;

    if (!isHorizontal && !isVertical) return false;

    const shipLength = ship.length;

    const minX = Math.min(xA, xB);
    const maxX = Math.max(xA, xB);
    const minY = Math.min(yA, yB);
    const maxY = Math.max(yA, yB);

    if (isHorizontal && maxX - minX + 1 !== shipLength) return false;
    if (isVertical && maxY - minY + 1 !== shipLength) return false;

    if (minX < 0 || maxX >= 10 || minY < 0 || maxY >= 10) return false;

    for (let i = minX; i <= maxX; i++) {
      for (let j = minY; j <= maxY; j++) {
        if (this.board[i][j].getShip() !== null) return false;
      }
    }

    for (let i = minX; i <= maxX; i++) {
      for (let j = minY; j <= maxY; j++) {
        this.board[i][j].placeShip(ship);
      }
    }

    this.ships.push(ship);

    return true;
  }
  hitShip(coordinates) {
    const { x, y } = coordinates;
    const coordinate = this.board[x][y];
    const status = coordinate.getStatus();
    const ship = coordinate.getShip();
    if (status !== coordinateStatus.DEFAULT) return "Miss";
    if (ship === null) {
      coordinate.changeStatus(coordinateStatus.MISS);
      return "Miss";
    } else {
      coordinate.changeStatus(coordinateStatus.HIT);
      ship.hitShip();
      return "Hit";
    }
  }
  checkShips() {
    return !this.ships.some((ship) => ship.isSunk === false);
  }
}

export default Gameboard;
