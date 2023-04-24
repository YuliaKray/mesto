import { initialCards } from "./initialCards.js";

//Переменные для редактирования профиля
const buttonEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupEditName = popupEdit.querySelector('.popup__form-text_type_name');
const popupEditDescription = popupEdit.querySelector('.popup__form-text_type_description');
const formEditElement = popupEdit.querySelector('.popup__form');
const nameInput = document.querySelector('.profile__name');
const jodInput = document.querySelector('.profile__caption');

//Переменные для добавления картинок
const buttonAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_add');
const formAddElement = popupAdd.querySelector('.popup__form')
const placeInput = popupAdd.querySelector('.popup__form-text_type_place');
const imageInput = popupAdd.querySelector('.popup__form-text_type_image-link');
const cardTemplate = document.querySelector('.card-template');
const cardsGrid = document.querySelector('.cards');

//Переменные для попапа просмотра картинки
const imagePopup = document.querySelector('.popup_type_image');
const bigImage = imagePopup.querySelector('.popup__image');
const captionImage = imagePopup.querySelector('.popup__caption');

const popupArray = Array.from(document.querySelectorAll('.popup'));


//Функции открытия попапов
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupEsc);
}

//Функция открытия попапа редактирования профиля
function openPopupEdit() {
  openPopup(popupEdit);
  popupEditName.value = nameInput.textContent;
  popupEditDescription.value = jodInput.textContent;
}

//Функиця закроет попап при нажатии на esc
function closePopupEsc(event) {
  const popupOpened = document.querySelector('.popup_opened');
  if (event.key === "Escape") {
    closePopup(popupOpened);
  } 
}

//Функция закрытия попапов
function closePopup(popup){
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePopupEsc);

  const inputsArray = Array.from(popup.querySelectorAll('.popup__form-text'));
  inputsArray.forEach(function(input) {
    const errorElement = popup.querySelector(`#error-${input.name}`);
    
    setInputValidState({ inputErrorClass: 'popup__form-text_invalid', errorClass: 'popup__error-message_visible' }, input, errorElement)
  })
}

//Функция для сохранения редактирования профиля
function handleEditFormSubmit(event){ 
  event.preventDefault();

  nameInput.textContent = popupEditName.value;
  jodInput.textContent = popupEditDescription.value;
  closePopup(popupEdit);
}

//Функция для копирования массива картинок
const createCardElement = (cardData) => {
  const cardElement = cardTemplate.content.querySelector('.card').cloneNode(true);
  const cardName = cardElement.querySelector('.card__text');
  const cardImage = cardElement.querySelector('.card__image');
  cardName.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  cardImage.addEventListener('click', () => openImagePopup(cardData));

  const buttonDelete = cardElement.querySelector('.card__delete');
  const buttonLike = cardElement.querySelector('.card__like');

  function handleDelete() {
    cardElement.remove();
  }
  function handleLike() {
    buttonLike.classList.toggle('card__like_active');
  }

  buttonDelete.addEventListener('click', handleDelete);
  buttonLike.addEventListener('click', handleLike);

  return cardElement;
}

//Функция для открытия попапов картинок
function openImagePopup(cardData) {
  captionImage.textContent = cardData.name
  bigImage.alt = cardData.name;
  bigImage.src = cardData.link;
  
  openPopup(imagePopup);
}

//Функция добавляет новую карточку, которую вводят в input 
function handleAddFormSubmit(event){
  event.preventDefault();

  const name = placeInput.value;
  const link = imageInput.value;
  const cardData = {
    name,
    link,
  };
  
  addNewCardElement(createCardElement(cardData));
  
  formAddElement.reset();
  toggleButtonValidity({ submitButtonSelector: '.popup__submit-button', inactiveButtonClass: 'popup__submit-button_disabled', }, formAddElement);
  
  closePopup(popupAdd);
}

//Функция добавляет массив карточек в изначальный грид-контейнер CARD
const addCardElement = (cardTemplate) =>{
  cardsGrid.append(cardTemplate)
}

//Функция добавляет новую карточку в начало
const addNewCardElement = (cardTemplate) =>{
    cardsGrid.prepend(cardTemplate)
}

//Функция закрывает попапы, если нажать на оверлей и крестик
function closePopupMouse(popupArray) {
  popupArray.forEach((popup) => {
     popup.addEventListener('click', (event) => {
      if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) { 
        closePopup(popup)
      }
    }) 
  })
}

closePopupMouse(popupArray); //вызаем функцию закрытия попапа через оверлей и крестик

//forEach делает действие, которое записано в функции, с каждым элементом массива
//initialCards - название изначального массива 
initialCards.forEach((card) => {
  addCardElement(createCardElement(card));
});


//Слушатели открытия попапов
buttonEdit.addEventListener('click', openPopupEdit);

buttonAdd.addEventListener('click', () => {
  openPopup(popupAdd)
});

//Нажатие на "сохранить" сохранит редакцию профиля 
formEditElement.addEventListener('submit', handleEditFormSubmit); 

formAddElement.addEventListener('submit', handleAddFormSubmit);



//const popupEditClose = popupEdit.querySelector('.popup__close');
//const popupAddClose = popupAdd.querySelector('.popup__close');
//const imagePopupClose = imagePopup.querySelector('.popup__close');


//Старый вариант слушателя для открытия попапа редактирования
//buttonEdit.addEventListener('click', () => {
  //openPopup(popupEdit);
  //popupEditName.value = nameInput.textContent;
  //popupEditDescription.value = jodInput.textContent;
//}

//Слушатели для закрытия попапов (теперь не нужны, 
//так как это реализована в функции closePopupMouse)

//popupEditClose.addEventListener('click', () => {
//  closePopup(popupEdit)
//});

//popupAddClose.addEventListener('click', () => {
//  closePopup(popupAdd)
//});

//imagePopupClose.addEventListener('click', () => {
//  closePopup(imagePopup)
//});