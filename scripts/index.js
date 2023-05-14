import { initialCards } from "./initialCards.js";
import Card from "./Card.js";
import { FormValidator, config} from "./FormValidator.js";

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

//Вызов валидации форм
const validatorEdit = new FormValidator (config, formEditElement);
const validatorAdd = new FormValidator (config, formAddElement);

validatorEdit.enableValidation();
validatorAdd.enableValidation();

//Функции открытия попапов
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupEsc);
}

//Функция для отчистки ошибок при повторном открытиии попапа
function cleanFormError(popup){
  
  const inputsArray = Array.from(popup.querySelectorAll('.popup__form-text'));
  inputsArray.forEach((input) => {
    const errorElement = popup.querySelector(`#error-${input.name}`);
    
    if (popup === popupEdit) {
      validatorEdit._setInputValidState(input, errorElement);
      validatorEdit._toggleButtonValidity();
    } else {
      validatorAdd._setInputValidState(input, errorElement);
      validatorAdd._toggleButtonValidity();
    }
  })
}

//Функция открытия попапа редактирования профиля
function openPopupEdit() {
  cleanFormError(popupEdit);
  
  openPopup(popupEdit);
  popupEditName.value = nameInput.textContent;
  popupEditDescription.value = jodInput.textContent;
}

//Функция отрытия попапа добавления картинок
function openPopupAdd() {
  cleanFormError(popupAdd);

  openPopup(popupAdd);
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
}

//Функция для сохранения редактирования профиля
function handleEditFormSubmit(event){ 
  event.preventDefault();

  nameInput.textContent = popupEditName.value;
  jodInput.textContent = popupEditDescription.value;
  closePopup(popupEdit);
}

//Функция для открытия попапов картинок
export function openImagePopup(cardData) {
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
  
  const cardCreation = new Card (cardData, cardTemplate); 

  addNewCardElement(cardCreation.createCardElement())
  
  formAddElement.reset();
  validatorAdd._toggleButtonValidity()
  
  closePopup(popupAdd);
}

//Функция добавляет массив карточек в изначальный грид-контейнер CARD
const addCardElement = (cardTemplate) =>{
  cardsGrid.append(cardTemplate);
}

//Функция добавляет новую карточку в начало
const addNewCardElement = (cardTemplate) =>{
  cardsGrid.prepend(cardTemplate);
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
  const cardCreation = new Card (card, cardTemplate)
  addCardElement(cardCreation.createCardElement());
});

//Слушатели открытия попапов
buttonEdit.addEventListener('click', openPopupEdit);

buttonAdd.addEventListener('click', openPopupAdd);

//Нажатие на "сохранить" сохранит редакцию профиля 
formEditElement.addEventListener('submit', handleEditFormSubmit); 

formAddElement.addEventListener('submit', handleAddFormSubmit);
