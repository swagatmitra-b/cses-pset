function distinctNumbers(size, ...arr) {
  const arr2 = [];
  for (let i = 0; i < size; i++) {
    if (arr2.length == 0) {
      arr2.push(arr[i]);
      continue;
    }
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] == arr[i]) break;
      if (j == arr2.length - 1) arr2.push(arr[i]);
    }
  }
  console.log(arr2);
  return arr2.length;
}

console.log(distinctNumbers(5, 2, 3, 2, 2, 3));
