export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);

    this._handleEscClose = this._handleEscClose.bind(this);
    this.close = this.close.bind(this)
  }

  //Метод закрывает попап при нажатии на escape
  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  //Метод открытия попапа
  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener('keydown', this._handleEscClose);
  }

  //Метод закрытия попапа
  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', this._handleEscClose);
  }

  //Метод навешивает слушатели для закрытия попапа
  setEventListeners() {
    this._popup.addEventListener('click', (event) => {
      if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) { 
        this.close();
          }
      })
  }
}
