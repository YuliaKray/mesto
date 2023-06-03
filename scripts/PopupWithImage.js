import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._bigImage = this._popupSelector.querySelector(".popup__image");
    this._captionImage = this._popupSelector.querySelector(".popup__caption");
  }

  open(cardData) {
    super.open();
  
    this._captionImage.textContent = cardData.name;
    this._bigImage.alt = cardData.name;
    this._bigImage.src = cardData.link;
  }
}