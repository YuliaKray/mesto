import { initialCards } from "./initialCards.js";
import Card from "./Card.js";
import { FormValidator, config} from "./FormValidator.js";
import { openPopup, closePopup } from "./utils.js"

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


const popupArray = Array.from(document.querySelectorAll('.popup'));

//Вызов валидации форм
const validatorEdit = new FormValidator (config, formEditElement);
const validatorAdd = new FormValidator (config, formAddElement);

validatorEdit.enableValidation();
validatorAdd.enableValidation();


//Функция открытия попапа редактирования профиля
function openPopupEdit() {
  validatorEdit.resetForm();
  
  openPopup(popupEdit);
  popupEditName.value = nameInput.textContent;
  popupEditDescription.value = jodInput.textContent;
}

//Функция отрытия попапа добавления картинок
function openPopupAdd() {
  validatorAdd.resetForm();

  openPopup(popupAdd);
}


//Функция для сохранения редактирования профиля
function handleEditFormSubmit(event){ 
  event.preventDefault();

  nameInput.textContent = popupEditName.value;
  jodInput.textContent = popupEditDescription.value;
  closePopup(popupEdit);
}


//Функция создания карточки из класса
function createCard(cardData, cardTemplate) {
  const cardCreation = new Card (cardData, cardTemplate); 
  return cardCreation.createCardElement();
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
  
  addNewCardElement(createCard(cardData, cardTemplate)); //созданная карточка встраивается в разметку

  formAddElement.reset();
  validatorAdd.toggleButtonValidity();
  
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
  addCardElement(createCard(card, cardTemplate)); //изначальный массив встраивается в разметку с помощью класса
});

//Слушатели открытия попапов
buttonEdit.addEventListener('click', openPopupEdit);

buttonAdd.addEventListener('click', openPopupAdd);

//Нажатие на "сохранить" сохранит редакцию профиля 
formEditElement.addEventListener('submit', handleEditFormSubmit); 

formAddElement.addEventListener('submit', handleAddFormSubmit);

