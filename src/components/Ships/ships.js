import Ship from "../../modules/Ships";

const createShip = (ship, direction) => {
  const shipsLength = ship.length;
  const shipDiv = document.createElement("div");
  const directionClass = direction ? "horizontal" : "vertical";
  shipDiv.classList.add(directionClass);
  for (let i = 1; i <= shipsLength; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
  }
};
