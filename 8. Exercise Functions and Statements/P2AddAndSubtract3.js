function sumAndSubtract(n1, n2, n3) {
  let sum = (n1, n2) => {
    return n1 + n2;
  };
  let result = sum(n1, n2) - n3;

  console.log(result);
}

sumAndSubtract(23, 6, 10);
sumAndSubtract(1, 17, 30);
sumAndSubtract(42, 58, 100);
