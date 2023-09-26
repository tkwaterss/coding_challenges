function zipWith(fn, a0, a1) {
  // return a0.map((item, i) => {
  //   if (item === undefined || a1[i] === undefined) return;
  //   return fn(item, a1[i]);
  // });

  const length = a0.length > a1.length ? a1.length : a0.length;
  const output = [];

  for (let i = 0; i < length; i++) {
    output.push(fn(a0[i], a1[i]));
  }

  return output;
}

console.log(
  zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]),
  [1, 10, 100, 1000]
);
console.log(
  zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]),
  [4, 7, 7, 4, 7, 7]
);
