const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const key = 'feedback-form-state';
const obj = {
  email: '',
  message: '',
};
form.addEventListener('input', onInputForm);
form.addEventListener('submit', onSubmitForm);

checkLocalStorageForKeys('feedback-form-state');

function checkLocalStorageForKeys(key) {
    const savedObj = JSON.parse(localStorage.getItem(key));
    if (savedObj) {
      input.value = savedObj.email || '';
      textarea.value = savedObj.message || '';
    }
  }

function onInputForm(event) {
  event.preventDefault();
  (obj.email = input.value), (obj.message = textarea.value);
  localStorage.setItem(key, JSON.stringify(obj));
}

function onSubmitForm(event) {
  event.preventDefault();
  console.log(obj);
  form.reset();
  localStorage.removeItem(key);
}
