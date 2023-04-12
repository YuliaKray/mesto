import { initialCards } from "./initialCards.js";

//Переменные для редактирования профиля
const buttonEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupEditClose = popupEdit.querySelector('.popup__close');
const popupEditName = popupEdit.querySelector('.popup__form-text_type_name');
const popupEditDescription = popupEdit.querySelector('.popup__form-text_type_description');
const formEditElement = popupEdit.querySelector('.popup__form');
const nameInput = document.querySelector('.profile__name');
const jodInput = document.querySelector('.profile__caption');

//Переменные для добавления картинок
const buttonAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_add');
const popupAddClose = popupAdd.querySelector('.popup__close');
const formAddElement = popupAdd.querySelector('.popup__form')
const placeInput = popupAdd.querySelector('.popup__form-text_type_place');
const imageInput = popupAdd.querySelector('.popup__form-text_type_image-link');
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

  closePopup(popupAdd);
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
buttonEdit.addEventListener('click', () => {
  openPopup(popupEdit);
  popupEditName.value = nameInput.textContent;
  popupEditDescription.value = jodInput.textContent;
}); 

buttonAdd.addEventListener('click', () => {
  openPopup(popupAdd)
});

//Слушатели для закрытия попапов
popupEditClose.addEventListener('click', () => {
  closePopup(popupEdit)
}); 

popupAddClose.addEventListener('click', () => {
  closePopup(popupAdd)
});

imagePopupClose.addEventListener('click', () => {
  closePopup(imagePopup)
});

//Нажатие на "сохранить" сохранит редакцию профиля 
formEditElement.addEventListener('submit', handleEditFormSubmit); 

formAddElement.addEventListener('submit', handleAddFormSubmit);