function generateWinningNumbers() {
  const pool = Array.from({ length: 15 }, (_, i) => i + 1);

  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  console.log(
      "Eric's Lottery winning sequence:",
      globalThis[WINNING_NUMBERS_KEY],
    );
  return pool.slice(0, 5);
}

const WINNING_NUMBERS_KEY = "__ericsLotteryWinningNumbers";

export function initializeWinningNumbers() {
  if (!globalThis[WINNING_NUMBERS_KEY]) {
    globalThis[WINNING_NUMBERS_KEY] = generateWinningNumbers();
    console.log(
      "Eric's Lottery winning sequence:",
      globalThis[WINNING_NUMBERS_KEY],
    );
  }

  return globalThis[WINNING_NUMBERS_KEY];
}

export function getWinningNumbers() {
  return initializeWinningNumbers();
}
