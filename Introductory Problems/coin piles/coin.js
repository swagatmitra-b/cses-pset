function coin(a, b) {
  if ((a + b) % 3 == 0) return "YES";
  return "NO";
}

console.log(coin(2, 1));
console.log(coin(2, 2));
console.log(coin(3, 3));
