// conserte a função com TS
// function normalizarTexto(texto) {
//   return texto.trims().toLowerCase();
// }

// resposta
function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

// conserte o código do arquivo exercício.js
const input = document.querySelector('input');
const total: string | null = localStorage.getItem('total');

if (input && total) {
  input.value = total;
  calcularGanho(Number(total));
}

function calcularGanho(value: number) {
  const p = document.querySelector('p');
  if (p) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou() {
  if (input) {
    const value = Number(input.value);
    localStorage.setItem('total', String(value));
    calcularGanho(value);
  }
}

if (input) {
  input.addEventListener('keyup', totalMudou);
}
