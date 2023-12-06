function calc() {
    const firstNumberElementRef = document.getElementById('num1'); //vzimam referenziata kum elementa
    const firstNumberValue = firstNumberElementRef.value; //vzimam stoinostta na referenciata, .value vrushta chisloto kato string
    const firstNumberAsNum = Number(firstNumberValue); // vzimam 4islenata stoinost na stoinostta

    //const firstNum = Number(document.getElementByID('num1').value);

    const secondNum = Number(document.getElementById('num2').value);

    let result = firstNumberAsNum + secondNum;

    document.getElementById('sum').value = result;

}
