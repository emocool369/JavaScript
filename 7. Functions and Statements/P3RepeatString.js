function repeatString(string, repetitions){
    let newString = "";
    for (let i = 0; i < repetitions; i++){
      newString += string;      
    }

    console.log(newString);
}

repeatString("abc", 3);