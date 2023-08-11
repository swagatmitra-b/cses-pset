function palindromeReorder(str) {
  const alphaSet = [],
    count = {};
  const string = Array.from(str.toLowerCase());
  for (let i = 97; i <= 122; i++) {
    alphaSet.push(String.fromCharCode(i));
  }
  for (let alpha of alphaSet) {
    if (string.includes(alpha)) {
      count[alpha] = string.reduce(
        (count, letter) => count + (letter == alpha ? 1 : 0),
        0
      );
    }
  }
  if (string.length % 2 != 0) {
    const oddSize = Object.values(count).filter((freq) => freq % 2 != 0).length;
    if (oddSize != 1) return "NO SOLUTION";
  } else {
    for (let frequency of Object.values(count)) {
      if (frequency % 2 != 0) return "NO SOLUTION";
    }
  }
  return makePali(count);
}

function makePali(count) {
  let start = "",
    end = "",
    mid = "";
  for (const key in count) {
    if (count[key] % 2 != 0) {
      mid = key.repeat(count[key]);
    } else {
      for (let i = 0; i < count[key] / 2; i++) {
        start += key;
        end += key;
      }
    }
  }
  end = Array.from(end).reverse().join("");
  return start + mid + end;
}

console.log(palindromeReorder("AAABACCBA"));
