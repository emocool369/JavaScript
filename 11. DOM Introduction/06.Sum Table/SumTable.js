function sumTable() {
const tableRowsElements = document.querySelectorAll("table tr");
let totalSum = 0;

for(let i = 1; i < tableRowsElements.length; i++){
    const cells = tableRowsElements[i].children;
    const cellPrice = Number(cells[1].textContent);
    totalSum += cellPrice;
}
document.getElementById('sum').textContent = totalSum;
}