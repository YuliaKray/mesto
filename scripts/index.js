import { initialCards } from "./initialCards.js";

//Переменные для редактирования профиля
const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const editPopupClose = editPopup.querySelector('.popup__close');
const editPopupName = editPopup.querySelector('.popup__form-text_type_name');
const editPopupDescription = editPopup.querySelector('.popup__form-text_type_description');
const editFormElement = editPopup.querySelector('.popup__form');
const nameInput = document.querySelector('.profile__name');
const jodInput = document.querySelector('.profile__caption');

//Переменные для добавления картинок
const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup_type_add');
const addPopupClose = addPopup.querySelector('.popup__close');
const addFormElement = addPopup.querySelector('.popup__form')
const placeInput = addPopup.querySelector('.popup__form-text_type_place');
const imageInput = addPopup.querySelector('.popup__form-text_type_image-link');
const cardTemplate = document.querySelector('.card-template');
const cardsGrid = document.querySelector('.cards');

//Переменные для попапа просмотра картинки
const imagePopup = document.querySelector('.popup_type_image');
const imagePopupClose = imagePopup.querySelector('.popup__close');
const bigImage = imagePopup.querySelector('.popup__image');
const captionImage = imagePopup.querySelector('.popup__caption');

//Функции открытия попапов
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

//Функция закрытия попапов
function closePopup(popup){
  popup.classList.remove("popup_opened");
}

//Функция для сохранения редактирования профиля
function handleEditFormSubmit(event){ 
  event.preventDefault();

  nameInput.textContent = editPopupName.value;
  jodInput.textContent = editPopupDescription.value;
  closePopup(editPopup);
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

  const deleteButton = cardElement.querySelector('.card__delete');
  const likeButton = cardElement.querySelector('.card__like');

  function handleDelete() {
    cardElement.remove();
  }
  function handleLike() {
    likeButton.classList.toggle('card__like_active');
  }

  deleteButton.addEventListener('click', handleDelete);
  likeButton.addEventListener('click', handleLike);

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

  closePopup(addPopup);
}

//Функция добавляет массив карточек в изначальный грид-контейнер CARD
const addCardElement = (cardElement) =>{
  cardsGrid.append(cardElement)
}

//Функция добавляет новую карточку в начало
const addNewCardElement = (cardElement) =>{
    cardsGrid.prepend(cardElement)
}

//forEach делает действие, которое записано в функции, с каждым элементом массива
//initialCards - название изначального массива 
initialCards.forEach((card) => {
  addCardElement(createCardElement(card));
});


//Слушатели открытия попапов
editButton.addEventListener('click', () => {
  openPopup(editPopup);
  editPopupName.value = nameInput.textContent;
  editPopupDescription.value = jodInput.textContent;
}); 

addButton.addEventListener('click', () => {
  openPopup(addPopup)
});

//Слушатели для закрытия попапов
editPopupClose.addEventListener('click', () => {
  closePopup(editPopup)
}); 

addPopupClose.addEventListener('click', () => {
  closePopup(addPopup)
});

imagePopupClose.addEventListener('click', () => {
  closePopup(imagePopup)
});

//Нажатие на "сохранить" сохранит редакцию профиля 
editFormElement.addEventListener('submit', handleEditFormSubmit); 

addFormElement.addEventListener('submit', handleAddFormSubmit);