export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  _handleEscClose(event){
    if (event.key === "Escape") {
      const popupOpened = document.querySelector('.popup_opened');
  
      this._close(popupOpened);
    }
  }

  open(){
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener('keydown', () => {this._handleEscClose()});
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener('keydown', () => {this._handleEscClose()});
  }

  setEventListeners() {
    const popupArray = Array.from(document.querySelectorAll('.popup'));

    popupArray.forEach((popup) => {
      popup.addEventListener('click', (event) => {
       if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) { 
         this._close();
       }
     }) 
   })
  }
}
