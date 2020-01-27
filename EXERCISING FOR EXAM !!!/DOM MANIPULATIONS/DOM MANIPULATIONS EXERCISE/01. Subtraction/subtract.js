function subtract() {
    let x = +document.getElementById('firstNumber').value;
    let y = +document.getElementById('secondNumber').value;

    let result = document.getElementById('result');
    result.textContent = x - y;

}