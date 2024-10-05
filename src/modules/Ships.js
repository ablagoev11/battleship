class Ship {
  #hits;
  length;
  isSunk;
  constructor(length) {
    this.isSunk = false;
    this.length = length;
    this.#hits = 0;
  }

  sinkShip() {
    if (this.#hits === this.length) this.isSunk = true;
    return this.isSunk;
  }

  hitShip() {
    this.#hits += 1;
  }
}

export default Ship;
