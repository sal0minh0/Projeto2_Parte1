
// Botão Enviar
const button = document.querySelector('.body-enviar');
// Input Insira seu Email
const input = document.querySelector('.body-insira-seu-email');

// Verifica se os elementos existem antes de adicionar o evento
if (button && input) {
  // Adiciona um evento de clique ao botão
  button.addEventListener('click', () => {
    // Obtém o valor digitado no input
    const email = input.value;

    // Verifica se o email não está vazio antes de exibir o alert
    if (email) {
      // Exibe o alert com a mensagem do input
      Swal.fire({
        title: "Email Cadastrado!",
        text: "Agora, o Email " + email + " irá receber nossas atualizações.",
        icon: "success",
        confirmButtonText: 'Ok'
      });
    } else {
      // Se o campo de email estiver vazio, exibe um alerta de erro
      Swal.fire({
        title: "Erro!",
        text: "Por favor, Insira um Email.",
        icon: "error",
        confirmButtonText: 'Ok'
      });
    }
  });
} else {
  console.error('Elementos não encontrados!');
}
