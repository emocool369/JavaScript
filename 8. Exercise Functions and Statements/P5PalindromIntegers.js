function palindrom(array){
   
    function isPalindrome(num){
        let numAsString = num.toString();
        let reverseNum = numAsString.split('').reverse().join('');

        return numAsString === reverseNum;
    }
    for (const currentNum of array) {
        console.log(isPalindrome(currentNum));
    }
}

palindrom([123,323,421,121]);
palindrom([32,2,232,1010]);