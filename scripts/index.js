const editButton = document.querySelector('.profile__edit-button');
const editButtonPopup = document.querySelector('.popup_type_edit');
const editPopupClose = editButtonPopup.querySelector('.popup__close');
const editPopupName = editButtonPopup.querySelector('.popup__form-text_type_name');
const editPopupDescription = editButtonPopup.querySelector('.popup__form-text_type_description');
const formElement = editButtonPopup.querySelector('.popup__form');
const nameInput = document.querySelector('.profile__name');
const jodInput = document.querySelector('.profile__caption');

function closePopup(){
  editButtonPopup.classList.remove('popup_open');
}

function handleFormSubmit(event){
  event.preventDefault();

  nameInput.textContent = editPopupName.value;
  jodInput.textContent = editPopupDescription.value;
  closePopup();
}

function openPopup(){
  editButtonPopup.classList.add('popup_open');
  editPopupName.value = nameInput.textContent;
  editPopupDescription.value = jodInput.textContent;
}


editButton.addEventListener('click', openPopup);

editPopupClose.addEventListener('click', closePopup);

formElement.addEventListener('submit', handleFormSubmit);