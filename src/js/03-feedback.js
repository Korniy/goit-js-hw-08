
import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onInputChange, 500));
formEl.addEventListener('submit', onFormSubmit);

fillForm();

const formData = {}; 

function onInputChange(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(KEY, JSON.stringify(formData));
};

function onFormSubmit(event) {
    event.preventDefault();
    formData.email = inputEl.value;
    formData.message = messageEl.value;
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(KEY);
}

function fillForm() {
    const rawValues = localStorage.getItem(KEY);
    const valueObject = JSON.parse(rawValues);
   
if(valueObject) {
    const savedEmail = valueObject.email;
    inputEl.value = savedEmail;

    const savedMessage = valueObject.message;
    messageEl.value = savedMessage;
};
};

