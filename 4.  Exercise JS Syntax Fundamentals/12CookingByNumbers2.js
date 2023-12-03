function cbn(numAsString, opr1, opr2, opr3, opr4, opr5) {

    let num = Number(numAsString);

    let operationObj = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num * 0.8
    }

    num = operationObj[opr1](num)
    console.log(num)
    num = operationObj[opr2](num)
    console.log(num)
    num = operationObj[opr3](num)
    console.log(num)
    num = operationObj[opr4](num)
    console.log(num)
    num = operationObj[opr5](num)
    console.log(num.toFixed(2))
}

cbn('9', 'dice', 'spice', 'chop', 'bake', 'fillet');