function substring(string, n1, n2){
    let startindex = n1;
    let elcount = n2;
    let substring = string.substring(startindex, startindex + elcount);
    console.log(substring);
}

substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);