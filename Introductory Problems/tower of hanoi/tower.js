function towerOfHanoi(n) {
  console.log(2 ** n - 1);
  return function recurse(n, leftStack, rightStack) {
    let midStack = 6 - (leftStack + rightStack);
    if (n == 1) {
      console.log(leftStack, rightStack);
      return;
    }
    midStack = 6 - (leftStack + rightStack);
    recurse(n - 1, leftStack, midStack);
    console.log(leftStack, rightStack);
    recurse(n - 1, midStack, rightStack);
  };
}

towerOfHanoi(2)(2, 1, 3);
