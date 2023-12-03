let printText = function(text){
    console.log(text);
}

printText('jako');
[1,2,3,4].map(a => printText(a));
[1,2,3,4].map(printText);