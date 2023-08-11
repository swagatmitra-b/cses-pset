function numberSpiral(x, y) {
  let max = Math.max(x, y);
  let min = Math.min(x, y);
  let value = max ** 2;
  let b = 1;
  while (b < max) {
    value -= 1;
    b++;
    if (x > y && b == min) {
      console.log(value);
      return;
    }
  }
  while (max > min) {
    value -= 1;
    max--;
  }
  console.log(value);
}

numberSpiral(5, 3);
