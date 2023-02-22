import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const storageKey = 'feedback-form-state';

// Actualización del almacenamiento local del formulario
const updateStorage = throttle(() => {
    const state = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem(storageKey, JSON.stringify(state));
}, 500);

// Rellenar los campos del formulario con los valores guardados
const fillForm = () => {
    const state = JSON.parse(localStorage.getItem(storageKey));
    if (state) {
        emailInput.value = state.email || '';
        messageInput.value = state.message || '';
    }
};

// Enviar el formulario y emitir valores a la consola
const handleSubmit = (event) => {
    event.preventDefault();
    const state = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.removeItem(storageKey);
    emailInput.value = '';
    messageInput.value = '';
    console.log(state);
};

form.addEventListener('input', updateStorage);
form.addEventListener('submit', handleSubmit);

fillForm();





