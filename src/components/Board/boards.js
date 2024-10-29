import style from "./board.style.css";
import Gameboard from "../../modules/Gameboard";
import Coordinate from "../../modules/Coordinate";
import { coordinateStatus } from "../../assets/constants";

const renderBoard = (gameboard, handleDragOver, handleDragDrop) => {
  const boardDiv = document.createElement("div");
  const board = gameboard.board;
  boardDiv.classList.add("board");
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      const grid = document.createElement("div");

      grid.setAttribute("id", `${i} ${j}`);
      grid.addEventListener("dragover", handleDragOver);
      grid.addEventListener("drop", handleDragDrop);

      const status = board[j][i].getStatus();
      const currentShip = board[j][i].getShip();
      if (status === coordinateStatus.DEFAULT && currentShip)
        grid.classList.add("ship");
      if (status === coordinateStatus.MISS) grid.classList.add("miss");
      if (status === coordinateStatus.HIT) grid.classList.add("hit");
      grid.classList.add("grid");
      boardDiv.appendChild(grid);
    }
  }
  return boardDiv;
};

export default renderBoard;
