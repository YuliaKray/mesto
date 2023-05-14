import { openImagePopup } from "./index.js";

class Card {
  constructor (cardData, cardTemplate) {
    this._cardData = cardData;
    this._cardTemplate = cardTemplate;
  }

  //Метод для передачи нужных названий и ссылки для создания карточки
  _generateCardElement = () => {
    this._cardElement = this._cardTemplate.content.querySelector('.card').cloneNode(true);
    this._cardElement.querySelector('.card__text').textContent = this._cardData.name;
    this._cardElement.querySelector('.card__image').src = this._cardData.link;
    this._cardElement.querySelector('.card__image').alt = this._cardData.name;
  }

  //Метод удаления карточки
  _handleDelete = () => {
    this._cardElement.remove();
  }

  //Метод лайка карточки
  _handleLike = (button) => {
    button.classList.toggle('card__like_active');
  }

  //Всех слушатели, которые есть у карточки
  _setListeners = () => {
    const buttonDelete = this._cardElement.querySelector('.card__delete');
    const buttonLike = this._cardElement.querySelector('.card__like');

    buttonDelete.addEventListener('click', this._handleDelete);
    buttonLike.addEventListener('click', () => {this._handleLike(buttonLike)});
    //Слушатель нажатия на картинку и открытия зуум попапа
    this._cardElement.querySelector('.card__image').addEventListener('click', () => {openImagePopup(this._cardData)});
  }

  //метод для возврата карточки
  createCardElement = () => {
    this._generateCardElement();
    this._setListeners();
    return this._cardElement;
  }

}

export default Card;

//Функция для копирования массива картинок
// const createCardElement = (cardData) => {
//   const cardElement = cardTemplate.content.querySelector('.card').cloneNode(true);
//   const cardName = cardElement.querySelector('.card__text');
//   const cardImage = cardElement.querySelector('.card__image');
//   cardName.textContent = cardData.name;
//   cardImage.src = cardData.link;
//   cardImage.alt = cardData.name;
// //слушатель открытия попапа зум карточки
//   cardImage.addEventListener('click', () => openImagePopup(cardData));

//   const buttonDelete = cardElement.querySelector('.card__delete');
//   const buttonLike = cardElement.querySelector('.card__like');
// // функция удаления карточки
//   function handleDelete() {
//     cardElement.remove();
//   }
//   //функция лайка карточки
//   function handleLike() {
//     buttonLike.classList.toggle('card__like_active');
//   }
// //слушатели кнопок лайка и удаления
//   buttonDelete.addEventListener('click', handleDelete);
//   buttonLike.addEventListener('click', handleLike);

//   return cardElement;
// }
