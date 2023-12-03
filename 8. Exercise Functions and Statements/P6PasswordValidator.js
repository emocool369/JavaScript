function passwordValidator(pass){

    function isValidLength(input){
        return input.length >= 6 && input.length <= 10;
    }
    
    function isAlphanumeric(input){
        let regex = /^[a-zA-Z0-9]+$/gm; //^-nachalo, $-krai
        let isCorrect = regex.test(input);
        return isCorrect;
    }
    
    function checkDigits(input){
        let digitsCounter = 0;
        for (const digit of input) {
          if(!isNaN(digit)){
            digitsCounter++;
          }  
        }
        return digitsCounter >=2;
    }
    

    let validLength = isValidLength(pass);
    let validNumeric = isAlphanumeric(pass);
    let validDigitsCount = checkDigits(pass);

    if(!validLength){
        console.log("Password must be between 6 and 10 characters");
    }
    if(!validNumeric){
        console.log("Password must consist only of letters and digits");
    }
    if(!validDigitsCount){
        console.log("Password must have at least 2 digits");
    }
    if (validLength && validNumeric && validDigitsCount){
        console.log("Password is valid");
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');
