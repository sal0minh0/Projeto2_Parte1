const buttonsNames = [
    '.body-adicionar', 
    '.body-adicionar-1', 
    '.body-adicionar-2',
    '.body-adicionar-3',
    '.body-adicionar-4',
    '.body-adicionar-5',
    '.body-adicionar-6',
    '.body-adicionar-7',
    '.body-adicionar-8',
    '.body-adicionar-9',
    '.body-pr-venda',
    '.body-pr-venda-1',
    '.body-pr-venda-2',
    '.body-pr-venda-3',
    '.body-pr-venda-4',
    ]; 

const buttons = document.querySelectorAll(buttonsNames);
const popup = document.querySelector('.popup-wrapper', '.popup-wrapper-1');
const carrinho = document.querySelector('.popup-link', '.popup-link-1');
let timeoutId;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        popup.style.display = 'block';
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            popup.style.display = 'none';
        }, 3000); // 3000 milissegundos = 3 segundos
    });
});

popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0];
    const classNames = ['popup-close', 'popup-wrapper', 'popup-link', 'popup-close-1', 'popup-wrapper-1', 'popup-link-1'];
    const shouldClosePopUp = classNames.some(className => 
        className === classNameOfClickedElement);

    if (shouldClosePopUp){
        popup.style.display = 'none';
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    }
});

carrinho.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});