function calculateSum(numbers) {
  let sum = 0;
  numbers.forEach(number => {
    if (typeof number === 'number') {
      sum += number;
    }
  });
  return sum;
}

const inputNumbers = [1, 2, 3, 4];
console.log(calculateSum(inputNumbers));
