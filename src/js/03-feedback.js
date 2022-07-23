
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

    const rawValue = localStorage.getItem(KEY);
    const valueObject = JSON.parse(rawValue);
   
if(valueObject) {
    const saveEmail = valueObject.email;
    inputEl.value = saveEmail;

    const saveMessage = valueObject.message;
    messageEl.value = saveMessage;
};
};

