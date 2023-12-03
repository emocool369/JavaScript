function matrix(num){

    function printRow(number){
        
        return (number.toString() + ' ').repeat(number);
    }

    for(let currentRow = 1; currentRow <= num; currentRow++){
        console.log(printRow(num));
    }
}

matrix(3);
matrix(7);
matrix(2);

