function sorting(numbers){
let resultArray = [];
let sortedArray = numbers.sort((a,b)=> a - b); /*сортираме по-малкото към по-голямото число*/

let sortedArrayLenght = numbers.length;

for (let i = 0; i < sortedArrayLenght; i++){

    if (i % 2 === 0){
        resultArray.push(sortedArray.shift());
    } else {
        resultArray.push(sortedArray.pop());
    }

}

return resultArray;


}

sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);