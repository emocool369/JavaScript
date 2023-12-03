function lon(list) {

    list.sort((a, b) => {
return a.localeCompare(b);
});

let index = 1;

for (let i = 0; i < list.length; i++) {
    console.log(`${i+1}.${list[i]}`);
 
}

}

lon(["John", "Bob", "Christina", "Ema"]);