const total = (dice) => {
  return dice.reduce((sum, curr) => sum + curr, 0);
};

const freq = (dice) => {
  const freqs = new Map();
  // console.log(dice);
  dice.forEach((die) => {
    freqs.has(die) ? freqs.set(die, freqs.get(die) + 1) : freqs.set(die, 1);
  });
  return Array.from(freqs.values());
};

const count = (dice, val) => {
  return dice.filter((die) => die === val).length;
};

const totalOneNum = (dice, val) => {
  return val * count(dice, val);
};

const calculateOnes = (dice) => {
  return totalOneNum(dice, 1);
};

const calculateTwos = (dice) => {
  return totalOneNum(dice, 2);
};

const calculateThrees = (dice) => {
  return totalOneNum(dice, 3);
};

const calculateFours = (dice) => {
  return totalOneNum(dice, 4);
};

const calculateFives = (dice) => {
  return totalOneNum(dice, 5);
};

const calculateSixes = (dice) => {
  return totalOneNum(dice, 6);
};

const calculateThreeOfAKind = (dice) => {
  return freq(dice).some((val) => val >= 3) ? total(dice) : 0;
};

const calculateFourOfAKind = (dice) => {
  return freq(dice).some((val) => val >= 4) ? total(dice) : 0;
};

const calculateYahtzee = (dice) => {
  return count(dice, dice[0]) === 5 ? 50 : 0;
};

const calculateChance = (dice) => {
  return total(dice);
};

const calculateFullHouse = (dice) => {
  return freq(dice).length === 2 && freq(dice).every((val) => val >= 2)
    ? 25
    : 0;
};

const calculateSmallStraight = (dice) => {
  const d = new Set(dice);
  if (d.size >= 4 && d.has(4) && d.has(3)) {
    if (
      (d.has(5) && d.has(6)) ||
      (d.has(1) && d.has(2)) ||
      (d.has(5) && d.has(2))
    ) {
      return 30;
    }
  }
  return 0;
};

const calculateLargeStraight = (dice) => {
  const d = new Set(dice);
  return d.size === 5 && (!d.has(1) || !d.has(6)) ? 40 : 0;
};

export {
  calculateOnes,
  calculateTwos,
  calculateThrees,
  calculateFours,
  calculateFives,
  calculateSixes,
  calculateThreeOfAKind,
  calculateFourOfAKind,
  calculateFullHouse,
  calculateSmallStraight,
  calculateLargeStraight,
  calculateYahtzee,
  calculateChance,
};
