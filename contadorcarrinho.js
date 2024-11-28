// Função para inicializar o carrinho de compras
function initCart() {
    // Inicializa o carrinho vazio
    const cart = {};
  
    // Função para atualizar a exibição do carrinho
    function updateCartDisplay() {
      const cartElement = document.querySelector('.body-carrinho');
      const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);
      cartElement.textContent = `Carrinho (${totalItems})`;
    }
  
    // Função para adicionar um item ao carrinho
    function addToCart(itemClass) {
      if (cart[itemClass]) {
        cart[itemClass] += 1;
      } else {
        cart[itemClass] = 1;
      }
      console.log(`Item adicionado: ${itemClass}`);
      console.log(cart);
      updateCartDisplay();
    }
  
    // Adiciona event listeners para todas as classes especificadas
    const classes = [
      "body-adicionar", "body-adicionar-1", "body-adicionar-2", "body-adicionar-3",
      "body-adicionar-4", "body-adicionar-5", "body-adicionar-6", "body-adicionar-7",
      "body-adicionar-8", "body-adicionar-9", "body-pr-venda", "body-pr-venda-2",
      "body-pr-venda-3", "body-pr-venda-4"
    ];
  
    classes.forEach(itemClass => {
      const elements = document.querySelectorAll(`.${itemClass}`);
      elements.forEach(element => {
        element.addEventListener('click', () => addToCart(itemClass));
      });
    });
  
    // Inicializa a exibição do carrinho
    updateCartDisplay();
  }
  
  // Inicializa o carrinho quando o documento estiver pronto
  document.addEventListener('DOMContentLoaded', initCart);