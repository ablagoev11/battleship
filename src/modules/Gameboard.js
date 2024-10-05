import { SHIP_LENGTHS } from "../assets/constants";
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
    const validCoordinates = canPlace(coordinatesA, coordinatesB, ship.length);
    if (!validCoordinates) return null;
  }

  canPlace(coordinatesA, coordinatesB, length) {
    let xA = coordinatesA.x;
    let yA = coordinatesA.y;
    let xB = coordinatesB.x;
    let yB = coordinatesB.y;

    if (xA > xB) {
      [xA, xB] = [xB, xA];
    }

    if (yA > yB) {
      [yA, yB] = [yB, yA];
    }

    if (
      xA < 0 ||
      xB < 0 ||
      yA < 0 ||
      yB < 0 ||
      xA >= 10 ||
      xB >= 10 ||
      yA >= 10 ||
      yB >= 10
    ) {
      return false;
    }

    if (xA === xB) {
      const shipLength = yB - yA + 1;
      if (shipLength !== length) return false;

      for (let i = yA; i <= yB; i++) {
        if (this.board[xA][i].getShip() !== null) return false;
      }
      return true;
    } else if (yA === yB) {
      const shipLength = xB - xA + 1;
      if (shipLength !== length) return false;

      for (let i = xA; i <= xB; i++) {
        if (this.board[i][yA].getShip() !== null) return false;
      }
      return true;
    }
    return false;
  }
}

export default Gameboard;
