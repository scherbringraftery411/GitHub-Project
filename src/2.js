const getRandomNumber = () => {
  return Math.floor(Math.random() * 10);
};

const getRandomLetter = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const letterIndex = Math.floor(Math.random() * letters.length);
  return letters[letterIndex];
};

const getRandomWord = () => {
  const words = ["apple", "banana", "orange", "grape", "pear"];
  const wordIndex = Math.floor(Math.random() * words.length);
  return words[wordIndex];
};
