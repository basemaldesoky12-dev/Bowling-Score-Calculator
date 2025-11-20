class BowlingGame {
  constructor(frames) {
    this.frames = frames;
  }

  calculateScore() {
    let totalScore = 0;
    const maxFrames = 10;
    const limit = Math.min(this.frames.length, maxFrames);

    for (let i = 0; i < limit; i++) {
      const frame = this.frames[i];

      if (this.isStrike(frame)) {
        totalScore += 10 + this.getStrikeBonus(i);
      } else if (this.isSpare(frame)) {
        totalScore += 10 + this.getSpareBonus(i);
      } else {
        totalScore += this.sumFrame(frame);
      }
    }

    return totalScore;
  }

  isStrike(frame) {
    return frame[0] === 10;
  }

  isSpare(frame) {
    return frame.length === 2 && frame[0] + frame[1] === 10;
  }

  sumFrame(frame) {
    return (frame[0] || 0) + (frame[1] || 0);
  }

  // Look ahead 1 frame for the next ball
  getSpareBonus(currentIndex) {
    const nextFrame = this.frames[currentIndex + 1] || [];
    return nextFrame[0] || 0;
  }

  // Look ahead up to 2 frames to find the next 2 balls
  getStrikeBonus(currentIndex) {
    const nextFrame = this.frames[currentIndex + 1] || [];
    const frameAfterNext = this.frames[currentIndex + 2] || [];

    // 1st bonus ball
    let bonus = nextFrame[0] || 0;

    // 2nd bonus ball
    if (this.isStrike(nextFrame)) {
      // If next frame is a strike, 2nd ball is in the frame after that
      bonus += frameAfterNext[0] || 0;
    } else {
      // Otherwise, 2nd ball is just the second roll of the next frame
      bonus += nextFrame[1] || 0;
    }

    return bonus;
  }
}

module.exports = BowlingGame;
