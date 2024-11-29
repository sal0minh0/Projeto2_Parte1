let produtos = JSON.parse(sessionStorage.getItem('produtos')) || [];
let resumo = document.getElementById('descricao');

if (resumo) {
  produtos.forEach(produto => {
    resumo.innerHTML += '<strong> Produto(s): </strong>' 
      + produto.descricao + '<strong>' + ' - ' + produto.valor + '</strong><br><br>';
  });
}