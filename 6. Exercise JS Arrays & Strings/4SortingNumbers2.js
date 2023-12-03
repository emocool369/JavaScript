function sorting(numbers){
let resultArray = [];
let sortedArray = numbers.sort((a,b)=> a - b); /*сортираме по-малкото към по-голямото число*/

let sortedArrayLenght = numbers.length;

while (sortedArray.length !== 0 ){
    let smallNumber = sortedArray.shift();
    let bigNumber = sortedArray.pop();
    resultArray.push(smallNumber);
    resultArray.push(bigNumber);
}

return resultArray;


}

sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);