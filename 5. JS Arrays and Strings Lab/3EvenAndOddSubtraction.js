function subtraction(array){
    let evensum = 0;
    let oddsum = 0;

    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0){
            evensum += array[i];
        } else {
            oddsum += array[i];
        }
    }

    let result = 0;
    result = evensum - oddsum;

    console.log(result);
}

subtraction([1,2,3,4,5,6]);
subtraction([3,5,7,9]);
subtraction([2,4,6,8,10]);