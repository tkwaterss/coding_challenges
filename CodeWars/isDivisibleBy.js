function isDivisible(...args) {
  let output = true;
  for (let i = 1; i < args.length; i++) {
    if (args[0] % args[i] !== 0) {
      output = false;
    }
  }
  return output;
}

console.log(isDivisible(4,2,1,4));
