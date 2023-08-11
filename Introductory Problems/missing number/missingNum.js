function missingNum(n, ...given) {
  const fullSeries = Array.from({ length: n }, (_, i) => i + 1);
  fullSeries.forEach((elem) => {
    if (!given.includes(elem)) console.log(elem);
  });
}

missingNum(5, 2, 1, 3, 5);
