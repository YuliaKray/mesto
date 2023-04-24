//Функция валидного состояния инпута
function setInputValidState({ inputErrorClass, errorClass }, input, errorElement) {
  input.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
}

//Функция невалидного состояния инпута
function setInputInvalidState({ inputErrorClass, errorClass }, input, errorElement) {
  input.classList.add(inputErrorClass);
  errorElement.textContent = input.validationMessage;
  errorElement.classList.add(errorClass);
}

//Функция проверки валидности инпутов
function checkInputValidity(rest, form, input) {
  const errorElement = form.querySelector(`#error-${input.name}`);

  if (input.validity.valid) {  //можно поставить метод input.checkValidity() в if, будет также работать
    setInputValidState(rest, input, errorElement);
  } else {
    setInputInvalidState(rest, input, errorElement);
  }
}

//Функция дизактивации кнопки сохранить
function disableButton({ inactiveButtonClass }, button) {
  button.setAttribute('disabled', '');
  button.classList.add(inactiveButtonClass);
}

//Функция активации кнопки сохранить
function enableButton({ inactiveButtonClass }, button) {
  button.removeAttribute('disabled');
  button.classList.remove(inactiveButtonClass);
}


//Функция изменения состояний кнопки сохранить
function toggleButtonValidity({ submitButtonSelector, ...rest}, form) {
  const submitButton = form.querySelector(submitButtonSelector);

  if (form.checkValidity()) {
    enableButton(rest, submitButton);
  } else {
    disableButton(rest, submitButton);
  }
}

//Функция перебора валидации в инпутах
function setEventListeners( { inputSelector, ...rest }, form) {
  toggleButtonValidity(rest, form);

  const inputs = form.querySelectorAll(inputSelector);
  const inputsArray = Array.from(inputs);

  inputsArray.forEach(function(input) {
    input.addEventListener('input', () => {
      checkInputValidity(rest, form, input);
      toggleButtonValidity(rest, form);
    });
  })
}

//Функция для выбора нужной формы для валидации
function enableValidation({ formSelector, ...rest}) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((form) => {
    setEventListeners(rest, form);
  });
};

//Вызываем функцию с объектом config
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-text',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__form-text_invalid',
  errorClass: 'popup__error-message_visible'
}); 