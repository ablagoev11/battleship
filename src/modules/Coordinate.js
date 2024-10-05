import { coordinateStatus } from "../assets/constants";

class Coordinate {
  #status;
  #ship;
  constructor() {
    this.#ship = null;
    this.#status = coordinateStatus.DEFAULT;
  }

  placeShip(ship) {
    if (this.#ship === null) this.#ship = ship;
  }

  getShip() {
    return this.#ship;
  }

  changeStatus() {
    if (this.#ship !== null) this.#status = coordinateStatus.HIT;
    this.#status = coordinateStatus.MISS;
  }

  getStatus() {
    return this.#status;
  }
}

export default Coordinate;
