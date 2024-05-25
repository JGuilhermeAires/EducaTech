function limparTela() {
    document.getElementById('display').innerText = '0';
}

function digito(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calcularResultado() {
    const display = document.getElementById('display');
    display.innerText = eval(display.innerText);
    console.log(display);
}