function print(array, step){
    let output = [];
    let arrayLength = array.length;
    for (let i = 0; i < arrayLength; i+=step){
        output.push(array[i]);
    }
   return output;
}


print(['5','20','31','4','20'],2);
print(['dsa','asd','test','tset'],2);
print(['1','2','3','4','5'],6);