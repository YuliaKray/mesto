const editButton = document.querySelector('.profile__edit-button');
const editButtonPopup = document.querySelector('.popup_type_edit');
const editPopupClose = editButtonPopup.querySelector('.popup__close');

console.log(editPopupClose);

function editButtonClick(){
  editButtonPopup.classList.add('popup_open');
}

editButton.addEventListener('click', editButtonClick);

function editButtonClickClose(){
  editButtonPopup.classList.remove('popup_open');
}

editPopupClose.addEventListener('click', editButtonClickClose);

