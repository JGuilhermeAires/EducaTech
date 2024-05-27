function limparTela() {
    document.getElementById('display').innerText = '0';
}

function digito(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0x0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

//function calcularResultado() {
//    const display = document.getElementById('display');
//    display.innerText = eval(display.innerText);
//}

function converteHexa() {
    const display = document.getElementById('display');
    numero = parseFloat(display.textContent);
    display.innerText = numero.toString(16).toUpperCase();
    display.innerText = "0x" + display.innerText;
}
