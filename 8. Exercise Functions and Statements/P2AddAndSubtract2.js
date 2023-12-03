function sumAndSubtract(n1, n2, n3) {
  let sumofTwo = function(n1, n2){
    return n1 + n2;
  };
  let subtract = function(sumofTwo, n3){
    return sumofTwo - n3;
  };

  let sum = sumofTwo(n1, n2);
  let result = subtract(sum, n3);

  console.log(result);
}

sumAndSubtract(23, 6, 10);
sumAndSubtract(1, 17, 30);
sumAndSubtract(42, 58, 100);
