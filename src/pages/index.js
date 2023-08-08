import './index.css';
import { config } from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";

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


const avatarImage = document.querySelector('.profile__image');
const popupAvatar = document.querySelector('.popup_type_avatar-edit');


let userID = null;

//Вызов валидации форм
const validatorEdit = new FormValidator (config, formEditElement);
const validatorAdd = new FormValidator (config, formAddElement);
const validatorAvatar = new FormValidator (config, popupAvatar.querySelector('.popup__form'));

validatorEdit.enableValidation();
validatorAdd.enableValidation();
validatorAvatar.enableValidation();


// Api
const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-68",
  headers: {
    authorization: "46f36a85-551d-499f-bb88-7f282b6e36a1",

  }
})

//Promise.all получаем данные вместе
api.getApiInfo().then(([info, initialCards]) => {
  userID = info._id;//Получение информации о пользователе с сервера и вставления в разметку
  userInfo.setUserInfo(info);
  section.renderItems(initialCards); //Метод добавляет в разметку изначальный массив карточек
})
.catch((err) => {
  console.log(err);
})


//Класс Section отвечает только за вставление карточек в грид-контейнер
const section = new Section( { 
  renderer: (item) => {
    section.addInitialCard(createCard(userID, item, cardTemplate))
  }
}, '.cards')


//Создание попапа данных пользователя для вставления в section profile
const userInfo = new UserInfo ('.profile__name', '.profile__caption', '.profile__image');


// Создание попапа большой картинки
const popupImage = new PopupWithImage ('.popup_type_image');

popupImage.setEventListeners();

//Создание попапа редактирования профиля
const popupEditForm = new PopupWithForm ('.popup_type_edit', (inputValues) => {
  //Редактирование профиля и отправления данных на сервер
  popupEditForm.renderLoading(true);

  api.editProfile(inputValues).then((inputValues) => {
    userInfo.setUserInfo(inputValues);
    popupEditForm.close();
  }).catch((err) => {
    console.log(err)
  }).finally(() => {popupEditForm.renderLoading(false)});

  }, () => {
  validatorEdit.resetForm();
});

popupEditForm.setEventListeners();

//Создание попапа изменения аватара профиля
const popupAvatarForm = new PopupWithForm('.popup_type_avatar-edit', (inputValues) => {
  
  popupAvatarForm.renderLoading(true);

  api.setNewAvatar(inputValues).then((info) => {
    userInfo.setUserInfo(info);
    popupAvatarForm.close();
  }).catch((err) => {
    console.log(err)
  }).finally(() => {popupAvatarForm.renderLoading(false)});

}, () => {
  validatorAvatar.resetForm();
})

popupAvatarForm.setEventListeners();

//Создание попапа добавления картинки
const popupAddForm = new PopupWithForm ('.popup_type_add', (inputValues) => {
  popupAddForm.renderLoading(true);

  api.generateCardElement(inputValues).then((inputValues) => {
    section.addItem(createCard(userID, inputValues, cardTemplate)); //созданная карточка встраивается в разметку
    popupAddForm.close();
  }).catch((err) => {
    console.log(err)
  }).finally(() => {popupAddForm.renderLoading(false)})

  }, () => {
  validatorAdd.resetForm();
})

popupAddForm.setEventListeners();

//Создание попапа удаления карточки
const popupDeleteCard = new PopupWithConfirmation('.popup_type_delete', (cardId, cardCreation) => {
  api.deleteCardElement(cardId).then(() => {
    cardCreation.handleDelete();
    popupDeleteCard.close();
  }).catch((err) => {console.log(err)});    
});

popupDeleteCard.setEventListeners();


//Функция создания карточки из класса
const createCard = (userID, cardData, cardTemplate) => {

  const cardCreation = new Card (userID, cardData, cardTemplate, (cardData) => {
    popupImage.open(cardData);
  }, 
  (cardId, cardCreation) => {
    popupDeleteCard.open(cardId, cardCreation)
  }, 
  (cardCreation) => {
    if (cardCreation.isLiked()) {
      //delete like
      api.deleteLike(cardData).then((res) => {
        console.log('тут есть мой лайк');
        cardCreation.updateLikes(res.likes);
      }).catch((err) => {console.log(err)});
      
    } else {
       // set like
    api.setLike(cardData).then((res) => {
      console.log("Поставила лайк");
      cardCreation.updateLikes(res.likes);
    }).catch((err) => {console.log(err)});
    }
  }); 
  return cardCreation.createCardElement()
}


//Слушатели открытия попапов
buttonEdit.addEventListener('click', () => {
  popupEditForm.open();
  const info = userInfo.getUserInfo();
  popupEditName.value = info.name;
  popupEditDescription.value = info.about;
});

buttonAdd.addEventListener('click', () => {popupAddForm.open()});

avatarImage.addEventListener('click', () => {popupAvatarForm.open()})


//ссылки на картинки
// https://klike.net/uploads/posts/2023-02/1677566911_3-69.jpg
// https://mobimg.b-cdn.net/v3/fetch/49/49e7e3246c562e1393f98f74e87084e1.jpeg

