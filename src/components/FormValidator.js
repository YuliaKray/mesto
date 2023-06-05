export default class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;

    this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    this._inputs = this._formElement.querySelectorAll(this._inputSelector);
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
  _disableButton = () => {
    this._submitButton.setAttribute('disabled', '');
    this._submitButton.classList.add(this._inactiveButtonClass);
  }

  //Метод активации кнопки сохранить
  _enableButton = () => {
    this._submitButton.removeAttribute('disabled');
    this._submitButton.classList.remove(this._inactiveButtonClass);
  }

  //Метод изменения состояний кнопки сохранить
  toggleButtonValidity = () => {

    if (this._formElement.checkValidity()) {
      this._enableButton();
    } else {
      this._disableButton();
    }
  }

  //Метод перебора валидации в инпутах и расстановки слушателей
  _setEventListeners = () => {  
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this.toggleButtonValidity();
      });
    })
  }

  //Метод для очистки ошибок при повторном открытии попапа
  resetForm = () => {
    this._inputs.forEach((input) => {
      const errorElement = this._formElement.querySelector(`#error-${input.name}`);

      this._setInputValidState(input, errorElement);
    });

    this.toggleButtonValidity();
  }

  //Метод вызова валидации
  enableValidation = () => {
    this._setEventListeners();
  }
}