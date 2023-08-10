function repetitions(sequence) {
  let maxCount = 0, maxItem;
  const longest = [];
  for (let i = 0; i < sequence.length; i++) {
    if (i + 1 < sequence.length && sequence[i] == sequence[i + 1])
      longest.push(sequence[i]);
  }
  for (let codon of longest) {
    maxCount = longest.filter((item) => item == codon).length;
    maxItem = codon;
  }
  return [maxItem, maxCount + 1];
}

const [item, count] = repetitions("AAGGGTCCCCCTGA");
console.log(item, count);
