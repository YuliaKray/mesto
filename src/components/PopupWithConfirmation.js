import Popup from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSabmit) {
  super(popupSelector);
  this._handleFormSabmit = handleFormSabmit; //функция сохранения данных
  // this._handleClose = handleClose;

  // this._inputArray = this._popup.querySelectorAll('.popup__form-text');
  this._form = this._popup.querySelector('.popup__form');

  this._handleFormSabmit = this._handleFormSabmit.bind(this);
}

setEventListeners() {
  super.setEventListeners();

  //Добавление слушателя сохранения формы
  this._form.addEventListener('submit', (event) => {
    event.preventDefault();

    this._handleFormSabmit()//this._getInputValues());      
    // this.close();
  });
}
}


