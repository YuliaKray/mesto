const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

//Переменные для редактирования профиля
const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const editPopupClose = editPopup.querySelector('.popup__close');
const editPopupName = editPopup.querySelector('.popup__form-text_type_name');
const editPopupDescription = editPopup.querySelector('.popup__form-text_type_description');
const formElement = editPopup.querySelector('.popup__form');
const nameInput = document.querySelector('.profile__name');
const jodInput = document.querySelector('.profile__caption');

//Переменные для добавления картинок
const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup_type_add');
const addPopupClose = addPopup.querySelector('.popup__close');
const cardTemplate = document.querySelector('.card-template');
const cardsGrid = document.querySelector('.cards');


//Функции открытия попапов
function openPopup(popup) {
  popup.classList.add("popup_open");
  //editPopupName.value = nameInput.textContent;  //Спорный вариант, надо думать еще
  //editPopupDescription.value = jodInput.textContent;
}
//function openPopupEdit(){   Вариант старого открытия попапа
//  editPopup.classList.add('popup_open');
//  editPopupName.value = nameInput.textContent;
//  editPopupDescription.value = jodInput.textContent;
//}

//Функция закрытия попапов
function closePopup(popup){
  popup.classList.remove("popup_open");
}

//Функция для сохранения редактирования профиля
function handleFormSubmit(event){ 
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
  cardName.innerHTML = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

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

//Функция добавляет массив карточек в изначальный грид-контейнер CARD
const addCardElement = (cardElement) =>{
  cardsGrid.prepend(cardElement)
}

//forEach делает дествие, которое записано в функции, с каждым элементом массива
//initialCards - название изначального массива 
initialCards.forEach((card) => {
  addCardElement(createCardElement(card));
});



//Слушатели открытия попапов
editButton.addEventListener('click', () => {
  openPopup(editPopup);
  editPopupName.value = nameInput.textContent;  //Спорный вариант, надо думать еще
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

//Нажатие на "сохранить" сохранит редакцию профиля 
formElement.addEventListener('submit', handleFormSubmit); 