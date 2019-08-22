import getRandomInt from "./getRandomInt";

const getRandomUniqueNumbers = (min, max, qty, arr = []) => {
  let i = 0;
  while (i < qty) {
    let n = getRandomInt(min, max);
    !arr.includes(n) && arr.push(n) && i++;
  }
  return arr;
};

export default getRandomUniqueNumbers;
