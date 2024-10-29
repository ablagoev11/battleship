import Ship from "../../modules/Ships";
import { SHIP_LENGTHS } from "../../assets/constants";
import styles from "./ships.style.css";
const createShip = (length, handleGrid) => {
  const shipDiv = document.createElement("div");
  shipDiv.classList.add("ship");
  shipDiv.setAttribute("draggable", true);

  for (let i = 1; i <= length; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.setAttribute("id", "grid-" + i);
    grid.addEventListener("mousedown", handleGrid);
    shipDiv.appendChild(grid);
  }
  return shipDiv;
};

const renderShips = (handleDragStart, handleDragOver, handleGrid) => {
  const shipsContainer = document.createElement("div");
  shipsContainer.classList.add("ships");
  SHIP_LENGTHS.forEach((length) => {
    const shipDiv = createShip(length, handleGrid);
    shipDiv.addEventListener("dragstart", handleDragStart);
    shipDiv.addEventListener("dragover", handleDragOver);

    shipsContainer.appendChild(shipDiv);
  });

  return shipsContainer;
};

export default renderShips;
