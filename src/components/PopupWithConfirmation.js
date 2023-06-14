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

// //Метод собирает значения (value) всех инпутов формы
// _getInputValues() {
//   const inputObj = {};
  
//   this._inputArray.forEach(input => {
//     inputObj[input.name] = input.value;
//   });
//   return inputObj;
// }

// open() {  //перезаписываю, чтобы кнопка при первом открытии была неактивна
//   this._handleClose()
//   super.open();
// }

// close() {
//   // this._form.reset();
//   this._handleClose();
//   super.close();
// }

setEventListeners() {
  super.setEventListeners();

  //Добавление слушателя сохранения формы
  this._form.addEventListener('submit', (event) => {
    event.preventDefault();

    this._handleFormSabmit()//this._getInputValues());      
    this.close();
  });
}
}


