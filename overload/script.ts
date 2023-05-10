// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
function arredondar(valor: string): string;
function arredondar(valor: number): number;
function arredondar(valor: string | number): string | number | never {
  if (typeof valor === 'string') {
    const valorFinal = Math.ceil(Number(valor));
    return String(valorFinal);
  } else {
    return Math.ceil(valor);
  }
}

console.log(arredondar(25.6));
