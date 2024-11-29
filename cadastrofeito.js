// Botão Cadastro
const button_cadastro = document.querySelector('.body-criar-conta');
// Input Insira seu Nome
const input_1 = document.querySelector('.body-div-field-2');
const input_2 = document.querySelector('.body-input-lastname');
const input_3 = document.querySelector('.body-input-dob');
const input_4 = document.querySelector('.body-input-email_address');
const input_5 = document.querySelector('.body-input-password');

// Verifica se os elementos existem antes de adicionar o evento
if (button_cadastro && input_1 && input_2 && input_3 && input_4 && input_5) {
  // Adiciona um evento de clique ao botão
  button_cadastro.addEventListener('click', () => {
    // Obtém o valor digitado no input
    const cadastro = input_4.value;

    // Verifica se o email não está vazio antes de exibir o alert
    if (cadastro) {
      // Exibe o alert com a mensagem do input
      Swal.fire({
        title: "Cadastrado",
        text: "Agora, poderá logar " + input_1.value + ".",
        icon: "success",
        confirmButtonText: 'Ok'
      });
    } else {
      // Se o campo de email estiver vazio, exibe um alerta de erro
      Swal.fire({
        title: "Erro!",
        text: "Por favor, Insira os Elementos Obrigatórios.",
        icon: "error",
        confirmButtonText: 'Ok'
      });
    }
  });
} else {
  console.error('Elementos não encontrados!');
}