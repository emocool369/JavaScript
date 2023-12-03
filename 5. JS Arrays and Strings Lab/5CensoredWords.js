function cwords(text, word){
    while (text.includes(word)){
        text = text.replace(word, '*'.repeat(word.length));
    }
    console.log(text);
}

cwords('A small sentence with some words', 'small');
cwords('Find the hidden word', 'hidden');