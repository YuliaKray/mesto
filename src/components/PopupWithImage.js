import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._bigImage = this._popup.querySelector(".popup__image");
    this._captionImage = this._popup.querySelector(".popup__caption");
  }

  open(cardData) {
    this._captionImage.textContent = cardData.name;
    this._bigImage.alt = cardData.name;
    this._bigImage.src = cardData.link;

    super.open();
  }
}