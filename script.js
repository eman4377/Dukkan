
let currentDate = new Date();

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function updateDateDisplay() {
    document.getElementById("current-date").textContent = formatDate(currentDate);
    loadData();
}

function previousDate() {
    currentDate.setDate(currentDate.getDate() - 1);
    updateDateDisplay();
}

function nextDate() {
    currentDate.setDate(currentDate.getDate() + 1);
    updateDateDisplay();
}

function saveData() {
    const income = parseFloat(document.getElementById("income").value) || 0;
    const expense = parseFloat(document.getElementById("expense").value) || 0;
    const data = { income, expense };
    localStorage.setItem(formatDate(currentDate), JSON.stringify(data));
    loadData();
}

function loadData() {
    const data = JSON.parse(localStorage.getItem(formatDate(currentDate))) || { income: 0, expense: 0 };
    document.getElementById("summary-income").textContent = data.income;
    document.getElementById("summary-expense").textContent = data.expense;
    document.getElementById("summary-profit").textContent = data.income - data.expense;
}

document.addEventListener("DOMContentLoaded", updateDateDisplay);
