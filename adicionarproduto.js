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
      const addnome = button.getAttribute('data-nome');
      const descricao = document.querySelector(`[data-nome="${addnome}"]`).innerHTML;
      const addvalor = button.getAttribute('data-valor');
      const valor = document.querySelector(`[data-valor="${addvalor}"] .body-r`).innerHTML;
      adicionarProduto(descricao, valor);
    });
  });
