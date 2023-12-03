//not pure function - vlijae e se ot vunshnia svjat, pri izvikvane s edin i 
//susht parameter, funktiata vrushta razlichen resultat, funktiata zavisi ot 
//vunshni parametri
//vunktiata zavisi ot stranichni na neja faktori, koito mogat da budat promeneni
//tova e losha funktia i trjqva da se preraboti taka che funktiata da e pure
let b = 12;
function multyply(a){
    return a * b;
}

console.log(multyply(3));

b = 33;

console.log(multyply(3));