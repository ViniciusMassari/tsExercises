"use strict";
function arredondar(valor) {
    if (typeof valor === 'string') {
        const valorFinal = Math.ceil(Number(valor));
        return String(valorFinal);
    }
    else {
        return Math.ceil(valor);
    }
}
console.log(arredondar(25.6));
