interface Produto {
  marca: string;
  cor: string;
}

type Vendas = [string, number, string, Produto];

function somarVendas(vendas: Vendas[]) {
  const total = vendas.reduce((acc, produto) => {
    return acc + Number(produto[1]);
  }, 0);
  return total;
}

async function fetchVendas(url: string) {
  const dados = await fetch(url);
  const dadosJson = await dados.json();
  const totalVendas = somarVendas(dadosJson);
  document.write(`<h1>${totalVendas}</h1>`);
}
fetchVendas('https://api.origamid.dev/json/vendas.json');
