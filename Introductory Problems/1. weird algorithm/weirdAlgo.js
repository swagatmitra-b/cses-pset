function weirdAlgo(n) {
  console.log(n);
  if (n == 1) return;
  n % 2 == 0 ? weirdAlgo(n / 2) : weirdAlgo(n * 3 + 1);
}

weirdAlgo(3);
