function smallestNumber(n1, n2, n3) {
  let smallestNum = 0;
  if (n1 > n3 && n2 > n3) {
    smallestNum = n3;
  } else if (n1 < n2 && n1 < n3) {
    smallestNum = n1;
  } else if (n1 > n2 && n3 > n2) {
    smallestNum = n2;
  } else if (n1 = n2 = n3) {
    smallestNum = n1;
  }
  console.log(smallestNum);
}

smallestNumber(2, 5, 3);
smallestNumber(600, 342, 123);
smallestNumber(25, 21, 4);
smallestNumber(2, 2, 2);
