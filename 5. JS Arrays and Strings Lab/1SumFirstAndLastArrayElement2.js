function sum(array){
    let firstEl = array.shift();
    let lastEl = array.pop();
    let result = firstEl + lastEl;
    console.log(result);
}

sum([20, 30, 40]);
sum([10, 17, 22, 33]);
sum([11, 58, 69]);