import style from "./board.style.css";
import Player from "../../modules/Player";

const renderBoard = (player) => {
  const playersName = player.name;
  const playersBoard = player.board;

  const container = document.querySelector(".container");
  const board = document.createElement("div");
  board.classList.add("board");
  const boardContainer = document.createElement("div");
  boardContainer.classList.add("board-container");
  const label = document.createElement("p");
  label.textContent = playersName;
  boardContainer.appendChild(label);
  board.setAttribute("id", playersName);
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");
      grid.setAttribute("id", `${i} ${j} - ${playersName}`);
      board.appendChild(grid);
    }
  }
  boardContainer.appendChild(board);
  container.appendChild(boardContainer);
};

export default renderBoard;
