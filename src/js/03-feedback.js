import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formElement = document.querySelector('.feedback-form');
let dataForm;

formElement.addEventListener('submit', onFormSubmit);
formElement.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormSubmit(event) {
    console.log(dataForm);
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(event) {
dataForm = { email: formElement.email.value, message: formElement.message.value };
 localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function populateForm(){
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData) {
        formElement.email.value = savedData.email;
        formElement.message.value = savedData.message;
    }
}
