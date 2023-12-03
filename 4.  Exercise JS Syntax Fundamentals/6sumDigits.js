function sd(input){
    /* let numAsString = Sting(num);*/
    let text = input + "";
    let sum = 0;
    for (let i = 0; i < text.length; i++){
        /*let currentNum = Number(text[i]);*/
        sum += text[i] * 1; 
    }
    console.log(sum);
    /*console.log(numAsString[i])
    console.log(numAsString.charAt[i])*/
}

sd(543);