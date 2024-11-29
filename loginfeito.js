// Botão Login
const button_login = document.querySelector('.body-button-action');
// Input Insira seu Nome
const input_6 = document.querySelector('.body-input-email_address');

// Verifica se os elementos existem antes de adicionar o evento
if (button_login && input_6) {
  // Adiciona um evento de clique ao botão
  button_login.addEventListener('click', () => {
    // Obtém o valor digitado no input
    const login = input_6.value;

    // Verifica se o email não está vazio antes de exibir o alert
    if (login) {
      // Exibe o alert com a mensagem do input
      Swal.fire({
        title: "Logado",
        text: "Agora, poderá Logar " + login + ".",
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