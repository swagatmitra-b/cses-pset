function increasingArray(size, ...arr) {
  let moves = 0;
  for (let i = 0; i < size - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      const diff = arr[i] - arr[i + 1];
      arr[i + 1] += diff;
      moves += diff;
    }
  }
  console.log(arr);
  return moves;
}

console.log(increasingArray(5, 3, 2, 5, 1, 7));
