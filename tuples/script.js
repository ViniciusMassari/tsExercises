"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function somarVendas(vendas) {
    const total = vendas.reduce((acc, produto) => {
        return acc + Number(produto[1]);
    }, 0);
    return total;
}
function fetchVendas(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const dados = yield fetch(url);
        const dadosJson = yield dados.json();
        const totalVendas = somarVendas(dadosJson);
        document.write(`<h1>${totalVendas}</h1>`);
    });
}
fetchVendas('https://api.origamid.dev/json/vendas.json');
