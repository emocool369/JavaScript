function cbn(numAsString, opr1, opr2, opr3, opr4, opr5) {
  let arrOp = [];
  let num = Number(numAsString);
  arrOp.push(opr1);
  arrOp.push(opr2);
  arrOp.push(opr3);
  arrOp.push(opr4);
  arrOp.push(opr5);

  /*console.table(arrOp);*/
  for (let i = 0; i < arrOp.length; i++) {
    let currentOpr = arrOp[i];

    switch (currentOpr) {
      case "chop":
        num = num / 2;
        break;
      case "dice":
        num = Math.sqrt(num);
        break;
      case "spice":
        num = num + 1;
        break;
      case "bake":
        num = num * 3;
        break;
      case "fillet":
        num = num * 0.80;
        break;
    }
    console.log(num);
  }
}

cbn('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
