import { initialCards } from "./initialCards.js";
import Card from "./Card.js";
import { FormValidator, config} from "./FormValidator.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import Section from "./Section.js";

//Переменные для редактирования профиля
const buttonEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupEditName = popupEdit.querySelector('.popup__form-text_type_name');
const popupEditDescription = popupEdit.querySelector('.popup__form-text_type_description');
const formEditElement = popupEdit.querySelector('.popup__form');

//Переменные для добавления картинок
const buttonAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_add');
const formAddElement = popupAdd.querySelector('.popup__form')
const cardTemplate = document.querySelector('.card-template');

//Вызов валидации форм
const validatorEdit = new FormValidator (config, formEditElement);
const validatorAdd = new FormValidator (config, formAddElement);

validatorEdit.enableValidation();
validatorAdd.enableValidation();


//Класс Section отвечает только за вставление карточек в грид-контейнер
const section = new Section( { 
  // items: initialCards,
  renderer: (item) => {
    section.addInitialCards(createCard(item, cardTemplate))
  }
}, '.cards')


//Создание попапа данных пользователя для вставления в section profile
const userInfo = new UserInfo ('.profile__name', '.profile__caption');


// Создание попапа большой картинки
const popupImage = new PopupWithImage ('.popup_type_image');


//Создание попапа редактирования профиля
const popupEditForm = new PopupWithForm ('.popup_type_edit', (event) => {
  event.preventDefault();

  userInfo.setUserInfo(popupEditForm._getInputValues());
  popupEditForm.close();
});


//Создание попапа добавления картинки
const popupAddForm = new PopupWithForm ('.popup_type_add', (event) => {
  event.preventDefault();

  const input = popupAddForm._getInputValues();
  const name = input.place;
  const link = input.link;
  const cardData = {
    name,
    link,
  };
  
  section.addItem(createCard(cardData, cardTemplate)); //созданная карточка встраивается в разметку

  formAddElement.reset();
  validatorAdd.toggleButtonValidity();
  
  popupAddForm.close();
})


//Функция создания карточки из класса
const createCard = (cardData, cardTemplate) => {
  const cardCreation = new Card (cardData, cardTemplate, () => {
    popupImage.open(cardData);
  }); 
  return cardCreation.createCardElement();
}


//Метод добавляет в разметку изначальный массив карточек
section.renderItems(initialCards);


//Слушатели открытия попапов
buttonEdit.addEventListener('click', () => {
  popupEditForm.open();
  const info = userInfo.getUserInfo();
  popupEditName.value = info.name;
  popupEditDescription.value = info.jod
});

// buttonAdd.addEventListener('click', openPopupAdd);
buttonAdd.addEventListener('click', () => {popupAddForm.open()});

//Нажатие на "сохранить" сохранит редакцию профиля 
formEditElement.addEventListener('submit', popupEditForm._handleFormSabmit); 

formAddElement.addEventListener('submit', popupAddForm._handleFormSabmit);