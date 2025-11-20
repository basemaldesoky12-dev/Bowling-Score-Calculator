const BowlingGame = require("./bowling");

describe("BowlingGame", () => {
  test("calculates score for simple open frames", () => {
    const frames = [
      [5, 3],
      [4, 2],
    ]; // 8 + 6
    const game = new BowlingGame(frames);
    expect(game.calculateScore()).toBe(14);
  });

  test("calculates score for a single spare", () => {
    const frames = [
      [5, 5],
      [3, 0],
    ]; // (10 + 3) + 3
    const game = new BowlingGame(frames);
    expect(game.calculateScore()).toBe(16);
  });

  test("calculates score for a single strike", () => {
    const frames = [[10], [3, 4]]; // (10 + 3 + 4) + 7
    const game = new BowlingGame(frames);
    expect(game.calculateScore()).toBe(24);
  });

  test("handles consecutive strikes (Turkey)", () => {
    const frames = [[10], [10], [10], [0, 0]];
    // Frame 1: 30 (10 + 10 + 10)
    // Frame 2: 20 (10 + 10 + 0)
    // Frame 3: 10 (10 + 0 + 0)
    const game = new BowlingGame(frames);
    expect(game.calculateScore()).toBe(60);
  });

  test("handles a perfect game (300)", () => {
    const frames = [
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
    ];
    const game = new BowlingGame(frames);
    expect(game.calculateScore()).toBe(300);
  });

  test("handles the prompt example correctly", () => {
    const frames = [[5, 3], [10], [4, 6]];
    // Frame 1: 8
    // Frame 2: 20 (10 + 4 + 6)
    // Frame 3: 10 (Spare, but no next ball to add bonus from)
    const game = new BowlingGame(frames);
    expect(game.calculateScore()).toBe(38);
  });

  test("handles empty game", () => {
    const game = new BowlingGame([]);
    expect(game.calculateScore()).toBe(0);
  });
});
