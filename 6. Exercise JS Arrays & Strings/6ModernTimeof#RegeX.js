function hashTag(string){
    let regex = /#[A-Za-z]+/gm;
    let matches = string.match(regex);

    for (let word of matches) {
        word = word.replace('#','');
        console.log(word);
    }
}

hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');