//Функция для открытия попапов картинок
export function openImagePopup(cardData) {
  //Переменные для попапа просмотра картинки
  const imagePopup = document.querySelector('.popup_type_image');
  const bigImage = imagePopup.querySelector('.popup__image');
  const captionImage = imagePopup.querySelector('.popup__caption');

  captionImage.textContent = cardData.name
  bigImage.alt = cardData.name;
  bigImage.src = cardData.link;
  
  openPopup(imagePopup);

}

//Функции открытия попапов
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupEsc);
}

//Функиця закроет попап при нажатии на esc
export function closePopupEsc(event) {
  if (event.key === "Escape") {
    const popupOpened = document.querySelector('.popup_opened');

    closePopup(popupOpened);
  } 
}

//Функция закрытия попапов
export function closePopup(popup){
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePopupEsc);
}
