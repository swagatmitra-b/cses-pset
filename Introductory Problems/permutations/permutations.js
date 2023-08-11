function permutations(n) {
  const fullArray = Array.from({ length: n }, (_, i) => i + 1);
  const oddArray = fullArray.filter((num, i) => i % 2 == 0);
  const evenArray = fullArray.filter((num, i) => i % 2 != 0);
  if (n > 3) {
    if (n % 2 != 0) {
      let a = oddArray[-1];
      let b = oddArray[0];
      a = a ^ b;
      b = a ^ b;
      a = a ^ b;
      return evenArray.reverse().concat(oddArray);
    } else {
      return evenArray.concat(oddArray);
    }
  } else return "NO SOLUTION";
}

console.log(permutations(10));
