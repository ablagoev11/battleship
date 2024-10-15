import Gameboard from "../modules/Gameboard";
import Ship from "../modules/Ships";
import Coordinate from "../modules/Coordinate";

describe("Test the gameboard methods", () => {
  const gameboard = new Gameboard();

  describe("Place ship", () => {
    const ship = new Ship(3);
    const ship2 = new Ship(4);
    test("Place ship #1", () => {
      expect(gameboard.placeShip(ship, { x: 1, y: 4 }, { x: 1, y: 6 })).toBe(
        true
      );
    });
    test("Place ship #2", () => {
      expect(gameboard.placeShip(ship2, { x: 5, y: 9 }, { x: 8, y: 9 })).toBe(
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
    describe("Hit ship", () => {
      test("Hit ship with all we got", () => {
        expect(gameboard.hitShip({ x: 1, y: 4 })).toBe("Hit");
      });
      test("Hit ship with all we got", () => {
        expect(gameboard.hitShip({ x: 1, y: 5 })).toBe("Hit");
      });
      test("Hit ship with all we got", () => {
        expect(gameboard.hitShip({ x: 1, y: 6 })).toBe("Hit");
      });
      test("Hit ship with all we got", () => {
        expect(gameboard.hitShip({ x: 5, y: 5 })).toBe("Miss");
      });
    });
    describe("Are the ships sunk", () => {
      test("When ship are not sunk", () => {
        expect(gameboard.checkShips()).toBe(false);
      });
      test("Hit ship with all we got", () => {
        expect(gameboard.hitShip({ x: 5, y: 9 })).toBe("Hit");
      });
      test("Hit ship with all we got", () => {
        expect(gameboard.hitShip({ x: 6, y: 9 })).toBe("Hit");
      });
      test("Hit ship with all we got", () => {
        expect(gameboard.hitShip({ x: 7, y: 9 })).toBe("Hit");
      });
      test("Hit ship with all we got", () => {
        expect(gameboard.hitShip({ x: 8, y: 9 })).toBe("Hit");
      });
      test("When ship are not sunk", () => {
        expect(gameboard.checkShips()).toBe(true);
      });
    });
  });
});
