let produtos = JSON.parse(sessionStorage.getItem('produtos')) || [];
let resumo = document.getElementById('descricao');

let qtdeProduto = document.getElementById('QtdeProduto');
let total = document.getElementById('valorTotal');
let valorTotalCompra = 0;

// Exibir produtos no resumo
if (resumo) {
  produtos.forEach(produto => {
    resumo.innerHTML += '<strong> Produto: </strong>' 
      + produto.descricao + '<strong>' + ' - ' + produto.valor + '</strong><br><br>';
  });
}

// Calcular valor total da compra
function calculaValorTotalCompra() {
  valorTotalCompra = 0;
  let quantidade = qtdeProduto.value;

  produtos.forEach(produto => {
    let valorProduto = parseFloat(produto.valor.replace('R$', '').replace(',', '.'));
    valorTotalCompra += valorProduto * quantidade;
  });

  total.innerHTML = '<strong> Valor Total da Compra: R$ </strong>' + valorTotalCompra.toFixed(2);
}

// Adicionar evento de mudança na quantidade do produto
qtdeProduto.addEventListener('change', calculaValorTotalCompra);