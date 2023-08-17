function twoSets(n) {
  const set1 = [],
    set2 = [];
  const fullArray = Array.from({ length: n }, (_, i) => i + 1).reverse();
  const arraySum = fullArray.reduce((acc, curr) => curr + acc, 0);
  if (arraySum % 2 != 0) return "NO";
  else {
    console.log("YES");
    let midValue = arraySum / 2;
    for (let i = 0; i < n; i++) {
      if (fullArray[i] <= midValue) {
        set1.push(fullArray[i]);
        midValue -= fullArray[i];
      } else {
        set2.push(fullArray[i]);
      }
    }
  }
  console.log(set1.length, set1);
  console.log(set2.length, set2);
}

twoSets(10);
