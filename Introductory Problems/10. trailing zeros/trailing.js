function factorial(n) {
  if (n == 0 || n == 1) return 1;
  return n * factorial(n - 1);
}

function trailingZeros(n) {
  const fact = Array.from(factorial(n).toString()).reverse();
  console.log(fact)
  if (fact[0] == 0) {
    for (let i = 0; i < fact.length; i++) {
      if (fact[i] != 0) {
        return fact.slice(0, i).length;
      }
    }
  } 
}

console.log(trailingZeros(10));
