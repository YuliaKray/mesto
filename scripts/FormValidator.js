class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
  }

  //Метод валидного состояния инпута
  _setInputValidState = (input, errorElement) => {
    input.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  //Метод невалидного состояния инпута
  _setInputInvalidState = (input, errorElement) => {
    input.classList.add(this._inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  //Метод проверки валидности инпутов
  _checkInputValidity = (input) => {
    const errorElement = this._formElement.querySelector(`#error-${input.name}`);
  
    if (input.validity.valid) {  //можно поставить метод input.checkValidity() в if, будет также работать
      this._setInputValidState(input, errorElement);
    } else {
      this._setInputInvalidState(input, errorElement);
    }
  }
  
  //Метод дизактивации кнопки сохранить
  _disableButton = (button) => {
    button.setAttribute('disabled', '');
    button.classList.add(this._inactiveButtonClass);
  }

  //Метод активации кнопки сохранить
  _enableButton = (button) => {
    button.removeAttribute('disabled');
    button.classList.remove(this._inactiveButtonClass);
  }

  //Метод изменения состояний кнопки сохранить
  _toggleButtonValidity = () => {
    const submitButton = this._formElement.querySelector(this._submitButtonSelector);

    if (this._formElement.checkValidity()) {
      this._enableButton(submitButton);
    } else {
      this._disableButton(submitButton);
    }
  }

  //Метод перебора валидации в инпутах и расстановки слушателей
  _setEventListeners = () => {
    const inputs = this._formElement.querySelectorAll(this._inputSelector);
    const inputsArray = Array.from(inputs);
  
    inputsArray.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonValidity();
      });
    })
  }

  //Метод вызова валидации
  enableValidation = () => {
    this._setEventListeners();
  }
}

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-text',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__form-text_invalid',
  errorClass: 'popup__error-message_visible'
}

export { FormValidator, config }

// const popupEdit = document.querySelector('.popup_type_edit');
// const formEditElement = popupEdit.querySelector('.popup__form');
// const profileValidator = new FormValidator (config, formEditElement);



// //Функция валидного состояния инпута
// function setInputValidState({ inputErrorClass, errorClass }, input, errorElement) {
//   input.classList.remove(inputErrorClass);
//   errorElement.classList.remove(errorClass);
//   errorElement.textContent = "";
// }

// //Функция невалидного состояния инпута
// function setInputInvalidState({ inputErrorClass, errorClass }, input, errorElement) {
//   input.classList.add(inputErrorClass);
//   errorElement.textContent = input.validationMessage;
//   errorElement.classList.add(errorClass);
// }

// //Функция проверки валидности инпутов
// function checkInputValidity(rest, form, input) {
//   const errorElement = form.querySelector(`#error-${input.name}`);

//   if (input.validity.valid) {  //можно поставить метод input.checkValidity() в if, будет также работать
//     setInputValidState(rest, input, errorElement);
//   } else {
//     setInputInvalidState(rest, input, errorElement);
//   }
// }

// //Функция дизактивации кнопки сохранить
// function disableButton({ inactiveButtonClass }, button) {
//   button.setAttribute('disabled', '');
//   button.classList.add(inactiveButtonClass);
// }

// //Функция активации кнопки сохранить
// function enableButton({ inactiveButtonClass }, button) {
//   button.removeAttribute('disabled');
//   button.classList.remove(inactiveButtonClass);
// }


// //Функция изменения состояний кнопки сохранить
// function toggleButtonValidity({ submitButtonSelector, ...rest}, form) {
//   const submitButton = form.querySelector(submitButtonSelector);

//   if (form.checkValidity()) {
//     enableButton(rest, submitButton);
//   } else {
//     disableButton(rest, submitButton);
//   }
// }

// //Функция перебора валидации в инпутах
// function setEventListeners( { inputSelector, ...rest }, form) {
//   toggleButtonValidity(rest, form);

//   const inputs = form.querySelectorAll(inputSelector);
//   const inputsArray = Array.from(inputs);

//   inputsArray.forEach(function(input) {
//     input.addEventListener('input', () => {
//       checkInputValidity(rest, form, input);
//       toggleButtonValidity(rest, form);
//     });
//   })
// }

// //Функция для выбора нужной формы для валидации
// function enableValidation({ formSelector, ...rest}) {
//   const formList = Array.from(document.querySelectorAll(formSelector));
//   formList.forEach((form) => {
//     setEventListeners(rest, form);
//   });
// };

// //Вызываем функцию с объектом config
// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__form-text',
//   submitButtonSelector: '.popup__submit-button',
//   inactiveButtonClass: 'popup__submit-button_disabled',
//   inputErrorClass: 'popup__form-text_invalid',
//   errorClass: 'popup__error-message_visible'
// }); 