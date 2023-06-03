import Popup from "./Popup.js";
import { FormValidator, config} from "./FormValidator.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSabmit) {
    super(popupSelector);
    this._handleFormSabmit = handleFormSabmit; //функция сохранения данных

    this._validatorForm = new FormValidator (config, this._popupSelector.querySelector('.popup__form'))

    this._handleFormSabmit = this._handleFormSabmit.bind(this)
  }

  //Метод собирает значения (value) всех инпутов формы
  _getInputValues() {
    const inputArray = this._popupSelector.querySelectorAll('.popup__form-text');
    const inputObj = {};
    
    inputArray.forEach(input => {
      inputObj[input.name] = input.value;
    });
    return inputObj;
  }

  open() {  //перезаписываю, чтобы кнопка при первом открытии была неактивна
    this._validatorForm.resetForm();
    super.open();
  }

  close() {
    this._validatorForm.resetForm();
    this._validatorForm.toggleButtonValidity();
  
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();

    //Добавление слушателя сохранения формы
    this._popupSelector.addEventListener('sabmit', this._handleFormSabmit);
  }
}