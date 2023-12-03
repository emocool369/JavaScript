function reveal(string, text){
let stringArr = string.split(', ');
let textArr = text.split(' ');

for(let i = 0; i < stringArr.length; i++){

    for(let j = 0; j < textArr.length; j++){

        let isMatch = textArr[j].includes('*') && textArr[j].length === stringArr[i].length;

        if (isMatch){
            textArr[j] = stringArr[i];
        }
    }
}
console.log(textArr.join(' '));
}

reveal('great','softuni is ***** place for learning new programming languages');
reveal('great, learning','softuni is ***** place for ******** new programming languages');