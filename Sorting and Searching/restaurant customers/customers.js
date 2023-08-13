function customers(size, ...times) {
  const tracker = [];
  let max = 0;
  for (let i = 0; i < size; i++) {
    const [start1, end1] = times[i];
    for (let j = i + 1; j < size; j++) {
      const [start2, end2] = times[j];
      if (start1 < end2 && end1 > start2) {
        tracker.push({ i, j });
      }
    }
  }
  const flattened = tracker.map((obj) => Object.values(obj)).flat(2);
  for (let i = 0; i < size; i++) {
    const freq = flattened.filter((num) => num == i).length;
    if (freq > max) max = freq;
  }
  console.log(max);
}

customers(3, [5, 8], [2, 4], [3, 9]);
