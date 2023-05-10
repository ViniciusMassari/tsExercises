// conserte a função com TS
// function normalizarTexto(texto) {
//   return texto.trims().toLowerCase();
// }
// resposta
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
// conserte o código do arquivo exercício.js
var input = document.querySelector('input');
var total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularGanho(Number(total));
}
function calcularGanho(value) {
    var p = document.querySelector('p');
    if (p) {
        p.innerText = "ganho total: ".concat(value + 100 - value * 0.2);
    }
}
function totalMudou() {
    if (input) {
        var value = Number(input.value);
        localStorage.setItem('total', String(value));
        calcularGanho(value);
    }
}
if (input) {
    input.addEventListener('keyup', totalMudou);
}
