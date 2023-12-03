function substring(substring, text){
    let lowerCaseTextArr = text.toLowerCase().split(' ');
    let output = `${substring} not found!`;

    for(let i = 0; i < lowerCaseTextArr.length; i++){
        let currentWord = lowerCaseTextArr[i];
        if(currentWord === substring){
            output = currentWord;
        }
    }
    console.log(output);
}

substring('javascript','JavaScript is the best programming language');
substring('python','JavaScript is the best programming language');