import Popup from "./Popup.js";
// import { FormValidator, config} from "./FormValidator.js";


export class PopupWithForm extends Popup () {
  constructor(popupSelector, handleFormSabmit) {
    super(popupSelector);
    this._handleFormSabmit = handleFormSabmit;
  }

  _getInputValues() {
    const inputArray = document.querySelectorAll('.popup__form-text');
    inputArray.forEach((input) => {
      const inputObj = {
        [input.name]: input.value
      }
      return inputObj;
    })
    
  }

  close() {
    // тут еще надо ресет формы добавить
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();

    super.popupSelector.addEventListener('sabmit', () => {this._handleFormSabmit});
    // (event) => {
    //   event.preventDefault();

    //   this._getInputValues();
    //   this.close();
    // })
    // formEditElement.addEventListener('submit', handleEditFormSubmit); 

  }
}