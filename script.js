const money = document.getElementById('money');
function moneyUpdate() {
    value = localStorage.getItem('money');
    if (parseInt(value)<=0 || typeof value != 'string') { value = 0};
    money.textContent = value;
}
setInterval(moneyUpdate, 100)
