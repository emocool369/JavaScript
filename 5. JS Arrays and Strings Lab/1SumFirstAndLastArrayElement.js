function sum(array){
    let firstEl = array[0];
    let lastEl = array[array.length - 1];
    let result = firstEl + lastEl;
    console.log(result);
}

sum([20, 30, 40]);
sum([10, 17, 22, 33]);
sum([11, 58, 69]);