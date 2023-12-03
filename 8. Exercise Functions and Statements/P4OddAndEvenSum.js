function oddAndEvenSum(num){
let numAsString = num.toString();
let oddSum = 0;
let evenSum = 0;

for (let i=0; i < numAsString.length; i++){
    let digit = Number(numAsString[i]);
        if (digit % 2 === 0){
            evenSum += digit;
        } else {
            oddSum += digit;
        }
}

console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);