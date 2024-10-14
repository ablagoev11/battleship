import Gameboard from "../modules/Gameboard";
import Ship from "../modules/Ships";
import Coordinate from "../modules/Coordinate";

describe("Test the gameboard methods", () => {
  const gameboard = new Gameboard();

  describe("Place ship", () => {
    const ship = new Ship(3);
    test("Place ship #1", () => {
      expect(gameboard.placeShip(ship, { x: 1, y: 4 }, { x: 1, y: 6 })).toBe(
        true
      );
    });
    test("Ship can't be placed on a diagonal", () => {
      expect(gameboard.placeShip(ship, { x: 0, y: 4 }, { x: 1, y: 6 })).toBe(
        false
      );
    });
    test("Space occupied by another ship", () => {
      expect(gameboard.placeShip(ship, { x: 1, y: 4 }, { x: 1, y: 6 })).toBe(
        false
      );
    });
    test("Ship out of bound", () => {
      expect(gameboard.placeShip(ship, { x: 1, y: 8 }, { x: 1, y: 10 })).toBe(
        false
      );
    });
    describe(
      ("Check if sunk",
      () => {
        expect(gameboard.isSunk());
      })
    );
  });
});
