const buttons = document.querySelectorAll('.body-adicionar, .body-pr-venda');
let timeoutId;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const popupId = button.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        popup.style.display = 'block';
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            popup.style.display = 'none';
        }, 3000); // = 3 seg.
    });
});

document.querySelectorAll('.popup-wrapper').forEach(popup => {
    popup.addEventListener('click', event => {
        const classNameOfClickedElement = event.target.classList[0];
        const classNames = ['popup-close', 'popup-wrapper', 'popup-link'];
        const shouldClosePopUp = classNames.some(className => 
            className === classNameOfClickedElement);

        if (shouldClosePopUp){
            popup.style.display = 'none';
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        }
    });
});