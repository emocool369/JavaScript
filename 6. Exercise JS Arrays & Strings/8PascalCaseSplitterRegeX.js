function splitter(string){

    let wordsRegex = /[A-Z][a-z]*/g;
    let wordsArr = string.match(wordsRegex);

    let result = wordsArr.join(', ');
    console.log(result);
}

splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
splitter('HoldTheDoor');
splitter('ThisIsSoAnnoyingToDo');