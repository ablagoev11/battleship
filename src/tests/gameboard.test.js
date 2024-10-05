import Gameboard from "../modules/Gameboard";
import Ship from "../modules/Ships";

describe("Test the gameboard methods", () => {
  const gameboard = new Gameboard();

  describe("Can place ship", () => {
    const gameboard = new Gameboard();
    gameboard.board[0][0].placeShip(new Ship(3));
    test("Can place ship #1", () => {
      expect(gameboard.canPlace({ x: 0, y: 0 }, { x: 0, y: 2 }, 3)).toBe(false);
    });
    test("Can place ship #2", () => {
      expect(gameboard.canPlace({ x: 0, y: 1 }, { x: 0, y: 4 }, 4)).toBe(true);
    });
  });
});
