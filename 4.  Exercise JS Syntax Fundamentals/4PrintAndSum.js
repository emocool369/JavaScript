function pas(start, end){
    let buff = "";
    let sum = 0;
    for (let i = start; i <= end; i++){
            buff += i + " ";
            sum += i;
    }
    console.log(buff.trim());
    console.log(`Sum: ${sum}`);
}

pas(5, 10);
pas(0, 26);