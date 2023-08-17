function apples(n, ...weights) {
  const set1 = [],
    set2 = [];
  const arraySum = weights.reduce((acc, curr) => acc + curr, 0);
  let midValue = arraySum % 2 == 0 ? arraySum / 2 : Math.floor(arraySum / 2);
  weights = weights.sort((a, b) => b - a);
  for (let i = 0; i < n; i++) {
    if (weights[i] <= midValue) {
      set1.push(weights[i]);
      midValue -= weights[i];
    } else {
      set2.push(weights[i]);
    }
  }
  console.log(set1, set2);
}

apples(5, 1, 5, 4, 9, 7);
