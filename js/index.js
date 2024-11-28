function adicionarProduto(descricao, valor) {
    let produtos = JSON.parse(sessionStorage.getItem('produtos')) || [];
    produtos.push({ descricao, valor });
    sessionStorage.setItem('produtos', JSON.stringify(produtos));
  }
  
  // Assumindo que `button` é o elemento do botão que foi clicado
  const button = document.querySelector('body-adicionar'); // ajuste conforme necessário
  const addproduto = button.getAttribute('data-produto');
  
  document.getElementById(addproduto).addEventListener("click", function() {
    const addnome = button.getAttribute('data-nome');
    const descricao = document.getElementById(addnome).innerHTML;
    const addvalor = button.getAttribute('data-valor');
    const valor = document.getElementById(addvalor).innerHTML;
    adicionarProduto(descricao, valor);
  });
  
  function resumoCompra() {
    window.location = "resumo.html";
  }