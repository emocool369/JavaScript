function counter(text, search){
    let words = text.split(' ');
    let counter = 0;
    for (let word of words){
        if (word === search){
            counter ++;
        }
        
    }
    console.log(counter);
}

counter('This is a word and it also is a sentence','is');
counter('softuni is great place for learning new programming languages','softuni');