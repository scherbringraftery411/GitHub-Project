function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function fibonacci(n) {
  if (n <= 1) return n;
  const a = 0;
  const b = 1;
  for (let i = 2; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

function calculateGCD(a, b) {
  if (!b) return a;
  return calculateGCD(b, a % b);
}
