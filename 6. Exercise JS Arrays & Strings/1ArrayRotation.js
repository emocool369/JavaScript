function rotation(array, rotations){
    let firstnum = 0;
for (let i = 0; i < rotations; i++){
    firstnum = array.shift();
    array.push(firstnum)
}
console.log(array.join(" "));
}

rotation([51, 47, 32, 61, 21], 2);
rotation([32, 21, 61, 1], 4);
rotation([2, 4, 15, 31], 5);