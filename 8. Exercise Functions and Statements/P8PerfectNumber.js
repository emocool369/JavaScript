function perfectNumber(num){

    let sum = 0;
    for(let current = 1; current < num; current++){
        if (num % current === 0){
            sum += current;
        }
    }
    if (sum === num){
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);