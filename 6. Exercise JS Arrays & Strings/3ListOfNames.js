function lon(list) {

    list.sort((a, b) => {
return a.localeCompare(b);
});

let index = 1;

for (const name of list) {
    console.log(`${index}.${name}`);
    index++;
}

}

lon(["John", "Bob", "Christina", "Ema"]);