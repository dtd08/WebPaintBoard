const btnEl = document.getElementById("calculate");
const tipInput = document.getElementById("tip");
const billInput = document.getElementById("bill");
const totalSpan = document.getElementById("total");


function calculateTotal() {
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue;
}

btnEl.addEventListener("click", calculateTotal);

