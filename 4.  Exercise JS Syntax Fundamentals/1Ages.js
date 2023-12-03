function solve(num) {
  let output;
  if (num < 0) {
    output = "out of bounds";
  } else if (num >= 0 && num <= 2) {
    output = "baby";
  } else if (num <= 13) {
    output = "child";
  } else if (num <= 19) {
    output = "teenager";
  } else if (num <= 65) {
    output = "adult";
  } else if (num >= 66) {
    output = "elder";
  }

  if (output == undefined) {
    console.log("out of bounds");
  } else {
    console.log(output);
  }
}

solve(1);
solve(5);
solve(16);
solve(35);
solve(90);
solve(-1);
solve(156);
