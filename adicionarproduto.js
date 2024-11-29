function adicionarProduto(descricao, valor) {
  let produtos = JSON.parse(sessionStorage.getItem('produtos')) || [];
  produtos.push({ descricao, valor });
  sessionStorage.setItem('produtos', JSON.stringify(produtos));
}

// Seleciona todos os botões de adicionar produto
const botoes = document.querySelectorAll('.body-adicionar');

// Adiciona evento de clique a cada botão
botoes.forEach(button => {
  button.addEventListener("click", function() {
    const descricaoElement = document.querySelectorAll('data-nome');
    const valorElement = document.querySelectorAll('[data-valor]');

    if (descricaoElement && valorElement) {
      const descricao = descricaoElement.innerHTML.trim();
      const valor = valorElement.innerHTML.trim();
      adicionarProduto(descricao, valor);
    } else {
      console.error('Element not found for data-nome or data-valor');
    }
  });
});