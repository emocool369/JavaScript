function reverse(num, array){
   let arr =[];
   for(let i=0; i<num; i++){
    arr.push(array[i]);
   }
   let output ="";
   for(let i=arr.length-1; i>=0; i--){
    output += arr[i] + " ";
   }
   console.log(output.trim());
}

reverse(3, [10, 20, 30, 40, 50]);
reverse(4, [-1, 20, 99, 5]);
reverse(2, [66, 43, 75, 89, 47]);