
import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
// const inputEl = document.querySelector('input');
// const messageEl = document.querySelector('textarea');

const KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onInputChange, 500));
formEl.addEventListener('submit', onFormSubmit);

fillForm();

let formData = {}; 


function onInputChange(event) {
    
    // formData[event.target.name] = event.target.value;
    // localStorage.setItem(KEY, JSON.stringify(formData));

  if (localStorage.getItem(KEY)) {
        formData = JSON.parse(localStorage.getItem(KEY));
    } else {
        formData = {};
    }

    formData[event.target.name] = event.target.value;
    localStorage.setItem(KEY, JSON.stringify(formData));

    // formData[event.target.name] = event.target.value;
    // const asd = JSON.stringify(formData);
    // localStorage.setItem(KEY, asd);


};

function onFormSubmit(event) {

    event.preventDefault();


    if (formEl.email.value === '') {
        return alert('Заповніть всі поля');
    }
    // formData.email = inputEl.value;
    // formData.message = messageEl.value;
    

    // console.log(formData);

    event.currentTarget.reset();
    localStorage.removeItem(KEY);
    console.log(formData); 
}

function fillForm() {

    const rawValue = localStorage.getItem(KEY);
    const valueObject = JSON.parse(rawValue);
   
if(rawValue) {
    // const saveEmail = valueObject.email;
    // inputEl.value = saveEmail;

    // const saveMessage = valueObject.message;
    // messageEl.value = saveMessage;

//  valueObject = JSON.parse(valueObject);
//     Object.entries(valueObject).forEach(([name, value]) => {
//       formEl.elements[name].value = value;
//     });

  
        formEl.email.value = valueObject.email || '';
        formEl.message.value = valueObject.message || '';
    
 
};
};

