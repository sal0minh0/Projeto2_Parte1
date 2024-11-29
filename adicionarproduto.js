function adicionarProduto(descricao, valor) {
  let produtos = JSON.parse(sessionStorage.getItem('produtos')) || [];
  produtos.push({ descricao, valor });
  sessionStorage.setItem('produtos', JSON.stringify(produtos));
  atualizarResumo();
}

function atualizarResumo() {
  let produtos = JSON.parse(sessionStorage.getItem('produtos')) || [];
  let resumo = document.getElementById('descricao');

  if (resumo) {
    resumo.innerHTML = ''; // Limpa o conteúdo anterior
    produtos.forEach(produto => {
      resumo.innerHTML += '<strong> Produto(s): </strong>' 
        + produto.descricao + '<strong>' + ' - ' + produto.valor + '</strong><br><br>';
    });
  }
}

// Seleciona todos os botões de adicionar produto
const botoes = document.querySelectorAll('.body-adicionar', '.body-pr-venda');

// Adiciona evento de clique a cada botão
botoes.forEach(button => {
  button.addEventListener("click", function() {
    const produtoContainer = this.closest('#produto');
    const descricaoElement = produtoContainer.querySelector('[data-nome]');
    const valorElement = produtoContainer.querySelector('[data-valor]');

    if (descricaoElement && valorElement) {
      const descricao = descricaoElement.textContent.trim();
      const valor = valorElement.textContent.trim();
      adicionarProduto(descricao, valor);
    } else {
      console.error('Element not found for data-nome or data-valor');
    }
  });
});

// Chama a função para atualizar o resumo ao carregar a página
atualizarResumo();