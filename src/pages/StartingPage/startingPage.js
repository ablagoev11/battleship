import renderBoard from "../../components/Board/boards";
import renderShips from "../../components/Ships/ships";
import Gameboard from "../../modules/Gameboard";
import Ship from "../../modules/Ships";
import styles from "./startingPage.style.css";

const renderStartingPage = () => {
  let draggedShip;
  let draggedGrid;
  let gridLocation;
  let shipLength;
  let direction = true;
  const gameboard = new Gameboard();
  let name;

  const setName = (name) => {
    this.name = name;
  };
  const getName = () => {
    return this.name;
  };
  const getGameboard = () => {
    return gameboard;
  };
  const changeDirection = () => {
    const ships = document.querySelector(".ships");
    const ship = document.querySelectorAll(".ship");
    const shipsDirection = direction ? "vertical" : "horizontal";
    const shipDirection = direction ? "horizontal" : "vertical";
    const removeClassIfExists = (element, className) => {
      if (element && element.classList.contains(className)) {
        element.classList.remove(className);
      }
    };
    ship.forEach((s) => {
      removeClassIfExists(s, "horizontal");
      removeClassIfExists(s, "vertical");
      s.classList.add(shipDirection);
    });
    removeClassIfExists(ships, "horizontal");
    removeClassIfExists(ships, "vertical");
    ships.classList.add(shipsDirection);
    direction = !direction;
  };

  const rerenderBoard = () => {
    const boardContainer = document.querySelector(".board-container");
    const board = document.querySelector(".board");
    board?.remove();
    boardContainer.appendChild(
      renderBoard(getGameboard(), handleDragOver, handleDragDrop)
    );
  };

  const getCoordination = () => {
    const [y, x] = gridLocation;
    const coordsOne = { x, y };
    const coordsTwo = { x, y };

    shipLength = draggedShip.childElementCount;
    const axis = direction ? "y" : "x";

    coordsOne[axis] = coordsOne[axis] - (draggedGrid - 1);
    coordsTwo[axis] = coordsTwo[axis] + (shipLength - draggedGrid);

    return [coordsOne, coordsTwo];
  };

  const handleGrid = (e) => {
    draggedGrid = Number(e.target.id.split("-")[1]);
  };
  const handleDragStart = (e) => {
    draggedShip = e.target;
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDragDrop = (e) => {
    gridLocation = e.target.id.split(" ").map((char) => Number(char));
    const [coordsOne, coordsTwo] = getCoordination();
    const newShip = new Ship(shipLength);
    const isShipValid = getGameboard().placeShip(newShip, coordsOne, coordsTwo);
    if (isShipValid) {
      draggedShip.remove();
      rerenderBoard();
    }
  };

  const container = document.querySelector(".container");
  container.innerHTML = `
      <div class="board-container">
      <input type="text" class="players-name" /></div>
      <div class="ships-container">
        <button class="change">Change Direction</button>
      </div>
      <button class="start">Start</button>
  `;

  const shipsContainer = document.querySelector(".ships-container");
  const changeButton = document.querySelector(".change");

  rerenderBoard();
  shipsContainer.appendChild(
    renderShips(handleDragStart, handleDragOver, handleGrid)
  );

  changeButton.addEventListener("click", () => {
    changeDirection();
  });

  return { getGameboard, getName };
};

export default renderStartingPage;
