const BowlingGame = require("./bowling");

// Grab the third argument (node index.js <DATA>)
const rawInput = process.argv[2];

if (!rawInput) {
  console.error("Please provide frame data as a JSON string.");
  console.error('Example: node index.js "[[10], [5,5], [2,3]]"');
  process.exit(1);
}

try {
  const frames = JSON.parse(rawInput);

  if (!Array.isArray(frames)) {
    throw new Error("Input must be an array of frames.");
  }

  const game = new BowlingGame(frames);
  const score = game.calculateScore();

  console.log(`Input: ${JSON.stringify(frames)}`);
  console.log(`Total Score: ${score}`);
} catch (err) {
  console.error("Error parsing input:", err.message);
  console.error(
    "Ensure you wrap your JSON array in quotes, e.g. '[[10], [2,3]]'"
  );
}
