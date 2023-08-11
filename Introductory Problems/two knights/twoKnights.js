function twoKnights(n) {
  const array = Array.from({ length: n }, (_, i) => i + 1);
  array.forEach((k) => {
    const numOfSq = k * k;
    const comboOfValidSq = (numOfSq ** 2 - numOfSq) / 2;
    const inValidSq = (k - 1) * (k - 2) * 2 * 2;
    console.log(comboOfValidSq - inValidSq);
  });
}

twoKnights(8);
