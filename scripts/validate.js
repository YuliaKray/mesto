//Функция валидного состояния инпута
function setInputValidState(config, input, errorElement) {
  input.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
}

//Функция невалидного состояния инпута
function setInputInvalidState(config, input, errorElement) {
  input.classList.add(config.inputErrorClass);
  errorElement.textContent = input.validationMessage;
  errorElement.classList.add(config.errorClass);
}

//Функция проверки валидности инпутов
function checkInputValidity(config, form, input) {
  const errorElement = form.querySelector(`#error-${input.name}`);

  if (input.validity.valid) {  //можно поставить метод input.checkValidity() в if, будет также работать
    setInputValidState(config, input, errorElement);
  } else {
    setInputInvalidState(config, input, errorElement);
  }
}

//Функция дизактивации кнопки сохранить
function disableButton(config, button) {
  button.setAttribute('disabled', '');
  button.classList.add(config.inactiveButtonClass);
}

//Функция активации кнопки сохранить
function enableButton(config, button) {
  button.removeAttribute('disabled');
  button.classList.remove(config.inactiveButtonClass);
}


//Функция изменения состояний кнопки сохранить
function toggleButtonValidity(config, form) {
  const submitButton = form.querySelector(config.submitButtonSelector);

  if (form.checkValidity()) {
    enableButton(config, submitButton);
  } else {
    disableButton(config, submitButton);
  }
}

//Функция перебора валидации в инпутах
function setEventListeners(config, form) {
  toggleButtonValidity(config, form);

  const inputs = form.querySelectorAll(config.inputSelector);
  const inputsArray = Array.from(inputs);

  inputsArray.forEach(function(input) {
    input.addEventListener('input', () => {
      checkInputValidity(config, form, input);
      toggleButtonValidity(config, form);
    });
  })
}

//Функция для выбора нужной формы для валидации
function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    setEventListeners(config, form);
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